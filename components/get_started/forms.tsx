"use client"
import { useEffect, useState, FormEvent } from 'react'

interface Service {
  title: string;
  shortDescription: string;
  cta: any;
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
}

export default function GetStartedForms({ title, shortDescription, cta }: { title: string, shortDescription: string, cta: any }) {
  const [services, setServices] = useState<Service[]>([])
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    businessName: '',
    country: 'GH', // Default to Ghana
    service: ''
  })
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  useEffect(() => {
    setServices([{ title, shortDescription, cta }])
  }, [title, shortDescription, cta])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if(formData.service !== "") {
      const selectedService = services.find((service) => service.title === formData.service)
      if(selectedService) {
        setSelectedService(selectedService)
      }
    }

    if(formData.service === "") {
      setSelectedService(null)
    }
  }, [formData])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

  }

  return (
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
      </div>

      <button
        type="submit"
        className='hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors bg-blue-600 dark:bg-blue-700 text-white px-6 py-2 rounded-lg w-full mt-10'
      >
        {selectedService?.cta?.primaryButtonText || "Get Started Now"}
      </button>
    </form>
  )
}