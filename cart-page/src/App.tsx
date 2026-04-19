import { useEffect, useState } from "react";

type FooterLinkGroup = {
  title: string;
  links: string[];
};

const infoLinks: FooterLinkGroup = {
  title: "Information",
  links: [
    "About Us",
    "Privacy Policy",
    "Order History",
    "Terms & Conditions",
    "Contact Us"
  ]
};

const accountLinks: FooterLinkGroup = {
  title: "My Account",
  links: [
    "My Account",
    "Brand",
    "Gift Certificates",
    "Affiliates",
    "My Wishlist"
  ]
};

const navCategories = [
  { name: "Makeup", id: "makeup" },
  { name: "New Arrivals", id: "new-arrivals" },
  { name: "Skin Care", id: "skincare" },
  { name: "Hair Care", id: "haircare" },
  { name: "Perfumes", id: "perfumes" },
  { name: "Brushes & Tools", id: "brushes-tools" }
];

const sideMenuCategories = [
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

const sideMenuLinks = [
  "MAKEUP",
  "NEW ARRIVALS",
  "SKIN CARE",
  "HAIR CARE",
  "PERFUMES",
  "BRUSHES & TOOLS"
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"categories" | "menu">(
    "categories"
  );
  const [currentStep, setCurrentStep] = useState<"cart" | "checkout">("cart");

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const visibleItems =
    activeTab === "categories" ? sideMenuCategories : sideMenuLinks;

  return (
    <div className="page">
      {menuOpen ? (
        <button
          aria-label="Close menu overlay"
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="side-menu__head">
          <h2>Menu</h2>
          <button type="button" onClick={() => setMenuOpen(false)}>
            X
          </button>
        </div>

        <a className="side-menu__logo" href="https://beauty-bloom.net/">
          <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" />
        </a>

        <div className="side-menu__search">
          <input type="text" placeholder="Search for products..." />
          <span aria-hidden="true">
            <SearchIcon />
          </span>
        </div>

        <div className="side-menu__tabs">
          <button
            type="button"
            className={activeTab === "categories" ? "active" : ""}
            onClick={() => setActiveTab("categories")}
          >
            CATEGORIES
          </button>
          <button
            type="button"
            className={activeTab === "menu" ? "active" : ""}
            onClick={() => setActiveTab("menu")}
          >
            MENU
          </button>
        </div>

        <div className="side-menu__items">
          {visibleItems.map((item) => (
            <a key={item} href="https://beauty-bloom.net/shop/">
              <span>{item}</span>
              <span>{">"}</span>
            </a>
          ))}
        </div>
      </aside>

      <header className="site-header">
        <div className="site-header__inner">
          <div className="header-mobile-bar">
            <button
              type="button"
              aria-label="Open menu"
              className="header-icon-button"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>

            <a
              className="brand-logo mobile-brand"
              href="https://beauty-bloom.net/"
            >
              <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" />
            </a>

            <div className="header-mobile-spacer" />
          </div>

          <div className="header-mobile-actions">
            <button type="button" aria-label="Account">
              <UserIcon />
            </button>
            <button type="button" aria-label="Compare">
              <RefreshIcon />
              <span>0</span>
            </button>
            <button type="button" aria-label="Wishlist">
              <HeartIcon />
              <span>0</span>
            </button>
            <button type="button" aria-label="Cart">
              <CartIcon />
              <span>0</span>
            </button>
            <a href="https://beauty-bloom.net/ar/" className="lang-link">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
              />
              Arabic
            </a>
          </div>

          <div className="header-desktop">
            <a className="brand-logo" href="https://beauty-bloom.net/">
              <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" />
            </a>

            <button
              type="button"
              aria-label="Open menu"
              className="header-icon-button"
              onClick={() => setMenuOpen(true)}
            >
              <MenuIcon />
            </button>

            <div className="header-search">
              <span className="label">Search for</span>
              <span className="value">Mascara</span>
              <button type="button" aria-label="Search">
                <SearchIcon />
              </button>
            </div>

            <div className="header-desktop-actions">
              <button type="button" aria-label="Account">
                <UserIcon />
              </button>
              <button type="button" aria-label="Compare">
                <RefreshIcon />
                <span>0</span>
              </button>
              <button type="button" aria-label="Wishlist">
                <HeartIcon />
                <span>0</span>
              </button>
              <button type="button" aria-label="Cart">
                <CartIcon />
                <span>0</span>
              </button>
              <a
                href="https://beauty-bloom.net/ar/"
                className="lang-link desktop"
              >
                <span className="lang-inline">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                    alt=""
                  />
                  Arabic
                </span>
                <span className="lang-underline" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <nav className="top-category-nav" aria-label="Shop categories">
        <div className="top-category-nav__container">
          <div className="top-category-nav__inner">
          {navCategories.map((category) => (
            <a
              key={category.id}
              href="https://beauty-bloom.net/shop/"
              className="top-category-nav__item"
            >
              <span className="top-category-nav__shape" />
              <span className="top-category-nav__label">{category.name}</span>
            </a>
          ))}
          </div>
        </div>
      </nav>

      <main>
        <section className="cart-hero compact">
          <div className="checkout-steps">
            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "cart" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("cart")}
            >
              <span className="checkout-steps__number">1</span>
              <span className="checkout-steps__label">SHOPPING CART</span>
            </button>
            <div className="checkout-steps__line" />
            <button
              type="button"
              className={`checkout-steps__item ${
                currentStep === "checkout" ? "active" : ""
              }`}
              onClick={() => setCurrentStep("checkout")}
            >
              <span className="checkout-steps__number">2</span>
              <span className="checkout-steps__label">CHECKOUT</span>
            </button>
            <div className="checkout-steps__line" />
            <div className="checkout-steps__item">
              <span className="checkout-steps__number">3</span>
              <span className="checkout-steps__label">ORDER STATUS</span>
            </div>
          </div>

          <p className="cart-hero__notice">
            {currentStep === "cart"
              ? "You are out of time! Checkout now to avoid losing your order!"
              : "You are out of time! Checkout now to avoid losing your order!"}
          </p>
        </section>

        {currentStep === "cart" ? (
          <section className="cart-layout">
            <div className="cart-layout__main">
              <div className="cart-table">
                <div className="cart-table__head">
                  <span className="product-col">PRODUCT</span>
                  <span>PRICE</span>
                  <span>SKU</span>
                  <span>QUANTITY</span>
                  <span>SUBTOTAL</span>
                </div>

                <div className="cart-row">
                  <div className="cart-row__product">
                    <div className="cart-row__badges">
                      <span>LIMITED EDITION</span>
                      <span>NEW</span>
                    </div>

                    <div className="cart-row__product-inner">
                      <img
                        src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/11/jo-malone-festive-cologne-duo-300x300.webp"
                        alt="Jo Malone Festive Cologne Duo"
                      />

                      <div className="cart-row__product-copy">
                        <a href="https://beauty-bloom.net/shop/">
                          Jo Malone Festive Cologne Duo
                        </a>
                        <button type="button">Remove</button>
                      </div>
                    </div>
                  </div>

                  <div className="cart-row__cell price">260 ₪</div>
                  <div className="cart-row__cell sku">JM6232R</div>
                  <div className="cart-row__cell qty">
                    <div className="qty-box">
                      <button type="button">-</button>
                      <span>1</span>
                      <button type="button">+</button>
                    </div>
                  </div>
                  <div className="cart-row__cell subtotal">260 ₪</div>
                </div>
              </div>

              <div className="cart-actions">
                <div className="coupon-box">
                  <input type="text" placeholder="Coupon code" />
                  <button type="button">OK</button>
                </div>

                <button
                  type="button"
                  className="slanted-button slanted-button--ghost"
                >
                  <span>Clear Shopping Cart</span>
                </button>
              </div>
            </div>

            <aside className="cart-summary">
              <div className="cart-summary__box">
                <h3>CART TOTALS</h3>

                <div className="cart-summary__row">
                  <span>Subtotal</span>
                  <span>260 ₪</span>
                </div>

                <div className="cart-summary__row cart-summary__row--total">
                  <span>TOTAL</span>
                  <span>260 ₪</span>
                </div>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary"
                  onClick={() => setCurrentStep("checkout")}
                >
                  <span>Proceed To Checkout</span>
                </button>

                <a
                  className="slanted-button slanted-button--secondary"
                  href="https://beauty-bloom.net/shop/"
                >
                  <span>Continue Shopping</span>
                </a>
              </div>

              <section className="payment-security">
                <h3>PAYMENT SECURITY</h3>
                <p>
                  Encryption ensures increased transaction security. SSL
                  technology protects data linked to personal and payment info.
                </p>
                <div
                  className="payment-methods"
                  aria-label="Accepted payment methods"
                >
                  <img
                    src="/image/payment_methods.png"
                    alt="Accepted payment methods"
                  />
                </div>
              </section>
            </aside>
          </section>
        ) : (
          <section className="checkout-layout">
            <div className="checkout-layout__main">
              <div className="checkout-coupon-note">
                Have a coupon?{" "}
                <button type="button" className="text-link-inline">
                  Click here to enter
                </button>
              </div>

              <section className="checkout-card">
                <div className="checkout-card__header checkout-card__header--stacked">
                  <h2>Billing Details</h2>
                </div>

                <div className="checkout-form-grid">
                  <label className="form-field">
                    <span>First Name *</span>
                    <input type="text" placeholder="First Name" />
                  </label>
                  <label className="form-field">
                    <span>Last Name *</span>
                    <input type="text" placeholder="Last Name" />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Country / Region *</span>
                    <select defaultValue="Palestinian Territory">
                      <option>Palestinian Territory</option>
                    </select>
                  </label>
                  <label className="form-field form-field--full">
                    <span>City *</span>
                    <select defaultValue="Select city">
                      <option>Select city</option>
                    </select>
                  </label>
                  <label className="form-field form-field--full">
                    <span>Village *</span>
                    <select defaultValue="Select village">
                      <option>Select village</option>
                    </select>
                  </label>
                  <label className="form-field form-field--full">
                    <span>Street address *</span>
                    <input
                      type="text"
                      placeholder="House number and street name"
                    />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Phone *</span>
                    <input type="tel" placeholder="Phone" />
                  </label>
                  <label className="form-field form-field--full">
                    <span>Email Address *</span>
                    <input
                      type="email"
                      defaultValue="oghannam617@gmail.com"
                    />
                  </label>
                </div>
              </section>

              <section className="checkout-card">
                <h2>Shipping Address</h2>
                <label className="check-line">
                  <input type="checkbox" />
                  <span>Ship to a different address?</span>
                </label>
              </section>

              <section className="checkout-card">
                <h2>Additional Information</h2>
                <label className="form-field form-field--full">
                  <span>Order Notes (optional)</span>
                  <textarea
                    rows={5}
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  />
                </label>
              </section>
            </div>

            <aside className="checkout-sidebar">
              <section className="checkout-card">
                <h2>Your Order</h2>
                <div className="order-summary">
                  <div className="order-summary__product">
                    <strong>
                      Amika Aura Hair &amp; Body Mist with Vanilla and Pink
                      Grapefruit
                    </strong>
                    <span>1 x 155 ₪</span>
                    <span>Size: 90 ml</span>
                    <span>Subtotal: 155 ₪</span>
                  </div>
                  <div className="order-summary__row">
                    <span>Subtotal</span>
                    <span>155 ₪</span>
                  </div>
                  <div className="order-summary__row order-summary__row--total">
                    <span>TOTAL</span>
                    <span>155 ₪</span>
                  </div>
                </div>
              </section>

              <section className="checkout-card">
                <div className="radio-stack radio-stack--checkout">
                  <label className="radio-option radio-option--checkout active">
                    <input type="radio" name="payment" defaultChecked />
                    <div>
                      <strong>Cash on delivery</strong>
                      <span>Pay with cash upon delivery.</span>
                    </div>
                  </label>
                  <label className="radio-option radio-option--checkout">
                    <input type="radio" name="payment" />
                    <div>
                      <strong>Debit/Credit Cards</strong>
                      <span className="inline-payment-icons">
                        <img src="/image/payment_methods.png" alt="Cards" />
                      </span>
                    </div>
                  </label>
                </div>

                <p className="checkout-policy">
                  Your personal data will be used to process your order,
                  support your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>

                <label className="check-line check-line--terms">
                  <input type="checkbox" />
                  <span>
                    I have read and agree to the website terms and conditions *
                  </span>
                </label>

                <button
                  type="button"
                  className="slanted-button slanted-button--primary checkout-place-order"
                >
                  <span>Place Order</span>
                </button>
              </section>
            </aside>
          </section>
        )}
      </main>

      <section className="features-bar">
        <div className="features-bar__grid">
          <div className="feature-item">
            <TruckIcon />
            <span>FAST DELIVERY</span>
          </div>
          <div className="feature-item">
            <ShieldIcon />
            <span>100% AUTHENTIC PRODUCTS</span>
          </div>
          <div className="feature-item">
            <DollarIcon />
            <span>PRICES YOU CAN&apos;T RESIST</span>
          </div>
          <div className="feature-item">
            <GlobeIcon />
            <span>ALL ACROSS PALESTINE IN 2 DAYS!</span>
          </div>
        </div>
      </section>

      <section className="exchange-policy">
        <div className="exchange-policy__inner">
          <h3>Exchange and Return Policy</h3>
          <ul>
            <li>
              Exchanges are available within 2 days of receiving the order,
              provided the item is new, clean, and unused.
            </li>
            <li>
              If the product is found broken or damaged during delivery, we will
              replace it with a new one at no extra cost.
            </li>
            <li>
              No returns or exchanges will be accepted if the product is damaged
              due to customer misuse.
            </li>
          </ul>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="footer-brand">
            <img src="/image/Logo-bloom.webp" alt="Bloom Beauty" />
            <p className="footer-brand__eyebrow">At Beauty Bloom</p>
            <p className="footer-brand__text">
              we are here to make your beauty journey simple, elegant, and
              trustworthy
            </p>

            <div className="footer-social">
              <p>Follow Us:</p>
              <a href="https://www.instagram.com/" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <FooterColumn group={infoLinks} />
          <FooterColumn group={accountLinks} />

          <div className="footer-contact">
            <h4>Contact Info.</h4>
            <ul>
              <li>
                <LocationIcon />
                <span>Ramallah Palestine</span>
              </li>
              <li>
                <PhoneIcon />
                <span>WhatsApp : (+972) 59-4871814</span>
              </li>
              <li>
                <MailIcon />
                <span>information@beauty-bloom.net</span>
              </li>
              <li>
                <ClockIcon />
                <span>Sat-Thu 9:00pm - 5:00pm Friday:Closed</span>
              </li>
            </ul>

            <img
              className="payment-strip"
              src="/image/payment.webp"
              alt="Payment methods"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterColumn({ group }: { group: FooterLinkGroup }) {
  return (
    <div className="footer-column">
      <h4>{group.title}</h4>
      <ul>
        {group.links.map((item) => (
          <li key={item}>
            <a href="https://beauty-bloom.net/">
              <ChevronRight />
              <span>{item}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <path d="M3 3v6h6" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21 4 13.3a5.5 5.5 0 0 1 7.8-7.8L12 6.7l.2-.2A5.5 5.5 0 0 1 20 14Z" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="4" width="14" height="11" rx="1" />
      <path d="M15 8h4l4 4v3h-8Z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
      <path d="M12 6v12" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s-8-6-8-13a8 8 0 0 1 16 0c0 7-8 13-8 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
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

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default App;
