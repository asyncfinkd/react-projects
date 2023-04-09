import React, { useState } from "react";
import List from "./list/List";
import Data from "./data/Data";

export default function App() {
  const [birthdayPeople, setBirthdayPeople] = useState(Data);
  const [cleared, setCleared] = useState(false);
  const renderOnClick = () => {
    if (cleared != true) {
      setBirthdayPeople([]);
      setCleared(true);
    } else {
      setBirthdayPeople(Data);
      setCleared(false);
    }
  };
  return (
    <>
      <main>
        <section className="container">
          <h3>{birthdayPeople.length} birthdays today</h3>
          {birthdayPeople.length < 1 && (
            <p class="message">I don't have users to show you</p>
          )}
          <List birthdayData={birthdayPeople} />
          <button onClick={() => renderOnClick()}>
            {cleared != true ? "Clear All" : "Show me users"}
          </button>
        </section>
      </main>
    </>
  );
}
