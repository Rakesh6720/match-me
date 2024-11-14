"use client";

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Member } from "@prisma/client";
import { usePathname } from "next/navigation";
import React from "react";
import { HiReceiptPercent } from "react-icons/hi2";

const MemberSidebar = ({ member }: { member: Member }) => {
  const pathName = usePathname();
  const basePath = `/members/${member.userId}`;

  const navLinks = [
    { name: "Profile", href: `${basePath}` },
    { name: "Photos", href: `${basePath}/photos` },
    { name: "Chat", href: `${basePath}/chat` },
  ];

  return (
    <Card className="w-full mt-10 items-center h-[80vh]">
      <Image
        height={200}
        width={200}
        src={member.image || "/images/user.png"}
        alt="User profile main page"
        className="rounded-full mt-6 aspect-square object-cover"
      />
      <CardBody></CardBody>
    </Card>
  );
};

export default MemberSidebar;
