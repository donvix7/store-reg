import { Ellipsis, Search, Calendar, Filter, User, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const DesktopHistory = ({history}) => {
  return (
    <div>
         {/* Desktop Filters Section */}
      <section className="hidden lg:block bg-surface-container-low  p-6 border border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-outline uppercase tracking-widest ml-1">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <input className="w-full bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="SKU, Product, or User" type="text"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-outline uppercase tracking-widest ml-1">Date Range</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <select className="w-full bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                {['All Time', 'Last 7 Days', 'Last 30 Days', 'Current Quarter', 'Custom Range'].map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-outline uppercase tracking-widest ml-1">Action Type</label>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <select className="w-full bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                {['All Actions', 'Stock Received', 'Manual Adjustment', 'Order Fulfillment', 'Return Processed'].map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-outline uppercase tracking-widest ml-1">User Account</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <select className="w-full bg-surface-container-lowest border-none rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary outline-none appearance-none cursor-pointer">
                {['All Users', ...new Set(history.map((item) => item.user))].map((user) => (
                  <option key={user}>{user}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-h-[300px]">
            <thead>
              <tr className="bg-surface-container-high/50 border-b border-outline-variant/15">
               {['Date & Time', 'Action', 'Product', 'SKU', 'Change', 'User', 'Status', ''].map((header, index) => (
                <th key={index} className="px-6 py-5 font-headline font-bold text-on-surface text-sm tracking-wide">{header}</th>
               ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {history.map((item, index) => (
                <tr key={index} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-on-surface">{item.date}</span>
                      <span className="text-xs text-outline">{item.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-on-surface">{item.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-on-surface">{item.product}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-mono text-outline">{item.sku}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold ${item.quantity.startsWith('+') ? 'text-emerald-600' : 'text-error'}`}>{item.quantity}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-on-surface">{item.user}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-surface-container-highest text-primary font-bold text-[10px] uppercase tracking-wider rounded-full">{item.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-surface-container-low transition-all">
                      <Ellipsis />
                    </button>
                  </td>
                </tr>
              ))}   
            </tbody>
          </table>
        </div>
      
    </div>
  )
}

export default DesktopHistory