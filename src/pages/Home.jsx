import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllCoffees from "../components/AllCoffees";

const Home = () => {
  const coffeeData = useLoaderData();

  return (
    <div>
      <div className="text-center ">
        <Link className="btn btn-warning" to="/addCoffee">
          Add Coffee
        </Link>
      </div>
      <AllCoffees coffeeData={coffeeData}></AllCoffees>
    </div>
  );
};

export default Home;
