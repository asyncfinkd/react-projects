import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function SingleQuestion({ question, answer }) {
  const [showed, setShowed] = useState(false);
  return (
    <>
      <article className="question">
        <header>
          <h4>{question}</h4>
          <button onClick={() => setShowed(!showed)} className="btn">
            {showed ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showed && <p>{answer}</p>}
      </article>
    </>
  );
}
