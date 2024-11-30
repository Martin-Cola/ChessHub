import PlayerCard from "@/components/card";
import { prisma } from "@/prisma/prisma-client";
import AddPlayerModal from "@/components/modal";
import invertCategory from "@/lib/utils";

export default async function Page() {
  const players = await prisma.player.findMany();

  console.log(players);

  return (
    <>
      <div className=" flex gap-8 flex-wrap">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            id={player.id}
            name={player.name}
            category={invertCategory(player.category)}
            score={player.score}
            image={player.image}
          />
        ))}
      </div>
      <AddPlayerModal />
    </>
  );
}
