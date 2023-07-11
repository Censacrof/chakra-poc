import { Flex, HStack, Icon, StatLabel, StatNumber } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { FaStop } from "react-icons/fa";

import { IconButton } from "../../components/IconButton";
import { StatsCard } from "../../components/StatsCard";

export const RecordingControls: FC = () => {
  return (
    <Flex
      flexGrow={1}
      alignSelf={"stretch"}
      alignItems={"stretch"}
      direction={"column"}
      gap={4}
    >
      <StatsCard>
        <StatNumber>00:00:24</StatNumber>
        <StatLabel>Recording time</StatLabel>
      </StatsCard>
      <HStack>
        <IconButton variant={"outline"} aria-label={"Pause"}>
          <Icon as={FaStop} />
        </IconButton>
        <IconButton variant={"outline"} aria-label={"Pause"}>
          <Icon as={AiOutlinePause} />
        </IconButton>
      </HStack>
    </Flex>
  );
};
