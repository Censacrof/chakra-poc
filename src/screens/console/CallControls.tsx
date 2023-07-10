import { Divider, HStack, Icon, IconButton } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { FiPhoneForwarded } from "react-icons/fi";
import { ImPhoneHangUp } from "react-icons/im";

import { RiUserSearchLine } from "react-icons/ri";

export const CallControls: FC = () => {
  return (
    <HStack>
      <IconButton variant={"outline"} aria-label={"Pause"}>
        <Icon as={AiOutlinePause} />
      </IconButton>

      <IconButton colorScheme="red" aria-label={"Hang Up"}>
        <Icon as={ImPhoneHangUp} />
      </IconButton>

      <Divider orientation="vertical" />

      <IconButton variant={"outline"} aria-label={"Transfer"}>
        <Icon as={FiPhoneForwarded} />
      </IconButton>

      <IconButton variant={"outline"} aria-label={"Something Phony"}>
        <Icon as={BsFillTelephonePlusFill} />
      </IconButton>

      <IconButton variant={"outline"} aria-label={"Something Phony"}>
        <Icon as={BiGroup} />
      </IconButton>

      <Divider orientation="vertical" />

      <IconButton variant={"outline"} aria-label={"Something Phony"}>
        <Icon as={RiUserSearchLine} />
      </IconButton>
    </HStack>
  );
};
