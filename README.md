# 📋 문서
>Git Issue & PR 문서들이 정리돼 있어요.

[과제 노션 문서](https://ahnjonyun.notion.site/RGT_-_-1571eacaea388016987efaea6ce7dc05?pvs=74)

# 📦배포 주소
[프론트 배포주소](http://rgt-subject.kro.kr/)

[백엔드 API 명세서](https://back.rgt-subject.kro.kr/swagger-ui/index.html#/)

# ⚡로컬 프로젝트 실행방법 (백엔드+프론트)

## 🖼️프론트엔드
> node js 설치상태에서 하는것을 권장해요
```
--리눅스
git clone https://github.com/dks044/RGT_Frontend.git
cd RGT_Frontend
npm install
touch .env
echo "NEXT_PUBLIC_API_URL=http://localhost:8080" >> .env
npm run dev

--윈도우
git clone https://github.com/dks044/RGT_Frontend.git
cd RGT_Frontend
npm install
echo NEXT_PUBLIC_API_URL=http://localhost:8080 > .env
npm run dev
```

## 🛠️백엔드
> 먼저 jdk 설치를 해주세요.

[백엔드 빌드파일 링크](https://drive.google.com/file/d/1xwvo2u31ooUo8pzxnnmF68C-6H130_5h/view?usp=sharing)
> 해당 파일을 다운 로드 해주세요
```
--윈도우 리눅스 동일합니다.
CD [백엔드 빌드파일을 다운로드 한 경로로 이동]
java -jar RGT-0.0.1-SNAPSHOT.jar
```
