"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/about");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">
        Welcome to the Next.js + Tailwind CSS Starter
      </h1>
      <section>
        {/* tab */}
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <a href="/about">About</a>
            <a href="/articles">Articles</a>
            <a href="/projects">Projects</a>
          </div>
        </div>
      </section>
      <section></section>
    </main>
  );
}
