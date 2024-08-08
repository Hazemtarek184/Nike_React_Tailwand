
const OverView = ({quantity, name}) => {
    return (
        <div className="p-2 rounded-md border border-slate-500 dark:border-slate-300 inline-block m-2 text-ellipsis overflow-hidden whitespace-nowrap max-w-[90%] hover:scale-105 duration-100">{quantity} <span className="opacity-60">item/s of</span> <span className="text-blue-950">{name}</span></div>
    )
}

export default OverView