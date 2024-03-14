import { QueryDetails } from "../App";
import useData from "./useData";

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

const useGames = (
queryDetails: QueryDetails
) => {
  return useData<Game>(
    "games",
    {
      params: {
        genres: queryDetails.genre?.id,
        parent_platforms: queryDetails.platform?.id,
      },
    },
    [queryDetails]
  );
};

export default useGames;
