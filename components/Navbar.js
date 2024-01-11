import Link from "next/link"
import Image from "next/image"

import { useEffect, useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {

    const [clientWindowHeight, setClientWindowHeight] = useState("");

    const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
    const [boxShadow, setBoxShadow] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 200;

        if (backgroundTransparacyVar < 2) {
            let boxShadowVar = backgroundTransparacyVar * 0.2;
            setBackgroundTransparacy(backgroundTransparacyVar);
            setBoxShadow(boxShadowVar);
        }
    }, [clientWindowHeight]);

    const [menuIcon, setIcon] = useState(false);

    const handleSmallScreenNavigation = () =>
    {
        setIcon( !menuIcon );
    }

    return (
        <nav className="fixed w-full top-0 left-0 z-20"
            style={{
                background: `rgb(11, 101, 49, ${backgroundTransparacy})`,
                boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 2px`,
            }}>

            <div className="container px-4 mx-auto">
                <div className="flex items-end py-4">
                    <Link href="/">
                        <Image src="/logo.svg" width={120} height={100} alt="logo" />
                    </Link>

                    <ul className="ms-10 hidden md:flex">
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/store">Store</Link>
                        </li>
                        <li className="text-white hover:text-[#e4aa3f] font-extralight mx-5">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div onClick={handleSmallScreenNavigation} className="flex md:hidden absolute z-[1] bottom-[20px] right-[16px]">
                        {menuIcon ? 
                            (<AiOutlineClose size={25} className="text-white hover:text-[#e4aa3f]" /> ) 
                            : 
                            (<AiOutlineMenu size={25} className="text-white hover:text-[#e4aa3f]" /> )
                        }
                    </div>

                    <div className={menuIcon ? 
                        'md:hidden absolute z-0 top-[0] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#0a5c2c] text-white ease-in duration-300' 
                        : 
                        'md:hidden absolute z-0 top-[0] right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#0a5c2c] text-white text-center ease-in duration-300'
                    }>
                       <ul className="text-center">
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight my-3">
                            <Link href="/">Home</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight  my-3">
                            <Link href="/about">About</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight my-3">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight my-3">
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight my-3">
                            <Link href="/store">Store</Link>
                        </li>
                        <li onClick={handleSmallScreenNavigation} className="text-white hover:text-[#e4aa3f] font-extralight my-3">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}