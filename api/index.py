from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from google import genai
import os

load_dotenv()  # .env 읽기
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

# Gemini 클라이언트 초기화
client = genai.Client(api_key=GOOGLE_API_KEY)

# ──────────────────────────────────────────────
# 1) FastAPI 앱 인스턴스 생성
# ──────────────────────────────────────────────
# FastAPI() 를 호출하면 웹 애플리케이션 객체가 만들어집니다.
# 이 app 객체에 API 경로(라우트)를 등록하고, 서버를 실행합니다
app = FastAPI()

# ──────────────────────────────────────────────
# 2) CORS 설정
# ──────────────────────────────────────────────
# CORS(Cross-Origin Resource Sharing)란?
# → 브라우저의 보안 정책으로, 다른 출처(도메인, 포트)에서 오는 요청을 기본적으로 차단합니다.
# → React(포트 5173)에서 FastAPI(포트 8000)로 요청하면 "출처가 다르다"고 판단하여 차단됩니다.
# → 이 설정을 통해 특정 프론트엔드 주소에서 오는 요청을 허용합니다.


# 허용할 프론트엔드 주소 목록
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,           # 위에서 지정한 주소만 허용
    allow_credentials=False,
    allow_methods=["*"],             # 모든 HTTP 메서드(GET, POST 등) 허용
    allow_headers=["*"],             # 모든 헤더 허용
)

# ──────────────────────────────────────────────
# 3) API 엔드포인트(라우트) 정의
# ──────────────────────────────────────────────
# "/" 경로로 GET 요청이 들어오면 아래 함수를 실행
@app.get("/api/home")
def home():
    return {"message":"여기는 home입니다"}
    
@app.get("/api")
def about():
    return {"그런거 없음"}

@app.get("/api/animal")
def random_animal():
    import random
    style= ["디즈니", "지브리", "산수화", "픽셀 아트", "팝아트", "초현실주의", "사이버펑크", "스테인드글라스", "수묵담채화", "아르누보", "미니멀리즘", "글리치 아트", "그래피티", "Ukiyo-e", "바로크"]
    characteristic = ["관대한", "공손한", "다정한", "상냥한", "따뜻한", "사려 깊은", "활동적인", "활발한", "긍정적인", "자신감 있는", "용감한", "열정적인", "꾸준한", "근면한", "차분한", "안정적인", "꼼꼼한", "책임감 있는", "겸손한", "검소한", "넉살 좋은", "솔직한", "영리한", "게으른", "느긋한", "수동적인", "무기력한", "예민한", "까다로운", "이기적인", "쌀쌀맞은", "급한", "고집 센", "소심한", "쾌활한", "냉철한", "진지한", "담백한", "조용한"]
    job = ["의사", "간호사", "교사", "변호사", "회계사", "요리사", "제빵사", "기자", "피디", "작가", "화가", "가수", "배우", "모델", "운동선수", "경찰관", "소방관", "군인", "공무원", "은행원", "승무원", "조종사", "항해사", "농부", "어부", "건축가", "목수", "프로그래머", "데이터 분석가", "디자이너", "기획자", "마케터", "영업사원", "상담사", "통역사", "번역가", "사서", "약사", "수의사", "미용사", "정비사", "운전기사", "배달원", "청소행정원", "경비원", "사회복지사", "장례지도사", "조향사", "원예가", "사육사"]
    animal = ["강아지", "고양이", "토끼", "햄스터", "다람쥐", "여우", "늑대", "사자", "호랑이", "표범", "곰", "판다", "코끼리", "기린", "얼룩말", "하마", "사슴", "노루", "말", "젖소", "돼지", "양", "염소", "원숭이", "침팬지", "고릴라", "너구리", "수달", "해달", "펭귄", "물개", "고래", "돌고래", "상어", "거북이", "악어", "독수리", "매", "부엉이", "올빼미", "참새", "비둘기", "까치", "백조", "오리"]
    return random.choice(style) + " 화풍의 \n" + random.choice(characteristic) + " " + random.choice(job) + " " + random.choice(animal)

# ──────────────────────────────────────────────

@app.get("/api/gemini")
async def ask_gemini(prompt: str):
    try:
        # SDK를 사용하여 훨씬 간단하게 호출
        response = client.models.generate_content(
            model="gemini-3-flash-preview",
            contents=prompt + "(이)가 어떤 모습일지 나노바나나에게 그려달라고 하기 위한 프롬프트를 6문장으로 디테일하게 작성해줘. 응답형식은 사용자를 위한 추가설명 없이 오직 프롬프트만 6문장의 영어로 줄글로 작성해줘."
        )
        
        return {"result": response.text}
    except Exception as e:
        print(f"Error: {e}")
        return {"result": "응답을 가져오지 못했습니다.", "error": str(e)}

from google.genai import types
import base64

@app.get("/api/banana")
async def pic_banana(banana: str):
    try:
        print(banana)
        # Generate image using imagen-4.0-fast-generate-001
        result = client.models.generate_images(
            model='imagen-4.0-fast-generate-001',
            prompt=banana,
            config=types.GenerateImagesConfig(
                number_of_images=1,
                output_mime_type="image/jpeg",
            )
        )
        
        # Get the first generated image
        generated_image = result.generated_images[0]
        image_bytes = generated_image.image.image_bytes
        
        # Convert to base64 string
        base64_encoded = base64.b64encode(image_bytes).decode('utf-8')
        
        return {"result": base64_encoded}
    except Exception as e:
        print(f"Error: {e}")
        return {"result": "이미지 생성에 실패했습니다.", "error": str(e)}




