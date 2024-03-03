import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const slugToIconsMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  nintendo: SiNintendo,
  web: BsGlobe,
};

const PlatformsIcons = ({ platforms }: Props) => {
  return (
    <HStack flexWrap={"wrap"}>
      {platforms.map(({ id, slug }) => (
        <Icon key={id} as={slugToIconsMap[slug]} color={"gray.500"}></Icon>
      ))}
    </HStack>
  );
};

export default PlatformsIcons;
