"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FileDown, Plus, Eye, ChevronLeft, ChevronRight } from 'lucide-react'

const TabledInvoices = ({invoices}) => {
    const [statusFilter, setStatusFilter] = useState("All Invoices")
  return (
    <div>
        {/* Filters & Table Section */}
      <div className="bg-surface-container-lowest rounded-2xl border-2 border-slate-300 overflow-hidden ">
        {/* Table Controls */}
        <div className="p-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-300">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar w-full lg:w-auto">
            <div className="flex bg-surface-container p-2 rounded-2xl whitespace-nowrap">
              {["All Invoices", "Scheduled", "Archived"].map((item, index) => (
                <button key={index}
                onClick={()=> setStatusFilter(item)}
                className={`px-4 py-2 text-sm font-semibold rounded-2xl text-outline transition-all ${statusFilter === item ? "bg-surface-container-lowest shadow-sm text-primary" : ""}`}>{item}</button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap lg:justify-center items-center gap-4 w-full lg:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <button className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface border border-outline-variant/20 hover:bg-surface-container transition-all">
                <div className="flex items-center gap-2">
                  <select 
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-transparent border-none text-sm font-semibold text-on-surface focus:ring-0 cursor-pointer"
                  >
                    {["ALL", "Paid", "Overdue", "Unpaid", "Draft"].map((item, index) => (
                      <option key={index}>{item}</option>
                    ))}

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
                <th key={index} className="p-4 text-[10px] font-black uppercase tracking-widest text-outline">{header}</th>
              ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {invoices.filter((inv) => inv.status === statusFilter || statusFilter === "All Invoices")
              .map((inv, idx) => (
                invoices.length === 0 ? (
                  <tr key={idx} className=" ">
                  <td className="p-4 font-bold text-primary text-sm tracking-tight">#{inv.id}</td>
                  <td className="p-4">
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
                  <td className="p-4 text-sm font-semibold text-on-surface opacity-80">{inv.date}</td>
                  <td className="p-4 text-sm font-black text-on-surface text-right tracking-tight">${inv.amount}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm border border-black/5 ${inv.statusClass}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Link href={`/dashboard/admin/invoices/${inv.id}`} className="p-2 rounded-xl text-outline hover:bg-surface-container hover:text-on-surface transition-all">
                      <Eye size={20} />
                    </Link>
                  </td>
                </tr>
                ) : (
                  <tr key={idx} className="">
                    <td colSpan={6} className="p-4 text-center text-sm font-semibold text-outline opacity-80">
                      No {statusFilter} found
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>

        
      </div>
    </div>
  )
}

export default TabledInvoices