"use client";

import { Button, Input, Checkbox, Link, user } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useRef, createRef } from "react";

export default function Page() {
  const router = useRouter();
  const username: string = "martin";
  const password: string = "martin";

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function login() {
    if (
      usernameRef.current!.value == username &&
      usernameRef.current!.value == password
    ) {
      router.push("/");
    } else {
      console.log("Credenziali non valide!");
    }
  }

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-between w-[300px] gap-4">
        <Input
          ref={usernameRef}
          autoFocus
          label="Username"
          placeholder="Enter your username"
          variant="bordered"
        />
        <Input
          ref={passwordRef}
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
        <div className="flex py-2 px-1 justify-between">
          <Checkbox
            classNames={{
              label: "text-small",
            }}
          >
            Rimani connesso
          </Checkbox>
          <Link color="primary" href="#" size="sm">
            Registrati!
          </Link>
        </div>
        <Button onClick={() => login()}>Login</Button>
      </div>
    </div>
  );
}
