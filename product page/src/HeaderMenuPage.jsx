import { useMemo, useState } from "react";

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
  { label: "NEW ARRIVALS", href: "https://beauty-bloom.net/product-tag/new-arrivals/" },
  { label: "SKIN CARE", href: "https://beauty-bloom.net/product-tag/skin-care/" },
  { label: "HAIR CARE", href: "https://beauty-bloom.net/product-tag/hair-care/" },
  { label: "PERFUMES", href: "https://beauty-bloom.net/product-tag/perfumes/" },
  { label: "BRUSHES & TOOLS", href: "https://beauty-bloom.net/product-tag/brushes-tools/" },
];

export default function HeaderMenuPage({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("categories");
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
        <button type="button" className="menu-overlay" aria-label="Close menu overlay" onClick={onClose} />
      ) : null}

      <aside className={`side-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <div className="side-drawer__top">
          <strong>Menu</strong>
          <button type="button" aria-label="Close menu" onClick={onClose}>
            X
          </button>
        </div>

        <div className="side-drawer__logo">
          <a href="/" onClick={onClose}>
            <img
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
              alt="Bloom"
            />
          </a>
        </div>

        <div className="side-drawer__search">
          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Search for products..."
          />
        </div>

        <div className="side-drawer__tabs">
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

        <div className="side-drawer__content">
          {visibleItems.map((item) => (
            <a key={item.label} href={item.href} onClick={onClose} className="side-drawer__item">
              <span>{item.label}</span>
              <span aria-hidden="true">{">"}</span>
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
