import HeaderMenuApp from '../../Header-menu/src/App';
import FooterSectionApp from '../../footer-section/src/App';

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
  return (
    <div className="page-shell">
      <HeaderMenuApp />

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

                    <img
                      src={item.image}
                      alt={item.title}
                      className="wishlist-row__image"
                    />
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
                    <button
                      type="button"
                      className="action-icon-button"
                      aria-label="Quick view"
                      data-hover-label="Quick view"
                    >
                      <EyeIcon />
                    </button>

                    <button
                      type="button"
                      className="wishlist-action-button wishlist-action-button--with-icon"
                    >
                      <span>{item.action}</span>
                    </button>

                    <button
                      type="button"
                      className="action-icon-button"
                      aria-label="Remove item"
                      data-hover-label="Delete"
                    >
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
      </main>

      <FooterSectionApp />
    </div>
  );
}
