"use client"
import { AlertTriangle, ArrowRight, Calendar, CarFront, ChevronDown, Download, FileStack, Link2, Package, Plus, Search, ShoppingCart, SquareCheck } from 'lucide-react';
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
    <div className="flex flex-col gap-8 p-4 rounded-2xl border border-outline-variant/10 overflow-hidden">
       {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">Connected Platforms</h2>
          <p className="text-on-surface-variant">Manage and track your global warehouse stock levels accross all platforms.</p>
        </div>
        <div className="hidden sm:flex gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-container rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity">
            <Download size={20} />
            Export CSV
          </button>
          <Link href="/dashboard/admin/inventory/add-product">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              <Plus size={20} />
              Connect
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-8 rounded-2xl border border-outline-variant/10 overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center border-b border-outline-variant/10 py-4">

                {
                    [
                        {
                            name: 'Shopify',
                            description: 'E-commerce Platform',
                            status: 'active',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {
                            name: 'Amazon',
                            description: 'E-commerce Platform',
                            status: 'inactive',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {
                            name: 'Ebay',
                            description: 'E-commerce Platform',
                            status: 'active',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {
                            name: 'Jumia',
                            description: 'E-commerce Platform',
                            status: 'inactive',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {
                            name: 'Jiji',
                            description: 'E-commerce Platform',
                            status: 'active',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {
                            name: 'Konga',
                            description: 'E-commerce Platform',
                            status: 'active',
                            location: 'Lagos, Nigeria',
                            products: 120
                        },
                        {

                            name: 'Facebook',
                            description: 'E-commerce Platform',
                            status: 'inactive',
                            location: 'Lagos, Nigeria',
                            products: 120
                        }
                    ].map((item, index) => (
                  <div key={index} className="bg-white col-span-2 p-4 flex flex-col gap-4 border-[1px] border-outline-variant rounded-2xl">
                    <div className="flex items-center gap-2 ">
                        {item.image ?
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-contain" />
                        : 
                    <div className="w-12 h-12 rounded-lg object-contain flex items-center justify-center font-bold"><ShoppingCart/></div>
                        }
                    <h3 className="font-headline text-lg font-bold text-on-surface">{item.name}</h3>
                    </div>
                    <p>Connect to your {item.name} store</p>                  
                    <div className="flex justify-end ">
                    <div className={` flex items-center gap-2 w-fit  p-1.5 px-3 rounded-full ${item.status === 'active' ? 'bg-error/15 text-error/90' : 'bg-outline-variant/30 text-primary'}`}>
                        <Link2 size={14}/>
                    <button className="text-xs font-bold hover:underline">{item.status === 'active' ? 'Disconnect' : 'Connect'}</button>
                    </div>
                    </div>
            </div>
            ))
        }
      </div>
    </div>

     


      
    </div>
  );
}

export default page