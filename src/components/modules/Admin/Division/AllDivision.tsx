/* eslint-disable @typescript-eslint/no-explicit-any */
import { Trash2, MapPin } from "lucide-react";
import { useDeleteTourDivisionMutation, useGetTourDivisionQuery } from "@/redux/features/division/division.api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const AllDivision = () => {
  const { data, isLoading } = useGetTourDivisionQuery(undefined);

  const divisions = data?.data || data || [];

  const  [deleteDivision]  = useDeleteTourDivisionMutation();

  const handleDelete = (id: string) => {
    deleteDivision(id);
    toast.success("Division deleted successfully")
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">All Divisions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-72 rounded-2xl bg-muted animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            All Divisions
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage all tour divisions from one place
          </p>
        </div>
      </div>

      {divisions.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <MapPin className="w-12 h-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold">No divisions found</h3>
            <p className="text-muted-foreground mt-2">
              Create your first division to get started.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division: any) => (
            <Card
              key={division._id}
              className="overflow-hidden rounded-2xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={division.thumbnail}
                  alt={division.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                    Tour Division
                  </span>
                </div>
              </div>

              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {division.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Created: {new Date(division.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(division._id)}
                    className="rounded-xl"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDivision;