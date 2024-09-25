import { useEffect, useState } from "react";
import axios from "axios";
import PopularProductCard from "../components/PopularProductCard";




function PopularProducts({ setBuyProducts }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const data = res.data;
        setProducts(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-20 text-4xl dark:text-white font-palanquin font-semibold">
        Loading...
      </div>
    );
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
  );

  // console.log(filteredProducts)

  return (
    <section
      id="products"
      className="max-container max-sm:mt-12 p padding  dark:bg-slate-950 -mt-8"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">
          <span className="dark:text-white">Our</span>
          <span /> <span className="text-coral-red">Popular</span>
          <span className="dark:text-white"> Products</span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-slate-300">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="relative pt-7">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:border-3 dark:bg-slate-700 dark:border-slate-500"
        />
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-16">
        {filteredProducts.map((product) => (
          <PopularProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            setBuyProducts={setBuyProducts}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts