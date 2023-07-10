import {
  Card,
  CardBody,
  Grid,
  GridItem,
  GridItemProps,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Queues } from "./Queues";
import { Stats } from "./Stats";

export const Console: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateColumns={"1fr 2fr"}
      templateRows={"4.5rem min-content 1fr"}
      gap={4}
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

      <ConsoleGridItem rowStart={2} colStart={1}>
        <Stats />
      </ConsoleGridItem>

      <ConsoleGridItem rowStart={3} colStart={1}>
        <Queues />
      </ConsoleGridItem>
    </Grid>
  );
};

const ConsoleGridItem: FC<
  {
    children?: ReactNode | ReactNode[];
  } & GridItemProps
> = ({ children, ...props }) => {
  return (
    <GridItem display={"flex"} {...props}>
      <Card flexGrow={1} display={"flex"}>
        <CardBody display={"flex"}>{children}</CardBody>
      </Card>
    </GridItem>
  );
};
