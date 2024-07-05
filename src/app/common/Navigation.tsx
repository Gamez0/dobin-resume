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

  const getTabState = (tab: "about" | "articles" | "projects") =>
    activeTab === tab ? "open" : "closed";

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink data-state={getTabState("about")}>
            <Link className={navigationMenuTriggerStyle()} href={"/about"}>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink data-state={getTabState("articles")}>
            <Link className={navigationMenuTriggerStyle()} href={"/articles"}>
              Articles
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink data-state={getTabState("projects")}>
            <Link className={navigationMenuTriggerStyle()} href={"/projects"}>
              Projects
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="mailto:dobinshin@gmail.com"
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
