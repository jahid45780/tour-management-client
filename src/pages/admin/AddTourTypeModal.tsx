

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
import { useTourTypeCreateMutation } from "@/redux/features/tour/tour.api";
import type { TTourTypeForm } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "sonner";



export function AddTourTypeModal() {
  const { register, handleSubmit, reset } = useForm<TTourTypeForm>();

  const [addTourType] = useTourTypeCreateMutation()

  const onSubmit = async (data: TTourTypeForm) => {
  const res = await addTourType({name:data.name}).unwrap()

  if(res.success){
     toast.success("tour add")
  }
    reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Tour Type</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Add Tour Type</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Tour Type Name
            </label>

            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter tour type name"
              className="w-full h-12 rounded-xl border px-4 outline-none"
            />
          </div>

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
