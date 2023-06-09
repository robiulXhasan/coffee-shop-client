import React from "react";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, handleDelete }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-xl p-3 border">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-between items-center ">
        <div className="space-y-3 ">
          <p className="text-lg">
            <span className="font-medium">Name: </span>{" "}
            <span className="text-gray-500">{name}</span>
          </p>

          <p className="text-lg">
            <span className="font-medium">Chef: </span>{" "}
            <span className="text-gray-500">{chef}</span>
          </p>
          <p className="text-lg">
            <span className="font-medium">Price: </span>{" "}
            <span className="text-gray-500">890 Taka</span>
          </p>
        </div>
        <div className="btn-group btn-group-vertical space-y-3">
          <button className="btn btn-active">
            <Link to={`/details/${_id}`}>View</Link>
          </button>
          <button className="btn btn-warning">
            <Link to={`/updateCoffee/${_id}`}>Edit</Link>
          </button>
          <button onClick={() => handleDelete(_id)} className="btn bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
