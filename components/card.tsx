"use client";

import { Player } from "@/lib/interfaces";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteAction } from "@/lib/actions";

export default function PlayerCard({
  id,
  name,
  score,
  category,
  image,
}: Player) {
  return (
    <Card className="py-4 w-[300px] h-[500px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category}</p>
        <small className="text-default-500">{score}</small>
        <h4 className="font-bold text-large">{name}</h4>
        <Button
          isIconOnly
          color="danger"
          className="absolute top-4 right-4"
          onClick={() => deleteAction(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </CardHeader>
      <CardBody className="py-2">
        <div className="relative rounded-xl h-full overflow-hidden">
          <Image
            alt="Card background"
            className="object-center object-cover"
            fill
            src={image ? image : ""}
          />
        </div>
      </CardBody>
    </Card>
  );
}
