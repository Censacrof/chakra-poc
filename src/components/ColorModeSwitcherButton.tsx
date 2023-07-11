import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";
import { IconButton } from "./IconButton";

export const ColorModeSwitcherButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton aria-label={"Switch color mode"} onClick={toggleColorMode}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  );
};
