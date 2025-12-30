"use client"
import { useEffect, useState, FormEvent } from 'react'
import POST from '@/server/get_started/server'
import toast from "react-hot-toast"
import validatePhone from '@/functions/validate_phone';
import { Loader2 } from 'lucide-react';

interface Service {
  title: string;
  shortDescription: string;
  cta: any;
  pricingPlans: any;
}

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  country: string;
  service: string;
  pricingPlan: string;
}

export default function GetStartedWrapper({ title, shortDescription, cta, pricingPlans }: { title: string, shortDescription: string, cta: any, pricingPlans?: any[] }) {
   const [services, setServices] = useState<Service[]>([])
    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
      country: '', // Default to Ghana
      service: '',
      pricingPlan: ''
    })
    const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [error, setError] = useState<[{key: string,value: string}] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    useEffect(() => {
      setServices([{ title, shortDescription, cta, pricingPlans }])
    }, [title, shortDescription, cta])
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  
    useEffect(() => {
      if(formData.service !== "") {
        const theSelectedServices = services.find((service) => service.title === formData.service)
        if(theSelectedServices) {
          setSelectedService(theSelectedServices)
        }
      }
  
      if(formData.service === "") {
        setSelectedService(null)
      }
    }, [formData])
  
    const handleSubmit = async(e: FormEvent) => {
      e.preventDefault()

      const validation_phone_response = validatePhone(formData.country, formData.phone);

      if (!validation_phone_response.success) {
        toast.error(validation_phone_response.message || 'Invalid phone number');
       setError([{key: "phone", value: validation_phone_response.message}])

       setTimeout(() => {
        setError(null);
       }, 5000);
       return;
      } else {
       setError(null);
      }

      try {
        setIsSubmitting(true);
        const response = await POST(formData);
        if(response.success){
          setIsSubmitting(false);
          toast.success(response.message || 'Form submitted successfully!');

          setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            phone: '',
            businessName: '',
            country: '',
            service: '',
            pricingPlan: ''
          });
        } else {
          toast.error(response.message || 'Form submission failed.');
        }

      } catch (error) {
        console.error('Error submitting form:', error)
        toast.error('Failed to submit form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }


  return (
     <div className='bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased min-h-screen grid grid-cols-1 md:grid-cols-2'>
        <div className='mx-auto px-6 lg:px-8 max-w-7xl'>
            <div className='animate-float-medium bg-violet-500 dark:bg-violet-900 h-[60vh] w-[60vh] rounded-full -top-32 -left-32 opacity-20 blur-3xl absolute top-10 left-1/2 transform -translate-x-1/2'></div>
            <div className='bg-rose-500 dark:bg-rose-900 h-[20vh] w-[40vh] rounded-full -bottom-10 right-5 opacity-40 blur-3xl absolute bottom-20 left-20 transform -translate-x-1/2'></div>
            <div className=' bg-blue-500 dark:bg-blue-900 h-[20vh] w-[40vh] rounded-full -bottom-10 right-5 opacity-40 blur-3xl absolute top-20 left-1/2 transform -translate-x-1/2'></div>
            <div className='animate-ping bg-indigo-500 dark:bg-indigo-900 h-[20vh] w-[40vh] rounded-full -bottom-10 right-5 opacity-40 blur-3xl absolute top-10 left-2 transform -translate-x-1/2'></div>
                     <div className='w-full max-w-md h-full flex juistify-center items-center '>
                              <div className="space-y-4 max-w-md">
  <h1 className="text-2xl font-medium text-gray-800 dark:text-gray-100">
    Hello, I'm <span className="font-mono text-blue-500">{formData.firstName || "a representative"}</span>
  </h1>
  
  <div className="space-y-2 text-gray-600 dark:text-gray-300">
    <p>
      <span className="font-medium">Email:</span>{' '}
      <span className="font-mono">{formData.email || "your.email@example.com"}</span>
    </p>
    
    <p>
      On behalf of{' '}
      <span className="font-medium">
        {formData.businessName || "our organization"}
      </span>
      , we would like to
    </p>
    
    <p>
      request <span className="font-medium text-blue-500">{formData.service || "your services"}</span>
    </p>
    
    <p className="pt-2 text-gray-500 dark:text-gray-400">
      We look forward to working with the team at{' '}
      <span className="font-semibold text-blue-500">RavenIQ Labs</span>.
    </p>
  </div>
</div>
                    </div>
          </div>

        <div className='bg-gray-50 dark:bg-neutral-900 relative'>
          <div className='mx-auto px-6 lg:px-8 max-w-7x flex flex-col items-center justify-center h-full w-full'>
            <img src="/favicon.ico" className='w-7 h-10' alt="" />
                <div className='w-full flex flex-col items-center justify-center'>
                  <h1 className='text-4xl font-bold mb-6 text-gray-900 leading-tight dark:text-neutral-100'>Get Sta<span className='text-blue-600 dark:text-blue-400'>rted</span></h1>
                  <p className=' text-gray-600 mb-8 leading-relaxed dark:text-neutral-400'>
                    Start your journey with us today!
                </p>
            </div>
                <div>
        <form onSubmit={handleSubmit} className='space-y-5 text-sm'>
      <div className='grid grid-cols-3 gap-3'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2'
            required
          />
        </div>

        <div className='flex flex-col gap-2'> 
          <label htmlFor="middleName">Middle Name (optional)</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2'
          />
        </div>
        
        <div className='flex flex-col gap-2'>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2'
            required
          />
        </div>
      </div>

      <div className='space-y-10 w-1/2'>
        <div className='flex flex-row gap-5 my-10'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className='border border-gray-300 rounded-lg p-2'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className='border border-gray-300 rounded-lg p-2'
              required
            />
          {error?.find(e => e.key === "phone") && (
            <div className='text-red-500 text-xs'>{error.find(e => e.key === "phone")?.value}</div>
          )}
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="businessName">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2'
            required
          />
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="country">Country of Business</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2 dark:bg-neutral-900 dark:border-neutral-700'
            required
          >
            <option value="">Select your country</option>
            {[
              {country_name: "Ghana", code:"GH", flag:"🇬🇭"},
              {country_name:"United States", code:"US", flag:"🇺🇸"},
              {country_name:"United Kingdom", code:"UK", flag:"🇬🇧"},
            ].map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.country_name}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="service">Request</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2 dark:bg-neutral-900 dark:border-neutral-700'
            required
          >
            <option value="">Choose Service</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col gap-2'>
          <label htmlFor="pricingPlan">Pricing Plan</label>
          <select
            id="pricingPlan"
            name="pricingPlan"
            value={formData.pricingPlan}
            onChange={handleInputChange}
            className='border border-gray-300 rounded-lg p-2 dark:bg-neutral-900 dark:border-neutral-700'
            required
          >
            <option value="">Choose Pricing Plan</option>
            {selectedService?.pricingPlans?.map((plan:any, index:number) => (
              <option key={index} value={plan.name}>
                {plan.name} - ${plan.price}/month {plan.billingPeriod === 'yearly' ? '(billed yearly)' : '(billed monthly)'} {plan.features?.length ? `- ${plan.features.length} features` : ''}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className='hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg w-full mt-10'
      >
       {isSubmitting ? (
          <span className='w-full h-full flex items-center justify-center'><Loader2 className="animate-spin mr-2 h-4 w-4 text-white" /> Submitting...</span>
        ) : (
          selectedService?.cta?.primaryButtonText || "Get Started Now"
        )}
      </button>
    </form>        
                </div>
          </div>
        </div>
    </div>
  )
}