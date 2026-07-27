/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useGetTourDivisionQuery } from "@/redux/features/division/division.api";
import { useState } from "react";
import { Link } from "react-router-dom";


const HeroSection = () => {

  const [selectedDivision, setSelectedDivision] = useState<
    string | undefined
  >(undefined);



  const { data: divisionData, isLoading } =
    useGetTourDivisionQuery(undefined);



  const divisionOption =
    divisionData?.data?.map(
      (item: {
        _id: string;
        name: string;
      }) => ({
        label: item.name,
        value: item._id,
      })
    );




  return (

    <section
      className="
      relative
      min-h-[calc(100vh-80px)]
      overflow-hidden
      flex
      items-center
      "
    >


      {/* Background Image */}

      <img
        src="
        https://images.unsplash.com/photo-1526772662000-3f88f10405ff
        "
        alt="Bangladesh Travel"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "
      />



      {/* Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-slate-950/95
        via-slate-950/80
        to-purple-950/80
        "
      />



      {/* Content */}

      <div
        className="
        relative
        z-10
        container
        mx-auto
        px-5
        lg:px-8
        "
      >


        <div
          className="
          max-w-5xl
          "
        >


          <h1
            className="
            text-5xl
            md:text-7xl
            font-extrabold
            leading-[1.1]
            tracking-tight
            text-white
            "
          >

            Explore the beauty of


            <span
              className="
              block
              mt-2
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Bangladesh
            </span>


          </h1>




          <p
            className="
            mt-7
            max-w-2xl
            text-lg
            md:text-xl
            text-slate-200
            leading-relaxed
            "
          >

            Discover breathtaking destinations, hidden gems,
            and unforgettable travel experiences across Bangladesh.
            Start your journey with TourWave today.

          </p>





          {/* Search Box */}


          <div
            className="
            mt-10
            flex
            flex-col
            md:flex-row
            gap-4
            max-w-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-4
            shadow-2xl
            "
          >



            <Select
              onValueChange={(value)=>
                setSelectedDivision(value)
              }
            >


              <SelectTrigger
                className="
                h-14
                flex-1
                bg-white
                text-slate-800
                rounded-xl
                border-none
                "
              >

                <SelectValue
                  placeholder="Choose your destination"
                />

              </SelectTrigger>



              <SelectContent>

                <SelectGroup>

                  <SelectLabel>
                    Divisions
                  </SelectLabel>


                  {
                    isLoading ? (

                      <SelectItem
                        value="loading"
                        disabled
                      >
                        Loading...
                      </SelectItem>


                    ) : (


                      divisionOption?.map(
                        (
                          item:{
                            value:string;
                            label:string
                          }
                        )=>(


                          <SelectItem
                            key={item.value}
                            value={item.value}
                          >

                            {item.label}

                          </SelectItem>


                        )
                      )


                    )
                  }


                </SelectGroup>


              </SelectContent>


            </Select>





            {
              selectedDivision ? (


                <Button
                  asChild
                  className="
                  h-14
                  px-10
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  hover:from-blue-600
                  hover:to-purple-600
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  "
                >

                  <Link
                    to={`/tours?division=${selectedDivision}`}
                  >

                    Search Tours

                  </Link>


                </Button>



              ) : (


                <Button
                  disabled
                  className="
                  h-14
                  px-10
                  rounded-xl
                  "
                >

                  Search Tours

                </Button>


              )
            }




          </div>




          {/* Small Stats */}

          <div
            className="
            mt-10
            flex
            gap-8
            text-white
            "
          >

            <div>

              <h3
                className="
                text-3xl
                font-bold
                "
              >
                64+
              </h3>

              <p className="text-slate-300">
                Destinations
              </p>

            </div>



            <div>

              <h3
                className="
                text-3xl
                font-bold
                "
              >
                500+
              </h3>

              <p className="text-slate-300">
                Happy Travelers
              </p>

            </div>



            <div>

              <h3
                className="
                text-3xl
                font-bold
                "
              >
                24/7
              </h3>

              <p className="text-slate-300">
                Support
              </p>

            </div>


          </div>




        </div>


      </div>


    </section>

  );
};


export default HeroSection;