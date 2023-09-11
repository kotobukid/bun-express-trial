#!/bin/sh

docker run -d \
  --name apache-reverse-proxy \
  -p 80:80 \
  -v $(pwd)/apache.conf:/usr/local/apache2/conf/httpd.conf \
  httpd