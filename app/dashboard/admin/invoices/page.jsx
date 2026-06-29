"use client";

import React, { useEffect, useState } from 'react';
import { 
  Bell, 
  CheckCircle2, 
  ShoppingBag, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  MoreVertical, 
  AlertTriangle,
  Mail,
  Check,
  CheckCheck,
  Filter,
  Trash2,
  Store,
  Pencil,
  Trash,
  MapPinMinusInside,
  Plus,
  MapPinPlusIcon,
  Currency,
  CurrencyIcon,
  Banknote,
  CoinsIcon,
  LandmarkIcon,
  PiggyBankIcon,
  MoreVerticalIcon,
  ChevronDownIcon
} from 'lucide-react';
import { updateNotification, markAllNotificationsAsRead } from '@/lib/actions';
import { getInvoices, getLocations } from '@/lib/service';
import Link from 'next/link';

const formatDate = (dateVal) => {
  if (!dateVal) return '';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  } catch (e) {
    return String(dateVal);
  }
};

const formatTime = (dateVal) => {
  if (!dateVal) return '';
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  } catch (e) {
    return '';
  }
};

const getCategoryBadgeClass = (category) => {
  const cat = category?.toLowerCase();
  switch (cat) {
    case 'order':
    case 'sales':
      return 'bg-blue-50 text-blue-700 border-blue-100';
    case 'system':
    case 'inventory':
      return 'bg-purple-50 text-purple-700 border-purple-100';
    case 'payment':
    case 'bank':
      return 'bg-green-50 text-green-700 border-green-100';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-100';
  }
}; 

const InvoiceList = () => {
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [invoices, setInvoices] = useState([])
  const empty = "No invoices found"
  const pageSize = 5;

  const loadInvoices = async () => {
    setLoading(true)
    const res = await getInvoices()
    console.log(res, "data")
    if(res.success){
      setInvoices(res.data)
    }
    setLoading(false)
  }
  useEffect(() => {
    loadInvoices()
  }, [])
  

  // Compute dynamic stats
  const unreadCount = invoices.length;
  

  // Filter list
  const filteredInvoices = invoices.filter(n => {
    const matchesUnread = !showOnlyUnread || n.status === 'unread';
    const matchesCategory = selectedCategory === 'All' || 
      n.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'System' && n.category?.toLowerCase() === 'inventory') ||
      (selectedCategory === 'Order' && n.category?.toLowerCase() === 'sales') ||
      (selectedCategory === 'Payment' && n.category?.toLowerCase() === 'bank');
    return matchesUnread && matchesCategory;
  });

  // Filter list
  const filteredInvoicesWithStatus = invoices.filter(n => {
    const matchesUnread = !showOnlyUnread || n.status === 'unread';
    const matchesCategory = selectedCategory === 'All' || 
      n.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'System' && n.category?.toLowerCase() === 'inventory') ||
      (selectedCategory === 'Order' && n.category?.toLowerCase() === 'sales') ||
      (selectedCategory === 'Payment' && n.category?.toLowerCase() === 'bank');
    return matchesUnread && matchesCategory;
  });
  const TotalInvoiceCount = invoices.length;
  const monthlyBudget = 100000;
  const remainingBalance = monthlyBudget - TotalInvoiceCount;
  const pendingPayments = invoices.filter(n => n.status === 'pending').length;
  const paidInvoices = invoices.filter(n => n.status === 'paid').length;

  // Pagination
  const totalPages = Math.ceil(filteredInvoices.length / pageSize) || 1;
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pageSize;
  const paginatedInvoices = filteredInvoices.slice(startIndex, startIndex + pageSize);

  const handleMarkAsRead = async (sku) => {
    await updateNotification(sku);
    if (loadStores) loadStores();
  };

  const handleMarkAllAsRead = async () => {
    await markAllNotificationsAsRead();
    if (loadStores) loadStores();
  };

  const handleDelete = async (sku) => {
    const updated = notifications.filter(n => String(n.sku) !== String(sku));
    localStorage.setItem('notification', JSON.stringify(updated));
    if (loadStores) loadStores();
    setActiveMenuId(null);
  };

  return (
    <div className='p-4 sm:p-10 flex flex-col gap-8 max-w-6xl mx-auto'>
      
      {/* Page Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Financial overview</h2>
          <p className="text-sm text-secondary mt-1">Track and manage your business expenses in real time</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => { setShowOnlyUnread(!showOnlyUnread); setCurrentPage(1); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-bold text-sm transition-all cursor-pointer ${
              showOnlyUnread 
                ? 'bg-primary text-white border-primary shadow-sm' 
                : 'border-outline-variant/60 text-secondary hover:bg-surface-container-low'
            }`}
          >
            <Filter size={16} />
            {showOnlyUnread ? 'Showing Unread' : 'Filter Unread'}
          </button>
          <button 
            onClick={handleMarkAllAsRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white font-bold text-sm hover:opacity-90 disabled:opacity-40 transition-all shadow-sm cursor-pointer"
          >
            <Plus size={16} />
           Add Expenses
          </button>
        </div>
      </div>

      {/* Bento Layout Stats & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Stat 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/40 flex items-center justify-between group hover:border-primary/45 transition-colors cursor-default col-span-2">
          <div className='flex gap-2 flex-col'>
             <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Banknote size={24} fill="currentColor" className="opacity-80" />
          </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Total Expenses</p>
            <h3 className="font-headline text-2xl font-extrabold text-on-surface">{TotalInvoiceCount}</h3>
          </div>
         
        </div>
        
        {/* Stat 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/40 flex items-center justify-between group hover:border-primary/45 transition-colors cursor-default col-span-2">
          <div className='flex gap-2 flex-col'>
             <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <LandmarkIcon size={24} fill="currentColor" className="opacity-80" />
          </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Monthly Bundget</p>
            <h3 className="font-headline text-2xl font-extrabold text-on-surface">{TotalInvoiceCount}</h3>
          </div>
         
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/40 flex flex-col gap-4 justify-between group hover:border-primary/45 transition-colors cursor-default col-span-2">
          <div className='flex gap-2 flex-col'>
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <PiggyBankIcon size={24} fill="currentColor" className="opacity-80" />
          </div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">RRemaining Balance</p>
            <p className="font-body text-sm  text-on-surface">
             {TotalInvoiceCount > monthlyBudget ? `You are over budget by ${TotalInvoiceCount - monthlyBudget}` : `You are under budget by ${monthlyBudget - TotalInvoiceCount}`}
            </p>
          </div>
        </div>
      </div>

      {/* Notifications Table Card */}
      <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/40 overflow-hidden flex flex-col gap-4 py-4">
        
      

        {/* Table wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/60">
              <tr>
                {['Category', 'Description', 'Date', "Amount", ""].map((header) => (
                  <th key={header} className="px-6 py-4 text-xs font-bold text-secondary uppercase tracking-wider w-1/2">
                    {header}
                  </th>
                ))}  </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {paginatedInvoices.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-3 text-secondary">
                      <Mail size={40} className="stroke-[1.5] text-outline-variant" />
                      <p className="font-bold text-slate-500">{empty || 'No notifications found'}</p>
                      <p className="text-xs text-slate-400">
                        {showOnlyUnread 
                          ? "You don't have any unread alerts matching this category." 
                          : "No notifications recorded for this category."}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedInvoices.map((inv, index) => {
                  const isUnread = inv.status === 'unread';
                  const displayCategory = inv.badge || inv.category || 'General';
                  const badgeClass = getCategoryBadgeClass(displayCategory);
                  
                  return (
                    <tr 
                      key={inv.id || index} 
                      className={`hover:bg-surface-bright transition-colors group ${!isUnread ? 'opacity-70 grayscale-[0.4]' : ''}`}
                    >
                      <td className="px-6 py-5">
                        
                          <div className='flex align-center gap-2 bg-primary/10 rounded-full py-1 px-3 w-fit text-primary '>
                            <h4 className="font-body-lg font-bold  text-xs  text-on-surface">
                              {inv.category}
                            </h4>
                          </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full font-medium text-xs`}>
                          {inv.description}
                        </span>
                      </td>
                      <td className="px-6 py-5 flex align-center gap-2 whitespace-nowrap">
                        <span className="  text-outline font-bold text-xs  ">
                          {inv.date}
                        </span>
                       
                     
                      </td>
                      <td className="px-6 py-5">
                         <span className="font-body-md font-bold text-sm text-on-surface">
                          {inv.amount}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <MoreVerticalIcon className="cursor-pointer"/>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
       

        {/* Pagination Footer */}
        {filteredInvoices.length > 0 && (
          <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant/60 flex flex-col sm:flex-row gap-4 justify-between items-center mt-2">
            <p className="text-sm text-secondary">
              Showing {startIndex + 1} to {Math.min(startIndex + pageSize, filteredInvoices.length)} of {filteredInvoices.length} stores
            </p>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={activePage === 1}
                className="p-2 rounded-xl border border-outline-variant/60 text-secondary disabled:opacity-30 hover:bg-surface-container transition-all cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button 
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    activePage === pageNum 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-secondary hover:bg-surface-container'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={activePage === totalPages}
                className="p-2 rounded-xl border border-outline-variant/60 text-secondary disabled:opacity-30 hover:bg-surface-container transition-all cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
       <div className="grid grid-cols-12 gap-4 min-h-20 border-outline-variant/40 mt-3 rounded-lg">
          <div className="col-span-8 border rounded-2xl bg-white border-outline-variant/40 p-4">
            <div className='flex justify-between mb-3 gap-4'>
              <p className="font-bold text-slate-500 ">Monthly Trend</p>
              <p className="text-xs font-bold text-secondary bg-container-low rounded-full p-2  gap-2 flex items-center align-center justify-center">Last 6 months <ChevronDownIcon className="cursor-pointer text-secondary"/></p>
            </div>
            
          </div>
          <div className="col-span-4 border rounded-2xl bg-white border-outline-variant/40 p-4">
            <div className='flex justify-between mb-3'>
              <p className="font-bold text-slate-900 ">Upcoming </p>
            </div>
            <div>
              
            </div>
          </div>
        </div>

      {/* Contextual Help / Tips Card */}
      <div className="bg-primary-container text-on-primary-container rounded-3xl p-8 relative overflow-hidden group shadow-lg">
        <div className="relative z-10 max-w-2xl">
          <h3 className="font-headline text-2xl font-bold text-white mb-2">Automate your store alerts</h3>
          <p className="text-white/90 text-sm mb-6 leading-relaxed">
            Connect your Telegram or WhatsApp to get real-time order notifications directly to your phone. Never miss a sale again.
          </p>
          <button className="px-6 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-surface-container-low transition-all shadow-md flex items-center gap-2 group-hover:-translate-y-0.5 cursor-pointer">
            Configure Channels
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        {/* Abstract Design Elements */}
        <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 border-[32px] border-white rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-20%] w-48 h-48 bg-white rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default InvoiceList;