import React, { useState } from "react";
import data from "./data/Data";
import SingleQuestion from "./singleQuestion/SingleQuestion";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers About Google</h3>
          <section className="info">
            {questions.map((item) => {
              return (
                <>
                  <SingleQuestion key={item.id} {...item} />
                </>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
