import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ThemeSwitch;
