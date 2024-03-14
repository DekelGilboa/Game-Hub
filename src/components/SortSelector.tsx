import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        Sort by: 1
      </MenuButton>
      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <MenuItem>4</MenuItem>
        <MenuItem>5</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
