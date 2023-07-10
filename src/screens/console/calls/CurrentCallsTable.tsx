import {
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlinePause } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

export const CurrentCallsTable: FC = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Contact</Th>
            <Th>Number</Th>
            <Th>Duration</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <HStack color={"teal"}>
                <Icon as={BsArrowUpRight} />
                <Icon as={AiOutlinePause} />
              </HStack>
            </Td>
            <Td>Marvin Pugh</Td>
            <Td>273</Td>
            <Td>00:00:04</Td>
          </Tr>
          <Tr>
            <Td>
              <HStack color={"teal"}>
                <Icon as={BsArrowUpRight} />
                <Icon as={AiOutlinePause} />
              </HStack>
            </Td>
            <Td>Matthew Hunt</Td>
            <Td>299</Td>
            <Td>00:00:38</Td>
          </Tr>
          <Tr>
            <Td>
              <HStack color={"teal"}>
                <Icon as={BsArrowUpRight} />
                <Icon as={AiOutlinePause} />
              </HStack>
            </Td>
            <Td>Matthew Hunt</Td>
            <Td>212</Td>
            <Td>00:00:12</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
