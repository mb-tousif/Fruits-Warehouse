import React from 'react';

const ReviewCard = () => {
    return (
      <div
        className="max-w-md text-primary px-6 py-4 mx-auto mt-12 bg-secondary rounded-lg shadow-2xl dark:bg-gray-900"
        data-aos="zoom-in"
      >
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={}
          />
        </div>
        <h2 className="mt-2 text-xl font-medium md:mt-0 md:text-3xl">
          Location: {}
        </h2>
        <p className="mt-2">{}</p>
        <div className="flex justify-end mt-4">
          <span className="text-xl font-medium text-neutral">{}</span>
        </div>
      </div>
    );
};

export default ReviewCard;