# 🚀 Multi-Platform Integrated Project (Monorepo)

이 프로젝트는 React 기반의 웹(Frontend), Expo 기반의 모바일 앱(App), 그리고 FastAPI 기반의 서버(Backend)가 통합된 모노레포 프로젝트입니다. 

기존의 개별 리포지토리들을 각 파트별 히스토리를 유지하며 하나로 통합하였습니다.

---

## 📂 프로젝트 구조

```text
.
├── frontend/          # React + Vite (웹 프론트엔드)
├── app/               # Expo + React Native (모바일 앱)
├── server/            # FastAPI (백엔드 서버 & Gemini AI 연동)
└── .gitignore         # 통합 관리용 Git 설정
```

---

## 🛠 각 파트별 실행 방법

작업을 시작하기 전, 각 폴더로 이동하여 필요한 환경 설정을 진행해 주세요.

### 1. Web Frontend (`frontend/`)
Vite를 사용한 현대적인 React 웹 애플리케이션입니다.
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

### 3. Backend Server (`server/`)
Gemini API와 Imagen AI를 활용하는 FastAPI 서버입니다.
```bash
cd server
# 가상환경(venv) 사용 권장
pip install -r requirements.txt  # (필요시)
uvicorn main:app --reload
```
> **Note:** `server/.env` 파일에 `GOOGLE_API_KEY`가 설정되어 있어야 AI 기능을 사용할 수 있습니다.

---

## 💾 주요 기능 및 기술 스택

- **Frontend**: React, Vite, Tailwind CSS (Design System 적용)
- **Mobile**: React Native, Expo, Lottie (Animations)
- **Backend**: Python, FastAPI
- **AI Integration**: Google Gemini (Prompt Generation), Imagen (Image Generation)

---

## 📝 관리 및 기여

이 저장소는 전체 프로젝트를 통합 관리하기 위해 구성되었습니다. 각 파트의 변경 사항은 해당 폴더 내에서 작업 후 루트에서 통합하여 커밋합니다.

- **브랜치 통합 완료**: 웹 개발(`front-end`) 및 앱 개발(`react-native(app2)`) 브랜치의 모든 기록이 `master`로 병합되었습니다.
