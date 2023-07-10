import {
  Card,
  CardBody,
  Grid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const QueuesStats: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateRows={"repeat(2, 1fr)"}
      templateColumns={"repeat(2, 1fr)"}
      gap={4}
    >
      <StatCard>
        <StatNumber>5</StatNumber>
        <StatLabel>Waiting Calls</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>05:22</StatNumber>
        <StatLabel>Max Waiting Time</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>07:24</StatNumber>
        <StatLabel>Avg Duration</StatLabel>
      </StatCard>
      <StatCard>
        <StatNumber>01:32</StatNumber>
        <StatLabel>Avg Waiting Time</StatLabel>
      </StatCard>
    </Grid>
  );
};

const StatCard: FC<{ children?: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <Card variant={"filled"}>
      <CardBody>
        <Stat>{children}</Stat>
      </CardBody>
    </Card>
  );
};
