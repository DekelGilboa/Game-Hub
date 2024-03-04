import { Button, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import { optimizeImg } from "../../services/optimizeImageSize";
import LoadingSidebar from "./LoadingSidebar";

interface Props {
  onSelectedGenre: (g: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresSidebar = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genresList, isLoading, error } = useGenres();

  return (
    <>
      {isLoading && <LoadingSidebar />}
      {error && <div>{error}</div>}
      <List display={"flex"} flexDirection={"column"} gap={"0.7rem"}>
        {genresList.map((g) => (
          <ListItem
            key={g.id}
            display={"flex"}
            gap={"1rem"}
            alignItems={"center"}
          >
            <Image
              src={optimizeImg(g.image_background)}
              boxSize={"2.5rem"}
              rounded={"0.8rem"}
            ></Image>
            <Button
              onClick={() => {
                onSelectedGenre(g);
              }}
              variant={"link"}
            >
              <Text
                // stick to the left
                textAlign={"left"}
                whiteSpace={"pre-line"}
                fontWeight={g.id == selectedGenre?.id ? "600" : "500"}
                fontSize={g.id == selectedGenre?.id ? "1.2em" : "1.1em"}
                textDecoration={
                  g.id == selectedGenre?.id ? "underline SlateGrey" : "none"
                }
                lineHeight={"1.3rem"}
              >
                {g.name}
              </Text>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresSidebar;
