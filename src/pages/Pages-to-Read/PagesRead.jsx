import React from 'react'

const PagesRead = () => {
  const readList = [
    { bookName: "Book 1", totalPages: 200 },
    { bookName: "Book 2", totalPages: 300 },
    { bookName: "Book 3", totalPages: 250 }
  ];
  return (

    <div className="chart-container">
    {readList.map((book, index) => (
      <div key={index} className="bar" style={{ height: book.totalPages }}>
        <div className="book-label">
          <span>{book.bookName}</span>
          <span>{book.totalPages} Pages</span>
        </div>
      </div>
    ))}
    </div>
  )
}

export default PagesRead
