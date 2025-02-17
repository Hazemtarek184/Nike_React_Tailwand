// import { hamburger } from '../assets/icons';
import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons'
import { navLinks } from '../constants';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FiMenu } from 'react-icons/fi';
import { useEffect, useState } from 'react';




import { IoClose } from 'react-icons/io5';
import ToggleModes from './ToggleModes';
// import { IoCloseOutline } from "react-icons/io5";



export const Nav = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    console.log("repeated")

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode])
    return (
        <div style={{ position: "fixed", zIndex: "100", top: 0, backgroundColor: "white", width: "100%" }}>
            <header className='padding-x py-8 z-10 w-full dark:bg-slate-950'>
                <nav className='flex justify-between items-center max-container duration-200 ease-in-out'>
                    <a href="/Nike_React_Tailwand/">
                        <img src={headerLogo} alt="Logo"
                            width={130} height={29} />
                    </a>
                    <ul className='flex-1 flex justify-evenly items-center gap-6 max-lg:hidden '>
                        {navLinks.map((item) =>
                            <li key={item.label}>
                                <Link to={item.href}
                                    className='font-montserrat leading-normal text-lg dark:text-white text-black md:ml-8 md:text-base md:my-0 my-6 hover:text-slate-500 dark:hover:text-slate-400 duration-150'>
                                    {item.label}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <section>
                        <div className='flex items-center duration-200 ease-in-out lg:ml-4'>

                            <ToggleModes isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                            <div className='flex  lg:hidden items-center duration-200 ease-in-out'>
                                <FiMenu className='="mt-0  text-3xl cursor-pointer z-50 relative lg:hidden dark:text-white ml-3' onClick={() => setIsSideMenuOpen(!isSideMenuOpen)} />
                            </div>
                        </div>



                        <div className={`flex fixed  z-[51] h-full w-screen lg:hidden bg-black/50 
                    backdrop-blur-sm top-0 transition-all left-0 
                    ${isSideMenuOpen ? " -translate-x-[0px] " : 'translate-x-full'}`}>
                            <section className="text-black dark:bg-black flex-col absolute right-0 top-0 h-screen p-8 gap-8 w-56 flex bg-slate-400">
                                <IoClose className='text-3xl cursor-pointer text-white hover:text-black dark:hover:text-slate-400' onClick={() => setIsSideMenuOpen(false)} />
                                {navLinks.map((item) =>
                                    <Link to={item.href} key={item.label}
                                        className='font-montserrat leading-normal text-lg text-white md:ml-8 md:text-base md:my-0 my-7 hover:text-black dark:hover:text-slate-400 duration-150'>
                                        {item.label}
                                    </Link>

                                )}
                            </section>
                        </div>
                    </section>

                </nav>
            </header>
        </div>
    )
}
