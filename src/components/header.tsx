"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { logo } from "../../public/images";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
    ];
    const [menuToggle, setMenuToggle] = useState(false);

    const handleToggle = () => {
        setMenuToggle((prev) => !prev);
    };

    return (
        <header className="sticky top-0 left-0 w-full border-b-2 border-stone-300 backdrop-blur-md z-20">
            <div className="container py-2 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="logo" className="logo" />
                    <div>
                        <h2 className="text-orange-600 font-bold text-xl sm:text-2xl tracking-wider">
                            phoenix global
                        </h2>
                        <p className=" uppercase text-center text-[0.6em] tracking-wider">
                            We bring an electrical flare
                        </p>
                    </div>
                </Link>
                <nav className="hidden lg:flex items-center ml-auto">
                    <ul className="flex  ">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className="cursor-pointer py-1.5 px-3 hover:bg-secondary hover:text-secondary-foreground rounded-lg"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex flex-col gap-2 items-center sm:flex-row lg:ml-10">
                    <div className="hidden sm:inline-block">
                        <ModeToggle />
                    </div>
                    <button
                        className="lg:hidden ml-auto text-orange-500"
                        onClick={handleToggle}
                    >
                        {menuToggle ? <X /> : <AlignRight />}
                    </button>
                </div>
            </div>
            <div
                className={cn(
                    "w-full h-0 overflow-y-clip lg:hidden transition-all duration-500 ease-in-out",
                    { "h-auto": menuToggle }
                )}
            >
                <ul className="grid place-items-center gap-y-3">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.path} onClick={handleToggle}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
