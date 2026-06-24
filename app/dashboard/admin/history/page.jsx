"use client"
import DesktopHistory from '@/components/DesktopHistory';
import MobileHistory from '@/components/MobileHistory';
import React, { useEffect, useState } from 'react';
import { FileDown, RefreshCw } from 'lucide-react';
import { getHistory } from '@/lib/service';

export default function HistoryPage() {
  const [history, setHistory] = useState([])

  const loadHistory = async () => {
    const history = await getHistory()
    console.log("history", history)
    setHistory(history)
  }
  useEffect(() => {
    loadHistory()
  }, [])


  return (
    <div className="p-4 space-y-8 font-body">
      {/* Header Section - Desktop only in this structure as layout has mobile header */}
      <header className="hidden lg:flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-2">Activity History</h1>
          <p className="text-on-surface-variant max-w-2xl">Audit trail and comprehensive logs for all inventory adjustments, stock movements, and SKU modifications within the Main Warehouse.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary-container text-on-secondary-fixed-variant rounded-xl font-semibold hover:opacity-90 transition-all">
            <FileDown size={18} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl font-semibold hover:shadow-xl hover:shadow-primary/20 transition-all">
            <RefreshCw size={18} />
            Refresh Data
          </button>
        </div>
      </header>

     

      {/* Desktop Table View */}
      <div className="hidden lg:block bg-surface-container-lowest rounded-3xl overflow-hidden  border border-outline-variant/10">
        <DesktopHistory history={history}/>
        
      </div>

      {/* Mobile Timeline View */}
      <section className="lg:hidden relative">
       <MobileHistory history={history}/>
      </section>
      
      
    </div>
  );
}