import { useEffect, useMemo, useState } from "react";

const menuLinks = [
  { label: "MAKEUP", href: "https://beauty-bloom.net/product-tag/makeup/" },
  {
    label: "NEW ARRIVALS",
    href: "https://beauty-bloom.net/product-tag/new-arrivals/",
  },
  {
    label: "SKIN CARE",
    href: "https://beauty-bloom.net/product-tag/skin-care/",
  },
  {
    label: "HAIR CARE",
    href: "https://beauty-bloom.net/product-tag/hair-care/",
  },
  { label: "PERFUMES", href: "https://beauty-bloom.net/product-tag/perfumes/" },
  {
    label: "BRUSHES & TOOLS",
    href: "https://beauty-bloom.net/product-tag/brushes-tools/",
  },
];

const categoryItems = [
  "BEAUTY ACCESSORIES",
  "BEST SELLERS",
  "BODY CARE",
  "CHEEKS",
  "EYES",
  "FACE",
  "LIPS",
  "NAIL POLISH",
  "ORAL CARE",
  "PERFUMES",
  "UNCATEGORIZED",
];

const navCategories = [
  { name: "Makeup", id: "makeup" },
  { name: "New Arrivals", id: "new-arrivals" },
  { name: "Skin Care", id: "skincare" },
  { name: "Hair Care", id: "haircare" },
  { name: "Perfumes", id: "perfumes" },
  { name: "Brushes & Tools", id: "brushes-tools" },
];

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function BloomLogo() {
  return (
    <div className="logo-shell">
      <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" className="logo-image" />
    </div>
  );
}

function HeaderMenuPage({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("categories");
  const [searchValue, setSearchValue] = useState("");

  const visibleItems = useMemo(() => {
    const source =
      activeTab === "categories"
        ? categoryItems.map((label) => ({
            label,
            href: "https://beauty-bloom.net/shop/",
          }))
        : menuLinks;

    const query = searchValue.trim().toLowerCase();
    if (!query) return source;
    return source.filter((item) => item.label.toLowerCase().includes(query));
  }, [activeTab, searchValue]);

  return (
    <>
      {isOpen ? <div className="menu-overlay" onClick={onClose} /> : null}
      <aside className={`side-menu ${isOpen ? "side-menu-open" : ""}`}>
        <div className="side-menu-top">
          <div className="side-menu-head">
            <h2>Menu</h2>
            <button type="button" onClick={onClose} className="side-menu-close">
              X
            </button>
          </div>

          <div className="side-menu-logo">
            <a href="/" onClick={onClose}>
              <BloomLogo />
            </a>
          </div>

          <div className="side-menu-search-wrap">
            <div className="side-menu-search">
              <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search for products..."
              />
              <span className="side-menu-search-icon">
                <SearchIcon />
              </span>
            </div>
          </div>

          <div className="side-menu-tabs">
            <button
              type="button"
              onClick={() => setActiveTab("categories")}
              className={activeTab === "categories" ? "tab-active" : ""}
            >
              CATEGORIES
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("menu")}
              className={activeTab === "menu" ? "tab-active" : ""}
            >
              MENU
            </button>
          </div>
        </div>

        <div className="side-menu-body">
          {visibleItems.map((item) => (
            <a key={item.label} href={item.href} onClick={onClose} className="side-menu-link">
              <span>{item.label}</span>
              <span>&gt;</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}

function Header() {
  const [searchQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const searchLabel = searchQuery.trim() || "Mascara";

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = openMenu ? "hidden" : previousOverflow;
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  return (
    <>
      <HeaderMenuPage isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      <header className="site-header">
        <div className="header-inner">
          <div className="mobile-header-row">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="menu-toggle"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <div className="mobile-logo-center">
              <BloomLogo />
            </div>

            <div className="mobile-spacer" aria-hidden="true" />
          </div>

          <div className="mobile-search-wrap">
            <div className="header-search">
              <span className="header-search-prefix">Search for</span>
              <span className="header-search-value">{searchLabel}</span>
              <button type="button" aria-label="Search" className="header-search-button">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="mobile-actions">
            <button type="button" className="header-action">
              <UserIcon />
            </button>
            <button type="button" className="header-action">
              <RefreshIcon />
              <span>0</span>
            </button>
            <button type="button" className="header-action">
              <HeartIcon />
              <span>0</span>
            </button>
            <button type="button" className="header-action">
              <CartIcon />
              <span>0</span>
            </button>
            <a href="https://beauty-bloom.net/ar/" className="language-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
              />
              Arabic
            </a>
          </div>

          <div className="desktop-header-row">
            <a href="/" className="desktop-logo-link">
              <BloomLogo />
            </a>

            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="desktop-menu-toggle"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <div className="desktop-search-grow">
              <div className="header-search">
                <span className="header-search-prefix">Search for</span>
                <span className="header-search-value">🔥 {searchLabel}</span>
                <button type="button" className="header-search-button" aria-label="Search">
                  <SearchIcon />
                </button>
              </div>
            </div>

            <div className="desktop-actions">
              <button type="button" className="header-action">
                <UserIcon />
              </button>
              <button type="button" className="header-action">
                <RefreshIcon />
                <span>0</span>
              </button>
              <button type="button" className="header-action">
                <HeartIcon />
                <span>0</span>
              </button>
              <button type="button" className="header-action">
                <CartIcon />
                <span>0</span>
              </button>
              <a href="https://beauty-bloom.net/ar/" className="desktop-language-link">
                <span className="desktop-language-top">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                    alt=""
                  />
                  Arabic
                </span>
                <span className="desktop-language-underline" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

function Navigation() {
  return (
    <nav className="category-nav">
      <div className="category-nav-inner">
        {navCategories.map((category) => (
          <button key={category.id} type="button" className="category-pill">
            <span className="category-pill-skew" />
            <span className="category-pill-label">{category.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

function AccountSection() {
  return (
    <section className="account-section">
      <div className="account-grid">
        <article className="account-card">
          <h2>Login</h2>
          <form className="account-form">
            <label htmlFor="username">Username or email address *</label>
            <input id="username" type="text" />

            <label htmlFor="password">Password *</label>
            <div className="password-field">
              <input id="password" type="password" />
              <button type="button" className="password-toggle" aria-label="Show password">
                <EyeIcon />
              </button>
            </div>

            <div className="remember-row">
              <label className="checkbox-row">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="/">Lost your password?</a>
            </div>

            <button type="submit" className="account-submit">
              <span>Log in</span>
            </button>
          </form>
        </article>

        <article className="account-card">
          <h2>Register</h2>
          <form className="account-form">
            <label htmlFor="register-email">Email address *</label>
            <input id="register-email" type="email" />

            <p className="account-copy">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="account-copy">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our privacy
              policy.
            </p>

            <button type="submit" className="account-submit">
              <span>Register</span>
            </button>
          </form>
        </article>
      </div>
    </section>
  );
}

function FeaturesBar() {
  const features = [
    { icon: <TruckIcon />, title: "FAST DELIVERY", id: "delivery" },
    { icon: <ShieldIcon />, title: "100% AUTHENTIC PRODUCTS", id: "authentic" },
    { icon: <DollarIcon />, title: "PRICES YOU CAN'T RESIST", id: "prices" },
    { icon: <GlobeIcon />, title: "ALL ACROSS PALESTINE IN 2 DAYS!", id: "shipping" },
  ];

  return (
    <section className="features-bar">
      <div className="features-inner">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <span className="feature-icon">{feature.icon}</span>
            <span className="feature-title">{feature.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExchangePolicy() {
  return (
    <section className="exchange-policy">
      <div className="exchange-inner">
        <h3>Exchange and Return Policy</h3>
        <ul>
          <li>Exchanges are available within 2 days of receiving the order, provided the item is new, clean, and unused.</li>
          <li>If the product is found broken or damaged during delivery, we will replace it with a new one at no extra cost.</li>
          <li>No returns or exchanges will be accepted if the product is damaged due to customer misuse.</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  const infoLinks = [
    { label: "About Us", href: "https://beauty-bloom.net/about-us/" },
    { label: "Privacy Policy", href: "https://beauty-bloom.net/privacy-policy/" },
    { label: "Order History", href: "https://beauty-bloom.net/my-account/orders/" },
    { label: "Terms & Conditions", href: "https://beauty-bloom.net/terms-and-conditions/" },
    { label: "Contact Us", href: "https://beauty-bloom.net/contact-us/" },
  ];
  const accountLinks = [
    { label: "My Account", href: "#" },
    { label: "Brand", href: "#" },
    { label: "Gift Certificates", href: "#" },
    { label: "Affiliates", href: "#" },
    { label: "My Wishlist", href: "#" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <BloomLogo />
            </div>
            <p className="footer-brand-title">At Beauty Bloom</p>
            <p className="footer-brand-copy">
              we are here to make your beauty journey simple, elegant, and trustworthy
            </p>

            <div className="footer-follow">
              <p>Follow Us:</p>
              <a
                href="https://www.instagram.com/Beautybloom.brands"
                target="_blank"
                rel="noreferrer"
                className="instagram-button"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h4>Information</h4>
            <ul className="footer-links">
              {infoLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link-button">
                    <ChevronRight />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>My Account</h4>
            <ul className="footer-links">
              {accountLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="footer-link-button">
                    <ChevronRight />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact Info.</h4>
            <ul className="contact-list">
              <li>
                <span className="contact-icon"><LocationIcon /></span>
                <span>Ramallah Palestine</span>
              </li>
              <li>
                <span className="contact-icon"><PhoneIcon /></span>
                <span>WhatsApp : (+972) 59-4871814</span>
              </li>
              <li>
                <span className="contact-icon"><MailIcon /></span>
                <span>information@loving-wescoff.85-215-252-72.plesk.page</span>
              </li>
              <li>
                <span className="contact-icon"><ClockIcon /></span>
                <div>
                  <p>Sat-Thu 9:00pm - 5:00pm Friday:Closed</p>
                </div>
              </li>
            </ul>

            <div className="payment-wrap">
              <img src="/image/payment.webp" alt="Payment methods" className="payment-image" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Beauty Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="page-shell">
      <Header />
      <Navigation />
      <main>
        <AccountSection />
      </main>
      <FeaturesBar />
      <ExchangePolicy />
      <Footer />
    </div>
  );
}

export default App;
