import React from 'react';
import { DollarSign, TrendingUp, ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';

const DesktopReports = ({initialInventory}) => {

  const inventory = initialInventory || [];
  return (
    <section className="p-10 space-y-10 max-w-7xl mx-auto w-full font-body">
      {/* Header & Filter Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Analytics Overview</h2>
          <p className="text-on-surface-variant font-medium mt-1">Real-time inventory intelligence and movement tracking.</p>
        </div>
        <div className="flex items-center bg-surface-container p-1 rounded-xl">
          {["Date Range", "7 Days", "30 Days", "90 Days", "Custom"].map((item) => (
            <button key={item} className="px-6 py-2 text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-colors">
              {item}
            </button>
          ))}    
        </div>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between group">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-outline font-semibold text-sm tracking-wider uppercase">Total Inventory Value</span>
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <DollarSign size={20} />
              </div>
            </div>
            <div className="flex items-baseline gap-3">
              <h3 className="text-4xl font-headline font-extrabold text-on-surface">{inventory.reduce((acc, item) => acc + (item.stock?.current || 0) * (item.stock?.current || 0), 0)}</h3>
              
            </div>
          </div>
          <div className="mt-8 h-20 w-full bg-surface-container-low rounded-xl relative overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M0 60 Q 50 20 100 45 T 200 10 T 300 35 T 400 50 T 500 15 T 600 40 L 600 80 L 0 80 Z" fill="rgba(0, 61, 155, 0.05)"></path>
              <path d="M0 60 Q 50 20 100 45 T 200 10 T 300 35 T 400 50 T 500 15 T 600 40" fill="none" stroke="#003d9b" strokeWidth="3"></path>
            </svg>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <span className="text-outline font-semibold text-sm tracking-wider uppercase">Active SKUs</span>
          <h3 className="text-4xl font-headline font-extrabold text-on-surface mt-4">{inventory.length}</h3>
          <p className="text-on-surface-variant text-xs mt-2 font-medium">{inventory.filter(item => item.stock?.current < item.stock?.max && item.stock?.current > 0).length} Added this month</p>
          
        </div>
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <span className="text-outline font-semibold text-sm tracking-wider uppercase">Stock Alerts</span>
          <h3 className="text-4xl font-headline font-extrabold text-error mt-4">{inventory.filter(item => item.stock?.current < item.stock?.max).length}</h3>
          <p className="text-on-surface-variant text-xs mt-2 font-medium">Items requiring attention</p>
          <Link href="/dashboard/admin/inventory" className="mt-6 text-sm font-bold text-primary flex items-center group">
            Review Now 
            <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
          </Link>
        </div>
      </div>

      {/* Charts & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Net Stock Movement */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-10">
            <h4 className="font-headline font-bold text-xl">Net Stock Movement</h4>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Inbound</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Outbound</span>
              </div>
            </div>
          </div>
          <div className="aspect-16/7 relative w-full flex items-end gap-4 px-4">
            {/* Simulated Bar Chart */}
            {[
              { label: 'MON', inbound: 60, outbound: 40 },
              { label: 'TUE', inbound: 80, outbound: 30 },
              { label: 'WED', inbound: 40, outbound: 50 },
              { label: 'THU', inbound: 90, outbound: 20 },
              { label: 'FRI', inbound: 75, outbound: 45 },
              { label: 'SAT', inbound: 35, outbound: 15 },
              { label: 'SUN', inbound: 25, outbound: 10 },
            ].map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col justify-end gap-1 group cursor-pointer">
                <div className="w-full bg-secondary-container rounded-t-lg group-hover:opacity-80 transition-opacity" style={{ height: `${data.outbound}%` }}></div>
                <div className="w-full bg-primary rounded-t-lg group-hover:opacity-80 transition-opacity" style={{ height: `${data.inbound}%` }}></div>
                <span className="text-[10px] text-center mt-2 text-outline font-bold">{data.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <h4 className="font-headline font-bold text-xl mb-8">Category Mix</h4>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-on-surface">Electronics</span>
                <span className="text-outline">45%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[45%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-on-surface">Furniture</span>
                <span className="text-outline">28%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[28%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-on-surface">Supplies</span>
                <span className="text-outline">18%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-tertiary-container h-full w-[18%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-bold text-on-surface">Other</span>
                <span className="text-outline">9%</span>
              </div>
              <div className="w-full h-2.5 bg-surface-container rounded-full overflow-hidden">
                <div className="bg-outline h-full w-[9%]"></div>
              </div>
            </div>
          </div>
          <Link href="/dashboard/admin/inventory" className="w-full mt-10 flex items-center justify-center py-3 border border-outline-variant/30 rounded-xl text-sm font-bold hover:bg-surface-container-low transition-colors">
            Full Category Report
          </Link>
        </div>
      </div>

      {/* Most Popular Items Table */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
       
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">

              {["Item", "Stock", "Price", "Action"].map((item) => (
                <th key={item} className="px-8 py-4 text-xs font-extrabold text-outline uppercase tracking-wider">{item}</th>
              ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
            {[...new Set(inventory.map((item) => item.name))].map((name) => (
              <tr key={name} className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-container overflow-hidden">
                      <img className="w-full h-full object-cover" alt="High quality studio headphones on stand" src={name.src}/>
                    </div>
                    <div>
                      <div className="font-bold text-on-surface">{name}</div>
                      <div className="text-xs text-on-surface-variant">{name.category}</div>
                    </div>
                  </div>
                </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DesktopReports;
