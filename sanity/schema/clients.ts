import {defineType, defineField} from 'sanity'

export const Clients = defineType({
    name: "clients",
    title: "Clients",
    type: "document",
    icon: () => "👤",
    fields: [
        defineField({
            name: "first_name",
            title: "First Name",
            type: "string",
        }),
        defineField({
            name: "middle_name",
            title: "Middle Name",
            type: "string",
        }),
        defineField({
            name: "last_name",
            title: "Last Name",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
        }),
        defineField({
            name: "businessName",
            title: "Business Name",
            type: "string",
        }),
        defineField({
            name: "country",
            title: "Country",
            type: "string",
        }),
        defineField({
            name: "service",
            title: "Service",
            type: "string",
        }),
        defineField({
            name: "pricingPlan",
            title: "Pricing Plan",
            type: "string",
        }),
    ],
    
    preview: {
        select: {
            title: "email",
            subtitle: "businessName",
        },
    },
})