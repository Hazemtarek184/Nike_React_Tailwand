import { useState } from "react";
import Button from "../components/Button"


function Subscribe() {
    const [email, setEmail] = useState();
    function handleEmail(emailVal) {
        setEmail(emailVal);
    }
    return (
        <>
            <section className="max-container flex items-center justify-between max-lg:flex-col gap-10  padding dark:bg-slate-950 overflow-hidden" id="contact-us">
                <h3 className="text-4xl leading-[68px] lg:max-w-screen-lg font-palanquin font-bold dark:text-white">Sign Up From <span className="text-coral-red">Updates</span> & Newaletter
                </h3>
                <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full dark:bg-white ">
                    <input value={email} onChange={(e) => handleEmail(e.target.value)} type="text" placeholder="subscribe@nike.com" className="input" />
                    <div className="flex max-sm:justify-end items-center max-sm:w-full">
                        <Button label='Sign Up' fullwidth />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe