import { useEffect, useState } from "react"
import type { Entry, IndexResponse } from "./types"
import Gallery from "./components/Gallery"
import Pagination from "./components/Pagination"
import { DATA_BASE_URL } from "./config"

const ITEMS_PER_PAGE = 10

export default function App() {
  const [entries, setEntries] = useState<Entry[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${DATA_BASE_URL}/index.json`)
      const data: IndexResponse = await res.json()
      setEntries(data.entries)
    }

    fetchData()
  }, [])

  const totalPages = Math.ceil(entries.length / ITEMS_PER_PAGE)

  const start = (currentPage - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  const currentItems = entries.slice(start, end)

  return (
    <div className="container">
      <h1>Anime Girls Wearing Sports Jerseys</h1>

      <Gallery entries={currentItems} baseUrl={DATA_BASE_URL} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}
