"use client"

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Puzzle,
  Settings,
  MessageCircle,
  ChevronDown,
  Bell,
  User,
  ShoppingBag,
  CreditCard,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Truck,
  Calendar,
  RefreshCw,
  Store,
  Plus,
  Eye,
  FileText,
  MoreVertical,
  ArrowDown,
  ArrowUp
} from 'lucide-react';

const DesktopInventory = ({initialInventory}) => {
const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders', active: true },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Puzzle, label: 'Extensions' }
  ];

  const filters = ['Paid', 'Partially Paid', 'Pending', 'Unpaid', 'All'];

  const orders = [
    {
      id: '#00002',
      name: 'Book',
      total: '₦ 2,000.00',
      status: 'Completed',
      statusColor: 'bg-green-100 text-green-700',
      payment: 'Paid',
      paymentColor: 'bg-blue-100 text-blue-700',
      shipping: 'Picked Up',
      shippingColor: 'bg-blue-100 text-blue-700',
      date: 'June 25, 2026 6:50 AM',
      downloads: 0,
      icon: Store,
      iconBg: 'bg-blue-50 border-blue-100 text-blue-600'
    },
    {
      id: '#00001',
      name: 'Book',
      total: '₦ 1,000.00',
      status: 'Processing',
      statusColor: 'bg-[#e2e2e5] text-[#424656]',
      payment: 'Paid',
      paymentColor: 'bg-blue-100 text-blue-700',
      shipping: 'Unfulfilled',
      shippingColor: 'bg-orange-100 text-orange-700',
      date: 'June 24, 2026 4:57 PM',
      downloads: 0,
      icon: ShoppingBag,
      iconBg: 'bg-pink-50 border-pink-100 text-pink-600'
    }
  ];

  const kpis = [
    { label: 'Total Orders', value: '2', icon: ShoppingBag, color: 'bg-green-50 text-green-600 border-green-100' },
    { label: 'Amount Owed', value: '₦0.00', icon: CreditCard, color: 'bg-red-50 text-red-600 border-red-100' },
    { label: 'Completed Orders', value: '1', icon: CheckCircle, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { label: 'Unpaid Orders', value: '0', icon: Clock, color: 'bg-yellow-50 text-yellow-600 border-yellow-100' }
  ];

  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-outline-variant/10 overflow-hidden">
       <header className="h-16 w-full fixed top-0 z-40 pl-[260px] border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f3f3f6] rounded-lg border border-[#c2c6d8] cursor-pointer hover:bg-[#e8e8ea] transition-colors">
            <span className="text-[14px] leading-[20px] text-[#424656]">Location:</span>
            <span className="text-[14px] leading-[20px] font-bold text-[#0050cb]">Headquarters</span>
            <ChevronDown size={16} className="text-sm" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 text-[#1a1c1e] hover:bg-[#f3f3f6] rounded-lg transition-all border border-[#c2c6d8]">
            Point of Sale
          </button>
          <button className="bg-[#0050cb] text-white px-6 py-2 rounded-lg text-[14px] leading-[20px] font-bold hover:brightness-110 transition-all shadow-sm">
            View Store
          </button>
          <div className="w-px h-6 bg-[#c2c6d8] mx-2"></div>
          <button className="p-2 text-[#424656] hover:bg-[#f3f3f6] rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#0050cb] font-bold overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAytkmGNliXmf6t8hflzPfDCVat0brFBfHd4-e20AauVY7MUZT-kirQAFwbVxXDIsqlrdUoj0s0DUtR6G6ZxM8Wm6dHJBMxM4Nn02_KPaEr9fXww-0G2DJBiTRCV6FqiyxG1R2TmuM9eFsm8AXU6CYiKWQJtTwepgSUGHRLGsy_z_xSNpfxpq05Ive5TiB3oZ18BHBTyzDizK3X7BNxUsHVoViOLPvTsvqWv1kwlOnqs3g9tIlvWq9gzslRG0zOEQXx6hzkETisISpN"
              />
            </div>
            <span className="text-[14px] leading-[20px] hidden lg:block font-semibold">Nnaemeka Uzuegbu</span>
            <ChevronDown size={20} className="text-[#424656] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-16 min-h-screen">
        <div className="p-6 max-w-[1440px] mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Orders</h1>
            <div className="flex items-center gap-3">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#0050cb] text-[#0050cb] rounded-lg text-[14px] leading-[20px] font-semibold hover:bg-[#dae1ff] transition-colors">
                  Actions
                  <ChevronDown size={16} />
                </button>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0066ff] text-white rounded-lg text-[14px] leading-[20px] font-bold hover:brightness-110 transition-all shadow-md">
                <Plus size={20} />
                Create Order
              </button>
            </div>
          </div>

          {/* KPI Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <div key={index} className="bg-white p-5 rounded-xl border border-[#c2c6d8] shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[14px] leading-[20px] text-[#424656]">{kpi.label}</span>
                    <div className={`w-10 h-10 rounded-lg ${kpi.color} flex items-center justify-center border`}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div className="text-[24px] leading-[32px] font-bold">{kpi.value}</div>
                </div>
              );
            })}
          </div>

          {/* Filter Tabs & Content Section */}
          <div className="bg-white rounded-xl border border-[#c2c6d8] shadow-sm overflow-hidden">
            {/* Filter Pills Container */}
            <div className="px-6 py-4 flex flex-wrap gap-2 border-b border-[#c2c6d8] bg-[#f3f3f6]">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-1.5 rounded-full text-[14px] leading-[20px] hover:bg-[#eeeef0] transition-colors ${
                    activeFilter === filter
                      ? 'bg-[#0066ff] text-white shadow-sm font-bold'
                      : 'text-[#424656]'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Table Controls */}
            <div className="px-6 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex items-center gap-2 text-[#424656]">
                <RefreshCw size={20} />
                <span className="text-[14px] leading-[20px]">Showing {orders.length} of {orders.length} Orders</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
                {/* Search */}
                <div className="relative flex-1 lg:w-64 min-w-[200px]">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
                  <input
                    className="w-full pl-10 pr-4 py-2 border border-[#c2c6d8] rounded-lg focus:ring-2 focus:ring-[#dae1ff] focus:border-[#0050cb] outline-none transition-all text-[14px] leading-[20px] bg-white"
                    placeholder="Search by order ID or name"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                {/* Filter Actions */}
                <button className="flex items-center gap-2 px-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] hover:bg-[#f3f3f6] transition-colors">
                  <Filter size={16} />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] hover:bg-[#f3f3f6] transition-colors">
                  <Truck size={16} />
                  Delivery
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] hover:bg-[#f3f3f6] transition-colors">
                  <Calendar size={16} />
                  Select Date Range
                </button>
              </div>
            </div>

            {/* Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f6] border-y border-[#c2c6d8]">
                    <th className="w-12 px-6 py-3 text-left">
                      <input className="rounded text-[#0050cb] border-[#c2c6d8] focus:ring-[#0050cb]" type="checkbox" />
                    </th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Order Number &amp; Name</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Total</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Status</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Payment</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Shipping</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656] whitespace-nowrap">Date</th>
                    <th className="px-6 py-3 text-left text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider text-[#424656]">Downloads</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c2c6d8]">
                  {orders.map((order, index) => {
                    const Icon = order.icon;
                    return (
                      <tr key={index} className="hover:bg-[#f3f3f6] transition-colors group">
                        <td className="px-6 py-4">
                          <input className="rounded text-[#0050cb] border-[#c2c6d8] focus:ring-[#0050cb]" type="checkbox" />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg ${order.iconBg} flex items-center justify-center border`}>
                              <Icon size={20} />
                            </div>
                            <div>
                              <div className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{order.id}</div>
                              <div className="text-[14px] leading-[20px] text-[#424656]">{order.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">{order.total}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${order.statusColor}`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${order.paymentColor}`}>
                            {order.payment}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-[12px] font-bold ${order.shippingColor}`}>
                            {order.shipping}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-[14px] leading-[20px] text-[#424656] whitespace-nowrap">{order.date}</td>
                        <td className="px-6 py-4 text-center text-[14px] leading-[20px] text-[#424656]">{order.downloads}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-[#f3f3f6] border-t border-[#c2c6d8] flex items-center gap-4">
              <span className="text-[14px] leading-[20px] text-[#424656]">Show</span>
              <select className="border border-[#c2c6d8] rounded-lg px-3 py-1.5 text-[14px] leading-[20px] focus:ring-[#0050cb] focus:border-[#0050cb] outline-none">
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-[14px] leading-[20px] text-[#424656]">Entries</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopInventory;
