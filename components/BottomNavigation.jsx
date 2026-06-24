"use client"
import { LayoutDashboard, Package, History, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const BottomNavigation = () => {
    const pathname = usePathname();
   

  const isActive = (path) => {
    if (path === "/dashboard/admin") return pathname === path;
    return pathname.startsWith(path);
  };
 
  return (
    <div>
         {/* Bottom Navigation - Visible on Mobile Only */}
        <nav className="fixed bottom-0 left-0 right-0 h-20 bg-background/80 backdrop-blur-md border-t border-outline-variant/15 px-6 flex lg:hidden items-center justify-between z-50">
          {[
            { title: "Dashboard", icon: <LayoutDashboard size={24} />, href: "/dashboard/admin" },
            { title: "Inventory", icon: <Package size={24} />, href: "/dashboard/admin/inventory" },
            { title: "History", icon: <History size={24} />, href: "/dashboard/admin/history" },
            { title: "Alerts", icon: <Bell size={24} />, href: "/dashboard/admin/notification" }
          ].map((item, index) => {
            const active = isActive(item.href);
            return (
              <Link key={index} href={item.href} className="flex flex-col items-center justify-center gap-1 group relative min-w-[64px]">
                <div className={`transition-colors ${active ? 'text-primary' : 'text-outline group-hover:text-primary'}`}>
                  {item.icon}
                </div>
                <span className={`text-[10px] transition-colors ${active ? 'text-primary font-bold' : 'text-outline font-medium'}`}>
                  {item.title}
                </span>
                {active && <div className="w-1.5 h-1.5 bg-primary rounded-full absolute -bottom-2"></div>}
              </Link>
            );
          })}
        </nav>
    </div>
  )
}

export default BottomNavigation