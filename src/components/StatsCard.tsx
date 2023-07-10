import { Card, CardBody, CardProps, Stat } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

export const StatsCard: FC<
  { children?: ReactNode | ReactNode[] } & CardProps
> = ({ children, ...props }) => {
  return (
    <Card variant={"filled"} {...props}>
      <CardBody>
        <Stat>{children}</Stat>
      </CardBody>
    </Card>
  );
};
