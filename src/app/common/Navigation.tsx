"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        const currentTab = window.location.pathname.split("/")[1];
        setActiveTab(currentTab);
    }, []);

    const getTabState = (tab: "about" | "articles" | "projects") => (activeTab === tab ? "open" : "closed");

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link className={navigationMenuTriggerStyle()} href={"/about"} data-state={getTabState("about")}>
                        About
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        className={navigationMenuTriggerStyle()}
                        href={"/articles"}
                        data-state={getTabState("articles")}
                    >
                        Articles
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link
                        className={navigationMenuTriggerStyle()}
                        href={"/projects"}
                        data-state={getTabState("projects")}
                    >
                        Projects
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} href="mailto:dobinshin@gmail.com">
                        Contact
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
