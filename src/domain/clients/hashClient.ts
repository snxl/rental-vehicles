interface HashClient {
  encrypt: (input: string) => Promise<string>
}

export default HashClient
