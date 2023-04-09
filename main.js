fetch('/data/poster_buesos.geojson', {
// fetch('https://map.de/query/xxx', {
    method: 'GET'
})
.then((response) => {
    return response.json()
})
.then((data) => {
    addData(data);
})
.catch(function (error) {
    console.log(error);
})


const map = L.map('map').setView([54.7836, 9.4321], 14)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)


let geocoder = L.Control.Geocoder.nominatim()

if (typeof URLSearchParams !== 'undefined' && location.search) {
    // parse /?geocoder=nominatim from URL
    let params = new URLSearchParams(location.search)
    let geocoderString = params.get('geocoder')

    if (geocoderString && L.Control.Geocoder[geocoderString]) {
        console.log('Using geocoder', geocoderString)
        geocoder = L.Control.Geocoder[geocoderString]()
    } else if (geocoderString) {
        console.warn('Unsupported geocoder', geocoderString)
    }
}

const osmGeocoder = new L.Control.geocoder({
    query: 'Flensburg',
    position: 'topright',
    placeholder: 'Adresse oder Ort',
    defaultMarkGeocode: false
}).addTo(map)

osmGeocoder.on('markgeocode', e => {
    const bounds = L.latLngBounds(e.geocode.bbox._southWest, e.geocode.bbox._northEast)
    map.fitBounds(bounds)
})


function onMapClick(evt) {
    const latLngs = [evt.target.getLatLng()]
    const markerBounds = L.latLngBounds(latLngs)
    map.fitBounds(markerBounds)

    const array = evt.target.feature.properties.candidates
    const list = document.createElement('ul')

    list.classList.add('p-3')

    for (let i = 0; i < array.length; i++) {
        const item = document.createElement('li')
        const candidate = `<strong>${array[i][0]}</strong><br><p>${array[i][1]}, ${array[i][2]}</p>`

        item.classList.add('mb-2')
        item.innerHTML = candidate
        list.appendChild(item)
    }

    document.getElementById('details').innerHTML = ''
    document.getElementById('details').appendChild(list)

    evt.preventDefault
}


function onEachFeature(feature, layer) {
    const label = `Wahlkreis ${feature.properties.name}`

    layer.on('click', function(evt) {
        onMapClick(evt)
    })

    layer.bindTooltip(label, {
        permanent: false,
        direction: 'top'
    }).openTooltip()
}


function addData(data) {
    const layer = L.geoJson(data, {
        onEachFeature: onEachFeature
    }).addTo(map)

    map.fitBounds(layer.getBounds(), {padding: [0, 0, 0, 0]})
}