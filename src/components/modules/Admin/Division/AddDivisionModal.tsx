

import SingleImageUploader from "@/components/SingleImageUploader";
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
import { Textarea } from "@/components/ui/textarea";
import type { TDivisionForm } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";



export function AddDivisionModal() {
  const { register, handleSubmit } = useForm<TDivisionForm>();
 const [image, setImage] = useState<File | null>(null);


  const onSubmit = async (data:TDivisionForm) => {

      // console.log(data);
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("file", image as File)
  
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Tour Division</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Division</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Tour Division
            </label>

            <Input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter tour type name"
              className="w-full h-12 rounded-xl border px-4  outline-none"
            />
          </div>

           <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Tour Division
            </label>

            <Textarea
              {...register("description", { required: true })}
              placeholder="Enter tour Description"
              className="w-full h-12 rounded-xl border px-4  outline-none"
            />
          </div>
          
            <SingleImageUploader onChange={setImage} />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button type="submit">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
        
      </DialogContent>
    </Dialog>


  );
}
