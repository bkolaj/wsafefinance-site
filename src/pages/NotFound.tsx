import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="bg-paper">
      <Container className="py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-medium tracking-[0.18em] text-ink/60">404</div>
          <h1 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">Nie znaleziono strony</h1>
          <p className="mt-4 text-base leading-relaxed text-slateText/75">
            Link może być nieaktualny lub strona została przeniesiona.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/">
              <Button>Wróć na start</Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline">Kontakt</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

