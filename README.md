# BüsoS Poster Map



## Interaktive Karte

Während der Vorbereitungen haben wir für die Wahlvorbereitungen der anstehenden Kommunalwahlen in Flensburg gefragt, in welchem Quartier und an welcher Straße unsere Wahlplakate besonders attraktiv zur Geltung kommen können.

Dazu haben wir uns folgende Fragen gestellt:
- Wie sahen die Wahlergebnisse der letzten Kommunalwahl aus?
- Welche Wählergruppe lebt in dem jeweiligen Quatier?
- Wie können alle Mietglieder sehen wo plakatiert wurde?


## Technische Umsetzung

Nach diesen Überlegungen haben wir versucht die Polygone der Wahlkreise und Wahlbezirke der Stadt Flensburg zu bekommen, jedoch leider bis heute keine Antwort erhalten. So haben wir uns entschieden, die Geodaten der plakatierten Orte nach der Spezifikation [RFC 7946](https://geojson.org/) in einer GeoJSON Datei umzuwandeln und mittels der opensource Biblothek [LeafletJS](https://leafletjs.com/) auf Basis der [OpenSteetMap](https://www.openstreetmap.de/) Karte dazustellen. 


## Ideielle Zielsetzung

Unser Ziel ist es Interessierten eine übersichtliche Darstellung der plakatierten Orte anzubieten und zum Gespräch einzuladen. Wir freuen uns über Feedback.
