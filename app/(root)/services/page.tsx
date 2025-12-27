'use client';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
  import { usePathname } from 'next/navigation';
  import ServicesCard from '@/components/landingpage/services/services_cards'
import { Loader2 } from 'lucide-react';


interface Service {
  _id: string;
  title: string;
  shortDescription: string;
  slug: {
    current: string;
  };
  isPremium?: boolean;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "services"] {
            ...,
            "image_url": main_imxage.asset->url
          }
        `);
        setServices(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
        <Loader2 className="animate-spin text-blue-600"/>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Do you want to set up a business or struggling with your current one? At RavenIQ, we offer a comprehensive 
            range of services designed to elevate your business to new heights. Explore our services below to find the 
            perfect solution for your needs.
          </p>
        </div>

        {/* Services Navigation Tabs */}
        <div className="mb-12 border-b border-gray-200 dark:border-gray-700">
          <nav className="flex flex-wrap justify-center -mb-px" aria-label="Services navigation">
            {services.map((service) => (
              <Link
                key={service._id}
                href={`/services/${service.slug.current}`}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  pathname === `/services/${service.slug}`
                    ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {service.title}
                {service.isPremium && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                    Premium
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services List */}
            <section className=''>
                <ServicesCard  services={services}/>
            </section>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your business?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-sm">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}