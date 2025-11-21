"use client";

import { Heading } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Features() {
const commonStyles = {   
  section: "py-32 sm:py-40 lg:py-48",
  container:
    "container mx-auto px-4 flex flex-col items-center gap-12",
  heading:
    "text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight",
  paragraph:
    "mt-6 text-lg text-gray-300 sm:text-xl leading-relaxed max-w-3xl mx-auto",
  navLink:
    "pb-3 text-sm font-medium tracking-wide uppercase text-gray-400 hover:text-white border-b transition-all duration-200",
  activeLink: "text-blue-500 border-blue-500",
  inactiveLink: "text-gray-500 border-transparent hover:text-gray-300",
};


  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={commonStyles.heading}>
            Supercharge Your Business With Modern Intelligent Systems
          </h2>
          <p className={commonStyles.paragraph}>
            We help Businesses automate workflows, integrate digital tools and unlock deep insight using
            using intelligent data driven solutions.
          </p>
        </div>

        <div className={`${commonStyles.container} mt-10`}>
          <nav className="mt-8 flex flex-col items-center justify-center space-y-5 text-center sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-16">
            <Link
              href="#"
              title="One click analytics"
              className={`${commonStyles.navLink} ${commonStyles.activeLink}`}
            >
              Business Process Automation
            </Link>

            <Link
              href="#"
              title="Create Products"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              Data Dashboards & Reporting
            </Link>

            <Link
              href="#"
              title="Sales Alert"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              AI Solutions for Business
            </Link>

            <Link
              href="#"
              title="File Storages"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              Website & Systems Integration
            </Link>

            <Link
              href="#"
              title="File Storages"
              className={`${commonStyles.navLink} ${commonStyles.inactiveLink}`}
            >
              AI Assistants & Chatbots
            </Link>
          </nav>

          <div className="mt-6 sm:mt-8">
            <Image
              className="w-full shadow-2xl rounded-2xl"
              src="https://www.auraui.com/images/analytic_image.avif"
              alt="Dashboard Mockup"
              width={800}
              height={600}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
