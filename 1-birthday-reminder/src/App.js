import React, { useState } from "react";
import List from "./list/List";
import Data from "./data/Data";

export default function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <main>
        <section class="container">
          <h3>0 birthdays today</h3>
          <List />
          <button onClick={() => console.log("clear all")}>Clear All</button>
        </section>
      </main>
    </>
  );
}
