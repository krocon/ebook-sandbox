# ebook-sandbox
ebook sandbox

see https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

https://www.youtube.com/watch?v=ktvgr9VZ4dc


docker run -d krocon/ebook-sandbox

docker container logs  krocon/ebook-sandbox
https://github.com/marcel-dempers/docker-development-youtube-series/tree/master/nodejs
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/#run-the-image

docker build . -t krocon/ebook-sandbox-app

docker images

docker run -p 49160:5000 -d krocon/ebook-sandbox-app

see http://localhost:49160/

# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:49160

# Enter the container (GEHT NICHT)
$ docker exec -it <container id> /bin/bash
$ docker exec -it 1696e876866c /work
docker container logs 1696e876866c

curl -i localhost:49160

docker ps
docker stop 1696e876866c
docker rm  1696e876866c

##############

https://docs.docker.com/compose/gettingstarted/
https://stackoverflow.com/questions/65792821/how-to-use-node-js-on-container-that-has-a-workdir-app-in-its-image-to-access

________________
docker-compose build
docker-compose up

##############
Working with Environment Variables in Node.js
https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html