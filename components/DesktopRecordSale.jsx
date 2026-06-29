'use client';

import React, { useEffect, useState } from 'react';
import { Filter, Scan, User, Search, ShoppingCart, Minus, Plus, Trash2, Receipt, DollarSign, Check } from 'lucide-react';

const DesktopRecordSale = ({products}) => {

  const defaultCustomer = {
    name: "unknown",
    phone: "unknown",
    address: "unknown",
    city: "unknown",
    country: "unknown"
  }
  const [customer, setCustomer] = useState(defaultCustomer);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [checkoutItems, setCheckoutItems] = useState([]);

  const addProductToCart = (product) => {
    setCheckoutItems(prev => {
      // Check if product already exists to increment quantity
      const existing = prev.find(item => item.sku === product.sku);
      if (existing) {
        return prev.map(item => 
          item.sku === product.sku ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  const subtotal = checkoutItems.reduce((acc, item) => acc + (parseFloat(item.price) * (item.quantity || 1)), 0);
  const discount = subtotal * 0.05;
  const tax = (subtotal - discount) * 0.085;
  const total = subtotal - discount + tax;
  return (
    <div className="">
      <div className="grid lg:grid-cols-12 gap-4">
        
        {/* Left: Item Selection (Precision Atelier Style) */}
        <div className=" col-span-12 lg:col-span-8">
          <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-sm border border-outline-variant/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Item Selection</h3>
                <p className="text-sm text-outline mt-1">Add products to current transaction</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-low text-primary rounded-xl text-xs font-bold flex items-center gap-2 border border-outline-variant/20 hover:bg-surface-container transition-all">
                  <Filter size={16} />
                  Filter
                </button>
                <button className="px-4 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-container transition-all">
                  <Scan size={16} />
                  Scan
                </button>
              </div>
            </div>

            {/* Items Grid (Bento Style) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 -mr-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pb-4">
                {products?.map(product => (
                  <div 
                    key={product.sku} 
                    onClick={() => addProductToCart(product)}
                    className="bg-surface rounded-2xl p-4 border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer group shadow-sm hover:shadow-md"
                  >
                    <div className="w-full h-32 rounded-xl bg-surface-container-highest mb-4 overflow-hidden relative">
                      <img 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        src={product.src}
                      />
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-on-surface text-sm">{product.name}</h4>
                      <span className="text-[10px] font-mono text-outline uppercase font-black opacity-60">{product.sku}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-primary font-black text-lg tracking-tighter">${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}</p>
                      <span className="px-2 py-1 bg-surface-container-highest text-[10px] rounded-lg font-black text-outline uppercase tracking-wider">{product.stock?.current} Stock</span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Right: Sale Summary & Checkout */}
        <div className="col-span-4 flex flex-col gap-4">
          
          {/* Customer Details Card */}
          <div className="bg-surface-container-low rounded-2xl p-4 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-surface-container-lowest rounded-2xl flex items-center justify-center text-primary shadow-sm border border-outline-variant/10">
                <User size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-sm text-on-surface">Customer Details</h3>
                <p className="text-[10px] text-outline font-black uppercase tracking-widest opacity-70">Link sale to profile</p>
              </div>
              <button className="text-primary text-[10px] font-black uppercase tracking-widest hover:underline">New Client</button>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={18} />
              <input 
                className="w-full bg-surface-container-lowest border-none rounded-xl py-3 pl-11 pr-4 text-sm font-bold text-on-surface focus:ring-2 focus:ring-primary shadow-sm" 
                type="text" 
                defaultValue="Eleanor Vance"
              />
            </div>
            <div className="flex items-center gap-3 mt-4 px-1">
              <span className="px-2 py-1 bg-primary-fixed text-[10px] font-black text-on-primary-fixed rounded-lg uppercase tracking-wider border border-primary/10">VIP Member</span>
              <span className="text-[10px] text-outline font-bold opacity-80 uppercase tracking-tighter">5.0% Loyalty Applied</span>
            </div>
          </div>

          {/* Summary & Cart */}
          <div className="flex-1 bg-surface-container-lowest rounded-3xl p-6 sm:p-8 flex flex-col shadow-sm border border-outline-variant/10 overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-lg font-bold text-on-surface">Current Sale</h3>
              <span className="px-3 py-1 bg-surface-container text-outline font-black text-[10px] rounded-lg tracking-widest uppercase">{checkoutItems.length} Items</span>
            </div>

            {/* Cart List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 mb-6 -mr-2">
              <div className="space-y-6">
                {checkoutItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-40">
                    <ShoppingCart size={40} className="mb-2" />
                    <p className="text-xs font-bold uppercase tracking-widest">Cart is empty</p>
                  </div>
                ) : checkoutItems.map((item, idx) => (
                  <div key={item.sku + idx} className="flex items-center gap-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10 shadow-sm">
                      <img 
                        alt={item.name}
                        className="w-full h-full object-cover" 
                        src={item.src}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-bold text-on-surface line-clamp-1">{item.name}</p>
                        <p className="text-sm font-black text-on-surface">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-surface-container-low rounded-lg p-1 border border-outline-variant/20 shadow-sm">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCheckoutItems(prev => prev.map(i => i.sku === item.sku ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i).filter(i => i.quantity > 0));
                            }}
                            className="w-6 h-6 flex items-center justify-center text-outline hover:text-primary transition-colors hover:bg-white rounded-md"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-black min-w-[24px] text-center">{item.quantity}</span>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCheckoutItems(prev => prev.map(i => i.sku === item.sku ? { ...i, quantity: i.quantity + 1 } : i));
                            }}
                            className="w-6 h-6 flex items-center justify-center text-outline hover:text-primary transition-colors hover:bg-white rounded-md"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCheckoutItems(prev => prev.filter(i => i.sku !== item.sku));
                          }}
                          className="w-8 h-8 flex items-center justify-center text-error sm:opacity-0 group-hover:opacity-100 transition-all hover:bg-error-container/20 rounded-lg"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checkout Summary */}
            <div className="mt-auto pt-6 border-t-2 border-dashed border-outline-variant/30">
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-outline opacity-80">
                  <span>Subtotal</span>
                  <span className="text-on-surface">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-outline opacity-80">
                  <span>VIP Discount (5%)</span>
                  <span className="text-tertiary">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-outline opacity-80">
                  <span>Tax (8.5%)</span>
                  <span className="text-on-surface">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <span className="font-headline font-black text-lg text-on-surface uppercase tracking-tight">Total Due</span>
                  <span className="font-headline font-black text-4xl text-primary tracking-tighter">${total.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="py-4 bg-surface-container text-on-secondary-fixed-variant rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 border border-outline-variant/20 hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors">
                  <Receipt size={18} />
                  Save Quote
                </button>
                <button className="py-4 bg-primary text-on-primary rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all">
                  <DollarSign size={18} />
                  Finalize Sale
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scanner Feedback (UI Innovation Overlay) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 px-8 py-4 bg-inverse-surface/95 backdrop-blur-md rounded-full flex items-center gap-4 shadow-2xl border border-white/10 z-60 animate-bounce-subtle">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
          <Check size={14} />
        </div>
        <p className="text-inverse-on-surface text-sm font-bold tracking-tight">Sonic-X Studio added <span className="opacity-50 mx-1">|</span> SKU-4402</p>
        <button className="text-primary-fixed-dim text-xs font-black ml-4 uppercase tracking-widest hover:text-white transition-colors">Undo</button>
      </div>

      <style jsx>{`
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
      `}</style>
    </div>
  );
};

export default DesktopRecordSale;
