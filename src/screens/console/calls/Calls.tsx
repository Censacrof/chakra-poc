import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";
import { CurrentCallsTable } from "./CurrentCallsTable";

export const Calls: FC = () => {
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
        <Tab>Current Calls</Tab>
        <Tab>Parked Calls</Tab>
        <Tab>Conferences</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <CurrentCallsTable />
        </TabPanel>
        <TabPanel>Stuff 2</TabPanel>
        <TabPanel>Stuff 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
