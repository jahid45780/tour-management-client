/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useUpdateProfileMutation } from "@/redux/features/stats/allUser/allUser.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SingleImageUploader from "@/components/SingleImageUploader";
import type { UFormValues } from "@/types";


const UpdatedProfileModal = () => {
  const [open, setOpen] = useState(false);

   const [image, setImage] = useState<File | null>(null);
  
   const { data: userInfo } = useUserInfoQuery(undefined);

  const user = userInfo?.data;

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<UFormValues>();

  useEffect(() => {
    if (user) {
      reset({
        address: user.address || "",
        phone: user.phone || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (formData: UFormValues) => {


      const data = new FormData();

    data.append("address", formData.address);
    data.append("phone", formData.phone);

    if (image) {
      data.append("file", image); 
    }

    try {
      await updateProfile({
        id: user._id,
        data: data,
      }).unwrap();

      toast.success("Profile updated successfully");

      setOpen(false);
    } catch (err: any) {
      console.log(err)
      toast.error(err?.data?.message || "Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
     <div className="space-y-2">
  <label className="text-sm font-medium">
    Address
  </label>

  <Input
    {...register("address", {
      required: "Address is required",
      minLength: {
        value: 3,
        message: "Address must be at least 3 characters",
      },
    })}
    placeholder="Enter your address"
  />

  {errors.address && (
    <p className="text-sm text-red-500">
      {errors.address.message}
    </p>
  )}
</div>

<div className="space-y-2">
  <label className="text-sm font-medium">
    Phone Number
  </label>

  <Input
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[+]?[\d\s()-]{8,20}$/,
        message: "Please enter a valid phone number",
      },
    })}
    placeholder="Enter your phone number"
  />

  {errors.phone && (
    <p className="text-sm text-red-500">
      {errors.phone.message}
    </p>
  )}
</div>

<div>
  <SingleImageUploader
  onChange={setImage}
  />
</div>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                type="button"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdatedProfileModal;