import { HStack, Stack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () => {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justifyContent={"space-between"}
      align={"center"}
    >
      <Text
        fontSize={26}
        fontWeight={"bold"}
        whiteSpace={"nowrap"}
        my={{ base: 4, md: 0 }}
      >
        🎮 Game Hub 🎮
      </Text>
      <HStack
        justifyContent={"space-between"}
        padding={"0.5rem 1rem"}
        width={"100%"}
      >
        <SearchInput />
        <ThemeSwitch />
      </HStack>
    </Stack>
  );
};

export default NavBar;
