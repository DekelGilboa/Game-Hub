import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game: { name, background_image } }: Props) => {
  return (
      <Card overflow={"hidden"}>
        <Image src={background_image}/>
        <CardBody>
          <Heading fontSize={"xl"}>{name}</Heading>
        </CardBody>
      </Card>
  );
};

export default GameCard;
