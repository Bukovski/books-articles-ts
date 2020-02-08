import * as React from "react";
import { Link } from "react-router-dom";


interface IGenreItem {
  display_name : string
  list_name_encoded : string
}


export const GenreItem = (props: { genre: IGenreItem }) => {
  const { display_name, list_name_encoded } = props.genre;

  return <Link
    to={ "/genre/" + list_name_encoded }
    className="list-group-item list-group-item-action"
  >
    <p className="mb-1">{ display_name }</p>
  </Link>
};
