import { Link } from "react-router-dom"
import SelledItem from "../components/SelledItem"
import { TolpaContextV2 } from "../constants/Provider";
import OverView from "../components/OverView";


const ShoppingCard = () => {
    const { buyProducts, setBuyProducts } = TolpaContextV2();
    let total = 0;
    buyProducts.map((ele) => (total += ele.price * ele.count));
    return (
        <section className="padding max-container dark:bg-slate-950 flex max-md:flex-col overflow-hidden ">
            {buyProducts.length == 0
                ?
                <div className="dark:text-white flex flex-col w-full text-center lg:text-3xl md:text-2xl sm:text-lg leading-normal font-semibold font-palanquin text-ellipsis">
                    <div>No Items in Shopping card </div>
                    <div className="mt-4">
                        <Link className="text-coral-red hover:text-red-600" to="/Nike_React_Tailwand/products">Click Here </Link>
                        to explore our products
                    </div>
                </div>
                :
                <div className="mt-16 grid  grid-cols-1 sm:gap-4 gap-16">
                    {buyProducts.map((product) => <SelledItem key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                        count={product.count}
                    />)}
                    <div className="flex group flex-1 flex-row w-full max-sm:w-full  rounded-xl shadow-2xl p-4 sm:p-0 dar:hover:shadow-slate-400  hover:shadow-slate-400 dark:hover:shadow-slate-600 cursor-pointer  dark:bg-slate-900 duration-200 min-w-2 overflow-hi ">
                        <div className="flex group flex-1 flex-col w-full max-sm:w-full max-sm:items-centerc rounded-xl  p-4 cursor-pointer duration-200 min-w-2">

                            <div className=" font-montserrat text-lg font-medium dark:text-white ">
                                Total Price: ${total}
                            </div>
                            <div className=" mt-4 font-palanquin text-lg font-medium dark:text-white ">
                                Over View : {buyProducts.map((ele) => { return <OverView key={ele.id} quantity={ele.count} name={ele.title} /> })}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default ShoppingCard