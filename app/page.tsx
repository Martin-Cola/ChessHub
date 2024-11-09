import PlayerCard from "@/components/card";
import { prisma } from "@/prisma/prisma-client";
import { Button } from "@nextui-org/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default async function Page() {
  const players = await prisma.player.findMany();

  return (
    <>
      <div className=" flex gap-8 flex-wrap">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.name}
            category={player.category}
            score={player.score}
            image={player.image}
          />
        ))}
      </div>
      <div className="absolute right-3 bottom-4">
        <Button radius="full" isIconOnly>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
    </>
  );
}
