import { useEffect, useState } from "react";


export const usePagination = (getData, pageNotes = 5) => {
  const [ notesOnPage, setNotesOnPage ] = useState(5);
  const [ pageCount, setPageCount ] = useState(5);
  const [ pieceOfData, setPieceOfData ] = useState([]);
  
  useEffect(() => {
    countNotes();
    sliceData();
    setNotesOnPage(pageNotes)
    // eslint-disable-next-line
  }, [ getData, pageNotes ]);
  
  
  const countNotes = () => {
    const pageCount = Math.ceil(getData.length / notesOnPage);
    
    setPageCount(pageCount);
  };
  
  const sliceData = (pageNumber = 0) => {
    const start = pageNumber * notesOnPage;
    const end = start + notesOnPage;
    
    const notes = getData.slice(start, end);
    
    setPieceOfData(notes);
  };
  
  const handlePageClick = data => {
    const selected = data.selected; // page number click
    
    sliceData(selected)
  };
  
  return [ { pieceOfData, pageCount }, handlePageClick ]
};