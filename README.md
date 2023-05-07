# BüsoS Poster Map



## Interaktive Karte

Während der Wahlvorbereitungen für die anstehenden Kommunalwahlen in Flensburg haben wir uns gefragt, in welchem Quartier und an welcher Straße unsere Wahlplakate besonders attraktiv zur Geltung kommen können.

Dazu haben wir uns folgende Fragen gestellt:
- Wie sahen die Wahlergebnisse der letzten Kommunalwahl aus?
- Welche Wählergruppe lebt in dem jeweiligen Quartier?
- Wie können alle Mitglieder sehen, wo plakatiert wurde?


## Technische Umsetzung

Nach diesen Überlegungen haben wir versucht die Polygone der Wahlkreise und Wahlbezirke der Stadt Flensburg zu bekommen, jedoch leider bis heute keine Antwort erhalten. So haben wir uns entschieden, die Geodaten der plakatierten Orte nach der Spezifikation [RFC 7946](https://geojson.org/) in eine GeoJSON-Datei einzupflegen und mittels der Open Source Biblothek [LeafletJS](https://leafletjs.com/) auf Basis der [OpenSteetMap](https://www.openstreetmap.de/) Karte darzustellen. 


## Idielle Zielsetzung

Unser Ziel ist es Interessierten eine übersichtliche Darstellung der plakatierten Orte anzubieten und zum Gespräch einzuladen. Wir freuen uns über Feedback.
