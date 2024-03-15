import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa6";

interface Props {
  onSelectedOrder: (o: string) => void;
  selectedOrder: string;
}

const OrderSelector = ({ onSelectedOrder, selectedOrder }: Props) => {
  const orderOptions = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-metacritic", label: "Score" },
    { value: "-released", label: "Released Date" },
    { value: "-added", label: "Added Date" },
    { value: "-created", label: "Created Date" },
    { value: "-updated", label: "Updated Date" },
    { value: "-rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaAngleDown />}>
        Order By:{" "}
        {orderOptions.find((option) => option.value === selectedOrder)?.label ||
          "Relevance"}
      </MenuButton>
      <MenuList>
        {orderOptions.map(({ label, value }) => (
          <MenuItem
            key={value}
            value={value}
            onClick={() => onSelectedOrder(value)}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderSelector;
