import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { DATA_BASE_URL } from "../config"
import type { Entry, IndexResponse } from "../types"

export default function ImagePage() {
  const { id } = useParams()

  const [entry, setEntry] = useState<Entry | null>(null)

  useEffect(() => {
    fetch(`${DATA_BASE_URL}/index.json`)
      .then(r => r.json())
      .then((data: IndexResponse) => {
        const found = data.entries.find(e => e.id === id)
        setEntry(found ?? null)
      })
  }, [id])

  if (!entry) return <div>Loading...</div>

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{entry.character}</h1>

      <img
        src={DATA_BASE_URL + entry.image}
        style={{ maxWidth: "90%", height: "auto" }}
      />

      <p>{entry.anime}</p>
      <p>{entry.team}</p>
      <p>{entry.sport}</p>
      <p>{entry.year}</p>
    </div>
  )
}
