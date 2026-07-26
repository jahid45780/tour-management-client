import {
  ArrowRight,
  Globe,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <MapPinned className="w-10 h-10 text-blue-600" />,
    title: "Curated Destinations",
    description:
      "Explore the most beautiful and carefully selected travel destinations across Bangladesh.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-emerald-600" />,
    title: "Safe & Secure",
    description:
      "Your bookings and personal information are protected with secure technology.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-rose-600" />,
    title: "Trusted Service",
    description:
      "Thousands of travelers trust us for unforgettable travel experiences.",
  },
];

const stats = [
  {
    number: "500+",
    title: "Happy Travelers",
  },
  {
    number: "120+",
    title: "Tour Packages",
  },
  {
    number: "35+",
    title: "Tour Guides",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white + text-slate-300">

      {/* Hero */}
  <section className="relative overflow-hidden bg-gradient-to-br from-black-700 via-gray-700 to-purple-700">
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative max-w-7xl mx-auto px-6 py-24">

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}
      <div>

        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-white text-sm">
          <MapPinned size={18} />
          Explore Bangladesh Like Never Before
        </span>

        <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Travel More.
          <br />
          Explore Better.
        </h1>

        <p className="mt-6 text-blue-100 text-lg leading-8">
          Discover breathtaking destinations, trusted guides,
          unforgettable experiences, and seamless online booking
          — all in one place.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition flex items-center gap-2">
            Explore Tours
            <ArrowRight size={18} />
          </button>

          <button className="border border-white/40 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
            Learn More
          </button>

        </div>

      </div>

      {/* Right */}

      <div className="hidden lg:flex justify-center">

        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900"
          alt="Travel"
          className="rounded-3xl shadow-2xl h-[480px] object-cover"
        />

      </div>

    </div>

  </div>
</section>

      {/* About */}

  <section className="max-w-7xl mx-auto px-6 py-24">

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* Left */}

    <div>

      <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-medium">
        About Us
      </span>

      <h2 className="mt-6 text-5xl font-extrabold leading-tight">
        Your Trusted
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Travel Partner
        </span>
      </h2>

      <p className="mt-6 text-slate-300 leading-8">
        Our Tour Management platform helps travelers discover
        breathtaking destinations, compare tour packages,
        and enjoy seamless online booking with confidence.
      </p>

      <p className="mt-5 text-slate-400 leading-8">
        From relaxing family vacations to thrilling adventures,
        we ensure every journey becomes a memorable experience.
      </p>

    </div>

    {/* Right */}

    <div className="grid grid-cols-2 gap-5">

      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center hover:-translate-y-2 hover:border-blue-500 transition-all duration-300"
        >
          <h3 className="text-5xl font-bold text-cyan-400">
            {item.number}
          </h3>

          <p className="mt-3 text-slate-300">
            {item.title}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

      {/* Features */}

  <section className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-center">

        <h2 className="text-5xl font-bold text-white">
            Why Choose Us?
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-slate-300">
            Everything you need for a secure, memorable and hassle-free journey.
        </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {features.map((feature) => (

            <div
                key={feature.title}
                className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >

                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-8">
                    {feature.description}
                </p>

            </div>

        ))}

    </div>

</section>

      {/* Mission & Vision */}

   <section className="py-24">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">

<div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10">

<Globe className="text-cyan-400 w-12 h-12"/>

<h3 className="mt-6 text-3xl font-bold">
Our Mission
</h3>

<p className="mt-5 text-slate-300 leading-8">
To simplify travel planning through modern technology,
trusted services and unforgettable experiences.
</p>

</div>

<div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10">

<Users className="text-purple-400 w-12 h-12"/>

<h3 className="mt-6 text-3xl font-bold">
Our Vision
</h3>

<p className="mt-5 text-slate-300 leading-8">
To become Bangladesh's leading digital travel platform while
promoting sustainable tourism and memorable adventures.
</p>

</div>

</div>

</section>

      {/* CTA */}

   <section className="py-24">

<div className="max-w-6xl mx-auto px-6">

<div className="rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-700 p-16 text-center shadow-2xl">

<h2 className="text-5xl font-extrabold">
Ready For Your Next Adventure?
</h2>

<p className="mt-6 text-lg text-blue-100">
Explore amazing destinations and create memories that last forever.
</p>

<button className="mt-10 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition">
Explore Tours →
</button>

</div>

</div>

</section>

    </div>
  );
};

export default About;