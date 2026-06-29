"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Store,
  Search,
  Bell,
  HelpCircle,
  User,
  Calendar,
  CreditCard,
  Download,
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  Zap,
  Mail,
  Hourglass,
  Building2,
  MessageCircle,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowUpRight,
  Settings,
  LogOut,
  Plus,
  TrendingUp,
  MoreVertical,
  RefreshCw,
  ArrowDownRight,
  MinusCircle,

} from 'lucide-react';

const DesktopHistory = ({history}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const transactions = [
    {
      id: 1,
      date: 'Oct 24, 2023',
      description: 'Bumpa Pro - Annual Subscription',
      amount: '₦328,000.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: Sparkles,
      iconBg: 'bg-[#dae1ff]/50 text-[#0050cb]'
    },
    {
      id: 2,
      date: 'Sep 12, 2023',
      description: 'SMS Bundle - 5000 units',
      amount: '₦12,500.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: Zap,
      iconBg: 'bg-[#d9e3f2]/50 text-[#555f6c]'
    },
    {
      id: 3,
      date: 'Aug 24, 2023',
      description: 'Bumpa Pro - Annual Subscription',
      amount: '₦328,000.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: Sparkles,
      iconBg: 'bg-[#dae1ff]/50 text-[#0050cb]'
    },
    {
      id: 4,
      date: 'Jul 10, 2023',
      description: 'Email Marketing Add-on',
      amount: '₦4,500.00',
      status: 'Pending',
      statusColor: 'bg-blue-100 text-[#0050cb]',
      icon: Mail,
      iconBg: 'bg-[#d9e3f2]/50 text-[#555f6c]',
      isPending: true
    }
  ];

  const filters = ['All', 'Subscriptions', 'Add-ons'];

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'Wallet', active: true }
  ];



  const [searchTerm, setSearchTerm] = useState('');

  const summaryStats = [
    {
      label: 'Total Movements',
      value: '1,240',
      change: '+12% vs last month',
      icon: RefreshCw,
      color: 'text-primary',
      bgColor: 'bg-primary-container/10',
      trend: 'up'
    },
    {
      label: 'Restocks',
      value: '45',
      change: 'Active restock events this month',
      icon: Package,
      color: 'text-tertiary',
      bgColor: 'bg-tertiary-container/10',
      trend: 'neutral'
    },
    {
      label: 'Stock Adjustments',
      value: '-12',
      change: 'Damaged or lost stock recorded',
      icon: AlertCircle,
      color: 'text-error',
      bgColor: 'bg-error-container/20',
      trend: 'down'
    }
  ];

  const getActionDot = (action) => {
    const colors = {
      'Restock': 'bg-primary',
      'Sale': 'bg-green-600',
      'Adjustment': 'bg-error',
      'Return': 'bg-orange-600'
    };
    return colors[action] || 'bg-secondary';
  };

  return (
    <div>
      

      {/* Main Content Canvas */}
      <main className="  min-h-screen px-4">
        <div className="p-6  mx-auto">
          {/* Page Header */}
        

          {/* Summary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {summaryStats.map((stat, index) => {
              const Icon = stat.icon;
              const isNegative = stat.value.startsWith('-');
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/50 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#555f6c] text-[14px] leading-[20px]">{stat.label}</span>
                      <div className={`w-10 h-10 ${stat.bgColor} rounded-full flex items-center justify-center ${stat.color}`}>
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className={`text-[48px] leading-[56px] tracking-[-0.02em] font-bold leading-none mb-1 ${isNegative ? 'text-[#ba1a1a]' : 'text-[#1a1c1e]'}`}>
                      {stat.value}
                    </h3>
                    <p className="text-[#555f6c] text-[14px] leading-[20px] flex items-center gap-1">
                      {stat.trend === 'up' && <TrendingUp size={16} className="text-green-600" />}
                      {stat.change}
                    </p>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 text-[#0050cb] group-hover:scale-110 transition-transform duration-500">
                    <Icon size={120} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filters Section */}
          <div className="bg-white p-4 rounded-xl border border-[#c2c6d8] shadow-[0px_2px_8px_rgba(0,0,0,0.02)] mb-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-[#727687]" />
              <span className="font-semibold text-[#424656] text-[14px] leading-[20px]">Filter by:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 bg-[#f3f3f6] border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] text-[#1a1c1e] hover:bg-[#e2e2e5] transition-all">
                <span>Date Range</span>
                <Calendar size={18} />
              </button>
              <select className="px-3 py-2 bg-[#f3f3f6] border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] text-[#1a1c1e] focus:ring-[#0050cb] focus:border-[#0050cb] outline-none">
                <option>All Actions</option>
                <option>Restock</option>
                <option>Sale</option>
                <option>Manual Adjustment</option>
                <option>Return</option>
              </select>
              <select className="px-3 py-2 bg-[#f3f3f6] border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] text-[#1a1c1e] focus:ring-[#0050cb] focus:border-[#0050cb] outline-none">
                <option>All Staff</option>
                <option>Chidi Benson</option>
                <option>Sarah Miller</option>
                <option>John Doe</option>
              </select>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="text-[#0050cb] font-semibold text-[14px] leading-[20px] hover:underline">Reset Filters</button>
            </div>
          </div>

          {/* Data Table Container */}
          <div className="bg-white rounded-xl border border-[#c2c6d8] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider">Action</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider text-right">Quantity</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider">Source/Reason</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-wider">Staff</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c2c6d8]/30">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#f8fafc] transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">{tx.date}</span>
                          <span className="text-[12px] text-[#555f6c]">{tx.time}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#f9f9fc] border border-[#c2c6d8] overflow-hidden flex-shrink-0">
                            <img
                              className="w-full h-full object-cover"
                              alt={tx.product}
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5OgJANARx01avg3iaSPrK3NcMqzosdbSTqPIJ1H45cvwl6AEbXWge_UWvlJtXAi7D957Kw3XWblmTQRTLID8XWr6Qh9JeWDWWuO23dPYJvYSzi4qjJVgOICL7ulnz8Cl5O-ABFJt1IY3n9A9HHu09PBA3rKg2G1WmabiOGawLzHur_fPFwCaLN8AWJ9Cr0UYOer9Nq-8peaK0jRdMSAAGPQ550FgJPkEnVB8hOAtC_LDeYvLo_QgYTga519zg5iJ8sqc_R9G1oieX"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{tx.product}</span>
                            <span className="text-[12px] text-[#555f6c]">SKU: {tx.sku}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold uppercase ${tx.actionColor}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${getActionDot(tx.action)}`}></span>
                          {tx.action}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`text-[24px] leading-[32px] font-bold ${tx.quantityColor}`}>{tx.quantity}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[14px] leading-[20px] ${tx.sourceColor || 'text-[#424656]'}`}>{tx.source}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#d9e3f2] flex items-center justify-center text-[10px] font-bold text-[#3e4853]">
                            {tx.staffInitials}
                          </div>
                          <span className="text-[14px] leading-[20px] text-[#1a1c1e]">{tx.staff}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#727687] hover:text-[#0050cb] transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-6 py-4 bg-[#f9f9fc] border-t border-[#c2c6d8] flex items-center justify-between">
              <span className="text-[14px] leading-[20px] text-[#555f6c]">Showing 1 to 10 of 250 entries</span>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-all">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0050cb] text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-all">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-all">3</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
         {/* Desktop Filters Section */}
       <main className=" min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-white/80 backdrop-blur-md border-b border-[#c2c6d8] flex items-center justify-between px-6 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
              <input
                className="w-full pl-10 pr-4 py-2 bg-[#f3f3f6] border-none rounded-full text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
                placeholder="Search transactions..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Bell size={20} className="text-[#555f6c] hover:text-[#0050cb] transition-colors cursor-pointer active:opacity-70" />
              <HelpCircle size={20} className="text-[#555f6c] hover:text-[#0050cb] transition-colors cursor-pointer active:opacity-70" />
            </div>
            <div className="h-8 w-[1px] bg-[#c2c6d8] mx-2"></div>
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e] leading-none">Oladimeji Bankole</p>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">Owner</p>
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0066ff] group-hover:border-[#0050cb] transition-colors">
                <img
                  className="w-full h-full object-cover"
                  alt="Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ1_Ob51l7HkjuK6uffKSP3z7SLn0-5DcWQ7iGNC9tauto7mQxtszZLsAnsHQIHKlr1XmOKrIgUAsP1eNNv6W83CX2S0cDFZOL64GHghKI5_uo8RjVmNjHHpyKmtAPE32RfG5wk2E97nG71FewvomzDO1hiHu-6qCNclSH81KtTfzCAB-gaH3MdwTxhTwe2dWCmKhRSyW669uxrzeec_P6H_cOo7iQ0UY-HOr2MLIlg5wjzFo-rlbRPe4wKE1YDngyR57spjArnpZ1"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className=" px-6 pb-6 max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mb-2">Billing &amp; Payment History</h1>
            <p className="text-[16px] leading-[24px] text-[#555f6c]">Manage your subscription billing and view previous transaction receipts.</p>
          </div>

          {/* Bento Layout Content */}
          <div className="grid grid-cols-12 gap-6">
            {/* Current Plan Card */}
            <div className="col-span-12 lg:col-span-4 flex flex-col">
              <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-6 h-full flex flex-col justify-between border border-[#0050cb]/10 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#0050cb]/5 rounded-full blur-3xl"></div>
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-[#dae1ff] text-[#001849] rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase tracking-wider">Active Plan</div>
                    <CheckCircle size={20} className="text-[#0050cb]" fill="#0050cb" />
                  </div>
                  <h2 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#0050cb] mb-1">Bumpa Pro</h2>
                  <p className="text-[14px] leading-[20px] text-[#555f6c] mb-6">Annual Billing Cycle</p>
                  <div className="space-y-4 pt-4 border-t border-[#c2c6d8]">
                    <div className="flex items-center gap-3">
                      <Calendar size={20} className="text-[#727687]" />
                      <div>
                        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">Next Renewal</p>
                        <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">Oct 24, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CreditCard size={20} className="text-[#727687]" />
                      <div>
                        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">Payment Method</p>
                        <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">Visa ending in 4242</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <button className="w-full py-3 bg-[#0050cb] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#0066ff] transition-colors shadow-lg active:scale-95">
                    Change Plan
                  </button>
                  <button className="w-full py-3 bg-[#d9e3f2] text-[#0050cb] rounded-lg font-bold hover:bg-[#d9e3f2] transition-colors active:scale-95">
                    Edit Payment Method
                  </button>
                </div>
              </div>
            </div>

            {/* Transaction History */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Filters */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 bg-[#e8e8ea] p-1 rounded-xl">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      className={`px-6 py-2 rounded-lg text-[14px] leading-[20px] transition-all ${
                        activeFilter === filter
                          ? 'bg-white shadow-sm text-[#0050cb] font-bold'
                          : 'text-[#555f6c] font-semibold hover:text-[#1a1c1e]'
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-[#555f6c] hover:bg-[#f3f3f6] rounded-lg transition-colors border border-[#c2c6d8] font-semibold">
                  <Filter size={20} />
                  <span>More Filters</span>
                </button>
              </div>

              {/* Table Card */}
              <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] overflow-hidden border border-[#c2c6d8]/30">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                      <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-widest text-[#555f6c] font-semibold">Date</th>
                      <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-widest text-[#555f6c] font-semibold">Description</th>
                      <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-widest text-[#555f6c] font-semibold">Amount</th>
                      <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-widest text-[#555f6c] font-semibold">Status</th>
                      <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-widest text-[#555f6c] font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c2c6d8]/50">
                    {transactions.map((tx) => {
                      const Icon = tx.icon;
                      return (
                        <tr key={tx.id} className="hover:bg-[#f9f9fc] transition-colors">
                          <td className="px-6 py-5 text-[14px] leading-[20px] text-[#1a1c1e] font-medium">{tx.date}</td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg ${tx.iconBg} flex items-center justify-center`}>
                                <Icon size={16} />
                              </div>
                              <span className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{tx.description}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{tx.amount}</td>
                          <td className="px-6 py-5">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold ${tx.statusColor}`}>
                              {tx.status}
                            </span>
                          </td>
                          <td className="px-6 py-5 text-right">
                            {tx.isPending ? (
                              <button className="text-[#727687] cursor-not-allowed p-2 rounded-lg" disabled>
                                <Hourglass size={20} />
                              </button>
                            ) : (
                              <button className="text-[#0050cb] hover:bg-[#dae1ff] p-2 rounded-lg transition-colors group">
                                <Download size={20} title="Download Receipt" />
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="px-6 py-4 bg-[#f3f3f6] flex items-center justify-between">
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] font-semibold">Showing 1 to 4 of 24 transactions</p>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c2c6d8] bg-white text-[#555f6c] cursor-not-allowed">
                      <ChevronLeft size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded bg-[#0050cb] text-white text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold">1</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-colors">2</button>
                    <button className="w-8 h-8 flex items-center justify-center rounded border border-[#c2c6d8] bg-white text-[#555f6c] hover:bg-[#f3f3f6] transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotion / Action Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden group bg-[#1a1c1e] p-8 flex items-center justify-between">
              <div className="relative z-10">
                <h3 className="text-white text-[20px] leading-[28px] font-semibold mb-2">Need a Custom Enterprise Plan?</h3>
                <p className="text-[#dae1ff] text-[14px] leading-[20px] max-w-sm">Scale your business globally with our customized checkout and payout infrastructure.</p>
                <button className="mt-4 px-6 py-2 bg-[#0050cb] text-white rounded-lg font-bold hover:scale-105 transition-transform">
                  Contact Sales
                </button>
              </div>
              <Building2 size={120} className="text-[#0050cb] absolute -right-4 -bottom-4 opacity-10 rotate-12" />
            </div>
            <div className="bg-white border border-[#c2c6d8] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#d9e3f2] flex items-center justify-center mb-4">
                <HelpCircle size={32} className="text-[#0050cb]" />
              </div>
              <h3 className="text-[#1a1c1e] text-[20px] leading-[28px] font-semibold mb-2">Billing Questions?</h3>
              <p className="text-[#555f6c] text-[14px] leading-[20px] mb-4">Visit our help center or start a chat with our support team.</p>
              <a className="text-[#0050cb] font-bold hover:underline" href="#">Read Billing FAQs →</a>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  )
}

export default DesktopHistory