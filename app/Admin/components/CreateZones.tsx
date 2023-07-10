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

const ModalStore = () => {
  const [loading, setloading] = useState(false);
  const setsystem = useDashboardStore((state) => state.setSystem);
  const setregion = useRegionStore((state) => state.setRegions);
  const region = useRegionStore((state) => state.regions);

  const FormData = z.object({
    name: z.string().min(2, "name must be at least 2 characters"),
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
      regionname: region,
    };

    try {
      setloading(true);
      const response = await axios.post("/api/Zones", dataPost);
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
    <Card className="left-0 right-0 mx-auto bg-red-200/50">
      <div className="flex flex-col justify-center mx-auto ">
        <CardHeader className="flex items-start justify-start">
          <SelectRegion />
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
        <p>create zones</p>
      </CardFooter>
    </Card>
  );
};

export default ModalStore;
