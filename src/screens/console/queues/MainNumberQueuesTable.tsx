import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";

export const MainNumberQueuesTable: FC = () => {
  return (
    <TableContainer>
      <Table variant="simple" size={"sm"}>
        <Thead>
          <Tr>
            <Th>Waiting</Th>
            <Th>Contact</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>00:03:49</Td>
            <Td>089234852</Td>
          </Tr>
          <Tr>
            <Td>00:02:01</Td>
            <Td>089534689</Td>
          </Tr>
          <Tr>
            <Td>00:03:21</Td>
            <Td>089534433</Td>
          </Tr>
          <Tr>
            <Td>00:02:54</Td>
            <Td>089534212</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
