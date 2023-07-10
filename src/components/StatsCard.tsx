import { Card, CardBody, Stat } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const StatsCard: FC<{ children?: ReactNode | ReactNode[] }> = ({
  children,
}) => {
  return (
    <Card variant={"filled"}>
      <CardBody>
        <Stat>{children}</Stat>
      </CardBody>
    </Card>
  );
};
