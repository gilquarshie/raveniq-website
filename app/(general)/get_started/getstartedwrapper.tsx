"use client"
import { useEffect, useState, FormEvent } from 'react'
import POST from '@/server/get_started/server'
import toast from "react-hot-toast"
import validatePhone from '@/functions/validate_phone';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

// interface Service {
//   title: string;
//   shortDescription: string;
//   cta: any;
//   pricingPlans: any[];
// }

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
  details: string;
}

export default function GetStartedWrapper({ object }: { object: any[] }) {
   const router = useRouter()
   const [propServices, setPropServices] = useState<any[]>([])
    const [formData, setFormData] = useState<FormData>({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
      country: '', // Default to Ghana
      service: '',
      pricingPlan: '',
      details: ''
    })
    const [selectedService, setSelectedService] = useState<any | null>(null)
  const [error, setError] = useState<[{key: string,value: string}] | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [ravenTerms, setRavenTerms] = useState<boolean>(false)

   useEffect(() => {
    if(object.length > 0){
      setPropServices(object)
    }
}, [object]);

useEffect(() => {
  if (formData.service === "") {
    setSelectedService(null);
    return;
  }

  if (formData.service) {
    const service = propServices.find(service => 
      service.title.includes(formData.service)
    ) || null;
    setSelectedService(service);
  }
}, [formData.service, propServices]);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  
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

      if(!ravenTerms){
        toast.error('Please accept the terms and conditions');
        return;
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
            pricingPlan: '',
            details: ''
          });
          setRavenTerms(false);

          router.push('/get_started/thank-you')
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
    <div className="bg-white dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 antialiased">
  <div className="lg:flex-row min-h-screen flex flex-col relative isolate">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-br absolute -top-32 -left-32 from-blue-200 via-blue-300
    to-blue-400 opacity-20 blur-2xl dark:opacity-0"
      />
      <div
        className="h-[40vh] w-[50vh] rounded-full bg-gradient-to-tr absolute -bottom-20 right-10 from-blue-300
    via-blue-400 to-blue-500 opacity-40 blur-3xl dark:opacity-0"
      />
      <div
        className="h-[35vh] w-[45vh] rounded-full bg-gradient-to-b dark:h-[28vh] absolute top-28 left-1/4 from-blue-300
    via-blue-200 to-blue-100 opacity-60 blur-3xl dark:from-blue-600 dark:via-blue-500 dark:to-blue-400
    dark:opacity-10"
      />
    </div>
    <div
      className="w-full lg:w-1/2 lg:p-16 lg:min-h-screen bg-gradient-to-br items-center justify-center from-blue-900
  via-blue-800 to-blue-950 dark:from-blue-950 dark:via-blue-900 dark:to-neutral-950 flex p-8 min-h-[50vh] relative
  overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="w-64 h-64 bg-blue-400 rounded-full absolute top-20 left-20 blur-3xl" />
        <div className="w-96 h-96 bg-blue-600 rounded-full absolute bottom-20 right-20 blur-3xl" />
      </div>
      <div className="max-w-xl relative z-10">
        <div className="mb-8">
          <div className="mb-6 inline-block">
            <svg
              className="w-16 h-16 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              id="Windframe_kMuAHuvGT"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <p className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Something Great Together
          </p>
          <p className="text-lg text-blue-100 mb-8 leading-relaxed">
            Your success is our priority. Share your project details with us,
            and our team will craft a tailored solution that exceeds your
            expectations.
          </p>
          <div className="space-y-4">
            <div className="items-start flex gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center flex-shrink-0 flex">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_GPauN7LCf"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">
                  Fast Response Time
                </p>
                <p className="text-blue-200 text-sm">
                  Get a response within 24 hours from our dedicated team
                </p>
              </div>
            </div>
            <div className="items-start flex gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center flex-shrink-0 flex">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_4uxZmo6EE"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">
                  Customized Solutions
                </p>
                <p className="text-blue-200 text-sm">
                  Every project is unique, and we treat it that way
                </p>
              </div>
            </div>
            <div className="items-start flex gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full items-center justify-center flex-shrink-0 flex">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_Ke6IYyYQT"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Expert Guidance</p>
                <p className="text-blue-200 text-sm">
                  Work with experienced professionals who care about results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="w-full lg:w-1/2 lg:p-16 lg:min-h-screen items-center justify-center flex p-8 min-h-[50vh]">
      <div className="w-full max-w-xl">
        <div
          className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl lg:p-10 border border-neutral-200
      dark:border-neutral-800 p-8 relative"
        >
          <div className="absolute -top-4 left-8">
            <span
              className="bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg
          inline-block"
            >
              Get Started
            </span>
          </div>
          <div className="mt-4 mb-8">
            <p className="text-3xl font-bold text-gray-900 mb-3 dark:text-neutral-100">
              Request a Service
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              Fill out the form below and we'll get back to you as soon as
              possible
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                First Name *
              </label>
              <input
              value={formData.firstName}
              onChange={handleInputChange}
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent
            transition-all w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg text-gray-900"
                id="firstName"
              />
            </div>
            <div>

            <div>
              <label
                htmlFor="middleName"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Middle Name
              </label>
              <input
              value = {formData.middleName}
              onChange={handleInputChange}
                name="middleName"
                type="text"
                placeholder="Enter your middle name"
                className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent
            transition-all w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg text-gray-900"
                id="middleName"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Last Name *
              </label>
              <input
              value = {formData.lastName}
              onChange={handleInputChange}
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent
            transition-all w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg text-gray-900"
                id="lastName"
              />
            </div>

              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Email Address *
              </label>
              <input
              value = {formData.email}
              onChange={handleInputChange}
                name="email"
                type="email"
                placeholder=" john@example.com"
                className="border
            border-neutral-300 dark:border-neutral-700 dark:text-neutral-100 placeholder-gray-400
            dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:focus:ring-blue-600 focus:border-transparent transition-all w-full px-4 py-3 bg-white
            dark:bg-neutral-800 rounded-lg text-gray-900"
                id="email"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Country of Business *
              </label>
              <select
              value = {formData.country}
              onChange={handleInputChange}
                name="country"
                className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:focus:ring-blue-600 focus:border-transparent transition-all w-full px-4 py-3 bg-white
            dark:bg-neutral-800 rounded-lg text-gray-900"
                id="country"
              >
                <option value="">Select a country</option>
                {
                [
                  {name: "Ghana", code: "GH", flag:"gh"},
                {name: "United States", code: "USA", flag:"us"},
                {name: "United Kingdom", code: "UK", flag:"uk"}
                ].map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Phone Number
              </label>
              <input
              value = {formData.phone}
              onChange={handleInputChange}
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent
            transition-all w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg text-gray-900"
                id="phone"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Service Type *
              </label>
              <select
              value = {formData.service}
              onChange={handleInputChange}
              name="service"
              className="border border-neutral-300
            dark:border-neutral-700 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:focus:ring-blue-600 focus:border-transparent transition-all w-full px-4 py-3 bg-white
            dark:bg-neutral-800 rounded-lg text-gray-900"
                id="service"
              >
                <option value="">Select a service</option>
                {propServices.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Budget Range
              </label>
              <select
                name="budget"
                className="border border-neutral-300 dark:border-neutral-700
            dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600
            focus:border-transparent transition-all w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg
            text-gray-900"
                id="budget"
              >
                <option value="">Select budget range</option>
                {selectedService?.pricingPlans?.map((plan: any, index: number) => (
                  <option key={index} value={plan.title}>
                    {` ${plan.name} - \$\ ${plan.price}/${plan.period || "monthly"} `}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="details"
                className="text-sm font-semibold text-gray-700 mb-2 block dark:text-neutral-300"
              >
                Project Details *
              </label>
              <textarea
              value = {formData.details}
              onChange={handleInputChange}
                name="details"
                rows={4}
                placeholder="Tell us about your project,
            goals, and requirements..."
                className="w-full px-4 py-3 bg-white dark:bg-neutral-800 rounded-lg
            text-gray-900 border border-neutral-300 dark:border-neutral-700 dark:text-neutral-100
            placeholder-gray-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500
            dark:focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                id="details"
              />
            </div>
            <div className="items-start flex gap-3">
              <input
              onChange={(e) => setRavenTerms(e.target.checked)}
                name="terms"
                type="checkbox"
                defaultChecked={false}
                className="border-neutral-300 dark:border-neutral-700
            rounded focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 mt-1 w-4 h-4 text-blue-600 bg-white
            dark:bg-neutral-800"
                id="terms"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-neutral-400"
              >
                I agree to the terms and conditions and privacy policy. I
                understand my information will be used to contact me about my
                request.
              </label>
            </div>
            <button
            onClick={handleSubmit}
              type="submit"
              className="hover:bg-blue-700 dark:hover:bg-blue-600 hover:shadow-xl transition-all
          duration-200 transform hover:-translate-y-0.5 w-full bg-blue-600 dark:bg-blue-500 text-white
          font-semibold py-4 px-6 rounded-lg shadow-lg"
            >
              {selectedService? <span>
                {isSubmitting ? <span className="flex justify-center items-center gap-2 w-full h-full"><Loader2 className="animate-spin" />Submitting Form</span> : selectedService.cta.primaryButtonText}
              </span>: "Submit Request"}
            </button>
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="items-center justify-center text-sm text-gray-600 flex gap-2 dark:text-neutral-400">
                <svg
                  className="w-5 h-5 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  id="Windframe_is6pjBDfR"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Your information is secure and confidential</span>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div
            className="bg-white dark:bg-neutral-900 rounded-lg text-center border border-neutral-200
        dark:border-neutral-800 p-4"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">
              500+
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Projects Delivered
            </div>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-lg text-center border border-neutral-200
        dark:border-neutral-800 p-4"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">
              98%
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Client Satisfaction
            </div>
          </div>
          <div
            className="bg-white dark:bg-neutral-900 rounded-lg text-center border border-neutral-200
        dark:border-neutral-800 p-4"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1 dark:text-blue-400">
              24/7
            </div>
            <div className="text-xs text-gray-600 dark:text-neutral-400">
              Support Available
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}