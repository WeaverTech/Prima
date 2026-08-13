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
- `assets/img/` – logo (`logo.jpg` – pełne, `logo-mark.png` – sam znak używany na stronie) i zdjęcia produktów (WebP)

## Jak edytować najważniejsze rzeczy

- **Ceny produktów:** w `index.html` znajdź komentarze `<!-- CENY: edytuj wartość poniżej -->`
  i zmień kwoty w elementach `card__price`.
- **Formularz B2B (FormSubmit):** formularz wysyła zapytania przez darmową usługę
  [FormSubmit](https://formsubmit.co) – bez zakładania konta. Aby go uruchomić:
  1. W skrypcie na dole `index.html` podmień wartość `FORM_EMAIL`
     (`kontakt@primaagro.pl`) na firmową skrzynkę e-mail.
  2. Wgraj stronę na hosting i wyślij testowe zapytanie z formularza.
  3. FormSubmit przyśle na tę skrzynkę jednorazowy e-mail aktywacyjny –
     kliknij w link potwierdzający. Od tej chwili każde zapytanie z formularza
     trafi na skrzynkę jako czytelna tabelka (firma, telefon, wiadomość).
- **Zdjęcia produktów:** podmień pliki w `assets/img/` zachowując nazwy,
  najlepiej na własne zdjęcia produktowe.
