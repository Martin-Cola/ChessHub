"use client";

import { Player } from "@/lib/interfaces";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";

export default function PlayerCard({ name, score, category, image }: Player) {
  return (
    <Card className="py-4 w-[300px] h-[500px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{category}</p>
        <small className="text-default-500">{score}</small>
        <h4 className="font-bold text-large">{name}</h4>
      </CardHeader>
      <CardBody className="py-2">
        <div className="relative rounded-xl h-full overflow-hidden">
          <Image alt="Card background" className="object-center object-cover" fill src={image ? image : ""} />
        </div>
      </CardBody>
    </Card>
  );
}
