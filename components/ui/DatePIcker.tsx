"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { SyntheticEvent } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { SelectSingleEventHandler } from "react-day-picker";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";

export function DatePickerDemo() {
  const dashboard = useDashboardStore((state) => state.dashboard);
  const setDashboard = useDashboardStore((state) => state.setDashboard);
  const [date, setDate] = React.useState<Date>();
  const [isOPen, setisOPen] = React.useState(false);

  const handleselect: SelectSingleEventHandler = (date) => {
    setDate(date);
    date && setDashboard(date);
    setisOPen(false);
  };
  const handleButtonClick = () => {
    setisOPen(!isOPen);
  };

  return (
    <Popover open={isOPen} onOpenChange={setisOPen}>
      <PopoverTrigger asChild>
        <Button
          onClick={handleButtonClick}
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleselect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
