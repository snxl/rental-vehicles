interface HashClient {
  encrypt: (password: string) => Promise<string>
  verify: (password: string) => Promise<boolean>
}

export default HashClient
