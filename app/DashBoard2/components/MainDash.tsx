import Basis2Data from "@/app/DashBoard/components/Basis2/Basis2Data";
import SystemHealthData from "@/app/DashBoard/components/Basis2/TopBar/SystemHealthData";
import Sytem from "@/app/Details/components/Sytem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";

const MainDash = () => {
  return (
    <>
      <div className="flex ">
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
      <div className="flex-col overflow-hidden  md:flex">
        <div className="flex-1 p-8 pt-6 space-y-4 ">
          {/* <div className="flex items-center justify-between space-y-2 overflow-x-scroll">
            <h2 className="text-3xl font-bold tracking-tight ">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button className="">Download</Button>
            </div>
          </div> */}
          <Tabs defaultValue="overview" className="space-y-4 ">
            {/* <TabsList className="flex overflow-x-scroll">
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
            </TabsList> */}
            <TabsContent value="overview" className="space-y-4 ">
              <SystemHealthData />

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 overflow-scroll ">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2 overflow-scroll ">
                    <Basis2Data />
                  </CardContent>
                </Card>
                <Card className="col-span-3 gap-2 overflow-scroll">
                  <CardHeader>
                    <CardTitle>Systems</CardTitle>
                    <CardDescription>Important Details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Sytem />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default MainDash;
