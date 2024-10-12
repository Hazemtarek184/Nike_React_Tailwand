const ServiceCard = ({ imgURL, label, subtext, refr }) => {
    return (
        <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full">
            <div ref={refr} className="  rounded-[20px] shadow-3xl px-10 py-16 cursor-pointer hover:scale-105 duration-[250ms] hover:shadow-slate-300 dark:bg-blue-300 dark:bg-opacity-15 dark:shadow-lg dark:hover:shadow-slate-600">
                <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full  ">
                    <img src={imgURL} alt={label} width={24} height={24} />
                </div>
                <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold dark:text-white">{label}</h3>
                <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-slate-400">{subtext}</p>
            </div >
        </div>
    )

        ;
}

export default ServiceCard