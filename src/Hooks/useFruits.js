import { useEffect, useState } from "react";

const useFruits = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    const url = "http://localhost:4000/fruits";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, [setFruits]);
  return [fruits, setFruits];
};

export default useFruits;
