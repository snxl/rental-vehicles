import BaseSchema from '../../baseSchema'

class CreateUserSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    const fields = ['name', 'email', 'password']
    for (const field of fields) {
      if (this.body && !this.body[field]) {
        this.errors.push(`${field} field is empty`)
      }
    }
  }
}

export default CreateUserSchema
