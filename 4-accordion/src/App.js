import React, { useState } from "react";
import data from "./data/data";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers About Login</h3>
        </div>
      </main>
    </>
  );
}
