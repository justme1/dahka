# dahka

Please run the following to run this:

docker-compose build
docker-compose  up -d

See it works by running

docker logs node_web_1


Thanks to node-inspector, we can even debu our code:

Open chrome and enter the following URL:

http://192.168.99.100:8080/?port=5858

happy debugging :-)
