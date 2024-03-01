import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [gamesList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const gameListAsStr = localStorage.getItem("gameList") || "[]";
    if (gameListAsStr == "[]") {
      apiClient
        .get<FetchedGamesResponse>("/games", { signal: controller.signal })
        .then((res) => {
          const gameListAsStr = JSON.stringify(res.data.results);
          localStorage.setItem("gameList", gameListAsStr);
          setIsLoading(false);
          setGameList(JSON.parse(gameListAsStr));
        })
        .catch((err) => {
          setIsLoading(false);
          return err instanceof CanceledError ? null : setError(err.message);
        });
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setGameList(JSON.parse(gameListAsStr));
      }, 2000);
    }
    return () => controller.abort();
  }, []);

  return { gamesList, error, isLoading };
};

export default useGames;
