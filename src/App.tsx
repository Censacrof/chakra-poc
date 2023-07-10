import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Console } from "./screens/Console/Console";

function App() {
  return (
    <ChakraProvider>
      <Flex direction={"column"} position={"fixed"} inset={0} padding={4}>
        <Console />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
