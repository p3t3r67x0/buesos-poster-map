# BüsoS Poster Map


![Screenshot BüsoS Poster Map](https://github.com/p3t3r67x0/buesos-poster-map/blob/d028817d6e7dc55a9661540a94c3095b42a5b780/buesos_poster_map.png)



## Interaktive Karte

Während der Wahlvorbereitungen für die anstehenden Kommunalwahlen in Flensburg haben wir uns gefragt, in welchem Quartier und an welcher Straße unsere Wahlplakate besonders attraktiv zur Geltung kommen können.

Dazu haben wir uns folgende Fragen gestellt:
- Wie sahen die Wahlergebnisse der letzten Kommunalwahl aus?
- Welche Wählergruppe lebt in dem jeweiligen Quartier?
- Wie können alle Mitglieder sehen, wo plakatiert wurde?


## Technische Umsetzung

Wir haben bei der Stadt Flensburg eine Informationsfreiheitsanfrage eingereicht. Die Anfrage ist über das Büro des Wahlleiters der Stadt Flensburg gegangen. Wir haben die Polygonen der Wahlkreise und Wahlbezirke der Stadt Flensburg bekommen. Zusätzkich haben wir uns entschieden, die Koordinaten deder Orte an denen wir plakatiert haben nach der Spezifikation [RFC 7946](https://geojson.org/) in eine GeoJSON-Datei einzupflegen und mittels der Open Source Biblothek [LeafletJS](https://leafletjs.com/) auf Basis der [OpenSteetMap](https://www.openstreetmap.de/) Karte darzustellen. Für die Darstellung binden wir zwei Ebenen ein, die untere Ebene beinhaltet die Polygonen der Wahlbezirke und die obere Ebene die Koordinaten der Plakate.


## Idielle Zielsetzung

Unser Ziel ist es Interessierten eine übersichtliche Darstellung der plakatierten Orte anzubieten und zum Gespräch einzuladen. Wir freuen uns über Feedback.
