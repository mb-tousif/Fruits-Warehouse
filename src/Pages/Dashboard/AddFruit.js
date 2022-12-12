import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";

const AddFruit = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=ae1d7490ab9268cd599c51b094ff6570`;
    fetch(imgbbUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const photoUrl = result.data.url;
          const fruitData = {
            name: data.name,
            price: data.price,
            description: data.comment,
            quantity: data.quantity,
            sold: data.sold,
            img: photoUrl,
            supplier: data.supplier,
            userEmail: data.email,
          };
          console.log(fruitData);
          const url = "https://fruits-warehouse-server.vercel.app/api/fruit";
          fetch(url, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(fruitData),
          })
            .then((res) => res.json())
            .then((fruit) => {
              console.log(fruit);
              if (fruit.success) {
                return toast.success("Fruit Added!!");
              }
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-gray-800 text-center m-2 text-3xl font-bold">
        Add Fruit Item!
      </h1>
      <div className="w-full p-8 md:w-3/5 mx-auto my-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Enter Fruit Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Fruit Name"
            />
            {errors.name && (
              <p className="text-gray-50 text-center">
                Fruit Name is required.
              </p>
            )}
          </div>
          <div className="form-group mb-6">
            <label className="form-label text-center inline-block mb-2 text-gray-700">
              Enter Fruit Price
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              name="price"
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Fruit Price"
            />
            {errors.price && (
              <p className="text-gray-50 text-center">
                Fruit Price is required.
              </p>
            )}
          </div>
          <div className="form-group mb-6">
            <label className="form-label text-center inline-block mb-2 text-gray-700">
              Fruits Description
            </label>
            <textarea
              name="comment"
              {...register("comment", { required: true })}
              className="textarea form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Fruit Stock/Quantity
            </label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              name="quantity"
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Fruit Quantity"
            />
            {errors.quantity && (
              <p className="text-gray-50 text-center">Quantity is required.</p>
            )}
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Fruit Sold
            </label>
            <input
              type="number"
              {...register("sold")}
              name="sold"
              value={3}
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>

          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Upload Fruit Photo
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              name="image"
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Upload Fruits Image"
            />
            {errors.image && (
              <p className="text-gray-50 text-center">Image is required.</p>
            )}
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Enter Supplier Name
            </label>
            <input
              type="text"
              {...register("supplier", { required: true })}
              name="supplier"
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
              placeholder="Supplier Name"
            />
            {errors.supplier && (
              <p className="text-gray-50 text-center">
                Supplier Name is required.
              </p>
            )}
          </div>
          <div className="form-group mb-6">
            <label className="form-label text-center inline-block mb-2 text-gray-700">
              User Email address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              {...register("email")}
              className="form-control block w-full px-3 py-1.5 text-center font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1c3a13] hover:bg-[#678f02] text-gray-50 px-6 py-2.5 font-medium text-xl leading-tight rounded shadow-md hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add Fruit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFruit;
