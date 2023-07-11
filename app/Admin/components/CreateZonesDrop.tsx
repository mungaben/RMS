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

const CreateZonesDrop = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >create zones</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Accont</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <CreateZones/>
       
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CreateZonesDrop;
