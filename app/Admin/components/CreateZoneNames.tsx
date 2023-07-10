"use client";

import SelectSystem from "@/app/DashBoard/components/Basis2/SelectSystem";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";
import SelectRegion from "@/app/DashBoard/components/Basis2/SelectedRegion";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";
import { useToast } from "@/components/ui/use-toast";
import error from '../../ReportTables/error';
import toast from "react-hot-toast";
import { useZoneStore } from "@/app/ReportTables/lib/store/Zonestore";
import SelectZone from "@/app/DashBoard/components/Basis2/SelectedZone";

const ModalStore = () => {
  const [loading, setloading] = useState(false);
  const setsystem = useDashboardStore((state) => state.setSystem);
const zone=useZoneStore((state)=>state.zones)
const setZone=useZoneStore((state)=>state.setZones)

 
  
  const FormData = z.object({
    name:z.string().nonempty().min(3).max(20).refine(value => value !== undefined, {
        message: "Please select a valid zone",
    }),
  });
  
  type FormDataschema = z.infer<typeof FormData>;

  const form = useForm<FormDataschema>({
    resolver: zodResolver(FormData),
    defaultValues: {
      name: "kayole",
    },
  });
  const Onsubmit = async (data: FormDataschema) => {
    console.log("data in Create Zonename", data, zone);
    const dataPost = {
      name: data.name,
      zonename: zone,
    };

    try {
      setloading(true);
      const response = await axios.post("/api/ZoneName", dataPost);
      console.log(
        "response in create Zonename",
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
      console.log("error in create Zonename", error);
      toast.error("something went wrong");
    } finally {
     
      setloading(false);
    }
  };
  useEffect(() => {
    console.log("region in create Zonename", zone);
  }, [zone]);

  return (
    <Card className="left-0 right-0 mx-auto bg-red-200/50">
      <div className="flex flex-col justify-center mx-auto ">
        <CardHeader className="flex items-start justify-start">
          <SelectZone/>
        </CardHeader>
        <CardContent className="py-2 pb-4 space-y-4 ">
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
                <Button disabled={loading} variant="outline">
                  cancel
                </Button>
                <Button disabled={loading} type="submit">
                  continue
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </div>
      <CardFooter>
        <p>create Zonename</p>
      </CardFooter>
    </Card>
  );
};

export default ModalStore;
