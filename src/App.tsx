import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import HomeEn from "@/pages/en/HomeEn";
import ServicesEn from "@/pages/en/ServicesEn";
import ContactEn from "@/pages/en/ContactEn";
import PrivacyEn from "@/pages/en/PrivacyEn";
import NotFoundEn from "@/pages/en/NotFoundEn";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-dvh bg-paper text-slateText antialiased dark:bg-night dark:text-paper">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/polityka-prywatnosci" element={<Privacy />} />
          <Route path="/en" element={<HomeEn />} />
          <Route path="/en/services" element={<ServicesEn />} />
          <Route path="/en/contact" element={<ContactEn />} />
          <Route path="/en/privacy-policy" element={<PrivacyEn />} />
          <Route path="/en/*" element={<NotFoundEn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SiteFooter />
      </div>
    </Router>
  );
}
