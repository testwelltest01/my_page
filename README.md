# 🚀 Multi-Platform Integrated Project (Monorepo)

이 프로젝트는 React 기반의 웹(Frontend), Expo 기반의 모바일 앱(App), 그리고 FastAPI 기반의 서버(Backend)가 통합된 모노레포 프로젝트입니다. 

Vercel 배포를 위해 백엔드 구조가 조정되었으며, 하나의 저장소에서 프론트엔드와 백엔드가 함께 서빙됩니다.

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
Gemini API와 Imagen AI를 활용하는 FastAPI 서버입니다. Vercel 배포 표준을 위해 파일명이 `index.py`로 설정되어 있습니다.

```bash
cd api
# 가상환경(venv) 사용 권장
pip install -r requirements.txt
uvicorn index:app --reload
```
> **Note:** 로컬 실행 시 `api/.env` 파일에 `GOOGLE_API_KEY`가 필요합니다.

---

## 🌐 Vercel 배포 가이드

이 프로젝트는 `vercel.json` 설정을 통해 프론트엔드와 백엔드가 동시에 배포되도록 구성되어 있습니다.

1.  **Vercel 연동**: Vercel 대시보드에서 이 GitHub 리포지토리를 Import 합니다.
2.  **환경 변수 설정**: Vercel 프로젝트 설정의 **Environment Variables** 탭에서 `GOOGLE_API_KEY`를 추가해 주세요.
3.  **배포**: 별도의 빌드 명령 수정 없이 바로 배포가 진행됩니다. 배포 완료 시 `/api/*` 경로는 백엔드로, 그 외 경로는 프론트엔드로 연결됩니다.

---

## 💾 주요 기능 및 기술 스택

- **Frontend**: React, Vite, Tailwind CSS (Design System 적용)
- **Mobile**: React Native, Expo, Lottie (Animations)
- **Backend**: Python, FastAPI (Vercel Serverless Function)
- **AI Integration**: Google Gemini (Prompt Generation), Imagen (Image Generation)

---

## 📝 관리 및 기여

이 저장소는 전체 프로젝트를 통합 관리하기 위해 구성되었습니다. 

- **브랜치 통합 완료**: 웹 개발(`front-end`) 및 앱 개발(`react-native(app2)`) 브랜치의 모든 기록이 `main`으로 병합되었습니다.
- **모노레포 최적화**: 프론트엔드에서 `/api` 상대 경로를 사용하여 개발/배포 환경 구분 없이 백엔드와 통신이 가능합니다.
