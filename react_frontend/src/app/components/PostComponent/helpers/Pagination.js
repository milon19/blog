import React from "react";

const Pagination = ({ handlePagination, disablePrevious, disableNext }) => {
  const getButtonClass = (value) => {
    return !value ? "page-item" : "page-item disabled";
  };

  return (
    <ul className="pagination justify-content-center mb-4">
      <li
        className={getButtonClass(disablePrevious)}
        style={{ cursor: "pointer" }}
      >
        <button
          onClick={() => handlePagination("previous")}
          id="previous"
          className="page-link"
        >
          &larr; Older
        </button>
      </li>
      <li className={getButtonClass(disableNext)}>
        <button
          id="next"
          onClick={() => handlePagination("next")}
          className="page-link"
          style={{ cursor: "pointer" }}
        >
          Newer &rarr;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
