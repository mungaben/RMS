


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
import SelectZone from "@/app/DashBoard/components/Basis2/SelectedZone";
import SelectZoneData from "@/app/DashBoard/components/Basis2/SelectZone";
import { useZoneNameStore } from "@/app/ReportTables/lib/store/ZoneNameStore";


const CreateZoneName = () => {
  const [loading, setloading] = useState(false);
  const setsystem = useDashboardStore((state) => state.setSystem);
  const setregion = useRegionStore((state) => state.setRegions);
  const region = useRegionStore((state) => state.regions);
  const zoneName=useZoneNameStore((state)=>state.zoneNames)


  console.log("zoneName in create zone name",zoneName);
  
  const FormData = z.object({
    name: z.string().min(2).refine(value => value !== undefined, {
      message: "Please select a valid zone",
    }),
  });
  
  type FormDataschema = z.infer<typeof FormData>;

  const form = useForm<FormDataschema>({
    resolver: zodResolver(FormData),
    defaultValues: {
      name: "",
    },
  });
  const Onsubmit = async (data: FormDataschema) => {
    console.log("data in Create zones", data, region);
    const dataPost = {
      name: data.name,
      id: zoneName,
    };

    try {
      setloading(true);
      const response = await axios.post("/api/ZoneNames", dataPost);
      console.log(
        "response in create zones",
        response.data,
        response.data.statusbar
      );

      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
      }

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log("error in create zones", error);
      toast.error("something went wrong");
    } finally {
     
      setloading(false);
    }
  };
  useEffect(() => {
    console.log("region in create zones", region);
  }, [region]);

  return (
    <div className="flex flex-col w-full mr-5 ">
    <Card className="px-5 ">
      <div className="">
        <CardHeader className="">
          <SelectZoneData/>
        </CardHeader>
        <CardContent className="w-full py-2 pb-4 space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(Onsubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel> Zone Name</FormLabel>
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
        <p>create zoneNames</p>
      </CardFooter>
    </Card>
    </div>
  );
};

export default CreateZoneName;
