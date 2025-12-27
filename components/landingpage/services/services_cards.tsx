"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";


export default function ServicesCard({services}: {services: any[]}) {
    const [theServices, setTheServices] = useState<any[]>([])

    useEffect(() => {
        setTheServices(services)
    }, [services])

    if (!theServices || theServices.length === 0) {
        return <div className="text-black w-full flex justify-center">
                😫
                <span className="text-black">
                    No services available
                </span>
            </div>;
    }

  return (
    <div>
        {services.map((service, index)=> (
         <div 
  key={index} 
  className="relative w-full h-120 rounded-md overflow-hidden"
>
  {/* Background Image */}
  {service.image_url && (
    <div className="absolute inset-0">
      <img 
        src={service.image_url} 
        alt={service.title} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full"
      />
    </div>
  )}
  
  {/* Black Overlay */}
  <div className="absolute inset-0 bg-black/70" />
  {/* Content */}
  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 text-white">
    <h1 className="text-2xl font-bold mb-2">
      {service.title}
    </h1>
    <p className="opacity-80 mb-6 max-w-md">
      {service.shortDescription}
    </p>

    <div className="flex gap-4">
      <Link 
        href={`/services/${service.slug?.current || '#'}`}
        className="bg-blue-700 hover:bg-blue-600 transition-all duration-300 text-white px-6 py-2 rounded-md text-sm font-medium"
      >
        Learn More
      </Link>
      <Link 
        href="/get_started"
        className="bg-white hover:bg-gray-100 transition-all duration-300 text-black px-6 py-2 rounded-md text-sm font-medium"
      >
        Get Started
      </Link>
    </div>
  </div>
</div>
        ))}

    </div>
  )
}