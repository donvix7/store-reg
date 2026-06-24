"use client"
import { Search, Plus, SearchX, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useMemo } from 'react';

const MobileInventory = ({initialInventory}) => {

  const inventory = initialInventory
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const totalCount = (inventory || []).length;

  const filteredInventory = useMemo(() => {
    return inventory.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           item.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === 'All Categories' || item.category === categoryFilter;
      const matchesStatus = statusFilter === 'All Statuses' || item.status === statusFilter;
      
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [inventory, searchQuery, categoryFilter, statusFilter]);

  const filterProps = {
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    statusFilter,
    setStatusFilter,
    filteredInventory,
    totalCount
  };
  const categories = ['All Categories', 'Electronics', 'Accessories', 'Furniture', 'Footwear'];
  const statuses = ['All Statuses', 'Optimal', 'Low Stock', 'Out of Stock'];

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <section className="space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline">
            <Search size={20} />
          </div>
          <input
            className="w-full pl-12 pr-4 py-4 bg-surface-container-highest rounded-xl border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline/70"
            placeholder="Search products or SKU..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                  categoryFilter === cat 
                  ? 'bg-primary text-on-primary border-primary shadow-md shadow-primary/20' 
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/10 hover:bg-surface-container'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar">
            {statuses.map((stat) => (
              <button
                key={stat}
                onClick={() => setStatusFilter(stat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                  statusFilter === stat 
                  ? 'bg-secondary-container text-on-secondary-container border-secondary-container shadow-sm' 
                  : 'bg-surface-container-low text-on-surface-variant border-outline-variant/10 hover:bg-surface-container'
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Link href="/dashboard/admin/add-product" className="flex-1">
            <button className="w-full bg-primary text-on-primary font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary/10 hover:opacity-90 transition-all">
              <Plus size={20} />
              New Item
            </button>
          </Link>
        </div>
      </section>

      {/* Stats Bento */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-surface-container-low p-5 rounded-2xl border border-outline-variant/10 space-y-2">
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest">Total SKUs</p>
          <p className="text-2xl font-headline font-bold">{totalCount}</p>
          <div className="h-1 w-full bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-primary w-3/4"></div>
          </div>
        </div>
        <div className="bg-tertiary-fixed p-5 rounded-2xl space-y-2 shadow-sm shadow-tertiary/5">
          <p className="text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest">Low Stock</p>
          <p className="text-2xl font-headline font-bold text-on-tertiary-fixed">42</p>
          <div className="h-1 w-full bg-on-tertiary-fixed-variant/20 rounded-full overflow-hidden">
            <div className="h-full bg-tertiary w-1/4"></div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <div className="space-y-4">
        {filteredInventory.length > 0 ? (
          filteredInventory.map((item, index) => {
            const currentStock = item.stock?.current ?? 0;
            const maxStock = item.stock?.max ?? 100;
            const percentage = (currentStock / maxStock) * 100;

            return (
              <Link 
                key={index}
                href={`/dashboard/admin/inventory/productDetails/${item.sku}`}
                className="block"
              >
                <div
                  className={`bg-surface-container-lowest p-5 rounded-3xl border border-outline-variant/10 shadow-sm transition-all active:scale-[0.98] ${currentStock === 0 ? 'opacity-75' : ''}`}
                >
                  <div className="flex gap-4 items-start border-b border-outline-variant/5 pb-5">
                    <div className="w-16 h-16 rounded-xl bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10 shadow-inner">
                      <img
                        alt={item.name}
                        className={`w-full h-full object-cover ${currentStock === 0 ? 'grayscale' : ''}`}
                        src={item.src}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-headline font-bold text-sm truncate ${currentStock === 0 ? 'text-outline' : 'text-on-surface'}`}>
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-[10px] text-on-surface-variant font-medium mb-2 uppercase tracking-tight">{item.category}</p>
                      <code className="bg-surface-container-high px-2 py-0.5 rounded-lg font-mono text-[9px] text-outline font-bold shadow-sm">
                        {item.sku}
                      </code>
                    </div>
                    <span className={`text-[9px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm border border-outline-variant/10 ${
                      item.status === 'Optimal' ? 'bg-green-100 text-green-800' :
                      item.status === 'Low Stock' ? 'bg-tertiary-fixed text-on-tertiary-fixed' :
                      item.status === 'Out of Stock' ? 'bg-error-container text-on-error-container' :
                      'bg-secondary-container text-on-secondary-container'
                    }`}>
                      {item.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="space-y-0.5">
                        <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Availablity</p>
                        <span className={`text-sm font-bold ${currentStock === 0 ? 'text-error' :
                            currentStock < 20 ? 'text-tertiary' : 'text-on-surface'
                          }`}>
                          {currentStock} units
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Price</p>
                        <span className="font-headline font-extrabold text-xl text-primary">${item.price}</span>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${currentStock === 0 ? 'bg-error' :
                            currentStock < 20 ? 'bg-tertiary' : 'bg-green-500'
                          }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="py-20 bg-surface-container-low/30 rounded-3xl border border-dashed border-outline-variant/30 flex flex-col items-center justify-center text-center px-10">
            <SearchX className="text-outline/40 mb-4" size={48} />
            <p className="font-bold text-on-surface">No matches found</p>
            <p className="text-xs text-outline mt-1 leading-relaxed">We couldn&apos;t find any products matching your current filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setCategoryFilter('All Categories');
                setStatusFilter('All Statuses');
              }}
              className="mt-6 px-6 py-3 bg-surface-container-highest text-primary font-bold text-xs rounded-xl transition-all active:scale-95"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination Mobile */}
      {filteredInventory.length > 0 && (
        <div className="flex items-center justify-between pt-4 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container border border-outline-variant/20 transition-all active:scale-90 disabled:opacity-30" disabled>
            <ChevronLeft size={20} />
          </button>
          <div className="flex flex-col items-center">
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Page</span>
            <span className="text-sm font-black text-on-surface">1 / {Math.max(1, Math.ceil(totalCount / 10))}</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container border border-outline-variant/20 transition-all active:scale-90">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileInventory;
