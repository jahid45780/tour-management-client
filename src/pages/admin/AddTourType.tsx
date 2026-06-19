
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetTourTypesQuery } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { AddTourTypeModal } from "./AddTourTypeModal";







const AddTourType = () => {

    const {data} = useGetTourTypesQuery(undefined)
    console.log(data);

    return (
        <div className=" w-full max-w-7xl mx-auto px-5" >

      <div className=" flex  justify-between m-4" >
        <h1>Tour Type</h1>
        <Button>
       <AddTourTypeModal/>
        </Button>
      </div>

       <Table className=" border border-muted rounded-md shadow-2xl" >
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
    
      <TableBody>
      {  data?.map((item:{name:string} )=> <TableRow>
      
          <TableCell className="font-medium w-full"> {item?.name} </TableCell>

         <TableCell className="font-medium ml-auto"> 
            <Button>
               <Trash2 size={18} />
            </Button>
           </TableCell> 
         
        </TableRow>)}
    
      </TableBody>


      
    </Table>
        </div>
    );
};

export default AddTourType;

