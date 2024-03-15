import "./App.css";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesResult from "./components/Games/GamesResult";
import GenresSidebar from "./components/Games/GenresSidebar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import OrderSelector from "./components/OrderSelector";

export interface QueryDetails {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
}

function App() {
  const [queryDetails, setQueryDetails] = useState({} as QueryDetails);

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
        <GridItem mb={4} area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} ps={"0.5rem"}>
            <GenresSidebar
              onSelectedGenre={(g: Genre) =>
                setQueryDetails({ ...queryDetails, genre: g })
              }
              selectedGenre={queryDetails.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack marginLeft={4} spacing={2} marginBottom={2}>
            <PlatformSelector
              onSelectedPlatform={(p: Platform) =>
                setQueryDetails({ ...queryDetails, platform: p })
              }
              selectedPlatform={queryDetails.platform}
            />
            <OrderSelector
              selectedOrder={queryDetails.order}
              onSelectedOrder={(order: string) =>
                setQueryDetails({ ...queryDetails, order })
              }
            />
          </HStack>
          <GamesResult queryDetails={queryDetails} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
