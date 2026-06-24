import { ArrowRight, FileDown, MailQuestionMark, Plus } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const InvoiceCard = ({invoices}) => {
    const [statusFilter, setStatusFilter] = useState("All Statuses")

    return (
        <div>
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
                    {["All Statuses", "Paid", "Overdue", "Unpaid", "Draft"].map((status) => (
                      <option 
                      key={status}>{status}</option>
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
            {invoices.filter((inv) => inv.status === statusFilter || statusFilter === "All Statuses")
              .map((invoice, idx) => (
                <div key={invoice.id} className="bg-surface-container-lowest p-6 rounded shadow-sm flex flex-col justify-between border border-outline-variant/10 group hover:shadow-md transition-all">
                <div className="     rounded flex flex-col gap-2 p-4 py-4  transition-transform">
                    <h2 className=" font-display font-bold tracking-tight text-on-surface">Customer: {invoice.customer}</h2>
                    <p className="text-sm font-medium text-outline tracking-wider mt-1">Email: {invoice.email}</p>
                    <p className="text-sm font-medium text-outline tracking-wider mt-1">Status: {invoice.status}</p>
                    <p className="text-sm font-medium text-outline tracking-wider mt-1">Amount: {invoice.amount}</p>
                </div>
                <Link
                    href={`/dashboard/admin/invoices/${invoice.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-primary font-bold hover:text-primary-container transition-colors group/btn"
                >
                    <span>View Invoice</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                </div>
            ))}
        </div>
    )
}
export default InvoiceCard