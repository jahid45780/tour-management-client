
import { useForm, Controller } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetTourDivisionQuery } from "@/redux/features/division/division.api";
import { useGetTourTypesQuery, useTourCreateMutation } from "@/redux/features/tour/tour.api";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, formatISO } from "date-fns";
import MultipleImageUploader from "@/components/MultipleImageUploader";
import { useState } from "react";
import type { FileMetadata } from "@/hooks/use-file-upload";
import { toast } from "sonner";


type TourFormData = {
  title: string;
  description: string;
  division: string;
  tourType: string;
  startDate: Date;
  endDate: Date;
};


const AddTour = () => {

  const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);

  const { register, handleSubmit, control } =
    useForm<TourFormData>();

  const { data: divisionData } =
    useGetTourDivisionQuery(undefined);

  const { data: tourTypeData } =
    useGetTourTypesQuery(undefined);

  const divisionOptions =
    divisionData?.data?.map(
      (item: { _id: string; name: string }) => ({
        value: item._id,
        label: item.name,
      })
    ) || [];

  const tourTypeOptions =
    tourTypeData?.map(
      (item: { _id: string; name: string }) => ({
        value: item._id,
        label: item.name,
      })
    ) || [];

    const [ addTour ] = useTourCreateMutation()

  const onSubmit = async (data: TourFormData) => {

   const tourData ={
    ...data,
    startDate: formatISO(data.startDate),
    endData: formatISO(data.endDate)
   }

   const formData = new FormData()
   
   formData.append("data", JSON.stringify(tourData))
   images.forEach((image) => formData.append("files", image as File))

    try {
      const res = await addTour(formData).unwrap()
       
      if(res.success){
        toast.success("create tour successfully")
      }
      console.log(res);

    } catch (error) {
      console.log(error);
    }
    
  };

  return (

    <Card className="max-w-7xl shadow-lg border rounded-2xl">
  <CardHeader>
    <CardTitle className="text-2xl font-bold text-center">
      Add New Tour
    </CardTitle>
    <CardDescription className="text-center" >
      Add a new tour to the system
    </CardDescription>
  </CardHeader>

  <CardContent>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* Tour Title  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Tour Title
        </label>

        <Input
          placeholder="Enter tour title"
          className="h-11"
          {...register("title", { required: true })}
        />
      </div>

      {/* Division + Tour Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Division */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Division
          </label>

          <Controller
            name="division"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full h-11">
                  <SelectValue placeholder="Select Division" />
                </SelectTrigger>

                <SelectContent>
                  {divisionOptions?.map(
                    (item: {
                      label: string;
                      value: string;
                    }) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            )}
          />
        </div>

        {/* Tour Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Tour Type
          </label>

          <Controller
            name="tourType"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className="w-full h-11">
                  <SelectValue placeholder="Select Tour Type" />
                </SelectTrigger>

                <SelectContent>
                  {tourTypeOptions?.map(
                    (item: {
                      label: string;
                      value: string;
                    }) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                      >
                        {item.label}
                      </SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            )}
          />
        </div>

      </div>

      {/* date picker  */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
{/* start date */}
     <Controller
  name="startDate"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Start Date
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between text-left font-normal"
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Select Date</span>
            )}

            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            // disabled={(date)=> date < new Date()}
              disabled={(date) =>
    date < new Date(new Date().setHours(0, 0, 0, 0))}
                                                   
          />
        </PopoverContent>
      </Popover>
    </div>
  )}
/>

{/* end date */}

 <Controller
  name="endDate"
  control={control}
  rules={{ required: true }}
  render={({ field }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Start Date
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between text-left font-normal"
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>Select Date</span>
            )}

            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
             disabled={(date) =>
    date < new Date(new Date().setHours(0, 0, 0, 0))}
          />
        </PopoverContent>
      </Popover>
    </div>
  )}
/>

      </div>


                 {/* Description and image uploder  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
      <div className="space-y-2 ">
        <label className="text-sm font-medium">
          Tour Description
        </label>

        <Textarea
          placeholder="Enter tour description"
          className="min-h-[180px]"
          {...register("description", {
            required: true,
          })}
        />
      </div>

      <MultipleImageUploader onChange={setImages} />

     </div>       

      {/* Submit Button Center */}
      <div className="flex justify-center pt-4">
        <Button
          type="submit"
          size="lg"
          className="w-full md:w-60"
        >
          Add Tour
        </Button>
      </div>
    </form>
  </CardContent>
</Card>
  
  );
};

export default AddTour;