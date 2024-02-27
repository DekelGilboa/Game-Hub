import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformsIcons from "./PlatformsIcons";

interface Props {
  game: Game;
}

const GameCard = ({
  game: { name, background_image, parent_platforms},
}: Props) => {
  return (
    <Card overflow={"hidden"}>
      <Image src={background_image} />
      <CardBody>
        <Heading textAlign={"center"} fontSize={"xl"} marginBottom={"0.4rem"}>{name}</Heading>
        <PlatformsIcons platforms={parent_platforms.map(p=>p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
