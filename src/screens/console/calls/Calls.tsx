import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";

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
        <Tab>Colleagues</Tab>
        <Tab>Parked Calls</Tab>
        <Tab>Conferences</Tab>
      </TabList>
      <TabPanels>Stuff 1</TabPanels>
      <TabPanels>Stuff 2</TabPanels>
      <TabPanels>Stuff 3</TabPanels>
    </Tabs>
  );
};
