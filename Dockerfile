# 새로운 이미지 생성
FROM node:20

# Dockerfile 생성 관리하는 관리자 지정
MAINTAINER daalzzwi <daalzzwi@gmail.com>

# NewsApiServer 폴더 생성
RUN mkdir "api_server"

# api_server 폴더를 WorkDir로 지정
WORKDIR /usr/src/api_server

# Dockerfile가 있는 경로의 모든파일을 /api_server에 복사
ADD . /api_server

# npm install 실행
RUN npm install

# 가상머신에 열 포트 지정
EXPOSE 8081 8080

# 컨테이너에서 실행 할 명령어 지정
CMD ["npm","start"]
