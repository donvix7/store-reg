"use client"
import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Warehouse,
  Settings,
  Plus,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Grid,
  User,
  Download,
  RefreshCw,
  Info,
  Filter,
  ArrowUpDown,
  TrendingUp,
  AlertTriangle,
  XCircle,
  DollarSign,
  Edit,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Store,
  Layers
} from 'lucide-react';
import getProducts from '@/lib/service';

const DesktopInventory = () => {
 const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
//  const [currentPage, setCurrentPage] = useState(1);
  const [inventoryItems, setInventoryItems] = useState([]);

  const loadData = async() => {
    const inventory = await getProducts();
    if(inventory.success){
      setInventoryItems(inventory.data)
      console.log(inventory)

    }else{
      setInventoryItems([])
      console.log(inventory)

    }
  }
  useEffect(() => {
    loadData()
  }, [])

  const stats = [
    {
      label: 'Total Items',
      value: inventoryItems.length,
      change: '+4.5% vs last month',
      icon: Package,
      color: 'text-primary bg-secondary-container'
    },
    {
      label: 'Low Stock Alerts',
      value: (inventoryItems.filter(item => item.stock <= item.maxStock * 0.4 && item.stock > 0).length),
      change: 'Requires urgent attention',
      icon: AlertTriangle,
      color: 'text-tertiary bg-tertiary-fixed'
    },
    {
      label: 'Out of Stock',
      value: (inventoryItems.filter(item => item.stock === 0).length),
      change: 'Impacts conversion rates',
      icon: XCircle,
      color: 'text-error bg-error-container'
    },
    {
      label: 'Total Inventory Value',
      value: "₦" + inventoryItems.reduce((acc, item) => acc + (Number(String(item.price).replace(/[^0-9.]/g, '')) || 0) * (item.stock || 0), 0).toLocaleString(),
      change: 'Estimated retail value',
      icon: DollarSign,
      color: 'text-primary bg-secondary-container'
    }
  ];

  const getStockStatus = (item) => {
    if (item.stock === 0) return { label: 'Out of Stock', statusColor: 'text-[#ba1a1a]', barColor: 'bg-[#ba1a1a]' };
    if (item.stock <= (item.maxStock || item.stock) * 0.4) return { label: 'Low Stock', statusColor: 'text-[#e6820a]', barColor: 'bg-[#e6820a]' };
    return { label: 'In Stock', statusColor: 'text-[#0050cb]', barColor: 'bg-[#0050cb]' };
  };

  const getStockPercentage = (stock, maxStock) => {
    if (!maxStock) return 100;
    return Math.min((stock / maxStock) * 100, 100);
  };

  const getRowBg = (stock) => {
    return stock === 0 ? 'bg-red-50' : '';
  };

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(inventoryItems.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-outline-variant/10 overflow-hidden">
        <main className="min-h-screen">
        {/* Top Navigation Shell */}
        <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-[#f9f9fc] border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
          <div className="flex items-center gap-6">
            <h2 className="text-[20px] leading-[28px] font-bold text-[#1a1c1e]">Inventory Dashboard</h2>
            <div className="relative w-80">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
              <input
                className="w-full pl-10 pr-4 py-1.5 bg-[#f3f3f6] border border-[#c2c6d8] rounded-full text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb] focus:border-transparent outline-none transition-all"
                placeholder="Search orders, SKU, products..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#0066ff] text-white px-4 py-1.5 rounded-lg font-semibold text-[14px] leading-[20px] hover:bg-[#0050cb] transition-colors active:scale-95">
              Sync Store
            </button>
            <button className="text-[#555f6c] hover:text-[#0050cb] px-4 py-1.5 font-semibold text-[14px] leading-[20px] transition-colors">
              Export CSV
            </button>
            <div className="h-8 w-[1px] bg-[#c2c6d8] mx-2"></div>
            <button className="text-[#424656] hover:bg-[#e8e8ea] p-2 rounded-full transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
            <button className="text-[#424656] hover:bg-[#e8e8ea] p-2 rounded-full transition-colors">
              <Grid size={20} />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e2e2e5]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhv9ocpwxRuKsnzw9z7VPc_slnnHZMa9-gJJ1xZOeu121xi-POYuzjxwA_h9OTBEG_F4yaDJZkCx3NbW8b0VTJh2lCqc1VuHHRUCNG9P9khRt0KQ8eg8tnfOr42zM70Mi-zaGH-UQ0WxirZwmGBg2Wr9ML-WZUxh6UF48IvioaXTC1nhENeGLEf7JjP2Fq3RMgpdBfCgb0MCDlhBfnaAZSlNevaBvunBwJyBdJNty5WFfdiOKDaoXoaW15Dm8Wn0jGv31-f86Ch6r2"
              />
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="pt-24 px-6 pb-6 max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Inventory</h1>
                <Info size={20} className="text-[#727687] cursor-help" title="Manage your product stock levels and variants across all store locations." />
              </div>
              <nav className="flex text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] gap-2 mt-1">
                <span className="hover:text-[#0050cb] cursor-pointer">Dashboard</span>
                <span>/</span>
                <span className="text-[#0050cb] font-bold">Inventory</span>
              </nav>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-[#c2c6d8] text-[#0050cb] font-bold rounded-lg hover:bg-[#f3f3f6] transition-colors">
                <Download size={20} />
                Export Inventory
              </button>
              <button className="flex tems-center gap-2 px-6 py-3 bg-[#0066ff] text-white font-bold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">
                <RefreshCw size={20} />
                + Update Stock
              </button>
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 border border-[#c2c6d8]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[#424656] font-medium">{stat.label}</span>
                    <span className={`${stat.color} p-1 rounded`}>
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">{stat.value}</div>
                  <div className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mt-2 flex items-center gap-1">
                    {stat.change.includes('+') && <TrendingUp size={14} className="text-[#0050cb]" />}
                    {stat.change}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Inventory Controls */}
          <div className="bg-white p-4 rounded-t-xl border border-[#c2c6d8] border-b-0 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-[300px]">
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
                <input
                  className="w-full pl-10 pr-4 py-2 border border-[#c2c6d8] rounded-lg focus:ring-2 focus:ring-[#0050cb] focus:border-transparent outline-none"
                  placeholder="Search by name, SKU or ID..."
                  type="text"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] transition-colors text-[#1a1c1e] font-medium">
                <Filter size={20} />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] transition-colors text-[#1a1c1e] font-medium">
                <ArrowUpDown size={20} />
                Sort By
              </button>
            </div>
            <div className="flex items-center gap-2 text-[#424656]">
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium">Bulk Actions:</span>
              <button className="px-3 py-1.5 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] text-[14px] leading-[20px] opacity-50 cursor-not-allowed">Edit Price</button>
              <button className="px-3 py-1.5 border border-[#c2c6d8] rounded-lg hover:bg-[#f3f3f6] text-[14px] leading-[20px] opacity-50 cursor-not-allowed">Delete</button>
            </div>
          </div>

          {/* Inventory Table */}
          <div className="bg-white rounded-b-xl border border-[#c2c6d8] overflow-hidden shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <table className="w-full text-left">
              <thead className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                <tr>
                  <th className="p-4 w-10">
                    <input
                      className="w-4 h-4 rounded border-[#c2c6d8] text-[#0050cb] focus:ring-[#0050cb]"
                      type="checkbox"
                      onChange={toggleSelectAll}
                      checked={selectedItems.length === inventoryItems.length && inventoryItems.length > 0}
                    />
                  </th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Product</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">SKU</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Category</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Stock Level</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Variants</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Unit Price(₦)</th>
                  <th className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c2c6d8]/30">
                {inventoryItems && inventoryItems.map((item, index) => {
                  const isSelected = selectedItems.includes(item.id);
                  const stockStatus = getStockStatus(item);
                  const stockPercentage = getStockPercentage(item.stock, item.maxStock);

                  return (
                    <tr
                      key={index}
                      className={`hover:bg-[#f9f9fc] transition-colors group ${getRowBg(item.stock)}`}
                      onClick={(e) => {
                        if (e.target.type !== 'checkbox' && !e.target.closest('button')) {
                          toggleSelectItem(item.id);
                        }
                      }}
                    >
                      <td className="p-4">
                        <input
                          className="w-4 h-4 rounded border-[#c2c6d8] text-[#0050cb] focus:ring-[#0050cb]"
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleSelectItem(item.id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#eeeef0] overflow-hidden">
                            <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                          </div>
                          <div>
                            <div className="font-bold text-[#1a1c1e]">{item.name}</div>
                            <div className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">{item.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium">{item.sku}</td>
                      <td className="p-4">
                        <span className="bg-[#eeeef0] px-2 py-1 rounded text-[12px] leading-[16px] tracking-[0.05em] font-medium">{item.category}</span>
                      </td>
                      <td className="p-4">
                        <div className="w-full max-w-[120px]">
                          <div className="flex justify-between text-xs mb-1">
                            <span className={`font-bold ${stockStatus.statusColor}`}>{item.stock} left</span>
                            <span className={`${stockStatus.statusColor}`}>{stockStatus.label}</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#d9e3f2] rounded-full overflow-hidden">
                            <div className={`h-full ${stockStatus.barColor}`} style={{ width: `${stockPercentage}%` }}></div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-center font-medium">{item.variants ?? '—'}</td>
                      <td className="p-4 font-semibold"> {item.price}</td>
                      <td className="p-4 text-right">
                        <button className="p-2 hover:bg-[#e8e8ea] rounded-full text-[#727687] hover:text-[#0050cb] transition-colors">
                          <Edit size={20} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-4 bg-[#f9f9fc] border-t border-[#c2c6d8] flex items-center justify-between">
              <span className="text-[14px] leading-[20px] text-[#424656]">Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">1,240</span> items</span>
              <div className="flex gap-2">
                <button className="px-4 py-2 border border-[#c2c6d8] rounded-lg text-[#1a1c1e] font-medium hover:bg-[#f3f3f6] transition-colors disabled:opacity-30 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <div className="flex items-center">
                  <button className="w-10 h-10 flex items-center justify-center bg-[#0050cb] text-white rounded-lg font-bold">1</button>
                  <button className="w-10 h-10 flex items-center justify-center text-[#1a1c1e] font-medium hover:bg-[#f3f3f6] rounded-lg">2</button>
                  <button className="w-10 h-10 flex items-center justify-center text-[#1a1c1e] font-medium hover:bg-[#f3f3f6] rounded-lg">3</button>
                  <span className="px-2 text-[#727687]">...</span>
                  <button className="w-10 h-10 flex items-center justify-center text-[#1a1c1e] font-medium hover:bg-[#f3f3f6] rounded-lg">124</button>
                </div>
                <button className="px-4 py-2 border border-[#c2c6d8] rounded-lg text-[#1a1c1e] font-medium hover:bg-[#f3f3f6] transition-colors">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopInventory;
