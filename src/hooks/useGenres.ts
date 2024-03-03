import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";


export interface Genre {
  id: number;
  name: string;

}

interface FetchedGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genresList, setGenreList] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const genreListAsStr = localStorage.getItem("genreList") || "[]";
    if (genreListAsStr == "[]") {
      apiClient
        .get<FetchedGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          const genreListAsStr = JSON.stringify(res.data.results);
          localStorage.setItem("genreList", genreListAsStr);
          setIsLoading(false);
          setGenreList(JSON.parse(genreListAsStr));
        })
        .catch((err) => {
          setIsLoading(false);
          return err instanceof CanceledError ? null : setError(err.message);
        });
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setGenreList(JSON.parse(genreListAsStr));
      }, 2000);
    }
    return () => controller.abort();
  }, []);
  return { genresList, error, isLoading };
};

export default useGenres;
