"use client"
import { AlertTriangle, ArrowRight, Calendar, ChevronDown, Download, FileStack, Package, Plus, Search, SquareCheck } from 'lucide-react';
import Link from 'next/link';
import React, { useMemo, useState } from 'react'

const page = () => {
  
  const inventory = []
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const totalCount = (inventory || []).length;
  const optimalStock = inventory.filter(item => item.status?.toLowerCase() === 'optimal').length;
  const lowStock = inventory.filter(item => item.stock?.current < (item.stock?.max * 0.5) && item.stock?.current > 0).length;
  const outOfStock = inventory.filter(item => item.stock?.current === 0).length;

  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'All Categories' || item.category === categoryFilter;
      const matchesStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [inventory, searchQuery, categoryFilter, statusFilter]);
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Optimal':
        return { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' };
      case 'Low Stock':
        return { bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed-variant', dot: 'bg-tertiary' };
      case 'Out of Stock':
        return { bg: 'bg-error-container', text: 'text-on-error-container', dot: 'bg-error' };
      default:
        return { bg: 'bg-surface-container', text: 'text-on-surface-variant', dot: 'bg-outline' };
    }
  };

  const getProgressColor = (percent) => {
    if (percent === 0) return 'bg-error';
    if (percent < 25) return 'bg-tertiary';
    return 'bg-green-500';
  };

  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-outline-variant/10 overflow-hidden">
       {/* Header Section */}
      <div className="hidden lg:flex justify-between items-end">
        <div>
          <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">Store locations</h2>
          <p className="text-on-surface-variant">Manage and track your global warehouse stock levels accross all branches.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
            <Download size={20} />
            Export CSV
          </button>
          <Link href="/dashboard/admin/inventory/add-product">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Plus size={20} />
              New Location
            </button>
          </Link>
        </div>
      </div>

     

      {/* Advanced Filter Bar */}
      <div className="mx-8 mb-6 bg-surface-container-low p-2 rounded-2xl flex items-center gap-2">
        <div className="flex-2 flex items-center gap-2 px-4 border-r border-outline-variant/30">
          <Search className="text-outline" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or SKU..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-sm font-medium text-on-surface focus:ring-0 w-full placeholder:text-outline/60"
          />
        </div>
        <div className="flex-3 flex items-center gap-2 px-4">
          <span className="text-[10px] font-bold text-outline uppercase whitespace-nowrap tracking-wider">Category</span>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 cursor-pointer"
          >{["all", "Electronics", "Accessories", "Furniture", "Footwear"].map((item) => (<option key={item}>{item}</option>))}
          </select>
          <div className="w-px h-6 bg-outline-variant/30 mx-2"></div>
          <span className="text-[10px] font-bold text-outline uppercase whitespace-nowrap tracking-wider">Status</span>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 cursor-pointer"
          > {["all", "optimal", "low Stock", "Out of Stock"].map((item) => (<option key={item}>{item}</option>))}  
          </select>
          
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 cursor-pointer hover:bg-surface-variant/10 transition-colors">
          <Calendar className="text-outline" size={14} />
          <span className="text-sm font-medium text-on-surface">Last 30 Days</span>
          <ChevronDown className="text-outline" size={14} />
        </div>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-outline-variant/10 bg-surface-container-low">
            {['Location Name', 'Address', 'Country', 'State', 'City', 'Actions'].map((item, index) => (
              <th key={index} className={`py-5 text-xs font-bold text-outline uppercase tracking-wider ${index === 0 ? 'px-8' : index === 5 ? 'px-8 text-right' : 'px-6'}`}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/10">
          {filteredInventory.length > 0 ? (
            filteredInventory.map((item, index) => {
              const currentStock = item.stock?.current ?? 0;
              const maxStock = item.stock?.max ?? 100;
              const percent = (currentStock / maxStock) * 100;
              const styles = getStatusStyles(item.status);
              
              return (
                <tr key={index} className="hover:bg-surface-container-low/20 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden shrink-0 shadow-sm border border-outline-variant/10">
                        <img 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                          src={item.src}
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-on-surface text-sm">{item.name}</p>
                        <p className="text-[10px] text-outline font-label uppercase tracking-wider">SKU: {item.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-xs text-on-surface-variant font-medium px-3 py-1 bg-surface-container rounded-full border border-outline-variant/10">{item.category}</span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="w-32">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs font-bold text-on-surface">{currentStock}</span>
                        <span className="text-[10px] text-outline font-bold">/ {maxStock}</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                        <div className={`h-full ${getProgressColor(percent)} transition-all duration-500`} style={{ width: `${percent}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-headline font-bold text-on-surface text-base">${item.price}</td>
                  <td className="px-6 py-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${styles.bg} ${styles.text} rounded-full text-[10px] font-bold uppercase tracking-wider border border-outline-variant/10`}>
                      <span className={`w-1.5 h-1.5 ${styles.dot} rounded-full`}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link   
                      className='inline-flex items-center gap-1.5 px-4 py-2 hover:bg-surface-container rounded-xl transition-colors text-primary font-bold text-xs'
                      href={`/dashboard/admin/inventory/productDetails/${item.sku}`}
                    >
                      View Details
                      <ArrowRight size={18} />
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="6" className="py-20 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center">
                    <Package className="text-outline" size={30} />
                  </div>
                  <div>
                    <p className="font-bold text-on-surface">No store found</p>
                    <p className="text-sm text-outline">Try adjusting your filters or search query.</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setCategoryFilter('All Categories');
                      setStatusFilter('All Statuses');
                    }}
                    className="mt-2 text-primary text-xs font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      
    </div>
  );
}

export default page