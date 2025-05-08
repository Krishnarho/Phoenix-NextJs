"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "./header";
import { cn } from "@/lib/utils";

type NavLinkProps = {
    navLinks: NavLink[];
};

function MainNav({ navLinks }: NavLinkProps) {
    const pathName = usePathname();
    return (
        <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
                const isActive =
                    pathName === link.path ||
                    (pathName.startsWith(link.path) && link.path !== "/");
                return (
                    <Link
                        key={link.name}
                        href={link.path}
                        className={cn(
                            "cursor-pointer py-1.5 px-3 hover:bg-secondary hover:text-secondary-foreground rounded-lg",
                            { "bg-secondary": isActive }
                        )}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default MainNav;
