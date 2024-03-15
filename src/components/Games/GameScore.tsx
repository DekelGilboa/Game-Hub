import { Badge, useColorMode } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const { colorMode } = useColorMode();
  const color =
    score < 10 ? "gray" : score > 80 ? "green" : score > 60 ? "orange" : "red";

  return (
    <Badge
      fontSize={"0.8em"}
      borderRadius={"0.2rem"}
      colorScheme={color}
      variant={colorMode == "dark" ? "outline" : "subtle"}
      paddingX={"0.5em"}
      paddingY={"0.1em"}
    >
      {(score / 10).toFixed(1)} / 10
    </Badge>
  );
};

export default GameScore;
