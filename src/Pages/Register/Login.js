import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GIcon from "../../assets/images/google-icon.svg"
import { auth } from "../../firebase.init";
import DataLoader from "../../SharedFile/DataLoader";

const Login = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  if (error || googleError) {
    return [toast.error("User not found, please Sign up"), navigate("/signup")];
  }

  if (loading || googleLoading ) {
    return <DataLoader/> ;
  }

  if (user || googleUser) {
    return [
      toast.success("Login Success!"),
      navigate(from, { replace: true }) || navigate("/inventory"),
    ];
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
    // console.log(data);
  };

  return (
    <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#13a94c] max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">
            Email address
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
            placeholder="Enter email"
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
            Password
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
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/resetPassword"
            className="text-gray-800 transition duration-200 ease-in-out"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-xl leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Login
        </button>
        <p className="text-gray-800 mt-6 text-center">
          New to here ?
          <Link
            to="/signup"
            className="text-white ml-4 hover:text-gray-800 transition duration-200 ease-in-out"
          >
            Register
          </Link>
        </p>
      </form>
      <div className="divider">Or</div>
      <button
        type="button"
        onClick={() => signInWithGoogle()}
        className="w-full flex justify-center text-gray-800 px-6 py-2.5 bg-lime-500 font-medium text-lg leading-tight rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
      >
        <img src={GIcon} className="h-6 w-10" alt="Google Icon" /> Google
      </button>
    </div>
  );
};

export default Login;
