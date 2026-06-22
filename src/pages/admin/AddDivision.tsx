
import { AddDivisionModal } from "@/components/modules/Admin/Division/AddDivisionModal";
import { Button } from "@/components/ui/button";

const AddDivision = () => {
    return (
        <div>
              <div className=" flex  justify-between m-4" >
        <h1>Tour Division</h1>
        <Button>

        <AddDivisionModal/>     

        </Button>
      </div>


        </div>
    );
};

export default AddDivision;