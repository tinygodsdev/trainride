docker:
	docker build -t trainride .
	docker run -p 8077:80 trainride

dokku:
	git remote add dokku dokku@68.183.13.198:trainride
	git push dokku main:master
