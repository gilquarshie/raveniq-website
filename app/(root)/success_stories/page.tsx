"use client";

import { BriefcaseBusiness, Users, Rocket, BarChart3 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SuccessStories() {
    const [formData, setFormData] = useState(
        {
            bussiness_name: "",
            description: "",
            rate: "",
            rate_type: [
                {name: "percentage", symbol: "%"},
                {name: "multiplier", symbol: "x"}
            ],
            area: ""
        }
    )
const [remainingChars, setRemainingChars] = useState(500);
    const maxChars = 500;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }
    useEffect(() => {
        const currentLength = formData.description.length;
        setRemainingChars(maxChars - currentLength);
    }, [formData.description]);

  const successStories = [
    {
      id: 1,
      title: "Retail Revolution",
      description: "How we helped a local retailer increase online sales by 250% with our e-commerce solution.",
      stats: "250%",
      statLabel: "Increase in Sales",
      icon: <BriefcaseBusiness className="w-6 h-6 text-blue-600" />,
      image: "/retail-success.jpg"
    },
    {
      id: 2,
      title: "Service Sector Growth",
      description: "Transforming a service business with digital booking and payment systems, resulting in 3x customer growth.",
      stats: "3x",
      statLabel: "Customer Growth",
      icon: <Users className="w-6 h-6 text-green-600" />,
      image: "/service-growth.jpg"
    },
    {
      id: 3,
      title: "Startup Success",
      description: "From idea to market leader: How our tech stack powered a startup's rapid growth.",
      stats: "12",
      statLabel: "Months to Profitability",
      icon: <Rocket className="w-6 h-6 text-purple-600" />,
      image: "/startup-success.jpg"
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-indigo-200 via-lime-200 to-purple-300 opacity-20 blur-2xl dark:opacity-0" />
          <div className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-fuchsia-300 via-orange-300 to-rose-200 opacity-40 blur-3xl dark:opacity-0" />
        </div>
        
        <div className="mx-auto px-6 py-20 md:py-32 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-full inline-block border border-blue-200 dark:border-blue-800 mb-6">
              <span className="text-blue-600 text-sm font-semibold dark:text-blue-400">
                Success Stories
              </span>
            </div>
            <h1 className="text-2xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Real Impact, <span className="text-blue-600 dark:text-blue-500">Real Results</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Discover how we've helped businesses like yours achieve remarkable growth through digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-neutral-900/30">
        <div className="mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div 
                key={story.id}
                className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                      {story.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {story.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-neutral-400 mb-6">
                    {story.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-neutral-800 pt-4">
                    <div>
                      <p className="text-xl font-bold text-blue-600 dark:text-blue-500">
                        {story.stats}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        {story.statLabel}
                      </p>
                    </div>
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to write your success story?
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
              Join the growing list of businesses that have transformed their operations with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Get Started
              </button>
              <button className="border-2 border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

            {/* add your success story? */}
      <section className="flex flex-col items-center justify-center gap-4 w-full bg-white py-12 md:py-24 dark:bg-neutral-900  text-sm">
        <span className=""><h1 className="text-4xl dark:text-blue-500 font-bold capitalize">Add your testimonials</h1></span>
            <div className="space-y-10 w-100">
                    <div className="flex flex-col">
                        <label htmlFor="name">Business Name</label>
                        <input name="bussiness_name" type="text"  className="border-2 dark:border-white border-gray-300 rounded-md py-2 pl-2 w-100" onChange={handleChange}/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="name">Success Story</label>
                        <textarea 
                        name="description"
                        className= "border-2 dark:border-white border-gray-300  rounded-md py-2 pl-2 w-100 py-4" 
                        onChange={handleChange}
                        maxLength={maxChars}
                        />
                        <span className={`text-gray-400 w-full flex justify-end ${remainingChars <= 100 ? "text-red-500": ""}`}><span className="">{remainingChars == 0 ? "Out of " : remainingChars}</span>  Words</span>
                    </div>
            </div>
      </section>
    </div>
  );
}