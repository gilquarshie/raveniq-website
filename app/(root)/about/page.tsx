export default function About(){
    return(
        <div>
                 <section className="bg-white dark:bg-neutral-950 py-20" id="about">
    <div className="mx-auto px-6 max-w-7xl">
      <div className="md:grid-cols-2 items-center grid gap-16">
        <div>
          <svg
            viewBox="0 0 600 500"
            className="w-full h-auto"
            id="Windframe_1fuDf3voN"
          >
            <defs>
              <linearGradient
                id="aboutGrad1"
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
                  style={{ stopColor: "#1e40af", stopOpacity: 1 }}
                />
              </linearGradient>
              <linearGradient
                id="aboutGrad2"
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
                  style={{ stopColor: "#2563eb", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <circle
              cx={300}
              cy={250}
              r={180}
              fill="url(#aboutGrad1)"
              opacity="0.2"
            />
            <circle
              cx={300}
              cy={250}
              r={140}
              fill="url(#aboutGrad2)"
              opacity="0.3"
            />
            <rect
              x={200}
              y={150}
              width={200}
              height={200}
              rx={20}
              fill="url(#aboutGrad1)"
              opacity="0.7"
            />
            <circle cx={300} cy={250} r={80} fill="#3b82f6" opacity="0.8" />
            <rect
              x={250}
              y={200}
              width={100}
              height={100}
              rx={12}
              fill="#60a5fa"
              opacity="0.9"
            />
          </svg>
        </div>
        <div className="space-y-6">
          <div
            className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full inline-block border border-blue-200
        dark:border-blue-800"
          >
            <span className="text-blue-600 text-sm font-semibold dark:text-blue-400">
              Our Mission
            </span>
          </div>
          <p className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Bridging the Digital Divide in West Africa
          </p>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-neutral-400">
            RavenIQ Labs exists to bridge the digital divide in Ghana and West
            Africa. Our vision is not merely to build another software
            application, but to develop a fully integrated digital ecosystem
            tailored to our unique regional context.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed dark:text-neutral-400">
            We link data collection, automation, analytics, and local payment
            systems into one coherent framework. By localizing integration,
            simplifying usability, and ensuring affordability, we unlock a new
            layer of digital efficiency that global tech giants have yet to
            deliver to emerging economies.
          </p>
          <div className="pt-6 grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-neutral-800">
              <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-500">
                Local First
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Solutions built for West African businesses
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-neutral-800">
              <div className="text-3xl font-bold text-blue-600 mb-2 dark:text-blue-500">
                Affordable
              </div>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Pricing that makes sense for SMEs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}