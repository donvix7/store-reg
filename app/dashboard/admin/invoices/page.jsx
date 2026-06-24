
"use client"
import React from 'react';
import { Wallet, AlertTriangle, Clock } from 'lucide-react';
import TabledInvoices from '@/components/TabledInvoices';
import { useEffect, useState } from 'react';
import { getInvoices } from '@/lib/service';

export default function InvoicesPage() {

  const [invoices, setInvoices] = useState([])

  const loadInvoices = async() => {
    const res = await getInvoices()
    console.log(res)
    setInvoices(res)
  }

  useEffect(() => {
    loadInvoices()
  }, [])

  const totalOutstanding = invoices.filter(invoice => invoice.status === 'Unpaid').reduce((sum, inv) => sum + inv.items.price, 0);

  const totalOverdue = invoices.filter(invoice => invoice.status === 'Overdue').reduce((sum, inv) => sum + inv.items.price, 0);

  const totalPaid = invoices.filter(invoice => invoice.status === 'Paid').reduce((sum, inv) => sum + inv.amount, 0);

  const totalDrafts = invoices.filter((inv) => inv.status === 'Draft').length;
              
  return (
    <div className="p-4 sm:p-10 font-body transition-all duration-300">
      {/* Quick Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10 text-on-surface">
        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Wallet size={24} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-full">+12.5%</span>
          </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Total Outstanding</p>
            <h3 className="font-headline font-bold text-3xl">${totalOutstanding}</h3>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
              <AlertTriangle size={24} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold text-error bg-error/5 px-2.5 py-1 rounded-full">3 Overdue</span>
          </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Overdue Amount</p>
            <h3 className="font-headline font-bold text-3xl">${totalOverdue}</h3>
          </div>
        </div>

        <div className="col-span-1 md:col-span-4 bg-surface-container-lowest p-6 rounded-3xl shadow-sm flex flex-col justify-between border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-secondary-fixed/50 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Clock size={24} fill="currentColor" />
            </div>
            <span className="text-[11px] font-bold text-secondary bg-secondary/5 px-2.5 py-1 rounded-full">Avg. 4 Days</span>
          </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Pending Drafts</p>
            <h3 className="font-headline font-bold text-3xl">{totalDrafts} Invoices</h3>
          </div>
        </div>
      </div>

      <TabledInvoices invoices={invoices}/>

      {/* Footer Meta */}
      
    </div>
  );
}