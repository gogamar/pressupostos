export const sortByAmount = (a, b, direction) => (direction === "asc" ? a.total - b.total : b.total - a.total);

export const sortByDate = (a, b, direction) => (direction === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date));

export const sortByName = (a, b, direction) => (direction === "asc" ? a.clientName.localeCompare(b.clientName) : b.clientName.localeCompare(a.clientName));

export const getSortedQuotes = (quotes, sortBy, sortDirection) => {
  switch (sortBy) {
    case "date":
      return [...quotes].sort((a, b) => sortByDate(a, b, sortDirection));
    case "amount":
      return [...quotes].sort((a, b) => sortByAmount(a, b, sortDirection));
    case "name":
      return [...quotes].sort((a, b) => sortByName(a, b, sortDirection));
    default:
      return quotes;
  }
};
