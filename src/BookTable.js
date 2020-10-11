import React , { useState } from "react";

import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

const BookTable = props => {
  const [query, setQuery] = useState("");



  const bookRows = props.books.map(book => (
    <BookRow key={book.title} book={book} />
  ));
  return (
    <div>
       <h3>Books</h3>
      
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
