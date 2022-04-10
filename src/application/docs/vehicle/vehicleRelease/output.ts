export const output200 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'success' },
    data: {
      type: 'object',
      properties: {
        id: { type: 'number', default: 1 },
        userId: { type: 'number', default: 2 },
        vehicleId: { type: 'number', default: 3 }
      }
    }
  }
}

export const output404 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'No rental vehicle found' }
  }
}
