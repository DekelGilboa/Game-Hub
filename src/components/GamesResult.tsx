import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GamesResult = () => {
  const { gamesList, error } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={"0.5rem 1rem"} spacing={"1rem"} borderRadius={"1rem"} >
        {gamesList.map((game) => (
          <GameCard game={game} key={game.id}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesResult;
