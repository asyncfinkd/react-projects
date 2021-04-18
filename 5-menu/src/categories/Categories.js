import React from "react";

export default function Categories({ filterItems }) {
  return (
    <>
      <div className="btn-container">
        <button
          className="filter-btn"
          onClick={() => {
            filterItems("all");
          }}
        >
          All
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterItems("phone");
          }}
        >
          phone
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            filterItems("laptop");
          }}
        >
          laptop
        </button>
      </div>
    </>
  );
}
