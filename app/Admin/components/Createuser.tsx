"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import SelectRegion from "@/app/DashBoard/components/Basis2/SelectedRegion";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { z } from "zod";


// create  users with the following data posts it to db 
// create inputs for name,
                // email,
                // password: hashedPassword,
                // role,
                // region,
                // clerkid,
                // position

const Createuser = () => {
  const [loading, setloading] = useState(false);
  const setsystem = useDashboardStore((state) => state.setSystem);
  const setregion = useRegionStore((state) => state.setRegions);
  const region = useRegionStore((state) => state.regions);

  const zoneEnum = ["Zone1", "Zone2", "Zone3", "Zone4", "Zone5", "Zone6"] as const;
  type ZoneEnum = typeof zoneEnum[number];
  
  const FormData = z.object({
    name: z.enum(zoneEnum).refine(value => value !== undefined, {
      message: "Please select a valid zone",
    }),
  });
  
  type FormDataschema = z.infer<typeof FormData>;

  const form = useForm<FormDataschema>({
    resolver: zodResolver(FormData),
    defaultValues: {
      name: "Zone1",
    },
  });
  
  const Onsubmit = async (data: FormDataschema) => {

    const dataPost = {
      name: data.name,
      regionname: region,
    };

    try {
      setloading(true);
      const response = await axios.post("/api/Zones", dataPost);
      // console.log(
      //   "response in create zones",
      //   response.data,
      //   response.data.statusbar
      // );

      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
      }

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }
    } catch (error) {

      toast.error("something went wrong");
    } finally {
     
      setloading(false);
    }
  };
  useEffect(() => {

  }, [region]);

  return (
    <div className="w-full  flex flex-col mr-5  ">
    <Card className=" px-5">
      <div className="">
        <CardHeader className="">
          <SelectRegion />
        </CardHeader>
        <CardContent className="py-2 pb-4 space-y-4  w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(Onsubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nmae</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Regionname"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end w-full pt-6 space-x-2 ">
                {/* <Button disabled={loading} variant="outline">
                  cancel
                </Button> */}
                <Button disabled={loading} type="submit" variant="outline">
                  continue
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </div>
      <CardFooter>
        <p>create zones</p>
      </CardFooter>
    </Card>
    </div>
  );
};

export default Createuser;
