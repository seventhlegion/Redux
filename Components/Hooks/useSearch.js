import { useEffect, useState } from "react";
import Foods from "../../public/Data/Foods";

export const useSearch = (query) => {
  const [searchFood, setSearchFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setSearchFood([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    Foods.map((food) => {
      query === food.payload.name.toLocaleLowerCase()
        ? setSearchFood((prevFood) => {
            return [...new Set([...prevFood, food.payload])];
          })
        : setError(true);
    });
    Foods.map((food) => {
      query === food.type.toLocaleLowerCase()
        ? setSearchFood((prevFood) => {
            return [...new Set([...prevFood, food.payload])];
          })
        : setError(true);
    });
  }, [query]);

  return { searchFood, loading, error };
};
