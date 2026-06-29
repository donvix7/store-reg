"use client"
import React, { useState } from 'react';
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
  CreditCard,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  Store,
  Image,
  FileText,
  ShoppingBag,
  Tag,
  User,
  Globe,
  TrendingUp,
  Handshake,
  Eye,
  EyeOff,
  Info,
  Copy,
  Download,
  HelpCircle,
  Rocket,
  ArrowUpRight,
  Clock,
  Calendar,
  Zap
} from 'lucide-react';

export default function DashboardAdminPage() {
const [showBalance, setShowBalance] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Package, label: 'Products', hasChevron: true },
    { icon: ShoppingCart, label: 'Orders', hasChevron: true },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing', hasChevron: true },
    { icon: Puzzle, label: 'Extensions', hasChevron: true }
  ];

  const bottomNav = [
    { icon: Settings, label: 'Operations', hasChevron: true },
    { icon: CreditCard, label: 'Finance', hasChevron: true }
  ];

  const todoItems = [
    { icon: Store, label: 'Add a description for your sto...' },
    { icon: Image, label: 'Upload an image for your store' },
    { icon: FileText, label: 'Add a tagline for your store' }
  ];

  const kpis = [
    { value: '2', label: 'Orders', icon: ShoppingBag, color: 'bg-[#E6F0FF]', iconColor: 'text-[#189241]' },
    { value: '3', label: 'Products sold', icon: Tag, color: 'bg-[#F0F4FF]', iconColor: 'text-[#0050cb]' },
    { value: '0', label: 'New Customers', icon: User, color: 'bg-[#FFF9E6]', iconColor: 'text-[#F59E0B]' },
    { value: '0', label: 'Website Visits', icon: Globe, color: 'bg-[#FFE6E6]', iconColor: 'text-[#EF4444]' }
  ];

  const salesChannels = [
    { label: 'Walk-in', percentage: 67, color: '#8A3FFC' },
    { label: 'Instagram', percentage: 33, color: '#0050cb' }
  ];
  return (
    <div className="p-5 pb-12 space-y-10 flex flex-col">
      
      {/* Welcome Section */}
      <header className="h-16 w-full  z-40 border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-[#eeeef0] px-3 py-1.5 rounded-full border border-[#c2c6d8]/50">
            <span className="text-[14px] leading-[20px] text-[#424656]">Location: <span className="font-bold text-[#0050cb]">Headquarters</span></span>
            <ChevronDown size={16} className="text-[#424656]" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-[#424656] bg-[#f3f3f6] px-4 py-2 rounded-lg font-semibold hover:bg-[#e8e8ea] transition-all">
            Point of Sale
          </button>
          <button className="bg-[#189241] text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 transition-all">
            View Store
          </button>
          <div className="w-10 h-10 rounded-full bg-[#eeeef0] flex items-center justify-center relative cursor-pointer">
            <div className="relative">
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-2 border-l border-[#c2c6d8]">
            <div className="w-10 h-10 rounded-full bg-[#0066ff] overflow-hidden border-2 border-[#0066ff]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxdMdSjbnuU7gOZn3rdwoOLVjLYp6NJmS65YsturS_2-2CX97Ax7Z6uXYDimodLTEwjIngA4W0OUAmyu5jnq-ll9KiAQPIxXZIS4_1VRw_E8qCcTkWFo_ENvYpGJgBM8vGyplFlmLqP4qFoU51dPuu-P2-w40V86Q0uHZo_Dw3BBdXLgX2bSzHNtAv55DviS2kRctZ-Y9ErBLEzPr4KR6HREo2alff30RGzLr16RBhPWQzsrQ6cpch-1_GX3540OEqoPHrhSbJ4W4f"
              />
            </div>
            <div className="hidden xl:block text-left">
              <p className="text-[14px] leading-[20px] font-bold leading-none">Nnaemeka Uzuegbu</p>
            </div>
            <ChevronDown size={20} className="text-[#424656]" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 min-h-screen">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Hello Nnaemeka</h1>
            <p className="text-[14px] leading-[20px] text-[#0050cb] font-medium">Relax. Don't let customers stress you. 😌</p>
          </div>
          <button className="bg-[#F59E0B] text-white px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 shadow-sm hover:brightness-105 transition-all">
            inventory Trial
          </button>
        </div>

        {/* Row 1: Wallets & To-dos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Wallet Card */}
          <div className="lg:col-span-5 bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between h-full border border-[#c2c6d8]/30">
            <div className="flex justify-between items-start z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#727687]">
                  <span className="uppercase tracking-widest text-[10px] font-black">Wallet Balance</span>
                  <button onClick={() => setShowBalance(!showBalance)}>
                    {showBalance ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                <div className="flex gap-2 py-2">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 h-4 rounded-full bg-[#1a1c1e]"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-[#eeeef0] px-2 py-1 rounded border border-[#c2c6d8]/50">
                <img
                  className="w-5 h-4 object-cover rounded-sm"
                  alt="Nigerian flag"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Hb_SnddZRU0cZ7iYrNsYtPItNKR6XMwnwEXNnIjHvc_ZP2bIRFX30NfooQk7qSM8abfAR-Mg5ej8CXoLVt_Ck-SRKxCK9gihzB6DR-U6xsayYdHIdDnLDt11JfKYO4v9nSZ803RfNiEAuafqbYcOOiFiowT-y7nAOmj85IAcos1_SpdjZT5d2ebkMUafuHZiOZcJ295eJukvkOs1RtvvXcbbPEnTTqxmsxa4pHtMF04oDeeMwAEcmwUee_UnhmDXy3radNnmApDu"
                />
                <span className="text-[12px] font-bold">NGN</span>
              </div>
            </div>

            {/* Settlement Mini-Card */}
            <div className="bg-[#f3f3f6] p-4 rounded-lg border border-[#c2c6d8]/40 z-10 w-fit">
              <div className="flex items-center gap-2 text-[#424656] mb-1">
                <span className="text-[11px] font-bold">Pending Settlement</span>
                <Info size={14} className="text-[#0050cb]" />
              </div>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#424656]"></div>
                ))}
              </div>
            </div>

            {/* Abstract Decorative Background */}
            <div className="absolute right-0 bottom-0 w-48 h-48 opacity-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,86.6,-0.3C86.1,15.1,81.7,30.2,74.1,43.4C66.5,56.6,55.7,67.9,42.5,75.3C29.3,82.7,14.7,86.2,0.4,85.5C-13.8,84.7,-27.7,79.8,-40.5,72.2C-53.3,64.6,-65,54.3,-73.2,41.5C-81.4,28.7,-86,13.4,-85.4,-1.3C-84.8,-15.9,-79,-29.9,-70.3,-41.8C-61.6,-53.7,-50,-63.5,-37,-71.2C-24,-78.9,-12,-84.5,2.4,-88.7C16.8,-92.9,31.3,-83.6,44.7,-76.4Z"
                  fill="#0050cb"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>

          {/* Account Details Card */}
          <div className="lg:col-span-4 bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 flex flex-col gap-4 h-full">
              <button className="mt-2 text-[12px] font-bold text-[#189241] flex items-center justify-end gap-1 group">
              Copy full account details
              <Copy size={14} className="transition-transform group-hover:scale-110" />
            </button>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="text-[#cc4204]">🏦</span>
                <h3 className="text-[20px] leading-[28px] font-semibold text-[16px] font-bold">Account Details</h3>
              </div>
              <Info size={16} className="text-[#424656] cursor-pointer" />
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <p className="text-[11px] text-[#727687] font-semibold uppercase mb-0.5">Bank Name</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="font-bold text-[#1a1c1e]">Paystack-Titan</p>
                   <button className="flex items-center gap-1 text-[12px] font-bold text-[#189241]">
                      <Copy size={14} />
                      Copy
                    </button>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-[#727687] font-semibold uppercase mb-0.5">Account Number</p>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[24px] leading-[32px] font-bold text-[18px]">9740206087</p>
                  <button className="flex items-center gap-1 text-[12px] font-bold text-[#189241]">
                    <Copy size={14} />
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[11px] text-[#727687] font-semibold uppercase mb-0.5">Account Name</p>
                <p className="font-bold text-[#1a1c1e]">inventory/ontario</p>
              </div>
            </div>
           
          </div>

          {/* To-do List */}
          <div className="lg:col-span-3 bg-[#EBF7F0] rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#B3E1C8] flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[20px] leading-[28px] font-semibold text-[16px] font-bold text-[#0D5F2D]">To-do List</h3>
              <a className="text-[#189241] text-[12px] font-bold hover:underline" href="#">View All</a>
            </div>
            <div className="space-y-3">
              {todoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-3 rounded-lg flex items-center gap-3 border border-[#B3E1C8] cursor-pointer hover:bg-[#f9f9fc] transition-colors"
                  >
                    <Icon size={20} className="text-[#189241]" />
                    <span className="text-[12px] font-medium flex-1 truncate">{item.label}</span>
                    <ChevronRight size={16} className="text-[#727687]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Row 2: Business Overview */}
        <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Business Overview</h2>
              <p className="text-[14px] leading-[20px] text-[#727687]">Here is how your business is doing today</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#f3f3f6] px-4 py-2 rounded-lg border border-[#c2c6d8]/50">
                <span className="text-[13px] font-bold">Business report is ready.</span>
                <button className="bg-[#189241] p-1 rounded">
                  <Download size={14} className="text-white" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#f3f3f6] border border-[#c2c6d8] rounded-lg font-bold text-[13px]">
                This Month
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Main KPIs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <div key={index} className={`p-5 rounded-xl ${kpi.color} flex items-start justify-between`}>
                  <div>
                    <p className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mb-1">{kpi.value}</p>
                    <p className="text-[12px] font-semibold text-[#727687]">{kpi.label}</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                    <Icon size={20} className={kpi.iconColor} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#c2c6d8]/30"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[10px] font-bold text-[#727687] uppercase tracking-widest">Overview of your business</span>
            </div>
          </div>

          {/* Footer Summary Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#727687]">
                <span className="text-[18px]">💰</span>
                <p className="text-[11px] font-bold uppercase">Total Sales</p>
              </div>
              <p className="text-[24px] leading-[32px] font-bold text-[20px]">₦3,000.00</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#727687]">
                <TrendingUp size={18} />
                <p className="text-[11px] font-bold uppercase">Total Settled</p>
              </div>
              <p className="text-[24px] leading-[32px] font-bold text-[20px]">₦0.00</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#727687]">
                <span className="text-[18px]">💳</span>
                <p className="text-[11px] font-bold uppercase">Total Owed</p>
              </div>
              <p className="text-[24px] leading-[32px] font-bold text-[20px]">₦0.00</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-[#727687]">
                <Handshake size={18} />
                <p className="text-[11px] font-bold uppercase">Offline Sales</p>
              </div>
              <p className="text-[24px] leading-[32px] font-bold text-[20px]">₦3,000.00</p>
            </div>
          </div>
        </div>

        {/* Row 3: Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30">
            <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-8">Top 5 Sales Channel</h3>
            <div className="flex items-center justify-center relative mb-8">
              {/* Custom Doughnut Chart */}
              <svg className="w-48 h-48 rotate-[-90deg]" viewBox="0 0 36 36">
                <circle cx="18" cy="18" fill="none" r="15.915" stroke="#E2E8F0" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  fill="none"
                  r="15.915"
                  stroke="#8A3FFC"
                  strokeDasharray="67 33"
                  strokeDashoffset="0"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  fill="none"
                  r="15.915"
                  stroke="#0050cb"
                  strokeDasharray="33 67"
                  strokeDashoffset="-67"
                  strokeWidth="4"
                />
              </svg>
              {/* Chart Labels in Center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[14px] font-bold text-[#8A3FFC]">67%</span>
                <span className="text-[14px] font-bold text-[#0050cb]">33%</span>
              </div>
            </div>
            <div className="space-y-4">
              {salesChannels.map((channel, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: channel.color }}></div>
                    <span className="text-[14px] leading-[20px] font-medium">{channel.label}</span>
                  </div>
                  <span className="text-[14px] leading-[20px] font-bold">{channel.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grow with Ease Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0066ff] p-6 rounded-xl text-white relative overflow-hidden h-full min-h-[300px] flex flex-col justify-end">
              <div className="relative z-10">
                <h2 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold mb-2">Grow with Ease.</h2>
                <p className="text-[16px] leading-[24px] opacity-90 max-w-md">Our advanced analytics tools give you real-time insights into customer behavior and stock levels.</p>
                <button className="mt-6 bg-white text-[#0050cb] px-8 py-3 rounded-lg font-bold hover:bg-[#f9f9fc] transition-colors">
                  Upgrade Plan
                </button>
              </div>
              {/* Decorative Abstract Elements */}
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 bottom-0 w-64 h-64 bg-[#555f6c]/20 rounded-full blur-2xl"></div>
              <div className="absolute right-10 bottom-10">
                <Rocket size={120} className="opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}