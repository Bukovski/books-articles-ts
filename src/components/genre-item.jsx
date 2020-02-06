import React from "react";
import { Link } from "react-router-dom";


export const GenreItem = ({ genre }) => {
  const { display_name, list_name_encoded } = genre;
  
  return <Link
    to={ "/genre/" + list_name_encoded }
    className="list-group-item list-group-item-action"
  >
    <p className="mb-1">{ display_name }</p>
  </Link>
};
