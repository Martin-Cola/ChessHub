"use server";

import { prisma, Prisma } from "@/prisma/prisma-client";
import { revalidatePath } from 'next/cache'
import invertCategory from "@/lib/utils";

export async function addPlayerAction(formData: FormData ) {
  const player: Prisma.PlayerCreateInput = {
    name: String(formData.get("name")),
    category: invertCategory(String(formData.get("category"))),
    score: Number(formData.get("score")),
  };

  console.log(player);
  

  try {
    await prisma.player.create({data: player});
    revalidatePath('/')
  } catch (error) {
    console.error("Failed to add player: "+ error);
  }
}

export async function deleteAction(id: number) {
  console.log("eliminazione");

  try {
    await prisma.player.delete({where: {id: id}});
    revalidatePath('/')
  } catch (error) {
    console.error("Failed to delete player: "+ error);
  }
}

