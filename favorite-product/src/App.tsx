import { useEffect, useState } from "react";

type MenuItem = {
  label: string;
  href: string;
};

type Feature = {
  title: string;
  key: string;
};

type WishlistItem = {
  id: string;
  title: string;
  sku?: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity?: number;
  stock: "in" | "out";
  action: string;
  addedOn: string;
  tags?: string[];
};

const mobileCategories = [
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
  "UNCATEGORIZED"
];

const mobileMenu = [
  "HOME",
  "SHOP",
  "ABOUT US",
  "CONTACT",
  "TRACK ORDER",
  "MY ACCOUNT"
];

const navLinks: MenuItem[] = [
  { label: "Makeup", href: "#makeup" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Skin Care", href: "#skin-care" },
  { label: "Hair Care", href: "#hair-care" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "Brushes & Tools", href: "#brushes-tools" }
];

const infoLinks: MenuItem[] = [
  { label: "About Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Order History", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Contact Us", href: "#" }
];

const accountLinks: MenuItem[] = [
  { label: "My Account", href: "#" },
  { label: "Brand", href: "#" },
  { label: "Gift Certificates", href: "#" },
  { label: "Affiliates", href: "#" },
  { label: "My Wishlist", href: "#" }
];

const features: Feature[] = [
  { title: "FAST DELIVERY", key: "delivery" },
  { title: "100% AUTHENTIC PRODUCTS", key: "authentic" },
  { title: "PRICES YOU CAN'T RESIST", key: "prices" },
  { title: "ALL ACROSS PALESTINE IN 2 DAYS!", key: "shipping" }
];

const wishlistItems: WishlistItem[] = [
  {
    id: "murillo-bundle",
    title: "Beauty Creations Murillo Twins Vol. 2 Collection Bundle",
    sku: "BA43322",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947117-main-zoom.webp",
    price: 380,
    originalPrice: 460,
    quantity: 1,
    stock: "in",
    action: "ADD TO CART",
    addedOn: "April 19, 2026",
    tags: ["SALE UP TO 15%", "LIMITED EDITION"]
  },
  {
    id: "armani-blush",
    title: "Armani Beauty Luminous Silk Blurring Natural Glow Powder Blush",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/s1900232-main-zoom.webp",
    price: 155,
    originalPrice: 180,
    stock: "in",
    action: "SELECT OPTIONS",
    addedOn: "April 19, 2026"
  },
  {
    id: "armani-highlighter",
    title: "Armani Beauty Luminous Silk Acqua Highlighter",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947109-main-zoom.webp",
    price: 170,
    originalPrice: 190,
    stock: "in",
    action: "SELECT OPTIONS",
    addedOn: "April 19, 2026"
  },
  {
    id: "armani-gift-set",
    title: "Armani Beauty Glowing Cheek Liquid Blush & Highlighter Gift Set",
    sku: "BBW0125",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2908697-main-zoom.webp",
    price: 290,
    originalPrice: 340,
    quantity: 1,
    stock: "out",
    action: "READ MORE",
    addedOn: "April 19, 2026"
  },
  {
    id: "armani-fluid",
    title: "Armani Beauty Fluid Sheer Glow Enhancer Highlighter",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462.avif",
    price: 180,
    stock: "in",
    action: "SELECT OPTIONS",
    addedOn: "April 19, 2026"
  }
];

const shareLinks = [
  { label: "X", hoverLabel: "X", href: "https://x.com/" },
  { label: "f", hoverLabel: "Facebook", href: "https://www.facebook.com/" },
  { label: "vk", hoverLabel: "VK", href: "https://vk.com/" },
  { label: "p", hoverLabel: "Pinterest", href: "https://www.pinterest.com/" },
  {
    label: "✉",
    hoverLabel: "Email",
    href: "mailto:?subject=Beauty%20Bloom%20Wishlist&body=Check%20out%20this%20wishlist%20page"
  },
  { label: "in", hoverLabel: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "◔", hoverLabel: "WhatsApp", href: "https://www.whatsapp.com/" },
  { label: "S", hoverLabel: "Skype", href: "https://www.skype.com/" },
  { label: "•••", hoverLabel: "More", href: "https://beauty-bloom.net/my-account/?et-wishlist-page#" }
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

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="3" width="15" height="13" rx="1" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 18V6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16" />
      <path d="M10 11v6M14 11v6" />
      <path d="M6 7l1 13h10l1-13" />
      <path d="M9 7V4h6v3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 12h12" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 6v12M6 12h12" />
    </svg>
  );
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [activeTab, setActiveTab] = useState<"categories" | "menu">("categories");
  const featureIcons: Record<string, JSX.Element> = {
    delivery: <TruckIcon />,
    authentic: <ShieldIcon />,
    prices: <DollarIcon />,
    shipping: <GlobeIcon />
  };
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = openMenu ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  return (
    <div className="page-shell">
      {openMenu ? <div className="menu-backdrop is-visible" onClick={() => setOpenMenu(false)} aria-hidden="true" /> : null}

      <aside className={`side-menu${openMenu ? " is-open" : ""}`} aria-hidden={!openMenu}>
        <div className="side-menu__header">
          <span>Menu</span>
          <button type="button" className="icon-button icon-button--plain" onClick={() => setOpenMenu(false)} aria-label="Close menu">
            <CloseIcon />
          </button>
        </div>

        <form className="side-menu__search" action="#search">
          <input type="search" placeholder="Search for products..." aria-label="Search products" />
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
          {(activeTab === "categories" ? mobileCategories : mobileMenu).map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <header className="site-header">
        <div className="header-top">
          <div className="mobile-bar">
            <button type="button" className="icon-button icon-button--plain mobile-menu-button" onClick={() => setOpenMenu(true)} aria-label="Open menu">
              <MenuIcon />
            </button>
            <BloomLogo />
            <div className="mobile-bar__spacer" aria-hidden="true" />
          </div>

          <div className="mobile-search">
            <div className="mobile-search__pill">
              <span className="mobile-search__label">Search for</span>
              <span className="mobile-search__value">🔥 {searchQuery.trim() || "Lip Gloss"}</span>
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
              <span>5</span>
            </button>
            <button type="button" className="action-chip" aria-label="Cart">
              <CartIcon />
              <span>1</span>
            </button>
            <a className="language-link" href="https://beauty-bloom.net/ar/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
                className="language-flag-image"
              />
              Arabic
            </a>
          </div>

          <div className="desktop-bar">
            <BloomLogo />
            <button type="button" className="icon-button icon-button--plain" onClick={() => setOpenMenu(true)} aria-label="Open menu">
              <MenuIcon />
            </button>

            <form className="desktop-search" action="#search">
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search for Sprays"
                aria-label="Search products"
              />
              <button type="button" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </form>

            <div className="desktop-actions">
              <button type="button" className="desktop-action-chip" aria-label="Account">
                <UserIcon />
              </button>
              <button type="button" className="desktop-action-chip" aria-label="Compare">
                <RefreshIcon />
                <span>0</span>
              </button>
              <button type="button" className="desktop-action-chip" aria-label="Wishlist">
                <HeartIcon />
                <span>0</span>
              </button>
              <button type="button" className="desktop-action-chip" aria-label="Cart">
                <CartIcon />
                <span>0</span>
              </button>
              <a className="desktop-language-link" href="https://beauty-bloom.net/ar/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                  alt=""
                  className="language-flag-image"
                />
                Arabic
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="desktop-nav" aria-label="Primary categories">
        {navLinks.map((item) => (
          <a key={item.label} href={item.href} className="desktop-nav__link">
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <main className="main-content">
        <h1 className="mobile-page-title">♡ WISHLIST</h1>
        <section className="wishlist-table" aria-label="Wishlist products">
          <div className="wishlist-table__head">
            <span className="wishlist-table__spacer" />
            <span className="wishlist-table__spacer" />
            <span>Quantity</span>
            <span>Price</span>
            <span>Stock Status</span>
            <span>Action</span>
          </div>

          <div className="wishlist-table__body">
            {wishlistItems.map((item) => (
              <article key={item.id} className="wishlist-row">
                <div className="wishlist-row__select">
                  <input type="checkbox" aria-label={`Select ${item.title}`} />
                </div>

                <div className="wishlist-row__product">
                  <div className="wishlist-row__media-wrap">
                    {item.tags?.length ? (
                      <div className="wishlist-row__badges">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    ) : null}
                    <img src={item.image} alt={item.title} className="wishlist-row__image" />
                  </div>

                  <div className="wishlist-row__details">
                    <h2>{item.title}</h2>
                    {item.sku ? <p className="wishlist-row__sku">SKU: {item.sku}</p> : null}
                  </div>
                </div>

                <div className="wishlist-row__quantity">
                  {item.quantity ? (
                    <div className="qty-box">
                      <button type="button" aria-label="Decrease quantity">
                        <MinusIcon />
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" aria-label="Increase quantity">
                        <PlusIcon />
                      </button>
                    </div>
                  ) : (
                    <span className="wishlist-row__dash">-</span>
                  )}
                </div>

                <div className="wishlist-row__price">
                  {item.originalPrice ? <del>{item.originalPrice} ₪</del> : null}
                  <ins>{item.price} ₪</ins>
                </div>

                <div className={`wishlist-row__stock wishlist-row__stock--${item.stock}`}>
                  <CheckIcon />
                  <span>{item.stock === "in" ? "In stock" : "Out of stock"}</span>
                </div>

                <div className="wishlist-row__actions">
                  <div className="wishlist-row__action-group">
                    <button type="button" className="action-icon-button" aria-label="Quick view" data-hover-label="Quick view">
                      <EyeIcon />
                    </button>
                    <button type="button" className="wishlist-action-button wishlist-action-button--with-icon">
                      <span>{item.action}</span>
                    </button>
                    <button type="button" className="action-icon-button" aria-label="Remove item" data-hover-label="Delete">
                      <TrashIcon />
                    </button>
                  </div>
                  <p>Added on: {item.addedOn}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="wishlist-toolbar">
            <div className="wishlist-toolbar__left">
              <select aria-label="Bulk action">
                <option>Remove</option>
                <option>Add to cart</option>
              </select>
              <button type="button" className="toolbar-button toolbar-button--dark">
                APPLY
              </button>
            </div>

            <div className="wishlist-toolbar__right">
              <button type="button" className="toolbar-button toolbar-button--light">
                <span className="toolbar-button__icon">✉</span>
                ASK FOR AN ESTIMATE
              </button>
              <button type="button" className="toolbar-button toolbar-button--dark">
                ADD ALL TO CART
              </button>
            </div>
          </div>

          <div className="wishlist-share">
            <span>Share on:</span>
            <div className="wishlist-share__icons">
              {shareLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  data-hover-label={item.hoverLabel}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div className="feature-strip__inner">
            {features.map((feature) => (
              <div key={feature.key} className="feature-strip__item">
                <span className="feature-strip__icon">{featureIcons[feature.key]}</span>
                <span>{feature.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="policy-panel">
          <div className="policy-panel__inner">
            <h3>Exchange and Return Policy</h3>
            <ul className="policy-list">
              <li>Exchanges are available within 2 days of receiving the order, provided the item is new, clean, and unused.</li>
              <li>If the product is found broken or damaged during delivery, we will replace it with a new one at no extra cost.</li>
              <li>No returns or exchanges will be accepted if the product is damaged due to customer misuse.</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__top">
            <div className="footer__brand">
              <img
                src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
                alt="Bloom Beauty"
              />
            <p className="footer__headline">At Beauty Bloom</p>
            <p className="footer__tagline">
              we are here to make your beauty journey simple, elegant, and trustworthy
            </p>
            <div className="social-row">
              <span>Follow Us:</span>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

            <div>
              <h4>Information</h4>
              <div className="footer-links">
                {infoLinks.map((item) => (
                  <a key={item.label} href={item.href}>
                    <ChevronRightIcon />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4>My Account</h4>
              <div className="footer-links">
                {accountLinks.map((item) => (
                  <a key={item.label} href={item.href}>
                    <ChevronRightIcon />
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

          <div>
            <h4>Contact Info.</h4>
            <div className="contact-list">
              <p>
                <LocationIcon />
                <span>Ramallah Palestine</span>
              </p>
              <p>
                <PhoneIcon />
                <span>WhatsApp : (+972) 59-4871814</span>
              </p>
              <p>
                <MailIcon />
                <span>information@beauty-bloom.net</span>
              </p>
              <p>
                <ClockIcon />
                <span>Sat-Thu 9:00am - 5:00pm Friday: Closed</span>
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Beauty Bloom. All rights reserved.</p>
          <img
            src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/payment.webp"
            alt="Accepted payment methods"
          />
        </div>
      </footer>
    </div>
  );
}
