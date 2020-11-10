import React from "react";

const Pagination = () => {
  return (
    <ul className="pagination justify-content-center mb-4">
      <li className="page-item" id="older" style={{ cursor: "pointer" }}>
        <button id="previous" className="page-link">
          &larr; Older
        </button>
      </li>
      <li className="page-item" id="newer">
        <button id="next" className="page-link" style={{ cursor: "pointer" }}>
          Newer &rarr;
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
