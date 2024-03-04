import { Button, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../../hooks/useGenres";
import { optimizeImg } from "../../services/optimizeImageSize";
import LoadingSidebar from "./LoadingSidebar";

interface Props {
  onSelectedGenre: (g: Genre) => void;
}

const GenresSidebar = ({ onSelectedGenre }: Props) => {
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
              onClick={() => onSelectedGenre(g)}
              fontSize={"1.1em"}
              lineHeight={"1.3rem"}
              variant={"link"}
            >
              {g.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresSidebar;
