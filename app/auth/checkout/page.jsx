"use client"

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Store,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  Lock,
  HelpCircle,
  Verified,
  TrendingUp,
  Headphones,
  User,
  ChevronRight,
  Calendar,
  Shield,
  Tag,
  Wallet
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const page = () => {
     const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(' ') : v;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' }
  ];

  const systemItems = [
    { icon: Store, label: 'Store Setup', active: true },
    { icon: CreditCard, label: 'Finance' }
  ];
  const router = useRouter();
  const handleCompletePayment = async () => {
    console.log("Complete Payment");

    router.push("/auth/login")

  }

  return (
    <div>
          

      {/* Main Content */}
      <main className="pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto p-6 grid grid-cols-12 gap-6">
          {/* Payment Form Section (Left) */}
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <section className="bg-white rounded-xl shadow-sm border border-[#c2c6d8] p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-1">Payment Method</h2>
                  <p className="text-[14px] leading-[20px] text-[#424656]">Secure encrypted credit card payment</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 border border-[#c2c6d8] rounded bg-white">
                    <img
                      className="h-6 w-auto opacity-80"
                      alt="Mastercard"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7v7rk2GZ0i7qi3n02i7liBp0RJs3br-nfUmSIkhFC43Ma7koWk1v1wYfrHIfZcbp4YvOm2Jt788dCPI6xcC8_dXK_yfQ9nOhW195kUNdoOpwJ0ZyCTMTfqj-aGD7b2GM8KD0Lx3t95vhLqUzQikaDgtnYoaVMdHp-8CPDuUpysXGBbieeqLZ8GmoiZtdG5iYZoO3DE6_IJHkR7FHlxFS2WJ5JV-fIzXsrptsnN5X0jZ63zJFnMLOleFZ0_pOtUSjrprgOk2OfPSn3"
                    />
                  </div>
                  <div className="px-2 py-1 border border-[#c2c6d8] rounded bg-white">
                    <img
                      className="h-6 w-auto opacity-80"
                      alt="Visa"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbA1oAt94_EJM4eiDBBsP5DhRvMBJ-ifekol8Ho0gCQbrT5tJJWs5zUjJr8S1BytAx7biS5FMVFzNjguOMpZJklar1nDJM9uLlLmd-u9XNG_mn7f6kqX1rg-IhQJ377-W3rmI0LUQ4ewz5sadwPSR1iBl0hzIpQKakFDpgydW6AVoGXowQd90SjcVPtireQT3W1IWi3meFo6rOHSNqTk5pC9r0SIZJlgLQIo2ld9Yi89Q9GOSe_Q-s3soOiQPkpOL5eM9hf_6GymHw"
                    />
                  </div>
                </div>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] font-semibold">CARDHOLDER NAME</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg px-4 py-3 text-[16px] leading-[24px] focus:ring-[#0050cb] focus:border-[#0050cb] transition-all outline-none"
                    placeholder="Johnathan Merchant"
                    type="text"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                  />
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] font-semibold">CARD NUMBER</label>
                  <div className="relative">
                    <input
                      className="w-full bg-white border border-[#c2c6d8] rounded-lg pl-4 pr-12 py-3 text-[16px] leading-[24px] focus:ring-[#0050cb] focus:border-[#0050cb] transition-all outline-none"
                      placeholder="0000 0000 0000 0000"
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727687]">
                      <CreditCard size={20} />
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] font-semibold">EXPIRY DATE</label>
                    <input
                      className="w-full bg-white border border-[#c2c6d8] rounded-lg px-4 py-3 text-[16px] leading-[24px] focus:ring-[#0050cb] focus:border-[#0050cb] transition-all outline-none"
                      placeholder="MM / YY"
                      type="text"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] font-semibold">CVV</label>
                    <div className="relative">
                      <input
                        className="w-full bg-white border border-[#c2c6d8] rounded-lg px-4 py-3 text-[16px] leading-[24px] focus:ring-[#0050cb] focus:border-[#0050cb] transition-all outline-none"
                        placeholder="•••"
                        type="password"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727687] text-sm">
                        <HelpCircle size={16} />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      saveCard ? 'bg-[#0050cb]' : 'bg-[#c2c6d8]'
                    }`}
                    onClick={() => setSaveCard(!saveCard)}
                    type="button"
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        saveCard ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    ></span>
                  </button>
                  <span className="text-[14px] leading-[20px] text-[#1a1c1e]">Save card for future payments</span>
                </div>
              </form>
            </section>
            <div className="bg-[#f3f3f6] rounded-xl p-6 flex items-start gap-4 border border-[#c2c6d8]/50">
              <Shield size={24} className="text-[#0050cb]" fill="#0050cb" />
              <div>
                <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">Bank-grade Security</p>
                <p className="text-[14px] leading-[20px] text-[#424656] leading-snug">Your payment details are protected with 256-bit SSL encryption and PCI DSS compliance.</p>
              </div>
            </div>
          </div>

          {/* Billing Summary Section (Right) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-white rounded-xl shadow-sm border border-[#c2c6d8] sticky top-24 overflow-hidden">
              <div className="bg-[#0050cb]/5 p-6 border-b border-[#c2c6d8]">
                <h3 className="text-[20px] leading-[28px] font-semibold text-[#0050cb] font-bold">Billing Summary</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[16px] leading-[24px] font-bold text-[#1a1c1e]">Bumpa Pro Plan</p>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">Billed Yearly</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">$348.00</p>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">($29/mo)</p>
                  </div>
                </div>
                <div className="h-px bg-[#c2c6d8]/30"></div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[14px] leading-[20px] text-[#424656]">Subtotal</span>
                    <span className="text-[14px] leading-[20px] text-[#1a1c1e] font-semibold">$348.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[14px] leading-[20px] text-[#424656]">Tax/VAT (0%)</span>
                    <span className="text-[14px] leading-[20px] text-[#1a1c1e] font-semibold">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#eeeef0] p-3 rounded-lg border border-[#c2c6d8]/20">
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#0050cb] font-bold flex items-center gap-1">
                      <Tag size={16} />
                      WELCOMEPRO
                    </span>
                    <span className="text-[14px] leading-[20px] text-[#ba1a1a] font-bold">-$20.00</span>
                  </div>
                </div>
                <div className="h-px bg-[#c2c6d8]/30"></div>
                <div className="flex justify-between items-center">
                  <span className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] font-black">Total Due</span>
                  <span className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#0050cb] font-black">$328.00</span>
                </div>
                <button
                onClick={() => handleCompletePayment()}
                 className="w-full bg-[#0050cb] text-white py-4 rounded-xl text-[20px] leading-[28px] font-semibold font-bold shadow-lg shadow-[#0050cb]/20 hover:shadow-[#0050cb]/30 active:scale-95 transition-all flex items-center justify-center gap-2 group">
                  Complete Payment
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2 text-[#727687] opacity-60">
                  <Lock size={14} />
                  <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium">ENCRYPTED TRANSACTION</span>
                </div>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#c2c6d8] text-center">
                <TrendingUp size={24} className="text-[#0050cb] mx-auto mb-2" />
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold text-[#1a1c1e]">Growth Tools</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-[#c2c6d8] text-center">
                <Headphones size={24} className="text-[#0050cb] mx-auto mb-2" />
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold text-[#1a1c1e]">24/7 Priority</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page