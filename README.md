# dahka

Please run the following to run this:

docker-compose build
docker-compose  up -d

See it works by running

docker logs node_web_1


Thanks to node-inspector, we can even debu our code:

Open chrome and enter the following URL:

http://192.168.99.100:8080/?port=5858


=======

We need to have access to http://s3 from the localhost. Currently the only way I found to fix this is to manually add the docker machine ip to /etc/hosts e.g.

192.168.99.100 s3


test
