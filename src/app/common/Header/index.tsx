"use client";

import GithubButton from "./GithubButton";
import { ModeToggle } from "./ModeToggle";
import Navigation from "../Navigation";

export default function Header() {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold">
                    {/* FIX-ME: use next/link because baseUrl changes in github pages */}
                    <a href="/">DS</a>
                </h1>
                <Navigation />
            </div>

            <div className="flex items-center gap-4">
                <GithubButton />
                <ModeToggle />
            </div>
        </header>
    );
}
