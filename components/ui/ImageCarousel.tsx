"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl mt-16">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="relative w-full h-[500px] flex-shrink-0">
            <Image
              src={src}
              alt={"Slide " + idx}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
