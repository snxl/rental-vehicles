interface JsonWebTokenClient {
  sign: (input: object) => Promise<string>
}

export default JsonWebTokenClient
