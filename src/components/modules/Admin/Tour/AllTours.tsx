/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteConfirmation } from "@/components/deleteConfirmation";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useGetAllToursQuery, useTourRemoveMutation } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

const AllTours = () => {
  const { data, isLoading } = useGetAllToursQuery(undefined);
  const [deleteTour] = useTourRemoveMutation();

  const tours = data || [];
 
  const handleDelete = async (id: string) => {

    try {
      await deleteTour(id).unwrap();
      toast("Tour deleted successfully");
    } catch (error) {
      console.error(error);
      toast("Failed to delete tour");
    }
  };

  if (isLoading) {
    return <Loading/>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">All Tours</h1>

      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
        <table className="min-w-full text-sm text-slate-200">
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th className="px-4 py-3 text-left">Image</th>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Slug</th>
              <th className="px-4 py-3 text-left">Start Date</th>
              <th className="px-4 py-3 text-left">End Date</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {tours.map((tour: any) => (
              <tr
                key={tour._id}
                className="border-t border-slate-800 hover:bg-slate-900/60"
              >
                <td className="px-4 py-3">
                  <img
                    src={tour.images?.[0]}
                    alt={tour.title}
                    className="h-14 w-20 rounded-md object-cover"
                  />
                </td>

                <td className="px-4 py-3 font-medium">{tour.title}</td>

                <td className="px-4 py-3 text-slate-400">{tour.slug}</td>

                <td className="px-4 py-3">
                  {new Date(tour.startDate).toLocaleDateString()}
                </td>

                <td className="px-4 py-3">
                  {new Date(tour.endDate).toLocaleDateString()}
                </td>

                <td className="px-4 py-3">
                       <DeleteConfirmation
                         onConfirm={()=> handleDelete(tour._id)}
                                               >
                         <Button>
                         <Trash2 size={18} />
                     </Button>
               </DeleteConfirmation>

                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tours.length === 0 && (
          <div className="p-6 text-center text-slate-400">
            No tours found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTours;