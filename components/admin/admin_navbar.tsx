"use client"
import { Settings, User } from "lucide-react"
import {get} from "idb-keyval"

function AdminNavbar() {
    const data = get("")
  return (
    <div className="w-full h-15 grid grid-cols-3 px-3">
        <div className="col-span-1 flex items-center">
            <img src="/favicon.ico" alt="favicon" className="w-5 h-6" />
            <h1 className="text-sm font-bold text-blue-400">RavenIQ Labs</h1>
        </div>
        <div className="col-span-2 flex justify-end gap-4">
            <div className="flex items-center gap-2 text-xs">
                <Settings size={16}/>
                <p>Settings</p>
            </div>

            <div className="flex items-center gap-2 text-xs">
                <User size={16}/>
                <p>Profile</p>
            </div>

        </div>
    </div>
  )
}

export default AdminNavbar