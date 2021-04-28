import React from "react";
import AppQuery from "./AppQuery";
import { data } from "./data";

export default function App() {
  return (
    <>
      <div className="news-container">
        <h1 className="news-text">ახალი ამბები</h1>
      </div>
      <div className="info-container">
        {data.map((item) => {
          return <AppQuery key={item.id} {...item} />
        })}
      </div>
    </>
  );
}
