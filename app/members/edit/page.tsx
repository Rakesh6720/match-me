import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import EditForm from "./EditForm";
import { getMemberByUserId } from "@/app/actions/memberActions";
import { getAuthUserId } from "@/app/actions/authActions";
import { notFound } from "next/navigation";

const MemberEditPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  if (!member) return notFound();

  return (
    <div>
      <Card>
        <CardHeader className="text-2xl font-semibold text-secondary">
          Edit Profile
        </CardHeader>
        <Divider />
        <CardBody>
          <EditForm member={member} />
        </CardBody>
      </Card>
    </div>
  );
};

export default MemberEditPage;
