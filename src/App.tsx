import { ChakraProvider, Flex } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import { Console } from "./screens/console/Console";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={"column"} position={"fixed"} inset={0} padding={4}>
        <Console />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
