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
  Settings,
  HelpCircle,
  User,
  Plus,
  TrendingUp,
  CheckCircle,
  Clock,
  Eye,
  Download,
  Mail,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
  FileText,
  CreditCard,
  AlertCircle,
  Star
} from 'lucide-react';

const InvoiceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [dateRange, setDateRange] = useState('Jan 01 - Jan 31');

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders', active: true },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'Wallet' },
    { icon: Store, label: 'Store Setup' }
  ];

  const stats = [
    {
      label: 'Total Amount Sent',
      value: '₦4,250,000.00',
      change: '+12%',
      icon: CreditCard,
      color: 'bg-primary/10 text-primary',
      trend: 'up'
    },
    {
      label: 'Total Paid',
      value: '₦3,105,400.00',
      change: '+8.4%',
      icon: CheckCircle,
      color: 'bg-secondary-fixed text-on-secondary-fixed',
      trend: 'up'
    },
    {
      label: 'Pending Invoices',
      value: '₦1,144,600.00',
      change: '24 Active',
      icon: Clock,
      color: 'bg-error-container text-on-error-container',
      trend: 'neutral'
    }
  ];

  const invoices = [
    {
      id: '#INV-8821',
      customer: 'Adebayo Omokore',
      email: 'ade.omokore@gmail.com',
      initials: 'AO',
      date: 'Oct 12, 2023',
      dueDate: 'Oct 19, 2023',
      amount: '₦120,000.00',
      status: 'Paid',
      statusColor: 'bg-tertiary-fixed text-tertiary',
      avatarColor: 'bg-primary-fixed text-primary'
    },
    {
      id: '#INV-8822',
      customer: 'Chidinma Joy',
      email: 'c.joy@outlook.com',
      initials: 'CJ',
      date: 'Oct 10, 2023',
      dueDate: 'Oct 17, 2023',
      amount: '₦45,000.00',
      status: 'Overdue',
      statusColor: 'bg-error-container text-error',
      avatarColor: 'bg-secondary-fixed text-secondary'
    },
    {
      id: '#INV-8823',
      customer: 'Benson Egwueke',
      email: 'begwueke@tech.ng',
      initials: 'BE',
      date: 'Oct 15, 2023',
      dueDate: 'Oct 22, 2023',
      amount: '₦280,500.00',
      status: 'Unpaid',
      statusColor: 'bg-secondary-container text-on-secondary-fixed-variant',
      avatarColor: 'bg-tertiary-fixed text-tertiary'
    },
    {
      id: '#INV-8824',
      customer: 'Tayo Ajayi',
      email: 'tayo@bumpa.com',
      initials: 'TA',
      date: 'Oct 18, 2023',
      dueDate: '—',
      amount: '₦12,000.00',
      status: 'Draft',
      statusColor: 'bg-surface-variant text-on-surface-variant',
      avatarColor: 'bg-outline-variant text-on-surface-variant'
    },
    {
      id: '#INV-8825',
      customer: 'Seyi Olumide',
      email: 'seyi.olu@me.com',
      initials: 'SO',
      date: 'Oct 19, 2023',
      dueDate: 'Oct 26, 2023',
      amount: '₦92,000.00',
      status: 'Paid',
      statusColor: 'bg-tertiary-fixed text-tertiary',
      avatarColor: 'bg-primary-fixed text-primary'
    }
  ];

  const statusOptions = ['All Statuses', 'Paid', 'Unpaid', 'Overdue', 'Draft'];

  return (
    <div className='p-4 sm:p-10 flex flex-col gap-8 max-w-6xl mx-auto'>
    {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-white border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#f3f3f6] border-none rounded-full text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
              placeholder="Search invoices, customers..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <Bell size={20} className="text-[#424656]" />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <Settings size={20} className="text-[#424656]" />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <HelpCircle size={20} className="text-[#424656]" />
          </button>
          <div className="ml-4 flex items-center gap-3 cursor-pointer pl-4 border-l border-[#c2c6d8]">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcpNK9tcRX4-uDuCKjpjvtN5tg5bBj8w4juI-C5YlHzU-CyKkQ76PgXBAEa1cWZiif4vAlgpZGQbdbOzxVMyeu6ZA1uteLBLUQqEMFv3sE4hwJKttwK3v85xPq5y48t4F0XBZiSxxj_lVZcLXY2f9kisyFYqSKabeXuiDO0GnBAm6nLwc99U-FniyOhxkwKoQvtAeICIBuiDmu0X0zvIRBtzqy3kfn5PIkbQGG32nRbqO5J-VjOg2qBx-S-Rh7RROD2AKcx75HsM_1"
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">Store Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-16  min-h-screen">
        <div className="p-4 max-w-[1440px] mx-auto space-y-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Invoices</h2>
              <p className="text-[14px] leading-[20px] text-[#555f6c] mt-1">
                Managing <span className="font-bold text-[#0050cb]">128</span> total invoices issued this year.
              </p>
            </div>
            <button className="bg-[#0050cb] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all">
              <Plus size={20} />
              Create Invoice
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/50 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#a33200] bg-[#ffdbd0] px-2 py-1 rounded flex items-center gap-1">
                      <TrendingUp size={14} />
                      {stat.change}
                    </span>
                  </div>
                  <div className="mt-4">
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase">{stat.label}</p>
                    <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mt-1">{stat.value}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#c2c6d8]/30 flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[280px]">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
              <input
                className="w-full pl-10 pr-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 transition-all outline-none"
                placeholder="Search invoice # or customer name..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase whitespace-nowrap">Filter By:</span>
              <select
                className="bg-[#f3f3f6] border border-[#c2c6d8] rounded-lg px-4 py-2 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#727687] text-[18px]">calendar_today</span>
                <input
                  className="pl-10 pr-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none w-48"
                  placeholder="Jan 01 - Jan 31"
                  type="text"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                />
              </div>
            </div>
            <button className="ml-auto text-[#0050cb] hover:bg-[#dae1ff] p-2 rounded-lg transition-colors flex items-center gap-2">
              <Download size={20} />
              <span className="text-[14px] leading-[20px] font-semibold">Export</span>
            </button>
          </div>

          {/* Invoice Table Section */}
          <div className="bg-white rounded-xl shadow-sm border border-[#c2c6d8]/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Invoice ID</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Date Issued</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Due Date</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Total Amount</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c2c6d8]/30">
                  {invoices.map((invoice, index) => (
                    <tr key={index} className="hover:bg-white/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-5">
                        <div className="flex flex-col gap-1">
                          <span className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{invoice.id}</span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold uppercase ${invoice.statusColor} w-fit`}>
                            {invoice.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full ${invoice.avatarColor} flex items-center justify-center font-bold text-xs`}>
                            {invoice.initials}
                          </div>
                          <div>
                            <p className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">{invoice.customer}</p>
                            <p className="text-[12px] text-[#555f6c]">{invoice.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-[14px] leading-[20px] text-[#424656]">{invoice.date}</td>
                      <td className={`px-6 py-5 text-[14px] leading-[20px] ${invoice.status === 'Overdue' ? 'font-semibold text-[#ba1a1a]' : 'text-[#424656]'}`}>
                        {invoice.dueDate}
                      </td>
                      <td className="px-6 py-5 text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{invoice.amount}</td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex justify-end gap-2">
                          <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#0050cb] transition-all">
                            <Eye size={20} />
                          </button>
                          {invoice.status === 'Paid' && (
                            <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#0050cb] transition-all">
                              <Download size={20} />
                            </button>
                          )}
                          {invoice.status === 'Overdue' && (
                            <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#0050cb] transition-all">
                              <Mail size={20} />
                            </button>
                          )}
                          {invoice.status === 'Unpaid' && (
                            <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#0050cb] transition-all">
                              <Edit size={20} />
                            </button>
                          )}
                          {invoice.status === 'Draft' && (
                            <>
                              <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#0050cb] transition-all">
                                <Edit size={20} />
                              </button>
                              <button className="p-2 hover:bg-[#eeeef0] rounded-full text-[#555f6c] hover:text-[#ba1a1a] transition-all">
                                <Trash2 size={20} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-[#c2c6d8] flex items-center justify-between">
              <p className="text-[14px] leading-[20px] text-[#555f6c]">Showing <span className="font-bold text-[#1a1c1e]">1-5</span> of 128 invoices</p>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] transition-colors disabled:opacity-50" disabled>
                  <ChevronLeft size={20} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-[#0050cb] text-white rounded-lg font-semibold text-sm">1</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-[#f3f3f6] rounded-lg font-semibold text-sm transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center hover:bg-[#f3f3f6] rounded-lg font-semibold text-sm transition-colors">3</button>
                <button className="p-2 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Promotion / Help Footer Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0050cb] h-48 flex items-center px-12 group">
            <div className="relative z-10 max-w-lg">
              <h4 className="text-[20px] leading-[28px] font-semibold text-white">Need help with custom invoice templates?</h4>
              <p className="text-[#f8f7ff] text-[14px] leading-[20px] mt-2 opacity-90">Our premium plan allows you to add brand logos, personalized thank-you notes, and automated payment reminders.</p>
              <button className="mt-4 bg-white text-[#0050cb] px-6 py-2.5 rounded-lg font-bold text-[14px] leading-[20px] hover:shadow-lg transition-all active:scale-95">
                Upgrade Today
              </button>
            </div>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block">
              <FileText size={120} className="text-white opacity-10" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvoiceList;