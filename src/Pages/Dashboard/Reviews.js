import React from 'react';
import useReview from '../../Hooks/useReview';

const Reviews = () => {
  const [reviews] = useReview();
    return (
      <div>
        <h1 className="text-gray-800 text-center m-2 text-3xl font-bold">
          All Reviews Of Our Clients!
        </h1>
        <div className="grid md:grid-cols-2 grid-cols-1 mb-4 gap-4 mx-auto my-auto">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="max-w-md text-gray-800 px-6 py-4 mx-auto mt-12 bg-[#808000] rounded-lg shadow-2xl"
            >
              <div className="flex justify-center -mt-16 md:justify-end">
                <img
                  className="object-cover w-20 h-20 border-2 border-gray-800 rounded-full"
                  alt="Testimonial avatar"
                  src={review.img}
                />
              </div>
              <h2 className="mt-2 text-xl font-medium md:mt-0 md:text-3xl">
                {review.name}
              </h2>
              <p className="mt-2">{review.review}</p>
              <div className="flex justify-end mt-4">
                <span className="text-xl font-medium">{review.country}</span>
              </div>
              <div className="flex justify-end mt-4">
                <span className="text-xl font-medium">{review.userEmail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Reviews;