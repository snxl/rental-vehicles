build:
	docker-compose -f docker-compose.dev.yml up --build

up:
	docker-compose -f docker-compose.dev.yml up --force-recreate -d

down:
	docker-compose -f docker-compose.dev.yml down

log:
	docker-compose -f docker-compose.dev.yml logs -f app

test-unit:
	docker-compose -f docker-compose.dev.yml run app npm run test:unit

test-integration:
	docker-compose -f docker-compose.dev.yml run app npm run test:integration

test-watch:
	docker-compose -f docker-compose.dev.yml run app npm run test:watch

.PHONY: test-watch test-integration test-unit down up build log
