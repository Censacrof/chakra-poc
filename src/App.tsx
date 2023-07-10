import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Console } from "./screens/Console";

function App() {
  return (
    <ChakraProvider>
      <Flex direction={"column"} position={"fixed"} inset={0}>
        <Console />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
