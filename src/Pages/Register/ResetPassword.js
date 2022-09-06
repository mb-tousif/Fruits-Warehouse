import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import DataLoader from '../../SharedFile/DataLoader';

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  if(sending){
    return <DataLoader/>
  }
  const onSubmit = async ( data) => {
    await sendPasswordResetEmail( data.email);
    toast.success("Password reset success, please check your email inbox/spam!")
    navigate("/login")
  }
    return (
      <div className="mt-4 mb-4 block p-6 mx-auto my-auto rounded-lg shadow-lg bg-[#03b748] max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button
            type="submit"
            className="w-full bg-[#1c3a13] hover:bg-[#678f02] text-gray-50 px-6 py-2.5 font-medium text-xl leading-tight rounded shadow-md hover:shadow-lg focus:bg-lime-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lime-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Reset Password
          </button>
        </form>
      </div>
    );
};

export default ResetPassword;