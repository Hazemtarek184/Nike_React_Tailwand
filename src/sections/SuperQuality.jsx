import gsap from "gsap";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
function SuperQuality() {
    const imgTrigger = useRef(null)

    useEffect(() => {
        const tsx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    scrollTrigger: imgTrigger.current,
                }
            }
            );

            gsap.fromTo(
                // onTextAnimation.current,
                ['#fromTop', '#fromRight', '#fromLeft'],
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

            tl.fromTo(
                '#img',
                {
                    scale: 0,
                    opacity: .5
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 2,
                    ease: 'elastic.out',

                },
            )
        })

        return () => tsx.revert();
    }, [])


    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className=" xl:whitespace-nowrap lg:relative z-[10] dark:text-white" id="fromTop">
                        We Provide You
                    </span>
                    <span className="text-coral-red  " id="fromLeft"> Super Quality</span>
                    <span className="dark:text-white " id="fromRight"> Shoes</span>
                </h2>
                <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
                    Ensuring premium comfort and style, our meticulously crafted footwear
                    is designed to elevate your experience, providing you with unmatched
                    quality, innovation, and a touch of elegance.
                </p>
                <p className="mt-6 lg:max-w-lg info-text dark:text-slate-300">
                    Our dedication to detail and excellence ensures your satisfaction
                </p>
                <div className="mt-11 ">
                    <Button label="View Details" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center" ref={imgTrigger} >
                <img src={shoe8} alt="sheo 8" width={570} height={522} className="object-contain" id="img" />
            </div>
        </section>
    );
}

export default SuperQuality;
