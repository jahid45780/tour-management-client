/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const RegisterFrom = () => {

  const form = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
     <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <Input
        placeholder="Name"
        {...form.register("name")}
      />

      <Input
        placeholder="Email"
        {...form.register("email")}
      />

      <Input
        type="password"
        placeholder="Password"
        {...form.register("password")}
      />

      <Button type="submit">
        Register
      </Button>
    </form>
    </div>
  );
};

export default RegisterFrom;


