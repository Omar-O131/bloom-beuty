import { useMemo, useState } from 'react';

const categories = [
  'BEAUTY ACCESSORIES',
  'BEST SELLERS',
  'BODY CARE',
  'CHEEKS',
  'EYES',
  'FACE',
  'LIPS',
  'NAIL POLISH',
  'ORAL CARE',
  'PERFUMES',
  'UNCATEGORIZED',
];

const menuLinks = [
  { label: 'MAKEUP', href: 'https://beauty-bloom.net/product-tag/makeup/' },
  {
    label: 'NEW ARRIVALS',
    href: 'https://beauty-bloom.net/product-tag/new-arrivals/',
  },
  {
    label: 'SKIN CARE',
    href: 'https://beauty-bloom.net/product-tag/skin-care/',
  },
  {
    label: 'HAIR CARE',
    href: 'https://beauty-bloom.net/product-tag/hair-care/',
  },
  { label: 'PERFUMES', href: 'https://beauty-bloom.net/product-tag/perfumes/' },
  {
    label: 'BRUSHES & TOOLS',
    href: 'https://beauty-bloom.net/product-tag/brushes-tools/',
  },
];

export default function HeaderMenuPage({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchValue, setSearchValue] = useState('');

  const visibleItems = useMemo(() => {
    const source =
      activeTab === 'categories'
        ? categories.map((label) => ({
            label,
            href: 'https://beauty-bloom.net/shop/',
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
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-black/35" onClick={onClose} />
      )}

      <aside
        className={`fixed left-0 top-0 z-[70] flex h-full w-[320px] max-w-[88vw] flex-col overflow-hidden bg-[#2e3746] text-white shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="sticky top-0 z-10 bg-[#2e3746]">
          <div className="flex items-center justify-between px-4 py-4">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              type="button"
              className="text-base font-semibold leading-none text-white/70 transition-colors hover:text-white"
              onClick={onClose}
            >
              X
            </button>
          </div>

          <div className="px-4 pb-5 pt-6">
            <a href="/" onClick={onClose} className="block">
              <img
                src="/image/Logo-bloom.webp"
                alt="Bloom"
                className="mx-auto h-auto w-36 object-contain"
              />
            </a>
          </div>

          <div className="p-4">
            <div className="relative overflow-hidden rounded-none bg-white pl-4 pr-14">
              <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Search for products..."
                className="h-10 w-full bg-transparent text-sm font-semibold text-[#6b6b6b] outline-none placeholder:text-[#8a8a8a]"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2e3746]">
                ⌕
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 flex border-b border-white/30 text-sm font-bold">
          <button
            type="button"
            onClick={() => setActiveTab('categories')}
            className={`relative w-1/2 py-3 text-left ${
              activeTab === 'categories' ? 'text-white' : 'text-white/55'
            }`}
          >
            CATEGORIES
            {activeTab === 'categories' && (
              <span className="absolute bottom-[-1px] left-0 h-[2px] w-[120px] bg-white" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('menu')}
            className={`relative w-1/2 py-3 text-left ${
              activeTab === 'menu' ? 'text-white' : 'text-white/55'
            }`}
          >
            MENU
            {activeTab === 'menu' && (
              <span className="absolute bottom-[-1px] left-0 h-[2px] w-[72px] bg-white" />
            )}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="space-y-1 text-sm font-semibold">
            {visibleItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between border-b border-white/70 px-0 py-4 text-[15px] font-extrabold tracking-[0.01em] text-white transition-colors hover:text-white/75"
              >
                <span>{item.label}</span>
                <span className="text-xs text-white/80">{'>'}</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
