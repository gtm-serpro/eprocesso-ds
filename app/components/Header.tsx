import { ThemeSwitcher } from "./ThemeSwitcher";
import { useLocation } from "react-router";

export default function Header() {
    const location = useLocation();
    
    // Function to determine if link is active
    const isActive = (path: string) => {
        return location.pathname === path ? "underline" : "";
    };

    return (
        <header className="border-b border-slate-500 fixed top-0 w-full bg-[var(--bg-color)]">
          <div className="py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-bold">
              <a href="/">e-processo</a>
            </h1>
            <nav className="flex gap-8 items-center">
              <ul className="flex gap-4">
                <li>
                  <a href="/" className={`hover:underline ${isActive("/")}`}>Home</a>
                </li>
                <li>
                  <a href="/colors" className={`hover:underline ${isActive("/colors")}`}>Colors</a>
                </li>
                <li>
                  <a href="/components" className={`hover:underline ${isActive("/components")}`}>Components</a>
                </li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </div>
        </header>
    );
}