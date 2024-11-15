import React from "react";
import EditForm from "./EditForm";
import { getMemberByUserId } from "@/app/actions/memberActions";
import { getAuthUserId } from "@/app/actions/authActions";
import { notFound } from "next/navigation";
import CardInnerWrapper from "@/app/components/CardInnerWrapper";

const MemberEditPage = async () => {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  if (!member) return notFound();

  return (
    <CardInnerWrapper
      header="Edit Profile"
      body={<EditForm member={member} />}
    />
  );
};

export default MemberEditPage;
