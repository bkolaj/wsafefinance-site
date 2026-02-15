import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFoundEn() {
  return (
    <main className="bg-paper dark:bg-night">
      <Container className="py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">404</div>
          <h1 className="mt-3 font-serif text-3xl text-ink dark:text-paper sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-base leading-relaxed text-slateText/75 dark:text-paper/70">
            The link may be outdated or the page has been moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/en">
              <Button>Back to home</Button>
            </Link>
            <Link to="/en/contact">
              <Button variant="outline">Contact</Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

