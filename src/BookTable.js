import React , { useState } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

const BookTable = props => {
  const [query, setQuery] = useState("");
  const filteredBooks = props.books.filter(book =>
    book.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  const bookRows = filteredBooks.map(book => (
    <BookRow key={book.title} book={book} />
  ));
  return (
    <div>
       <h3>Books</h3>
       <SearchBar handleFilter={setQuery} />
    <table className="mt-3 table">
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Authors</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>{bookRows}</tbody>
    </table></div>
  );
};

export default BookTable;
