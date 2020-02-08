import React from 'react';


export interface IBookItem {
  title: string,
  author: string,
  description: string,
  contributor: string,
  amazon_product_url: string,
  book_image: string,
  primary_isbn13: string
}


const BookItem = (props: { data: IBookItem }) => {
  const { title, author, description, contributor, amazon_product_url, book_image } = props.data;


  return <div className="row book-list__row">
    <a
      href={ amazon_product_url }
      className="list-group-item list-group-item-action col-md-10"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{ title }</h5>
        <small>{ author }</small>
      </div>
      <p className="mb-1">{ description }</p>
      <small>{ contributor }</small>
    </a>
    <div className="col-md-2">
      <img src={ book_image } alt={ title } className="book-list__img"/>
    </div>
  </div>
};


export default BookItem
