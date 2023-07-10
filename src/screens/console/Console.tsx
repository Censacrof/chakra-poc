import {
  Card,
  CardBody,
  Grid,
  GridItem,
  GridItemProps,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { CallStatus } from "./CallStatus";
import { Header } from "./Header";
import { QueuesStats } from "./QueuesStats";
import { Queues } from "./queues/Queues";

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
        <QueuesStats />
      </ConsoleGridItem>

      <ConsoleGridItem rowStart={3} colStart={1}>
        <Queues />
      </ConsoleGridItem>

      <GridItem display={"flex"} rowStart={2} rowSpan={2} colStart={2}>
        <Grid
          flexGrow={1}
          alignSelf={"stretch"}
          templateRows={"min-content min-content 1fr 1.5fr"}
          templateColumns={"2.5fr 1fr"}
          gap={4}
        >
          <ConsoleGridItem rowStart={1} colStart={1}>
            <CallStatus />
          </ConsoleGridItem>
        </Grid>
      </GridItem>
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
