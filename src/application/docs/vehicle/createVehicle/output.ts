export const output201 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'success' },
    data: {
      type: 'object',
      properties: {
        id: { type: 'number', default: 1 },
        brand: { type: 'string', default: 'brand name' },
        name: { type: 'string', default: 'test name' },
        year: { type: 'string', default: '2020-01-01' }
      }
    }
  }
}

export const output400 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'Vehicle has a date greater than the current one' }
  }
}
