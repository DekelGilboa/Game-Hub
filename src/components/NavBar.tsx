import { HStack, Stack, Text } from "@chakra-ui/react";
import ThemeSwitch from "./ThemeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
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
        <SearchInput onSearch={onSearch} />
        <ThemeSwitch />
      </HStack>
    </Stack>
  );
};

export default NavBar;
