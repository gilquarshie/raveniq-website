import { BriefcaseBusiness, Percent } from "lucide-react";
import { client } from "@/sanity/lib/client";

async function FetchServices(){
  try{
    return await client.fetch(`*[_type == "services"]`);
  }catch(err: unknown){
    console.error('Error fetching services:', err);
  }
}

export default async function HomePage() {
  const services = await FetchServices();

  return(
  <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased">
  <section className="bg-white dark:bg-neutral-950 relative isolate overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200
    via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0"
      />
      <div
        className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-fuchsia-300
    via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0"
      />
      <div
        className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-orange-300
    via-amber-200 to-rose-100 opacity-60 blur-3xl dark:from-orange-600 dark:via-amber-500 dark:to-rose-400
    dark:opacity-64"
      />
    </div>
    <div className="mx-auto px-6 py-20 md:py-32 max-w-7xl">
      <div className="md:grid-cols-2 items-center grid gap-12">
        <div className="space-y-8">
          <div
            className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full inline-block border border-blue-200
        dark:border-blue-800"
          >
            <span className="text-blue-600 text-sm font-semibold dark:text-blue-400">
              Empowering SMEs
            </span>
          </div>
          <p className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight dark:text-white">
            Digital Solutions Built for
            <span className="text-blue-600 dark:text-blue-500">
              Your Growth
            </span>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-neutral-400">
            RavenIQ Labs bridges the digital divide by creating fully integrated
            ecosystems tailored to Ghanaian and businesses. We
            simplify automation, analytics, and local payment systems into one
            coherent framework.
          </p>
          <div className="sm:flex-row flex flex-col gap-4">
            <button
              type="submit"
              className="hover:bg-blue-700 dark:hover:bg-blue-600 transition-all transform
          hover:scale-105 bg-blue-600 dark:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Start Your Journey
            </button>
            <button
              type="submit"
              className="dark:text-white border-2 border-gray-200 dark:border-neutral-700
          hover:border-blue-600 dark:hover:border-blue-500 transition-all bg-white dark:bg-neutral-900
          text-gray-900 px-8 py-4 rounded-lg font-semibold"
            >
              Learn More
            </button>
          </div>
          <div className="items-center pt-6 flex space-x-8">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white w-full flex justify-center">
                <BriefcaseBusiness size={20} className='text-blue-500 animate-bounce' />
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                SMEs Served
              </div>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-neutral-700" />
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white w-full flex justify-center">
                <Percent size={20} className='text-blue-500 animate-bounce' />
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Satisfaction Rate
              </div>
            </div>
            <div className="h-12 w-px bg-gray-300 dark:bg-neutral-700" />
            <div>
              <div className="text-sm font-bold text-blue-500 flex justify-center w-full animate-bounce">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Support
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10">
            <svg
              viewBox="0 0 600 600"
              className="w-full h-auto"
              id="Windframe_rzqsgHE79"
            >
              <defs>
                <linearGradient
                  id="heroGrad1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#1d4ed8", stopOpacity: 1 }}
                  />
                </linearGradient>
                <linearGradient
                  id="heroGrad2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    style={{ stopColor: "#60a5fa", stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
              <rect
                x={100}
                y={100}
                width={180}
                height={220}
                rx={12}
                fill="url(#heroGrad1)"
                opacity="0.9"
              />
              <rect
                x={150}
                y={60}
                width={280}
                height={160}
                rx={12}
                fill="url(#heroGrad2)"
                opacity="0.8"
              />
              <circle cx={400} cy={350} r={80} fill="#3b82f6" opacity="0.6" />
              <rect
                x={220}
                y={280}
                width={200}
                height={140}
                rx={12}
                fill="url(#heroGrad1)"
                opacity="0.85"
              />
              <circle cx={180} cy={400} r={50} fill="#60a5fa" opacity="0.7" />
              <rect
                x={320}
                y={380}
                width={160}
                height={120}
                rx={12}
                fill="url(#heroGrad2)"
                opacity="0.75"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  {/* Integrated DIgital Ecosystem */}
  <section className="bg-gray-50 dark:bg-neutral-900 py-20" id="solutions">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Integrated Digital Ecosystem
        </p>
        <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
          A comprehensive suite of interconnected solutions designed to work
          seamlessly together
        </p>
      </div>
      <div className="lg:grid-cols-2 mb-12 grid gap-8">
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-10 border border-gray-200 dark:border-neutral-800">
          <div className="items-start flex space-x-6">
            <div
              className="w-16 h-16 bg-gradient-to-br rounded-2xl items-center justify-center from-blue-500 to-blue-700
          flex flex-shrink-0"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_lzFXe1S22"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
                Data Collection Systems
              </p>
              <p className="text-gray-600 mb-4 dark:text-neutral-400">
                Capture, organize, and manage business data efficiently with our
                intuitive collection tools designed for field and office use.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Form Builders
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Mobile Data Entry
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Validation Rules
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-10 border border-gray-200 dark:border-neutral-800">
          <div className="items-start flex space-x-6">
            <div
              className="w-16 h-16 bg-gradient-to-br rounded-2xl items-center justify-center from-blue-600 to-blue-800
          flex flex-shrink-0"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_lkrtKfqOi"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
                Business Automation
              </p>
              <p className="text-gray-600 mb-4 dark:text-neutral-400">
                Automate repetitive tasks, workflows, and business processes to
                save time and reduce human error significantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Workflow Engine
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Email Automation
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Task Triggers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-10 border border-gray-200 dark:border-neutral-800">
          <div className="items-start flex space-x-6">
            <div
              className="w-16 h-16 bg-gradient-to-br rounded-2xl items-center justify-center from-blue-500 to-blue-700
          flex flex-shrink-0"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_AGF9uzMVm"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
                Advanced Analytics
              </p>
              <p className="text-gray-600 mb-4 dark:text-neutral-400">
                Transform your data into meaningful insights with powerful
                analytics dashboards and reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Live Dashboards
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Custom Charts
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Export Reports
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-10 border border-gray-200 dark:border-neutral-800">
          <div className="items-start flex space-x-6">
            <div
              className="w-16 h-16 bg-gradient-to-br rounded-2xl items-center justify-center from-blue-600 to-blue-800
          flex flex-shrink-0"
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_WE0zX3qio"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
                Local Payment Gateway
              </p>
              <p className="text-gray-600 mb-4 dark:text-neutral-400">
                Accept payments through mobile money platforms and local payment
                methods your customers already use and trust.
              </p>
              <div className="flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  MTN Mobile Money
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  Vodafone Cash
                </span>
                <span
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-950/30 text-blue-600 text-sm rounded-full
              dark:text-blue-400"
                >
                  AirtelTigo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-r rounded-2xl text-center text-white from-blue-600 to-blue-800 dark:from-blue-700
    dark:to-blue-900 p-12"
      >
        <p className="text-3xl font-bold mb-4">
          Everything Works Together Seamlessly
        </p>
        <p className="text-lg text-blue-100 mx-auto mb-8 max-w-3xl">
          Our integrated ecosystem means all your tools communicate with each
          other, eliminating data silos and manual transfers. One platform,
          infinite possibilities.
        </p>
        <button
          type="submit"
          className="hover:bg-blue-50 transition-all transform hover:scale-105 bg-white text-blue-600
      px-8 py-4 rounded-lg font-semibold"
        >
          Explore Our Ecosystem
        </button>
      </div>
    </div>
  </section>



    {/* Our core services */}
  <section className="bg-gray-50 dark:bg-neutral-900 py-20" id="services">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Our Core Services
        </p>
        <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
          Comprehensive digital solutions designed to transform your business
          operations and unlock unprecedented efficiency
        </p>
      </div>
    <div className="md:grid-cols-3 grid gap-8">
        {services.map((service:any, index:number) => (
      <div key={index} >
        <div
          className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800
      hover:border-blue-500 dark:hover:border-blue-600 transition-all hover:shadow-xl"
        >
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-xl items-center justify-center mb-6 flex">
          <img src="favicon.ico" alt="icon" className="w-5  h-8" />
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">
            {service?.title || "Service"}
          </p>
          <p className="text-gray-600 mb-6 dark:text-neutral-400">
              {service?.shortDescription || "Service Description"}
          </p>

          <ul className="space-y-3">
            {service?.features?.map((feature:any, index:number) => (
              <a key={index}   href={`/services/${service.slug.current}`}>
                <li className="items-center text-gray-700 flex dark:text-neutral-300">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 dark:text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_nzxTHwQbD"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature.title || "Feature"}
              </li>  
              </a>
            ))}
          </ul>
        </div>
        </div>
    ))}
    </div>
    </div>
  </section>



  {/* Why choose RavenIQ Labs */}
   <section className="bg-white dark:bg-neutral-950 py-20">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Why Choose RavenIQ Labs
        </p>
        <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
          We understand the unique challenges facing businesses and
          deliver solutions that actually work
        </p>
      </div>
      <div className="md:grid-cols-3 mb-16 grid gap-8">
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_SbPCtUa6M"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Localized for West Africa
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Built specifically for the Ghanaian and market with
            local payment integrations and regional context.
          </p>
        </div>
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_1WrEi6qLL"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Affordable Pricing
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Fair and transparent pricing designed for SMEs. No hidden fees, no
            surprises, just honest value for your investment.
          </p>
        </div>
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_lyDMCplxE"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Fast Implementation
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Get up and running quickly with our streamlined onboarding process
            and dedicated implementation support team.
          </p>
        </div>
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_qA36E8kuf"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Fully Customizable
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Tailor every aspect of the platform to match your unique business
            processes and operational requirements.
          </p>
        </div>
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_ZZfL1bTRY"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Local Support Team
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Access our local support team who understand your business context
            and can assist you in your preferred language.
          </p>
        </div>
        <div className="text-center">
          <div
            className="w-20 h-20 bg-blue-100 dark:bg-blue-950/50 rounded-2xl items-center justify-center mx-auto mb-6
        flex"
          >
            <svg
              className="w-10 h-10 text-blue-600 dark:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_zV4ciwH3R"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-3 dark:text-white">
            Secure &amp; Reliable
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Enterprise-grade security with regular backups, data encryption, and
            compliance with international standards.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  {/* Trusted by Leading SMEs */}
  <section className="bg-gray-50 dark:bg-neutral-900 py-20">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
          Trusted by Leading SMEs
        </p>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          See what our clients say about working with RavenIQ Labs
        </p>
      </div>
      <div className="md:grid-cols-3 grid gap-8">
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800">
          <div className="items-center mb-4 flex">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_awiSrEz56"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_KhFVPHvtv"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_U2XAVcya2"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_wD9k2uBRi"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_DnaGqMZE9"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6 dark:text-neutral-400">
            "RavenIQ Labs transformed our operations completely. The mobile
            money integration alone has increased our sales by 40%. Their team
            truly understands local business needs."
          </p>
          <div className="items-center flex">
            <img
              alt="Client"
              src="https://placehold.co/48x48"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Kwame Mensah
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                CEO, Accra Retail Solutions
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800">
          <div className="items-center mb-4 flex">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_xJyXMzx7x"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_Xt3nHXMN1"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_U2DxHxFZm"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_hTZNa3ZQc"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_ZNOX0qh8h"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6 dark:text-neutral-400">
            "The automation features have saved us countless hours. What used to
            take days now happens automatically. The ROI has been incredible for
            our small business."
          </p>
          <div className="items-center flex">
            <img
              alt="Client"
              src="https://placehold.co/48x48"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Ama Osei
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Founder, Kumasi Logistics
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800">
          <div className="items-center mb-4 flex">
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_QqUCrN2db"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_kwqIQwpAU"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_QuXrYoGTN"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_igya89l0M"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_1BfRyhUcJ"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-gray-600 mb-6 dark:text-neutral-400">
            "Finally, a tech company that gets it! The support team speaks our
            language and the pricing is fair. Our productivity has doubled since
            implementation."
          </p>
          <div className="items-center flex">
            <img
              alt="Client"
              src="https://placehold.co/48x48"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Kofi Asante
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                MD, Takoradi Enterprises
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Ready to Transform Your Business */}
  <section className="bg-white dark:bg-neutral-950 py-20">
    <div className="mx-auto px-6 max-w-5xl">
      <div
        className="bg-gradient-to-r rounded-3xl md:p-16 text-center text-white from-blue-600 to-blue-800
    dark:from-blue-700 dark:to-blue-900 p-12 relative overflow-hidden"
      >
        <div className="w-64 h-64 bg-white rounded-full absolute top-0 right-0 opacity-5 -mr-32 -mt-32" />
        <div className="w-48 h-48 bg-white rounded-full absolute bottom-0 left-0 opacity-5 -ml-24 -mb-24" />
        <div className="relative z-10">
          <p className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </p>
          <p className="text-xl text-blue-100 mb-8 mx-auto max-w-2xl">
            Join hundreds of SMEs across West Africa who are already
            experiencing the power of integrated digital solutions.
          </p>
          <div className="sm:flex-row justify-center flex flex-col gap-4">
            <button
              type="submit"
              className="hover:bg-blue-50 transition-all transform hover:scale-105 bg-white
          text-blue-600 px-8 py-4 rounded-lg font-semibold"
            >
              Schedule a Demo
            </button>
            <button
              type="submit"
              className="border-2 border-white/30 hover:bg-blue-800 dark:hover:bg-blue-900
          transition-all bg-blue-700 dark:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold"
            >
              Contact Sales
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-6">
            No credit card required • Free 30-day trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
  );
}
