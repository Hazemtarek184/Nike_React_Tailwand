import CustomerReviews from "../sections/CustomerReviews"
import Hero from "../sections/Hero"

const Home = () => {
    return (
        <>
            <section className="xl:padding-l padding-b wide:padding-r dark:bg-slate-950">
                <Hero />
            </section>
            <section className="bg-pale-blue dark:bg-slate-950 padding">
                <CustomerReviews />
            </section>
        </>
    )
}

export default Home