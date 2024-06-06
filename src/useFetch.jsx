import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
