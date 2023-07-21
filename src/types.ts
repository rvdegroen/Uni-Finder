export type University = {
  alpha_two_code: string
  country: string
  domains: string[]
  name: string
  //   - don't work, so put it as a string
  //   in ts || is | (or)
  'state-province': string | null
  //   _ do work
  web_pages: string[]
}
