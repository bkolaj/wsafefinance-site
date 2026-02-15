import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function Privacy() {
  return (
    <main className="bg-paper dark:bg-night">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Dokument"
          title="Polityka prywatności"
          description="Poniżej znajduje się pełna treść polityki prywatności serwisu W. Safe Finance."
        />

        <article className="mt-10 max-w-3xl space-y-10 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
          <section className="space-y-4">
            <p>
              Poniższa Polityka Prywatności określa zasady zapisywania i uzyskiwania dostępu do danych na
              Urządzeniach Użytkowników korzystających z Serwisu do celów świadczenia usług drogą elektroniczną
              przez Administratora oraz zasady gromadzenia i przetwarzania danych osobowych Użytkowników, które
              zostały podane przez nich osobiście i dobrowolnie za pośrednictwem narzędzi dostępnych w Serwisie.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§1 Definicje</h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium text-ink dark:text-paper">Serwis</span> – serwis internetowy działający pod adresem{" "}
                <a className="text-ink underline underline-offset-4 dark:text-paper" href="https://wsafefinance.pl">
                  https://wsafefinance.pl
                </a>
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Administrator Serwisu / Danych</span> – Administratorem Serwisu
                oraz Administratorem Danych (dalej Administrator) jest firma W. Safe Finance Sylwia Wiśniewska
                prowadząca działalność pod adresem: ul. Spichrzowa 11 62-090 Rokietnica, o nadanym numerze
                identyfikacji podatkowej (NIP): 781-167-86-04 świadcząca usługi drogą elektroniczną za pośrednictwem
                Serwisu.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Użytkownik</span> – osoba fizyczna, dla której Administrator świadczy
                usługi drogą elektroniczną za pośrednictwem Serwisu.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Urządzenie</span> – elektroniczne urządzenie wraz z oprogramowaniem,
                za pośrednictwem którego Użytkownik uzyskuje dostęp do Serwisu.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Cookies (ciasteczka)</span> – dane tekstowe gromadzone w formie plików
                zamieszczanych na Urządzeniu Użytkownika.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">RODO</span> – Rozporządzenie Parlamentu Europejskiego i Rady (UE)
                2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
                danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                (ogólne rozporządzenie o ochronie danych).
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Dane osobowe</span> – oznaczają informacje o zidentyfikowanej lub
                możliwej do zidentyfikowania osobie fizycznej („osobie, której dane dotyczą”); możliwa do
                zidentyfikowania osoba fizyczna to osoba, którą można bezpośrednio lub pośrednio zidentyfikować,
                w szczególności na podstawie identyfikatora takiego jak imię i nazwisko, numer identyfikacyjny, dane
                o lokalizacji, identyfikator internetowy lub jeden bądź kilka szczególnych czynników określających
                fizyczną, fizjologiczną, genetyczną, psychiczną, ekonomiczną, kulturową lub społeczną tożsamość osoby
                fizycznej.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Przetwarzanie</span> – oznacza operację lub zestaw operacji wykonywanych
                na danych osobowych lub zestawach danych osobowych w sposób zautomatyzowany lub niezautomatyzowany,
                taką jak zbieranie, utrwalanie, organizowanie, porządkowanie, przechowywanie, adaptowanie lub
                modyfikowanie, pobieranie, przeglądanie, wykorzystywanie, ujawnianie poprzez przesłanie,
                rozpowszechnianie lub innego rodzaju udostępnianie, dopasowywanie lub łączenie, ograniczanie,
                usuwanie lub niszczenie.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Ograniczenie przetwarzania</span> – oznacza oznaczenie przechowywanych
                danych osobowych w celu ograniczenia ich przyszłego przetwarzania.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Profilowanie</span> – oznacza dowolną formę zautomatyzowanego
                przetwarzania danych osobowych, które polega na wykorzystaniu danych osobowych do oceny niektórych
                czynników osobowych osoby fizycznej, w szczególności do analizy lub prognozy aspektów dotyczących
                efektów pracy tej osoby fizycznej, jej sytuacji ekonomicznej, zdrowia, osobistych preferencji,
                zainteresowań, wiarygodności, zachowania, lokalizacji lub przemieszczania się.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Zgoda</span> – zgoda osoby, której dane dotyczą oznacza dobrowolne,
                konkretne, świadome i jednoznaczne okazanie woli, którym osoba, której dane dotyczą, w formie
                oświadczenia lub wyraźnego działania potwierdzającego, przyzwala na przetwarzanie dotyczących jej
                danych osobowych.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Naruszenie ochrony danych osobowych</span> – oznacza naruszenie
                bezpieczeństwa prowadzące do przypadkowego lub niezgodnego z prawem zniszczenia, utracenia,
                zmodyfikowania, nieuprawnionego ujawnienia lub nieuprawnionego dostępu do danych osobowych
                przesyłanych, przechowywanych lub w inny sposób przetwarzanych.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§2 Inspektor Ochrony Danych</h3>
            <p>Na podstawie Art. 37 RODO, Administrator nie powołał Inspektora Ochrony Danych.</p>
            <p>
              W sprawach dotyczących przetwarzania danych, w tym danych osobowych, należy kontaktować się
              bezpośrednio z Administratorem.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§3 Rodzaje Plików Cookies</h3>
            <p>
              <span className="font-medium text-ink dark:text-paper">Cookies wewnętrzne</span> – pliki zamieszczane i odczytywane z
              Urządzenia Użytkownika przez system teleinformatyczny Serwisu.
            </p>
            <p>
              <span className="font-medium text-ink dark:text-paper">Cookies zewnętrzne</span> – pliki zamieszczane i odczytywane z
              Urządzenia Użytkownika przez systemy teleinformatyczne Serwisów zewnętrznych. Skrypty Serwisów
              zewnętrznych, które mogą umieszczać pliki Cookies na Urządzeniach Użytkownika zostały świadomie
              umieszczone w Serwisie poprzez skrypty i usługi udostępnione i zainstalowane w Serwisie.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§4 Bezpieczeństwo składowania danych</h3>
            <p>
              <span className="font-medium text-ink dark:text-paper">Mechanizmy składowania i odczytu plików Cookie</span> – Mechanizmy
              składowania, odczytu i wymiany danych pomiędzy Plikami Cookies zapisywanymi na Urządzeniu
              Użytkownika a Serwisem są realizowane poprzez wbudowane mechanizmy przeglądarek internetowych i nie
              pozwalają na pobieranie innych danych z Urządzenia Użytkownika lub danych innych witryn internetowych,
              które odwiedzał Użytkownik, w tym danych osobowych ani informacji poufnych. Przeniesienie na
              Urządzenie Użytkownika wirusów, koni trojańskich oraz innych robaków jest także praktycznie
              niemożliwe.
            </p>
            <p>
              <span className="font-medium text-ink dark:text-paper">Cookie wewnętrzne</span> – zastosowane przez Administratora pliki
              Cookie są bezpieczne dla Urządzeń Użytkowników i nie zawierają skryptów, treści lub informacji mogących
              zagrażać bezpieczeństwu danych osobowych lub bezpieczeństwu Urządzenia z którego korzysta Użytkownik.
            </p>
            <p>
              <span className="font-medium text-ink dark:text-paper">Cookie zewnętrzne</span> – Administrator dokonuje wszelkich możliwych
              działań w celu weryfikacji i doboru partnerów serwisu w kontekście bezpieczeństwa Użytkowników.
              Administrator do współpracy dobiera znanych, dużych partnerów o globalnym zaufaniu społecznym. Nie
              posiada on jednak pełnej kontroli nad zawartością plików Cookie pochodzących od zewnętrznych
              partnerów. Za bezpieczeństwo plików Cookie, ich zawartość oraz zgodne z licencją wykorzystanie przez
              zainstalowane w serwisie Skrypty, pochodzących z Serwisów zewnętrznych, Administrator nie ponosi
              odpowiedzialności na tyle na ile pozwala na to prawo. Lista partnerów zamieszczona jest w dalszej
              części Polityki Prywatności.
            </p>
            <div className="space-y-2">
              <div className="font-medium text-ink dark:text-paper">Kontrola plików Cookie</div>
              <p>
                Użytkownik może w dowolnym momencie, samodzielnie zmienić ustawienia dotyczące zapisywania,
                usuwania oraz dostępu do danych zapisanych plików Cookies przez każdą witrynę internetową.
              </p>
              <p>
                Użytkownik może w dowolnym momencie usunąć wszelkie zapisane do tej pory pliki Cookie korzystając z
                narzędzi Urządzenia Użytkownika, za pośrednictwem którego Użytkownik korzysta z usług Serwisu.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Przechowywanie danych osobowych</span> – Administrator zapewnia, że
                dokonuje wszelkich starań, by przetwarzane dane osobowe wprowadzone dobrowolnie przez Użytkowników
                były bezpieczne, dostęp do nich był ograniczony i realizowany zgodnie z ich przeznaczeniem i celami
                przetwarzania. Administrator zapewnia także, że dokonuje wszelkich starań w celu zabezpieczenia
                posiadanych danych przed ich utratą, poprzez stosowanie odpowiednich zabezpieczeń fizycznych jak i
                organizacyjnych.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§5 Cele do których wykorzystywane są pliki Cookie</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Usprawnienie i ułatwienie dostępu do Serwisu</li>
              <li>Prowadzenie statystyk (użytkowników, ilości odwiedzin, rodzajów urządzeń, łącze itp.)</li>
              <li>Świadczenie usług społecznościowych</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§8 Rodzaje gromadzonych danych</h3>
            <p>
              Serwis gromadzi dane o Użytkownikach. Cześć danych jest gromadzona automatycznie i anonimowo, a
              część danych to dane osobowe podane dobrowolnie przez Użytkowników w trakcie zapisywania się do
              poszczególnych usług oferowanych przez Serwis.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§9 Dane gromadzone podczas kontaktu za pomocą formularza</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Imię / nazwisko / Nazwa</li>
              <li>Adres e-mail</li>
              <li>Numer telefonu</li>
              <li>Treść wiadomości</li>
              <li>Temat wiadomości</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§10 Cele przetwarzania danych osobowych</h3>
            <p>
              Sposób przetwarzania przez Administratora danych dotyczących Użytkownika zależy od sposobu korzystania
              przez Użytkownika z Serwisu i dostępnych w nim funkcjonalności. Administrator przetwarza dane osobowe
              Użytkownika w następujących celach:
            </p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <div className="font-medium text-ink dark:text-paper">Komunikacji z Użytkownikiem.</div>
                <div>
                  Administrator wykorzystuje dane osobowe Użytkownika w celu komunikacji z nim w spersonalizowany
                  sposób. Komunikowane Użytkownikowi informacje dotyczą oferowanych produktów lub usług, bezpieczeństwa
                  danych osobowych, aktualizacji sieci, przypomnień, ale również sugerowanych ofert Administratora lub
                  jego partnerów. Komunikacja z Użytkownikiem dotyczy także obsługi Użytkownika. Dane osobowe
                  wykorzystywane są w celu pomocy Użytkownikowi, rozwiązaniu problemów technicznych oraz odpowiedzi na
                  jego skargi lub reklamacje.
                </div>
              </li>
              <li>
                <div className="font-medium text-ink dark:text-paper">Przedstawiania Użytkownikowi ofert handlowych drogą elektroniczną.</div>
                <div>
                  Celem korzystania z danych osobowych Użytkownika udostępnionych przez niego za pośrednictwem
                  funkcjonalności i narzędzi do komunikacji dostępnych w Serwisie jest komunikacja marketingowa prowadzona
                  przez Administratora w ramach prowadzonej działalności, w szczególności przedstawianie ofert handlowych
                  Użytkownikowi drogą elektroniczną.
                </div>
              </li>
              <li>
                <div className="font-medium text-ink dark:text-paper">Przedstawiania Użytkownikowi ofert handlowych w kontakcie telefonicznym.</div>
                <div>
                  Celem korzystania z danych osobowych Użytkownika udostępnionych przez niego za pośrednictwem
                  funkcjonalności i narzędzi do komunikacji dostępnych w Serwisie jest komunikacja marketingowa prowadzona
                  przez Administratora w ramach prowadzonej działalności, w szczególności poprzez przedstawianie ofert
                  handlowych Użytkownikowi w kontakcie telefonicznym.
                </div>
              </li>
              <li>
                <div className="font-medium text-ink dark:text-paper">Umożliwienia przesyłania przez Użytkownika komentarzy lub opinii.</div>
                <div>
                  Administrator wykorzystuje dane osobowe Użytkownika w celu umożliwienia mu komentowania/opiniowania
                  działalności, usług lub produktów Administratora lub podmiotów z nim współpracujących.
                </div>
              </li>
            </ol>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§11 Sposób przetwarzania danych osobowych</h3>
            <div className="space-y-3">
              <div className="font-medium text-ink dark:text-paper">Dane osobowe podane dobrowolnie przez Użytkowników:</div>
              <p>
                Dane osobowe nie będą przekazywane poza Unię Europejską, chyba że zostały opublikowane na skutek
                indywidualnego działania Użytkownika (np. wprowadzenie komentarza lub wpisu), co sprawi, że dane będą
                dostępne dla każdej osoby odwiedzającej serwis.
              </p>
              <p>Dane osobowe nie będą wykorzystywane do zautomatyzowanego podejmowania decyzji (profilowania).</p>
              <p>Dane osobowe nie będą odsprzedawane podmiotom trzecim.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§12 Podstawy prawne przetwarzania danych osobowych</h3>
            <p>Serwis gromadzi i przetwarza dane Użytkowników na podstawie:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu
                takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
              </li>
              <li>art. 6 ust. 1 lit. a – osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych</li>
              <li>
                art. 6 ust. 1 lit. b – przetwarzanie jest niezbędne do wykonania umowy lub do podjęcia działań przed jej
                zawarciem
              </li>
              <li>
                art. 6 ust. 1 lit. f – przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów
              </li>
              <li>Ustawa z dnia 10 maja 2018 r. o ochronie danych osobowych (Dz.U. 2018 poz. 1000)</li>
              <li>Ustawa z dnia 16 lipca 2004 r. Prawo telekomunikacyjne (Dz.U. 2004 nr 171 poz. 1800)</li>
              <li>
                Ustawa z dnia 4 lutego 1994 r. o prawie autorskim i prawach pokrewnych (Dz. U. 1994 Nr 24 poz. 83)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§13 Okres przetwarzania danych osobowych</h3>
            <p>
              Okres przechowywania danych osobowych Użytkowników uzależniony jest od celów przetwarzania przez
              Administratora danych. Administrator przechowuje dane osobowe przez taki okres, jaki jest konieczny do
              osiągnięcia określonych celów, tj:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>przez okres prowadzenia działalności gospodarczej Administratora.</li>
            </ul>
            <p>
              W każdym z powyższych przypadków po upływie niezbędnego okresu przetwarzania, dane mogą być przetwarzane
              tylko w celu dochodzenia roszczeń na tle łączących strony relacji do czasu ostatecznego rozstrzygnięcia tych
              roszczeń na drodze prawnej.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§14 Prawa Użytkowników związane z przetwarzaniem danych osobowych</h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo dostępu do danych osobowych</span> – Użytkownikom przysługuje
                prawo uzyskania dostępu do swoich danych osobowych, realizowane na żądanie złożone do Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo do sprostowania danych osobowych</span> – Użytkownikom
                przysługuje prawo żądania od Administratora niezwłocznego sprostowania danych osobowych, które są
                nieprawidłowe lub / oraz uzupełnienia niekompletnych danych osobowych, realizowane na żądanie złożone do
                Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo do usunięcia danych osobowych</span> – Użytkownikom przysługuje
                prawo żądania od Administratora niezwłocznego usunięcia danych osobowych, realizowane na żądanie złożone
                do Administratora. Administrator zastrzega sobie prawo wstrzymania realizacji żądania usunięcia danych w
                celu ochrony prawnie uzasadnionego interesu Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo do ograniczenia przetwarzania danych osobowych</span> –
                Użytkownikom przysługuje prawo ograniczenia przetwarzania danych osobowych w przypadkach wskazanych w
                art. 18 RODO, realizowane na żądanie złożone do Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo do przenoszenia danych osobowych</span> – Użytkownikom
                przysługuje prawo uzyskania od Administratora, danych osobowych dotyczących Użytkownika w
                ustrukturyzowanym, powszechnie używanym formacie nadającym się do odczytu maszynowego, realizowane na
                żądanie złożone do Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo wniesienia sprzeciwu wobec przetwarzania danych osobowych</span>
                – Użytkownikom przysługuje prawo wniesienia sprzeciwu wobec przetwarzania jego danych osobowych w
                przypadkach określonych w art. 21 RODO, realizowane na żądanie złożone do Administratora.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Prawo wniesienia skargi</span> – Użytkownikom przysługuje prawo
                wniesienia skargi do organu nadzorczego zajmującego się ochroną danych osobowych.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§15 Inne ważne Informacje</h3>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <div className="font-medium text-ink dark:text-paper">Ochrona bezpieczeństwa danych osobowych</div>
                <div>
                  Administrator wprowadza odpowiednie środki mające na celu zapewnienie bezpieczeństwa danych osobowych
                  Użytkownika. Bezpieczne korzystanie z Serwisu zapewniają stosowane systemy oraz procedury chroniące
                  przed dostępem oraz ujawnieniem danych osobom niepożądanym. Ponadto stosowane przez Administratora
                  systemy oraz procesy są regularnie monitorowane w celu wykrycia ewentualnych zagrożeń. Pozyskane przez
                  Administratora dane osobowe przechowywane są w systemach komputerowych, do których dostęp jest ściśle
                  ograniczony.
                </div>
              </li>
              <li>
                <div className="font-medium text-ink dark:text-paper">Zmiany Polityki prywatności</div>
                <div>
                  W celu uaktualnienia informacji zawartych w niniejszej Polityce prywatności oraz jej zgodności z
                  obowiązującymi przepisami prawa, niniejsza Polityka prywatności może ulec zmianie. W przypadku zmiany
                  treści Polityki prywatności, zmieniona zostanie data jej aktualizacji wskazana na końcu jej tekstu. W
                  celu zasięgnięcia informacji o sposobie ochrony danych osobowych, Administrator rekomenduje
                  Użytkownikom regularne zapoznawanie się z postanowieniami Polityki Prywatności.
                </div>
              </li>
              <li>
                <div className="font-medium text-ink dark:text-paper">Informacje kontaktowe</div>
                <div>
                  W celu uzyskania jakichkolwiek informacji dotyczących niniejszej Polityki Prywatności, Użytkownik może
                  skontaktować się z Administratorem danych osobowych: W. SAFE FINANCE Sylwia Wiśniewska, ul. Spichrzowa
                  11, 62-090 Rokietnica, z wykorzystaniem następujących danych kontaktowych:{" "}
                  <a className="text-ink underline underline-offset-4 dark:text-paper" href="mailto:biuro@wsafefinance.pl">
                    biuro@wsafefinance.pl
                  </a>
                  {" "}lub drogą pocztową na adres: Sylwia Wiśniewska ul. Spichrzowa 11, 62-090 Rokietnica.
                </div>
              </li>
            </ol>
          </section>
        </article>
      </Container>
    </main>
  );
}
