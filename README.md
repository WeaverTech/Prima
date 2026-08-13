# PRIMA-AGRO – strona promocyjna (one-pager)

Responsywna strona-katalog firmy **PRIMA-AGRO Zaopatrzenie Rolne**: folie do sianokiszonki
Barbier Ensibal LEGEND, folie NeWrap i siatka rolnicza do pras. Celem strony jest generowanie
połączeń telefonicznych (przyciski „Zadzwoń i zamów”) oraz zapytań hurtowych B2B.

## Uruchomienie

Strona jest w pełni statyczna – wystarczy otworzyć `index.html` w przeglądarce
lub wgrać całość na dowolny hosting (np. przez FTP).

Podgląd lokalny:

```bash
python3 -m http.server 8000
# otwórz http://localhost:8000
```

## Struktura

- `index.html` – cała treść strony (hero, pasek zaufania, katalog z cenami, strefa B2B, kontakt, stopka)
- `css/style.css` – style (kolory z logo: ciemna zieleń `#1B5E33`, żółty `#FFD500`, biel)
- `assets/img/` – logo (SVG) i zdjęcia produktów (WebP)

## Jak edytować najważniejsze rzeczy

- **Ceny produktów:** w `index.html` znajdź komentarze `<!-- CENY: edytuj wartość poniżej -->`
  i zmień kwoty w elementach `card__price`.
- **Adres e-mail formularza B2B:** w skrypcie na dole `index.html` podmień
  `kontakt@primaagro.pl` na właściwą skrzynkę (komentarz `TODO`).
- **Zdjęcia produktów:** podmień pliki w `assets/img/` zachowując nazwy,
  najlepiej na własne zdjęcia produktowe.
