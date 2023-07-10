import { LinkIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Select, Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Flex flexGrow={1} direction={"row"} alignItems={"center"} gap={2}>
      <Text fontSize={"xl"} fontWeight={"bold"}>
        Webex Attendant Console
      </Text>
      <IconButton aria-label="Open in browser" variant={"outline"}>
        <LinkIcon />
      </IconButton>
      <Spacer />
      <Select width={"10rem"} textAlign={"right"} variant={"unstyled"}>
        <option>Available</option>
        <option>Offline</option>
      </Select>
    </Flex>
  );
};
