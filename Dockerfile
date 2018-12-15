FROM node:10
MAINTAINER SkyLightQP <me@skylightqp.kr>

EXPOSE 80

WORKDIR /
COPY / /

RUN npm install

VOLUME ["/assets/config"]
VOLUME ["/assets/img/minecraft"]
VOLUME ["/assets/img/program"]

CMD ["bash", "run.sh"]