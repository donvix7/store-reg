'use client';

import { usePathname } from 'next/navigation';
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import DesktopTopNavBar from "@/components/DesktopTopNavBar";
import BottomNavigation from "@/components/BottomNavigation";
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
  Logs,
  Map,
  BluetoothConnected,
  CloudSync,
  WifiSync,
  Truck,
  FileStack
} from 'lucide-react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isFocusMode = pathname.endsWith('/record');

  const quickLinks = [
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
      title: "History",
      icon: <History size={20} />,
      href: "/dashboard/admin/history",
    },
    {
      title: "Record Sale",
      icon: <ShoppingCart size={20} />, // Changed from "shopping_cart_checkout" to ShoppingCart
      href: "/dashboard/admin/record",
    },
 
  ];
  const financeLinks = [
    {
      title: "Bank Details",
      icon: <Receipt size={20} />,
      href: "/dashboard/admin/bank",
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
    
  ]
  const inventoryLinks = [
    {
      title: "Inventory",
      icon: <Warehouse size={20} />,
      href: "/dashboard/admin/inventory",
    },
     {
      title: "Orders",
      icon: <Truck size={20} />, // Changed from "add_box" to PackagePlus
      href: "/dashboard/admin/inventory/orders",
    },
    {
      title: "Add Product",
      icon: <PackagePlus size={20} />, // Changed from "add_box" to PackagePlus
      href: "/dashboard/admin/inventory/add-product",
    },
  ]
  const settingsLinks = [

     {
      title: "Accounts",
      icon: <Settings size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/accounts",
    },
      {
      title: "Locations",
      icon: <Map size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/locations",
    },
        {
      title: "Connections",
      icon: <WifiSync size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/connections",
    },
      {
      title: "Subscriptions",
      icon: <FileStack size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/subscriptions",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />, // Changed from "settings" to Settings
      href: "/dashboard/admin/settings",
    },

  ]



  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {!isFocusMode && <Sidebar financeLinks={financeLinks} inventoryLinks={inventoryLinks} quickLinks={quickLinks} settingsLinks={settingsLinks}/>}

      <main className={`flex-1 flex flex-col overflow-y-auto no-scrollbar relative ${isFocusMode ? 'lg:ml-0' : ''}`}>
       {!isFocusMode && <MobileHeader navLinks={financeLinks} inventoryLinks={inventoryLinks} quickLinks={quickLinks} settingsLinks={settingsLinks}/>}

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