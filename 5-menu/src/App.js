import React, { useState } from "react";
import Categories from "./categories/Categories";
import Data from "./data/Data";
import Menu from "./menu/Menu";

export default function App() {
  const [menuItems, setMenuItems] = useState(Data);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      const menuAllReturnData = setMenuItems(Data);
      return menuAllReturnData;
    }
    const newItems = Data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}
