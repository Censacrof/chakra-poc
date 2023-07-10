import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const Console: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateColumns={"1fr 2fr"}
      templateRows={"4.5rem 13.5rem 1fr"}
    ></Grid>
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
