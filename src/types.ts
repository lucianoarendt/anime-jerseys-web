export interface Entry {
  id: string
  character: string
  anime: string
  team: string
  sport: string
  year: number
  image: string
  tags: string[]
}

export interface IndexResponse {
  generatedAt: string
  total: number
  entries: Entry[]
}
