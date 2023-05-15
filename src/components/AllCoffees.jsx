import React, { useState } from "react";
import Coffee from "./Coffee";
import Swal from "sweetalert2";

const AllCoffees = ({ coffeeData }) => {
  const [coffees, setCoffees] = useState(coffeeData);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
        Swal.fire("Deleted!", "Coffee has been deleted.", "success");
      }
    });
  };
  return (
    <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-10 mt-20">
      {coffees.map((coffee) => (
        <Coffee key={coffee._id} coffee={coffee} handleDelete={handleDelete}></Coffee>
      ))}
    </div>
  );
};

export default AllCoffees;
