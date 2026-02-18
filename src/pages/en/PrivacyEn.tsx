import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function PrivacyEn() {
  return (
    <main className="bg-paper dark:bg-night">
      <Container className="py-14 sm:py-20">
        <SectionHeading
          eyebrow="Document"
          title="Privacy policy"
          description="English version for convenience. In case of discrepancies, the Polish version prevails."
        />

        <article className="mt-10 max-w-3xl space-y-10 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
          <section className="space-y-4">
            <p>
              This Privacy Policy sets out the rules for storing and accessing data on Users’ Devices when using the
              Service for the purpose of providing electronic services by the Administrator, as well as the rules for
              collecting and processing Users’ personal data provided voluntarily via tools available in the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§1 Definitions</h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium text-ink dark:text-paper">Service</span> – the website operating at{" "}
                <a className="text-ink underline underline-offset-4 dark:text-paper" href="https://wsafefinance.pl">
                  https://wsafefinance.pl
                </a>
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Service / Data Administrator</span> – W. Safe Finance Sylwia
                Wiśniewska, ul. Spichrzowa 11, 62-090 Rokietnica, NIP: 781-167-86-04.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">User</span> – a natural person for whom the Administrator provides
                electronic services via the Service.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Device</span> – an electronic device with software through which the
                User accesses the Service.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">Cookies</span> – text data stored as files on the User’s Device.
              </p>
              <p>
                <span className="font-medium text-ink dark:text-paper">GDPR</span> – Regulation (EU) 2016/679 of the European Parliament and
                of the Council of 27 April 2016.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§2 Data Protection Officer</h3>
            <p>Based on Art. 37 GDPR, the Administrator has not appointed a Data Protection Officer.</p>
            <p>
              For matters related to processing, including personal data, please contact the Administrator directly.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§3 Types of cookies</h3>
            <p>
              <span className="font-medium text-ink dark:text-paper">Internal cookies</span> – placed and read by the Service’s ICT system.
            </p>
            <p>
              <span className="font-medium text-ink dark:text-paper">External cookies</span> – placed and read by external services’ ICT
              systems via scripts and services used in the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§4 Data storage security</h3>
            <p>
              Browser mechanisms used for storing and reading cookies do not allow downloading other data from the
              User’s Device or data from other websites, including personal data or confidential information.
            </p>
            <p>
              The Administrator makes reasonable efforts to verify partners in terms of user security, but does not
              fully control cookies from external partners.
            </p>
            <div className="space-y-2">
              <div className="font-medium text-ink dark:text-paper">Cookie control</div>
              <p>You can change cookie settings in your browser at any time.</p>
              <p>You can delete stored cookies using your device tools at any time.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§5 Purposes of cookies</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Improving access to the Service</li>
              <li>Statistics (users, visits, device types, connection, etc.)</li>
              <li>Providing social services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§6 Categories of collected data</h3>
            <p>
              The Service collects data about Users. Some data is collected automatically and anonymously; some data is
              personal data provided voluntarily.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§7 Contact form data</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Name / Company</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Message content</li>
              <li>Message topic</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§8 Purposes of personal data processing</h3>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Communication with the User</li>
              <li>Presenting commercial offers by electronic means</li>
              <li>Presenting commercial offers by phone</li>
              <li>Enabling comments or opinions</li>
            </ol>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§9 Legal bases</h3>
            <p>The Service processes personal data based on GDPR and relevant Polish laws.</p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§10 User rights</h3>
            <p>
              Users have rights under GDPR, including access, rectification, erasure, restriction, portability, objection
              and lodging a complaint.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-serif text-xl text-ink dark:text-paper">§11 Contact</h3>
            <p>
              For any questions related to this Privacy Policy, please contact: {" "}
              <a className="text-ink underline underline-offset-4 dark:text-paper" href="mailto:biuro@wsafefinance.pl">
                biuro@wsafefinance.pl
              </a>
              .
            </p>
          </section>
        </article>
      </Container>
    </main>
  );
}
