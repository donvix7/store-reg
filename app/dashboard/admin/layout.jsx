'use client';

import { usePathname } from 'next/navigation';
import Sidebar from "@/app/components/Sidebar";
import MobileHeader from "@/app/components/MobileHeader";
import DesktopTopNavBar from "@/app/components/DesktopTopNavBar";
import BottomNavigation from "@/app/components/BottomNavigation";
import { 
  LayoutDashboard, 
  Bell, 
  Warehouse, 
  Receipt, 
  FileText, 
  History, 
  PackagePlus, 
  ShoppingCart, 
  Settings,
  // Keep these if they're used elsewhere
  Timer,
  Logs
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isFocusMode = pathname.endsWith('/record');

  const navLinks = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/dashboard/admin",
    },
    {
      title: "Notification",
      icon: <Bell size={20} />,
      href: "/dashboard/admin/notification",
    },
    {
      title: "Inventory",
      icon: <Warehouse size={20} />,
      href: "/dashboard/admin/inventory",
    },
    {
      title: "Invoices",
      icon: <Receipt size={20} />,
      href: "/dashboard/admin/invoices",
    },
    {
      title: "Reports",
      icon: <FileText size={20} />, // Changed from Logs to FileText for better representation
      href: "/dashboard/admin/reports",
    },
    {
      title: "History",
      icon: <History size={20} />,
      href: "/dashboard/admin/history",
    },
    {
      title: "Add Product",
      icon: <PackagePlus size={20} />, // Changed from "add_box" to PackagePlus
      href: "/dashboard/admin/inventory/add-product",
    },
    {
      title: "Record Sale",
      icon: <ShoppingCart size={20} />, // Changed from "shopping_cart_checkout" to ShoppingCart
      href: "/dashboard/admin/record",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/settings",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {!isFocusMode && <Sidebar navLinks={navLinks}/>}

      <main className={`flex-1 flex flex-col overflow-y-auto no-scrollbar relative ${isFocusMode ? 'lg:ml-0' : ''}`}>
       {!isFocusMode && <MobileHeader navLinks={navLinks}/>}

        {/* Desktop TopNavBar - Hidden on Mobile */}
       {!isFocusMode && <DesktopTopNavBar/>}
        
        {/* Content Container with Responsive Padding */}
        <div className={`${isFocusMode ? 'pt-0 pb-0' : 'pt-16 lg:pt-0 pb-20 lg:pb-0'} h-full`}>
          {children}
        </div>

       {!isFocusMode && <BottomNavigation/>}
      </main>
    </div>
  );
}