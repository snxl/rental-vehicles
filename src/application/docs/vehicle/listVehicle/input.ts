export default {
  parameters: [
    {
      in: 'query',
      name: 'page',
      schema: {
        type: 'integer'
      },
      required: false,
      description: 'page number to search'
    },
    {
      in: 'query',
      name: 'limit',
      schema: {
        type: 'integer'
      },
      required: false,
      description: 'data limit to return'
    }
  ]
}
