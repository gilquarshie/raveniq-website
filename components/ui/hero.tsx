"use client";
export function Hero() {
    return (
        <section>
            <div className= "w-full min-h-[90vh] flex items-center justify-between pt-16 container mx-auto px-4"> 
                <div className="flex flex-col gap-6 max-w-xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        We Build Intelligent Systems That Move Businesses Forward.
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg max-w-md">
                        RavenIQ Labs helps companies automate processes, optimize operations,
                        and unlock insight using intelligent analytics and modern systems.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                            >
                                Get Started

                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg border border-gray-500 text-gray-200 hover:border-white hover:text-white transition"
                            >
                              Book Consultation  
                            
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center flex-1">
                    <div className="w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    )
}