import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addedCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(addedCoffee);
    fetch("http://localhost:5000/addCoffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedCoffee),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-10/12 mx-auto mt-10  bg-[#F4F3F0] p-10">
      <h1 className="text-2xl font-bold text-center">Add New Coffee</h1>
      <div className="w-3/5 mx-auto text-center">
        <small>
          It is a long established fact that a reader will be distraceted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here.
        </small>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
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
            className="input input-bordered hover:input-warning  w-full mb-3"
          />
        </div>
        <input
          type="submit"
          className="bg-[#D2B48C] p-2 rounded-lg text-lg font-bold border-2 hover:bg-white hover:border-[#D2B48C] hover:text-[#D2B48C]  w-full mb-3"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
