FROM node:8
MAINTAINER SkyLightQP <me@skylightqp.kr>

EXPOSE 80

WORKDIR /
COPY / /

RUN npm install && npm run build

VOLUME ["/assets/config"]

CMD ["npm", "run", "start"]