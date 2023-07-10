"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CreateZones from "./CreateZones";
import CreateZoneNames from "./CreateZoneNames";

const CreateZonesDrop = () => {
  return (
    <div className="">
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <CreateZoneNames />
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  );
};

export default CreateZonesDrop;
