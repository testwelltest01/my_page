import { Link } from "react-router-dom";
import cat from "../assets/cat.svg";

function MainPage() {
  return (
    <div className="flex h-full items-center justify-center p-8 animate-mac-fade-in">
      <div className="mac-card flex flex-col items-center gap-6 px-16 py-12 text-center">
        <div className="relative group mb-2">
          <div className="relative size-20 flex items-center justify-center">
            <img src={cat} alt="cat Icon" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="mac-h1 bg-gradient-to-b from-mac-text to-mac-text/70 bg-clip-text text-transparent">
            최현석
          </h1>
          <p className="mac-caption font-medium opacity-60">
            다양한 프로젝트 내용을 소개합니다.
          </p>

          {/* 통합 기술 스택 섹션 */}
          <div className="flex items-center justify-center gap-3 mt-4 flex-wrap max-w-lg mx-auto">
            {/* React Chip */}
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-mac-surface-opaque/40 border border-mac-border/40 rounded-2xl backdrop-blur-md shadow-sm hover:border-mac-blue/40 transition-all duration-300">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                className="size-6 group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300"
                alt="React"
              />
              <span className="text-[12px] font-bold tracking-wider text-mac-text-secondary group-hover:text-mac-blue transition-colors">
                REACT
              </span>
            </div>

            {/* Tailwind Chip */}
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-mac-surface-opaque/40 border border-mac-border/40 rounded-2xl backdrop-blur-md shadow-sm hover:border-mac-blue/40 transition-all duration-300">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                className="size-6 group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300"
                alt="Tailwind CSS"
              />
              <span className="text-[12px] font-bold tracking-wider text-mac-text-secondary group-hover:text-mac-blue transition-colors">
                TAILWIND
              </span>
            </div>

            {/* JS Chip */}
            <div className="group flex items-center gap-3 px-4 py-2.5 bg-mac-surface-opaque/40 border border-mac-border/40 rounded-2xl backdrop-blur-md shadow-sm hover:border-mac-blue/40 transition-all duration-300">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                className="size-6 group-hover:scale-110 group-hover:rotate-[15deg] transition-transform duration-300 rounded-sm"
                alt="JavaScript"
              />
              <span className="text-[12px] font-bold tracking-wider text-mac-text-secondary group-hover:text-mac-blue transition-colors">
                JAVASCRIPT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
