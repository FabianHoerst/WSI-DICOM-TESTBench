FROM ohif/viewer:v4.12.26.18765 as ohif
#FROM ohif/app:v3.7.0 as ohif # currently not working with our setup but will be fixed

FROM nginx:1.21-alpine

COPY --from=ohif /usr/share/nginx/html/ /usr/share/nginx/html/
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY ohif.js /usr/share/nginx/html/app-config.js

