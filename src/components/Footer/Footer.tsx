import React from "react";
import SearchBar from "./SearchBar";
import SupportSection from "./SupportSection";
import PromoSection from "./PromoSection";

const Footer = () => {
  return (
    <footer className="max-w-[1300px] mx-auto px-6 sm:px-10 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bg-black text-white py-10 md:py-20">
      <div>
        <h3 className="font-inter text-[24px] font-bold mb-4">Exclusive</h3>
        <h4 className="font-poppins text-[20px]">Subscribe</h4>
        <p className="font-poppins text-base">Get 10% off your first order</p>
        <SearchBar />
      </div>
      <div>
        <SupportSection title={supportData.title} items={supportData.items} />
      </div>
      <div>
        <SupportSection title={accountData.title} items={accountData.items} />
      </div>
      <div>
        <SupportSection
          title={quickLinksData.title}
          items={quickLinksData.items}
        />
      </div>
      <div>
        <PromoSection />
      </div>
    </footer>
  );
};

const supportData = {
  title: "Support",
  items: [
    { text: "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh." },
    { text: "exclusive@gmail.com", link: "mailto:exclusive@gmail.com" },
    { text: "+88015-88888-9999", link: "tel:+88015888889999" },
  ],
};

const accountData = {
  title: "Account",
  items: [
    { text: "My Account", link: "/account" },
    { text: "Login/Register", link: "/login" },
    { text: "Cart", link: "/cart" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Shop", link: "/shop" },
  ],
};

const quickLinksData = {
  title: "Quick Links",
  items: [
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Terms of Use", link: "/terms-of-use" },
    { text: "FAQ", link: "/faq" },
    { text: "Contact", link: "/contact" },
  ],
};

export default Footer;
