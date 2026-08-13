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

## Publikacja na domenie z home.pl

### Wariant A – masz w home.pl także hosting (serwer WWW)

1. Zaloguj się do panelu [home.pl](https://home.pl) i przejdź do usługi hostingu
   (Serwery WWW). Sprawdź lub ustaw hasło do konta FTP
   (Usługi → Twój serwer → Dostęp FTP).
2. Połącz się z serwerem przez **WebFTP** (wbudowany w panel home.pl) albo
   darmowy program **FileZilla** (host: adres serwera z panelu, np.
   `serwerNNNN.home.pl`, login i hasło FTP).
3. Wgraj do katalogu głównego domeny (najczęściej `public_html/`) całą zawartość
   tego repozytorium: `index.html`, folder `css/` i folder `assets/`.
4. Włącz **darmowy certyfikat SSL** dla domeny w panelu home.pl
   (WWW → Certyfikaty SSL), aby strona działała pod `https://`.
5. Gotowe – strona będzie widoczna pod Twoją domeną od razu po wgraniu plików.

### Wariant B – masz tylko domenę (bez hostingu)

Nie musisz dokupować hostingu – skorzystaj z darmowego GitHub Pages:

1. Scal ten branch do `main`, a następnie w ustawieniach repozytorium na GitHub:
   **Settings → Pages → Source: Deploy from a branch → `main` / root**.
2. W sekcji **Custom domain** wpisz swoją domenę (np. `www.twojadomena.pl`)
   i zaznacz „Enforce HTTPS" (certyfikat wystawi się automatycznie).
3. W panelu home.pl (Domeny → Twoja domena → Konfiguracja DNS) dodaj:
   - rekord **CNAME**: `www` → `<nazwa-konta>.github.io`
   - rekordy **A** dla domeny głównej (bez www): `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Zmiany DNS propagują się zwykle od kilku minut do kilku godzin.

### Po publikacji

- Podmień `FORM_EMAIL` i aktywuj FormSubmit (instrukcja niżej).
- Otwórz stronę na telefonie i sprawdź, czy przyciski „Zadzwoń i zamów"
  otwierają wybieranie numeru.

## Struktura

- `index.html` – cała treść strony (hero, pasek zaufania, katalog z cenami, strefa B2B, kontakt, stopka)
  oraz dane strukturalne SEO (schema.org: LocalBusiness + produkty z cenami)
- `css/style.css` – style (kolory z logo: ciemna zieleń `#1B5E33`, żółty `#FFD500`, biel)
- `assets/img/` – logo (`logo.jpg` – pełne, `logo-mark.png` – sam znak używany na stronie),
  zdjęcia produktów (`product-*.webp` – zoptymalizowane wersje używane na stronie) oraz
  oryginalne pliki źródłowe zdjęć
- `robots.txt` i `sitemap.xml` – pliki dla wyszukiwarek (wgraj razem ze stroną)

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
- **Zdjęcia produktów:** strona używa zoptymalizowanych plików `product-*.webp`
  w `assets/img/`. Aby podmienić zdjęcie, zapisz nowe pod tą samą nazwą
  (najlepiej zmniejszone do ok. 900 px szerokości).

## SEO – co jest zrobione i co robić dalej

Na stronie: meta title/description, adres kanoniczny, tagi Open Graph,
dane strukturalne schema.org (LocalBusiness + 4 produkty z cenami),
`robots.txt`, `sitemap.xml`, opisy alt zdjęć, szybkie ładowanie (WebP, mobile-first).

Po publikacji warto:
1. Dodać stronę do [Google Search Console](https://search.google.com/search-console)
   (weryfikacja domeny przez DNS w home.pl) i zgłosić `sitemap.xml`.
2. Założyć **Profil Firmy w Google** (Google Business Profile) z adresem
   Błagodać 1B, telefonem i linkiem do strony – kluczowe dla wyszukiwań lokalnych
   i widoczności w Mapach Google.
3. Zbierać opinie klientów w profilu Google.
4. Zadbać o linki do strony (katalogi branżowe, portale rolnicze, profil FB).
