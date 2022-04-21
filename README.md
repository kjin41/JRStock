## 목차

### 1. [Introduction](#introduction)

### 2. [Main Function](#main-function)

### 3. [Development Environment](#%EF%B8%8Fdevelopment-environment)

### 4. [Our Team](#our-team)

<!-- ### [👀Project Details (go to wiki)](https://lab.ssafy.com/s06-s-project/S06P21S001/-/wikis/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B8%B0%ED%9A%8D) -->

---

<br>

![Untitled](README_assets/Untitled.png)

## 💸**Introduction**

**내 집 마련을 위해 주식은 선택이 아닌 필수!!<br>
남들 다하니까 시작했다가, 손해만 보고 그만 두신 적 없으신가요?!<br>
1000만 개미들의 염원이 담겨 탄생한 바로 그 서비스!! <br>
굶주린 주식 어린이를 위한 플랫폼 JRStock 과 함께 주식 투자 전문가로 성장해보세요!**

🔹**JRStock**은 국내 주식 기반 백테스트 플랫폼입니다.<br> **JRStock**은 주린이를 대상으로 서비스를 구성하여 누구나 쉽게 매매 전략을 구성하고, 테스트해볼 수 있으며, 결과를 분석할 수 있습니다. <br>또한 종목 토론방을 통해 지식을 공유하거나, 랭킹을 통해 다른 사람과 전략을 경쟁, 공유하며 성공적인 주식투자로 이끌 수 있습니다.

<br>

## 💻 **Project Period - [2021.02.21 ~ 2021.04.08]**

<br>

## 💡**Motivation**

최근 들어 주식에 대한 관심이 급증했으며 작년 동안 유입된 신규 투자자만 400만명에 다다릅니다.<br>그리고 이들은 주식에 대한 지식과 경험이 부족했고, 대부분 투자를 실패했습니다.

이는 안정적인 주식 투자를 위한 러닝 커브는 높고, 이를 학습할 플랫폼은 부족하기 때문입니다.

그래서 저희는 주식에 입문하며, 주식에 대해 잘 모르는 소액 투자자들 일명 개미, 주린이들이 <br>안전하고 효과적으로 주식 투자를 공부할 수 있도록 매매 전략을 학습하고, 직접 구성한 전략을 테스트할 수 있는 서비스를 개발했습니다.

## 💫**Service Architecture**

![Untitled](README_assets/Untitled%201.png)

## 📜**Functional Specification**

[JRStock 기능명세서.pdf](README_assets/JRStock_%EA%B8%B0%EB%8A%A5%EB%AA%85%EC%84%B8%EC%84%9C.pdf)

## 🖼️**Figma Wireframe**

![화면설계서_초안2.png](README_assets/%ED%99%94%EB%A9%B4%EC%84%A4%EA%B3%84%EC%84%9C_%EC%B4%88%EC%95%882.png)

## 🔗**ERD**

![ERD.png](README_assets/JRStock_ERD.png)

## ✨**Sequence Diagram**

### 백테스트 시퀀스 다이어그램

![backtest_sequence_diagram.PNG](README_assets/backtest_sequence_diagram.PNG)

## 💡**Main Function**

### 회원 관리

- 이메일 인증을 통한 회원 활성화
- 구글 소셜 로그인
- 회원 정보 및 프로필 이미지 수정

### 주식 데이터

- 주식 데이터 라인차트 및 캔들차트 제공
- 주식 실시간 데이터 제공
- 백테스트를 위한 자료 누적
- 일일 거래 데이터 자동 수집 스케쥴링

### 백테스트

- 종목 단위 백테스트 실행
- 다양한 백테스트 전략 및 변수 커스터마이징 제공
- 상세 거래 내역, 자산 운용 차트 등 결과 제공

### 종목 필터링

- 주식 종목 검색
- 종목 지표별 필터링 기능

### 종가 예측 서비스

- 주요 종목 머신러닝&딥러닝 기반 오늘의 종가 예측 데이터 제공

### 게시판

- 종목별 토론 게시판 제공
- 공지사항
- 종목 시황 정보 제공

### 랭킹

- 일간, 주간, 월간 수익율 기준 전체 순위 정보 제공
- 이름 검색을 통해 원하는 사용자 랭킹 정보를 제공

<br>

## ⚙️**Development Environment**

### Backend

- Django 3.0.1
- gunicorn 20.1.0
- mysqlclient 2.1.0
- celery 5.2.3
- redis 4.1.4

### Frontend

- react 17.0.2
- react-router-dom 6.2.2
- react-google-login 5.2.2
- tailwindcss 3.0.23
- lightweight-charts 3.8.0
- etc
  - axios 0.26.0
  - chart.js 3.7.1
  - react-chartjs-2 4.0.1
  - react-awesome-reveal 3.8.1
  - react-datepicker 4.7.0
  - react-toastify 8.2.0
  - react-tooltip 4.2.21
  - headlessui/react 1.5.0
  - heroicons/react 1.0.5

### Database/Machine Learning

- MySql 8.0.26
- Kiwoom open API+
- pandas 1.4.1
- pandas-datareader 0.10.0
- tensorflow 2.8.0
- Google Colaboratory

### Android

- Android Studio Bumblebee 2021.1.1 Patch 2
- Firebase Cloud Messaging (Firebase-Bom:29.2.1)

### 배포

- AWS
- Docker
- NGINX
- Jenkins (CI/CD)
- Git

### 기타

- Google Docs
- Google Analytics
- Google Cloud Platform(OAuth)

<br>

## 🔨**Collaboration Tools**

- Gitlab
- Jira
- Notion
- Mattermost
- Discord
- Slack
- Figma
- ERDCloud

<br>

## 👨‍💻**Our Team**

![Untitled](README_assets/Untitled%203.png)
