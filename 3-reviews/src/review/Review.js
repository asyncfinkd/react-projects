import React, { useState } from "react";
import people from "../data/Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn">
            <FaChevronLeft />
          </button>
          <button className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn">Surprise me</button>
      </article>
    </>
  );
}
