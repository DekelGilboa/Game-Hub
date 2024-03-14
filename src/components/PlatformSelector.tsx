import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (p: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  if (error)
    return (
      <Menu>
        <MenuButton as={Button}>{"Error"}</MenuButton>
      </Menu>
    );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        {selectedPlatform?.name || "Platroms"}
      </MenuButton>
      <MenuList>
        {data.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
