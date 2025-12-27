.PHONY: build run

IMAGE_NAME ?= joelsouza
IMAGE_TAG ?= latest

build:
	docker build -t $(IMAGE_NAME):$(IMAGE_TAG) .

run:
	docker run --rm -it \
		-p 8090:8090 \
		$(IMAGE_NAME):$(IMAGE_TAG)
