import React from "react";
import List from "./list/List";

export default function App() {
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
