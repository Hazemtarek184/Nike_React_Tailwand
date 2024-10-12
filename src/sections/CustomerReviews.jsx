import { useEffect, useRef } from "react"
import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);
const CustomerReviews = () => {

    const reviewRef = useRef([]);
    const animation = useRef(null);

    useEffect(() => {
        const tsx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: animation.current

            })
            reviewRef.current.forEach((ref, index) => {
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
                    }, '<.5'
                )
            })
        })


        return () => tsx.revert();
    }, [])




    return (
        <section className="max-container overflow-hidden">
            <h3 className="font-palanquin text-center text-4xl font-bold ">
                <span className="dark:text-white">What Our</span>
                <span className="text-coral-red "> Customer </span>

                <span className="dark:text-white">Say? </span>
            </h3>
            <p className="info-text m-auto mt-4 max-w-lg text-center">Hear genuine stories from our satisfied customers about their exceptional experienced with us.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14" ref={animation}>
                {reviews.map((review, index) => (
                    <div key={review.customerName} ref={(el) => (reviewRef.current[index] = el)}>
                        <ReviewCard
                            key={review.customerName}
                            imgURL={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews