"use client";

import Image from "next/image";
import Link from "next/link";

export function Features() {
  const commonStyles = {
    section: "py-12 bg-slate-50 sm:py-16 lg:py-20 xl:py-24",
    container: "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",
    heading:
      "text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl",
    paragraph:
      "mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8",
    navLink:
      "pb-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border-b",
    activeLink: "text-blue-600 border-blue-600",
    inactiveLink: "text-gray-400 border-transparent hover:text-gray-900",
  };

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-center">
            Supercharge Your Business With Modern Intelligent Systems
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            We help Businesses automate workflows, integrate digital tools and unlock deep insight using
            using intelligent data driven solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <nav className="flex flex-col items-center justify-center space-y-5 text-center sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-16">
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
