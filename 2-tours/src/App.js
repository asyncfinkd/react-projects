import React, { useState, useEffect } from "react";
import Loading from "./components/loading/Loading";
import Tours from "./components/tours/Tours";

const URL = "https://course-api.com/react-tours-project";

export default function App() {
  const [loadingComponent, setLoadingComponent] = useState(true);
  const [tours, setTours] = useState([]);

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

  return (
    <>
      <main>
        <Tours />
      </main>
    </>
  );
}
