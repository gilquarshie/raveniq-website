function page() {
  return (
   <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased">
  <div className="items-center justify-center px-6 py-12 relative isolate min-h-screen flex overflow-hidden">
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
    <div className="w-full mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <div
          className="items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br rounded-full shadow-xl inline-flex
      from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-900 border-4 border-white
      dark:border-neutral-950 ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
        >
          <svg
            className="w-10 h-10 text-neutral-700 dark:text-neutral-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            id="Windframe_qLXrjIJNd"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 dark:text-neutral-100">
          Thank You!
        </p>
        <p className="text-lg md:text-xl text-gray-600 mx-auto dark:text-neutral-400 max-w-2xl">
          Your service request has been successfully submitted
        </p>
      </div>
      <div className="md:grid-cols-2 mb-10 grid gap-6">
        <div
          className="bg-white/70 dark:bg-neutral-900/80 rounded-2xl shadow-lg backdrop-blur-sm border border-neutral-200
      dark:border-neutral-800 p-6 ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
        >
          <div className="items-start flex gap-4">
            <div
              className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl items-center justify-center
          flex-shrink-0 flex border border-neutral-200 dark:border-neutral-700"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-neutral-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_OYxZEj9p2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
                Confirmation Email Sent
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                We've sent a confirmation email to your inbox with all the
                details of your request.
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-white/70 dark:bg-neutral-900/80 rounded-2xl shadow-lg backdrop-blur-sm border border-neutral-200
      dark:border-neutral-800 p-6 ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
        >
          <div className="items-start flex gap-4">
            <div
              className="w-12 h-12 bg-neutral-100 dark:bg-neutral-800 rounded-xl items-center justify-center
          flex-shrink-0 flex border border-neutral-200 dark:border-neutral-700"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-neutral-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="Windframe_qRN6RvvlL"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-900 mb-2 dark:text-neutral-100">
                Response Time
              </p>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Our team will review your request and get back to you within
                24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white/70 dark:bg-neutral-900 shadow-xl rounded-2xl mb-10 ring-1 ring-neutral-200/50
    dark:ring-neutral-700/50 grid grid-rows-[1fr_auto] gap-8 p-8 border border-neutral-200/70
    dark:border-neutral-800/70"
      >
        <div
          className="bg-gradient-to-b relative -m-8 from-transparent via-neutral-50/50 dark:via-neutral-900/50
      to-transparent p-8"
        >
          <div
            className="px-4 pt-6 group relative -mx-4 before:absolute before:inset-x-6 before:bottom-0 before:top-4
        before:rounded-2xl before:border before:border-neutral-200/70 before:bg-white
        dark:before:border-neutral-700/70 dark:before:bg-neutral-900/80 before:z-1 after:absolute after:inset-x-9
        after:bottom-0 after:top-2 after:rounded-2xl after:border after:border-neutral-300/50 after:bg-white/50
        dark:after:border-neutral-600/50 dark:after:bg-neutral-800/30"
          >
            <div
              className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl shadow-black/10 ring-neutral-300/50
          dark:ring-neutral-600/50 relative z-10 border border-neutral-200 dark:border-neutral-700 p-6 ring-1"
            >
              <div
                className="items-center justify-between mb-4 pb-4 flex border-b border-neutral-200
            dark:border-neutral-700"
              >
                <div className="text-gray-800 font-semibold dark:text-neutral-100">
                  Request Summary
                </div>
                <span
                  className="bg-neutral-50 dark:bg-neutral-800 px-3 py-1 text-neutral-900 text-xs rounded-full
              dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  ID: #SR-2024-001
                </span>
              </div>
              <div className="mb-5 space-y-4">
                <div
                  className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg border border-neutral-200
              dark:border-neutral-700 p-4"
                >
                  <div className="items-center justify-between mb-3 flex">
                    <div className="items-center flex gap-2">
                      <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
                      <span className="text-xs font-medium text-gray-700 dark:text-neutral-300">
                        Status
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800
                  dark:text-neutral-200 border border-neutral-300 dark:border-neutral-600"
                    >
                      Received
                    </span>
                  </div>
                  <div className="items-center mb-2 flex gap-2">
                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
                    <span className="text-xs font-medium text-gray-700 dark:text-neutral-300">
                      Priority
                    </span>
                    <span className="text-xs text-gray-600 ml-auto dark:text-neutral-400">
                      Standard
                    </span>
                  </div>
                  <div className="items-center flex gap-2">
                    <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
                    <span className="text-xs font-medium text-gray-700 dark:text-neutral-300">
                      Assigned Team
                    </span>
                    <span className="text-xs text-gray-600 ml-auto dark:text-neutral-400">
                      Customer Service
                    </span>
                  </div>
                </div>
                <div
                  className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700
              p-4"
                >
                  <div className="text-xs font-medium text-gray-700 mb-3 dark:text-neutral-300">
                    Processing Timeline
                  </div>
                  <div className="space-y-3">
                    <div className="items-center flex gap-3">
                      <div
                        className="w-8 h-8 bg-neutral-800 dark:bg-neutral-100 rounded-full items-center justify-center
                    flex flex-shrink-0"
                      >
                        <svg
                          className="w-4 h-4 text-white dark:text-neutral-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          id="Windframe_hyf6IiR00"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-800 dark:text-neutral-200">
                          Request Submitted
                        </div>
                        <div className="text-xs text-gray-500 dark:text-neutral-500">
                          Today at 10:30 AM
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-3">
                      <div
                        className="w-8 h-8 bg-neutral-200 dark:bg-neutral-700 rounded-full items-center justify-center
                    flex flex-shrink-0 border-2 border-neutral-300 dark:border-neutral-600"
                      >
                        <div className="w-2 h-2 bg-neutral-400 dark:bg-neutral-500 rounded-full animate-pulse" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-800 dark:text-neutral-200">
                          Under Review
                        </div>
                        <div className="text-xs text-gray-500 dark:text-neutral-500">
                          In progress...
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-3">
                      <div
                        className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-full items-center justify-center
                    flex flex-shrink-0 border-2 border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-500 dark:text-neutral-400">
                          Team Assignment
                        </div>
                        <div className="text-xs text-gray-400 dark:text-neutral-600">
                          Pending
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex gap-3">
                      <div
                        className="w-8 h-8 bg-neutral-100 dark:bg-neutral-800 rounded-full items-center justify-center
                    flex flex-shrink-0 border-2 border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-500 dark:text-neutral-400">
                          Resolution
                        </div>
                        <div className="text-xs text-gray-400 dark:text-neutral-600">
                          Pending
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-800 font-semibold text-lg mb-3 dark:text-neutral-100">
            Track Your Request
          </p>
          <p className="text-gray-700/80 dark:text-neutral-300/80">
            Your service request has been logged and is being processed. You can
            track the progress of your request using the reference ID provided
            in your confirmation email.
          </p>
        </div>
      </div>
      <div
        className="bg-white/70 dark:bg-neutral-900/80 rounded-2xl shadow-lg mb-10 backdrop-blur-sm border
    border-neutral-200 dark:border-neutral-800 p-8 ring-1 ring-neutral-200/50 dark:ring-neutral-700/50"
      >
        <p className="text-2xl font-bold text-gray-900 mb-6 text-center dark:text-neutral-100">
          What Happens Next?
        </p>
        <div className="md:grid-cols-3 grid gap-6">
          <div className="text-center">
            <div
              className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl items-center justify-center mx-auto
          mb-4 flex border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-2xl font-bold text-gray-700 dark:text-neutral-300">
                1
              </div>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Review &amp; Assessment
            </p>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Our team will carefully review your service request and assess the
              requirements.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl items-center justify-center mx-auto
          mb-4 flex border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-2xl font-bold text-gray-700 dark:text-neutral-300">
                2
              </div>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Team Assignment
            </p>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              We'll assign the most qualified team member to handle your
              specific needs.
            </p>
          </div>
          <div className="text-center">
            <div
              className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-2xl items-center justify-center mx-auto
          mb-4 flex border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-2xl font-bold text-gray-700 dark:text-neutral-300">
                3
              </div>
            </div>
            <p className="text-base font-semibold text-gray-900 mb-2 dark:text-neutral-100">
              Direct Contact
            </p>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              You'll receive a personalized response with next steps and
              timeline details.
            </p>
          </div>
        </div>
      </div>
      <div className="md:grid-cols-2 mb-10 grid gap-6">
        <div
          className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl backdrop-blur-sm border border-neutral-200
      dark:border-neutral-800 p-6"
        >
          <div className="items-center mb-3 flex gap-3">
            <svg
              className="w-5 h-5 text-gray-700 dark:text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_Z88ZZXo6M"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-base font-semibold text-gray-900 dark:text-neutral-100">
              Need Help?
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-4 dark:text-neutral-400">
            If you have any questions or need immediate assistance, our support
            team is here to help.
          </p>
          <a
            href="/IBNemORnYGF1G7QkM4hn#"
            className="items-center text-sm font-medium text-gray-800 inline-flex
        dark:text-neutral-200 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors"
          >
            Contact Support
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_LNf5HRY7V"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
        <div
          className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl backdrop-blur-sm border border-neutral-200
      dark:border-neutral-800 p-6"
        >
          <div className="items-center mb-3 flex gap-3">
            <svg
              className="w-5 h-5 text-gray-700 dark:text-neutral-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_6S5UPrtnW"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p className="text-base font-semibold text-gray-900 dark:text-neutral-100">
              View Resources
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-4 dark:text-neutral-400">
            Browse our knowledge base and FAQ section for quick answers to
            common questions.
          </p>
          <a
            href="/IBNemORnYGF1G7QkM4hn#"
            className="items-center text-sm font-medium text-gray-800 inline-flex
        dark:text-neutral-200 hover:text-gray-600 dark:hover:text-neutral-400 transition-colors"
          >
            Browse Resources
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_zexAidpuQ"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="sm:flex-row justify-center items-center flex flex-col gap-4">
        <a
          href="/IBNemORnYGF1G7QkM4hn#"
          className="w-full sm:w-auto items-center justify-center px-8 py-3 bg-neutral-900
      dark:bg-neutral-100 text-white font-semibold rounded-xl shadow-lg inline-flex dark:text-neutral-900
      hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 hover:shadow-xl border
      border-neutral-800 dark:border-neutral-200"
        >
          Return to Homepage
        </a>
        <a
          href="/IBNemORnYGF1G7QkM4hn#"
          className="w-full sm:w-auto items-center justify-center px-8 py-3 bg-white/50
      dark:bg-neutral-800/50 text-gray-900 font-semibold rounded-xl inline-flex dark:text-neutral-100
      hover:bg-white/80 dark:hover:bg-neutral-800/80 transition-all duration-200 border border-neutral-200
      dark:border-neutral-700 backdrop-blur-sm"
        >
          View My Requests
        </a>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500 mb-2 dark:text-neutral-500">
          Thank you for choosing our services
        </p>
        <div className="items-center justify-center flex gap-2">
          <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
          <div className="w-2 h-2 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page