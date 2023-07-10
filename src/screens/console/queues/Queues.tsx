import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { MainNumberQueuesTable } from "./MainNumberQueuesTable";

export const Queues: FC = () => {
  return (
    <Tabs
      flexGrow={1}
      alignSelf={"stretch"}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      variant={"soft-rounded"}
      size={"sm"}
      colorScheme="gray"
    >
      <TabList>
        <Tab>Queues</Tab>
      </TabList>
      <TabPanels>
        <Accordion>
          <QueuesAccordionItem title="All queues">
            <MainNumberQueuesTable />
          </QueuesAccordionItem>

          <QueuesAccordionItem title="Main number queue">
            <MainNumberQueuesTable />
          </QueuesAccordionItem>

          <QueuesAccordionItem title="Support queues">
            stuff
          </QueuesAccordionItem>
        </Accordion>
      </TabPanels>
    </Tabs>
  );
};

const QueuesAccordionItem: FC<{
  title: string;
  children?: ReactNode | ReactNode[];
}> = ({ title, children }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {title}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  );
};
