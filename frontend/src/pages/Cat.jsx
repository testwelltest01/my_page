import { useEffect, useState } from "react";

export default function Cat() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDownload = async (url, id) => {
    try {
      const response = await fetch(url);
      const imgBlob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(imgBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `cat-${id || "image"}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (e) {
      console.error("Download failed:", e);
      alert("다운로드에 실패했습니다.");
    }
  };

  const getData = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = "https://api.thecatapi.com/v1/images/search?limit=10";
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP Error! Status: ${response.status}`);
      const data = await response.json();
      setCats(data);
    } catch (e) {
      console.error("[Error]: ", e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex-1 p-6 md:p-10 animate-mac-fade-in">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="mac-h1">Cat Gallery</h1>
            <p className="mac-caption mt-1">
              Discover cute feline friends from The Cat API
            </p>
          </div>
          <button
            onClick={getData}
            disabled={loading}
            className="mac-button-primary disabled:opacity-50 disabled:cursor-not-allowed h-10 px-6 gap-2"
          >
            {loading ? "Fetching..." : "Refresh Photos"}
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="mac-card border-mac-red/30 bg-mac-red/5 flex items-center gap-3 p-4">
            <span className="text-xl">⚠️</span>
            <div>
              <p className="mac-body font-semibold text-mac-red">
                Connection Error
              </p>
              <p className="mac-caption text-mac-red/80">{error}</p>
            </div>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? // Skeleton Loader
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="mac-card h-80 flex flex-col gap-4 animate-pulse"
                >
                  <div className="flex-1 bg-mac-text/5 rounded-lg" />
                  <div className="h-4 w-2/3 bg-mac-text/5 rounded w-3/4" />
                </div>
              ))
            : // Actual Content
              cats.map((cat, index) => (
                <div
                  key={cat.id || index}
                  className="mac-card group overflow-hidden p-0 h-80 hover:scale-[1.02] transition-all duration-300 flex flex-col"
                >
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={cat.url}
                      alt="A cute cat"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 bg-mac-surface/80 backdrop-blur-sm border-t border-mac-border flex justify-between items-center">
                    <span className="mac-caption font-medium">
                      Cat #{index + 1}
                    </span>
                    <button
                      onClick={() => handleDownload(cat.url, cat.id)}
                      className="mac-button-secondary h-8 px-3 gap-1.5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
        </div>

        {!loading && cats.length === 0 && !error && (
          <div className="text-center py-20">
            <p className="mac-text-secondary">No cats found. Try refreshing!</p>
          </div>
        )}
      </div>
    </div>
  );
}
