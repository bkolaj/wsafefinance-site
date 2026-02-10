import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function Privacy() {
  return (
    <main className="bg-paper dark:bg-night">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Dokument"
          title="Polityka prywatności"
          description="Treść poniżej jest szkicem. Wstaw finalną wersję przygotowaną pod Twoje procesy i narzędzia."
        />

        <div className="mt-10 max-w-3xl space-y-6 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
          <p>
            Administratorem danych jest W. Safe Finance (Sylwia Wiśniewska), ul. Spichrzowa 11,
            62-090 Rokietnica.
          </p>
          <p>
            Dane przekazane w formularzu kontaktowym są wykorzystywane wyłącznie w celu obsługi
            zapytania oraz kontaktu zwrotnego.
          </p>
          <p>
            Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia oraz ograniczenia
            przetwarzania.
          </p>
          <p>
            W sprawach związanych z prywatnością skontaktuj się: biuro@wsafefinance.pl.
          </p>
        </div>
      </Container>
    </main>
  );
}
