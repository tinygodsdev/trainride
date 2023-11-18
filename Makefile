APP_NAME = trainride
DOCKER_USERNAME = delael
DOCKER_IMAGE = $(DOCKER_USERNAME)/$(APP_NAME)
DOKKU_HOST = dokku@68.183.13.198
DOKKU_REMOTE_APP = $(DOKKU_HOST):$(APP_NAME)

docker:
	docker build -t $(APP_NAME) .
	docker run -p 8077:80 $(APP_NAME)

dokku:
	git remote add dokku $(DOKKU_REMOTE_APP) | true
	git push dokku main:master

login:
	docker login

hub: login
	docker build -t $(DOCKER_IMAGE) .
	docker tag $(DOCKER_IMAGE) $(DOCKER_IMAGE):latest
	docker push $(DOCKER_IMAGE):latest

# this is used if the server is unable to build the image
dokku_from_hub: hub
	cd setup && ansible-playbook -i hosts.ini dokku-deploy.yml
# dokku git:from-image trainride delael/trainride:latest
# dokku docker-options:add trainride deploy "--pull always"
