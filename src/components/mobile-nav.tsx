"use client";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { NavLink } from "./header";
import Link from "next/link";

type NavLinkProps = {
    navLinks: NavLink[];
};

function MobileNav({ navLinks }: NavLinkProps) {
    return (
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-[540px]">
                    <SheetHeader>
                        <SheetTitle>Navigation</SheetTitle>
                        <SheetDescription className="sr-only">
                            Link to pages
                        </SheetDescription>
                    </SheetHeader>
                    <nav className="grid gap-2">
                        {navLinks.map((link) => {
                            return (
                                <SheetClose asChild key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="px-4 py-1"
                                    >
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            );
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNav;
