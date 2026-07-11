
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetTourTypesQuery, useTourTypeRemoveMutation } from "@/redux/features/tour/tour.api";
import { DeleteConfirmation } from "@/components/deleteConfirmation";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { AddTourTypeModal } from "@/components/modules/Admin/AddTourType/AddTourTypeModal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react";


const AddTourType = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const {data} = useGetTourTypesQuery({page:currentPage})
  
    const [removeTourType] = useTourTypeRemoveMutation()

    const handleRemoveTourType = async ( tourId:string )=>{
      const toastId = toast.loading("Deleting")
        try {
    const res = await removeTourType(tourId).unwrap();

    if (res.success) {
      toast.success("Tour Type Deleted Successfully", {id:toastId});
    }
  } catch (error) {
    toast.error("Failed to delete Tour Type");
    console.log(error);
  }

    }

    const totalPages = data?.meta?.totalPage;

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
      { data?.data?.map((item:{ _id:string, name:string} )=> <TableRow>
      
          <TableCell className="font-medium w-full"> {item?.name} </TableCell>

         <TableCell className="font-medium ml-auto"> 
         
            <DeleteConfirmation
             onConfirm={()=> handleRemoveTourType(item._id)}
            >
                    <Button>
               <Trash2 size={18} />
            </Button>
            </DeleteConfirmation>
          
           </TableCell> 
         
        </TableRow>)}
    
      </TableBody>
      
    </Table>


    <div className="mt-4 text-shadow-border" >

      <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious 
       onClick={()=> setCurrentPage((prev)=> prev -1)}
       className = {currentPage === 1 ? 
        "pointer-events-none opacity-50" 
        : " cursor-pointer "}
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink className="animate-bounce" href="#">{currentPage}</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      {/* <PaginationLink href="#" isActive>
        2
      </PaginationLink> */}
    </PaginationItem>
    <PaginationItem>
      {/* <PaginationLink href="#">3</PaginationLink> */}
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext 
        className = {currentPage === totalPages ? 
        "pointer-events-none opacity-50" 
        : " cursor-pointer "}
      onClick={()=> setCurrentPage((prev)=> prev + 1)} />
       
    </PaginationItem>
  </PaginationContent>
</Pagination>



      </div> 

        </div>
    );
};

export default AddTourType;

