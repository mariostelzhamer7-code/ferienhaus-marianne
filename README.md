# Ferienhaus Marianne 1.1.3 🏡🌊

## Neu in Version 1.1.3 · 21. November 2026
- Bildschirmaufnahme des iPad 6 (Querformat) bestätigt zu große freie Fläche unter der Startseite in 1.1.2.
- Gezieltes Mittelmaß für ältere Touch-iPads: Logo, Titel, Schrift, Wetterfeld und fünf Startkacheln deutlich besser lesbar und größer, ohne zurück zum ursprünglichen übergroßen Layout zu wechseln.
- Vorhersage, untere Einstellungen und alle fünf Hauptkacheln bleiben im Querformat sichtbar; extra kurzer Viewport bekommt gesonderte Anpassung.
- Bestehender PC-Modus und größere Geräte unverändert, keine globale Skalierung von Bildern oder QR-Codes.
- Kein Eingriff in Gästedaten, Passwort, WLAN, Fotos, die sechs Radtouren oder sonstige Funktionen.
- Versionsanzeige 1.1.3 und aktualisierter PWA-Offline-Cache.

## Neu in Version 1.1.2 · 21. November 2026
- Spezielles kompaktes Querformat-Layout für ältere Touch-iPads wie das iPad der 6. Generation (9,7 Zoll / typische Browserbreite 1024 CSS-Pixel).
- Kleineres Logo, kompakterer Kopfbereich, Wetterkarte und fünf Startkacheln, mit besser erreichbarem Fußbereich; Ziel: Startseite ohne Scrollen auf dem Gäste-iPad.
- Sechs Ausflugskategorien bleiben gleich breit in zwei Reihen.
- Medienabfragen mit Touch-/Bildschirmgrößen-Bedingung: normale Desktop-Ansicht und größere Geräte bleiben unverändert. Kein CSS-Zoom, die Inhalte und QR-Codes werden nicht global verkleinert.
- Version 1.1.2 sichtbar auf Startseite und im Gastgeber-Bereich, neuer Offline-PWA-Cache.
- Die Fotodateien bleiben unverändert. Bereits quellseitig unscharfe Bilder lassen sich durch Layout-CSS allein nicht reparieren.

**App:** https://mariostelzhamer7-code.github.io/ferienhaus-marianne/

## Korrekturversion 1.1.1 · 18. November 2026
- Alle sechs Ausflugskategorien als gleichmäßiges 3 × 2 Raster bei breiten Displays, statt überbreiter „Familien & Kinder“-Kachel.
- Sichtbare Versionsnummer 1.1.1 auf Startseite und im Gastgeber-Bereich.
- Fotos werden ohne erzwungene Pixel-Darstellung gerendert. Eine GitHub-Automatisierung bearbeitet die vorhandenen 37 Ausflugs-/Restaurantbilder und sechs Radtourbilder für HD-Displays nach (scharfe Skalierung, hohe Bildqualität).
- Hinweis: Skalierung verbessert die Darstellung, stellt aber keine in kleineren Quellen fehlenden Originaldetails wieder her. Für echte hohe Detailauflösung benötigen wir höher auflösende Originaldateien.
- Bildauswahl, sonstiges Design und gespeicherte Gastdaten bleiben unverändert.


## Neu in Version 1.1 (18. November 2026)
- Sechste Ausflugskategorie **Radfahren & E-Bike** mit sechs Strecken: Wolfgangsee-Runde, Bad Ischl, Breitenberg, Drei-Seen, Schafberg/Eisenaualm und Postalm.
- 22-sprachige Fahrradbeschreibungen, Titel und Sicherheitshinweise sowie Distanz, Höhenmeter, geschätzte Fahrzeit und Schwierigkeit.
- QR-Codes zu den sechs offiziellen Fahrrad-Routen und Navigation zum hinterlegten Ziel oder Ausgangspunkt bei bisherigen Ausflügen und Wanderungen.
- Die hochgeladenen sechs Tourfotos werden als optimierte Offline-WebP-Dateien eingebunden; Nutzungsrechte sind vor öffentlicher Verteilung zu klären, insbesondere bei einem Foto mit sichtbarem Wasserzeichen.
- Hinweis zur offiziellen Drei-Seen-Tour: 76,3 km, 806 hm, 5h 36m. Der in der Planung genannte Wert von 63,6 km gehört nicht zu dieser offiziellen Routenvariante.
- Vorhandenes App-Design und lokale Gäste- und WLAN-Daten bleiben bestehen.

## Bisher in Version 1.0.4
- Alle fünf Ausflugskategorien, Untertitel und die Anzahl der Orte sind jetzt in allen 22 Sprachen übersetzt – darunter Spanisch, Dänisch und Griechisch.
- Die Detailbeschreibungen in 20 weiteren Sprachen wurden deutlich erweitert. Die langen, individuell ausgearbeiteten Texte stehen weiterhin in Deutsch und Englisch zur Verfügung; vollständig inhaltsgleiche Langübersetzungen sind noch nicht für jeden einzelnen Ort vorhanden.
- Keine Fotos-/Vergrößerungsschaltfläche mehr bei den einzelnen Detailseiten, weil wir pro Ziel genau ein Bild verwenden.
- Bessere Lesbarkeit im Dunkelmodus für Ortsnamen, Überschriften, Detailtexte und Warnhinweise.
- Die bereits eingespielten 37 Originalfotos einschließlich des aktualisierten Genussschmied-Fotos bleiben bestehen.
- Der externe Eventkalender bleibt wie vereinbart in seiner Originalsprache.

## Übernommen aus Version 1.0.3
- Design im Dashboard neben Sprache: **Auto / Hell / Dunkel**. Automatisch ist 08:00–20:00 Uhr hell und 20:00–08:00 Uhr dunkel, nach der iPad-Uhr. Auswahl wird lokal gespeichert.
- Kontrastreiche Gestaltung aller wesentlichen Seiten, QR-Codes bleiben weiß/schwarz und gut lesbar; größere Texte, verbesserter iPad-Querformatumbruch.
- Landschaftsbild im Dashboard läuft mit sanftem Übergang hinter der Wetteranzeige aus. Wetterquelle wird nur auf dem Dashboard nicht mehr angezeigt (im ausführlichen Wetterbereich vorhanden).
- Keine Entfernung, Fahrzeit, Karte oder Navigation in Detailseiten. Dafür möglichst offizielle Telefonnummer mit +43; wenn keine gesicherte Telefonnummer bekannt ist, kein Telefonfeld.
- Restaurant-Speisekarte und offizielle Website öffnen am Gäste-iPad ausschließlich ein vergrößertes QR-Fenster. Externe Websites und Menüs werden auf dem Smartphone des Gasts angesehen.
- Reservierungshinweise bei Restaurants entfernt.
- Neue UI-Texte und Knöpfe in 22 Sprachen; längere Eintragstexte auf Deutsch/Englisch, zusätzlich jeweils eine kurze lokale Beschreibung für die weiteren 20 Sprachen.
- **Version 1.0.4 · created by MS** im Gastgeber-Bereich.


## Fotos
Das neue Genussschmied-Foto wurde bereits über das bestehende Upload-Paket auf GitHub verarbeitet. Es ist kein weiterer Foto-Upload für 1.0.4 erforderlich.

## Sicherheit und Betrieb
Alle Gäste- und WLAN-Zugangsdaten bleiben im lokalen iPad-Speicher, niemals im öffentlichen GitHub-Repository. Der Browser-Passcode ist keine echte serverseitige Zugriffskontrolle. Beim Löschen von Safari-Website-Daten können lokale Einstellungen verloren gehen.

Für den richtigen Zeitwechsel muss die Uhrzeit und Zeitzone des iPads stimmen. Ohne Internet funktionieren die Offline-App und bereits zwischengespeicherte Fotos, aber aktuelle Wetter- und Veranstaltungshinweise nicht. Auch QR-Zielseiten auf dem Gäste-Smartphone können Internet benötigen.

## Bildrechte
Die bisher hochgeladenen 37 Fotos werden unverändert weitergenutzt. Prüfe bei selbst gefundenen Fotos die Nutzungsrechte für öffentliche Veröffentlichung.

Version 1.0.4 · created by MS.

## Korrektur-Build 1.0.4r2 · 18.11.2026
- QR-Codes kontrastreicher und für iPad schärfer (schwarz/weiß, weiße Ruhezone, passende Größe, geringer codierte Datenmenge bei langen Links).
- Verifizierte Speisekarten-Adresse für den Leopoldhof direkt verlinkt; Dorf-Alm-PDF bleibt erhalten.
- Wander-Schwierigkeitsstufen inklusive Farbsymbol und Übersetzung in 22 Sprachen in der Detailansicht sichtbar.
- Überflüssiger Zurück-Button in Gastgeber-Einstellungen entfernt; Sperren bleibt.
- Gastname in der Kopfzeile etwas größer; übriges Layout bleibt gleich.
- Geänderter Offline-Cache für zuverlässige Aktualisierung.
- Hinweis: Externe QR-Zielseiten können unabhängig von der App zeitweise ausfallen. Die hinterlegte Genussschmied-PDF 2026 war extern nicht sicher erreichbar und wurde nicht durch eine ältere Speisekarte ersetzt.
