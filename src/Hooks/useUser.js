import { useEffect, useState } from "react";

const useUser = () => {
    const [userDetail, setUserDetail] = useState([]);

    useEffect(()=>{
        const url = "https://fruits-warehouse-server.vercel.app/api/users";
        fetch(url)
        .then(res => res.json())
        .then(data => setUserDetail(data))
    },[])

    return [userDetail]
};

export default useUser;