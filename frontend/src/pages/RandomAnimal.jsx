import { useEffect, useState } from "react";

export default function RandomAnimal() {
  const [animal, setAnimal] = useState();
  const [loading, setLoading] = useState(true);
  const [prompt, setPrompt] = useState();
  const [animalPic, setAnimalPic] = useState();

  const getData = async () => {
    try {
      setLoading(true);
      const url = "/api/animal";
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setAnimal(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getPrompt = async () => {
    try {
      setLoading(true);
      const url = `/api/gemini?prompt=${encodeURIComponent(animal)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setPrompt(data.result);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getPic = async () => {
    try {
      setLoading(true);
      const url = `/api/banana?banana=${encodeURIComponent(prompt)}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      const data = await response.json();
      setAnimalPic(data.result);
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!animalPic) return;
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${animalPic}`;
    link.download = `${animal || "random_animal"}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="p-8 flex flex-col items-center gap-10 animate-mac-fade-in min-h-[calc(100vh-140px)]">
      <header className="text-center flex flex-col gap-3">
        <div className="mac-badge mx-auto mb-2">AI Experiment</div>
        <h1 className="mac-h1 text-4xl">랜동생</h1>
      </header>
      <button
        onClick={getData}
        disabled={loading}
        className={`mac-button-primary px-8 py-3 text-base shadow-lg transition-all active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "loading..." : "Generate"}
      </button>

      <div className="mac-window w-full max-w-2xl flex flex-col overflow-visible">
        <div className="mac-title-bar border-b border-[var(--mac-border)] flex justify-between">
          <div className="mac-traffic-lights">
            <div className="mac-dot mac-dot-close" />
            <div className="mac-dot mac-dot-min" />
            <div className="mac-dot mac-dot-max" />
          </div>
          <span className="mac-caption font-medium opacity-50">
            나노바나나가 그려주는 랜덤 동물 생성기
          </span>
          <div className="w-12" /> {/* Spacer for balance */}
        </div>

        <div className="p-8 flex flex-col gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="mac-card w-full flex flex-col items-center justify-center min-h-[120px] bg-mac-surface-opaque/30 border-dashed border-2">
              {loading && !animal ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-6 h-6 border-2 border-mac-blue border-t-transparent rounded-full animate-spin" />
                  <span className="mac-caption">새로운 동물을 찾는 중...</span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="mac-h2 text-3xl block mb-2 whitespace-pre-line">
                    {animal || "랜덤 동물 생성기"}
                  </span>
                </div>
              )}
            </div>

            {animal && (
              <button
                onClick={getPrompt}
                disabled={loading}
                className={`mac-button-primary px-8 py-3 text-base shadow-lg transition-all active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "loading..." : "Get Prompt"}
              </button>
            )}
          </div>

          {prompt && (
            <div
              className="mac-slide-up flex flex-col gap-6"
              style={{ animation: "mac-slide-up 0.5s ease-out" }}
            >
              <div className="mac-card bg-[var(--mac-surface-opaque)] shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-mac-blue" />
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🎨</span>
                  <h3 className="mac-h2 text-lg">AI Assistant: NanoBanana</h3>
                </div>
                <p className="mac-body leading-relaxed text-[15px] pl-2 border-l-2 border-gray-100 dark:border-gray-800">
                  {prompt}
                </p>

                <div className="mt-8 flex flex-col items-center gap-6 pt-6 border-t border-[var(--mac-border)]">
                  <button
                    onClick={getPic}
                    disabled={loading}
                    className={`mac-button-primary px-8 py-3 text-base shadow-lg transition-all active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {loading ? "loading..." : "Nano Banana"}
                  </button>

                  {animalPic && (
                    <div className="flex flex-col items-center gap-4 w-full">
                      <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-[var(--mac-border)] animate-mac-fade-in bg-black/5">
                        <img
                          src={`data:image/jpeg;base64,${animalPic}`}
                          alt="Generated Animal"
                          className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
                      <button
                        onClick={handleDownload}
                        disabled={loading}
                        className={`mac-button-primary px-8 py-3 text-base shadow-lg transition-all active:scale-95 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {loading ? "loading..." : "Download"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="mac-caption opacity-40 hover:opacity-100 transition-opacity">
        Powered by Gemini 2.0 & Imagen 4
      </footer>
    </div>
  );
}
