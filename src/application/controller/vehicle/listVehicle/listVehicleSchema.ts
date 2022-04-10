import BaseSchema from '../../baseSchema'

class ListVehicleSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    if (typeof body.limit !== 'number' || isNaN(body.limit)) {
      this.errors.push('limit must be a number')
    }

    if (typeof body.offset !== 'number' || isNaN(body.offset)) {
      this.errors.push('offset must be a number')
    }
  }
}

export default ListVehicleSchema
