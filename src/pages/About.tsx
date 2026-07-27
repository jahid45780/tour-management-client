import {
  ArrowRight,
  Globe,
  HeartHandshake,
  LinkIcon,
  Mail,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

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

  const leaders = [
  {
    name: "Md Jahid",
    role: "Chief Executive Officer",
    image:
      "https://i.ibb.co.com/XxwwJG7b/Whats-App-Image-2026-07-27-at-1-52-51-PM.jpg",
    description:
      "Leading our vision and strategy to create unforgettable travel experiences for everyone.",
  },
  {
    name: "Afia Akter",
    role: "Chief Technology Officer",
    image:
      "https://i.ibb.co.com/zT5nP98L/Whats-App-Image-2026-07-27-at-1-57-48-PM.jpg",
    description:
      "Building secure, scalable, and innovative technology for seamless travel management.",
  },
  {
    name: "Farzana Khatun",
    role: "Chief Operating Officer",
    image:
      "https://i.ibb.co.com/wZQK0Tvq/Whats-App-Image-2026-07-27-at-2-02-40-PM.jpg",
    description:
      "Ensuring every tour delivers outstanding quality, comfort, and customer satisfaction.",
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

{/* Leadership Team */}

<section className="py-24 border-y border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300 font-medium">
        Leadership Team
      </span>

      <h2 className="mt-6 text-5xl font-extrabold text-white">
        Meet Our
        <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Leadership Team
        </span>
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-slate-300 leading-8">
        Behind every unforgettable journey is a passionate team committed to
        innovation, trust, and delivering exceptional travel experiences.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader) => (
        <div
          key={leader.name}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10"
        >
          <div className="overflow-hidden">
            <img
              src={leader.image}
              alt={leader.name}
              className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold text-white">
              {leader.name}
            </h3>

            <p className="mt-2 text-cyan-400 font-semibold">
              {leader.role}
            </p>

            <p className="mt-5 text-slate-300 leading-7">
              {leader.description}
            </p>

            <div className="mt-8 flex gap-4">
              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-cyan-500 hover:text-white">
                <LinkIcon size={18} />
              </button>

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition hover:bg-purple-500 hover:text-white">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
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

<Link to={"/tours"} >
<button className="mt-10 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition">
Explore Tours →
</button>
</Link>
</div> 

</div>

</section>

    </div>
  );
};

export default About;