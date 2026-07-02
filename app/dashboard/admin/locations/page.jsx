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
  MapPinPlusIcon
} from 'lucide-react';
import { updateNotification, markAllNotificationsAsRead } from '@/lib/actions';
import { getLocations } from '@/lib/service';
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

const StoreList = () => {
  const [showOnlyUnread, setShowOnlyUnread] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stores, setStores] = useState([])
  const empty = "No branches found"
  const pageSize = 5;

  const loadStores = async () => {
    setLoading(true)
    const res = await getLocations()
    console.log(res, "data")
    if(res.success){
      setStores(res.data)
    }
    setLoading(false)
  }
  useEffect(() => {
    loadStores()
  }, [])
  

  // Compute dynamic stats
  const unreadCount = stores.length;
  

  // Filter list
  const filteredStores = stores.filter(n => {
    const matchesUnread = !showOnlyUnread || n.status === 'unread';
    const matchesCategory = selectedCategory === 'All' || 
      n.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'System' && n.category?.toLowerCase() === 'inventory') ||
      (selectedCategory === 'Order' && n.category?.toLowerCase() === 'sales') ||
      (selectedCategory === 'Payment' && n.category?.toLowerCase() === 'bank');
    return matchesUnread && matchesCategory;
  });

  // Filter list
  const filteredStoresWithStatus = stores.filter(n => {
    const matchesUnread = !showOnlyUnread || n.status === 'unread';
    const matchesCategory = selectedCategory === 'All' || 
      n.category?.toLowerCase() === selectedCategory.toLowerCase() ||
      (selectedCategory === 'System' && n.category?.toLowerCase() === 'inventory') ||
      (selectedCategory === 'Order' && n.category?.toLowerCase() === 'sales') ||
      (selectedCategory === 'Payment' && n.category?.toLowerCase() === 'bank');
    return matchesUnread && matchesCategory;
  });
  const activeCount = stores.filter(n => n.status === 'active').length;
  const inactiveCount = stores.filter(n => n.status === 'inactive').length;

  // Pagination
  const totalPages = Math.ceil(filteredStores.length / pageSize) || 1;
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pageSize;
  const paginatedStores = filteredStores.slice(startIndex, startIndex + pageSize);

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
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Store Locations</h2>
          <p className="text-sm text-secondary mt-1">Manage your store locations, system updates, and order activity.</p>
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
            <MapPinPlusIcon size={16} />
            <Plus size={16} />
           Add new location
          </button>
        </div>
      </div>

      {/* Bento Layout Stats & Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Stat 1 */}
        <div
          className="bg-white p-4 px-6  border border-[#c2c6d8] flex  gap-2 justify-between items-center group  transition-colors cursor-default"
        >              
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Total branches</p>
            <h3 className="font-headline text-2xl font-extrabold text-on-surface">{unreadCount}</h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <Bell size={24} fill="currentColor" className="opacity-80" />
          </div>
        </div>
        
        {/* Stat 2 */}
          <div
              className="bg-white p-4 px-6  border border-[#c2c6d8] flex gap-2 justify-between items-center group  transition-colors cursor-default"
            >                 
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Active Status</p>
            <h3 className="font-headline text-2xl font-extrabold text-on-surface">{activeCount}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
            activeCount < 1 ? 'bg-amber-50 text-amber-600' : 'bg-green-50 text-green-600'
          }`}>
            {activeCount < 1 ? <AlertTriangle size={24} /> : <CheckCircle2 size={24} />}
          </div>
        </div>

        {/* Stat 3 */}
        <div
          className="bg-white p-4 px-6  border border-[#c2c6d8] flex flex-col gap-2 justify-between group  transition-colors cursor-default"
        >              
          <div>
            <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">Regional coverage</p>
            <p className="font-body text-sm  text-on-surface">
              You currently have locations accross {activeCount} major regions.
            </p>
          </div>
          <Link href="/dashboard/admin/locations/map" className='flex gap-2 text-primary self-end p-3 '>
            <p className='font-body text-sm font-bold  text-primary'>Open Map view</p>
            <ArrowRight className='text-primary' size={20} />
          </Link>
        </div>
      </div>

      {/* Notifications Table Card */}
      <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.03)] border border-outline-variant/40 overflow-hidden flex flex-col gap-4 py-4">
        
      

        {/* Table wrapper */}
          <div className="bg-white rounded-xl shadow-sm border border-[#c2c6d8]/30 overflow-hidden">
              <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant/60">
                {['Branch Name', 'Address', 'Manager', "Status", 'Actions'].map((header, index) => (

                <td key={index} className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                      <td className="px-6 py-5">
                      {header}
                  </td>
                </td>
                 ))} 
            </thead>
                <tbody className="divide-y divide-[#c2c6d8]/30">
              {paginatedStores.length === 0 ? (
                    <tr  className="hover:bg-white/50 transition-colors group cursor-pointer">
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
                paginatedStores.map((store, index) => {
                  const isUnread = store.status === 'unread';
                  const displayCategory = store.badge || store.category || 'General';
                  const badgeClass = getCategoryBadgeClass(displayCategory);
                  
                  return (
                    <tr 
                      key={store.id || index} 
                      className={`hover:bg-surface-bright transition-colors group ${!isUnread ? 'opacity-70 grayscale-[0.4]' : ''}`}
                    >
                      <td className="px-6 py-5">
                        
                          <div className='flex align-center items-center gap-2'>
                              <span className=" bg-surface-container text-outline rounded-xl p-2"><Store size={24}/></span>
                            <h4 className="font-body-lg  text-sm  text-on-surface">
                              {store.name}
                            </h4>
                          </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full font-medium text-xs border ${badgeClass}`}>
                          {store.address}
                        </span>
                      </td>
                      <td className="px-6 py-5 flex items-center gap-2 whitespace-nowrap">
                        <span className=" bg-surface-container text-outline font-bold text-sm rounded-full p-2">
                          {store.managerInitials}
                        </span>
                        <span className="font-body-md text-sm text-on-surface">
                          {store.managerName}
                        </span>
                       
                      </td>
                        <td className="px-6 py-5 whitespace-nowrap">
                        <span className="font-body-md text-sm text-on-surface">
                          {store.status}
                        </span>
                       
                      </td>
                      <td 
                        className="px-6 py-5 text-right relative"
                        onMouseLeave={() => setActiveMenuId(null)}
                      >
                        <div className="flex items-center justify-end gap-2">
                         
                          <button 
                            onClick={() => setActiveMenuId(activeMenuId === store.id ? null : store.id)}
                            className="p-1.5 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                          >
                            <Pencil size={16} />
                          </button>
                           <button 
                            onClick={() => setActiveMenuId(activeMenuId === store.id ? null : store.id)}
                            className="p-1.5 text-secondary hover:text-primary hover:bg-surface-container rounded-lg transition-colors cursor-pointer"
                          >
                            <Trash size={16} />
                          </button>
                          
                          {activeMenuId === store.id && (
                            <div className="absolute right-6 top-12 bg-white border border-outline-variant/60 shadow-lg rounded-xl py-1 z-10 w-36 text-left">
                              {isUnread && (
                                <button 
                                  onClick={() => {
                                    handleMarkAsRead(store.id);
                                    setActiveMenuId(null);
                                  }}
                                  className="w-full px-4 py-2 text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2 cursor-pointer"
                                >
                                  <Check size={14} />
                                  Mark as read
                                </button>
                              )}
                              <button 
                                onClick={() => handleDelete(store.id)}
                                className="w-full px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2 cursor-pointer"
                              >
                                <Trash2 size={14} />
                                Delete alert
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        {filteredStores.length > 0 && (
          <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant/60 flex flex-col sm:flex-row gap-4 justify-between items-center mt-2">
            <p className="text-sm text-secondary">
              Showing {startIndex + 1} to {Math.min(startIndex + pageSize, filteredStores.length)} of {filteredStores.length} stores
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

export default StoreList;