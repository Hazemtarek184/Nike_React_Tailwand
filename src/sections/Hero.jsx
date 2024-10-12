import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin()

const Hero = () => {
    const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
    const trigger = useRef(null);
    const onTextAnimation = useRef(null);
    // const counter1Ref = useRef(null);
    // const counter2 = useRef(null);
    // const counter3 = useRef(null);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);


    useEffect(() => {
        const targetValues = [900, 500, 250];

        const countObj1 = { countValue: 0 }; // Dummy object for animation
        const countObj2 = { countValue: 0 }; // Dummy object for animation
        const countObj3 = { countValue: 0 }; // Dummy object for animation
        const tsx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: trigger.current
            })
            tl.to(
                // counter1Ref.current,
                countObj1,
                {
                    countValue: targetValues[0],
                    duration: 1.5,
                    ease: 'sine',
                    onUpdate: () => {
                        setCount1(Math.floor(countObj1.countValue));
                        // console.log(count1);
                    }
                }
            )
            tl.to(
                // counter1Ref.current,
                countObj2,
                {
                    countValue: targetValues[1],
                    duration: 1.5,
                    ease: 'sine',
                    x: 100,
                    onUpdate: () => {
                        setCount2(Math.floor(countObj2.countValue));
                        // console.log(count1);
                    }
                }, '0'
            )
            tl.to(
                // counter1Ref.current,
                countObj3,
                {
                    countValue: targetValues[2],
                    duration: 1.5,
                    ease: 'sine',
                    onUpdate: () => {
                        setCount3(Math.floor(countObj3.countValue));
                        // console.log(count1);
                    }
                }, '0'
            )

            gsap.fromTo(
                // onTextAnimation.current,
                ['#fromTop', '#fromRight'],
                {
                    y: -90,
                    opacity: 0,

                },
                {
                    y: 0,
                    duration: 2.4,
                    opacity: 1,
                    // ease: 'elastic.out'
                },
                '0'
            )

            gsap.fromTo(
                // onTextAnimation.current,
                '#fromLeft',
                {
                    y: -90,
                    opacity: 0,

                },
                {
                    y: 0,
                    duration: 2,
                    opacity: 1,
                    // ease: 'elastic.out'
                },
                '0'
            )


        },)







        return () => tsx.revert()
    }, [])


    return (
        <section
            id="home"
            className="x w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
        >
            <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-10 " >
                <p className="text-xl font-montserrat text-coral-red ">Our Summer Collection</p>
                <h1 className="mt-10 font-palanquin text-8xl   max-sm:text-[72px] max-sm:leading-[1] font-bold relative" ref={onTextAnimation}>
                    <span className="xl:bg-white xl:whitespace-nowrap lg:relative   z-[10] pr-10 dark:text-white dark:lg:bg-slate-950" id="fromTop">
                        The New Arrival
                    </span>
                    <br />
                    <span className="text-coral-red inline-block mt-3 " id="fromLeft">Nike</span> <span className="dark:text-white" id="fromRight">Sheos</span>
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-300">Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.
                </p>
                <Button label="Show now" iconURL={arrowRight} />
                <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16" ref={trigger} >
                    <div >
                        <p className="text-4xl font-palanquin font-bold dark:text-white " >{count1}+</p>
                        <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300 ">Brands</p>
                    </div>
                    <div >
                        <p className="text-4xl font-palanquin font-bold dark:text-white ">{count2}+</p>
                        <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300 ">Shops</p>
                    </div>
                    <div >
                        <p className="text-4xl font-palanquin font-bold dark:text-white ">{count3}k+</p>
                        <p className="leading-7 font-montserrat text-slate-gray dark:text-slate-300 ">Customers</p>
                    </div>
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center d ">
                <img src={bigShoeImg} alt="sheo collection" width={610} height={500}
                    className="object-contain relative z-0"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6  ">
                    {shoes.map((show) => (
                        <div key={show}>
                            <ShoeCard imgURL={show} changeBigShoeImage={(sheo) => setbigShoeImg(sheo)}
                                bigShoeImage={bigShoeImg} />

                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero