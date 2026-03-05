import type { Entry } from "../types"

interface Props {
  entries: Entry[]
  baseUrl: string
}

export default function Gallery({ entries, baseUrl }: Props) {
  return (
    <div className="gallery">
      {entries.map((entry) => (
        <div className="card" key={entry.id}>
          <img
            src={`${baseUrl}/${entry.image}`}
            alt={entry.character}
            loading="lazy"
          />
          <h3>{entry.character}</h3>
          <p>{entry.anime}</p>
          <p>
            {entry.team}
          </p>
        </div>
      ))}
    </div>
  )
}
