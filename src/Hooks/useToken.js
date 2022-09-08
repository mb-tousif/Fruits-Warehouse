import { useEffect, useState } from 'react';

const useToken = (user, googleUser) => {
    const [token, setToken] = useState("");

    useEffect(() => {
      const email = user?.user?.email
      const currentUser = { email: email };
      const url = `https://fruits-warehouse-server.vercel.app/api/user/${email}`;
      console.log(currentUser);
      if (email) {
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
          });
      }
    }, [user]);
    return [token]
};

export default useToken;