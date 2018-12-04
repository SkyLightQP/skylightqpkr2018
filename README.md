# skylightqpkr [![works badge](https://cdn.rawgit.com/nikku/works-on-my-machine/v0.2.0/badge.svg)](https://github.com/nikku/works-on-my-machine)
> 하늘빛의 자기소개 및 포트폴리오 홈페이지

## Build
```
npm run build
```

## Self-Hosting
### Docker을(를) 사용하여 서비스하기
```
docker build --tag skylightqpkr .
docker run --name skylightqpkr -d -p 80:80 -v ./config:/aseets/config skylightqpkr
```
이후 config 폴더 안에 `alert.json`, `data.json`, `data_minecraft.json` 설정 파일을 만들어줘야합니다.

설정 파일 작성 방법은 [이곳](https://github.com/SkyLightQP/skylightqpkr/tree/master/assets/config)을 참고해주세요.

### Docker 없이 서비스하기
사전에 Build 과정이 필요합니다.
```
npm install
npm run start
```

## 라이센스
[GNU Affero General Public License v3.0](https://github.com/SkyLightQP/skylightqpkr/blob/master/LICENSE)

## 제작자
- 하늘빛QP (SkyLightQP)
