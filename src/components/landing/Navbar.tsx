import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSelector from "./LanguageSelector";

const UPWORK_URL = "https://www.upwork.com/freelancers/~011e9a98adcc5dc2b3?mp_source=share";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { to: "/about", label: t.nav.about },
    { to: "/data-entry", label: t.nav.dataEntry },
    { to: "/research", label: t.nav.research },
    { to: "/content", label: t.nav.content },
    { to: "/email-support", label: t.nav.emailSupport },
    { to: "/virtual-assistance", label: t.nav.vaTasks },
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold text-primary whitespace-nowrap">Judson Lima</Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                location.pathname === l.to
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-lg text-sm font-semibold gradient-cta text-secondary-foreground hover:opacity-90 transition-opacity"
          >
            {t.shared.contactUs}
          </a>
          <LanguageSelector />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-card px-4 py-2 space-y-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm ${
                location.pathname === l.to ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-secondary"
          >
            {t.shared.contactUs}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
