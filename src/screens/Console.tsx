import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Header } from "./Header";

export const Console: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateColumns={"1fr 2fr"}
      templateRows={"4.5rem 13.5rem 1fr"}
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
    </Grid>
  );
};

const ConsoleGridItem: FC<{
  children?: ReactNode | ReactNode[];
}> = ({ children }) => {
  return (
    <GridItem>
      <Card>
        <CardBody>{children}</CardBody>
      </Card>
    </GridItem>
  );
};
