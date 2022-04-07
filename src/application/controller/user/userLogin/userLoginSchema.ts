import BaseSchema from '../../baseSchema'

class UserLoginSchema extends BaseSchema {
  constructor (body: any) {
    super()
    this.body = body

    const fields = ['email', 'password']
    for (const field of fields) {
      if (this.body && !this.body[field]) {
        this.errors.push(`${field} field is empty`)
      }
    }
  }
}

export default UserLoginSchema
