"use server"
import { client } from "@/sanity/lib/client";

interface FormData{
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    service: string;
    pricingPlan: string;
}

interface response{
    type: string;
    success: boolean;
    message?: string;
    data?: any;
}

export default async function POST(formData: FormData) {
//check for the email and check if the same service and same price is not being booked twice
    try {
        // Check if client with same email, service, and pricing plan already exists
        const existingClient = await client.fetch(
            `*[_type == "clients" && email == $email && service == $service && pricing_plan == $pricingPlan][0]`,
            {
                email: formData.email,
                service: formData.service,
                pricingPlan: formData.pricingPlan
            }
        );

        if (existingClient) {
            return {
                type: 'failed',
                success: false,
                message: 'This client with the same service and pricing plan already exists'
            };
        }

        const saved_client = await client.create({
            _type: 'clients',
            first_name: formData.firstName,
            middle_name: formData.middleName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            service: formData.service,
            pricingPlan: formData.pricingPlan,
        });

        if(!saved_client){
            return {
                type: 'error',
                success: false,
                message: 'Failed to save client'
            };
        }
        
        return {
            type: 'success',
            success: true,
            message: 'Client saved successfully',
            data: saved_client
        };

    } catch (error) {
        console.error('Error saving client:', error);
        throw error;
    }
}