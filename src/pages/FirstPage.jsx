import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="flex flex-col animate-mac-fade-in pb-20">
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-14 md:pt-20 pb-10 text-center">
        {/* 배지 */}
        <div className="mac-badge mb-6 px-4 py-1.5 hover:bg-mac-border/100 transition-colors">
          <a
            href="https://github.com/Evan-Yoon/cvProjectTeam3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* 타이틀 */}
        <h1 className="mac-h1 text-4xl md:text-5xl mb-5">
          <span className="text-mac-blue">시각장애인</span>을 위한{" "}
          <span className="text-mac-blue">네비게이션</span>
        </h1>

        {/* 설명 */}
        <p className="mac-body text-mac-text-secondary leading-relaxed max-w-xl mx-auto">
          프론트엔드, 백엔드, AI — 각 분야의 전문가들이 모여
          <br className="hidden sm:block" />
          사용자 중심의 서비스를 만들어갑니다.
        </p>

        {/* 통계 */}
        <div className="flex justify-center gap-12 mt-12 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-mac-blue">3명</div>
            <div className="mac-caption mt-1 font-medium">Core Team</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mac-blue">120+</div>
            <div className="mac-caption mt-1 font-medium">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-mac-blue">15+</div>
            <div className="mac-caption mt-1 font-medium">Stack Modules</div>
          </div>
        </div>

        {/* 프로젝트 쇼케이스 */}
        <div className="w-full mb-20 group">
          <div className="mac-card overflow-hidden p-0 border-none shadow-2xl hover:shadow-mac-blue/10 transition-all duration-500 overflow-hidden">
            <div className="relative aspect-video w-full">
              <img
                src="/project_vision.png"
                alt="Project Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-3000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mac-surface/90 to-transparent flex flex-col justify-end p-8 text-left">
                <h2 className="mac-h2 text-2xl mb-2 text-white">
                  Innovation in Accessibility
                </h2>
                <p className="mac-body text-white/80 max-w-2xl">
                  시각장애인의 안전한 보행을 위해 실시간 객체 탐지와 음성
                  인터페이스를 결합한 차세대 네비게이션 솔루션입니다. 고성능
                  YOLO 모델과 하이브리드 앱 기술의 융합을 시도했습니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-mac-border/30">
              <div className="bg-mac-surface p-6 flex flex-col gap-2">
                <span className="text-mac-red font-bold text-lg">
                  AI Vision
                </span>
                <p className="mac-caption leading-relaxed">
                  YOLO26n 기반의 실시간 사물 인식 알고리즘을 통해 주변 위험
                  요소를 즉각적으로 파악합니다.
                </p>
              </div>
              <div className="bg-mac-surface p-6 flex flex-col gap-2 border-x border-mac-border/30">
                <span className="text-mac-yellow font-bold text-lg">
                  Edge Computing
                </span>
                <p className="mac-caption leading-relaxed">
                  TF.js와 TFLite를 활용하여 모바일 기기 내에서 네트워크 의존
                  없이 빠른 추론 속도를 보장합니다.
                </p>
              </div>
              <div className="bg-mac-surface p-6 flex flex-col gap-2">
                <span className="text-mac-green font-bold text-lg">
                  Sync & Scale
                </span>
                <p className="mac-caption leading-relaxed">
                  FastAPI와 Supabase의 실시간 연동을 통해 신고 데이터와 지도를
                  실시간으로 동기화합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== 팀원 카드 그리드 ===================== */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* ───────── 카드 1: 윤지현 ───────── */}
          <div className="mac-card group flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-mac-blue/10 border border-mac-blue/20 overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Yoon&backgroundColor=dbeafe"
                alt="윤지현"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="mac-badge bg-mac-blue/20 text-mac-blue border-mac-blue/30 scale-90">
                팀장
              </span>
              <span className="mac-caption font-semibold">
                프론트엔드 및 앱
              </span>
            </div>

            <h3 className="mac-h2 mb-2 font-bold">윤지현</h3>
            <p className="mac-body text-mac-text-secondary mb-4 px-2 leading-tight">
              React + TS 기반의 <br />
              사용자 앱 및 관리자 웹 통합 개발
            </p>

            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              <span className="mac-badge bg-mac-surface-opaque/50">
                React/TS
              </span>
              <span className="mac-badge bg-mac-surface-opaque/50">
                Capacitor
              </span>
              <div className="w-full" />
              <span className="mac-badge bg-mac-surface-opaque/50">
                Leaflet
              </span>
              <span className="mac-badge bg-mac-surface-opaque/50">
                Recharts
              </span>
            </div>

            <div className="w-full h-[1px] bg-mac-border mb-4" />
            <div className="flex flex-col gap-1.5 text-left w-full px-2">
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue">•</span>
                Capacitor 기반 센서 연동 및 앱 패키징
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue">•</span>
                지도 시각화 및 실시간 데이터 연동
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue">•</span>
                관리자 대시보드 및 통계 뷰 구현
              </div>
            </div>
          </div>

          {/* ───────── 카드 2: 이지호 ───────── */}
          <div className="mac-card group flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-mac-green/10 border border-mac-green/20 overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jiho&backgroundColor=f3e8ff"
                alt="이지호"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="mac-badge bg-mac-blue/20 text-mac-blue border-mac-blue/30 scale-90">
                팀원
              </span>
              <span className="mac-caption font-semibold">백엔드</span>
            </div>

            <h3 className="mac-h2 mb-2 font-bold">이지호</h3>
            <p className="mac-body text-mac-text-secondary mb-4 px-2 leading-tight">
              FastAPI 기반 백엔드 및 <br />
              Supabase 연동 인프라 설계
            </p>

            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              <span className="mac-badge bg-mac-surface-opaque/50">
                FastAPI
              </span>
              <span className="mac-badge bg-mac-surface-opaque/50">
                Supabase
              </span>
              <div className="w-full" />
              <span className="mac-badge bg-mac-surface-opaque/50">AWS S3</span>
              <span className="mac-badge bg-mac-surface-opaque/50">JWT</span>
            </div>

            <div className="w-full h-[1px] bg-mac-border mb-4" />
            <div className="flex flex-col gap-2 text-left w-full px-2">
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                신고 데이터 CRUD 및 지도용 API 개발
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                PostgreSQL 기반 데이터 아키텍처 설계
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                JWT 인증 및 서버 인프라 구성 관리
              </div>
            </div>
          </div>

          {/* ───────── 카드 3: 최현석 ───────── */}
          <div className="mac-card group flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-20 h-20 rounded-full bg-mac-yellow/10 border border-mac-yellow/20 overflow-hidden mb-5 group-hover:scale-105 transition-transform duration-300 shadow-sm">
              <img
                src="https://api.dicebear.com/9.x/adventurer/svg?seed=Hyunseok&backgroundColor=fef3c7"
                alt="최현석"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-2 mb-3">
              <span className="mac-badge bg-mac-blue/20 text-mac-blue border-mac-blue/30 scale-90">
                팀원
              </span>
              <span className="mac-caption font-semibold">AI</span>
            </div>

            <h3 className="mac-h2 mb-2 font-bold">최현석</h3>
            <p className="mac-body text-mac-text-secondary mb-4 px-2 leading-tight">
              Vision AI 모델 최적화 및 <br />
              온디바이스 서비스 배포 총괄
            </p>

            <div className="flex flex-wrap justify-center gap-1.5 mb-6">
              <span className="mac-badge bg-mac-surface-opaque/50">YOLO</span>
              <span className="mac-badge bg-mac-surface-opaque/50">TFLite</span>
              <div className="w-full" />
              <span className="mac-badge bg-mac-surface-opaque/50">TF.js</span>
              <span className="mac-badge bg-mac-surface-opaque/50">
                Mobile Vision
              </span>
            </div>

            <div className="w-full h-[1px] bg-mac-border mb-4" />
            <div className="flex flex-col gap-2 text-left w-full px-2">
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                YOLO26n 모델 학습 및 TFLite 최적화 변환
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                TF.js 기반 실시간 비전 추론 서비스 탑재
              </div>
              <div className="mac-caption flex items-start gap-1.5 font-medium">
                <span className="text-mac-blue font-bold">•</span>
                추론 결과와 리포트 데이터 구조 연동 개발
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      <div className="w-full h-10" />
      <div className="flex justify-center gap-4 mt-12 pb-10">
        <Link to="/" className="mac-button-secondary w-64 px-8">
          Back Home
        </Link>
        <Link to="/SecondPage" className="mac-button-primary w-64 px-8">
          Next Page
        </Link>
      </div>
    </div>
  );
}

export default FirstPage;
