import { Grid, StatLabel, StatNumber } from "@chakra-ui/react";
import { FC } from "react";
import { StatsCard } from "../../components/StatsCard";

export const QueuesStats: FC = () => {
  return (
    <Grid
      flexGrow={1}
      alignSelf={"stretch"}
      templateRows={"repeat(2, 1fr)"}
      templateColumns={"repeat(2, 1fr)"}
      gap={4}
    >
      <StatsCard>
        <StatNumber>5</StatNumber>
        <StatLabel>Waiting Calls</StatLabel>
      </StatsCard>
      <StatsCard>
        <StatNumber>05:22</StatNumber>
        <StatLabel>Max Waiting Time</StatLabel>
      </StatsCard>
      <StatsCard>
        <StatNumber>07:24</StatNumber>
        <StatLabel>Avg Duration</StatLabel>
      </StatsCard>
      <StatsCard>
        <StatNumber>01:32</StatNumber>
        <StatLabel>Avg Waiting Time</StatLabel>
      </StatsCard>
    </Grid>
  );
};
