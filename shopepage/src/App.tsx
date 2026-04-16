import { useEffect, useMemo, useState, type SVGProps } from "react";

type NavItem = {
  label: string;
  href: string;
};

type Category = {
  label: string;
  href: string;
};

type Brand = {
  label: string;
  href: string;
};

type Product = {
  name: string;
  href: string;
  image: string;
  brand: string;
  categories: string[];
  badge?: string;
  secondaryBadge?: string;
  oldPrice?: string;
  oldPriceValue?: number;
  price: string;
  priceValue: number;
  buttonLabel: string;
};

type ViewMode = "grid" | "list";

const navItems: NavItem[] = [
  { label: "Makeup", href: "https://beauty-bloom.net/product-tag/makeup/" },
  { label: "New Arrivals", href: "https://beauty-bloom.net/product-tag/new-arrivals/" },
  { label: "Skin Care", href: "https://beauty-bloom.net/product-tag/skin-care/" },
  { label: "Hair Care", href: "https://beauty-bloom.net/product-tag/hair-care/" },
  { label: "Perfumes", href: "https://beauty-bloom.net/product-tag/perfumes/" },
  { label: "Brushes & Tools", href: "https://beauty-bloom.net/product-tag/brushes-tools/" },
];

const categories: Category[] = [
  { label: "Beauty Accessories", href: "https://beauty-bloom.net/shop/?filter_cat=makeup-pouch" },
  { label: "Best sellers", href: "https://beauty-bloom.net/shop/?filter_cat=best-sellers" },
  { label: "Body Care", href: "https://beauty-bloom.net/shop/?filter_cat=cleansers-body" },
  { label: "Bronzers & contours", href: "https://beauty-bloom.net/shop/?filter_cat=bronzers-contours" },
  { label: "Cheeks", href: "https://beauty-bloom.net/shop/?filter_cat=cheek" },
  { label: "Cleansers", href: "https://beauty-bloom.net/shop/?filter_cat=cleansers" },
  { label: "Concealers/Correctors", href: "https://beauty-bloom.net/shop/?filter_cat=concealers" },
  { label: "Eye Creams/Serums", href: "https://beauty-bloom.net/shop/?filter_cat=eye-creams" },
  { label: "Eyebrow/Lashes", href: "https://beauty-bloom.net/shop/?filter_cat=eyebrow" },
  { label: "Eyeliners & kohl", href: "https://beauty-bloom.net/shop/?filter_cat=eyeliners-kohl" },
  { label: "Eyes", href: "https://beauty-bloom.net/shop/?filter_cat=eyes" },
  { label: "Eyeshadows", href: "https://beauty-bloom.net/shop/?filter_cat=eyeshadows" },
  { label: "Face", href: "https://beauty-bloom.net/shop/?filter_cat=face" },
  { label: "Face Creams", href: "https://beauty-bloom.net/shop/?filter_cat=face-creams" },
  { label: "Face Pads", href: "https://beauty-bloom.net/shop/?filter_cat=face-pads" },
  { label: "Facial Masks/Exfoliators", href: "https://beauty-bloom.net/shop/?filter_cat=facial-masks" },
  { label: "Gifts & Sets", href: "https://beauty-bloom.net/shop/?filter_cat=gifts-sets" },
  { label: "Hair Care", href: "https://beauty-bloom.net/shop/?filter_cat=hair-care" },
  { label: "Hand Sanitizer", href: "https://beauty-bloom.net/shop/?filter_cat=hand-sanitizer" },
  { label: "Highlighters", href: "https://beauty-bloom.net/shop/?filter_cat=highlighters" },
  { label: "Lip Oil, Balms & Treatments", href: "https://beauty-bloom.net/shop/?filter_cat=lip-balms-treatments" },
  { label: "Lip Pencil", href: "https://beauty-bloom.net/shop/?filter_cat=lip-pencil" },
  { label: "Lipstick/Tint", href: "https://beauty-bloom.net/shop/?filter_cat=lipstick" },
  { label: "Makeup Palettes", href: "https://beauty-bloom.net/shop/?filter_cat=makeup-palettes-face" },
  { label: "Moisturizers", href: "https://beauty-bloom.net/shop/?filter_cat=moisturizers" },
  { label: "Nail Polish", href: "https://beauty-bloom.net/shop/?filter_cat=nail-polish" },
  { label: "Oral Care", href: "https://beauty-bloom.net/shop/?filter_cat=oral-care" },
  { label: "Perfumes", href: "https://beauty-bloom.net/shop/?filter_cat=perfumes" },
  { label: "Pimple Patches", href: "https://beauty-bloom.net/shop/?filter_cat=pimple-patches" },
  { label: "Powders", href: "https://beauty-bloom.net/shop/?filter_cat=powders" },
  { label: "Primers", href: "https://beauty-bloom.net/shop/?filter_cat=primer" },
  { label: "Serums/Oil", href: "https://beauty-bloom.net/shop/?filter_cat=serums" },
  { label: "Suncare & SPF", href: "https://beauty-bloom.net/shop/?filter_cat=suncare-spf" },
  { label: "Toners", href: "https://beauty-bloom.net/shop/?filter_cat=toners" },
  { label: "Blushes", href: "https://beauty-bloom.net/shop/?filter_cat=blushes" },
  { label: "Foundations/Tints", href: "https://beauty-bloom.net/shop/?filter_cat=foundations" },
  { label: "Lip Gloss", href: "https://beauty-bloom.net/shop/?filter_cat=lip-glosse" },
  { label: "Mascaras", href: "https://beauty-bloom.net/shop/?filter_cat=mascara" },
  { label: "Lips", href: "https://beauty-bloom.net/shop/?filter_cat=lips" },
  { label: "Makeup Remover", href: "https://beauty-bloom.net/shop/?filter_cat=makeup-removers" },
  { label: "Setting sprays/Mists", href: "https://beauty-bloom.net/shop/?filter_cat=setting-sprays" },
];

const drawerMenu: NavItem[] = [
  { label: "HOME", href: "https://beauty-bloom.net/" },
  { label: "SHOP", href: "https://beauty-bloom.net/shop/?stock_status=in_stock" },
  { label: "ABOUT US", href: "https://beauty-bloom.net/about-us/" },
  { label: "CONTACT", href: "https://beauty-bloom.net/contact/" },
  { label: "TRACK ORDER", href: "https://beauty-bloom.net/track-your-order/" },
  { label: "MY ACCOUNT", href: "https://beauty-bloom.net/my-account/" },
];

const brands: Brand[] = [
  { label: "Aesop", href: "https://beauty-bloom.net/shop/?filter_brand=aesop" },
  { label: "Amika", href: "https://beauty-bloom.net/shop/?filter_brand=amika" },
  { label: "Anastasia Beverly Hills", href: "https://beauty-bloom.net/shop/?filter_brand=anastasia-beverly-hills" },
  { label: "Armani Beauty", href: "https://beauty-bloom.net/shop/?filter_brand=armani-beauty" },
  { label: "Bath & Body Works", href: "https://beauty-bloom.net/shop/?filter_brand=bath-body-works" },
  { label: "Beauty Creations", href: "https://beauty-bloom.net/shop/?filter_brand=beauty-creations" },
  { label: "Beautyblender", href: "https://beauty-bloom.net/shop/?filter_brand=beautyblender" },
  { label: "Beautycounter", href: "https://beauty-bloom.net/shop/?filter_brand=beautycounter" },
  { label: "Benefit Cosmetics", href: "https://beauty-bloom.net/shop/?filter_brand=benefit-cosmetics" },
  { label: "Burberry", href: "https://beauty-bloom.net/shop/?filter_brand=burberry" },
  { label: "BYOMA", href: "https://beauty-bloom.net/shop/?filter_brand=byoma" },
  { label: "Carolina Herrera", href: "https://beauty-bloom.net/shop/?filter_brand=carolina-herrera" },
  { label: "Caudalie", href: "https://beauty-bloom.net/shop/?filter_brand=caudalie" },
  { label: "Chanel", href: "https://beauty-bloom.net/shop/?filter_brand=chanel" },
  { label: "Charlotte Tilbury", href: "https://beauty-bloom.net/shop/?filter_brand=charlotte-tilbury" },
  { label: "Chloe", href: "https://beauty-bloom.net/shop/?filter_brand=chloe" },
  { label: "Christian Louboutin", href: "https://beauty-bloom.net/shop/?filter_brand=christian-louboutin" },
  { label: "CLARINS", href: "https://beauty-bloom.net/shop/?filter_brand=clarins" },
  { label: "CLINIQUE", href: "https://beauty-bloom.net/shop/?filter_brand=clinique" },
  { label: "COACH", href: "https://beauty-bloom.net/shop/?filter_brand=coach" },
  { label: "Color Wow", href: "https://beauty-bloom.net/shop/?filter_brand=color-wow" },
  { label: "CREED", href: "https://beauty-bloom.net/shop/?filter_brand=creed" },
  { label: "Crest", href: "https://beauty-bloom.net/shop/?filter_brand=crest" },
  { label: "Danessa Myricks", href: "https://beauty-bloom.net/shop/?filter_brand=danessa-myricks" },
  { label: "Dior", href: "https://beauty-bloom.net/shop/?filter_brand=dior" },
  { label: "Diptyque Paris", href: "https://beauty-bloom.net/shop/?filter_brand=diptyque-paris" },
  { label: "Dolce & Gabbana", href: "https://beauty-bloom.net/shop/?filter_brand=dolce-gabbana" },
  { label: "Dr.Jart+", href: "https://beauty-bloom.net/shop/?filter_brand=dr-jart" },
  { label: "Drunk Elephant", href: "https://beauty-bloom.net/shop/?filter_brand=drunk-elephant" },
  { label: "Elf Cosmetics", href: "https://beauty-bloom.net/shop/?filter_brand=elf-cosmetics" },
  { label: "Eva Nyc", href: "https://beauty-bloom.net/shop/?filter_brand=eva-nyc" },
  { label: "Fenty Beauty by Rihanna", href: "https://beauty-bloom.net/shop/?filter_brand=fenty-beauty-by-rihanna" },
  { label: "Fresh", href: "https://beauty-bloom.net/shop/?filter_brand=fresh" },
  { label: "Gisou", href: "https://beauty-bloom.net/shop/?filter_brand=gisou" },
  { label: "Givenchy", href: "https://beauty-bloom.net/shop/?filter_brand=givenchy" },
  { label: "Glossier", href: "https://beauty-bloom.net/shop/?filter_brand=glossier" },
  { label: "Glow Recipe", href: "https://beauty-bloom.net/shop/?filter_brand=glow-recipe" },
  { label: "Grande Cosmetics", href: "https://beauty-bloom.net/shop/?filter_brand=grande-cosmetics" },
  { label: "Gucci", href: "https://beauty-bloom.net/shop/?filter_brand=gucci" },
  { label: "Guerlain", href: "https://beauty-bloom.net/shop/?filter_brand=guerlain" },
];

const products: Product[] = [
  {
    brand: "Aesop",
    categories: ["Cleansers", "Face", "Face Creams", "Gifts & Sets", "Moisturizers", "Toners"],
    name: "Aesop Balance: Classic Skin Care Kit",
    href: "https://beauty-bloom.net/product/aesop-balance-classic-skin-care-kit/",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/Aesop_Kits_Balance_Classic_Skin_Care_Kit_Web_Front_2000x2000px-300x300.jpg",
    badge: "Sale Up To 18%",
    secondaryBadge: "New",
    oldPrice: "390 NIS",
    oldPriceValue: 390,
    price: "320 NIS",
    priceValue: 320,
    buttonLabel: "Add to Cart",
  },
  {
    brand: "Amika",
    categories: ["Hair Care", "Perfumes"],
    name: "Amika Aura Hair & Body Mist with Vanilla and Pink Grapefruit",
    href: "https://beauty-bloom.net/product/amika-aura-hair-body-mist-with-vanilla-and-pink-grapefruit/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/s2897056-main-zoom-300x300.webp",
    price: "155 NIS",
    priceValue: 155,
    buttonLabel: "Select Options",
  },
  {
    brand: "Amika",
    categories: ["Gifts & Sets", "Hair Care"],
    name: "Amika Bye, Bad Hair Days Sephora Beauty Insider",
    href: "https://beauty-bloom.net/product/amika-bye-bad-hair-days-sephora-beauty-insider/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/DBF7A729-3AAF-4775-8B63-45F5D7B2FBB8-300x300.webp",
    badge: "Limited Edition",
    price: "140 NIS",
    priceValue: 140,
    buttonLabel: "Add to Cart",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Lips", "Lipstick/Tint"],
    name: "Anastasia Beverly Hills Full-Pigment Matte & Satin Velvet Lipstick",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-full-pigment-matte-satin-velvet-lipstick/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/03/s2650984-main-zoom-300x300.webp",
    price: "120 NIS",
    priceValue: 120,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Beauty Accessories", "Eyes"],
    name: "Anastasia Beverly Hills 3-in-1 Makeup Pencil Sharpener",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-3-in-1-makeup-pencil-sharpener/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s765255-main-zoom-300x300.jpg",
    price: "45 NIS",
    priceValue: 45,
    buttonLabel: "Add to Cart",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Eyebrow/Lashes", "Gifts & Sets"],
    name: "Anastasia Beverly Hills Better Together Brow Kit",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-better-together-brow-kit/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/images-6-7-300x300.avif",
    price: "180 NIS",
    priceValue: 180,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Eyebrow/Lashes"],
    name: "Anastasia Beverly Hills Brow Freeze Sculpting Wax",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-brow-freeze-sculpting-wax/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2411486-main-zoom-300x300.webp",
    price: "60 NIS",
    priceValue: 60,
    buttonLabel: "Add to Cart",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Setting sprays/Mists", "Face"],
    name: "Anastasia Beverly Hills Impeccable 24HR Blurring Matte Setting Spray",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-impeccable-24hr-blurring-matte-setting-spray/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/IMG_7747-300x300.webp",
    price: "170 NIS",
    priceValue: 170,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Foundations/Tints", "Face"],
    name: "Anastasia Beverly Hills Impeccable Blurring Second-Skin Matte Foundation",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-impeccable-blurring-second-skin-matte-foundation/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/imgi_467_s2831428-main-zoom-300x300.jpg",
    price: "220 NIS",
    priceValue: 220,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Eyebrow/Lashes", "Gifts & Sets"],
    name: "Anastasia Beverly Hills Laminated Look Brow Kit",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-laminated-look-brow-kit/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/images-24-300x300.avif",
    price: "180 NIS",
    priceValue: 180,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Lips", "Lipstick/Tint"],
    name: "Anastasia Beverly Hills Lip Velvet Liquid Lipstick",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-lip-velvet-liquid-lipstick/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2747269-main-zoom-300x300.webp",
    price: "120 NIS",
    priceValue: 120,
    buttonLabel: "Select Options",
  },
  {
    brand: "Anastasia Beverly Hills",
    categories: ["Eyes", "Eyeshadows", "Lips", "Makeup Palettes", "Gifts & Sets"],
    name: "Anastasia Beverly Hills Mini Modern Renaissance Kit",
    href: "https://beauty-bloom.net/product/anastasia-beverly-hills-mini-modern-renaissance-kit/",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/ABH_2024_Holiday-Kit_STD_Modern-Ren-Kit_01_Hero_5f752ca5-5237-43f2-85a2-2a6f0a72c0af-300x300.webp",
    badge: "Limited Edition",
    secondaryBadge: "New",
    price: "240 NIS",
    priceValue: 240,
    buttonLabel: "Add to Cart",
  },
  {
    brand: "Chanel",
    categories: ["Eye Creams/Serums"],
    name: "CHANEL SUBLIMAGE LE SERUM YEUX - The Radiance-Renewing Eye Serum",
    href: "https://beauty-bloom.net/product/chanel-sublimage-le-serum-yeux-the-radiance-renewing-eye-serum/",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/04/sublimage-le-serum-yeux-ultimate-eye-serum-regenerates-and-illuminates-0-5oz-packshot-default-147960-9555301138462-300x300.avif",
    badge: "Sale Up To 43%",
    secondaryBadge: "New",
    oldPrice: "1,200 NIS",
    oldPriceValue: 1200,
    price: "680 NIS",
    priceValue: 680,
    buttonLabel: "Select Options",
  },
  {
    brand: "Charlotte Tilbury",
    categories: ["Eye Creams/Serums"],
    name: "Charlotte Tilbury Cryo-Recovery Depuffing Eye Serum",
    href: "https://beauty-bloom.net/product/charlotte-tilbury-cryo-recovery-depuffing-eye-serum/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2486314-av-09-zoom-300x300.webp",
    badge: "Sale Up To 21%",
    oldPrice: "330 NIS",
    oldPriceValue: 330,
    price: "260 NIS",
    priceValue: 260,
    buttonLabel: "Select Options",
  },
  {
    brand: "Charlotte Tilbury",
    categories: ["Eye Creams/Serums", "Gifts & Sets"],
    name: "Charlotte Tilbury Mini Set",
    href: "https://beauty-bloom.net/product/charlotte-tilbury-mini-set/",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-25-at-11.20.52-PM-300x300.jpeg",
    badge: "New",
    price: "180 NIS",
    priceValue: 180,
    buttonLabel: "Read More",
  },
  {
    brand: "CLARINS",
    categories: ["Eye Creams/Serums"],
    name: "Clarins DOUBLE SERUM Eye Firming & Hydrating Anti-Aging Concentrate",
    href: "https://beauty-bloom.net/product/clarins-double-serum-eye-firming-hydrating-anti-aging-concentrate/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/s2481232-main-zoom-300x300.webp",
    badge: "Sale Up To 21%",
    oldPrice: "340 NIS",
    oldPriceValue: 340,
    price: "270 NIS",
    priceValue: 270,
    buttonLabel: "Select Options",
  },
  {
    brand: "Drunk Elephant",
    categories: ["Eye Creams/Serums"],
    name: "Drunk Elephant A-Shaba Complex Eye Serum",
    href: "https://beauty-bloom.net/product/drunk-elephant-a-shaba-complextm-eye-serum/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/850005143507_1-300x300.jpg",
    oldPrice: "260 NIS",
    oldPriceValue: 260,
    price: "220 NIS",
    priceValue: 220,
    buttonLabel: "Select Options",
  },
  {
    brand: "Dior",
    categories: ["Eye Creams/Serums"],
    name: "Dior Capture Totale Super Potent Eye Serum",
    href: "https://beauty-bloom.net/product/dior-capture-totale-super-potent-eye-serum/",
    image:
      "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Y0996239_C099600592_E01_ZHC-e1769086203992-300x300.webp",
    badge: "Sale Up To 14%",
    oldPrice: "420 NIS",
    oldPriceValue: 420,
    price: "360 NIS",
    priceValue: 360,
    buttonLabel: "Select Options",
  },
  {
    brand: "Dior",
    categories: ["Eye Creams/Serums"],
    name: "DIOR One Essential Eye Serum",
    href: "https://beauty-bloom.net/product/dior-one-essential-eye-serum/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2026/01/Y0721310_F072131000_E01_ZHC-300x300.webp",
    price: "220 NIS",
    priceValue: 220,
    buttonLabel: "Select Options",
  },
  {
    brand: "Dior",
    categories: ["Eye Creams/Serums"],
    name: "DIOR Prestige La Micro Eye Serum",
    href: "https://beauty-bloom.net/product/dior-prestige-la-micro-eye-serum/",
    image: "https://cdn.beauty-bloom.net/wp-content/uploads/2025/09/Y0998038_C099800435_E01_RHC-300x300.jpg",
    badge: "Sale Up To 32%",
    oldPrice: "960 NIS",
    oldPriceValue: 960,
    price: "650 NIS",
    priceValue: 650,
    buttonLabel: "Select Options",
  },
];

const featureItems = [
  { id: "delivery", label: "FAST DELIVERY" },
  { id: "authentic", label: "100% AUTHENTIC PRODUCTS" },
  { id: "prices", label: "PRICES YOU CAN'T RESIST" },
  { id: "shipping", label: "ALL ACROSS PALESTINE IN 2 DAYS!" },
];

const infoLinks = ["About Us", "Privacy Policy", "Order History", "Terms & Conditions", "Contact Us"];
const accountLinks = ["My Account", "Brand", "Gift Certificates", "Affiliates", "My Wishlist"];

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16L21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M4 7H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M4 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M4 17H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 21C4 17.5 7.5 15 12 15C16.5 15 20 17.5 20 21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CompareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M7 7H3V3M3 7C4.8 4.6 7.7 3 11 3C16.5 3 21 7.5 21 13C21 14.7 20.6 16.3 19.8 17.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M17 17H21V21M21 17C19.2 19.4 16.3 21 13 21C7.5 21 3 16.5 3 11C3 9.3 3.4 7.7 4.2 6.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function HeartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M12 20.5L10.7 19.3C5.8 14.8 3 12.1 3 8.8C3 6.1 5 4 7.7 4C9.2 4 10.7 4.7 11.7 5.9C12.7 4.7 14.2 4 15.7 4C18.4 4 20.4 6.1 20.4 8.8C20.4 12.1 17.6 14.8 12.7 19.3L12 20.5Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M6 8H18L17 21H7L6 8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9 9V7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7V9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M2.5 12C4.7 8.5 8.1 6.5 12 6.5C15.9 6.5 19.3 8.5 21.5 12C19.3 15.5 15.9 17.5 12 17.5C8.1 17.5 4.7 15.5 2.5 12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="2.8" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function GridIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect x="3" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="3" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="17" width="4" height="4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="5" cy="6" r="1.5" fill="currentColor" />
      <circle cx="5" cy="12" r="1.5" fill="currentColor" />
      <circle cx="5" cy="18" r="1.5" fill="currentColor" />
      <path d="M9 6H21" stroke="currentColor" strokeWidth="2" />
      <path d="M9 12H21" stroke="currentColor" strokeWidth="2" />
      <path d="M9 18H21" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function TruckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect x="1.5" y="4" width="12.5" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14 7.5H18L21 10.5V14H14V7.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <circle cx="6" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M12 3L19 6V11C19 15.4 16.2 18.9 12 20.5C7.8 18.9 5 15.4 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 11.5L11 13.5L15 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function DollarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M12 3V21" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M16 7.5C16 5.8 14.2 4.5 12 4.5C9.8 4.5 8 5.8 8 7.5C8 9.2 9.8 10.5 12 10.5C14.2 10.5 16 11.8 16 13.5C16 15.2 14.2 16.5 12 16.5C9.8 16.5 8 15.2 8 13.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 12H20.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3C14.7 5.5 16.3 8.7 16.3 12C16.3 15.3 14.7 18.5 12 21" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3C9.3 5.5 7.7 8.7 7.7 12C7.7 15.3 9.3 18.5 12 21" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function LocationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path d="M12 21C12 21 18 14.7 18 10C18 6.7 15.3 4 12 4C8.7 4 6 6.7 6 10C6 14.7 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.2 4H10L11.4 8L9.7 9.7C10.8 11.9 12.6 13.7 14.8 14.8L16.5 13.1L20.5 14.5V17.3C20.5 18.2 19.7 19 18.8 19C10.9 19 4.5 12.6 4.5 4.7C4.5 3.8 5.3 3 6.2 3H7.2V4Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect x="3.5" y="6" width="17" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 7L12 13L19.5 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12L15 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [brandQuery, setBrandQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(3500);
  const [itemsPerPage, setItemsPerPage] = useState("12");
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [menuTab, setMenuTab] = useState<"categories" | "menu">("categories");
  const [menuSearch, setMenuSearch] = useState("");
  const visualLastPage = 83;

  const filteredCategories = useMemo(
    () =>
      categories.filter((category) =>
        category.label.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const filteredBrands = useMemo(
    () =>
      brands.filter((brand) =>
        brand.label.toLowerCase().includes(brandQuery.toLowerCase()),
      ),
    [brandQuery],
  );

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        !selectedCategory || product.categories.includes(selectedCategory);
      const brandMatch = !selectedBrand || product.brand === selectedBrand;
      const priceMatch =
        product.priceValue >= minPrice && product.priceValue <= maxPrice;
      return categoryMatch && brandMatch && priceMatch;
    });

    if (sortBy === "price-low") {
      nextProducts.sort((left, right) => {
        return left.priceValue - right.priceValue;
      });
    }

    if (sortBy === "price-high") {
      nextProducts.sort((left, right) => {
        return right.priceValue - left.priceValue;
      });
    }

    return nextProducts;
  }, [maxPrice, minPrice, selectedBrand, selectedCategory, sortBy]);

  const pageCount = useMemo(() => {
    if (itemsPerPage === "all") {
      return 1;
    }

    return Math.max(1, Math.ceil(filteredProducts.length / Number(itemsPerPage)));
  }, [filteredProducts.length, itemsPerPage]);

  const displayPageCount = Math.max(pageCount, visualLastPage);

  const visibleProducts = useMemo(() => {
    if (itemsPerPage === "all") {
      return filteredProducts;
    }

    const pageSize = Number(itemsPerPage);
    const startIndex = (currentPage - 1) * pageSize;
    return filteredProducts.slice(startIndex, startIndex + pageSize);
  }, [currentPage, filteredProducts, itemsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage, maxPrice, minPrice, selectedBrand, selectedCategory, sortBy]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = openMenu ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [openMenu]);

  useEffect(() => {
    if (currentPage > displayPageCount) {
      setCurrentPage(displayPageCount);
    }
  }, [currentPage, displayPageCount]);

  const activeDrawerItems = (menuTab === "categories" ? categories : drawerMenu).filter((item) =>
    item.label.toLowerCase().includes(menuSearch.toLowerCase()),
  );

  const minPercent = ((minPrice - 40) / (3500 - 40)) * 100;
  const maxPercent = ((maxPrice - 40) / (3500 - 40)) * 100;

  return (
    <div className="page-shell">
      {openMenu ? (
        <button
          aria-label="Close menu"
          className="menu-overlay"
          onClick={() => setOpenMenu(false)}
          type="button"
        />
      ) : null}

      <aside className={openMenu ? "mobile-menu mobile-menu--open" : "mobile-menu"} aria-hidden={!openMenu}>
        <div className="mobile-menu__header">
          <strong>Menu</strong>
          <button onClick={() => setOpenMenu(false)} type="button">
            x
          </button>
        </div>

        <div className="mobile-menu__logo">
          <img
            alt="Bloom Beauty"
            src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
          />
        </div>

        <div className="mobile-menu__search">
          <input
            onChange={(event) => setMenuSearch(event.target.value)}
            placeholder={menuTab === "categories" ? "Search categories..." : "Search menu..."}
            type="text"
            value={menuSearch}
          />
        </div>

        <div className="mobile-menu__section">
          <div className="mobile-menu__tabs">
            <button
              className={menuTab === "categories" ? "mobile-menu__tab mobile-menu__tab--active" : "mobile-menu__tab"}
              onClick={() => setMenuTab("categories")}
              type="button"
            >
              Categories
            </button>
            <button
              className={menuTab === "menu" ? "mobile-menu__tab mobile-menu__tab--active" : "mobile-menu__tab"}
              onClick={() => setMenuTab("menu")}
              type="button"
            >
              Menu
            </button>
          </div>

          <div className="mobile-menu__list">
            {activeDrawerItems.map((item) => (
              <a href={item.href} key={item.label} onClick={() => setOpenMenu(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <header className="top-header">
        <div className="top-header__inner">
          <a className="brand" href="https://beauty-bloom.net">
            <img
              alt="Bloom Beauty"
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
            />
          </a>

          <button aria-label="Open menu" className="menu-button" onClick={() => setOpenMenu(true)} type="button">
            <span />
            <span />
            <span />
          </button>

          <div className="search-bar">
            <span>Search for</span>
            <strong> 🔥 Blushes</strong>
            <button aria-label="Search" className="search-bar__icon" type="button">
              <span />
            </button>
          </div>

          <div className="header-actions">
            <span>
              <UserIcon />
            </span>
            <span>
              <CompareIcon /> 0
            </span>
            <span>
              <HeartIcon /> 0
            </span>
            <span>
              <BagIcon /> 0
            </span>
            <a className="header-language" href="https://beauty-bloom.net/ar/%d8%aa%d8%b3%d9%88%d9%82/">
              <img
                alt=""
                aria-hidden="true"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg"
              />
              <span>Arabic</span>
            </a>
          </div>
        </div>
      </header>

      <section className="nav-strip">
        <div className="nav-strip__inner">
          {navItems.map((item) => (
            <a className="nav-chip" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section className="breadcrumb-banner">
        <div className="breadcrumb-banner__inner">
          <a href="https://beauty-bloom.net">Home</a>
          <span>&gt;</span>
          <strong>Shop</strong>
        </div>
      </section>

      <main className="shop-layout">
        <aside className="filters-panel">
          <div className="filters-panel__header">
            <h2>FILTER BY CATEGORIES</h2>
          </div>

          <label className="category-search">
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a category"
              type="text"
              value={query}
            />
            <span>
              <SearchIcon />
            </span>
          </label>

          <div className="category-list">
            {filteredCategories.map((category) => (
              <label className={selectedCategory === category.label ? "category-item active" : "category-item"} key={category.label}>
                <input
                  checked={selectedCategory === category.label}
                  onChange={() =>
                    setSelectedCategory((current) =>
                      current === category.label ? "" : category.label,
                    )
                  }
                  type="checkbox"
                />
                <a
                  href={category.href}
                  onClick={(event) => {
                    event.preventDefault();
                    setSelectedCategory((current) =>
                      current === category.label ? "" : category.label,
                    );
                  }}
                >
                  {category.label}
                </a>
              </label>
            ))}
          </div>

          <div className="filter-block">
            <div className="filters-panel__header">
              <h2>PRICE RANGE</h2>
            </div>

            <div className="price-filter">
              <div className="price-filter__sliders">
                <div className="price-filter__track">
                  <span className="price-filter__track-line" />
                  <span
                    className="price-filter__track-active"
                    style={{
                      left: `${minPercent}%`,
                      right: `${100 - maxPercent}%`,
                    }}
                  />
                  <span className="price-filter__thumb" style={{ left: `${minPercent}%` }} />
                  <span className="price-filter__thumb" style={{ left: `${maxPercent}%` }} />
                </div>
                <input
                  className="price-filter__range price-filter__range--min"
                  max="3500"
                  min="40"
                  onChange={(event) => {
                    const nextValue = Number(event.target.value);
                    setMinPrice(Math.min(nextValue, maxPrice - 10));
                  }}
                  type="range"
                  value={minPrice}
                />
                <input
                  className="price-filter__range price-filter__range--max"
                  max="3500"
                  min="40"
                  onChange={(event) => {
                    const nextValue = Number(event.target.value);
                    setMaxPrice(Math.max(nextValue, minPrice + 10));
                  }}
                  type="range"
                  value={maxPrice}
                />
              </div>

              <div className="price-filter__summary">
                <p className="price-filter__label">
                  Price: {minPrice} NIS - {maxPrice} NIS
                </p>
                <button
                  className="price-filter__button"
                  onClick={() => setCurrentPage(1)}
                  type="button"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>

          <div className="filter-block">
            <div className="filters-panel__header">
              <h2>BY BRANDS</h2>
            </div>

            <label className="category-search">
              <input
                onChange={(event) => setBrandQuery(event.target.value)}
                placeholder="Find a brand"
                type="text"
                value={brandQuery}
              />
              <span>
                <SearchIcon />
              </span>
            </label>

            <div className="category-list">
              {filteredBrands.map((brand) => (
                <label className={selectedBrand === brand.label ? "category-item active" : "category-item"} key={brand.label}>
                  <input
                    checked={selectedBrand === brand.label}
                    onChange={() =>
                      setSelectedBrand((current) =>
                        current === brand.label ? "" : brand.label,
                      )
                    }
                    type="checkbox"
                  />
                  <a
                    href={brand.href}
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedBrand((current) =>
                        current === brand.label ? "" : brand.label,
                      );
                    }}
                  >
                    {brand.label}
                  </a>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <section className="products-panel">
          <div className="products-toolbar">
            <div className="products-toolbar__left">
              <select onChange={(event) => setSortBy(event.target.value)} value={sortBy}>
                <option value="default">Default sorting</option>
                <option value="price-low">Sort by price: low to high</option>
                <option value="price-high">Sort by price: high to low</option>
              </select>

              <div className="view-icons">
                <button
                  aria-label="Show products in grid view"
                  className={viewMode === "grid" ? "view-icons__active" : ""}
                  onClick={() => setViewMode("grid")}
                  type="button"
                >
                  <GridIcon />
                </button>
                <button
                  aria-label="Show products in list view"
                  className={viewMode === "list" ? "view-icons__active" : ""}
                  onClick={() => setViewMode("list")}
                  type="button"
                >
                  <ListIcon />
                </button>
              </div>
            </div>

            <div className="products-toolbar__right">
              <span>Show</span>
              <select onChange={(event) => setItemsPerPage(event.target.value)} value={itemsPerPage}>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>

          <div className={viewMode === "list" ? "products-grid products-grid--list" : "products-grid"}>
            {visibleProducts.map((product) => (
              <article className={viewMode === "list" ? "product-card product-card--list" : "product-card"} key={product.name}>
                <div className="product-card__image-box">
                  {product.badge ? <span className="badge">{product.badge}</span> : null}
                  {product.secondaryBadge ? <span className="badge secondary">{product.secondaryBadge}</span> : null}

                  <a className="product-card__image-link" href={product.href}>
                    <img alt={product.name} src={product.image} />
                  </a>

                  <div className="floating-actions">
                    <button aria-label={`Add ${product.name} to cart`} type="button">
                      <BagIcon />
                    </button>
                    <button aria-label={`Save ${product.name} to wishlist`} type="button">
                      <HeartIcon />
                    </button>
                    <button aria-label={`Compare ${product.name}`} type="button">
                      <CompareIcon />
                    </button>
                    <button
                      aria-label={`Preview ${product.name}`}
                      onClick={() => setPreviewProduct(product)}
                      type="button"
                    >
                      <EyeIcon />
                    </button>
                  </div>
                </div>

                <div className="product-card__body">
                  <h3>
                    <a href={product.href}>{product.name}</a>
                  </h3>

                  <div className="price-row">
                    {product.oldPrice ? <del>{product.oldPrice}</del> : null}
                    <strong>{product.price}</strong>
                  </div>

                  <a className="product-button" href={product.href}>
                    {product.buttonLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="pagination-bar" aria-label="Pagination">
            <button
              className={currentPage === 1 ? "pagination-bar__item pagination-bar__item--active" : "pagination-bar__item"}
              onClick={() => setCurrentPage(1)}
              type="button"
            >
              1
            </button>

            {displayPageCount >= 2 ? (
              <button
                className={currentPage === 2 ? "pagination-bar__item pagination-bar__item--active" : "pagination-bar__item"}
                onClick={() => setCurrentPage(2)}
                type="button"
              >
                2
              </button>
            ) : null}

            {displayPageCount > 3 ? <span className="pagination-bar__ellipsis">...</span> : null}

            {displayPageCount > 2 ? (
              <button
                className={currentPage === displayPageCount ? "pagination-bar__item pagination-bar__item--active" : "pagination-bar__item"}
                onClick={() => setCurrentPage(displayPageCount)}
                type="button"
              >
                {displayPageCount}
              </button>
            ) : null}

            <button
              className="pagination-bar__item"
              disabled={currentPage >= displayPageCount}
              onClick={() => setCurrentPage((page) => Math.min(displayPageCount, page + 1))}
              type="button"
            >
              &gt;
            </button>
          </div>
        </section>
      </main>

      {previewProduct ? (
        <div className="preview-modal" onClick={() => setPreviewProduct(null)} role="presentation">
          <div
            aria-labelledby="preview-title"
            aria-modal="true"
            className="preview-modal__dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close preview"
              className="preview-modal__close"
              onClick={() => setPreviewProduct(null)}
              type="button"
            >
              x
            </button>

            <div className="preview-modal__media">
              <img alt={previewProduct.name} src={previewProduct.image} />
            </div>

            <div className="preview-modal__content">
              <p className="preview-modal__label">Quick View</p>
              <h3 id="preview-title">{previewProduct.name}</h3>
              <div className="price-row price-row--preview">
                {previewProduct.oldPrice ? <del>{previewProduct.oldPrice}</del> : null}
                <strong>{previewProduct.price}</strong>
              </div>
              <a className="product-button" href={previewProduct.href}>
                {previewProduct.buttonLabel}
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <section className="feature-strip">
        <div className="feature-strip__inner">
          {featureItems.map((feature) => (
            <div className="feature-strip__item" key={feature.id}>
              {feature.id === "delivery" ? <TruckIcon /> : null}
              {feature.id === "authentic" ? <ShieldIcon /> : null}
              {feature.id === "prices" ? <DollarIcon /> : null}
              {feature.id === "shipping" ? <GlobeIcon /> : null}
              <span>{feature.label}</span>
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
          <div className="site-footer__brand">
            <img
              alt="Bloom Beauty"
              className="site-footer__logo"
              src="https://cdn.beauty-bloom.net/wp-content/uploads/2025/08/Logo-bloom.webp"
            />
            <p className="site-footer__title">At Beauty Bloom</p>
            <p className="site-footer__copy">
              we are here to make your beauty journey simple, elegant, and trustworthy
            </p>
            <div className="site-footer__social">
              <span>Follow Us:</span>
              <a aria-label="Instagram" href="https://www.instagram.com/beautybloom/" target="_blank" rel="noreferrer">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="site-footer__column">
            <h4>Information</h4>
            <ul>
              {infoLinks.map((item) => (
                <li key={item}>
                  <a className="site-footer__link" href="#">
                    <ChevronRightIcon />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h4>My Account</h4>
            <ul>
              {accountLinks.map((item) => (
                <li key={item}>
                  <a className="site-footer__link" href="#">
                    <ChevronRightIcon />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h4>Contact Info.</h4>
            <ul className="site-footer__contact">
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
                <span>Sat-Thu 9:00am - 5:00pm Friday: Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
