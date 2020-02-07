import React, { useContext } from "react";
import { BooksContext } from "../../context/books/books-context";
import Select from "../../components/select";
import { arrRange } from "../../hoc-helpers";
import "./home.sass";


const booksRange = arrRange(3, 10, "books");
const recordsRange = arrRange(3, 10, "records");

export const Home = () => {
  const {
    booksRecords, genresRecords,
    setBooksRecords, setGenresRecords
  } = useContext(BooksContext);
  
  
  return <div className="home">
    <h2 className="home__title">Home</h2>
    
    <div className="col-md-6 home__wrap">
      <h3>Change the number of entries per pages</h3>
      
      <div className="row">
        <div className="col-md-6">
          <p>Books records:</p>
          <Select
            valueSelect={ booksRecords }
            handleSelect={ setBooksRecords }
            optionData={ booksRange }
          />
        </div>
        <div className="col-md-6">
          <p>Genre records:</p>
          <Select
            valueSelect={ genresRecords }
            handleSelect={ setGenresRecords }
            optionData={ recordsRange }
          />
        </div>
      </div>
    </div>
  </div>
};

