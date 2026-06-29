"use client";
import { Search, SlidersHorizontal, Calendar, User } from 'lucide-react';
import React, { useState } from 'react'

const MobileHistory = ({ history }) => {
  const [filter, setFilter] = useState("All Actions");

  const filterHistory = (item) => {
    if (filter === "All Actions") return true;
    if (filter === "Stock In") return item.quantity.startsWith("+");
    if (filter === "Stock Out") return item.quantity.startsWith("-");
    if (filter === "Price Change") return item.type.toLowerCase().includes("price");
    return true;
  };

  return (
    <div className="relative">
      {/* Mobile Search and Filter Chips */}
      <section className="lg:hidden space-y-4 mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-outline" size={20} />
          </div>
          <input
            className="w-full h-12 bg-surface-container-highest border-none rounded-xl pl-12 pr-4 text-on-surface placeholder-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body"
            placeholder="Search activities or items..."
            type="text"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {["All Actions", "Stock In", "Stock Out", "Price Change"].map((action, index) => (
            <button
              key={index}
              onClick={() => setFilter(action)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                filter === action ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {action === "All Actions" && <SlidersHorizontal size={14} />}
              {action}
            </button>
          ))}
        </div>
      </section>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-outline-variant/30"></div>
        <div className="space-y-10">
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-full ring-4 ring-background">
              <Calendar className="text-primary" size={20} />
            </div>
            <span className="font-headline font-bold text-sm tracking-widest text-outline uppercase">Today — Oct 22</span>
          </div>

          {history ? history?.filter(filterHistory).map((item, index) => (
            <div key={index} className="relative flex gap-4">
              <div className="relative z-10 shrink-0 w-4 flex justify-center">
                <div className={`w-3 h-3 rounded-full mt-5 ring-4 ring-background ${item.quantity.startsWith('+') ? 'bg-primary' : 'bg-error'}`}></div>
              </div>
              <div className="grow bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-headline font-bold text-base text-on-surface">{item.product}</h3>
                    <p className="text-xs font-label text-outline mt-0.5">SKU: {item.sku}</p>
                  </div>
                  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${item.quantity.startsWith('+') ? 'bg-primary-fixed text-on-primary-fixed-variant' : 'bg-error-container text-on-error-container'}`}>
                    {item.type}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 py-3 border-t border-outline-variant/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center">
                      <User className="text-primary" size={14} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-on-surface">{item.user}</span>
                      <span className="text-[10px] text-outline">Warehouse Staff</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`font-headline font-bold text-lg ${item.quantity.startsWith('+') ? 'text-primary' : 'text-error'}`}>{item.quantity}</span>
                    <p className="text-[10px] text-outline">{item.time}</p>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-4">
              <History size={100}/>
              <p className="text-sm text-outline">No history found</p>
            </div>
          )}
        </div>
      </div>
      {/* Load More CTA - Mobile only */}
      <div className="lg:hidden flex justify-center mt-8">
        <button className="px-6 py-3 bg-surface-container-low text-primary font-headline font-bold text-sm rounded-xl border border-outline-variant/20">
          View Older History
        </button>
      </div>
    </div>
  );
};

export default MobileHistory;