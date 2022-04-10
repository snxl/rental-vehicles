import BaseSchema from '../../baseSchema'

class VehicleReleaseSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    const fields = ['userId']
    for (const field of fields) {
      if (this.body && !this.body[field]) {
        this.errors.push(`${field} field is empty`)
      }
    }
  }
}

export default VehicleReleaseSchema
