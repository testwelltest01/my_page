# 🚀 Multi-Platform Integrated Project (Monorepo)

이 프로젝트는 React 기반의 웹(Frontend), Expo 기반의 모바일 앱(App), 그리고 FastAPI 기반의 서버(Backend)가 통합된 모노레포 프로젝트입니다. 

Vercel 배포 최적화를 위해 전체적인 구조가 조정되었으며, 하나의 저장소에서 프론트엔드와 백엔드가 동시에 서빙됩니다.

---

## 📂 프로젝트 구조

```text
.
├── frontend/          # React + Vite (웹 프론트엔드)
├── app/               # Expo + React Native (모바일 앱)
├── api/               # FastAPI (Vercel 배포용 백엔드 서버)
├── vercel.json        # Vercel 모노레포 배포 설정 파일
└── .gitignore         # 통합 관리용 Git 설정
```

---

## 🛠 로컬 개발 및 실행 방법

로컬에서 원활한 테스트를 위해 프론트엔드와 백엔드 서버를 각각 실행해야 합니다.

### 1. Web Frontend (`frontend/`)
Vite를 사용한 현대적인 React 웹 애플리케이션입니다. 
백엔드 연동을 위해 `/api` 경로에 대한 프록시(Proxy) 설정이 `vite.config.js`에 적용되어 있습니다.

```bash
cd frontend
npm install
npm run dev
```

### 2. Mobile App (`app/`)
Expo를 사용한 iOS/Android 크로스 플랫폼 애플리케이션입니다.
```bash
cd app
npm install
npx expo start
```

### 3. Backend Server (`api/`)
Gemini API와 Imagen AI를 활용하는 FastAPI 서버입니다. Vercel 배포 표준을 위해 파일명이 `index.py`로 설정되어 있으며, 모든 라우트는 `/api` 접두사를 사용합니다.

```bash
cd api
# 가상환경(venv) 사용 권장
pip install -r requirements.txt
uvicorn index:app --reload
```
> **Note:** 로컬 실행 시 `api/.env` 파일에 `GOOGLE_API_KEY`가 필요합니다.

---

## 🌐 Vercel 배포 가이드

이 프로젝트는 `vercel.json` 설정을 통해 프론트엔드와 백엔드가 한 번에 배포되도록 구성되어 있습니다.

1.  **Vercel 연동**: Vercel 대시보드에서 이 GitHub 리포지토리를 **Import** 합니다.
2.  **환경 변수 설정**: Vercel 프로젝트 설정의 **Environment Variables** 탭에서 `GOOGLE_API_KEY`를 추가해 주세요.
3.  **배포**: 빌드 명령 수정 없이 바로 배포가 진행됩니다. 배포 후 `/api/*` 경로는 자동으로 백엔드(Serverless Function)로 연결됩니다.

---

## 💡 개발 및 배포 팁 (Troubleshooting)

- **대소문자 구별**: 리눅스 기반의 Vercel 빌드 서버는 파일 대소문자를 엄격히 구분합니다. `import` 시 파일명과 대소문자가 일치하는지 항상 확인하세요.
- **상대 경로(`/api`)**: 프론트엔드 코드에서 API 호출 시 `http://localhost:8000`과 같은 절대 경로 대신 `/api/animal`과 같은 상대 경로를 사용해야 로컬과 배포 환경 모두에서 정상 작동합니다.
- **Vite Proxy**: 로컬 개발 시 `frontend/vite.config.js`의 `proxy` 설정을 통해 `/api` 요청을 로컬 파이썬 서버로 전달합니다.

---

## 💾 주요 기능 및 기술 스택

- **Frontend**: React, Vite, Tailwind CSS (Design System 적용)
- **Mobile**: React Native, Expo, Lottie (Animations)
- **Backend**: Python, FastAPI
- **AI Integration**: Google Gemini 2.0 (Prompt), Imagen 4.0 (Image)

---

## 📝 관리 이력

- **리포지토리 통합**: 기존 단일 리포지토리들을 모노레포 구조로 통합 (웹 `master`, `front-end`, `app2` 브랜치 기록 보존 합치기 완료)
- **배포 최적화**: Vercel 서빙을 위해 `server` 폴더를 `api`로 변경하고 통합 환경 구축
