import React from "react";
import "./style.css";

function SearchResults(props) {
  return (

    <img alt="Dog" src={props.results[0]} className="img-fluid" />
       
  );
}

export default SearchResults;

