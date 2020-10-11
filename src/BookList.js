import React, { useState } from "react";
import { useParams } from "react-router";

// Components
//import BookCard from "./BookCard";
import BookRow from "./BookRow";
import SearchBar from "./SearchBar";

const BookList = props => {
  const [query, setQuery] = useState("");
  const{colorID}=useParams();

  const filteredBooks = props.books.filter(book =>
    book.title
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  if (colorID)
     filteredBooks=filteredBooks.filter((book)=> book.color==colorID);
  //const filteredBooks = props.books.filter(book =>
  //  book.color
   //   .toLowerCase()
   //   .includes(color)
  //);

  const bookRows = filteredBooks.map(book => (
  //<div>
   //  { colorID?(<BookRow key={book.color} book={book} />):( <BookRow key={book.title} book={book} />)}</div>
      
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

export default BookList;
