import gsap from "gsap";
import ServiceCard from "../components/ServiceCard"
import { services } from "../constants"
import { useEffect, useRef } from "react";


import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
function Services() {

    const arrayRef = useRef([])
    const animation = useRef(null);

    useEffect(() => {
        const tsx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: animation.current,
                }
            })
            arrayRef.current.forEach((ref, index) => {
                let direction = 100
                if (index % 2 === 0) {
                    direction = -100;
                }
                tl.fromTo(
                    ref,
                    {
                        xPercent: direction,
                        opacity: 0,
                    },
                    {
                        xPercent: 0,
                        opacity: 1,
                        duration: 1,
                        // ease: 'power4.in'
                    }, '<.5'
                )
            })
        })

        return () => tsx.revert();

    }, [])

    return (
        <section ref={animation} className="max-container flex justify-center flex-wrap gap-9 ">
            {services.map((service, index) => (
                <ServiceCard refr={(el) => arrayRef.current[index] = el} key={service.label} {...service} />
            ))}
        </section>
    )
}

export default Services