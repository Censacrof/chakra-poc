import {
  IconButton as BaseIconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FC } from "react";

export const IconButton: FC<IconButtonProps> = ({
  isRound = true,
  ...props
}) => <BaseIconButton isRound={isRound} {...props} />;
