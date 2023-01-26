import React, { useState, useEffect } from "react";


const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  //To render the pages
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  //Function to calculate the page number
    const noOfPages = [];
  for (let i = 1; i <= Math.ceil(total / showPerPage); i++) {
    noOfPages.push(i);
  }

  //Function to handle previous and next button
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1 ) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation" style={{ cursor: "pointer" }}>
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link bg-success text-light"
              href="!#"
              onClick={() => onButtonClick("prev")}
            >
              Previous
            </a>
          </li>

          {noOfPages.map((number, index) => (
            <li
              key={number}
              className={`page-item ${index + 1 === counter ? "active" : null}`}
            >
              <a
                onClick={() => setCounter(index + 1)}
                className="page-link text-dark"
              >
                {number}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a
              className="page-link bg-success text-light"
              href="!#"
              onClick={() => onButtonClick("next")}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
