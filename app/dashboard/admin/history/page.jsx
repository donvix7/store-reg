"use client"
import DesktopHistory from '@/components/DesktopHistory';
import MobileHistory from '@/components/MobileHistory';
import React, { useEffect, useState } from 'react';
import { Bell, FileDown, MapPin, RefreshCw, Search } from 'lucide-react';
import { getHistory } from '@/lib/service';

export default function HistoryPage() {
  const [history, setHistory] = useState([])

  const loadHistory = async () => {
    const history = await getHistory()
    if(history.success){
      setHistory(history.data || history)
    }else{
      setHistory([])
    }
  }
  useEffect(() => {
    loadHistory()
  }, [])


  return (
    <div className="p-4 space-y-8 font-body">
      {/* Header Section - Desktop only in this structure as layout has mobile header */}
      <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-[#f9f9fc] border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
            <input
              className="w-full bg-[#f3f3f6] border-none rounded-lg pl-10 pr-4 py-2 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
              placeholder="Search orders, customers or alerts..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#555f6c] hover:bg-[#f3f3f6] rounded-lg transition-all relative">
              <MapPin size={20} />
            </button>
            <button className="p-2 text-[#0050cb] hover:bg-[#0050cb]/5 rounded-lg transition-all relative">
              <Bell size={20} fill="#0050cb" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
            </button>
          </div>
          <div className="h-8 w-px bg-[#c2c6d8] mx-2"></div>
          <div className="flex items-center gap-3">
            <button className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#0050cb] font-bold hover:underline">View Store</button>
            <button className="bg-[#0066ff] text-white px-4 py-2 rounded-lg text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold shadow-sm">Point of Sale</button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBiPD7QiBgKiNgjIo2wtf2_8g888MhOjBY2EAdJ7N4xvjWW5CHY_mh5RbeDJ0ug1qUjEpa4WAuiEURmnAvUIUFeMvIRKmLhGwxHpy1ZnCfyl0-tKq-Owvks1FfMFA8IqAkKw05B9D0FMtwaFfp6Tg9Ud4wi37_vkYrCd56kWY8oRzxFf2ZvNw15sm00VsLzDOGuIZsMIYcInoTcJ613n_XZti7WAUYtJ2PEJSU69K73_ariK4DYnfkRlKa1zDb-azj8o3lP-q-wA84"
              />
            </div>
          </div>
        </div>
      </header>

     

      {/* Desktop Table View */}
      <div className="">
        <DesktopHistory history={history}/>
        
      </div>

      
    </div>
  );
}