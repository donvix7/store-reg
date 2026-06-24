'use client';

import React, { useEffect, useState } from 'react';
import { Menu, Search, Scan, Package, CreditCard, DollarSign, Info, Plus } from 'lucide-react';

const MobileRecordSale = ({ products }) => {

  const defaultCustomer = {
    name: "unknown",
    phone: "unknown",
    address: "unknown",
    city: "unknown",
    country: "unknown"
  }
  const [customer, setCustomer] = useState(defaultCustomer);
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    console.log(customer);
    console.log(paymentMethod);
  }, [customer, paymentMethod]);
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* TopAppBar - Focus Mode Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 text-on-surface">
            <Menu size={24} />
          </button>
          <h1 className="font-headline font-bold text-on-surface">Inventory</h1>
        </div>
        <button className="p-2 text-on-surface">
          <Search size={24} />
        </button>
      </header>

      {/* Main Content: Record Sale (Linear Process Flow) */}
      <main className="grow px-6 pt-4 pb-32">
        <div className="mb-8">
          <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">Record Sale</h2>
          <p className="text-on-surface-variant font-body text-sm mt-1">Transaction #SALE-92841</p>
        </div>
        
        <form className="space-y-8">
          {/* Item Selection Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-lg font-semibold text-on-surface">Product Details</h3>
              <span className="text-primary font-body text-xs font-bold px-2 py-1 bg-primary-fixed rounded-full uppercase tracking-tighter">Step 1</span>
            </div>
            <div className="bg-surface-container-low p-5 rounded-2xl space-y-5 border border-outline-variant/10">
              {/* Searchable Item Selection */}
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest opacity-70">Search Item</label>
                  <button className="flex items-center gap-1.5 px-3 py-1 bg-primary text-on-primary rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md shadow-primary/20 active:scale-95 transition-all">
                    <Scan size={14} />
                    Scan
                  </button>
                </div>
                <div className="relative group">
                  <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
                  <input 
                    className="w-full bg-surface-container-highest/50 border-none rounded-xl py-4 pl-12 pr-4 text-on-surface focus:bg-white focus:ring-2 focus:ring-primary transition-all font-bold placeholder:font-medium placeholder:text-outline/50" 
                    placeholder="SKU or Name..." 
                    type="text" 
                    defaultValue="Premium Oak Table"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-widest opacity-70">Quantity</label>
                  <input 
                    className="w-full bg-surface-container-highest/50 border-none rounded-xl py-4 px-4 text-on-surface focus:bg-white focus:ring-2 focus:ring-primary transition-all font-bold" 
                    type="number" 
                    defaultValue="1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-widest opacity-70">Unit Price</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-on-surface-variant opacity-60">$</span>
                    <input 
                      className="w-full bg-surface-container-highest/30 border-none rounded-xl py-4 pl-8 pr-4 text-on-surface font-black cursor-not-allowed opacity-80" 
                      readOnly 
                      type="text" 
                      defaultValue="450.00"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer & Payment Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-lg font-semibold text-on-surface">Transaction Info</h3>
              <span className="text-primary font-body text-xs font-bold px-2 py-1 bg-primary-fixed rounded-full uppercase tracking-tighter">Step 2</span>
            </div>
            <div className="bg-surface-container-low p-5 rounded-2xl space-y-5 border border-outline-variant/10">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-widest opacity-70">Customer Name</label>
                <input 
                  className="w-full bg-surface-container-highest/50 border-none rounded-xl py-4 px-4 text-on-surface focus:bg-white focus:ring-2 focus:ring-primary transition-all font-bold placeholder:font-medium placeholder:text-outline/50" 
                  placeholder="Guest Customer" 
                  type="text" 
                  value={customer.name}
                  onChange={(e) => setCustomer({...customer, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-widest opacity-70">Payment Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className={`relative flex items-center justify-center p-4 rounded-xl bg-surface-container-lowest cursor-pointer group shadow-sm ${paymentMethod === "card" ? "border-2 border-primary" : ""}`}>
                    <input 
                      className="sr-only" 
                      name="payment" 
                      type="radio" 
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <CreditCard className="text-primary" size={24} />
                      <span className="font-bold text-[10px] tracking-widest text-primary uppercase">Card</span>
                    </div>
                  </label>
                  <label className={`relative flex items-center justify-center p-4 rounded-xl bg-surface-container-lowest cursor-pointer group shadow-sm ${paymentMethod === "cash" ? "border-2 border-primary" : ""}`}>
                    <input 
                      className="sr-only" 
                      name="payment" 
                      type="radio" 
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <DollarSign className="text-outline" size={24} />
                      <span className="font-bold text-[10px] tracking-widest text-outline uppercase">Cash</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Summary Bento Card */}
          <section className="bg-primary text-on-primary p-6 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-on-primary/60 font-bold text-[10px] uppercase tracking-widest mb-1">Total Amount</p>
                  <h4 className="font-headline text-4xl font-black tracking-tighter">$450.00</h4>
                </div>
                <div className="text-right">
                  <p className="text-on-primary/60 font-bold text-[10px] uppercase tracking-widest mb-1">Tax (0%)</p>
                  <p className="font-bold text-sm">$0.00</p>
                </div>
              </div>
              <div className="pt-4 border-t border-on-primary/10 flex items-center gap-3">
                <Info className="text-primary-fixed-dim" size={16} fill="currentColor" />
                <p className="text-[10px] font-bold text-on-primary/80 leading-relaxed uppercase tracking-wider">Inventory will be automatically updated.</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </section>
        </form>
      </main>

      {/* Bottom Action Bar (Fixed Replacement for BottomNavBar in Focus Mode) */}
      <div className="fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/15 p-6 flex gap-4 z-40">
        <button className="flex-1 bg-surface-container text-on-surface-variant font-bold py-4 rounded-2xl hover:bg-surface-container-high transition-colors text-sm uppercase tracking-widest shadow-sm">
          Cancel
        </button>
        {/* FAB Component Rendered as Primary CTA */}
        <button className="flex-2 bg-primary text-on-primary font-black py-4 rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:bg-primary-container active:scale-95 transition-all text-sm uppercase tracking-widest">
          <Plus size={20} />
          Record Sale
        </button>
      </div>
    </div>
  );
};

export default MobileRecordSale;
