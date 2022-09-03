import React from "react";
import { toast } from "react-toastify";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useForm } from "react-hook-form";
import DataLoader from "../../SharedFile/DataLoader";

const Signup = () => {
   const { register, handleSubmit, formState: { errors }} = useForm();
   const [updateProfile, updating] = useUpdateProfile(auth);
   const navigate = useNavigate();
   const [createUserWithEmailAndPassword, loading] = useCreateUserWithEmailAndPassword(auth);

   if (loading || updating) {
     return <DataLoader/>
   }

   const onSubmit = async (data) => {
     await createUserWithEmailAndPassword(data.email, data.password);
     await updateProfile({ displayName: data.name });
     navigate("/fruits")
     toast.success("User Added!!");
   };

  return (
    <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#026c2b] max-w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Enter your Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-gray-50 text-center">Name is required.</p>
          )}
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Enter your Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email", {
              pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: "Provide a valid Email",
              },
              required: {
                value: true,
                message: "Email is required",
              },
            })}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            placeholder="Email"
          />
          {errors.email?.type === "pattern" && (
            <p className="text-gray-50 text-center">{errors.email.message}</p>
          )}
          {errors.email?.type === "required" && (
            <p className="text-gray-50 text-center">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              minLength: {
                value: 6,
                message: "Password min-length six characters",
              },
              required: {
                value: true,
                message: "Password is required",
              },
            })}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-[#e8d779] bg-clip-padding rounded-xl transition ease-in-out m-0 focus:outline-none"
            placeholder="Password"
          />
          {errors.password?.type === "minLength" && (
            <p className="text-gray-50 text-center">
              <small>{errors.password.message}</small>
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="text-gray-50 text-center">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-xl leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
