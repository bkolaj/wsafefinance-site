# W. Safe Finance — Page Design (desktop-first)

## Global Styles (tokens + zasady)
- Styl: minimalizm premium, „quiet confidence” (fintech/banking), dużo oddechu, wysoki kontrast.
- Siatka: max-width 1200px, 12 kolumn, gutter 24px, sekcje: 80–120px padding (desktop).
- Kolory (przykład):
  - Background: #0B0F17 (nocny granat) / alternatywnie jasny #F7F8FA
  - Surface: #111827, Border: rgba(255,255,255,0.08)
  - Text primary: #F9FAFB, Text secondary: rgba(249,250,251,0.72)
  - Accent (brand): #4F46E5 (indigo) + Accent subtle: rgba(79,70,229,0.12)
  - Status: Success #16A34A, Error #DC2626
- Typografia: Inter / system-ui; skala: H1 44/52, H2 32/40, H3 22/30, body 16/26, small 13/20.
- Przyciski: Primary (accent, solid), Secondary (outline), hover: +6% jasności, focus ring 2px accent.
- Karty: radius 14px, cień bardzo subtelny lub brak; separator 1px border.
- Mikrointerakcje: przejścia 160–220ms (ease-out), bez „krzykliwych” animacji.

## Page: Strona główna (/)
### Meta Information
- Title: W. Safe Finance — Bezpieczne decyzje finansowe.
- Description: Premium wsparcie finansowe dla firm i klientów wymagających.
- OG: og:title/description jak wyżej, og:type=website.

### Layout i struktura
- Układ: sekcje w kolumnie; w środku grid 12; hero w układzie 7/5 (tekst / wizual).
- Navbar: sticky, tło półprzezroczyste z blur.

### Sekcje i komponenty (z przykładowym copy)
1) **Navbar**: Logo, linki: Usługi, Kontakt; CTA: „Umów konsultację”.
2) **Hero**
   - H1: „Finanse w porządku. Spokój w standardzie premium.”
   - Lead: „Pomagam podejmować decyzje oparte na danych, ryzyku i realnych priorytetach.”
   - CTA: Primary „Umów 20-min rozmowę”, Secondary „Zobacz usługi”.
3) **Skrót usług (karty 3–6)**
   - Nagłówek: „W czym mogę Ci pomóc”
   - Karta (przykład): „Strategia finansowa” — „Plan, który wytrzymuje stres-test.”
4) **Zaufanie / przewagi (3–4 punkty)**
   - Copy: „Bez nadmiaru obietnic. Z jasnymi założeniami i mierzalnym rezultatem.”
   - Punkt: „Poufność i bezpieczeństwo informacji”, „Podejście oparte na ryzyku”, „Jasne rekomendacje”.
5) **Proces (4 kroki)**
   - „1. Diagnoza” → „2. Model i scenariusze” → „3. Rekomendacja” → „4. Wdrożenie i monitoring”.
6) **CTA końcowe**
   - Tytuł: „Gotowy/a na decyzję bez zgadywania?”
   - Tekst: „Wyślij krótki opis sytuacji — wrócę z propozycją kolejnego kroku.”

## Page: Usługi (/uslugi)
### Meta Information
- Title: Usługi — W. Safe Finance
- Description: Zakres usług, warianty współpracy i sposób działania.

### Layout i struktura
- Układ: nagłówek + sekcje tematyczne; karty usług w 2–3 kolumnach (desktop).

### Sekcje i komponenty (z przykładowym copy)
1) **Header**
   - H1: „Usługi zaprojektowane pod stabilność.”
   - Lead: „Wybierz zakres — dopasuję proces i tempo do Twoich ograniczeń.”
2) **Usługi (karty z rozwinięciem)**
   - Struktura opisu: „Cel” / „Co dostajesz” / „Dla kogo” / „Efekt”.
   - Przykład (copy): „Scenariusze ryzyka — „Co jeśli…?” policzone, nie przeczute.”
3) **Pakiety (tabela 2–3 warianty)**
   - Nazwy: „Essential”, „Professional”, „Executive”.
   - CTA w każdej kolumnie: „Wybierz i porozmawiajmy”.
4) **FAQ** (akordeon)
   - Pytanie (copy): „Ile trwa pierwsza diagnoza?”; „Jakich danych potrzebujesz na start?”.
5) **CTA**
   - „Jeśli nie wiesz, który wariant wybrać — zacznijmy od krótkiej rozmowy.”

## Page: Kontakt (/kontakt)
### Meta Information
- Title: Kontakt — W. Safe Finance
- Description: Umów konsultację i opisz potrzeby w formularzu.

### Layout i struktura
- Układ 2 kolumny: po lewej formularz, po prawej dane kontaktowe i zasady współpracy.

### Sekcje i komponenty (z przykładowym copy)
1) **Formularz**
   - Pola: Imię/Nazwa, E-mail, Telefon (opc.), Temat, Wiadomość.
   - Placeholder (copy): „Napisz 2–3 zdania: cel, horyzont, najważniejsze ograniczenia.”
   - Walidacja: inline, czytelne komunikaty; stan „wysyłanie…”, „wysłano”.
   - Potwierdzenie (copy): „Dziękuję. Odpowiem zwykle w ciągu 1–2 dni roboczych.”
2) **Dane kontaktowe**
   - Sekcja: „Preferujesz bezpośredni kontakt?” + e-mail/telefon.
3) **Mini-sekcja zaufania**
   - Copy: „Twoje informacje traktuję poufnie. Minimum danych, maksimum klarowności.”

## Responsywność (skrót)
- Tablet: hero przechodzi na 1 kolumnę; karty 2 kolumny.
- Mobile: navbar w menu; karty 1 kolumna; CTA full-width.
