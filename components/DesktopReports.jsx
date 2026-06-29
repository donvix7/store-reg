"use client"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Megaphone,
  Puzzle,
  MoreHorizontal,
  Settings,
  MessageCircle,
  ChevronDown,
  Bell,
  User,
  Calendar,
  Download,
  Info,
  TrendingUp,
  TrendingDown,
  TrendingFlat,
  X,
  Menu,
  ArrowUp,
  ArrowDown,
  Minus,
  Eye,
  EyeOff,
  FlipHorizontal2
} from 'lucide-react';

import React, { useState } from 'react';


const DesktopReports = () => {
  const [activeTab, setActiveTab] = useState('Sales');
  const [showAlert, setShowAlert] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics', active: true },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions' },
    { icon: MoreHorizontal, label: 'More' }
  ];

  const tabs = ['Sales', 'Transactions', 'Products', 'Customers', 'Campaigns'];

  const stats = [
    {
      label: 'Total Customers',
      value: '1,248',
      change: '-4% vs last month',
      icon: Users,
      trend: 'down',
      color: 'text-tertiary'
    },
    {
      label: 'Total Orders',
      value: '84',
      change: '+12% vs last month',
      icon: ShoppingCart,
      trend: 'up',
      color: 'text-primary'
    },
    {
      label: 'Conv. Rate',
      value: '3.2%',
      change: 'Stable',
      icon: BarChart3,
      trend: 'stable',
      color: 'text-outline'
    }
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={14} />;
      case 'down':
        return <TrendingDown size={14} />;
      default:
        return <Minus size={14} />;
    }
  };

  return (
    <div className="p-10 space-y-10 max-w-7xl mx-auto w-full font-body">
       {/* Top Navigation Bar */}
      <header className="h-16 w-full fixed top-0 z-40 border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <div className="bg-[#f3f3f6] px-4 py-2 rounded-lg flex items-center gap-2 border border-[#c2c6d8]">
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">Location:</span>
            <span className="text-[14px] leading-[20px] font-semibold text-[#0050cb] flex items-center gap-1">
              Headquarters
              <ChevronDown size={18} />
            </span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#c2c6d8] hover:bg-[#f3f3f6] transition-all">
            Point of Sale
          </button>
          <button className="bg-[#0050cb] text-white px-6 py-2 rounded-lg font-semibold hover:brightness-110 transition-all">
            View Store
          </button>
          <div className="flex items-center gap-3 border-l border-[#c2c6d8] pl-6">
            <button className="relative p-2 hover:bg-[#f3f3f6] rounded-full">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 pl-2">
              <div className="w-10 h-10 rounded-full bg-[#dae1ff] flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk5c7lRBa2Dtyje3nmDEmp-yHKlFHhleuh1RCrgEY4DtZKV2C9KWRG0kch6j4_zNpQOlkd-ArPp1JVDwdw1qJR-jQdLd69Jq9KlwAS86N0oi3ddgHT8pqnbnhMz0NQN1pdW7Q9lnu3tAbH5z8bI0XqlanZmuVa4hm35VxiMPog096fGJYyNpBHXHpZMWfvjkKp3OwgHg9o7esDDmZSAvUg1iYoKQVETw7oenyIjdm8M1lM2syFD_orMcrj5KXy7wkdM1q7q9oGeqhk"
                />
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-[14px] leading-[20px] font-semibold leading-none">Nnaemeka U.</p>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] leading-none mt-1">Admin</p>
              </div>
              <ChevronDown size={20} className="text-[#727687]" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <div className="p-6 max-w-7xl mx-auto space-y-6">
          {/* Page Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Analytics</h1>
              <div className="mt-2 flex items-center gap-2 bg-[#e8e8ea] px-3 py-1.5 rounded-lg border border-[#c2c6d8]">
                <span className="text-[#0050cb] text-[20px]">✨</span>
                <p className="text-[14px] leading-[20px]">Business report is ready for review.</p>
                <button className="bg-[#0066ff] text-white p-1 rounded-md ml-2 hover:brightness-95 transition-all">
                  <Download size={18} />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Select date to filter:</span>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-[#c2c6d8] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#0050cb] transition-all group">
                <Calendar size={20} className="text-[#727687] group-hover:text-[#0050cb]" />
                <span className="text-[14px] leading-[20px] font-medium">1/01/2026 - 31/12/2026</span>
                <ChevronDown size={20} className="text-[#727687]" />
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-[#c2c6d8] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] cursor-pointer hover:border-[#0050cb] transition-all">
                <span className="text-[14px] leading-[20px] font-medium">Compare</span>
                <ChevronDown size={20} className="text-[#727687]" />
              </div>
            </div>
          </div>

          {/* Sub-Tabs Navigation */}
          <div className="border-b border-[#c2c6d8]">
            <nav className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 px-1 border-b-2 transition-all text-[14px] leading-[20px] ${
                    activeTab === tab
                      ? 'border-[#0050cb] text-[#0050cb] font-semibold'
                      : 'border-transparent text-[#424656] hover:text-[#1a1c1e]'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Warning Alert */}
          {showAlert && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-4">
              <div className="bg-amber-100 p-2 rounded-full text-amber-600">
                <Info size={20} />
              </div>
              <div className="flex-1">
                <p className="text-[20px] leading-[28px] font-semibold text-amber-900">Gross and net profit are not shown</p>
                <p className="text-[14px] leading-[20px] text-amber-800 mt-1">
                  This is because one or more products are missing a cost price. Please add a cost price to all products to see your full profit analytics.
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <button className="bg-[#1a1c1e] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:opacity-90 transition-all">
                  View Products
                </button>
                <button className="text-amber-900 p-1 hover:bg-amber-100 rounded-full" onClick={() => setShowAlert(false)}>
                  <X size={20} />
                </button>
              </div>
            </div>
          )}

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart 1: Total Sales */}
            <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] flex flex-col gap-6 group hover:border-[#0050cb]/30 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Total Sales</p>
                  <h3 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#1a1c1e] mt-1">₦3,000.00</h3>
                  <div className="flex items-center gap-1.5 text-[#0050cb] mt-1">
                    <TrendingUp size={18} />
                    <span className="text-[14px] leading-[20px] font-semibold">100% from last year</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-[#727687]">
                  <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-[0.05em] font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0050cb]"></div>
                    Jan 1, 2026 - Dec 31, 2026
                  </div>
                  <button className="p-1 hover:bg-[#eeeef0] rounded-md">
                    <Menu size={20} />
                  </button>
                </div>
              </div>
              {/* SVG Chart Visualization */}
              <div className="h-64 w-full relative pt-8">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]/50 pr-4">
                  <span>3,200</span>
                  <span>2,400</span>
                  <span>1,600</span>
                  <span>800</span>
                  <span className="mb-6">0</span>
                </div>
                <div className="ml-12 h-full border-b border-l border-[#c2c6d8]/30 relative flex items-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="w-full border-t border-dashed border-[#c2c6d8]/20"></div>
                    <div className="w-full border-t border-dashed border-[#c2c6d8]/20"></div>
                    <div className="w-full border-t border-dashed border-[#c2c6d8]/20"></div>
                    <div className="w-full border-t border-dashed border-[#c2c6d8]/20"></div>
                    <div className="w-full"></div>
                  </div>
                  {/* Simple Line Path */}
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0050cb" stopOpacity="0.2"></stop>
                        <stop offset="100%" stopColor="#0050cb" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M 0,200 L 150,200 L 175,50 L 200,200 L 400,200" fill="transparent" stroke="#0050cb" strokeLinejoin="round" strokeWidth="3"></path>
                    <path d="M 0,200 L 150,200 L 175,50 L 200,200 L 400,200 L 400,200 L 0,200" fill="url(#chartGradient)"></path>
                    {/* Active Point */}
                    <circle cx="175" cy="50" fill="#0050cb" r="5"></circle>
                    <circle cx="175" cy="50" fill="#0050cb" opacity="0.2" r="10"></circle>
                  </svg>
                </div>
                {/* X-axis labels */}
                <div className="flex justify-between ml-12 mt-2 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]/50 px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>
            </div>

            {/* Chart 2: Shipping Spend */}
            <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] flex flex-col gap-6 group hover:border-[#0050cb]/30 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Shipping Spend</p>
                  <h3 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#1a1c1e] mt-1">₦0.00</h3>
                  <div className="flex items-center gap-1.5 text-[#727687] mt-1 opacity-50">
                    <FlipHorizontal2 size={18} />
                    <span className="text-[14px] leading-[20px] font-semibold">No change from last year</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 text-[#727687]">
                  <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-[0.05em] font-medium">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#555f6c]"></div>
                    Jan 1, 2026 - Dec 31, 2026
                  </div>
                  <button className="p-1 hover:bg-[#eeeef0] rounded-md">
                    <Menu size={20} />
                  </button>
                </div>
              </div>
              {/* Flat Chart Visualization */}
              <div className="h-64 w-full relative pt-8">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]/50 pr-4">
                  <span>1</span>
                  <span className="mb-6">0</span>
                </div>
                <div className="ml-12 h-full border-b border-l border-[#c2c6d8]/30 relative flex items-end">
                  <div className="absolute top-0 w-full border-t border-dashed border-[#c2c6d8]/20"></div>
                  {/* Flat Line Path */}
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 200">
                    <path d="M 0,200 L 400,200" fill="transparent" stroke="#555f6c" strokeWidth="2"></path>
                  </svg>
                </div>
                <div className="flex justify-between ml-12 mt-2 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]/50 px-2">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                  <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Details - Bento Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-[#f3f3f6] p-6 rounded-2xl border border-[#c2c6d8] group hover:bg-white transition-all">
                  <Icon size={32} className="text-[#0050cb] mb-4" />
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase font-semibold">{stat.label}</p>
                  <p className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold mt-1">{stat.value}</p>
                  <p className={`text-[14px] leading-[20px] mt-2 flex items-center gap-1 ${stat.color}`}>
                    {getTrendIcon(stat.trend)}
                    {stat.change}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopReports;
