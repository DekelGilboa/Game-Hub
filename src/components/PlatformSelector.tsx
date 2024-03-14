import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error)
    return (
      <Menu>
        <MenuButton as={Button}>{"Error"}</MenuButton>
      </Menu>
    );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownCircleOutline />}>
        Platroms
      </MenuButton>
      <MenuList>
        {data.map(({ name }) => (
          <MenuItem>{name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
