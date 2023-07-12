"use client";

import React from "react";
import { da } from "date-fns/locale";
import Dashcommand from "./Dashcommand";
import BottomAccount from "./BottomAccount";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NavigateMenudash from "./NavigateMenudash";

const Dashboard = () => {
  return (
    <div className=" shadow-none md:flex md:flex-col  text-sm md:text-lg top-5 hidden ">
      <Card className=" flex-grow ">
        <CardHeader>
          <CardTitle className="  font-bold text-2xl"> Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <NavigateMenudash />
        </CardContent>
      </Card>
      {/* <CardFooter className="flex items-end flex-grow">
      <p>Card Footer</p>
    </CardFooter> */}
    </div>
  );
};

export default Dashboard;
