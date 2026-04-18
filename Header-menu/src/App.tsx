import { useEffect, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
};

const categories: MenuItem[] = [
  { label: "Beauty Accessories", href: "#beauty-accessories" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Body Care", href: "#body-care" },
  { label: "Cheeks", href: "#cheeks" },
  { label: "Eyes", href: "#eyes" },
  { label: "Face", href: "#face" },
  { label: "Lips", href: "#lips" },
  { label: "Nail Polish", href: "#nail-polish" },
  { label: "Oral Care", href: "#oral-care" },
  { label: "Perfumes", href: "#perfumes" },
];

const menuLinks: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact", href: "#contact" },
  { label: "Track Order", href: "#track-order" },
  { label: "My Account", href: "#my-account" },
];

const navLinks: MenuItem[] = [
  { label: "Makeup", href: "#makeup" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Skin Care", href: "#skin-care" },
  { label: "Hair Care", href: "#hair-care" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "Brushes & Tools", href: "#brushes-tools" },
];

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 4v5h5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5 4.6 13.3a4.8 4.8 0 0 1 6.8-6.8L12 7l.6-.5a4.8 4.8 0 0 1 6.8 6.8z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6h15l-1.4 7.2a2 2 0 0 1-2 1.6H9.1a2 2 0 0 1-2-1.5L5 3H2" />
      <circle cx="10" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6 18 18M18 6 6 18" />
    </svg>
  );
}

function BloomLogo() {
  return (
    <a className="brand-mark" href="#home" aria-label="Bloom Beauty home">
      <img
        src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
        alt="Bloom Beauty"
      />
    </a>
  );
}

function OffCanvasMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"categories" | "menu">("categories");

  return (
    <>
      <div
        className={`menu-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside className={`side-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="side-menu__header">
          <span>Menu</span>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <div className="side-menu__logo">
          <BloomLogo />
        </div>

        <form className="side-menu__search" action="#search">
          <input type="search" placeholder="Search for products..." aria-label="Search products" />
          <button type="submit" className="search-submit" aria-label="Search">
            <SearchIcon />
          </button>
        </form>

        <div className="side-menu__tabs" role="tablist" aria-label="Menu sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "categories"}
            className={activeTab === "categories" ? "is-active" : ""}
            onClick={() => setActiveTab("categories")}
          >
            Categories
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "menu"}
            className={activeTab === "menu" ? "is-active" : ""}
            onClick={() => setActiveTab("menu")}
          >
            Menu
          </button>
        </div>

        <nav className="side-menu__list" aria-label={activeTab === "categories" ? "Categories" : "Site menu"}>
          {(activeTab === "categories" ? categories : menuLinks).map((item) => (
            <a key={item.label} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const mobileSearchLabel = searchQuery.trim() || "Mascara";

  return (
    <div className="page-shell">
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header className="site-header">
        <div className="header-top">
          <div className="mobile-bar">
            <button type="button" className="icon-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </button>
            <div className="mobile-logo">
              <BloomLogo />
            </div>
            <div className="mobile-spacer" aria-hidden="true" />
          </div>

          <div className="mobile-search">
            <div className="mobile-search__pill">
              <span className="mobile-search__label">Search for</span>
              <span className="mobile-search__value">{mobileSearchLabel}</span>
              <button type="button" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="mobile-actions">
            <button type="button" className="action-chip" aria-label="Account">
              <UserIcon />
            </button>
            <button type="button" className="action-chip" aria-label="Compare">
              <RefreshIcon />
              <span>0</span>
            </button>
            <button type="button" className="action-chip" aria-label="Wishlist">
              <HeartIcon />
              <span>0</span>
            </button>
            <button type="button" className="action-chip" aria-label="Cart">
              <CartIcon />
              <span>0</span>
            </button>
            <a className="language-link" href="#arabic">
              Arabic
            </a>
          </div>

          <div className="desktop-bar">
            <BloomLogo />

            <button type="button" className="icon-button desktop-menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </button>

            <form className="desktop-search" action="#search">
              <input
                type="search"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search products"
              />
              <button type="submit" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </form>

            <div className="desktop-actions">
              <button type="button" className="icon-button" aria-label="Account">
                <UserIcon />
              </button>
              <button type="button" className="icon-button" aria-label="Compare">
                <RefreshIcon />
              </button>
              <button type="button" className="icon-button" aria-label="Wishlist">
                <HeartIcon />
              </button>
              <button type="button" className="icon-button" aria-label="Cart">
                <CartIcon />
              </button>
            </div>
          </div>
        </div>

        <nav className="desktop-nav" aria-label="Primary categories">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="desktop-nav__link">
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <main className="hero">
        <div className="hero-card">
          <p className="eyebrow">Bloom Beauty Header Menu</p>
          <h1>React + TypeScript header copied in the Bloom Beauty style.</h1>
          <p>
            This app is now focused only on the sticky header, desktop category bar, and mobile off-canvas menu pattern.
          </p>
        </div>
      </main>
    </div>
  );
}
