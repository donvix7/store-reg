"use client"
import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Store,
  Search,
  Bell,
  Settings,
  HelpCircle,
  User,
  Plus,
  MoreVertical,
  CheckCircle,
  ArrowLeft,
  Info,
  Lock,
  ArrowUpRight,
  X,
  Building2,
  Landmark,
  CreditCard,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { getPayoutAccounts, getPayouts } from '@/lib/service';

const page = () => {
   const [showModal, setShowModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [banks, setBanks] = useState([]);
  const [recentPayouts, setRecentPayouts] = useState([]);

  const loadData = async() => {
    const res = await getPayoutAccounts();
    if(res.success){
      setBanks(res.data);
    }
    else{
      console.log(res.message)
    }
      const res2 = await getPayouts();
      if(res2.success){
        setRecentPayouts(res2.data);
      }else{
        console.log(res2.message)
      }
  }
  useEffect(() => {
    loadData();
  }, []);



  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="">
        <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 flex justify-between items-center px-6 bg-white border-b border-[#c2c6d8] z-40">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
            <input
              className="pl-10 pr-4 py-2 bg-[#eeeef0] rounded-full border-none focus:ring-2 focus:ring-[#0066ff] w-64 text-[14px] leading-[20px] outline-none"
              placeholder="Search orders, banks..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:bg-[#eeeef0] rounded-full p-2 scale-95 active:scale-90 transition-transform">
            <Bell size={20} />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 scale-95 active:scale-90 transition-transform">
            <Settings size={20} />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 scale-95 active:scale-90 transition-transform">
            <HelpCircle size={20} />
          </button>
          <div className="flex items-center gap-3 border-l border-[#c2c6d8] pl-6">
            <img
              className="w-8 h-8 rounded-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr1SsjWR9kIaCbfoX0goOjF2QaVEU_V94i9lOxlvkyUYBAlEeGflVL0uhsgKz8g8phCnpwd9yhgxsIQjvugaDtjidwDymcIxzRHgGqbcCurnx-8y9sspRpoJ5vaiHSpZ6krT_lwHu-y_xHz6-QSurVXLx8SlOb3GLkmgQ9PL-BS82qtMZesjodzJ92WLBERYsrzxNt_9ONHGG95jPlGW5FZEI1hBwfW2jZOtAasSjdudhPCmHKOxGbjbgIgln6buOePjSeT08cgMfD"
            />
            <div className="flex flex-col">
              <span className="text-[14px] leading-[20px] font-semibold">Tayo's Store</span>
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase">Merchant Admin</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-16 min-h-screen">
        <div className="p-6 max-w-6xl mx-auto space-y-6">
          {/* Page Header Area */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#555f6c] mb-2">
                <ArrowLeft size={18} />
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium">STORE SETUP</span>
              </div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Manage Banks</h2>
              <p className="text-[14px] leading-[20px] text-[#555f6c] mt-1">Configure your settlement accounts for automatic payouts and revenue withdrawal.</p>
            </div>
            <button
              className="flex items-center gap-2 bg-[#0050cb] text-white px-6 py-3 rounded-lg text-[14px] leading-[20px] hover:bg-[#003fa4] transition-colors shadow-sm"
              onClick={toggleModal}
            >
              <Plus size={20} />
              Add New Bank
            </button>
          </section>

          {/* Info Alert */}
          <div className="bg-[#d9e3f2] bg-opacity-30 border border-[#d9e3f2] rounded-xl p-4 flex gap-4 items-start">
            <Info size={20} className="text-[#0050cb] mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-[14px] leading-[20px] font-semibold text-[#5b6572]">Payout Verification Notice</h4>
              <p className="text-[14px] leading-[20px] text-[#3e4853]">All new bank accounts undergo a 24-hour verification period before they can be used for automated payouts. Transfers are processed every business day at 10:00 AM WAT.</p>
            </div>
          </div>

          {/* Banks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {banks.map((bank) => (
              <div
                key={bank.id}
                className={`group bg-white border-2 rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] relative overflow-hidden transition-all hover:shadow-md ${
                  bank.isPrimary ? 'border-[#0066ff]' : 'border-[#c2c6d8]'
                }`}
              >
                <div className="absolute top-0 right-0 p-3">
                  <button className="text-[#555f6c] hover:text-[#0050cb] transition-colors p-1 rounded-full hover:bg-[#eeeef0]">
                    <MoreVertical size={20} />
                  </button>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#eeeef0] flex items-center justify-center border border-[#c2c6d8]">
                    <img className="w-8 h-8 object-contain" alt={bank.name} src={bank.logo} />
                  </div>
                  <div>
                    {bank.isPrimary && (
                      <span className="inline-block bg-[#0066ff] bg-opacity-10 text-[#0050cb] text-[10px] font-bold px-2 py-0.5 rounded-full mb-1">PRIMARY</span>
                    )}
                    <h3 className="text-[20px] leading-[28px] font-semibold">{bank.name}</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">ACCOUNT NUMBER</p>
                    <p className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] tracking-widest">{bank.accountNumber}</p>
                  </div>
                  <div>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">ACCOUNT NAME</p>
                    <p className="text-[16px] leading-[24px] font-semibold text-[#1a1c1e]">{bank.accountName}</p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-[#c2c6d8] flex justify-between items-center">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle size={16} fill="#22c55e" />
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium">Verified</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-[#0050cb] font-semibold text-[14px] leading-[20px] hover:underline">Edit</button>
                    {!bank.isPrimary && (
                      <button className="text-[#ba1a1a] font-semibold text-[14px] leading-[20px] hover:underline">Remove</button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Empty Slot */}
            <button
              className="group border-2 border-dashed border-[#c2c6d8] rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#0050cb] transition-all bg-[#f9f9fc] hover:bg-[#f3f3f6] min-h-[320px]"
              onClick={toggleModal}
            >
              <div className="w-16 h-16 rounded-full bg-[#e8e8ea] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={32} className="text-[#555f6c] group-hover:text-[#0050cb]" />
              </div>
              <h4 className="text-[16px] leading-[24px] font-semibold text-[#1a1c1e]">Add another bank</h4>
              <p className="text-[14px] leading-[20px] text-[#555f6c] mt-2 max-w-[200px]">Link more accounts for flexible payout options</p>
            </button>
          </div>

          {/* Transactions / History Section */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            <div className="lg:col-span-2 bg-white rounded-xl border border-[#c2c6d8] p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] leading-[28px] font-semibold">Recent Payouts</h3>
                <button className="text-[#0050cb] font-semibold text-[14px] leading-[20px] hover:underline flex items-center gap-1">
                  View Statement
                  <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#f3f3f6]">
                    <tr>
                      <th className="px-4 py-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">DATE</th>
                      <th className="px-4 py-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">REFERENCE</th>
                      <th className="px-4 py-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">BANK</th>
                      <th className="px-4 py-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] text-right">AMOUNT</th>
                      <th className="px-4 py-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c2c6d8]">
                    {recentPayouts.map((payout, index) => (
                      <tr key={index} className="hover:bg-[#eeeef0] transition-colors">
                        <td className="px-4 py-4 text-[14px] leading-[20px]">{payout.date}</td>
                        <td className="px-4 py-4 text-[14px] leading-[20px] font-mono">{payout.reference}</td>
                        <td className="px-4 py-4 text-[14px] leading-[20px]">{payout.bank}</td>
                        <td className="px-4 py-4 text-[14px] leading-[20px] font-semibold text-right">{payout.amount}</td>
                        <td className="px-4 py-4">
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded">{payout.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Helpful Tips Sidebar */}
            <div className="space-y-6">
              <div className="bg-[#0050cb] text-white rounded-xl p-6 shadow-lg relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
                <h3 className="text-[20px] leading-[28px] font-semibold relative z-10">Instant Payouts</h3>
                <p className="text-[14px] leading-[20px] text-[#dae1ff] mt-2 relative z-10">Enable instant payouts to receive your money in under 5 minutes for a small flat fee.</p>
                <button className="mt-6 bg-white text-[#0050cb] px-4 py-2 rounded font-semibold text-[14px] leading-[20px] hover:bg-[#dae1ff] transition-colors relative z-10">
                  Learn More
                </button>
              </div>
              <div className="bg-white rounded-xl border border-[#c2c6d8] p-6 shadow-sm">
                <h4 className="text-[16px] leading-[24px] font-semibold mb-4">Security Tip</h4>
                <div className="flex gap-3">
                  <Lock size={20} className="text-[#a33200]" />
                  <p className="text-[14px] leading-[20px] text-[#555f6c]">Never share your OTP or banking credentials with anyone. Bumpa will never ask for your private banking passwords.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Add Bank Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm flex items-center justify-center p-4" onClick={toggleModal}>
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-[#c2c6d8] flex justify-between items-center">
              <h3 className="text-[20px] leading-[28px] font-semibold">Add Bank Account</h3>
              <button className="text-[#555f6c] hover:text-[#0050cb] transition-colors" onClick={toggleModal}>
                <X size={24} />
              </button>
            </div>
            <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] mb-2">SELECT BANK</label>
                <select
                  className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb] focus:border-transparent outline-none"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select a bank</option>
                  <option value="first">First Bank of Nigeria</option>
                  <option value="uba">United Bank for Africa (UBA)</option>
                  <option value="zenith">Zenith Bank</option>
                  <option value="kuda">Kuda Microfinance Bank</option>
                </select>
              </div>
              <div>
                <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] mb-2">ACCOUNT NUMBER</label>
                <input
                  className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb] focus:border-transparent outline-none"
                  placeholder="e.g. 0123456789"
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </div>
              <div className="bg-[#f3f3f6] p-4 rounded-lg">
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">ACCOUNT NAME</p>
                <p className="text-[16px] leading-[24px] font-semibold text-[#727687]">Enter account number to verify...</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="flex-1 bg-[#e8e8ea] text-[#1a1c1e] py-3 rounded-lg font-semibold hover:bg-[#e2e2e5] transition-colors"
                  onClick={toggleModal}
                  type="button"
                >
                  Cancel
                </button>
                <button className="flex-1 bg-[#0050cb] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" type="submit">
                  Verify &amp; Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

}

export default page