import { useState } from "react";
import Cart from "./components/Cart";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Signup from "./components/Signup";
import TopBrands from "./components/TopBrands";
import ProductDetails from "./components/ProductDetails";

import CafeSection from "./components/CafeSection";
import Electronics from "./components/Electronics";
import MobileSection from "./components/MobileSection";
import Fashion from "./components/Fashion";

import LaundryCareSection from "./components/LaundryCareSection";
import RiceSection from "./components/RiceSection";
import DalPulsesSection from "./components/DalPulsesSection";
import SnacksSection from "./components/SnacksSection";

import PersonalCareSection from "./components/PersonalCareSection";
import BeautyCareSection from "./components/BeautyCareSection";
import BabyCareSection from "./components/BabyCareSection";

import Footer from "./components/Footer";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <Header setIsCartOpen={setIsCartOpen} />
      {/* ALL */}
      <section id="all" className="scroll-mt-40">
        <Signup />
        <HeroBanner />
        <TopBrands />
        <ProductDetails />
      </section>

      {/* FRESH */}
      <section id="fresh" className="scroll-mt-40">
        <RiceSection />
        <DalPulsesSection />
        <SnacksSection />
      </section>

      {/* HOME */}
      <section id="home" className="scroll-mt-40">
        <LaundryCareSection />
      </section>

      {/* TOYS */}
      <section id="toys" className="scroll-mt-40">
        <BabyCareSection />
      </section>

      {/* CAFE */}
      <CafeSection setCartItems={setCartItems} />
      {/* ELECTRONICS */}
      <Electronics setCartItems={setCartItems} />

      {/* MOBILES */}
      <MobileSection setCartItems={setCartItems} />

      {/* BEAUTY */}
      <section id="beauty" className="scroll-mt-40">
        <PersonalCareSection />
        <BeautyCareSection />
      </section>

      {/* FASHION */}
      <Fashion setCartItems={setCartItems} />

      {/* FOOTER */}
    <Footer />
    <Cart
  cartItems={cartItems}
  setCartItems={setCartItems}
  isOpen={isCartOpen}
  setIsOpen={setIsCartOpen}
/>
    </>
  );
}

export default App;