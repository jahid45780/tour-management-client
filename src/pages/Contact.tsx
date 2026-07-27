import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white">

      {/* Hero */}
      <section>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-24 text-center">

          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Us
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            We'd love to hear from you. Whether you are planning your next
            adventure or need support with your booking, our travel experts
            are always ready to help.
          </p>

        </div>
      </section>


      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 pb-20">

        <div className="grid lg:grid-cols-2 gap-10">


          {/* Form */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold">
              Send Us a Message
            </h2>

            <p className="mt-3 text-slate-300">
              Fill the form and our team will contact you shortly.
            </p>


            <form className="space-y-6 mt-8">

              {[
                {
                  label:"Full Name",
                  placeholder:"Enter your name",
                  type:"text"
                },
                {
                  label:"Email Address",
                  placeholder:"Enter your email",
                  type:"email"
                },
                {
                  label:"Subject",
                  placeholder:"Booking, Support...",
                  type:"text"
                }
              ].map((item)=>(
                <div key={item.label}>
                  <label className="text-slate-200 font-medium">
                    {item.label}
                  </label>

                  <input
                    type={item.type}
                    placeholder={item.placeholder}
                    className="
                    w-full mt-2 rounded-xl
                    bg-white/10 border border-white/20
                    px-4 py-3 text-white
                    placeholder:text-slate-400
                    outline-none
                    focus:ring-2 focus:ring-cyan-400
                    "
                  />
                </div>
              ))}


              <div>

                <label className="text-slate-200 font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="
                  w-full mt-2 rounded-xl
                  bg-white/10 border border-white/20
                  px-4 py-3 text-white
                  placeholder:text-slate-400
                  outline-none
                  resize-none
                  focus:ring-2 focus:ring-cyan-400
                  "
                />

              </div>


              <button
                className="
                w-full
                bg-gradient-to-r from-cyan-500 to-blue-600
                hover:from-blue-600 hover:to-purple-600
                py-3 rounded-xl
                font-semibold
                flex justify-center items-center gap-2
                transition-all duration-300
                shadow-lg shadow-blue-500/20
                "
              >

                <Send size={18}/>
                Send Message

              </button>


            </form>


          </div>



          {/* Information */}
          <div className="space-y-6">


            <div className="
            bg-white/10 backdrop-blur-xl
            border border-white/10
            rounded-3xl p-8
            shadow-2xl
            ">


              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>



              {[
                {
                  icon:<Phone/>,
                  title:"Phone",
                  text:"+880 1789-635769",
                  color:"bg-blue-500/20 text-blue-400"
                },
                {
                  icon:<Mail/>,
                  title:"Email",
                  text:"support@tourbd.com",
                  color:"bg-green-500/20 text-green-400"
                },
                {
                  icon:<MapPin/>,
                  title:"Office",
                  text:"Dhaka, Bangladesh",
                  color:"bg-red-500/20 text-red-400"
                },
                {
                  icon:<Clock/>,
                  title:"Working Hours",
                  text:"Saturday - Thursday | 9AM - 6PM",
                  color:"bg-orange-500/20 text-orange-400"
                }

              ].map((item)=>(
                <div
                  key={item.title}
                  className="flex gap-5 mb-7"
                >

                  <div
                    className={`
                    w-14 h-14 rounded-2xl
                    flex items-center justify-center
                    ${item.color}
                    `}
                  >
                    {item.icon}
                  </div>


                  <div>

                    <h4 className="text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="text-slate-300 mt-1">
                      {item.text}
                    </p>

                  </div>


                </div>
              ))}


            </div>



            {/* Map */}

            <div className="
            rounded-3xl overflow-hidden
            border border-white/10
            shadow-2xl
            ">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              />

            </div>


          </div>


        </div>

      </section>




      {/* CTA */}

      <section className="
      bg-gradient-to-r from-blue-600 to-purple-700
      ">

        <div className="max-w-7xl mx-auto px-5 py-16 text-center">


          <h2 className="text-4xl font-bold">
            Ready for Your Next Adventure?
          </h2>


          <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
            Explore Bangladesh's most beautiful destinations with our trusted
            tour guides and unforgettable travel experiences.
          </p>

         
         <Link to={"/tours"} >
          <button
          className="
          mt-8
          bg-white text-blue-600
          px-8 py-3 rounded-full
          font-semibold
          flex items-center gap-2
          mx-auto
          hover:bg-slate-100
          transition
          "
          >

            Explore Tours
            <ArrowRight size={18}/>

          </button>
         </Link>

        </div>

      </section>


    </div>
  );
};

export default Contact;