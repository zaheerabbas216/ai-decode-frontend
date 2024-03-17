import React from "react";
import "./styles.scss";

const BreadcrumbComponent = ({ name }) => {
  return (
    <>
      <div className="bg-light p-3">
        <a href="/" className="links mx-2">
          Home
        </a>
        <span className="divider">/</span>
        <a className="mb-0 links mx-2">{name}</a>
      </div>
    </>
  );
};

export default BreadcrumbComponent;
