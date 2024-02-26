import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/icons8-game-50-65dd002d7a003.webp"

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"56px"}/>
        <Text>Navbar</Text>
    </HStack>
  )
}

export default NavBar