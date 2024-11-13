import React from "react";
import { getMembers } from "../actions/memberActions";

const MembersPage = async () => {
  const members = await getMembers();
  return (
    <div>
      {members && members.map(({ name, id }) => <p key={id}>{name}</p>)}
    </div>
  );
};

export default MembersPage;
