# ms_rental_vehicles

<hr>

## Getting started

### Prerequisites

- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install)

## Clone the project

```
  git clone https://github.com/snxl/rental-vehicles && \
  cd rental_vehicles
```

## Build process

#### use make scripts for more agility

```
  make build - docker-compose -f docker-compose.dev.yml up --build
  make up - docker-compose -f docker-compose.dev.yml up --force-recreate -d
  make down - docker-compose -f docker-compose.dev.yml down
  make log - docker-compose -f docker-compose.dev.yml logs -f app
  make test-unit - docker-compose -f docker-compose.dev.yml run app npm run test:unit
  make test-integration - docker-compose -f docker-compose.dev.yml run app npm run test:integration
  make test-watch - docker-compose -f docker-compose.dev.yml run app npm run test:watch
```

<br>

### API Documentation:
```
{{host}}/api-docs
```
