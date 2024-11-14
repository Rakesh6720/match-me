import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

const ChatPage = () => {
  return (
    <Card>
      <CardHeader className="text-2xl font-semibold text-secondary"></CardHeader>
      <Divider />
      <CardBody>Chat goes here</CardBody>
    </Card>
  );
};

export default ChatPage;
