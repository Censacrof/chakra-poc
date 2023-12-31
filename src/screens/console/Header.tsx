import { Flex, Icon, Select, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import { ColorModeSwitcherButton } from "../../components/ColorModeSwitcherButton";
import { IconButton } from "../../components/IconButton";

export const Header: FC = () => {
  return (
    <Flex flexGrow={1} direction={"row"} alignItems={"center"} gap={2}>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Webex Attendant Console
      </Text>
      <IconButton size={"sm"} aria-label="Open in browser" variant={"outline"}>
        <Icon as={FiExternalLink} />
      </IconButton>
      <Spacer />
      <ColorModeSwitcherButton />
      <Select width={"10rem"} textAlign={"right"} variant={"unstyled"}>
        <option>Available</option>
        <option>Offline</option>
      </Select>
    </Flex>
  );
};
