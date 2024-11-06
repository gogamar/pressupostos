export const sortByAmount = (a, b) => a.total - b.total
export const sortByDate = (a, b) => new Date(a.date) - new Date(b.date)
export const sortByName = (a, b) => a.clientName.localeCompare(b.clientName)

export const getSortedQuotes = (quotes, sortBy) => {
  switch (sortBy) {
    case 'date':
      return [...quotes].sort(sortByDate)
    case 'amount':
      return [...quotes].sort(sortByAmount)
    case 'name':
      return [...quotes].sort(sortByName)
    default:
      return quotes
  }
}
