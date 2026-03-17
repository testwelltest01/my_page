import { useEffect, useState } from "react";

export default function SecondPage() {
  // API의 url
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");

  // 실제 API 데이터
  const [data, setData] = useState(null);

  // 응답 메타정보 (status, headers 기반 요약)
  const [responseInfo, setResponseInfo] = useState(null);

  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState("info");

  const fetchData = async (e) => {
    try {
      // 1️⃣ API 요청
      const response = await fetch(e);

      // 2️⃣ header에서 필요한 정보 추출
      const contentType = response.headers.get("content-type");
      const contentLength = response.headers.get("content-length");

      // 3️⃣ status 기반 성공 여부 판단
      const isSuccess = response.status >= 200 && response.status < 300;

      // 4️⃣ 응답 정보를 요약한 객체 생성
      const info = {
        status: response.status,
        ok: response.ok,
        success: isSuccess,
        contentType: contentType,
        contentLength: contentLength || "N/A",
        timestamp: new Date().toLocaleTimeString(),
      };

      // 5️⃣ Body를 읽기 전에 응답 정보 저장
      setResponseInfo(info);

      // 6️⃣ body 파싱 (Content-Type에 따라 분기)
      let bodyData;
      if (contentType && contentType.includes("application/json")) {
        bodyData = await response.json();
      } else if (contentType && contentType.includes("image/")) {
        bodyData = { type: "image", url: e };
      } else if (contentType && contentType.includes("audio/")) {
        bodyData = { type: "audio", url: e };
      } else if (contentType && contentType.includes("video/")) {
        bodyData = { type: "video", url: e };
      } else {
        bodyData = await response.text();
        if (typeof bodyData === "string" && bodyData.length > 1000) {
          bodyData = bodyData.substring(0, 1000) + "... (truncated)";
        }
      }

      // 7️⃣ 실제 데이터 저장
      setData(bodyData);
    } catch (error) {
      // 네트워크 오류 등
      console.error("API 요청 실패:", error);

      setResponseInfo({
        status: "NETWORK_ERROR",
        success: false,
        message: error.message,
      });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="p-6 md:p-12 animate-mac-fade-in max-w-6xl mx-auto flex flex-col gap-8 h-[calc(100vh-100px)]">
      <header className="flex flex-col gap-2">
        <h1 className="mac-h1 text-3xl">Network Inspector</h1>
        <p className="mac-body text-mac-text-secondary">
          Monitor API responses and inspect user data with macOS-inspired
          precision.
        </p>
        <div className="flex items-center gap-3">
          <p className="mac-body text-mac-text-secondary whitespace-nowrap">
            API endpoint 💻
          </p>
          <input
            type="text"
            className="mac-search flex-1 focus:w-[400px] transition-all"
            value={url}
            placeholder="https://jsonplaceholder.typicode.com/users"
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchData(url)}
          />
          <button onClick={() => fetchData(url)} className="mac-button-primary">
            Enter
          </button>
        </div>
      </header>

      <div className="mac-window flex-1 flex overflow-hidden shadow-2xl">
        {/* 사이드바 */}
        <aside className="mac-sidebar p-4 flex flex-col gap-2 shrink-0">
          <div className="mac-traffic-lights mb-6">
            <div className="mac-dot mac-dot-close" />
            <div className="mac-dot mac-dot-min" />
            <div className="mac-dot mac-dot-max" />
          </div>

          <button
            onClick={() => setActiveTab("info")}
            className={`mac-nav-item transition-all duration-200 ${activeTab === "info" ? "active shadow-sm" : ""}`}
          >
            <span className="text-lg">📊</span>
            Response Info
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={`mac-nav-item transition-all duration-200 ${activeTab === "data" ? "active shadow-sm" : ""}`}
          >
            <span className="text-lg">👥</span>
            API Data
          </button>
          <button
            onClick={() => setActiveTab("guide")}
            className={`mac-nav-item transition-all duration-200 ${activeTab === "guide" ? "active shadow-sm" : ""}`}
          >
            <span className="text-lg">📚</span>
            Content Guide
          </button>

          <div className="mt-auto p-4 mac-card bg-mac-surface-opaque/20 border-none">
            <p className="mac-caption font-bold text-mac-blue uppercase tracking-tighter">
              Endpoint
            </p>
            <p className="mac-caption truncate opacity-60">
              jsonplaceholder.typicode.com
            </p>
          </div>
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex-1 bg-mac-surface-opaque/30 backdrop-blur-2xl p-8 overflow-auto">
          {activeTab === "info" ? (
            <div className="flex flex-col gap-6 animate-mac-slide-up">
              <div className="flex justify-between items-center">
                <h2 className="mac-h2">Response Metadata</h2>
                {responseInfo && (
                  <span
                    className={`mac-badge ${responseInfo.success ? "bg-mac-green/10 text-mac-green border-mac-green/20" : "bg-mac-red/10 text-mac-red border-mac-red/20"}`}
                  >
                    {responseInfo.status === "NETWORK_ERROR"
                      ? "Failed"
                      : `Status ${responseInfo.status}`}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[450pt]">
                {responseInfo ? (
                  Object.entries(responseInfo).map(([key, value]) => (
                    <div
                      key={key}
                      className="mac-card flex flex-col gap-1 border-mac-border/10 hover:border-mac-blue/30 transition-colors"
                    >
                      <span className="mac-caption uppercase text-[10px] font-bold opacity-40 tracking-widest">
                        {key}
                      </span>
                      <span className="mac-body font-semibold">
                        {typeof value === "boolean"
                          ? value
                            ? "Enabled"
                            : "Disabled"
                          : String(value)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 flex flex-col items-center justify-center py-32 opacity-30 gap-4">
                    <div className="size-8 rounded-full border-2 border-mac-blue border-t-transparent animate-spin" />
                    <p className="mac-caption">Establishing connection...</p>
                  </div>
                )}
              </div>
            </div>
          ) : activeTab === "data" ? (
            <div className="flex flex-col gap-6 animate-mac-slide-up">
              <div className="flex justify-between items-center">
                <h2 className="mac-h2">API Data</h2>
                <div className="mac-badge bg-mac-blue/5 text-mac-blue border-mac-blue/10">
                  {data?.length || 0} items
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 min-w-[450pt]">
                {data && data.type === "image" ? (
                  <div className="mac-card flex flex-col items-center gap-4 p-8">
                    <img
                      src={data.url}
                      alt="API Response"
                      className="rounded-lg shadow-lg max-w-full h-auto max-h-[400px] border border-mac-border/20"
                    />
                    <p className="mac-caption opacity-60">
                      Image detected: {data.url}
                    </p>
                  </div>
                ) : data && data.type === "audio" ? (
                  <div className="mac-card flex flex-col items-center gap-4 p-8">
                    <audio controls className="w-full">
                      <source src={data.url} />
                      Your browser does not support the audio element.
                    </audio>
                    <p className="mac-caption opacity-60">
                      Audio detected: {data.url}
                    </p>
                  </div>
                ) : data && data.type === "video" ? (
                  <div className="mac-card flex flex-col items-center gap-4 p-8">
                    <video
                      controls
                      className="rounded-lg shadow-lg max-w-full max-h-[400px] border border-mac-border/20"
                    >
                      <source src={data.url} />
                      Your browser does not support the video element.
                    </video>
                    <p className="mac-caption opacity-60">
                      Video detected: {data.url}
                    </p>
                  </div>
                ) : typeof data === "string" ? (
                  <div className="mac-card p-6 whitespace-pre-wrap font-mono text-xs opacity-80 border-mac-border/10">
                    {data}
                  </div>
                ) : (
                    Array.isArray(data)
                      ? data.length > 0
                      : data &&
                        typeof data === "object" &&
                        Object.keys(data).length > 0
                  ) ? (
                  Array.isArray(data) ? (
                    data.map((item, index) => (
                      <div
                        key={item.id || index}
                        className="mac-card group hover:bg-mac-surface transition-all duration-300 border-mac-border/10 hover:shadow-lg hover:translate-y-[-2px]"
                      >
                        <div className="space-y-2 pt-4 border-t border-mac-border/20">
                          {Object.entries(item).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex justify-between items-center mac-caption overflow-hidden gap-4"
                            >
                              <span className="opacity-40 shrink-0">{key}</span>
                              <span className="font-medium truncate text-right">
                                {typeof value === "object"
                                  ? JSON.stringify(value)
                                  : String(value)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="mac-card group hover:bg-mac-surface transition-all duration-300 border-mac-border/10">
                      <div className="space-y-2 pt-4 border-t border-mac-border/20">
                        {Object.entries(data).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between items-center mac-caption overflow-hidden gap-4"
                          >
                            <span className="opacity-40 shrink-0">{key}</span>
                            <span className="font-medium truncate text-right">
                              {typeof value === "object"
                                ? JSON.stringify(value)
                                : String(value)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ) : (
                  <div className="col-span-2 flex flex-col items-center justify-center py-32 opacity-30 gap-4">
                    {data === null ? (
                      <>
                        <div className="size-8 rounded-full border-2 border-mac-blue border-t-transparent animate-spin" />
                        <p className="mac-caption">Parsing records...</p>
                      </>
                    ) : (
                      <p className="mac-caption">데이터가 비어있습니다</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8 animate-mac-slide-up max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl">📚</span>
                <h2 className="mac-h2">Content-Type Guide</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <section className="space-y-4">
                  <h3 className="mac-body font-bold text-mac-blue uppercase tracking-wider text-xs">
                    Common Content-Types
                  </h3>
                  <div className="mac-card overflow-hidden border-mac-border/10 p-0">
                    <table className="w-full text-left mac-caption">
                      <thead className="bg-mac-surface-opaque/50">
                        <tr>
                          <th className="p-4 font-bold border-b border-mac-border/10 text-mac-blue">
                            MIME Type
                          </th>
                          <th className="p-4 font-bold border-b border-mac-border/10 text-mac-blue">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-mac-border/5">
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            application/json
                          </td>
                          <td className="p-4">
                            Standard format for modern API data.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            image/jpeg, png, gif
                          </td>
                          <td className="p-4">
                            Visual media formats (Photos, Graphics).
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            audio/mpeg, wav
                          </td>
                          <td className="p-4">Sound and music files.</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            video/mp4, webm
                          </td>
                          <td className="p-4">
                            Motion picture and video content.
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            text/html
                          </td>
                          <td className="p-4">
                            Web page structure (HTML documents).
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 font-mono opacity-80">
                            text/plain
                          </td>
                          <td className="p-4">Raw unformatted text strings.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="mac-body font-bold text-mac-green uppercase tracking-wider text-xs">
                    Current Support Path
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mac-card border-mac-green/20 bg-mac-green/5">
                      <p className="font-bold text-mac-green mb-1">JSON</p>
                      <p className="mac-caption opacity-60 mb-2">
                        Fully parsed into interactive list items.
                      </p>
                      <div className="p-2 bg-mac-surface-opaque/30 rounded border border-mac-border/5 text-[10px] font-mono break-all opacity-70 selection:bg-mac-blue/30">
                        https://jsonplaceholder.typicode.com/users
                      </div>
                    </div>
                    <div className="mac-card border-mac-green/20 bg-mac-green/5">
                      <p className="font-bold text-mac-green mb-1">IMG</p>
                      <p className="mac-caption opacity-60 mb-2">
                        Directly rendered in the data viewer.
                      </p>
                      <div className="p-2 bg-mac-surface-opaque/30 rounded border border-mac-border/5 text-[10px] font-mono break-all opacity-70 selection:bg-mac-blue/30">
                        https://picsum.photos/seed/picsum/200/300
                      </div>
                    </div>
                  </div>
                </section>

                <div className="mac-card bg-mac-surface/40 border-dashed border-2 border-mac-border/20 p-6">
                  <p className="mac-caption text-center italic opacity-50">
                    "This inspector intelligently switches processing logic
                    based on the <b>Content-Type</b> header returned by your
                    server."
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
