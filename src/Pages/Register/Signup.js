import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateUserWithEmailAndPassword,useSendEmailVerification,useSignInWithGoogle,useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useForm } from "react-hook-form";
import DataLoader from "../../SharedFile/DataLoader";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import GIcon from "../../assets/images/google-icon.svg";
import useToken from "../../Hooks/useToken";

const Signup = () => {
 const { register, handleSubmit, formState: { errors }} = useForm();
 const [sendEmailVerification, sending] = useSendEmailVerification(auth);
 const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
 const [updateProfile, updating] = useUpdateProfile(auth);
 const [showPassword, setShowPassword] = useState(false);
 const navigate = useNavigate();
 const [createUserWithEmailAndPassword, user, loading] =
   useCreateUserWithEmailAndPassword(auth);

  const [token] = useToken(user || googleUser)
  
  if (loading || updating || sending || googleLoading) {
    return <DataLoader />
  }
  
  if(token){
    console.log("fhfj-gj",token);
  }
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    await sendEmailVerification();
    navigate("/inventory")
   toast.success("User Added and Please verify your email Address!!");
 };
  return (
    <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#13a94c] max-w-md">
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
        {showPassword ? (
          <div className="relative form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Password
            </label>
            <input
              type="text"
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
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            <MdOutlineVisibility
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[37px] mr-4 cursor-pointer"
              size={28}
            />
          </div>
        ) : (
          <div className="relative form-group mb-6">
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
                {errors.password.message}
              </p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-gray-50 text-center">
                {errors.password.message}
              </p>
            )}
            <MdOutlineVisibilityOff
              onClick={() => setShowPassword(!showPassword)}
              className="absolute text-slate-700 right-0 top-[37px] mr-4 cursor-pointer"
              size={28}
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-[#1c3a13] hover:bg-[#678f02] text-gray-50 px-6 py-2.5 font-medium text-xl leading-tight rounded shadow-md hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign up
        </button>
      </form>
      <div className="divider">Or</div>
      <button
        type="button"
        onClick={() => signInWithGoogle()}
        className="w-full flex justify-center bg-[#1c3a13] hover:bg-[#678f02] text-gray-50 px-6 py-2.5 font-medium text-lg leading-tight rounded shadow-md hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
      >
        <img src={GIcon} className="h-6 w-10" alt="Google Icon" /> Google
      </button>
    </div>
  );
};

export default Signup;
