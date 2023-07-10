import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

export const CallStatus: FC = () => {
  return (
    <Flex gap={4} height={20} alignItems={"center"}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Divider orientation="vertical" />
      <Flex direction={"column"} alignContent={"start"}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Dan Abrahmov
        </Text>
        <Text>237</Text>
      </Flex>
    </Flex>
  );
};
