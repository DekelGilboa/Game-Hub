import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesResult from "./components/Games/GamesResult";
import GenresSidebar from "./components/Games/GenresSidebar";
import { useEffect, useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  // useEffect(() => {
  //   console.log("Selected Genre", selectedGenre);
  //   console.log("Selected Platform", selectedPlatform);
  // }, [selectedGenre, selectedPlatform]);

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
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector
            onSelectedPlatform={(p: Platform) => setSelectedPlatform(p)}
            selectedPlatform={selectedPlatform}
          />
          <GamesResult selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
