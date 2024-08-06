install:
	npm ci

deploy:
	npm ci && cd ./frontend && npm run build:deploy

startDev:
	make start-backend & make start-frontend

build:
	npm run build

start-frontend:
	make -C frontend start

start-backend:
	npx start-server

lint:
	npx eslint --ext js,jsx --no-eslintrc --config .eslintrc.yml .	

start:
	npm start