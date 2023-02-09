import { useEffect, useState } from 'react';
import DataLoader from '../SharedFile/DataLoader';

const useToken = (user, googleUser) => {
    const [token, setToken] = useState("");
    const [loadingData, setLoadingData] = useState(false);
    useEffect(() => {
      const email = user?.user?.email || googleUser?.user?.email;
      const img = user?.user?.photoURL || googleUser?.user?.photoURL;
      const currentUser = { email: email, img: img };
      const url = `https://fruits-warehouse-server.vercel.app/api/user`;
      if (email) {
        setLoadingData(true)
        // console.log(currentUser);
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("data from token", data);
            const accessToken = data.accessToken;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken)
            setLoadingData(false)
          });
      }
    }, [user, googleUser, loadingData]);
    return [token]
    
};

export default useToken;