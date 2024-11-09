"use client";

import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Avatar } from "@nextui-org/avatar";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-3 bg-content2 m-3 rounded-2xl">
      <h1>Chess Hub</h1>
      <div className="flex items-center gap-4">
        <span>Martin Cola</span>

        <Popover placement="bottom-end">
          <PopoverTrigger>
            <Avatar name="MC" isBordered className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="flex items-center gap-4">
                Tema: <ThemeSwitch />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </nav>
  );
}
