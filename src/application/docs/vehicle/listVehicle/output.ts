
export const output200 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'success' },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'number', default: 1 },
          UserId: { type: 'number', default: 1 },
          VehicleId: { type: 'number', default: 1 }
        }
      }
    }
  }
}

export const output404 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'No Vehicles found' }
  }
}
