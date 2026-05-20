
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(100, "Name must be at most 100 characters."),

    email: z
      .string()
      .email("Please enter a valid email address."),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters."),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;


const RegisterFrom = () => {


  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    
    const userInfo = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    
    try {
      await register(userInfo).unwrap();
      toast.success("Register successfully! please login to continue")
      navigate("/verify")
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        {/* Name */}
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Name
              </label>

              <Input
                {...field}
                id={field.name}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your name"
                autoComplete="off"
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Email */}
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <Input
                {...field}
                id={field.name}
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your email"
                autoComplete="off"
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <Input
                {...field}
                id={field.name}
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your password"
                autoComplete="off"
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Confirm Password */}
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <div>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium"
              >
                Confirm Password
              </label>

              <Input
                {...field}
                id={field.name}
                type="password"
                aria-invalid={fieldState.invalid}
                placeholder="Confirm your password"
                autoComplete="off"
              />

              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegisterFrom;