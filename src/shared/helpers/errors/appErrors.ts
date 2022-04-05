class AppError extends Error {
  public readonly statusCode: number

  constructor (message: string, statusCode: number) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}

export default AppError
