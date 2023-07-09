"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";


const ModalStore = () => {
 
  const [loading, setloading] = useState(false);

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
    try {
      setloading(true);
      const response= await axios.post("/api/store",data);
     
      toast.success("store created successfully");


      
    } catch (error) {
      console.log(error);
      toast.error("store creation failed");
      
      
    }finally{
      throw new Error("error")
      setloading(false);
    }
  };

  return (
  
      <div>
        <div className="py-2 pb-4 space-y-4 ">
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
                        placeholder="eaxample  e-com store"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-end w-full pt-6 space-x-2 ">
                <Button
                  disabled={loading}
                  variant="outline"
                  
                >
                  cancel
                </Button>
                <Button disabled={loading} type="submit">
                  continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
   
  );
};

export default ModalStore;
