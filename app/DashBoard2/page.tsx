import { Metadata } from "next";

import { CalendarDateRangePicker } from "@/app/DashBoard2/components/date-range-picker";
import { MainNav } from "@/app/DashBoard2/components/main-nav";
import { RecentSales } from "@/app/DashBoard2/components/recent-sales";
import { Search } from "@/app/DashBoard2/components/search";
import TeamSwitcher from "@/app/DashBoard2/components/team-switcher";
import { UserNav } from "@/app/DashBoard2/components/user-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Basis2Data from "../DashBoard/components/Basis2/Basis2Data";
import SystemHealthData from "../DashBoard/components/Basis2/TopBar/SystemHealthData";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className=" flex ">
        {/* <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className=" dark:block"
        /> */}
      </div>
      <div className=" flex-col md:flex overflow-hidden">
        <div className="border-b  overflow-x-scroll ">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 ">
          <div className="flex items-center justify-between space-y-2  overflow-x-scroll">
            <h2 className="text-3xl font-bold tracking-tight ">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button className="">Download</Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4   ">
            <TabsList className="flex  overflow-x-scroll">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 ">
              <SystemHealthData />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 overflow-scroll  ">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 overflow-scroll ">
                  
                      <Basis2Data />
                   
                  </CardContent>
                </Card>
                <Card className="col-span-3  gap-2 overflow-scroll">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
