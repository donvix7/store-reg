"use client"
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Printer, Download, Send, Factory, UserCheck, ShieldCheck, DollarSign } from 'lucide-react';

const InvoiceDetailView = ({ invoice }) => {
  if (!invoice) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Overdue':
        return 'bg-error-container text-error border-error/20';
      case 'Unpaid':
        return 'bg-secondary-fixed text-on-secondary-fixed-variant border-secondary/20';
      case 'Draft':
        return 'bg-surface-container-high text-outline border-outline/10';
      default:
        return 'bg-surface-container text-on-surface-variant border-outline/10';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Action Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/10">
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard/admin/invoices"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface-variant"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-xl font-headline font-extrabold flex items-center gap-2">
              Invoice <span className="text-primary">#{invoice.id}</span>
            </h1>
            <p className="text-xs text-outline font-medium tracking-tight uppercase">Issued on {invoice.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors font-bold text-sm flex items-center justify-center gap-2 text-on-surface-variant">
            <Printer size={18} /> Print
          </button>
          <button className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors font-bold text-sm flex items-center justify-center gap-2 text-on-surface-variant">
            <Download size={18} /> PDF
          </button>
          <button className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 transition-opacity font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/10">
            <Send size={18} /> Send Invoice
          </button>
        </div>
      </div>

      {/* Main Invoice Card */}
      <div className="bg-surface-container-lowest rounded-3xl shadow-xl shadow-black/5 overflow-hidden border border-outline-variant/10">
        {/* Decorative Header Bar */}
        <div className="h-2"></div>
        
        <div className="p-8 sm:p-12">
          {/* Company Branding & Meta */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 sm:mb-16">
            <div className="space-y-4 w-full md:w-auto">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary rounded-2xl flex items-center justify-center text-on-primary">
                <Factory className="text-on-primary" size={32} fill="currentColor" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-headline font-black tracking-tight">Precision Atelier</h2>
                <p className="text-xs sm:text-sm text-outline leading-relaxed max-w-[200px]">
                  123 Industrial Parkway<br />
                  Logistics District<br />
                  Chicago, IL 60601
                </p>
              </div>
            </div>
            <div className="text-left md:text-right space-y-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant/10">
              <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border ${getStatusStyles(invoice.status)}`}>
                <span className="w-1.5 h-1.5 rounded-full mr-2 bg-current animate-pulse"></span>
                {invoice.status}
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-outline uppercase tracking-widest">Amount Due</p>
                <p className="text-3xl sm:text-4xl font-headline font-black text-on-surface">{formatCurrency(invoice.amount)}</p>
              </div>
            </div>
          </div>

          <hr className="border-outline-variant/10 mb-8 sm:mb-12" />

          {/* Bill To / Ship To Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="space-y-4">
              <h3 className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.2em]">Billed To</h3>
              <div className="bg-surface-container-low p-5 sm:p-6 rounded-2xl border border-outline-variant/5">
                <h4 className="font-bold text-base sm:text-lg mb-2">{invoice.billTo?.name}</h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {invoice.billTo?.address}<br />
                  {invoice.billTo?.city}, {invoice.billTo?.country}<br />
                  <span className="text-outline mt-2 block font-medium">{invoice.billTo?.phone}</span>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] sm:text-xs font-black text-outline uppercase tracking-[0.2em]">Invoice Details</h3>
              <div className="grid grid-cols-2 gap-y-6 bg-surface-container-low/30 p-5 sm:p-0 rounded-2xl sm:rounded-none">
                <div>
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">Issue Date</p>
                  <p className="text-xs sm:text-sm font-bold">{invoice.date}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">Due Date</p>
                  <p className="text-xs sm:text-sm font-bold text-secondary">Nov 15, 2023</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">Payment Method</p>
                  <p className="text-xs sm:text-sm font-bold">ACH Transfer</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest mb-1">Reference</p>
                  <p className="text-xs sm:text-sm font-bold">PO-982103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Line Items - Mobile Card View */}
          <div className="sm:hidden space-y-4 mb-8">
            <h3 className="text-[10px] font-black text-outline uppercase tracking-[0.2em] mb-4">Line Items</h3>
            {invoice.items?.map((item, index) => (
              <div key={index} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-on-surface">{item.description}</p>
                    <p className="text-[10px] text-outline">Ref #10{index + 1}</p>
                  </div>
                  <p className="font-black text-on-surface">{formatCurrency(item.total)}</p>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-outline-variant/5 text-[10px] font-bold text-outline uppercase tracking-wider">
                  <span>{item.qty} Unit(s)</span>
                  <span>{formatCurrency(item.price)} / unit</span>
                </div>
              </div>
            ))}
          </div>

          {/* Line Items - Desktop Table View */}
          <div className="hidden sm:block bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/5 mb-12">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-high/50 text-[10px] font-black text-outline uppercase tracking-[0.15em]">
                  <th className="px-8 py-5">Item Description</th>
                  <th className="px-6 py-5 text-center">Qty</th>
                  <th className="px-6 py-5 text-right">Price</th>
                  <th className="px-8 py-5 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {invoice.items?.map((item, index) => (
                  <tr key={index} className="text-sm group hover:bg-surface-container-high transition-colors">
                    <td className="px-8 py-6 font-bold text-on-surface">
                      {item.description}
                      <p className="text-[10px] font-medium text-outline mt-1 group-hover:text-primary transition-colors">Service Reference #{index + 101}</p>
                    </td>
                    <td className="px-6 py-6 text-center font-medium bg-surface-container-lowest/30">{item.qty}</td>
                    <td className="px-6 py-6 text-right font-medium text-outline">{formatCurrency(item.price)}</td>
                    <td className="px-8 py-6 text-right font-black text-on-surface">{formatCurrency(item.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals Section */}
          <div className="flex justify-end pr-0 sm:pr-4">
            <div className="w-full sm:w-80 space-y-4">
              <div className="flex justify-between text-sm py-2 px-4">
                <span className="text-outline font-medium uppercase tracking-widest text-[10px] sm:text-xs">Subtotal</span>
                <span className="font-bold">{formatCurrency(invoice.amount * 0.9)}</span>
              </div>
              <div className="flex justify-between text-sm py-2 px-4">
                <span className="text-outline font-medium uppercase tracking-widest text-[10px] sm:text-xs">Tax (10%)</span>
                <span className="font-bold">{formatCurrency(invoice.amount * 0.1)}</span>
              </div>
              <div className="flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 bg-primary text-on-primary rounded-2xl shadow-xl shadow-primary/10 transition-transform hover:scale-[1.02] cursor-default">
                <span className="font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs">Amount Due</span>
                <span className="text-xl sm:text-2xl font-headline font-black">{formatCurrency(invoice.amount)}</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-outline-variant/10 text-center space-y-2">
            <p className="text-sm font-bold text-on-surface">Thank you for your business!</p>
            <p className="text-[10px] sm:text-xs text-outline leading-relaxed max-w-lg mx-auto px-4">
              Please include the Invoice ID #{invoice.id} in your payment reference. Payment is due within 30 days of issuance.
            </p>
            <div className="flex items-center justify-center gap-6 pt-6 grayscale opacity-40">
              <UserCheck size={28} />
              <ShieldCheck size={28} />
              <DollarSign size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailView;
