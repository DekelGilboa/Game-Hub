import { Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import { optimizeImg } from "../../services/optimizeImageSize";
import LoadingSidebar from "./LoadingSidebar";

const GenresSidebar = () => {
  const { data: genresList, isLoading, error } = useGenres();

  
  return (
    <>
      {isLoading && <LoadingSidebar />}
      {error && <div>{error}</div>}
      <List display={"flex"} flexDirection={"column"} gap={"0.7rem"}>
        {genresList.map(({ id, name, image_background }) => (
          <ListItem
            key={id}
            display={"flex"}
            gap={"1rem"}
            alignItems={"center"}
          >
            <Image
              src={optimizeImg(image_background)}
              boxSize={"2.5rem"}
              rounded={"0.8rem"}
            ></Image>
            <Text fontSize={"1.1em"} lineHeight={"1.3rem"}>
              {name}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresSidebar;
