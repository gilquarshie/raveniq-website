import {client} from '@/sanity/lib/client'
import { Image } from 'lucide-react';

export default async function ServicePage({params}: {params: {id: string}}) {
    const {id} = await params;

const colorClasses = [
  'text-red-600 dark:text-red-400',
  'text-yellow-600 dark:text-yellow-400',
  'text-blue-600 dark:text-blue-400',
  'text-cyan-600 dark:text-cyan-400',
  'text-fuchsia-600 dark:text-fuchsia-400'
];

const backgroundColors = [
  'bg-red-500 dark:bg-red-500',
  'bg-yellow-500 dark:bg-yellow-500',
  'bg-blue-500 dark:bg-blue-500',
  'bg-cyan-500 dark:bg-cyan-500',
  'bg-fuchsia-500 dark:bg-fuchsia-500'
]

    const service = await client.fetch(`*[_type == 'services' && slug.current == '${id}']{
            ...,
            "imageUrl": main_image.asset->url,
            "other_images": other_images[].asset -> url
    }[0]`);

    console.log(service)
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Services</title>
  <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased">
    <section className="bg-white dark:bg-neutral-950 py-16 sm:py-24 relative isolate overflow-hidden">
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
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mb-8">
          <a
            href="/3TogPfA3TTBB5OWDPOTz#"
            className="items-center text-sm text-gray-600 inline-flex dark:text-neutral-400
      hover:text-gray-900 dark:hover:text-neutral-200 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_Ph0RLzbd1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Services
          </a>
        </div>
        <div className="lg:grid-cols-2 items-center grid gap-12">
          <div>
            <div className="mb-4">
              <span
                className="items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20
          text-blue-700 inline-flex dark:text-blue-300 border border-blue-200 dark:border-blue-700"
              >
                <svg
                  className="w-3 h-3 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_8Vwbkj0hc"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Premium Service
              </span>
            </div>
            <p
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight
        dark:text-neutral-100"
            >
              {service.title}
            </p>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed dark:text-neutral-400">
             {service.shortDescription}
            </p>

            <div className="sm:flex-row flex flex-col gap-4">
              <button
                type="submit"
                className="inline-flex dark:text-neutral-900 hover:bg-gray-800 dark:hover:bg-neutral-200
          transition-all hover:shadow-xl transform hover:-translate-y-0.5 items-center justify-center px-6 py-3
          rounded-lg bg-gray-900 dark:bg-neutral-100 text-white font-medium shadow-lg"
              >
              {service.cta?.primaryButtonText || "Get Started Now"}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_px1LJT04S"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button
                type="submit"
                className="inline-flex dark:text-neutral-100 border border-gray-300
          dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900 hover:border-gray-400
          dark:hover:border-neutral-600 transition-all items-center justify-center px-6 py-3 rounded-lg
          bg-white/50 dark:bg-neutral-900/50 text-gray-900 font-medium"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_zHUrq3KRN"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Sales
              </button>
            </div>
            <div className="mt-10 items-center flex gap-8">
              <div className="items-center flex gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_BPIe1mVw4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  99.9% Uptime
                </span>
              </div>
              <div className="items-center flex gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_SgsGxa4ro"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  24/7 Support
                </span>
              </div>
              <div className="items-center flex gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_49kDkc3lj"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600 dark:text-neutral-400">
                  ISO Certified
                </span>
              </div>
            </div>
          </div>
          
         <div className="relative">
            <img 
                src={service.imageUrl}
                alt={service.title}
                className='rounded-md opacity-60'
            />
         </div>

        </div>
      </div>
    </section>
    <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-neutral-100">
            Service Overview
          </p>
          <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
            Comprehensive cloud infrastructure management designed to scale with
            your business needs while maintaining security, performance, and
            reliability.
          </p>
        </div>
        <div className="md:grid-cols-2 mb-12 grid gap-8">
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 border border-neutral-200
      dark:border-neutral-800 hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 items-center justify-center mb-6 flex">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_UxrQ7LOsS"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
              What's Included
            </p>


            <ul className="space-y-3">
              {service.features.map((feature:any, _key:string) => (
                 <li key={_key} className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_72IJbySVP"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  {feature.title}
                </span>
              </li>
              ))}
            </ul>
          </div>

          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 border border-neutral-200
      dark:border-neutral-800 hover:shadow-xl transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 items-center justify-center mb-6 flex">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_h2EzQvxbt"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
              Who It's For
            </p>



            <ul className="space-y-3">
              {service.targetAudience.map((target:any, _key:string) => (
                <li key={_key} className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_72IJbySVP"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                 {target.title}
                </span>
              </li>
              ))}
            </ul>
          </div>
        </div>


        <div
          className="bg-gradient-to-br rounded-2xl from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20
    p-8 border border-blue-200 dark:border-blue-900/50"
        >
          <div className="md:grid-cols-3 grid gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 dark:text-blue-400">
                99.9%
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Guaranteed Uptime
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 dark:text-blue-400">
                &lt;15min
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Average Response Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2 dark:text-blue-400">
                500+
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Key Features */}
    <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-neutral-100">
            Key Features
          </p>
          <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
            Everything you need to run a robust, scalable, and secure cloud
            infrastructure.
          </p>
        </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit:any, index:number) => {
               const bgClass = colorClasses[index %colorClasses.length];
                return(
          <div key={index} className="">
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className= {`w-12 h-12 rounded-xl items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform`}
            >
       <svg 
  className={`w-6 h-6 ${bgClass}`}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              {benefit.title}
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              {benefit.description}
            </p>
          </div>
        </div>
                )
              })}
            </div>
      
      </div>
    </section>
    
    
    {/* Delivery Process */}
    <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-neutral-100">
            Our Delivery Process
          </p>
          <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
            A proven methodology to get your cloud infrastructure up and running
            smoothly.
          </p>
        </div>

        <div className="relative">
          <div
            className="w-0.5 bg-gradient-to-b lg:block absolute left-8 top-0 bottom-0 from-blue-500 via-indigo-500
      to-purple-500 hidden"
          />
         
         <div className="space-y-8 ">
          {service.delivery_process !== 0 ? service.delivery_process.map((process:any, index:number)=> {
            const bgCode = backgroundColors[index %colorClasses.length];
            return(
            <div className="items-start relative flex gap-6" key={index}>
              <div
                className={`lg:flex w-16 h-16 rounded-full ${bgCode} items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-blue-100 dark:ring-blue-900/30`}
              >
                {index + 1}
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-blue-500 items-center justify-center text-white font-bold
            text-lg mb-4 shadow-lg flex"
                >
                  {index + 1}
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  {process.step}
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  {process.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {process.key_words?.map((tag:string, index:number) => (
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 text-xs rounded-full
              dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    key={index}
                  >
                    {tag}
                  </span>
                  ))}
                </div>
              </div>
            </div>
          )}) : null}
          </div>


        </div>
        <div className="mt-12 bg-gradient-to-r rounded-2xl text-center shadow-xl from-blue-600 to-indigo-600 p-8">
          <p className="text-2xl font-bold text-white mb-3">
            Timeline: 4-8 Weeks
          </p>
          <p className="text-blue-100 mx-auto max-w-2xl">
            From initial consultation to full deployment. Timeline varies based
            on infrastructure complexity and migration requirements.
          </p>
        </div>
      </div>
    </section>


  {service.other_images !== 0 ? (
      <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 dark:text-neutral-100">Some Of Our Works</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed dark:text-neutral-400">Check out some of our recent projects and see how we can help you transform your infrastructure.</p>
      </div>
      <div className='flex flex-wrap m-2 h-70 justify-center'>
                {service.other_images.map((image:string, index:number) => {
                  return(
                    <div key={index} className='hover:border-4 hover:border-blue-600 rounded-lg w-1/3 h-full m-5 transition-all'>
                        <img 
                        src={image}
                        alt="images"
                        className='w-full h-full object-cover'
                        />
                  </div>
                  )
                })}
        </div>
    </section>
  ) : null}


    <section
      className="py-16 sm:py-24 bg-gradient-to-br relative isolate from-gray-900 to-gray-800 dark:from-neutral-950
dark:to-neutral-900 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-[50vh] w-[50vh] rounded-full bg-blue-500/20 absolute top-0 left-0 blur-3xl" />
        <div className="h-[40vh] w-[40vh] rounded-full bg-indigo-500/20 absolute bottom-0 right-0 blur-3xl" />
      </div>
      <div className="mx-auto px-6 lg:px-8 text-center max-w-4xl">
        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          {service.cta.title}
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 mx-auto max-w-2xl">
          {service.cta.description}
        </p>
        <div className="sm:flex-row justify-center mb-12 flex flex-col gap-4">
          <button
            type="submit"
            className="inline-flex hover:bg-gray-100 transition-all hover:shadow-xl transform
      hover:-translate-y-0.5 items-center justify-center px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold
      shadow-lg text-lg"
          >
            {service.cta.primaryButtonText}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_m1qSr7RtK"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
          <button
            type="submit"
            className="inline-flex border border-white/20 hover:bg-white/20 transition-all
      backdrop-blur-sm items-center justify-center px-8 py-4 rounded-lg bg-white/10 text-white font-semibold
      text-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_b8kgHFdxw"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Schedule Consultation
          </button>
        </div>
        <div className="items-center justify-center text-gray-400 flex flex-wrap gap-8">
          <div className="items-center flex gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_2rsQuvhJe"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">No credit card required</span>
          </div>
          <div className="items-center flex gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_Fh3NcMruA"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Free initial consultation</span>
          </div>
          <div className="items-center flex gap-2">
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              id="Windframe_etiFoZ0av"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">Custom pricing</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</>
  )
}