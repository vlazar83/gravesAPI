# gravesAPI
backend API in nodejs for serving the graves app


docker build . -t graves-api
docker compose up


mongoexport:

mongoexport --uri="mongodb://root:root@0.0.0.0:27017/graves?authSource=admin"  --collection=graves --db=graves --out=events.json
