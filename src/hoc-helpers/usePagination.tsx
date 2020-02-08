import { useEffect, useState } from "react";
import { IBookItem } from "../components/book-list/book-item";


export type PageClick = (data: { selected: number }) => void


export const usePagination = <T extends object>(getData: T[], pageNotes: number = 5): [ T[], number, PageClick ] => {
  const [ notesOnPage, setNotesOnPage ] = useState<number>(5);
  const [ pageCount, setPageCount ] = useState<number>(5);
  const [ pieceOfData, setPieceOfData ] = useState<T[]>([]);
  
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
  
  const sliceData = (pageNumber: number = 0): void => {
    const start = pageNumber * notesOnPage;
    const end = start + notesOnPage;
    
    const notes: T[] = getData.slice(start, end);
    
    setPieceOfData(notes);
  };
  
  const handlePageClick = (data: { selected: number }): void => {
    const selected: number = data.selected; // page number click
    
    sliceData(selected)
  };
  
  return [ pieceOfData, pageCount, handlePageClick ]
};
