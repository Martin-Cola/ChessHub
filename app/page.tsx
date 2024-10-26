import PlayerCard from "@/components/card";
import { prisma } from "@/prisma/prisma-client";

export default async function Page() {
  const players = await prisma.player.findMany();

  return (
    <div className=" flex gap-8 flex-wrap">
      {players.map((player) => (
        <PlayerCard key={player.id} name={player.name} category={player.category} score={player.score} image={player.image} />
      ))}
    </div>
  );
}
