import { HStack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"0.5rem 1rem"}>
      <Text fontSize={26} fontWeight={"bold"}>
        🎮 Game Hub 🎮
      </Text>
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
