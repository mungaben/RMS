"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  Command,
} from "@/components/ui/command";
import Link from "next/link";

const Dashcommand = () => {
  return (
    <div className=" flex space-y-5 h-full mb-0 bottom-0">
      <Command className=" my-5 flex mb-0">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Add To DB">
            <CommandItem className=" my-5 bg-blue-400/70">
              <Link
                className=" flex justify-start items-start text-lg"
                href={"/"}
              >
                Register user
              </Link>
            </CommandItem>
            <CommandItem className=" my-5">
              <Link
                className=" flex justify-start items-start text-lg"
                href={"/"}
              >
                Add Region
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandGroup>
            <CommandItem className=" my-5">
              <Link
                className=" flex justify-start items-start text-lg"
                href={"/"}
              >
                Add Zone
              </Link>
            </CommandItem>
            <CommandItem className=" my-5">
              <Link
                className=" flex justify-start items-start text-lg"
                href={"/"}
              >
                Add ZoneNames
              </Link>
            </CommandItem>
            <CommandItem className=" my-5">
              <Link
                className=" flex justify-start items-start text-lg"
                href={"/"}
              >
                Create Positions
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </Command>
    </div>
  );
};

export default Dashcommand;
