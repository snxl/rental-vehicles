interface HashClient {
  encrypt: (password: string) => Promise<string>
  verify: (password: string, encrypt: string) => Promise<boolean>
}

export default HashClient
