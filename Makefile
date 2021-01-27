.PHONY: start stop
.DEFAULT_GOAL := start

start:
	yarn install
	docker-compose down
	mkcert localhost.change-me.com localhost 127.0.0.1 ::1
	open https://localhost.change-me.com
	docker-compose up --build

stop:
	docker-compose down --volumes
