import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import NotFound from "@/pages/NotFound";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ScrollToTop } from "@/components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uslugi" element={<Services />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/polityka-prywatnosci" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </Router>
  );
}
