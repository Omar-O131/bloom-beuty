import { useMemo, useState } from "react";

type HeaderMenuPageProps = {
  isOpen: boolean;
  onClose: () => void;
};

const categories = [
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

export default function HeaderMenuPage({
  isOpen,
  onClose,
}: HeaderMenuPageProps) {
  const [activeTab, setActiveTab] = useState<"categories" | "menu">(
    "categories",
  );
  const [searchValue, setSearchValue] = useState("");

  const visibleItems = useMemo(() => {
    const source =
      activeTab === "categories"
        ? categories.map((label) => ({
            label,
            href: "https://beauty-bloom.net/shop/",
          }))
        : menuLinks;

    const query = searchValue.trim().toLowerCase();

    if (!query) {
      return source;
    }

    return source.filter((item) => item.label.toLowerCase().includes(query));
  }, [activeTab, searchValue]);

  return (
    <>
      {isOpen ? (
        <button
          aria-label="Close menu"
          className="menu-overlay"
          onClick={onClose}
          type="button"
        />
      ) : null}

      <aside
        aria-hidden={!isOpen}
        className={`mobile-menu${isOpen ? " mobile-menu--open" : ""}`}
      >
        <div className="mobile-menu__header">
          <strong>Menu</strong>
          <button onClick={onClose} type="button">
            X
          </button>
        </div>

        <div className="mobile-menu__logo">
          <a href="https://beauty-bloom.net/" onClick={onClose}>
            <img
              alt="Bloom"
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
            />
          </a>
        </div>

        <div className="mobile-menu__search">
          <div className="mobile-menu__search-box">
            <input
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search for products..."
              type="text"
              value={searchValue}
            />
            <span>⌕</span>
          </div>
        </div>

        <div className="mobile-menu__tabs">
          <button
            className={`mobile-menu__tab${
              activeTab === "categories" ? " mobile-menu__tab--active" : ""
            }`}
            onClick={() => setActiveTab("categories")}
            type="button"
          >
            CATEGORIES
          </button>
          <button
            className={`mobile-menu__tab${
              activeTab === "menu" ? " mobile-menu__tab--active" : ""
            }`}
            onClick={() => setActiveTab("menu")}
            type="button"
          >
            MENU
          </button>
        </div>

        <div className="mobile-menu__section">
          <div className="mobile-menu__list">
            {visibleItems.map((item) => (
              <a href={item.href} key={item.label} onClick={onClose}>
                <span>{item.label}</span>
                <span>&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
