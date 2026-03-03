interface Props {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null

  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1

        return (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}
