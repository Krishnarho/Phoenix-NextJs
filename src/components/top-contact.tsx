"use client";

import { Mail, PhoneCall, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const TopContact = () => {
    const [topBar, setTopBar] = useState<boolean>(true);
    return (
        <>
            <div
                className={cn(
                    "w-full h-auto text-xs bg-secondary transition-all duration-500 ease-in-out",
                    {
                        "h-0": !topBar,
                    }
                )}
            >
                <ul className="w-fit mx-auto flex gap-4">
                    <li className="flex gap-2 items-center">
                        <Mail className="size-4" /> contact@sipvl-np.com
                    </li>
                    <li className="flex gap-2 items-center">
                        <PhoneCall className="size-4" /> (+977) 9749897183
                    </li>
                </ul>
                <Button
                    className="mr-4 bg-transparent hover:bg-transparent text-secondary-foreground hover:text-secondary-foreground/80 cursor-pointer"
                    size="sm"
                    onClick={(prev) => setTopBar(!prev)}
                >
                    <X />
                </Button>
            </div>
        </>
    );
};

export default TopContact;
