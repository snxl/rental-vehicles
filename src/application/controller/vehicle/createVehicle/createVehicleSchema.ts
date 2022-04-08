import BaseSchema from '../../baseSchema'

class CreateVehicleSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    const fields = ['name', 'brand', 'year']
    for (const field of fields) {
      if (this.body && !this.body[field]) {
        this.errors.push(`${field} field is empty`)
      }
    }
  }
}

export default CreateVehicleSchema
