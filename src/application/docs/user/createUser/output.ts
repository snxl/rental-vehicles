export const output201 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'success' },
    data: {
      type: 'object',
      properties: {
        token: { type: 'string', default: 'uiahtc.uasb$#oij' }
      }
    }
  }
}

export const output400 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'email in use' }
  }
}
