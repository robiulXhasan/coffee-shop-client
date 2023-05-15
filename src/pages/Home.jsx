import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCoffees from "../components/AllCoffees";

const Home = () => {
  const coffeeData = useLoaderData();

  return (
    <div>
      <AllCoffees coffeeData={coffeeData}></AllCoffees>
    </div>
  );
};

export default Home;
