import {client} from '@/sanity/lib/client'
import { Image } from 'lucide-react';

export default async function ServicePage({params}: {params: {id: string}}) {
    const {id} = await params;

    const service = await client.fetch(`*[_type == 'services' && slug.current == '${id}']{
            ...,
            "imageUrl": main_image.asset->url,
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
                Get Started Now
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
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_xoldmpCvP"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Complete infrastructure setup and configuration
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_532tUBZKj"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  24/7 monitoring and alerting system
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_JoE5ZSMaH"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Automated backup and disaster recovery
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_KTIhhlLYI"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Security hardening and compliance management
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_G1I2NOEQw"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Performance optimization and cost management
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-blue-600 mr-3 mt-0.5 dark:text-blue-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_vCErl9vi3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Dedicated support team and account manager
                </span>
              </li>
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
              <li className="items-start flex">
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
                  Startups scaling their infrastructure rapidly
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_HSS0vYfTl"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Enterprises migrating to the cloud
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_TfHUxvZZw"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  SaaS companies needing reliable hosting
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_fRBYKB9uD"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  E-commerce platforms requiring high availability
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_g0mytcDTP"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Development teams focusing on product innovation
                </span>
              </li>
              <li className="items-start flex">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3 mt-0.5 dark:text-purple-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_DiscwV5Q2"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 dark:text-neutral-300">
                  Organizations with compliance requirements
                </span>
              </li>
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
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-6">
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_YiurZWGQ2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Multi-Cloud Support
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Deploy across AWS, Azure, Google Cloud, or hybrid environments
              with seamless management.
            </p>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_DkZMiCM5U"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Auto-Scaling
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Automatically adjust resources based on demand to optimize
              performance and costs.
            </p>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_6UeTqL3h0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Advanced Security
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Enterprise-grade security with encryption, firewalls, DDoS
              protection, and compliance.
            </p>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_sTmPOD6KO"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Real-Time Monitoring
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Comprehensive dashboards with metrics, logs, and alerts for
              complete visibility.
            </p>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-pink-50 dark:bg-pink-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-pink-600 dark:text-pink-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_aLVZuwObk"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Automated Backups
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Daily automated backups with point-in-time recovery and disaster
              recovery plans.
            </p>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl group p-6 border border-neutral-200 dark:border-neutral-800
      hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all"
          >
            <div
              className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 items-center justify-center mb-4 flex
        group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-6 h-6 text-indigo-600 dark:text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_EBfE6o01I"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Cost Optimization
            </p>
            <p className="text-gray-600 text-sm dark:text-neutral-400">
              Smart resource allocation and usage analytics to reduce costs
              without sacrificing performance.
            </p>
          </div>
        </div>
      </div>
    </section>
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
          <div className="space-y-8">
            <div className="items-start relative flex gap-6">
              <div
                className="lg:flex w-16 h-16 rounded-full bg-blue-500 items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-blue-100 dark:ring-blue-900/30"
              >
                1
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-blue-500 items-center justify-center text-white font-bold
            text-lg mb-4 shadow-lg flex"
                >
                  1
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  Discovery &amp; Assessment
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  We begin with a comprehensive analysis of your current
                  infrastructure, business requirements, and growth projections.
                  Our team conducts thorough technical assessments and
                  stakeholder interviews.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 text-xs rounded-full
              dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    Infrastructure Audit
                  </span>
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 text-xs rounded-full
              dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    Requirements Gathering
                  </span>
                  <span
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 text-xs rounded-full
              dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  >
                    Cost Analysis
                  </span>
                </div>
              </div>
            </div>
            <div className="items-start relative flex gap-6">
              <div
                className="lg:flex w-16 h-16 rounded-full bg-indigo-500 items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-indigo-100 dark:ring-indigo-900/30"
              >
                2
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-indigo-500 items-center justify-center text-white
            font-bold text-lg mb-4 shadow-lg flex"
                >
                  2
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  Architecture Design
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  Our architects create a customized cloud infrastructure
                  blueprint optimized for your specific needs. We design for
                  scalability, security, and cost-efficiency from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 text-xs rounded-full
              dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                  >
                    Solution Architecture
                  </span>
                  <span
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 text-xs rounded-full
              dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                  >
                    Security Design
                  </span>
                  <span
                    className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 text-xs rounded-full
              dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                  >
                    Documentation
                  </span>
                </div>
              </div>
            </div>
            <div className="items-start relative flex gap-6">
              <div
                className="lg:flex w-16 h-16 rounded-full bg-purple-500 items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-purple-100 dark:ring-purple-900/30"
              >
                3
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-purple-500 items-center justify-center text-white
            font-bold text-lg mb-4 shadow-lg flex"
                >
                  3
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  Implementation
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  We deploy your infrastructure using infrastructure-as-code
                  practices. Our team handles provisioning, configuration, and
                  integration with existing systems while minimizing disruption.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 text-xs rounded-full
              dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                  >
                    Deployment
                  </span>
                  <span
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 text-xs rounded-full
              dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                  >
                    Migration
                  </span>
                  <span
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 text-xs rounded-full
              dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                  >
                    Integration Testing
                  </span>
                </div>
              </div>
            </div>
            <div className="items-start relative flex gap-6">
              <div
                className="lg:flex w-16 h-16 rounded-full bg-pink-500 items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-pink-100 dark:ring-pink-900/30"
              >
                4
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-pink-500 items-center justify-center text-white font-bold
            text-lg mb-4 shadow-lg flex"
                >
                  4
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  Testing &amp; Optimization
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  Rigorous testing ensures everything works perfectly. We
                  conduct load testing, security audits, and performance
                  optimization before going live.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 text-xs rounded-full
              dark:text-pink-300 border border-pink-200 dark:border-pink-800"
                  >
                    Performance Testing
                  </span>
                  <span
                    className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 text-xs rounded-full
              dark:text-pink-300 border border-pink-200 dark:border-pink-800"
                  >
                    Security Audit
                  </span>
                  <span
                    className="px-3 py-1 bg-pink-50 dark:bg-pink-900/20 text-pink-700 text-xs rounded-full
              dark:text-pink-300 border border-pink-200 dark:border-pink-800"
                  >
                    Optimization
                  </span>
                </div>
              </div>
            </div>
            <div className="items-start relative flex gap-6">
              <div
                className="lg:flex w-16 h-16 rounded-full bg-green-500 items-center justify-center text-white font-bold
          text-xl shadow-lg hidden flex-shrink-0 ring-4 ring-green-100 dark:ring-green-900/30"
              >
                5
              </div>
              <div
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg flex-1 p-8 border border-neutral-200
          dark:border-neutral-800"
              >
                <div
                  className="lg:hidden w-12 h-12 rounded-full bg-green-500 items-center justify-center text-white font-bold
            text-lg mb-4 shadow-lg flex"
                >
                  5
                </div>
                <p className="text-xl font-semibold text-gray-900 mb-3 dark:text-neutral-100">
                  Launch &amp; Support
                </p>
                <p className="text-gray-600 mb-4 dark:text-neutral-400">
                  Go live with confidence. Our team provides 24/7 monitoring and
                  support, with regular check-ins, performance reviews, and
                  continuous optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 text-xs rounded-full
              dark:text-green-300 border border-green-200 dark:border-green-800"
                  >
                    Go Live
                  </span>
                  <span
                    className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 text-xs rounded-full
              dark:text-green-300 border border-green-200 dark:border-green-800"
                  >
                    24/7 Monitoring
                  </span>
                  <span
                    className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 text-xs rounded-full
              dark:text-green-300 border border-green-200 dark:border-green-800"
                  >
                    Ongoing Support
                  </span>
                </div>
              </div>
            </div>
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
    <section className="py-16 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-neutral-100">
            Trusted by Leading Companies
          </p>
          <p className="text-lg text-gray-600 mx-auto dark:text-neutral-400 max-w-3xl">
            Join hundreds of companies that trust us with their cloud
            infrastructure.
          </p>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-4 mb-16 grid gap-6">
          <div
            className="bg-neutral-50 dark:bg-neutral-900 rounded-xl items-center justify-center p-6 border
      border-neutral-200 dark:border-neutral-800 flex"
          >
            <img
              alt="Client Logo"
              src="https://placehold.co/180x60/e5e5e5/666666?text=Company+Logo"
              className="opacity-60
        dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
          <div
            className="bg-neutral-50 dark:bg-neutral-900 rounded-xl items-center justify-center p-6 border
      border-neutral-200 dark:border-neutral-800 flex"
          >
            <img
              alt="Client Logo"
              src="https://placehold.co/180x60/e5e5e5/666666?text=Company+Logo"
              className="opacity-60
        dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
          <div
            className="bg-neutral-50 dark:bg-neutral-900 rounded-xl items-center justify-center p-6 border
      border-neutral-200 dark:border-neutral-800 flex"
          >
            <img
              alt="Client Logo"
              src="https://placehold.co/180x60/e5e5e5/666666?text=Company+Logo"
              className="opacity-60
        dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
          <div
            className="bg-neutral-50 dark:bg-neutral-900 rounded-xl items-center justify-center p-6 border
      border-neutral-200 dark:border-neutral-800 flex"
          >
            <img
              alt="Client Logo"
              src="https://placehold.co/180x60/e5e5e5/666666?text=Company+Logo"
              className="opacity-60
        dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        </div>
        <div className="md:grid-cols-3 mb-16 grid gap-8">
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 border border-neutral-200
      dark:border-neutral-800"
          >
            <div className="items-center mb-4 flex">
              <div className="mr-3 flex gap-1">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_THfim7Eks"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_jP732G9uY"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_CQJNOGpC3"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_AuU2gHzjp"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_RwekoaKOS"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mb-4 dark:text-neutral-300">
              "The migration to cloud was seamless. Their team handled
              everything professionally and our uptime has been perfect. The
              cost savings were immediate."
            </p>
            <div className="items-center flex">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br mr-3 from-blue-400 to-indigo-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-neutral-100">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-600 dark:text-neutral-400">
                  CTO, TechStart Inc
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 border border-neutral-200
      dark:border-neutral-800"
          >
            <div className="items-center mb-4 flex">
              <div className="mr-3 flex gap-1">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_Exw0Jolon"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_0kWyILoMa"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_K2S2b567M"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_AZ7pqNCuv"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_caNK5pvfD"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mb-4 dark:text-neutral-300">
              "Outstanding service and support. They optimized our
              infrastructure and reduced our cloud costs by 40% while improving
              performance."
            </p>
            <div className="items-center flex">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br mr-3 from-purple-400 to-pink-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-neutral-100">
                  Michael Chen
                </div>
                <div className="text-sm text-gray-600 dark:text-neutral-400">
                  VP Engineering, DataFlow
                </div>
              </div>
            </div>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 border border-neutral-200
      dark:border-neutral-800"
          >
            <div className="items-center mb-4 flex">
              <div className="mr-3 flex gap-1">
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_BozBw3ryJ"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_hcCcTr22i"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_d2WcTPEFm"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_v3PyhbJWK"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  id="Windframe_hfCHCc7nt"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 mb-4 dark:text-neutral-300">
              "Best decision we made for our infrastructure. Their expertise and
              proactive monitoring have eliminated our downtime concerns
              completely."
            </p>
            <div className="items-center flex">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br mr-3 from-green-400 to-emerald-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-neutral-100">
                  Emily Rodriguez
                </div>
                <div className="text-sm text-gray-600 dark:text-neutral-400">
                  CEO, CloudScale
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:grid-cols-2 lg:grid-cols-4 grid gap-6">
          <div
            className="bg-gradient-to-br rounded-2xl text-center from-blue-50 to-indigo-50 dark:from-blue-950/20
      dark:to-indigo-950/20 p-6 border border-blue-200 dark:border-blue-900/50"
          >
            <div
              className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 items-center justify-center mx-auto mb-3
        flex"
            >
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_ovkDCw4PL"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900 mb-1 dark:text-neutral-100">
              ISO 27001
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Certified
            </div>
          </div>
          <div
            className="bg-gradient-to-br rounded-2xl text-center from-green-50 to-emerald-50 dark:from-green-950/20
      dark:to-emerald-950/20 p-6 border border-green-200 dark:border-green-900/50"
          >
            <div
              className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 items-center justify-center mx-auto mb-3
        flex"
            >
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_5F7jfdXJt"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900 mb-1 dark:text-neutral-100">
              SOC 2 Type II
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Compliant
            </div>
          </div>
          <div
            className="bg-gradient-to-br rounded-2xl text-center from-purple-50 to-pink-50 dark:from-purple-950/20
      dark:to-pink-950/20 p-6 border border-purple-200 dark:border-purple-900/50"
          >
            <div
              className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 items-center justify-center mx-auto
        mb-3 flex"
            >
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_Hu6TYgNFj"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900 mb-1 dark:text-neutral-100">
              GDPR
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Compliant
            </div>
          </div>
          <div
            className="bg-gradient-to-br rounded-2xl text-center from-orange-50 to-amber-50 dark:from-orange-950/20
      dark:to-amber-950/20 p-6 border border-orange-200 dark:border-orange-900/50"
          >
            <div
              className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 items-center justify-center mx-auto
        mb-3 flex"
            >
              <svg
                className="w-6 h-6 text-orange-600 dark:text-orange-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_KTmYSnErk"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div className="text-sm font-semibold text-gray-900 mb-1 dark:text-neutral-100">
              HIPAA
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Ready
            </div>
          </div>
        </div>
      </div>
    </section>
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
          Ready to Transform Your Infrastructure?
        </p>
        <p className="text-lg sm:text-xl text-gray-300 mb-10 mx-auto max-w-2xl">
          Join hundreds of companies leveraging our expertise to build scalable,
          secure, and reliable cloud infrastructure.
        </p>
        <div className="sm:flex-row justify-center mb-12 flex flex-col gap-4">
          <button
            type="submit"
            className="inline-flex hover:bg-gray-100 transition-all hover:shadow-xl transform
      hover:-translate-y-0.5 items-center justify-center px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold
      shadow-lg text-lg"
          >
            Start Your Project
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