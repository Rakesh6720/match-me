import React from "react";
import {
  fetchCurrentUserLikeIds,
  fetchLikedMembers,
} from "../actions/likeActions";
import ListsTab from "./ListsTab";
import { Member } from "@prisma/client";

const ListsPage = async ({
  searchParams,
}: {
  searchParams: { type: string };
}) => {
  const likeIds = await fetchCurrentUserLikeIds();
  const members = (await fetchLikedMembers(searchParams.type)) as Member[];

  return (
    <div>
      <ListsTab members={members} likeIds={likeIds} />
    </div>
  );
};

export default ListsPage;
