import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/icons8-game-50-65dd002d7a003.webp";
import ThemeSwitch from "./ThemeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"0.4rem 1rem"}>
      <Image src={logo} boxSize={"56px"} />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
