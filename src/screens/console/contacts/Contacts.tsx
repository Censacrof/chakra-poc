import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { FC } from "react";

export const Contacts: FC = () => {
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
        <Tab>Favorites</Tab>
        <Tab>Personal Contacts</Tab>
        <Tab>Registry</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Stuff 1</TabPanel>
        <TabPanel>Stuff 2</TabPanel>
        <TabPanel>Stuff 3</TabPanel>
        <TabPanel>Stuff 4</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
