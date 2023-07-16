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
  CardHeader,
} from "@/components/ui/card";
import toast from "react-hot-toast";
import { z } from "zod";
import { RegionEnum, EnumRegions,Regions, Regions2  } from "@/app/ReportTables/components/TableSettlemets";
import useSWR from "swr";
import { useUser } from "@clerk/nextjs";
import { redirect } from 'next/navigation'



// create  users with the following data posts it to db
// create inputs for name,
// email,
// password: hashedPassword,
// role,
// region,
// clerkid,
// position

// use swr and axios get all positions in api and create an enum of them
// Define the Position enum


const Createuser = () => {
  const [loading, setloading] = useState(false);
  const setsystem = useDashboardStore((state) => state.setSystem);
  const setregion = useRegionStore((state) => state.setRegions);
  const region = useRegionStore((state) => state.regions);
  const { isLoaded, isSignedIn, user } = useUser();


 

  // use swr and axios get all positions in api and create an enum of them
  // fetcher
  
  const fetcher = (url: string) =>  axios.get(url).then((res) => res.data);
  
  const {isLoading,data,error}=useSWR("/api/Users",fetcher)



 
  enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
  }



  

  const FormData = z.object({
   

  
    role: z.nativeEnum(Role).optional().refine((value) => value !== undefined, {
      message: "Please select a valid role",
    }),
    password: z.string().min(6).max(100).refine((value) => value !== undefined, {
      message: "Please enter a valid password",
    }),
 
  
 
  });

  type FormDataschema = z.infer<typeof FormData>;

  const form = useForm<FormDataschema>({
    resolver: zodResolver(FormData),
    defaultValues: {
      password: "",
      role: Role.USER,
    },
  });


  const Onsubmit = async (data: FormDataschema) => {
   
    
    if(user){
    const dataPost = {
      name:user.username,
      email: user.emailAddresses[0].emailAddress,
      password: data.password,
      role: data.role,
      region:region,
      clerkid: user.id,
     
    };

    try {
      setloading(true);
     
      
      const response = await axios.post("/api/Users", dataPost);
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
  }else{
    toast.error("please login")
    redirect('/sign-in')
  
  }
  };
  useEffect(() => {}, [region]);

  return (
    <div className="flex flex-col w-full mr-5 ">
      <Card className="px-5 ">
        <div className="">
          <CardHeader className="">
            <SelectRegion />
          </CardHeader>
          <CardContent className="w-full py-2 pb-4 space-y-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(Onsubmit)}>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                        type="password"
                          disabled={loading}
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                   <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input
                     
                          disabled={loading}
                          placeholder="role"
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
                    create
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
