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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
