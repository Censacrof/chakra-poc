import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Stats } from "./Stats";

export const Console: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateColumns={"1fr 2fr"}
      templateRows={"4.5rem min-content 1fr"}
    >
      <GridItem
        rowStart={1}
        rowEnd={1}
        colStart={1}
        colEnd={-1}
        display={"flex"}
      >
        <Header />
      </GridItem>
      <ConsoleGridItem>
        <Stats />
      </ConsoleGridItem>
    </Grid>
  );
};

const ConsoleGridItem: FC<{
  children?: ReactNode | ReactNode[];
}> = ({ children }) => {
  return (
    <GridItem display={"flex"}>
      <Card flexGrow={1} display={"flex"}>
        <CardBody display={"flex"}>{children}</CardBody>
      </Card>
    </GridItem>
  );
};
