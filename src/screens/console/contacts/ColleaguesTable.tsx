import {
  Avatar,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FC } from "react";

export const ColleaguesTable: FC = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Presence</Th>
            <Th>Contact</Th>
            <Th>Extension</Th>
            <Th>Mobile number</Th>
            <Th>e-mail</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            </Td>
            <Td>Kent Dodds</Td>
            <Td>273</Td>
            <Td>+33 333 333 3333</Td>
            <Td>anemail@emailprovider.com</Td>
          </Tr>
          <Tr>
            <Td>
              <Avatar
                name="Kola Tioluwani"
                src="https://bit.ly/tioluwani-kolawole"
              />
            </Td>
            <Td>Kola Tioluwani</Td>
            <Td>273</Td>
            <Td>+33 333 333 3333</Td>
            <Td>anemail@emailprovider.com</Td>
          </Tr>
          <Tr>
            <Td>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            </Td>
            <Td>Ryan Florence</Td>
            <Td>273</Td>
            <Td>+33 333 333 3333</Td>
            <Td>anemail@emailprovider.com</Td>
          </Tr>
          <Tr>
            <Td>
              <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
            </Td>
            <Td>Prosper Otemuyiwa</Td>
            <Td>273</Td>
            <Td>+33 333 333 3333</Td>
            <Td>anemail@emailprovider.com</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
