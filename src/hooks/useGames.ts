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
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [gamesList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const gameListAsStr = localStorage.getItem("gameList") || "[]";
    if (gameListAsStr == "[]") {
      apiClient
        .get<FetchedGamesResponse>("/games", { signal: controller.signal })
        .then((res) => {
          const gameListAsStr = JSON.stringify(res.data.results);
          localStorage.setItem("gameList", gameListAsStr);
          setGameList(JSON.parse(gameListAsStr));
        })
        .catch((err) => {
          return err instanceof CanceledError ? null : setError(err.message);
        });
    } else {
      setGameList(JSON.parse(gameListAsStr));
    }
    return () => controller.abort();
  }, []);

  return { gamesList, error };
};

export default useGames;
