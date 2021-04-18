import React, { useState, useEffect } from "react";
import Loading from "./components/loading/Loading";
import Tours from "./components/tours/Tours";

const URL = "https://course-api.com/react-tours-project";

export default function App() {
  const [loadingComponent, setLoadingComponent] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoadingComponent(true);
    try {
      const response = await fetch(URL);
      const tours = await response.json();
      setLoadingComponent(false);
      setTours(tours);
    } catch (err) {
      setLoadingComponent(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loadingComponent) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <>
        <main>
          <div className="title">
            <h2 style={{ textAlign: "center" }}>no tours left</h2>
            <button onClick={fetchTours} className="btn">
              Refresh
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}
