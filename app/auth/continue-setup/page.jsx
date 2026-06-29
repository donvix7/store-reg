"use client"
import React, { useState } from 'react';
import {
  Bolt,
  Shirt,
  Scissors,
  Laptop,
  Utensils,
  Armchair,
  HeartPulse,
  Wrench,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const inventoryOnboarding = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const industries = [
    { id: 'Fashion', icon: Shirt, label: 'Fashion', description: 'Clothing, shoes, accessories' },
    { id: 'Beauty', icon: Scissors, label: 'Beauty', description: 'Skincare, makeup, hair' },
    { id: 'Electronics', icon: Laptop, label: 'Electronics', description: 'Gadgets, tech, appliances' },
    { id: 'Food', icon: Utensils, label: 'Food & Drink', description: 'Groceries, snacks, meals' },
    { id: 'Home', icon: Armchair, label: 'Home Decor', description: 'Furniture, art, bedding' },
    { id: 'Health', icon: HeartPulse, label: 'Health', description: 'Wellness, pharmacy, gym' },
    { id: 'Services', icon: Wrench, label: 'Services', description: 'Consulting, repair, events' },
    { id: 'Other', icon: MoreHorizontal, label: 'Other', description: 'Something else entirely' },
  ];

  const router = useRouter()

  const handleSelect = (id) => {
    setSelectedIndustry(id);
    // Haptic feedback simulation
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(10);
    }
  };

  const handleContinue = () => {
    if (selectedIndustry) {
      alert(`Continue with: ${selectedIndustry}`);
      router.push('/auth/subscriptions')
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fc] font-['Hanken_Grotesk'] text-[#1a1c1e]">
      {/* Top Bar Navigation */}
      <header className="h-16 flex items-center px-8 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#c2c6d8]/30">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0066ff] rounded-lg flex items-center justify-center">
            <Bolt className="text-white text-xl" size={20} fill="white" />
          </div>
          <span className="font-bold text-[20px] leading-[28px] tracking-tight text-[#0050cb]">inventory</span>
        </div>
        <div className="ml-auto">
          <button className="text-[#555f6c] text-[14px] leading-[20px] hover:text-[#0050cb] transition-colors">Save &amp; Exit</button>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full fade-in">
          {/* Progress Header */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#0050cb] uppercase">Step 2 of 4</span>
                <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mt-1">Tell us about your business</h1>
              </div>
              <div className="hidden md:block">
                <p className="text-[14px] leading-[20px] text-[#555f6c]">Helps us customize your store experience</p>
              </div>
            </div>
            {/* Progress Indicator */}
            <div className="flex gap-2 w-full">
              <div className="h-1 rounded-full bg-[#0066FF] flex-1"></div>
              <div className="h-1 rounded-full bg-[#0066FF] flex-1 relative overflow-hidden">
                <div className="absolute left-0 top-0 h-full w-full bg-[#0066FF] animate-[slideIn_0.8s_ease-out_forwards]"></div>
              </div>
              <div className="h-1 rounded-full bg-[#E2E8F0] flex-1"></div>
              <div className="h-1 rounded-full bg-[#E2E8F0] flex-1"></div>
            </div>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <div
                  key={industry.id}
                  onClick={() => handleSelect(industry.id)}
                  className={`industry-card bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border flex flex-col items-center text-center group transition-all duration-200 cursor-pointer ${
                    selectedIndustry === industry.id
                      ? 'border-2 border-[#0066FF] bg-[#E6F0FF]'
                      : 'border-transparent hover:shadow-[0px_12px_32px_rgba(0,102,255,0.08)] hover:-translate-y-1'
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${
                      selectedIndustry === industry.id
                        ? 'bg-[#0066ff] text-white'
                        : 'bg-[#eeeef0] group-hover:bg-[#0066ff] group-hover:text-white'
                    }`}
                  >
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[16px] leading-[24px] font-semibold">{industry.label}</span>
                  <p className="text-[14px] leading-[20px] text-[#555f6c] mt-1">{industry.description}</p>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-8 border-t border-[#c2c6d8]/30">
            <button className="px-8 py-3 rounded-lg border border-[#727687] text-[#555f6c] font-semibold hover:bg-[#eeeef0] transition-all flex items-center gap-2 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              Back
            </button>
            <div className="flex gap-4 items-center">
              <p className={`hidden sm:block text-[14px] leading-[20px] ${selectedIndustry ? 'text-[#0050cb] font-semibold' : 'text-[#555f6c]'}`}>
                {selectedIndustry ? `Selected: ${selectedIndustry}` : 'Select an industry to continue'}
              </p>
              <button
                onClick={handleContinue}
                disabled={!selectedIndustry}
                className={`px-10 py-3 rounded-lg bg-[#0066ff] text-white font-semibold shadow-lg shadow-[#0066ff]/20 hover:bg-[#0050cb] transition-all flex items-center gap-2 group ${
                  !selectedIndustry ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Continue
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Visual Accent Elements */}
      <div className="fixed -bottom-20 -right-20 w-96 h-96 bg-[#0050cb]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed -top-20 -left-20 w-64 h-64 bg-[#555f6c]/5 rounded-full blur-3xl pointer-events-none"></div>

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        /* Global font fallback */
        body {
          font-family: 'Hanken Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default inventoryOnboarding;