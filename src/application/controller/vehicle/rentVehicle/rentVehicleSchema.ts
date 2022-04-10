import BaseSchema from '../../baseSchema'

class RentVehicleSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    const fields = ['userId', 'vehicleId']
    for (const field of fields) {
      if (this.body && !this.body[field]) {
        this.errors.push(`${field} field is empty`)
      }
    }
  }
}

export default RentVehicleSchema
