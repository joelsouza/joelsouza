build:
	docker build -t myapp .

run:
	docker run -p 8080:8080 myapp
