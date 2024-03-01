import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import PlatformsIcons from "./PlatformsIcons";
import GameScore from "./GameScore";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, parent_platforms, metacritic },
}: Props) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={background_image} />
      <CardBody>
        <Heading textAlign={"center"} fontSize={"xl"} marginBottom={"0.4rem"}>
          {name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformsIcons platforms={parent_platforms.map((p) => p.platform)} />
          <GameScore score={metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
