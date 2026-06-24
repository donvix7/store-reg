
"use client"
import React from 'react';
import { Wallet, AlertTriangle, Clock, MailQuestionMark } from 'lucide-react';
import TabledInvoices from '@/components/TabledInvoices';
import { useEffect, useState } from 'react';
import { getInvoices } from '@/lib/service';
import InvoiceCard from '@/components/InvoiceCard';

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
    <div className="p-4 sm:p-10 flex flex-col gap-6 font-body transition-all duration-300">
      <section className='flex flex-col gap-2'>
        <h2 className="text-2xl font-extrabold text-on-surface tracking-tight">Sales Analytics</h2>
        <p className="text-on-surface-variant ">Track your sales, invoices, and revenue.</p>
      </section>
      {/* Quick Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-on-surface">
       
        <div className="grid col-span-12 grid-cols-1 sm:grid-cols-12">
          <div className="col-span-12 md:col-span-3 bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex gap-4  border border-outline-variant/10 group hover:shadow-md transition-all">
         
           <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Wallet size={24} fill="currentColor" />
            </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Total Sales</p>
            <h3 className="font-headline font-bold text-lg">${totalPaid}</h3>
          </div>
          </div>
          <div className="col-span-3 bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex gap-4 border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start ">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <MailQuestionMark size={24} fill="currentColor" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Total Outstanding</p>
            <h3 className="font-headline font-bold text-lg">${totalOutstanding}</h3>
          </div>
        </div>

        <div className="col-span-3 bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex gap-4 border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start ">
            <div className="w-12 h-12 bg-tertiary-fixed/30 rounded-2xl flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform">
              <AlertTriangle size={24} fill="currentColor" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-outline mb-1">Overdue Amount</p>
            <h3 className="font-headline font-bold text-lg">${totalOverdue}</h3>
          </div>
        </div>

        <div className="col-span-3 bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex gap-4 border border-outline-variant/10 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start ">
            <div className="w-12 h-12 bg-secondary-fixed/50 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
              <Clock size={24} fill="currentColor" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-outline ">Pending Drafts</p>
            <h3 className="font-headline font-bold text-lg">{totalDrafts} Invoices</h3>
          </div>
        </div>
        </div>
      </div>


      <div className='hidden sm:block'>
      <TabledInvoices invoices={invoices}/>
      </div>

      <div className='sm:hidden'>

        <InvoiceCard invoices={invoices}/>
      </div>



      {/* Footer Meta */}
      
    </div>
  );
}