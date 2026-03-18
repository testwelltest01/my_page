import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cat from "../assets/cat.svg";

function Header() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <header className="sticky top-4 z-50 mac-window m-4 overflow-visible backdrop-blur-md bg-mac-surface-opaque/70 border-b border-[var(--mac-border)] shadow-lg">
      <div className="mac-title-bar justify-between bg-mac-surface-opaque/50">
        <div className="flex items-center gap-6">
          <div className="mac-traffic-lights">
            <div className="mac-dot mac-dot-close" />
            <div className="mac-dot mac-dot-min" />
            <div className="mac-dot mac-dot-max" />
          </div>
          <div className="flex items-center gap-2">
            <img className="size-8" src={cat} alt="icon" />
            <span className="mac-body font-bold tracking-tight">최현석</span>
          </div>
        </div>

        <nav>
          <ul className="flex gap-1">
            <li>
              <Link to="/" className="mac-nav-item">
                Main
              </Link>
            </li>
            <li>
              <Link to="/FirstProject" className="mac-nav-item">
                First Project
              </Link>
            </li>
            <li>
              <Link to="/Api" className="mac-nav-item">
                Api
              </Link>
            </li>
            <li>
              <Link to="/Cat" className="mac-nav-item">
                Cat
              </Link>
            </li>
            <li>
              <Link to="/RandomAnimal" className="mac-nav-item">
                RandomAnimal
              </Link>
            </li>
            <li>
              <Link to="/DesignSystemDemo" className="mac-nav-item">
                Design System
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="mac-button-secondary w-10 h-8 p-0 flex items-center justify-center text-lg"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <input
            type="text"
            className="mac-search w-32 focus:w-48 transition-all"
            placeholder="Search"
          />
          <div className="mac-badge bg-mac-green/10 text-mac-green border-mac-green/20">
            Online
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
