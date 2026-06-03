import { defineType, defineField } from "sanity";
import { UserIcon } from "lucide-react";

export const Users = defineType({
  name: "users",
  title: "Users",
  type: "document",
  icon: UserIcon,
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
      name: "phone_number",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
    }),
    defineField({
      name: "date_of_birth",
      title: "Date of Birth",
      type: "date",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Admin", value: "admin" },
          { title: "User", value: "user" },
          { title: "Guest", value: "guest" },
        ],
      },
    }),
    defineField({
      name: "profile_picture",
      title: "Profile Picture",
      type: "image",
    }),
    defineField({
      name: "sub_role",
      title: "Sub Role",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Main Admin", value: "Main Admin" },
              { title: "Assistant Admin", value: "Assistant Admin" },
              { title: "Developer", value: "Developer" },
            ],
          },
        },
      ],
      hidden: ({ parent }) => parent?.role !== "admin",
    }),
    defineField({
      name: "password",
      title: "Password",
      type: "string",
    }),
    defineField({
        name: 'created_at',
        title: 'Created At',
        type: 'datetime',
        initialValue: new Date().toISOString(),
    }),
    defineField({
        name: 'updated_at',
        title: 'Updated At',
        type: 'datetime',
        initialValue: new Date().toISOString(),
    })
  ],
});