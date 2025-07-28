# GN Client - 가천대 공지 알리미

## 🎯 프로젝트 소개

무당이 캐릭터가 서비스를 소개하고, 사용자가 이메일 주소를 입력하면 가천대 공지사항을 AI가 요약해서 이메일로 받아볼 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **무당이 애니메이션**: 무당이가 말하는 모습으로 변경되는 이미지 애니메이션
- **이메일 구독**: 간단한 이메일 입력으로 공지사항 알림 구독
- **실시간 피드백**: 구독 성공/실패 메시지 표시

## 🛠 기술 스택

- **Frontend**: React 19.1.0
- **Build Tool**: Vite
- **Styling**: styled-components
- **Animation**: typewriter-effect
- **HTTP Client**: axios
- **Language**: JavaScript (JSX)

## 🏗 프로젝트 구조

```
gn-client/
├── public/
├── src/
│   ├── components/
│   │   └── EmailSubscribeForm.jsx    # 이메일 구독 폼 컴포넌트
│   ├── images/
│   │   ├── 무당이.png                # 기본 무당이 이미지
│   │   └── 무당이_speaking.png       # 말하는 무당이 이미지
│   ├── styles/
│   │   ├── AppStyles.js              # 메인 앱 스타일
│   │   ├── FormStyles.js             # 폼 관련 스타일
│   │   └── ModalStyles.js            # 모달 관련 스타일
│   ├── App.jsx                       # 메인 앱 컴포넌트
│   ├── main.jsx                      # 앱 진입점
│   └── index.css                     # 전역 스타일
├── index.html                        # HTML 템플릿
├── package.json                      # 프로젝트 설정 및 의존성
└── vite.config.js                    # Vite 설정
```

## 🔧 주요 컴포넌트

### App.jsx

- 메인 애플리케이션 컴포넌트
- 무당이 이미지 애니메이션 관리
- Typewriter 효과 구현
- 전체 레이아웃 구성

### EmailSubscribeForm.jsx

- 이메일 구독 폼 컴포넌트
- 백엔드 API와 통신
- 실시간 피드백 메시지 표시

## 🎨 스타일링

프로젝트는 `styled-components`를 사용하여 CSS-in-JS 방식으로 스타일링되어 있습니다:

- **AppStyles.js**: 메인 레이아웃 및 컴포넌트 스타일
- **FormStyles.js**: 폼 요소 스타일
- **ModalStyles.js**: 모달 관련 스타일

## 🔗 백엔드 연동

이 클라이언트는 `gn_server` 백엔드와 연동됩니다:

- **기능**: 이메일 구독 등록
- **응답**: 성공/실패 메시지

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.
또는 hoan.c9907@gmail.com 으로 연락 주세요!
