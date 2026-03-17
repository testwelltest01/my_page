import { useEffect, useState } from "react";

export default function SecondPage() {
  // 실제 API 데이터
  const [data, setData] = useState(null);

  // 응답 메타정보 (status, headers 기반 요약)
  const [responseInfo, setResponseInfo] = useState(null);

  // 활성 탭 상태 관리
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    async function fetchData() {
      try {
        // 1️⃣ API 요청
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        // 2️⃣ header에서 필요한 정보 추출
        const contentType = response.headers.get("content-type");
        const contentLength = response.headers.get("content-length");

        // 3️⃣ status 기반 성공 여부 판단
        const isSuccess = response.status >= 200 && response.status < 300;

        // 4️⃣ 응답 정보를 요약한 객체 생성
        const info = {
          status: response.status, // HTTP 상태 코드
          ok: response.ok, // fetch가 제공하는 성공 여부
          success: isSuccess, // 직접 계산한 성공 여부
          contentType: contentType, // 데이터 형식
          contentLength: contentLength || "N/A", // 데이터 크기
          timestamp: new Date().toLocaleTimeString(), // 응답 수신 시간
        };

        // 5️⃣ Body를 읽기 전에 응답 정보 저장
        setResponseInfo(info);

        // 6️⃣ body JSON 파싱
        const json = await response.json();

        // 7️⃣ 실제 데이터 저장
        setData(json);
      } catch (error) {
        // 네트워크 오류 등
        console.error("API 요청 실패:", error);

        setResponseInfo({
          status: "NETWORK_ERROR",
          success: false,
          message: error.message,
        });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-6 md:p-12 animate-mac-fade-in max-w-6xl mx-auto flex flex-col gap-8 h-[calc(100vh-100px)]">
      <header className="flex flex-col gap-2">
        <h1 className="mac-h1 text-3xl">Network Inspector</h1>
        <p className="mac-body text-mac-text-secondary">
          Monitor API responses and inspect user data with macOS-inspired
          precision.
        </p>
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
            User Dataset
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
          ) : (
            <div className="flex flex-col gap-6 animate-mac-slide-up">
              <div className="flex justify-between items-center">
                <h2 className="mac-h2">User Directory</h2>
                <div className="mac-badge bg-mac-blue/5 text-mac-blue border-mac-blue/10">
                  {data?.length || 0} items
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-w-[450pt]">
                {data ? (
                  data.map((user) => (
                    <div
                      key={user.id}
                      className="mac-card group hover:bg-mac-surface transition-all duration-300 border-mac-border/10 hover:shadow-lg hover:translate-y-[-2px]"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="size-10 rounded-xl bg-gradient-to-tr from-mac-blue to-cyan-400 flex items-center justify-center text-white font-bold shadow-mac-blue/20 shadow-md">
                          {user.name[0]}
                        </div>
                        <div className="flex flex-col">
                          <h4 className="mac-body font-bold group-hover:text-mac-blue transition-colors">
                            {user.name}
                          </h4>
                          <p className="mac-caption">@{user.username}</p>
                        </div>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-mac-border/20">
                        <div className="flex justify-between items-center mac-caption">
                          <span className="opacity-40">Email</span>
                          <span className="font-medium">{user.email}</span>
                        </div>
                        <div className="flex justify-between items-center mac-caption">
                          <span className="opacity-40">Company</span>
                          <span className="font-medium">
                            {user.company.name}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mac-caption">
                          <span className="opacity-40">Location</span>
                          <span className="font-medium">
                            {user.address.city}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 flex flex-col items-center justify-center py-32 opacity-30 gap-4">
                    <div className="size-8 rounded-full border-2 border-mac-blue border-t-transparent animate-spin" />
                    <p className="mac-caption">Parsing records...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
