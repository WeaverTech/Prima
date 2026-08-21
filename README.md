# Salon Kosmetyczny Wioletta Wódkowska-Tkacz — strona internetowa

Strona typu one-page dla salonu kosmetycznego w Łopusznie (ul. Strażacka 24).
Czysty HTML + CSS + JS, bez zależności i bez procesu budowania — gotowa do wrzucenia na dowolny hosting.

## Struktura

```
index.html        — cała treść strony (sekcje: hero, o nas, usługi, cennik, galeria, opinie, FB, kontakt)
css/style.css     — style (paleta wg logo: śliwka + złoto)
js/main.js        — menu mobilne, zakładki cennika, lightbox galerii, formularz SMS
img/              — logo, zdjęcia prac, favicon
img/cennik/       — oryginalne grafiki cennika (materiał źródłowy, nieużywane na stronie)
robots.txt        — dla wyszukiwarek
sitemap.xml       — mapa strony (domena: salonwioletta.pl)
```

## Jak wdrożyć

Strona jest w pełni statyczna. Wystarczy skopiować **całą zawartość repozytorium** do katalogu
głównego hostingu (np. `public_html` na home.pl / OVH / nazwa.pl) albo podpiąć repo pod
Netlify / Vercel / GitHub Pages / Cloudflare Pages (zero konfiguracji — brak kroku budowania).

Po podpięciu domeny innej niż `salonwioletta.pl` zaktualizuj adresy w:

- `index.html` — `<link rel="canonical">`, meta `og:url`, `og:image` i blok JSON-LD,
- `sitemap.xml` i `robots.txt`.

## Jak edytować treści

- **Ceny** — sekcja `#cennik` w `index.html`; każda pozycja to jedna linia `<li><span>Nazwa</span><i></i><b>cena</b></li>`.
- **Opinie** — sekcja `#opinie`; podmień treści w blokach `<blockquote class="review">`.
- **Zdjęcia w galerii** — sekcja `#galeria`; dodaj plik do `img/` i dopisz analogiczny blok `<a class="gallery-item">…</a>`.
- **Godziny / telefon / adres** — sekcja `#kontakt` oraz blok JSON-LD w `<head>`.

## Umawianie wizyt

- Kliknięcie **telefonu** dzwoni pod 606 725 444 (`tel:`).
- **Formularz** buduje gotową wiadomość i otwiera aplikację SMS na telefonie klientki
  (link `sms:`) — wiadomość przychodzi zwykłym SMS-em na telefon salonu, bez żadnego
  backendu ani opłat za bramkę SMS. Na komputerze bez aplikacji SMS formularz nie wyśle
  wiadomości — dlatego obok zawsze widoczny jest telefon i Messenger.
- **Messenger** — przycisk prowadzi do `m.me/salonkosmetycznylopuszno`.

## Facebook na stronie

Sekcja „Aktualności" używa oficjalnej wtyczki **Facebook Page Plugin** (iframe) — pokazuje
najnowsze posty z fanpage'a bez klucza API. Jeśli Facebook zmieni ustawienia prywatności
strony, wtyczka pokaże tylko nagłówek — obok zawsze jest link do profilu.
