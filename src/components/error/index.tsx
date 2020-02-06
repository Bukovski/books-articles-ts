import React from "react";
import "./error.sass";


export const Error = () => (
  <div className="error-page">
    <div className="top">
      <h3>Sorry. Something went wrong</h3>
    </div>
    <div className="container">
      <div className="ghost-copy">
        <div className="one" />
        <div className="two" />
        <div className="three" />
        <div className="four" />
      </div>
      <div className="ghost">
        <div className="face">
          <div className="eye" />
          <div className="eye-right" />
          <div className="mouth" />
        </div>
      </div>
      <div className="shadow" />
    </div>
    <div className="bottom">
      <p>Boo, looks like a ghost stole this page!</p>
    </div>
  </div>
);
