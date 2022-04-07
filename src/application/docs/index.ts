import user from './user'

export default {
  openapi: '3.0.0',
  info: {
    title: 'ms_vehicle_booking',
    description: 'Documentação de rotas do microserviço',
    version: '1.0.0'
  },
  paths: {
    ...user
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT'
      }
    }
  }
}
