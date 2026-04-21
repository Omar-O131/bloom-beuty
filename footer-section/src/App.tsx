import { useState } from "react";
import { BloomFooterSection } from "./BloomFooterSection";

import AboutUsPage from "../../about-us/src/App";
import PrivacyPolicyPage from "../../Privacy Policy/src/App";
import TermsConditionsPage from "../../Terms and conditions/src/App";
import ContactUsPage from "../../Contact Us/src/App";

type PageName =
  | "home"
  | "about-us"
  | "privacy-policy"
  | "terms-and-conditions"
  | "contact-us";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("home");

  if (currentPage === "about-us") {
    return <AboutUsPage />;
  }

  if (currentPage === "privacy-policy") {
    return <PrivacyPolicyPage />;
  }

  if (currentPage === "terms-and-conditions") {
    return <TermsConditionsPage />;
  }

  if (currentPage === "contact-us") {
    return <ContactUsPage />;
  }

  return <BloomFooterSection onNavigate={setCurrentPage} />;
}