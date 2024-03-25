import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchedResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  dataType: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchedResponse<T>>("/" + dataType, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setTimeout(() => {
            setIsLoading(false);
            setData(res.data.results);
          }, 100);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          console.log(err);
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;
