import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesResult from "./components/Games/GamesResult";
import GenresSidebar from "./components/Games/GenresSidebar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>
          <GenresSidebar/>
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GamesResult />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
