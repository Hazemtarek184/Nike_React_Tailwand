// import Hero from "./sections/Hero";
// import Subscribe from "./sections/Subscribe";
// import CustomerReviews from "./sections/CustomerReviews";
// import PopularProducts from "./sections/PopularProducts";
// import Services from "./sections/Services";
// import SpecialOffer from "./sections/SpecialOffer";
// import Footer from "./sections/Footer";
// import SuperQuality from "./sections/SuperQuality";
// import { Nav } from "./components/Nav";


// export default function App() {
//   return (
//     <main className="relative">
//       <Nav/>
//       <section className="xl:padding-l padding-b wide:padding-r">
//         <Hero/>
//       </section>
//       <section className="padding">
//         <PopularProducts/>
//       </section>
//       <section className="padding">
//         <SuperQuality/>
//       </section>
//       <section className="padding">
//         <Services/>
//       </section>
//       <section className="padding">
//         <SpecialOffer/>
//       </section>
//       <section className="bg-pale-blue padding">
//         <CustomerReviews/>
//       </section>
//       <section className="padding-x sm:py-32 py-16 w-full">
//         <Subscribe/>
//       </section>
//       <section className="bg-black padding-x padding-t pb-8">
//         <Footer/>
//       </section>
//     </main>
//   )
// }


import Subscribe from "./sections/Subscribe";
import PopularProducts from "./sections/PopularProducts";
import Footer from "./sections/Footer";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { useState } from "react";
useState

export default function App() {
  const [email, setEmail] = useState();
    function handleEmail(emailVal) {
        setEmail(emailVal)
    }
  return (
    <Router>
      <main className="relative ">
        <Nav />
        <Routes>
          <Route path="/Nike_React_Tailwand" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products" element={<PopularProducts />} />
          <Route path="/contact-us" element={<Subscribe email={email} handleEmail={handleEmail} />} />
        </Routes>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </Router>
  );
}