import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  header: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
};

const CardInnerWrapper = ({ header, body, footer }: Props) => {
  return (
    <Card>
      <CardHeader>
        {typeof header === "string" ? (
          <div className="text-2xl font-semibold text-default">{header}</div>
        ) : (
          <>{header}</>
        )}
      </CardHeader>
      <Divider />
      <CardBody>{body}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default CardInnerWrapper;
