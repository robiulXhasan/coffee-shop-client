import React, { useState } from "react";
import Coffee from "./Coffee";

const AllCoffees = ({ coffeeData }) => {
  const [coffees, setCoffees] = useState(coffeeData);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = coffees.filter((coffee) => coffee._id != id);
          setCoffees(remaining);
        }
      });
  };
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 gap-10">
      {coffees.map((coffee) => (
        <Coffee key={coffee._id} coffee={coffee} handleDelete={handleDelete}></Coffee>
      ))}
    </div>
  );
};

export default AllCoffees;
