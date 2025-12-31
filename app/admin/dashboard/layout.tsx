import AdminNavbar from "@/components/admin/admin_navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-black dark:bg-neutral-950 dark:text-white h-screen w-full">
        <AdminNavbar/>
        {children}
    </div>
  );
}