import React from "react";
import Tour from "../tourComponent/TourComponent";

export default function Tours({ tours, removeTour }) {
  return (
    <>
      <section>
        <div className="title">
          <h2>ours tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((item) => {
            return (
              <>
                <Tour key={item.id} {...item} removeTour={removeTour}></Tour>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
