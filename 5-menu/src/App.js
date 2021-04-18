import React, { useState } from "react";
import Categories from "./categories/Categories";
import Data from "./data/Data";
import Menu from "./menu/Menu";

export default function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const [categories, setCategories] = useState([]);
  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories />
          <Menu />
        </section>
      </main>
    </>
  );
}
