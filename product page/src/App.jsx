import { useEffect, useState } from "react";

const product = {
  brand: "CHANEL",
  title: "CHANEL SUBLIMAGE LE SERUM YEUX",
  subtitle: "The Radiance-Renewing Eye Serum",
  price: 680,
  originalPrice: 1200,
  currency: " NIS",
  sku: "VNKD96",
  size: "15 ml",
  stock: "1 in stock",
  viewers: 41,
  tags: ["SALE UP TO 43%", "NEW"],
  breadcrumbs: ["Home", "Eyes", "Eye Creams/Serums"],
  categories: ["Eye Creams/Serums", "Eyes"],
  productTags: ["New Arrivals", "Skin Care"],
  gallery: [
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462.avif",
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/9555301269534.webp",
    "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/9545617965086.webp",
  ],
  description: [
    "What it is: A potent yet gentle eye serum that helps to address the look of all youth parameters.",
    "Who it's for: Ideal for all skin types.",
    "What it does: This eye serum helps smooth the look of wrinkles, fine lines and diminishes the appearance of dark circles and puffiness, leaving lashes and eyebrows looking fuller.",
  ],
};

const shopCategories = [
  "Makeup",
  "New Arrivals",
  "Skin Care",
  "Hair Care",
  "Perfumes",
  "Brushes & Tools",
];

const drawerCategories = [
  { label: "BEAUTY ACCESSORIES", href: "https://beauty-bloom.net/shop/?filter_cat=makeup-pouch" },
  { label: "BEST SELLERS", href: "https://beauty-bloom.net/shop/?filter_cat=best-sellers" },
  { label: "BODY CARE", href: "https://beauty-bloom.net/shop/?filter_cat=cleansers-body" },
  { label: "CHEEKS", href: "https://beauty-bloom.net/shop/?filter_cat=cheek" },
  { label: "EYES", href: "https://beauty-bloom.net/shop/?filter_cat=eyes" },
  { label: "FACE", href: "https://beauty-bloom.net/shop/?filter_cat=face" },
  { label: "LIPS", href: "https://beauty-bloom.net/shop/?filter_cat=lips" },
  { label: "NAIL POLISH", href: "https://beauty-bloom.net/shop/?filter_cat=nail-polish" },
  { label: "ORAL CARE", href: "https://beauty-bloom.net/shop/?filter_cat=oral-care" },
  { label: "PERFUMES", href: "https://beauty-bloom.net/shop/?filter_cat=perfumes" },
  { label: "UNCATEGORIZED", href: "https://beauty-bloom.net/shop/" },
];

const drawerMenu = [
  { label: "HOME", href: "https://beauty-bloom.net/" },
  { label: "SHOP", href: "https://beauty-bloom.net/shop/?stock_status=in_stock" },
  { label: "ABOUT US", href: "https://beauty-bloom.net/about-us/" },
  { label: "CONTACT", href: "https://beauty-bloom.net/contact/" },
  { label: "TRACK ORDER", href: "https://beauty-bloom.net/track-your-order/" },
  { label: "MY ACCOUNT", href: "https://beauty-bloom.net/my-account/" },
];

const supportCards = [
  {
    title: "Fast delivery",
    text: "Ship to over 200 city and Village within two days",
    icon: "truck",
  },
  {
    title: "Secure Payment",
    text: "Pay with the world most payment methods.",
    icon: "wallet",
  },
  {
    title: "100% authentic products",
    text: "",
    icon: "badge",
  },
  {
    title: "Discount Available",
    text: "Ongoing discounts & reward points - more perks every time you shop",
    icon: "money",
  },
];

const footerFeatures = [
  { title: "FAST DELIVERY", icon: "delivery" },
  { title: "100% AUTHENTIC PRODUCTS", icon: "authentic" },
  { title: "PRICES YOU CAN'T RESIST", icon: "prices" },
  { title: "ALL ACROSS PALESTINE IN 2 DAYS!", icon: "shipping" },
];

const infoLinks = [
  "About Us",
  "Privacy Policy",
  "Order History",
  "Terms & Conditions",
  "Contact Us",
];

const accountLinks = [
  "My Account",
  "Brand",
  "Gift Certificates",
  "Affiliates",
  "My Wishlist",
];

const tabs = ["Description", "How To Use", "Reviews (0)"];

const similarProducts = [
  {
    title: "NARS Soft Matte Complete Full Coverage Longwear Concealer with Hyaluronic Acid",
    price: 150,
    badge: "",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/s1900232-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/s1900232-av-12-zoom.jpg",
  },
  {
    title: "Glow Recipe PDRN Repair + Soothe Korean Prickly Pear Toner Pads for Skin Barrier",
    price: 165,
    badge: "NEW",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947117-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947117-av-2202602020754498710800-zoom-1.webp",
  },
  {
    title: "Glow Recipe Vitamin C Brightening Korean Guava Toner Pads for Undereye & Cheeks",
    price: 165,
    badge: "NEW",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947109-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2947109-av-12202602090954211640800-zoom-1.webp",
  },
  {
    title: "Rhode Peptide Eye Prep Depuffing Eye Patches",
    price: 150,
    badge: "",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2908697-main-zoom.webp",
    hoverImage:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2908697-av-1202510020926207110700-zoom.webp",
  },
];

function SupportIcon({ type }) {
  if (type === "truck") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 7h10v8H3z" />
        <path d="M13 10h3l3 3v2h-6z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "wallet") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h14a2 2 0 0 1 2 2v8H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
        <path d="M16 11h4v4h-4a2 2 0 0 1 0-4z" />
        <path d="M5 7V5h11" />
      </svg>
    );
  }

  if (type === "badge") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="10" r="5" />
        <path d="M9 14l-1 6 4-2 4 2-1-6" />
        <path d="M10 10.5l1.2 1.2 2.5-2.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c3.9 0 7 2.2 7 5v2.5c0 .9-.4 1.7-1 2.2l-1.4 1.3.9 5.4-3.8-2.1c-.6.2-1.2.2-1.7.2-3.9 0-7-2.2-7-5V8c0-2.8 3.1-5 7-5z" />
      <path d="M12 7v5" />
      <path d="M9.5 9.5h5" />
      <path d="M9.5 13h5" />
    </svg>
  );
}

function ProductCardActionIcon({ type }) {
  if (type === "view") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.5 4.8 13.6A4.7 4.7 0 0 1 11.4 7l.6.7.6-.7a4.7 4.7 0 0 1 6.6 6.6z" />
    </svg>
  );
}

function FooterFeatureIcon({ type }) {
  if (type === "delivery" || type === "shipping") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 8h10v7H3z" />
        <path d="M13 10h3l3 3v2h-6z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }

  if (type === "authentic") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 5 6v5c0 4.3 3 8.2 7 10 4-1.8 7-5.7 7-10V6z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3c4 0 7 2 7 4.5S16 12 12 12 5 10 5 7.5 8 3 12 3z" />
      <path d="M7 12v3c0 1.7 2.2 3 5 3s5-1.3 5-3v-3" />
      <path d="M9 7.5h6" />
      <path d="M12 5v5" />
    </svg>
  );
}

function FooterContactIcon({ type }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s6-6.2 6-11a6 6 0 1 0-12 0c0 4.8 6 11 6 11z" />
        <circle cx="12" cy="10" r="2.2" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 4h3l1 4-2 2c1.2 2.2 2.9 3.9 5.1 5.1l2-2 4 1v3c0 1-1 2-2 2C10.8 19 5 13.2 5 6c0-1 1-2 2-2z" />
      </svg>
    );
  }

  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 8 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function HeaderActionIcon({ type }) {
  if (type === "user") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </svg>
    );
  }

  if (type === "message") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 8.5-8.5h.5a8.5 8.5 0 0 1 8 8z" />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21.2l7.8-7.8 1.1-1.1a5.5 5.5 0 0 0 0-7.7z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function App() {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuTab, setMenuTab] = useState("categories");
  const [menuSearch, setMenuSearch] = useState("");
  const [zoomStyle, setZoomStyle] = useState({
    backgroundPosition: "50% 50%",
    opacity: 0,
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = openMenu ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  const activeDrawerItems = (menuTab === "categories" ? drawerCategories : drawerMenu).filter((item) =>
    item.label.toLowerCase().includes(menuSearch.toLowerCase()),
  );

  const handleZoomMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    setZoomStyle({
      backgroundPosition: `${x}% ${y}%`,
      opacity: 1,
    });
  };

  const handleZoomLeave = () => {
    setZoomStyle((current) => ({
      ...current,
      opacity: 0,
    }));
  };

  return (
      <div className="page-shell">
      {openMenu ? (
        <button
          type="button"
          className="menu-overlay"
          aria-label="Close menu overlay"
          onClick={() => setOpenMenu(false)}
        />
      ) : null}

      <aside
        id="site-menu"
        className={`side-drawer ${openMenu ? "open" : ""}`}
        aria-hidden={!openMenu}
      >
        <div className="side-drawer__top">
          <strong>Menu</strong>
          <button type="button" aria-label="Close menu" onClick={() => setOpenMenu(false)}>
            X
          </button>
        </div>

        <div className="side-drawer__logo">
          <img
            src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
            alt="Bloom Beauty"
          />
        </div>

        <div className="side-drawer__search">
          <input
            type="text"
            value={menuSearch}
            onChange={(event) => setMenuSearch(event.target.value)}
            placeholder={menuTab === "categories" ? "Search categories..." : "Search menu..."}
          />
        </div>

        <div className="side-drawer__tabs">
          <button
            type="button"
            className={menuTab === "categories" ? "active" : ""}
            onClick={() => setMenuTab("categories")}
          >
            CATEGORIES
          </button>
          <button
            type="button"
            className={menuTab === "menu" ? "active" : ""}
            onClick={() => setMenuTab("menu")}
          >
            MENU
          </button>
        </div>

        <div className="side-drawer__content">
          {activeDrawerItems.map((item) => (
            <a
              key={item.label}
              className="side-drawer__item"
              href={item.href}
              onClick={() => setOpenMenu(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">{">"}</span>
            </a>
          ))}
        </div>
      </aside>

      <header className="shop-header">
        <div className="shop-header__logo">
          <img
            src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
            alt="Bloom Beauty"
          />
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Open menu"
          aria-expanded={openMenu}
          aria-controls="site-menu"
          onClick={() => setOpenMenu(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="search-bar">
          <span>Search for</span>
          <strong> Lipsticks</strong>
          <button type="button" className="search-bar__icon" aria-label="Search">
            <span />
          </button>
        </div>

        <div className="header-actions">
          <span className="header-icon-wrap">
            <HeaderActionIcon type="user" />
          </span>
          <span className="header-icon-wrap with-count">
            <HeaderActionIcon type="message" />
            <em>0</em>
          </span>
          <span className="header-icon-wrap with-count">
            <HeaderActionIcon type="heart" />
            <em>0</em>
          </span>
          <span className="header-icon-wrap with-count">
            <HeaderActionIcon type="cart" />
            <em>0</em>
          </span>
          <span className="header-language">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
              alt=""
            />
            Arabic
          </span>
        </div>
      </header>

      <nav className="category-strip">
        {shopCategories.map((item) => (
          <button key={item} type="button" className="category-pill">
            <span>{item}</span>
          </button>
        ))}
      </nav>

      <main id="product" className="product-page">
        <aside className="support-sidebar">
          <div className="breadcrumbs">
            {product.breadcrumbs.map((crumb) => (
              <span key={crumb}>{crumb}</span>
            ))}
          </div>

          {supportCards.map((card) => (
            <section key={card.title} className="support-card">
              <div className="support-icon">
                <SupportIcon type={card.icon} />
              </div>
              <div>
                <h3>{card.title}</h3>
                {card.text ? <p>{card.text}</p> : null}
              </div>
            </section>
          ))}

          <section className="support-card support-help">
            <h3>Need Help?</h3>
            <p>(+972) 59 4871814</p>
            <p>beautybloom.brands</p>
          </section>
        </aside>

        <section className="gallery-stage">
          <div
            className="main-product-image"
            onMouseMove={handleZoomMove}
            onMouseLeave={handleZoomLeave}
          >
            <img src={product.gallery[activeImage]} alt={product.title} />
            <div
              className="image-zoom-overlay"
              style={{
                ...zoomStyle,
                backgroundImage: `url(${product.gallery[activeImage]})`,
              }}
            />
          </div>
          <div className="thumbnail-strip">
            {product.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                className={index === activeImage ? "active" : ""}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`View ${index + 1}`} />
              </button>
            ))}
          </div>
        </section>

        <section className="product-info">
          <a className="back-link" href="#product">
            Return to previous page
          </a>

          <h1>
            {product.title} - <br />
            {product.subtitle}
          </h1>

          <div className="price-row">
            <span className="old-price">
              {product.originalPrice}
              {product.currency}
            </span>
            <span className="new-price">
              {product.price}
              {product.currency}
            </span>
          </div>

          <p className="viewing-line">{product.viewers} people are viewing this product right now</p>

          <div className="brand-block">
            <div className="brand-name">{product.brand}</div>
            <div className="brand-mark">CC</div>
          </div>

          <div className="badge-row">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="size-box">
            <label htmlFor="size">Size:</label>
            <div className="size-select-row">
              <select id="size" defaultValue={product.size}>
                <option>{product.size}</option>
              </select>
              <button type="button">Clear</button>
            </div>
          </div>

          <p className="stock-line">{product.stock}</p>
          <p className="points-line">Purchase this product now and earn 7 Points!</p>

          <div className="cart-row">
            <div className="qty-box">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                +
              </button>
            </div>
            <button type="button" className="add-cart-button">
              ADD TO CART
            </button>
          </div>

          <div className="action-links">
            <button type="button">Add to Wishlist</button>
            <button type="button">Add to compare</button>
          </div>

          <div className="meta-list">
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Categories:</strong> {product.categories.join(", ")}
            </p>
            <p>
              <strong>Tags:</strong> {product.productTags.join(", ")}
            </p>
          </div>
        </section>
      </main>

      <section className="tabs-section">
        <div className="tabs-nav">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === activeTab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="tabs-content">
          {activeTab === "Description" && (
            <>
              {product.description.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </>
          )}
          {activeTab === "How To Use" && (
            <p>Apply a small amount to the eye contour morning and evening using gentle tapping motions.</p>
          )}
          {activeTab === "Reviews (0)" && <p>There are no reviews yet for this product.</p>}
        </div>
      </section>

      <section className="similar-section">
        <h2>Similar Products</h2>
        <div className="similar-grid">
          {similarProducts.map((item) => (
            <article key={item.title} className="similar-card">
              {item.badge ? <span className="similar-badge">{item.badge}</span> : <span className="similar-badge spacer" />}
              <div className="similar-image">
                <img className="default-image" src={item.image} alt={item.title} />
                <img className="hover-image" src={item.hoverImage} alt={`${item.title} alternate`} />
                <div className="similar-actions">
                  <button type="button" aria-label="Quick view">
                    <ProductCardActionIcon type="view" />
                  </button>
                  <button type="button" aria-label="Add to wishlist">
                    <ProductCardActionIcon type="wishlist" />
                  </button>
                </div>
              </div>
              <h3>{item.title}</h3>
              <p className="similar-price">
                {item.price}
                {product.currency}
              </p>
              <button type="button" className="similar-button">
                <span>SELECT OPTIONS</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="footer-features">
        <div className="footer-features__inner">
          {footerFeatures.map((item) => (
            <div key={item.title} className="footer-feature">
              <FooterFeatureIcon type={item.icon} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="exchange-policy">
        <div className="exchange-policy__inner">
          <h3>Exchange and Return Policy</h3>
          <ul>
            <li>Exchanges are available within 2 days of receiving the order, provided the item is new, clean, and unused.</li>
            <li>If the product is found broken or damaged during delivery, we will replace it with a new one at no extra cost.</li>
            <li>No returns or exchanges will be accepted if the product is damaged due to customer misuse.</li>
          </ul>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="footer-brand">
            <img
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
              alt="Bloom Beauty"
            />
            <p className="footer-brand-title">At Beauty Bloom</p>
            <p>we are here to make your beauty journey simple, elegant, and trustworthy</p>

            <div className="footer-social">
              <span>Follow Us:</span>
              <button type="button" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" />
                </svg>
              </button>
            </div>
          </div>

          <div className="footer-links">
            <h4>Information</h4>
            <ul>
              {infoLinks.map((item) => (
                <li key={item}>
                  <a href="#product">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>My Account</h4>
            <ul>
              {accountLinks.map((item) => (
                <li key={item}>
                  <a href="#product">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Info.</h4>
            <ul>
              <li>
                <FooterContactIcon type="location" />
                <span>Ramallah Palestine</span>
              </li>
              <li>
                <FooterContactIcon type="phone" />
                <span>WhatsApp : (+972) 59-4871814</span>
              </li>
              <li>
                <FooterContactIcon type="mail" />
                <span>information@beauty-bloom.net</span>
              </li>
              <li>
                <FooterContactIcon type="clock" />
                <span>Sat-Thu 9:00am - 5:00pm Friday: Closed</span>
              </li>
            </ul>

            <img
              className="payment-image"
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/payment.webp"
              alt="Payment methods"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
