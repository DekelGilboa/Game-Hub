import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={"nav"}>nav</GridItem>
        <Show above="lg">
          <GridItem area={"aside"}>aside</GridItem>
        </Show>
        <GridItem area={"main"}>main</GridItem>
      </Grid>
    </>
  );
}

export default App;
