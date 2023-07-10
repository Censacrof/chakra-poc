import {
  Avatar,
  Divider,
  Flex,
  Spacer,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { StatsCard } from "../../components/StatsCard";

export const CallStatus: FC = () => {
  return (
    <Flex flexGrow={1} gap={4} height={20} alignItems={"center"}>
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />

      <Divider orientation="vertical" />

      <Flex direction={"column"} alignContent={"start"}>
        <Text fontSize={"lg"} fontWeight={"bold"}>
          Dan Abrahmov
        </Text>
        <Text>237</Text>
      </Flex>

      <Spacer />

      <StatsCard flexGrow={0.5}>
        <StatNumber>07:24</StatNumber>
        <StatLabel>Avg Duration</StatLabel>
      </StatsCard>
    </Flex>
  );
};
