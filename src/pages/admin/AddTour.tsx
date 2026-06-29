
import { useForm, Controller, useFieldArray } from "react-hook-form";

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
import { useGetTourTypesQuery, useTourCreateMutation} from "@/redux/features/tour/tour.api";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDownIcon, Plus, Trash2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, formatISO } from "date-fns";
import MultipleImageUploader from "@/components/MultipleImageUploader";
import { useState } from "react";
import type { FileMetadata } from "@/hooks/use-file-upload";
import { toast } from "sonner";


type TourFormData = {
  title: string;
  descriptions: string;
  division: string;
  tourType: string;
  startDate: Date;
  endDate: Date;
  location:string;
  departureLocation:string;
  arrivalLocation:string;
  maxGuest:number;
  minAge:number;
  costFrom:number;
    included: {
    value: string;
  }[];
   excluded: {
    value: string;
  }[];
   amenities: {
    value: string;
  }[];
     tourPlan: {
    value: string;
  }[];

};


const AddTour = () => {

  const [images, setImages] = useState<(File | FileMetadata)[] | []>([]);

  const { register, handleSubmit, reset, control } =
    useForm<TourFormData>();

    const {fields, append, remove} = useFieldArray({
          control,
          name:"included"
    })

        const {
          fields:excludedFields,
          append:excludedAppend,
           remove:excludedRemove
        } = useFieldArray({
          control,
          name:"excluded"
    })

      const {
          fields:amenitiesFields,
          append:amenitiesAppend,
           remove:amenitiesRemove
        } = useFieldArray({
          control,
          name:"amenities"
    })

        const {
          fields:tourPlanFields,
          append:tourPlanAppend,
           remove:tourPlanRemove
        } = useFieldArray({
          control,
          name:"tourPlan"
    })


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
    costFrom: Number(data.costFrom),
    maxGuest: Number(data.maxGuest),
    minAge: Number(data.minAge),
    startDate: formatISO(data.startDate),
    endDate: formatISO(data.endDate),
    included:data.included.map((item:{value:string})=>item.value),
    excluded:data.excluded.map((item:{value:string})=>item.value),
    amenities:data.amenities.map((item:{value:string})=>item.value),
    tourPlan:data.tourPlan.map((item:{value:string})=>item.value)
   }

   console.log(tourData);

   const formData = new FormData()
   
   formData.append("data", JSON.stringify(tourData))
   images.forEach((image) => formData.append("files", image as File))

    try {
      const res = await addTour(formData).unwrap()
       
      if(res.success){
        toast.success("create tour successfully")
        reset()
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

      {/* location and  tourPrice */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
           {/* location  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Location
        </label>

        <Input
          placeholder="Enter tour location"
          {...register("location", { required: true })}
        />
      </div>

         {/* Price  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Cost
        </label>

        <Input
          placeholder="Enter Tour Price"
          type="number"
          {...register("costFrom", { required: true, valueAsNumber: true, })}
        />
      </div>

      </div>

         {/* departureLocation and  arrivalLocation */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
           {/* departureLocation  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Departure Location
        </label>

        <Input
          placeholder="Enter tour departureLocation"
          defaultValue={"Dhaka"}
          {...register("departureLocation", { required: true })}
        />
      </div>

         {/* arrivalLocation  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Arrival Location
        </label>

        <Input
          placeholder="Enter Tour arrivalLocation"
           defaultValue={"USA"}
          {...register("arrivalLocation", { required: true })}
        />
      </div>

      </div>


        {/* maxGuest and  minAge */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
           {/* maxGuest  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Max Guest
        </label>

        <Input
          placeholder="Enter tour location"
          type="number"
          {...register("maxGuest", { required: true, valueAsNumber: true, })}
        />
      </div>

         {/* Price  */}
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Min Age
        </label>

        <Input
          placeholder="Enter Tour Price"
          type="number"
          {...register("minAge", { required: true, valueAsNumber: true, })}
        />
      </div>

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
          {...register("descriptions", {
            required: true,
          })}
        />
      </div>

      <MultipleImageUploader onChange={setImages} />

     </div> 

     <div className=" border-t border-muted w-full" ></div>  

{/* included */}
     <div>

  <div className=" flex items-center justify-between " >

          <label className="text-sm font-bold">
        Included
      </label>

      <Button 
      type="button"
      size="icon"
      onClick={()=> append({value:""})} >
        <Plus/>
      </Button>

  </div>
  
   <div className=" flex-1 " >
  {fields.map((item, index) => (
  <div key={item.id} className="space-y-2 flex gap-2 mt-2 ">
  

    <Input
      placeholder="Enter included item"
      {...register(`included.${index}.value` as const, {
        required: true,
      })}
    />
  
  <Button
   type="button"
    size="icon"
    onClick={()=> remove(index)}
  >
      <Trash2/>
    </Button>
  
  
  </div>
))}
</div>


      </div>   

      {/* excluded */}
     <div>

  <div className=" flex items-center justify-between " >

          <label className="text-sm font-bold">
        Excluded
      </label>

      <Button 
      type="button"
      size="icon"
      onClick={()=> excludedAppend({value:""})} >
        <Plus/>
      </Button>

  </div>
  
   <div className=" flex-1 " >
  {excludedFields.map((item, index) => (
  <div key={item.id} className="space-y-2 flex gap-2 mt-2 ">
  

    <Input
      placeholder="Enter excluded item"
      {...register(`excluded.${index}.value` as const, {
        required: true,
      })}
    />
  
  <Button
   type="button"
    size="icon"
    onClick={()=> excludedRemove(index)}
  >
      <Trash2/>
    </Button>
  
  
  </div>
))}
</div>


      </div>  

       {/* amenities */}
     <div>

  <div className=" flex items-center justify-between " >

          <label className="text-sm font-bold">
        Amenities
      </label>

      <Button 
      type="button"
      size="icon"
      onClick={()=> amenitiesAppend({value:""})} >
        <Plus/>
      </Button>

  </div>
  
   <div className=" flex-1 " >
  {amenitiesFields.map((item, index) => (
  <div key={item.id} className="space-y-2 flex gap-2 mt-2 ">
  

    <Input
      placeholder="Enter amenities item"
      {...register(`amenities.${index}.value` as const, {
        required: true,
      })}
    />
  
  <Button
   type="button"
    size="icon"
    onClick={()=> amenitiesRemove(index)}
  >
      <Trash2/>
    </Button>
  
  
  </div>
))}
</div>


      </div>  

       {/* tourPlan */}
     <div>

  <div className=" flex items-center justify-between " >

          <label className="text-sm font-bold">
       Tour Plan
      </label>
      <Button 
      type="button"
      size="icon"
      onClick={()=> tourPlanAppend({value:""})} >
        <Plus/>
      </Button>

  </div>
  
   <div className=" flex-1 " >
  {tourPlanFields.map((item, index) => (
  <div key={item.id} className="space-y-2 flex gap-2 mt-2 ">
  

    <Input
      placeholder="Enter Tour item"
      {...register(`tourPlan.${index}.value` as const, {
        required: true,
      })}
    />
  
  <Button
   type="button"
    size="icon"
    onClick={()=> tourPlanRemove(index)}
  >
      <Trash2/>
    </Button>
  
  
  </div>
))}
</div>


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