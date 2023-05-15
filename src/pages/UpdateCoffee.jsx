import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.matchedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Successfully Updated! ",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        navigate("/");
      });
  };
  /*  */
  return (
    <div className="w-10/12 mx-auto mt-10  bg-[#F4F3F0] p-10">
      <h1 className="text-2xl font-bold text-center">Update Existing Coffee Details </h1>
      <div className="w-3/5 mx-auto text-center">
        <small>
          It is a long established fact that a reader will be distraceted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here.
        </small>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              defaultValue={name}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              defaultValue={chef}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              defaultValue={taste}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
        </div>
        <div className="md:flex gap-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              defaultValue={category}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              defaultValue={details}
              className="input input-bordered hover:input-warning  w-full mb-3"
            />
          </div>
        </div>
        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="label-text font-semibold text-lg">Photo</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            defaultValue={photo}
            className="input input-bordered hover:input-warning  w-full mb-3"
          />
        </div>
        <input
          type="submit"
          className="bg-[#D2B48C] p-2 rounded-lg text-lg font-bold border-2 hover:bg-white hover:border-[#D2B48C] hover:text-[#D2B48C]  w-full mb-3"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
