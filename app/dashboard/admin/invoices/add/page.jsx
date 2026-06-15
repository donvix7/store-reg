'use client';

import React from 'react';
import { Printer, Download, Share2, Trash2, Save, Pencil, PlusCircle, X, Plus, Info } from 'lucide-react';

export default function AddInvoicePage() {
  return (
    <div className="flex-1 flex flex-col font-body bg-surface min-h-full">
      {/* ToolBar (Action Bar) */}
      <div className="px-8 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between border-b border-outline-variant/10 gap-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-xl transition-colors text-sm font-semibold whitespace-nowrap">
            <Printer className="text-primary" size={18} />
            Print
          </button>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-xl transition-colors text-sm font-semibold whitespace-nowrap">
            <Download className="text-primary" size={18} />
            Download
          </button>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-surface-container rounded-xl transition-colors text-sm font-semibold whitespace-nowrap">
            <Share2 className="text-primary" size={18} />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 hover:bg-error-container text-error rounded-xl transition-colors text-sm font-semibold whitespace-nowrap">
            <Trash2 size={18} />
            Discard
          </button>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-primary/5 transition-colors border border-primary/20">
            Preview
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
            <Save size={14} fill="currentColor" />
            Save Draft
          </button>
        </div>
      </div>

      <main className="p-4 sm:p-8 w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Sidebar: Client & Invoice Info */}
          <aside className="lg:col-span-4 space-y-6 sm:space-y-8">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/20 shadow-sm">
              <h2 className="font-headline text-2xl font-bold mb-8 text-on-surface">Invoice Details</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">Invoice Number</label>
                  <input 
                    className="w-full bg-surface-container-highest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 font-bold text-on-surface" 
                    type="text" 
                    defaultValue="INV-2024-001"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">Issue Date</label>
                    <input 
                      className="w-full bg-surface-container-highest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium" 
                      type="date" 
                      defaultValue="2024-05-20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-outline px-1">Due Date</label>
                    <input 
                      className="w-full bg-surface-container-highest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium" 
                      type="date" 
                      defaultValue="2024-06-20"
                    />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-outline-variant/10">
                  <label className="text-xs font-bold uppercase tracking-wider text-outline mb-4 block px-1">Client Information</label>
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4 mb-4">
                    <div className="bg-primary text-on-primary h-10 w-10 rounded-xl flex items-center justify-center font-bold shrink-0">AS</div>
                    <div className="min-w-0">
                      <p className="font-bold text-on-surface truncate">Aether Systems Inc.</p>
                      <p className="text-xs text-on-surface-variant truncate">billing@aethersys.com</p>
                    </div>
                    <button className="ml-auto text-primary hover:bg-primary/10 p-1.5 rounded-lg shrink-0">
                      <Pencil size={20} />
                    </button>
                  </div>
                  <button className="w-full py-3 rounded-xl border-2 border-dashed border-outline-variant hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-center gap-2 text-sm font-semibold text-outline hover:text-primary">
                    <PlusCircle size={18} />
                    Change Client
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/20 shadow-sm">
              <h3 className="font-headline text-lg font-bold mb-4 text-on-surface">Notes & Terms</h3>
              <textarea 
                className="w-full bg-surface-container-highest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm resize-none font-medium h-32" 
                placeholder="Additional instructions or payment terms..."
              ></textarea>
            </div>
          </aside>

          {/* Center/Right: Line Items Table */}
          <section className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/20 shadow-sm overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container-lowest/50 backdrop-blur-md sticky top-0 z-10">
                <h2 className="font-headline text-2xl font-bold text-on-surface">Line Items</h2>
                <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">3 items added</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-surface-container-low/50">
                      <th className="py-4 text-xs font-bold uppercase tracking-wider text-outline px-8">Item & Description</th>
                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-outline text-right w-24">Qty</th>
                      <th className="px-4 py-4 text-xs font-bold uppercase tracking-wider text-outline text-right w-32">Unit Price</th>
                      <th className="px-8 py-4 text-xs font-bold uppercase tracking-wider text-outline text-right w-32">Total</th>
                      <th className="px-4 py-4 w-12"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    {/* Row 1 */}
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="px-8 py-6">
                        <div className="space-y-1">
                          <input 
                            className="w-full bg-transparent border-none font-bold p-0 focus:ring-0 text-on-surface placeholder:text-outline/30" 
                            type="text" 
                            defaultValue="Structural Design Module"
                          />
                          <input 
                            className="w-full bg-transparent border-none text-xs p-0 focus:ring-0 text-outline placeholder:text-outline/30" 
                            type="text" 
                            defaultValue="Standard architectural compliance review"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-6 text-right">
                        <input className="w-16 bg-surface-container-highest border-none rounded-lg text-sm font-bold text-right px-2 py-1.5 focus:ring-2 focus:ring-primary/20" type="number" defaultValue="1" />
                      </td>
                      <td className="px-4 py-6 text-right">
                        <div className="relative inline-block">
                          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-outline">$</span>
                          <input className="w-24 bg-surface-container-highest border-none rounded-lg text-sm font-bold text-right pl-5 pr-2 py-1.5 focus:ring-2 focus:ring-primary/20" type="text" defaultValue="1,250.00" />
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right font-extrabold text-on-surface items-center">$1,250.00</td>
                      <td className="px-4 py-6">
                        <button className="text-outline hover:text-error transition-all p-1 rounded-lg hover:bg-error/10">
                          <X size={18} />
                        </button>
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="group hover:bg-surface-container-low transition-colors">
                      <td className="px-8 py-6">
                        <div className="space-y-1">
                          <input 
                            className="w-full bg-transparent border-none font-bold p-0 focus:ring-0 text-on-surface placeholder:text-outline/30" 
                            type="text" 
                            defaultValue="Cloud Rendering (100h)"
                          />
                          <input 
                            className="w-full bg-transparent border-none text-xs p-0 focus:ring-0 text-outline placeholder:text-outline/30" 
                            type="text" 
                            defaultValue="High-fidelity visual output processing"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-6 text-right">
                        <input className="w-16 bg-surface-container-highest border-none rounded-lg text-sm font-bold text-right px-2 py-1.5 focus:ring-2 focus:ring-primary/20" type="number" defaultValue="2" />
                      </td>
                      <td className="px-4 py-6 text-right">
                        <div className="relative inline-block">
                          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-outline">$</span>
                          <input className="w-24 bg-surface-container-highest border-none rounded-lg text-sm font-bold text-right pl-5 pr-2 py-1.5 focus:ring-2 focus:ring-primary/20" type="text" defaultValue="450.00" />
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right font-extrabold text-on-surface">$900.00</td>
                      <td className="px-4 py-6">
                        <button className="text-outline hover:text-error transition-all p-1 rounded-lg hover:bg-error/10">
                          <X size={18} />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-6 bg-surface-container-low/30 border-t border-outline-variant/5">
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 text-primary font-bold text-sm hover:bg-primary/5 hover:border-primary transition-all shadow-sm active:scale-95">
                  <Plus size={18} />
                  Add New Line Item
                </button>
              </div>
            </div>

            {/* Totals Section */}
            <div className="flex flex-col items-end">
              <div className="w-full max-w-md bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/20 shadow-sm space-y-5">
                <div className="flex justify-between items-center text-on-surface-variant font-medium text-sm">
                  <span className="font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="text-on-surface font-black">$3,150.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-bold uppercase tracking-widest text-[10px] text-on-surface-variant">Tax (8%)</span>
                    <button className="text-outline hover:text-primary transition-colors"><Info size={16} /></button>
                  </div>
                  <span className="text-on-surface font-black">$252.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold uppercase tracking-widest text-[10px] text-on-surface-variant">Shipping</span>
                  <div className="flex items-center gap-2 border-b border-outline-variant/50 pb-0.5">
                    <span className="text-on-surface font-black">$45.00</span>
                    <Pencil className="text-outline cursor-pointer hover:text-primary transition-colors" size={16} />
                  </div>
                </div>
                <div className="pt-6 mt-2 border-t border-outline-variant/20">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-outline mb-1">Total Amount Due</p>
                      <p className="font-headline text-4xl sm:text-5xl font-black text-primary tracking-tighter">$3,447.00</p>
                    </div>
                    <div className="bg-tertiary-fixed px-4 py-1.5 rounded-full flex items-center gap-2 mb-2 shadow-sm">
                      <div className="h-2.5 w-2.5 rounded-full bg-tertiary animate-pulse"></div>
                      <span className="text-[10px] font-black text-on-tertiary-fixed uppercase tracking-wider">Unpaid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Branding Footer */}
      <footer className="mt-auto px-8 py-10 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between text-outline text-[10px] font-black uppercase tracking-widest gap-6 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <p className="opacity-60">© 2024 Equilibrium Inventory Management</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors cursor-pointer">Support</a>
            <a className="hover:text-primary transition-colors cursor-pointer">Audit Log</a>
            <a className="hover:text-primary transition-colors cursor-pointer">Policy</a>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-surface-container py-2 px-4 rounded-full border border-outline-variant/20 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-sm shadow-primary/50"></span>
          <span className="text-primary font-black">System Operational</span>
        </div>
      </footer>
    </div>
  );
}