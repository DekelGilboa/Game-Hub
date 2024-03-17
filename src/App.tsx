import "./App.css";
import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesResult from "./components/Games/GamesResult";
import GenresSidebar from "./components/Games/GenresSidebar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import OrderSelector from "./components/OrderSelector";
import ResultHeading from "./components/ResultHeading";

export interface QueryDetails {
  genre: Genre | null;
  platform: Platform | null;
  order: string;
  search: string;
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
          <NavBar
            onSearch={(search: string) => {
              setQueryDetails({ ...queryDetails, search });
            }}
          />
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
          <VStack marginLeft={4} marginBottom={2} align={"start"} spacing={5}>
            <ResultHeading queryDetails={queryDetails} />
            <HStack spacing={2} maxW={"90%"} fontSize={{ base: 12, sm: 16 }}>
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
          </VStack>
          <GamesResult queryDetails={queryDetails} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
