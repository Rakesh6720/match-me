"use client";

import { calculateAge } from "@/lib/util";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";
import { Member } from "@prisma/client";
import { usePathname } from "next/navigation";
import React from "react";
import { HiReceiptPercent } from "react-icons/hi2";

const MemberSidebar = ({
  member,
  navLinks,
}: {
  member: Member;
  navLinks: { name: string; href: string }[];
}) => {
  const pathName = usePathname();

  return (
    <Card className="w-full mt-10 items-center h-[80vh]">
      <Image
        height={200}
        width={200}
        src={member.image || "/images/user.png"}
        alt="User profile main page"
        className="rounded-full mt-6 aspect-square object-cover"
      />
      <CardBody>
        <div className="flex flex-col items-center">
          <div className="flex">
            <div className="text-2xl">
              {member.name}, {calculateAge(member.dateOfBirth)}
            </div>
          </div>
          <div className="text-sm text-neutral-500">
            {member.city}, {member.country}
          </div>
        </div>
        <Divider className="my-3" />
        <nav className="flex flex-col p-4 ml-4 text-2xl gap-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`block rounded 
                                ${
                                  pathName === link.href
                                    ? "text-default"
                                    : "hover:text-default/50"
                                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </CardBody>
      <CardFooter>
        <Button
          as={Link}
          href="/members"
          fullWidth
          color="default"
          variant="bordered"
        >
          Go back
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MemberSidebar;
