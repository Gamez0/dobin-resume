import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GithubButton() {
    const githubUrl = "https://github.com/Gamez0";

    return (
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Button variant="outline" size="icon">
                <Github role="link" />
            </Button>
        </a>
    );
}
