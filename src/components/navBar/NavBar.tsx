'use client'

import {useState} from "react";
import {IconSearch} from "@/components/navBar/components/icons/IconSearch";
import Image from "next/image";

export default function NavBar() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
            <div
                className="transition-transform duration-300 hover:-translate-y-1 hover:rotate-2"
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={isHovered ? "/logo_small_green.png" : "/logo_small_white.png"}
                    alt="Logo"
                    className="w-14 h-14 object-contain transition duration-300"
                />
            </div>

            <div className="flex gap-6 text-2xl">
                <IconWrapper>
                    <IconSearch />
                </IconWrapper>
                <IconWrapper>
                    <Image src='../icons/profile-icon.svg' alt="favorites" width="30" height="30"/>
                </IconWrapper>
                <IconWrapper>
                    <Image src='../icons/favorites.svg' alt="favorites" width="30" height="30"/>
                </IconWrapper>
                <IconWrapper>
                    <Image src='../icons/basket-icon.svg' alt="favorites" width="30" height="30"/>
                </IconWrapper>
            </div>
        </nav>
    );
}

function IconWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="transition-transform duration-200 hover:-translate-y-1 hover:scale-110 cursor-pointer">
            {children}
        </div>
    );
}