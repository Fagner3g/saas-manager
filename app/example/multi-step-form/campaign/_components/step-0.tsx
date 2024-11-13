"use client";
import { useFormContext } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Step0 = () => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name="name1"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name1</FormLabel>
            <FormControl>
              <Input placeholder="shadcn1" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="name2"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name2</FormLabel>
            <FormControl>
              <Input placeholder="shadcn2" {...field} />
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default Step0;
