// import Subscribe from "./sections/Subscribe";
// import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import { createContext, useState } from "react";
// import ShoppingCard from "./sections/ShoppingCard";
import { myContext_Init } from "./constants/Provider";
import { Suspense, lazy } from "react";


const useContext = createContext(null);



const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import("./components/AboutUs"));
const PopularProducts = lazy(() => import("./sections/PopularProducts"));
const Subscribe = lazy(() => import("./sections/Subscribe"));
const ShoppingCard = lazy(() => import("./sections/ShoppingCard"));



export default function App() {


  const [buyProducts, setBuyProducts] = useState([]);


  console.log(buyProducts)
  return (
    <Router>
      <main className="relative ">
        <Nav />
        <Suspense
          fallback={
            <div className="p-20 text-4xl dark:text-white font-palanquin font-semibold">
              Loading...
            </div>
          }
        >
          <myContext_Init.Provider value={{ buyProducts, setBuyProducts }}>
            <Routes>
              <Route path="/Nike_React_Tailwand" element={<Home />} />
              <Route path="/Nike_React_Tailwand/about-us" element={<AboutUs />} />
              <Route path="/Nike_React_Tailwand/products" element={<PopularProducts />} />
              <Route path="/Nike_React_Tailwand/contact-us" element={<Subscribe />} />
              <Route path="/Nike_React_Tailwand/shopping-card" element={<ShoppingCard />} />
            </Routes>
          </myContext_Init.Provider>
        </Suspense>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </Router>
  );
}