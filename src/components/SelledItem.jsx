import { VscWorkspaceTrusted } from "react-icons/vsc";
import { AiTwotoneCheckCircle } from "react-icons/ai";
import { AiTwotoneCloseCircle } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { TolpaContextV2 } from "../constants/Provider";




const SelledItem = ({ id, title, price, description, image, count }) => {
    const { buyProducts, setBuyProducts } = TolpaContextV2();

    function handleQuantity(id, newValue) {
        setBuyProducts((prev) => prev.map(item =>
                    item.id === id ? {...item, count: newValue } : item
                ))
    }

    function handleRemove(id) {
        setBuyProducts((prev) => prev.filter((item) => item.id !== id) )
    }




    let hour = Math.floor(Math.random() * (72 - 5) + 5);
    // console.log(hour);
    let minutes = Math.floor(Math.random() * 60);
    // console.log(minutes);
    let guarantee = Math.floor(Math.random() * (12 - 3) + 3);
    let refundable = guarantee > 6;
    return (
        <div className="flex group flex-1 flex-row w-full max-sm:w-full  rounded-xl shadow-2xl p-4 sm:p-0 dar:hover:shadow-slate-400  hover:shadow-slate-400 dark:hover:shadow-slate-600 cursor-pointer dark:bg-slate-900 duration-200 min-w-2 overflow-hi ">
            <img
                src={image}
                alt={title}
                className="w-[170px] h-[140px] max-w-[160px] rounded-2xl self-start mt-3 ml-3 "
            />
            <div className="max-md:max-w-[50%] md:max-w-[70%]   ml-4">
                <div className="mt-8 flex justify-start gap-2.5">
                    <p className="font-montserrat text-xl  max-md:text-base  leading-normal font-semibold  dark:text-white whitespace-break-spaces  ">
                        {title}
                    </p>
                </div>
                <h3 className="mt-2 text-2xl leading-normal font-palanquin text-slate-500  dark:text-slate-300 text-ellipsis overflow-hidden whitespace-nowrap max-md:text-lg  ">
                    {description}
                    
                </h3>
                <div className="mt-2  font-montserrat text-slate-400 text-xl  max-md:text-base">
                    Order now 
                </div>
                <div className="mt-1  font-montserrat text-slate-400 text-xl  max-md:text-base ">
                    {hour > 24
                        ? `- Arrive in ${Math.round(hour / 24)} Day/s -`
                        : `- Arrives in ${hour} hours, ${minutes} minutes -`}
                </div>
                <div className="mt-3  font-montserrat text- text-xl  max-md:text-base bg-yellow-100 dark:bg-[#9a977a] dark:text-slate-100  w-fit ">
                    <VscWorkspaceTrusted className="inline-block" /> Guarantee for{" "}
                    {guarantee} months
                </div>
                <div className="mt-3  font-montserrat text- text-xl  max-md:text-base bg-yellow-100 dark:bg-[#9a977a] dark:text-slate-100 w-fit ">
                    {refundable ? <div >
                        {<AiTwotoneCheckCircle className="inline-block " />} <span className="text-green-500">Can</span>  be returned or exchanged
                    </div>
                        :
                        <div>
                        {<AiTwotoneCloseCircle className="inline-block text-red-600 "  />} <span className="text-red-500">Non</span>-refundable or exchangeable
                        </div>
                    }
                </div>
                <div className="flex justify-between font-medium flex-wrap">
                    <p className="mt-2 font-montserrat text-coral-red text-xl leading-normal max-md:text-lg ">
                        Total: ${price * count}
                    </p>
                    
                </div>
                <div className=" flex text-gray-50 rounded-xl content-between justify-between  flex-row p-2 my-2 ">
                    <button onClick={() => handleRemove(id)} className="flex items-center justify-center py-1 px-2 rounded-xl border dark:border-slate-700 w-fit border-slate-300 dark:text-white text-slate-600  dark:hover:text-slate-300 hover:text-black duration-75 active:scale-95 max-md:text-base max-sm:px-[.12rem] max-sm:py-[.5rem] mr-1">
                        <FaRegTrashAlt className="inline-block mr-1"/><span className="mb-[.12rem] max-md:text-base max-sm:text-sm">Remove</span>
                    </button>
                    <div className="mt-1 font-palanquin text-neutral-800 text-xl leading-normal max-md:text-base max-sm:text-sm dark:text-slate-300">
                        Quantity: <select className="border rounded-md border-slate-400 ml-1 dark:bg-slate-600" name="" id="" value={count} onChange={(e) => handleQuantity(id, Number(e.target.value))}>
                            {Array.from({ length: 8 }, (_, index) => (
                            <option key={index} value={index + 1} >
                                {index + 1}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelledItem;
