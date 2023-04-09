import React from "react";

export default function List({ birthdayData }) {
  return (
    <>
      {birthdayData.map((item) => {
        const { id, username, age, image } = item;
        return (
            <div className="person" key={id}>
              <img src={image} alt={username} />
              <div>
                <h4>{username}</h4>
                <p>{age} years</p>
              </div>
            </div>
        );
      })}
    </>
  );
}
