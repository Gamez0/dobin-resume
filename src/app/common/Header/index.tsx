import { Button } from "@/components/ui/button";
import Navigation from "../Navigation";
import { Github, Sun } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold">
          <a href="/">DS</a>
        </h1>
        <Navigation />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon">
          <Github />
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}
