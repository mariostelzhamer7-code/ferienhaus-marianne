# Ferienhaus Marianne – Gäste-App 1.0

Kostenlose, statische Web-App für **ein iPad 6. Generation / iPadOS 17**, bevorzugt im Querformat.

## Starten
GitHub Pages: Settings → Pages → Deploy from a branch → main → /(root).

Anschließend in Safari öffnen und über Teilen → Zum Home-Bildschirm hinzufügen.

## Funktionen
- Gäste-Dashboard mit dem ausgewählten Wolfgangsee-Logo
- Wetter: GeoSphere Austria (erste 2–3 Tage, sofern API erreichbar) und MET Norway (7 Tage); klare Datenquellen und Offline-Status
- 5 Ausflugskategorien, Wanderhinweise zu geeignetem Schuhwerk, Adressen und Google Maps
- Restaurants und Cafés, einschließlich Restaurant Bürglstein
- 22 auswählbare Sprachen für die App-Bedienelemente
- Originalsprachiger Veranstaltungskalender über Wolfgangsee Tourismus (aktueller externer Link)
- Notfallnummern und lokale Gastgeber-Kontakte
- WLAN-Name, Passwort und QR-Code; Navigations-QR-Code für Ausflugsziele
- Gastgeber-Verwaltung mit lokal gesetztem Passwort: Gastname, Gästewechsel, Orte/Beschreibungen/Restaurants, Bilder, Sortierung, Ausblenden, Kontaktdaten
- 3-Minuten-Inaktivitäts-Rückkehr zur Startseite, dabei bleibt die Sprache erhalten; beim Gästewechsel zurück auf Deutsch
- Offline-Speicher für App-Hülle und gespeicherte Daten

## Wichtig vor dem Betrieb
1. Beim ersten Öffnen über das Zahnrad ein **eigenes Gastgeber-Passwort** festlegen. Das Passwort und die WLAN-Daten **niemals in dieses öffentliche Repository schreiben**.
2. Gastgebernummer, WLAN-Zugangsdaten und ggf. weitere Kontaktnummern über die App auf dem iPad eintragen.
3. Die Einstellungen und eigene Fotos sind **nur lokal** gespeichert (localStorage / IndexedDB). Beim Löschen der Safari-Website-Daten gehen sie verloren; es ist **kein Datenbackup** integriert.
4. Passwortschutz ist **nur lokal**. Der statische öffentliche Webcode bietet keine serverseitige Zugriffskontrolle.
5. Die Benutzeroberfläche ist auf 22 Sprachen vorbereitet. Die kuratierten Beschreibungen sind aktuell auf Deutsch und teilweise Englisch hinterlegt; fehlende Inhaltsübersetzungen müssen für eine vollständig lokalisierte Ausgabe nachgetragen werden.
6. Offizielle Veranstaltungen werden wegen fehlender lizenzierter Echtzeit-Schnittstelle nicht automatisch als einzelne Karten kopiert: Die App öffnet den aktuellen Kalender auf der offiziellen Website.
7. Fotos der Orte erscheinen, soweit lizenzierte Wikimedia-Bilder gefunden werden; alternativ können eigene Bilder im Gastgeberbereich hochgeladen werden. Nicht alle Orte haben bereits ein überprüftes Originalfoto.
8. Bei einem iPad, das ständig mit voller Helligkeit und Ladestrom läuft, Gerätetemperatur und Belüftung beachten.
9. GitHub Pages ist für statische Projektseiten gedacht und **nicht** für Checkout, Buchungen oder andere kommerzielle Transaktionen. Diese App enthält keine Buchungen oder Zahlungen.

## Externe Daten
- GeoSphere Austria: https://data.hub.geosphere.at/ (CC BY 4.0)
- MET Norway: https://api.met.no/ (CC BY 4.0)
- Wolfgangsee Veranstaltungskalender: https://wolfgangsee.salzkammergut.at/veranstaltungen/veranstaltungskalender.html
- QR Code JS: qrcodejs, MIT-Lizenz, als lokale Datei unter vendor/qrcode.min.js eingebunden; funktioniert offline.
- Wikimedia Commons: Nur Dateien mit freier Lizenz; Lizenz und Urheberangaben bitte prüfen.

Version 1.0 – created by MS.
