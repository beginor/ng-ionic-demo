FROM nginx:1.15-alpine

LABEL MAINTAINER="beginor"

COPY default.conf /etc/nginx/conf.d/default.conf
COPY dist/ng-ionic-demo /usr/share/nginx/html/ng-ionic-demo
