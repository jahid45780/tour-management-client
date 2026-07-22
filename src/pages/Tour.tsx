import TourFilters from "@/components/modules/Tours/TourFilters";
import Loading from "@/components/shared/Loading";
import { Button } from "@/components/ui/button";
import { useGetAllToursQuery } from "@/redux/features/tour/tour.api";
import { Link, useSearchParams } from "react-router-dom";


const Tour = () => {
      const [searchParams] = useSearchParams();

  const division = searchParams.get("division") || undefined;
  const tourType = searchParams.get("tourType") || undefined;

  const { data, isLoading } = useGetAllToursQuery({ division, tourType });

  if (isLoading) {
  return <Loading/>
}
 
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    {/* Filters */}
    <aside className="lg:col-span-3">
      <TourFilters />
    </aside>

    {/* Tours */}
  <main className="lg:col-span-9 space-y-6">
  {data && data.length > 0 ? (
    data.map((item) => (
      <div
        key={item.slug}
        className="overflow-hidden rounded-xl border bg-background shadow-sm transition hover:shadow-lg"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="w-full lg:w-2/5">
            <img
              src={item.images[0]}
              alt={item.title}
              className="h-64 sm:h-80 lg:h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold">
              {item.title}
            </h2>

            <p className="mt-3 text-sm sm:text-base text-muted-foreground line-clamp-5">
              {item.descriptions}
            </p>

            {/* Price */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-2xl font-bold text-primary">
                From ৳{item.costFrom?.toLocaleString()}
              </h3>

              <span className="text-sm text-muted-foreground">
                Max {item.maxGuest} Guests
              </span>
            </div>

            {/* Details */}
            <div className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              <div>
                <span className="font-semibold">From:</span>{" "}
                {item.departureLocation}
              </div>

              <div>
                <span className="font-semibold">To:</span>{" "}
                {item.arrivalLocation}
              </div>

              <div>
                <span className="font-semibold">Duration:</span>{" "}
                {item.tourPlan.length} Days
              </div>

              <div>
                <span className="font-semibold">Min Age:</span>{" "}
                {item.minAge}+
              </div>
            </div>

            {/* Amenities */}
            <div className="mt-5 flex flex-wrap gap-2">
              {item.amenities.slice(0, 3).map((amenity, index) => (
                <span
                  key={index}
                  className="rounded-full bg-muted px-3 py-1 text-xs"
                >
                  {amenity}
                </span>
              ))}

              {item.amenities.length > 3 && (
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  +{item.amenities.length - 3} More
                </span>
              )}
            </div>

            {/* Button */}
            <div className="mt-6">
              <Button asChild className="w-full h-11">
                <Link to={`/tours/${item._id}`}>
                  View Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 p-8 text-center">
      <h2 className="text-3xl font-bold">😔 No Tours Found</h2>

      <p className="mt-3 max-w-md text-muted-foreground">
        Sorry! There are no tours available for the selected category.
        Please try another filter or view all tours.
      </p>

      <Button asChild className="mt-6">
        <Link to="/tours">View All Tours</Link>
      </Button>
    </div>
  )}
</main>
  </div>
</div>
    );
};

export default Tour;