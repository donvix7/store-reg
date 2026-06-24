import { Search, Bell, Settings } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const DesktopTopNavBar = () => {
    const pathname = usePathname();
  return (
    <div>
         <header className="hidden lg:flex sticky top-0 z-10 bg-background/80 backdrop-blur-md px-10 py-6 items-center justify-between">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
              <input className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all text-on-surface" placeholder="Search inventory, SKUs, or reports..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-8">
           <Link href="/dashboard/admin/notification">
            <button className={`w-11 h-11 flex items-center justify-center rounded-xl transition-colors ${pathname.includes('notification') ? 'bg-primary-container text-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container'}`}>
              <Bell size={22} fill={pathname.includes('notification') ? "currentColor" : "none"} />
            </button>
           </Link>
           <Link href="/dashboard/admin/settings">
            <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors">
              <Settings size={22} />
            </button>
           </Link>
          </div>
        </header>
    </div>
  )
}

export default DesktopTopNavBar