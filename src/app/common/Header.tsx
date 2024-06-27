import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="text-2xl font-bold">
        <a href="/">DS</a>
      </h1>
      <Navigation />
    </header>
  );
}
