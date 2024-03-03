import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface FetchedResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(dataType: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const dataAsStr = localStorage.getItem(dataType) || "[]";
    if (dataAsStr == "[]") {
      apiClient
        .get<FetchedResponse<T>>("/"+dataType, { signal: controller.signal })
        .then((res) => {
          const dataAsStr = JSON.stringify(res.data.results);
          localStorage.setItem(dataType, dataAsStr);
          setIsLoading(false);
          setData(JSON.parse(dataAsStr));
        })
        .catch((err) => {
          setIsLoading(false);
          return err instanceof CanceledError ? null : setError(err.message);
        });
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setData(JSON.parse(dataAsStr));
      }, 2000);
    }
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
