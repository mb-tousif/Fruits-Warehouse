import { useEffect, useState } from 'react';

const useReview = () => {
    const [reviews, setReviews] = useState([]);
        useEffect(()=>{
            const url = "https://fruits-warehouse-server.vercel.app/api/reviews";
            fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
        },[])

    return [reviews]
};

export default useReview;