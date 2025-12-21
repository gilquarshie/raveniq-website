import React from 'react'

const Contact = () => {
  return (
    <div>
          {/* Get in Touch */}
  <section className="bg-gray-50 dark:bg-neutral-900 py-20" id="contact">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="md:grid-cols-2 grid gap-16">
        <div>
          <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 dark:text-white">
            Get in Touch
          </p>
          <p className="text-lg text-gray-600 mb-8 dark:text-neutral-400">
            Have questions? Our team is here to help you find the perfect
            solution for your business needs.
          </p>
          <div className="space-y-6">
            <div className="items-start flex space-x-4">
              <div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl items-center justify-center flex
            flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_s9PJhlZik"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Phone
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  +233 24 123 4567
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  +233 20 987 6543
                </p>
              </div>
            </div>
            <div className="items-start flex space-x-4">
              <div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl items-center justify-center flex
            flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_krTYVz4A6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Email
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  info@raveniqlab.com
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  support@raveniqlab.com
                </p>
              </div>
            </div>
            <div className="items-start flex space-x-4">
              <div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-xl items-center justify-center flex
            flex-shrink-0"
              >
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_abpoAtWJk"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1 dark:text-white">
                  Address
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  123 Independence Avenue
                </p>
                <p className="text-gray-600 dark:text-neutral-400">
                  Accra, Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-200 dark:border-neutral-800">
          <form className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-300 dark:border-neutral-700
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-white
            w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block dark:text-white">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                className="border border-gray-300 dark:border-neutral-700
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-white
            w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block dark:text-white">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+233 24 123 4567"
                className="border border-gray-300 dark:border-neutral-700
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent dark:text-white
            w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 rounded-lg text-gray-900"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-900 mb-2 block dark:text-white">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3
            bg-gray-50 dark:bg-neutral-900 rounded-lg text-gray-900 border border-gray-300 dark:border-neutral-700
            focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent
            dark:text-white"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="hover:bg-blue-700 dark:hover:bg-blue-600 transition-all w-full bg-blue-600
          dark:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Contact