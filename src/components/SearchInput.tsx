import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { FormEvent, useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const seatchInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(seatchInput.current!.value);
    seatchInput.current!.value = "";
  };

  return (
    <form id="search-form" onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          ref={seatchInput}
          type="search"
          placeholder="Search games..."
          rounded={16}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
