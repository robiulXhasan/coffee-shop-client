import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const coffeeDetails = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffeeDetails;

  return (
    <div className="w-10/12 mx-auto ">
      <Link className="text-lg italic   text-[#331A15] font-[Rancho] font-medium" to="/">
        ← <span className="text-semibold">Back to Home</span>
      </Link>
      <div className="md:flex items-center mx-auto bg-[#F5F4F1] shadow-xl p-10 border ">
        <div className="md:w-1/2">
          <img className="w-[351px]" src={photo} alt="" />
        </div>
        <div className="space-y-1 ">
          <h3 className="text-2xl italic  text-[#331A15] font-[Rancho] font-bold">Niceties</h3>
          <p className="">
            <span className="font-medium">Name: </span>{" "}
            <span className="text-gray-500">{name}</span>
          </p>

          <p className="">
            <span className="font-medium">Chef: </span>{" "}
            <span className="text-gray-500">{chef}</span>
          </p>
          <p className="">
            <span className="font-medium">Supplier: </span>{" "}
            <span className="text-gray-500">{supplier}</span>
          </p>
          <p className="">
            <span className="font-medium">Taste: </span>{" "}
            <span className="text-gray-500">{taste}</span>
          </p>
          <p className="">
            <span className="font-medium">Category: </span>{" "}
            <span className="text-gray-500">{category}</span>
          </p>
          <p className="">
            <span className="font-medium">Details: </span>{" "}
            <span className="text-gray-500">{details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
