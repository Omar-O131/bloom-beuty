const infoLinks = [
  'About Us',
  'Privacy Policy',
  'Order History',
  'Terms & Conditions',
  'Contact Us',
];

const accountLinks = [
  'My Account',
  'Brand',
  'Gift Certificates',
  'Affiliates',
  'My Wishlist',
];

const features = [
  { title: 'FAST DELIVERY', key: 'delivery' },
  { title: '100% AUTHENTIC PRODUCTS', key: 'authentic' },
  { title: "PRICES YOU CAN'T RESIST", key: 'prices' },
  { title: 'ALL ACROSS PALESTINE IN 2 DAYS!', key: 'shipping' },
];

const TruckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const DollarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 18V6" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function FooterLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-[120px] w-[200px]">
        <img src="/image/Logo-bloom.webp" alt="Logo" className="h-full w-full object-contain" />
      </div>
    </div>
  );
}

export function BloomFooterSections() {
  const featureIcons = {
    delivery: <TruckIcon />,
    authentic: <ShieldIcon />,
    prices: <DollarIcon />,
    shipping: <GlobeIcon />,
  };

  return (
    <>
      <section className="bg-primary py-6 text-white border-t border-pink-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 md:grid-cols-4 md:gap-8">
          {features.map((feature) => (
            <div key={feature.key} className="flex items-center gap-3 justify-start md:justify-center">
              <span>{featureIcons[feature.key]}</span>
              <span className="text-sm font-semibold tracking-wide">{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#ffc4d6] py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h3 className="mb-4 text-xl font-bold text-gray-800">Exchange and Return Policy</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>•Exchanges are available within 2 days of receiving the order, provided the item is new, clean, and unused.</li>
            <li>•If the product is found broken or damaged during delivery, we will replace it with a new one at no extra cost.</li>
            <li>•No returns or exchanges will be accepted if the product is damaged due to customer misuse.</li>
          </ul>
        </div>
      </section>

      <footer className="bg-[#faa5bd] pb-8 pt-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            <div className="space-y-7 text-left">
              <div className="flex justify-center md:justify-start">
                <FooterLogo />
              </div>
              <div>
                <p className="text-black font-medium">At Beauty Bloom</p>
                <p className="max-w-sm text-sm font-semibold leading-7 text-black">
                  we are here to make your beauty journey simple, elegant, and trustworthy
                </p>
              </div>

              <div className="pt-4">
                <p className="mb-3 font-semibold text-white">Follow Us:</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#543c4e] text-white transition-colors hover:bg-[#c43f79]"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon />
                </button>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Information</h4>
              <ul className="space-y-3">
                {infoLinks.map((item) => (
                  <li key={item}>
                    <button type="button" className="flex items-center gap-2 text-black transition-colors hover:text-white">
                      <ChevronRight />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-bold text-white">My Account</h4>
              <ul className="space-y-3">
                {accountLinks.map((item) => (
                  <li key={item}>
                    <button type="button" className="flex items-center gap-2 text-black transition-colors hover:text-white">
                      <ChevronRight />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-bold text-white">Contact Info.</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary"><LocationIcon /></span>
                  <span className="text-black">Ramallah Palestine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary"><PhoneIcon /></span>
                  <span className="text-black">WhatsApp : (+972) 59-4871814</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary"><MailIcon /></span>
                  <span className="break-all text-black">information@beauty-bloom.net</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-primary"><ClockIcon /></span>
                  <div className="text-black">
                    <p>Sat-Thu 9:00am - 5:00pm</p>
                    <p>Friday: Closed</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <img src="/image/payment.webp" alt="payment methods" className="h-auto max-w-[260px]" />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center">
            <p className="mx-auto max-w-sm text-sm font-semibold leading-7 text-black">
              © 2025 Beauty Bloom. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
