import React from "react";
import { getMembers } from "../actions/memberActions";
import MemberCard from "./MemberCard";

const MembersPage = async () => {
  const members = await getMembers();
  return (
    <div>
      {members &&
        members.map((member) => <MemberCard key={member.id} member={member} />)}
    </div>
  );
};

export default MembersPage;
