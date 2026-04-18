import { useEffect, useState } from 'react';
import HeaderMenuPage from './HeaderMenuPage';

const navCategories = [
  { name: 'Makeup', id: 'makeup' },
  { name: 'New Arrivals', id: 'new-arrivals' },
  { name: 'Skin Care', id: 'skincare' },
  { name: 'Hair Care', id: 'haircare' },
  { name: 'Perfumes', id: 'perfumes' },
  { name: 'Brushes & Tools', id: 'brushes-tools' },
];

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M20 21a8 8 0 0 0-16 0" />
  </svg>
);

const RefreshIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const CartIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

function BloomLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[54px] w-[110px] md:h-[58px] md:w-[118px]">
        <img
          src="/image/Logo-bloom.webp"
          alt="Logo"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export function BloomHeader() {
  const [searchQuery] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const searchLabel = searchQuery.trim() || 'Mascara';

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = openMenu ? 'hidden' : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  return (
    <>
      <HeaderMenuPage isOpen={openMenu} onClose={() => setOpenMenu(false)} />

      <header className="sticky top-0 z-50 border-t-2 border-[#231226] bg-[#f564aa] shadow-md">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between px-1 py-1.5 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="p-2 text-white"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <BloomLogo />
            </div>

            <div className="w-10" aria-hidden="true" />
          </div>

          <div className="px-2 pb-2 md:hidden">
            <div className="relative flex min-h-[40px] items-center overflow-hidden rounded-full border border-white/70 bg-white pl-5 pr-16 text-[13px] text-gray-500 shadow-[inset_0_0_0_1px_rgba(214,214,214,0.45)]">
              <span className="font-semibold text-[#666]">Search for</span>
              <span className="ml-1.5 font-bold text-[#858585]">
                {searchLabel}
              </span>
              <button
                type="button"
                aria-label="Search"
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#c43f79] text-white"
              >
                <SearchIcon />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 border-b border-white/20 px-1.5 pb-2 text-white md:hidden">
            <button type="button" className="inline-flex items-center gap-1 text-sm">
              <UserIcon />
            </button>
            <button type="button" className="inline-flex items-center gap-1 text-sm">
              <RefreshIcon />
              <span className="text-xs font-semibold">0</span>
            </button>
            <button type="button" className="inline-flex items-center gap-1 text-sm">
              <HeartIcon />
              <span className="text-xs font-semibold">0</span>
            </button>
            <button type="button" className="inline-flex items-center gap-1 text-sm">
              <CartIcon />
              <span className="text-xs font-semibold">0</span>
            </button>
            <a
              href="https://beauty-bloom.net/ar/"
              className="ml-2 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                alt=""
                className="h-3 w-4 rounded-[1px] object-cover"
              />
              Arabic
            </a>
          </div>

          <div className="hidden h-[66px] items-center gap-4 px-5 md:flex">
            <a href="/" className="flex items-center">
              <BloomLogo />
            </a>
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="rounded-lg p-2 text-white transition hover:bg-white/10"
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <div className="flex-1">
              <div className="relative">
                <div className="flex h-[44px] items-center overflow-hidden rounded-full border border-white/80 bg-white pl-6 pr-16 text-sm text-gray-500">
                  <span className="font-semibold text-[#666]">Search for</span>
                  <span className="ml-2 font-bold text-[#858585]">
                    🔥 {searchLabel}
                  </span>
                </div>
                <button
                  type="button"
                  className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-[#c43f79] text-white"
                >
                  <SearchIcon />
                </button>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-5 text-white">
              <button type="button" className="inline-flex items-center gap-1 text-sm">
                <UserIcon />
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-sm">
                <RefreshIcon />
                <span className="text-xs font-semibold">0</span>
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-sm">
                <HeartIcon />
                <span className="text-xs font-semibold">0</span>
              </button>
              <button type="button" className="inline-flex items-center gap-1 text-sm">
                <CartIcon />
                <span className="text-xs font-semibold">0</span>
              </button>
              <a
                href="https://beauty-bloom.net/ar/"
                className="inline-flex flex-col items-start text-sm font-semibold leading-none"
              >
                <span className="inline-flex items-center gap-1.5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
                    alt=""
                    className="h-3 w-4 rounded-[1px] object-cover"
                  />
                  Arabic
                </span>
                <span className="mt-1 h-[2px] w-full bg-[#7a1f48]" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export function BloomCategoryNav() {
  return (
    <nav className="hidden border-b border-gray-100 bg-white py-4 md:block">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {navCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              className="group relative px-7 py-2.5 md:px-8"
            >
              <span className="absolute inset-0 -skew-x-12 rounded-[2px] border-[3px] border-[#f564aa] bg-transparent transition-all duration-300 group-hover:bg-[#f564aa]" />
              <span className="relative z-10 text-sm font-medium text-black transition-colors duration-300 group-hover:text-white">
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
