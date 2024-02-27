import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchedGamesResponse {
  count: number;
  results: Game[];
}

const GamesResult = () => {
  const [gamesList, setGameList] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchedGamesResponse>("/games")
      .then((res) => {
        setGameList(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });
  });

  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {gamesList.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesResult;
