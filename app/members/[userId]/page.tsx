import { getMemberByUserId } from "@/app/actions/memberActions";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import React from "react";

async function MemberDetailsPage({ params }: { params: { userId: string } }) {
  const member = await getMemberByUserId(params.userId);

  if (!member) return notFound();
  return (
    <Card>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Profile
      </CardHeader>
      <Divider />
      <CardBody>{member.description}</CardBody>
    </Card>
  );
}

export default MemberDetailsPage;
