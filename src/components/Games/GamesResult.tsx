import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import { optimizeImg } from "../../services/optimizeImageSize";
import LoadingCardsGrid from "./LoadingCardsGrid";

const GamesResult = () => {
  const { gamesList, error, isLoading } = useGames();
  return (
    <>
      {error && <div>{error}</div>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"0.5rem 1rem"}
        spacing={"1rem"}
        borderRadius={"1rem"}
      >
        {isLoading && <LoadingCardsGrid/>}
        {gamesList.map((game) => (
          <GameCard
            game={{
              ...game,
              background_image: optimizeImg(game.background_image),
            }}
            key={game.id}
          ></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesResult;
