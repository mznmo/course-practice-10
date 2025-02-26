import { useEffect, useState } from "react";
export function useFetch(fetchFn, initialValue){

    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [data, setData] = useState(initialValue);

    useEffect(() => {
        async function fetchData() {
          setLoading(true);
          try {
            const places = await fetchFn();
            setData(places);
          } catch (error) {
            setError({
              message: error.message || "Failed to fetch data.",
            });
          }
          setLoading(false);
        }
        fetchData();
      }, [fetchFn]);

      return {
        loading,
        error,
        data,
        setData,
      }
}