import Subscribe from "./sections/Subscribe";
import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { createContext, useCallback, useState } from "react";
import ShoppingCard from "./sections/ShoppingCard";
import { clearConfigCache } from "prettier";
import { myContext_Init } from "./constants/Provider";


const useContext = createContext(null)



export default function App() {


  const [buyProducts, setBuyProducts] = useState([
    {
      count: 1,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      id: 5,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      price: 695,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    },
  ]);


  console.log(buyProducts)
  return (
    <Router>
      <main className="relative ">
        <Nav />
        <myContext_Init.Provider value={{ buyProducts, setBuyProducts }}>
          <Routes>
            <Route path="/Nike_React_Tailwand" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<PopularProducts />} />
            <Route path="/contact-us" element={<Subscribe />} />
            <Route
              path="/shopping-card"
              element={
                <ShoppingCard />
              }
            />
          </Routes>
        </myContext_Init.Provider>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </Router>
  );
}