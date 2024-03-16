import { HStack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"0.5rem 1rem"}>
      <Text fontSize={26} fontWeight={"bold"}>
        🎮 Game Hub 🎮
      </Text>
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
};

export default NavBar;
