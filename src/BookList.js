import React, { useState } from "react";
import { useParams } from "react-router";

// Components
//import BookCard from "./BookCard";
import BookRow from "./BookRow";
import BookTable from "./BookTable"
import SearchBar from "./SearchBar";

const BookList = props => {
  const [query, setQuery] = useState("");
  const{colorID}=useParams();

  let filteredBooks = props.books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );
  
 
  if (colorID)
  filteredBooks=filteredBooks.filter((book)=> book.color === colorID);
 
  return (
    <div>
    <h3>Books</h3>
    <SearchBar handleFilter={setQuery} />
    <BookTable books={filteredBooks}/></div>
 
  );
};

export default BookList;
