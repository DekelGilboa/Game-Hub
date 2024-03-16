import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input type="search" placeholder="Search games..." rounded={16} />
    </InputGroup>
  );
};

export default SearchInput;
