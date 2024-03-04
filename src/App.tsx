import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesResult from "./components/Games/GamesResult";
import GenresSidebar from "./components/Games/GenresSidebar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "18vw 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} ps={"0.5rem"}>
            <GenresSidebar
              onSelectedGenre={(g: Genre) => setSelectedGenre(g)}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesResult selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
