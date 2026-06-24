"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FileDown, Plus, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

const TabledInvoices = ({invoices}) => {
    const [statusFilter, setStatusFilter] = useState("All Statuses")
  return (
    <div>
        {/* Filters & Table Section */}
      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/10 overflow-hidden shadow-sm">
        {/* Table Controls */}
        <div className="px-6 py-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-outline-variant/10">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full lg:w-auto">
            <div className="flex bg-surface-container p-1 rounded-xl whitespace-nowrap">
              <button className="px-5 py-2 text-sm font-bold rounded-lg bg-surface-container-lowest shadow-sm text-primary transition-all">All Invoices</button>
              <button className="px-5 py-2 text-sm font-semibold rounded-lg text-outline hover:text-on-surface transition-all">Scheduled</button>
              <button className="px-5 py-2 text-sm font-semibold rounded-lg text-outline hover:text-on-surface transition-all">Archived</button>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface border border-outline-variant/20 hover:bg-surface-container transition-all">
                <div className="flex items-center gap-2">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 cursor-pointer"
                  >
                    <option>All Statuses</option>
                    <option>Paid</option>
                    <option>Overdue</option>
                    <option>Unpaid</option>
                    <option>Draft</option>

                  </select>  
                </div>
              </button>
            </div>
            <div className="relative flex-1 sm:flex-none">
                  <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface border border-outline-variant/20 hover:bg-surface-container transition-all">
                <div className="flex items-center gap-2">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 cursor-pointer"
                  >{["Date Range", "7 Days", "30 Days", "90 Days", "Custom"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                  </select>  
                </div>
              </button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center bg-surface-container-low rounded-xl border border-outline-variant/20 hover:bg-surface-container transition-all text-secondary">
              <FileDown size={20} />
            </button>
            <Link 
              href="/dashboard/admin/invoices/add"
              className="lg:hidden w-full flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/10 hover:bg-primary-container transition-all"
            >
              <Plus size={18} />
              New Invoice
            </Link>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto m">
          <table className="w-full text-left border-collapse min-w-[900px] min-h-[300px]">
            <thead>
              <tr className="bg-surface-container-low/30">
              {["Invoice ID", "Customer Name", "Issue Date", "Total Amount", "Status", "Actions"]
              .map((header, index) => (
                <th key={index} className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-outline">{header}</th>
              ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {invoices.filter((inv) => inv.status === statusFilter || statusFilter === "All Statuses")
              .map((inv, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                  <td className="px-8 py-6 font-bold text-primary text-sm tracking-tight">#{inv.id}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center font-black text-xs text-primary shadow-sm border border-outline-variant/10">
                        {inv.initials}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-on-surface">{inv.customer}</p>
                        <p className="text-[10px] text-outline font-bold uppercase tracking-widest opacity-70">{inv.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-sm font-semibold text-on-surface opacity-80">{inv.date}</td>
                  <td className="px-8 py-6 text-sm font-black text-on-surface text-right tracking-tight">${inv.amount}</td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border border-black/5 ${inv.statusClass}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-center">
                    <Link href={`/dashboard/admin/invoices/${inv.id}`} className="p-2 rounded-xl text-outline hover:bg-surface-container hover:text-on-surface transition-all">
                      <Eye size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  )
}

export default TabledInvoices