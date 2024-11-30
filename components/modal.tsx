"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addPlayerAction } from "@/lib/actions";

export default function AddPlayerModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const categories = [
    "NC",
    "2S",
    "1S",
    "3N",
    "2N",
    "1N",
    "CM",
    "M",
    "FM",
    "IM",
    "GM",
    "WNC",
    "W2S",
    "W1S",
    "W3N",
    "W2N",
    "W1N",
    "WCM",
    "WM",
    "WFM",
    "WIM",
    "WGM",
  ];

  return (
    <>
      <div className="absolute right-3 bottom-4">
        <Button radius="full" isIconOnly onPress={onOpen}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Aggiungi Giocatore
              </ModalHeader>
              <form action={addPlayerAction}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Nome"
                    name="name"
                    placeholder="Inserisci il nome"
                    variant="bordered"
                  />
                  <Input
                    label="Punteggio ELO"
                    name="score"
                    placeholder="1440"
                    type="number"
                    variant="bordered"
                  />
                  <Select
                    label="Categoria"
                    name="category"
                    placeholder="Seleziona la categoria"
                    variant="bordered"
                  >
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input type="file" name="image" variant="bordered" />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Annulla
                  </Button>
                  <Button color="primary" type="submit" onPress={onClose}>
                    Aggiungi
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
