"use client"
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Megaphone,
  Puzzle,
  Settings,
  MessageCircle,
  ChevronDown,
  Bell,
  User,
  Store,
  Download,
  UserPlus,
  Users as UsersIcon,
  Mail,
  Upload,
  Search,
  Filter,
  MoreVertical,
  Plus,
  ArrowUp,
  ArrowDown,
  Eye
} from 'lucide-react';

const page = () => {
  const [activeTab, setActiveTab] = useState('Customers');
  const [stats, setStats] = useState([
    { label: 'Total Customers', value: 0, icon: User, color: 'bg-[#dae1ff] text-[#0050cb]' },
    { label: 'Customer groups', value: 0, icon: UsersIcon, color: 'bg-[#d9e3f2] text-[#555f6c]' },
    { label: 'Newsletter Subscribers', value: 0, icon: Mail, color: 'bg-[#ffdbd0] text-[#a33200]' }
  ]);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions' }
  ];

  const tabs = ['Customers', 'Customer Groups', 'Newsletter'];

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats(prev =>
        prev.map(stat => ({
          ...stat,
          value: stat.label === 'Total Customers' ? 1248 : 
                 stat.label === 'Customer groups' ? 12 : 345
        }))
      );
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       <header className="h-16 w-full fixed top-0 z-40 pl-[260px] border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-8">
        <div className="flex items-center gap-4">
          <div className="bg-[#f3f3f6] px-3 py-1.5 rounded-lg border border-[#c2c6d8] flex items-center gap-2 cursor-pointer hover:bg-[#e8e8ea] transition-colors">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">Location:</span>
            <span className="text-[14px] leading-[20px] font-semibold text-[#0050cb]">Headquarters</span>
            <ChevronDown size={16} className="text-[#0050cb]" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-[#0050cb] font-semibold text-[14px] leading-[20px] hover:bg-[#dae1ff] transition-all rounded-lg flex items-center gap-2">
            Point of Sale
          </button>
          <button className="px-4 py-2 bg-[#0066ff] text-white font-semibold text-[14px] leading-[20px] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95">
            View Store
          </button>
          <div className="h-8 w-[1px] bg-[#c2c6d8] mx-2"></div>
          <button className="p-2 text-[#424656] hover:bg-[#e8e8ea] rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
          </button>
          <div className="flex items-center gap-3 pl-2">
            <div className="text-right hidden lg:block">
              <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e] leading-none">Nnaemeka Uzuegbu</p>
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] mt-1 uppercase tracking-tight">Admin</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#d9e3f2] flex items-center justify-center overflow-hidden border-2 border-[#dae1ff] shadow-sm cursor-pointer">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHGkm61tW1y9Vcksz1OSRbK9O899CJ7Cbok8lJLNfvyyu3MDyOchFy0AsKJ2LQ3RSk2raezyLucxQavevue7l49S9Uy_rnOygc8f_-C_avh1B9zlLdq3cRHuPF9mtIwUYbmF9C-N8lNaC0jhoN9ZDhbd8vlPwzqtmaJW1sMflBOAEgkh0md4kHQAsn-IZPd35HYQ-gxdeHwLn8fUcVfZI94ehCmQBKB8fa9N48FKEaysc9JJUg-my-FAB7xYxGlc4Tp4rRPGcnY7aI"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 pb-12 px-8 min-h-screen">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Customers</h2>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 border border-[#0050cb] text-[#0050cb] font-semibold text-[14px] leading-[20px] rounded-lg hover:bg-[#dae1ff] transition-all flex items-center gap-2 active:scale-98">
              <Download size={20} />
              Export CSV
            </button>
            <button className="px-6 py-2.5 bg-[#0066ff] text-white font-semibold text-[14px] leading-[20px] rounded-lg shadow-lg shadow-[#0066ff]/20 hover:shadow-[#0066ff]/30 transition-all flex items-center gap-2 active:scale-98">
              <UserPlus size={20} />
              + Add New Customer
            </button>
          </div>
        </div>

        {/* KPI Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-[#dae1ff] transition-all group">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] mb-1 uppercase">{stat.label}</p>
                    <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">
                      {stat.value.toLocaleString()}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={28} fill={stat.value > 0 ? 'currentColor' : 'none'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#c2c6d8]/30">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-semibold text-[14px] leading-[20px] transition-all ${
                activeTab === tab
                  ? 'text-[#0050cb] border-b-2 border-[#0050cb]'
                  : 'font-medium text-[#424656] hover:text-[#0050cb]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty State Container */}
        <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 min-h-[500px] flex flex-col items-center justify-center text-center p-12 overflow-hidden relative">
          {/* Decorative atmospheric circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#dae1ff]/20 rounded-full blur-[80px] -z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            {/* Person Illustration Wrapper */}
            <div className="relative mb-8 group">
              <div className="w-32 h-32 rounded-full bg-[#b3c5ff]/30 flex items-center justify-center animate-pulse">
                <div className="w-24 h-24 rounded-full bg-[#0066ff]/10 flex items-center justify-center">
                  <span className="text-[64px] text-[#0050cb]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    🔍
                  </span>
                </div>
              </div>
              {/* Small decorative pips */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ffdbd0] rounded-full shadow-sm"></div>
              <div className="absolute -bottom-1 -left-4 w-6 h-6 bg-[#d9e3f2] rounded-full shadow-sm opacity-60"></div>
            </div>
            <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2">Add customers to your contact list</h3>
            <p className="text-[16px] leading-[24px] text-[#424656] max-w-md mb-8">
              Start growing your business by building your database. You can add a new customer manually or import your existing contacts in bulk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#0066ff] text-white font-bold text-[14px] leading-[20px] rounded-xl shadow-xl shadow-[#0066ff]/30 hover:bg-[#0050cb] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                <UserPlus size={20} />
                + Add Customers
              </button>
              <button className="px-8 py-3 bg-[#eeeef0] text-[#424656] font-bold text-[14px] leading-[20px] rounded-xl hover:bg-[#e8e8ea] transition-all flex items-center gap-2 active:scale-95">
                <Upload size={20} />
                Import Contacts
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page