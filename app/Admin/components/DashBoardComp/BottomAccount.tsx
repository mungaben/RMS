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

const BottomAccount = () => {
  return (
    <div className=" mb-0 bottom-0">
      <Command>
        <CommandList>
          <CommandGroup heading="Settings" className=" bottom-0 mb-0">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default BottomAccount;
