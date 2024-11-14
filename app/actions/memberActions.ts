"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { Photo } from "@prisma/client";

export async function getMembers() {
  const session = await auth();
  if (!session?.user) return null;

  try {
    return prisma.member.findMany({
      where: {
        NOT: {
          userId: session.user.id,
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch members");
  }
}

export async function getMemberByUserId(userId: string) {
  try {
    return prisma.member.findFirst({
      where: {
        userId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch member");
  }
}

export async function getMemberPhotosByUserId(userId: string) {
  try {
    const member = await prisma.member.findUnique({
      where: {
        userId,
      },
      select: { photos: true },
    });

    if (!member) return null;

    return member.photos.map((photo) => photo) as Photo[];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch member photos");
  }
}
