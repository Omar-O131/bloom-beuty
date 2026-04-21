import { useEffect, useState, type ReactNode } from "react";

type MenuItem = {
  label: string;
  href: string;
};

type CategoryGroup = MenuItem & {
  children?: MenuItem[];
};

const bloomLinks = {
  home: "https://beauty-bloom.net/",
  search: "https://beauty-bloom.net/",
  account: "https://beauty-bloom.net/my-account/",
  compare: "https://beauty-bloom.net/my-account/?et-compare-page",
  wishlist: "https://beauty-bloom.net/my-account/?et-wishlist-page",
  cart: "https://beauty-bloom.net/cart/",
  arabic: "https://beauty-bloom.net/ar/",
  contact: "https://beauty-bloom.net/contact-us/",
} as const;

const categories: CategoryGroup[] = [
  { label: "Beauty Accessories", href: "#beauty-accessories" },
  { label: "Best Sellers", href: "#best-sellers" },
  { label: "Body Care", href: "#body-care" },
  {
    label: "Cheeks",
    href: "#cheeks",
    children: [
      { label: "Blushes", href: "#blushes" },
      { label: "Bronzers & Contours", href: "#bronzers-contours" },
      { label: "Highlighters", href: "#highlighters" },
    ],
  },
  {
    label: "Eyes",
    href: "#eyes",
    children: [
      { label: "Concealers / Correctors", href: "#concealers-correctors" },
      { label: "Eye Creams / Serums", href: "#eye-creams-serums" },
      { label: "Eyebrow / Lashes", href: "#eyebrow-lashes" },
      { label: "Eyeliners & Kohl", href: "#eyeliners-kohl" },
      { label: "Eyeshadows", href: "#eyeshadows" },
      { label: "Mascaras", href: "#mascaras" },
    ],
  },
  {
    label: "Face",
    href: "#face",
    children: [
      { label: "BB & CC Cream", href: "#bb-cc-cream" },
      { label: "Foundation", href: "#foundation" },
      { label: "Loose Powder", href: "#loose-powder" },
      { label: "Primer", href: "#primer" },
      { label: "Setting Spray", href: "#setting-spray" },
    ],
  },
  {
    label: "Lips",
    href: "#lips",
    children: [
      { label: "Lip Balms", href: "#lip-balms" },
      { label: "Lip Gloss", href: "#lip-gloss" },
      { label: "Lip Liners", href: "#lip-liners" },
      { label: "Lipsticks", href: "#lipsticks" },
    ],
  },
  { label: "Nail Polish", href: "#nail-polish" },
  { label: "Oral Care", href: "#oral-care" },
  { label: "Perfumes", href: "#perfumes" },
];

const menuLinks: MenuItem[] = [
  { label: "Home", href: bloomLinks.home },
  { label: "Shop", href: "#shop" },
  { label: "About Us", href: "#about-us" },
  { label: "Contact Us", href: bloomLinks.contact },
  { label: "Track Order", href: "#track-order" },
  { label: "My Account", href: bloomLinks.account },
];

const navLinks: MenuItem[] = [
  { label: "Makeup", href: "#makeup" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Skin Care", href: "#skin-care" },
  { label: "Hair Care", href: "#hair-care" },
  { label: "Perfumes", href: "#perfumes" },
  { label: "Brushes & Tools", href: "#brushes-tools" },
];

const accountPanelLinks: MenuItem[] = [
  { label: "Dashboard", href: bloomLinks.account },
  { label: "Orders", href: "https://beauty-bloom.net/my-account/orders/" },
  { label: "Downloads", href: "https://beauty-bloom.net/my-account/downloads/" },
  { label: "Addresses", href: "https://beauty-bloom.net/my-account/edit-address/" },
  { label: "Payment Methods", href: "https://beauty-bloom.net/my-account/payment-methods/" },
  { label: "My Points", href: bloomLinks.account },
  { label: "Account Details", href: "https://beauty-bloom.net/my-account/edit-account/" },
  { label: "Wishlist", href: bloomLinks.wishlist },
  { label: "Compare", href: bloomLinks.compare },
  { label: "Waitlist", href: bloomLinks.account },
  { label: "Log Out", href: "https://beauty-bloom.net/my-account/customer-logout/" },
];

const wishlistItems = [
  {
    title: "Beauty Creations Murillo Twins Vol. 2 Collection Bundle",
    price: "1 × 380 ₪",
    image: "/product-img/wishlist-1.webp",
    badges: ["Sale Up To 17%", "Limited Edition"],
  },
  {
    title: "Armani Beauty Luminous Silk Blurring Natural Glow Blush",
    price: "1 × 155 ₪",
    image: "/product-img/wishlist-2.webp",
    badges: ["Sale Up To 14%"],
  },
  {
    title: "Armani Beauty Luminous Silk Acqua Highlighter",
    price: "1 × 170 ₪",
    image: "/product-img/wishlist-3.jpg",
    badges: ["Sale Up To 11%"],
  },
] as const;

const cartItems = [
  {
    title: "Jo Malone Festive Collection",
    price: "1 × 260 ₪",
    sku: "JM6232R",
    image: "/product-img/wishlist-1.webp",
    badges: ["Limited Edition", "New"],
  },
  {
    title: "Sephora Favorites Holiday Set",
    price: "1 × 290 ₪",
    sku: "SE353",
    image: "/product-img/wishlist-2.webp",
    badges: ["Limited Edition"],
  },
  {
    title: "Lancôme Génifique Ultimate Serum",
    price: "1 × 530 ₪",
    sku: "LAAD84854",
    image: "/product-img/wishlist-3.jpg",
    badges: ["Sale Up To 36%", "Limited Edition", "New"],
  },
  {
    title: "ONE/SIZE BY PATRICK TA Gift Set",
    price: "1 × 245 ₪",
    sku: "OS35343",
    image: "/product-img/wishlist-1.webp",
    badges: ["Limited Edition"],
  },
] as const;

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
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12a8 8 0 0 1-13.66 5.66" />
      <path d="M4 12A8 8 0 0 1 17.66 6.34" />
      <path d="M16 3.8v3.7h3.7" />
      <path d="M8 20.2v-3.7H4.3" />
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
      <path d="M7 8h10.2l-.9 10a1.4 1.4 0 0 1-1.4 1.3H9.1A1.4 1.4 0 0 1 7.7 18z" />
      <path d="M9 9V7.4A3 3 0 0 1 12 4.5a3 3 0 0 1 3 2.9V9" />
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`chevron-icon${open ? " is-open" : ""}`}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function BloomLogo() {
  return (
    <a className="brand-mark" href={bloomLinks.home} aria-label="Bloom Beauty home">
      <img
        src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
        alt="Bloom Beauty"
      />
    </a>
  );
}

function HeaderCounter({
  label,
  count,
  href,
  children,
}: {
  label: string;
  count?: number;
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="header-counter" aria-label={label} href={href}>
      <span className="header-counter__icon">{children}</span>
      {typeof count === "number" ? <span className="header-counter__count">{count}</span> : null}
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
  const [expandedCategory, setExpandedCategory] = useState<string | null>("Eyes");

  useEffect(() => {
    if (!open) {
      setActiveTab("categories");
      setExpandedCategory("Eyes");
    }
  }, [open]);

  return (
    <>
      <div
        className={`menu-backdrop${open ? " is-visible" : ""}`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside className={`side-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="side-menu__header">
          <button
            type="button"
            className="icon-button side-menu__close-button"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="side-menu__logo">
          <BloomLogo />
        </div>

        <form className="side-menu__search" action={bloomLinks.search} method="get">
          <input type="search" placeholder="Search for products..." aria-label="Search products" name="s" />
          <input type="hidden" name="post_type" value="product" />
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

        {activeTab === "categories" ? (
          <nav className="side-menu__list" aria-label="Categories">
            {categories.map((item) => {
              const isExpanded = expandedCategory === item.label;
              const hasChildren = Boolean(item.children?.length);

              return (
                <div key={item.label} className={`side-menu__group${isExpanded ? " is-expanded" : ""}`}>
                  <div className="side-menu__group-row">
                    <a href={item.href} onClick={onClose} className="side-menu__group-link">
                      {item.label}
                    </a>
                    {hasChildren ? (
                      <button
                        type="button"
                        className="side-menu__toggle"
                        aria-label={`Toggle ${item.label}`}
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedCategory((current) => (current === item.label ? null : item.label))
                        }
                      >
                        <ChevronIcon open={isExpanded} />
                      </button>
                    ) : null}
                  </div>

                  {hasChildren && isExpanded ? (
                    <div className="side-menu__children">
                      {item.children?.map((child) => (
                        <a key={child.label} href={child.href} onClick={onClose}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
        ) : (
          <nav className="side-menu__list" aria-label="Site menu">
            {menuLinks.map((item) => (
              <a key={item.label} href={item.href} onClick={onClose}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </aside>
    </>
  );
}

function AccountPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className={`account-backdrop${open ? " is-visible" : ""}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`account-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="account-panel__header">
          <div className="account-panel__title">
            <UserIcon />
            <span>My Account</span>
          </div>
        </div>

        <nav className="account-panel__list" aria-label="My account links">
          {accountPanelLinks.map((item) => (
            <a key={item.label} href={item.href} onClick={onClose}>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}

function ComparePanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className={`account-backdrop${open ? " is-visible" : ""}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`account-panel compare-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="icon-button compare-panel__close-button"
          onClick={onClose}
          aria-label="Close compare"
        >
          <CloseIcon />
        </button>
        <div className="compare-panel__body">
          <p>No products in the compare.</p>
          <a className="compare-panel__button" href={bloomLinks.home} onClick={onClose}>
            <span>Return to Shop</span>
          </a>
        </div>
      </aside>
    </>
  );
}

function WishlistPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className={`account-backdrop${open ? " is-visible" : ""}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`account-panel wishlist-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="icon-button wishlist-panel__close-button"
          onClick={onClose}
          aria-label="Close wishlist"
        >
          <CloseIcon />
        </button>

        <div className="wishlist-panel__list">
          {wishlistItems.map((item) => (
            <div key={item.title} className="wishlist-panel__item">
              <div className="wishlist-panel__image-wrap">
                {item.badges.map((badge) => (
                  <span key={badge} className="wishlist-panel__badge">
                    {badge}
                  </span>
                ))}
                <img src={item.image} alt={item.title} />
              </div>

              <div className="wishlist-panel__content">
                <p className="wishlist-panel__title">{item.title}</p>
                <p className="wishlist-panel__price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="wishlist-panel__actions">
          <a className="wishlist-panel__button wishlist-panel__button--secondary" href={bloomLinks.wishlist} onClick={onClose}>
            <span>View Wishlist</span>
          </a>
          <a className="wishlist-panel__button wishlist-panel__button--primary" href={bloomLinks.cart} onClick={onClose}>
            <span>Add All to Cart</span>
          </a>
        </div>
      </aside>
    </>
  );
}

function CartPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div className={`account-backdrop${open ? " is-visible" : ""}`} onClick={onClose} aria-hidden={!open} />
      <aside className={`account-panel cart-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="icon-button wishlist-panel__close-button"
          onClick={onClose}
          aria-label="Close cart"
        >
          <CloseIcon />
        </button>

        <div className="cart-panel__header">
          <CartIcon />
          <span>Cart</span>
        </div>

        <div className="cart-panel__list">
          {cartItems.map((item) => (
            <div key={item.title} className="cart-panel__item">
              <div className="cart-panel__image-wrap">
                {item.badges.map((badge) => (
                  <span key={badge} className="wishlist-panel__badge">
                    {badge}
                  </span>
                ))}
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-panel__content">
                <p className="cart-panel__title">{item.title}</p>
                <p className="cart-panel__price">{item.price}</p>
                <p className="cart-panel__sku">SKU: {item.sku}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-panel__footer">
          <div className="cart-panel__subtotal">
            <span>Subtotal:</span>
            <span>1,325 ₪</span>
          </div>
          <a className="wishlist-panel__button wishlist-panel__button--secondary" href={bloomLinks.cart} onClick={onClose}>
            <span>View Cart</span>
          </a>
          <a className="wishlist-panel__button wishlist-panel__button--primary" href={bloomLinks.cart} onClick={onClose}>
            <span>Checkout</span>
          </a>
        </div>
      </aside>
    </>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchLabel] = useState("");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen || accountOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [accountOpen, menuOpen]);

  useEffect(() => {
    if (!compareOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest(".compare-panel")) {
        return;
      }

      setCompareOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [compareOpen]);

  useEffect(() => {
    if (!wishlistOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest(".wishlist-panel")) {
        return;
      }

      setWishlistOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [wishlistOpen]);

  useEffect(() => {
    if (!cartOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;

      if (target?.closest(".cart-panel")) {
        return;
      }

      setCartOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown, true);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [cartOpen]);

  return (
    <div className="page-shell">
      <OffCanvasMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <AccountPanel open={accountOpen} onClose={() => setAccountOpen(false)} />
      <ComparePanel open={compareOpen} onClose={() => setCompareOpen(false)} />
      <WishlistPanel open={wishlistOpen} onClose={() => setWishlistOpen(false)} />
      <CartPanel open={cartOpen} onClose={() => setCartOpen(false)} />

      <div className="site-header">
        <header className="header-top">
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
              <span className="mobile-search__emoji" aria-hidden="true">
                🔥
              </span>
              <span className="mobile-search__value">{mobileSearchLabel}</span>
              <button type="button" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="mobile-actions">
            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Account"
              onClick={() => {
                setCompareOpen(false);
                setWishlistOpen(false);
                setCartOpen(false);
                setAccountOpen(true);
              }}
            >
              <UserIcon />
            </button>
            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Compare"
              onClick={() => {
                setWishlistOpen(false);
                setCartOpen(false);
                setCompareOpen((current) => !current);
              }}
            >
              <RefreshIcon />
              <span className="header-counter__count">0</span>
            </button>
            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Wishlist"
              onClick={() => {
                setCompareOpen(false);
                setCartOpen(false);
                setWishlistOpen((current) => !current);
              }}
            >
              <HeartIcon />
              <span className="header-counter__count">0</span>
            </button>
            <button
              type="button"
              className="header-counter header-counter--button"
              aria-label="Cart"
              onClick={() => {
                setCompareOpen(false);
                setWishlistOpen(false);
                setCartOpen((current) => !current);
              }}
            >
              <CartIcon />
              <span className="header-counter__count">1</span>
            </button>
            <a className="language-link" href={bloomLinks.arabic}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
              />
              Arabic
            </a>
          </div>

          <div className="desktop-bar">
            <BloomLogo />

            <button
              type="button"
              className="icon-button desktop-menu-button"
              onClick={() => {
                setCompareOpen(false);
                setMenuOpen(true);
              }}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <form className="desktop-search" action={bloomLinks.search} method="get">
              {!searchQuery ? (
                <span className="desktop-search__prompt" aria-hidden="true">
                  <span className="desktop-search__hint">Search for</span>
                  <span className="desktop-search__emoji">🔥</span>
                  <span className="desktop-search__topic">Foundations</span>
                </span>
              ) : null}
              <input
                type="search"
                placeholder=""
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Search products"
                name="s"
              />
              <input type="hidden" name="post_type" value="product" />
              <button type="submit" className="search-submit" aria-label="Search">
                <SearchIcon />
              </button>
            </form>

            <div className="desktop-actions">
              <button
                type="button"
              className="header-counter header-counter--button"
              aria-label="Account"
              onClick={() => {
                  setCompareOpen(false);
                  setWishlistOpen(false);
                  setCartOpen(false);
                  setAccountOpen(true);
                }}
              >
                <UserIcon />
              </button>
              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Compare"
                onClick={() => {
                  setWishlistOpen(false);
                  setCartOpen(false);
                  setCompareOpen((current) => !current);
                }}
              >
                <RefreshIcon />
                <span className="header-counter__count">0</span>
              </button>
              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Wishlist"
                onClick={() => {
                  setCompareOpen(false);
                  setCartOpen(false);
                  setWishlistOpen((current) => !current);
                }}
              >
                <HeartIcon />
                <span className="header-counter__count">0</span>
              </button>
              <button
                type="button"
                className="header-counter header-counter--button"
                aria-label="Cart"
                onClick={() => {
                  setCompareOpen(false);
                  setWishlistOpen(false);
                  setCartOpen((current) => !current);
                }}
              >
                <CartIcon />
                <span className="header-counter__count">1</span>
              </button>
              <a className="language-link desktop-language-link" href={bloomLinks.arabic}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                  alt=""
                />
                Arabic
              </a>
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

        <nav className="mobile-nav" aria-label="Mobile categories">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="mobile-nav__link">
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
