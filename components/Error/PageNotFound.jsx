"use client"
import React from 'react';
import {
  Package,
  HelpCircle,
  LayoutDashboard,
  ShoppingCart,
  Warehouse,
  MessageCircle,
  AlertCircle,
  Search
} from 'lucide-react';

const NotFound = () => {
  const quickLinks = [
    {
      icon: ShoppingCart,
      title: 'Manage Orders',
      description: 'Check pending fulfillments'
    },
    {
      icon: Warehouse,
      title: 'Stock List',
      description: 'View your current items'
    },
    {
      icon: MessageCircle,
      title: 'Help Center',
      description: 'Browse merchant guides'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[#F8FAFC] text-[#1a1c1e] selection:bg-[#dae1ff] selection:text-[#001849] font-['Hanken_Grotesk'] relative">
      {/* Global Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#0066ff] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#d9e3f2] blur-[120px] rounded-full"></div>
      </div>

      {/* Background Decoration Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="w-full h-full opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center text-center">
        {/* Animated Illustration Container */}
        <div className="relative mb-6">
          {/* Asymmetric Layout for Illustration */}
          <div className="grid grid-cols-12 gap-4 items-center">
            {/* Main Illustration */}
            <div className="col-span-12 md:col-start-3 md:col-span-8 relative">
              <div className="animate-[floating_3s_ease-in-out_infinite] bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] inline-block">
                <div className="flex flex-col items-center justify-center space-y-4">
                  {/* Visual representation of missing inventory */}
                  <div className="w-32 h-32 bg-[#d9e3f2] rounded-full flex items-center justify-center text-[#0066ff]">
                    <Package
                      size={64}
                      className="text-[#0066ff]"
                      fill="#0066ff"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest">
                    Error Code: 404
                  </div>
                </div>
              </div>
              {/* Decorative Floating Accents */}
              <div
                className="absolute -top-8 -right-4 animate-[floating_3s_ease-in-out_infinite]"
                style={{ animationDelay: '-0.5s' }}
              >
                <div className="bg-[#0066ff] text-white p-3 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                  <HelpCircle size={24} />
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-8 animate-[floating_3s_ease-in-out_infinite]"
                style={{ animationDelay: '-1.2s' }}
              >
                <div className="bg-[#f9f9fc] p-3 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]">
                  <Search size={24} className="text-[#a33200]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography & Identity */}
        <div className="space-y-2 max-w-2xl mx-auto">
          <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#1a1c1e]">
            Page Not Found
          </h1>
          <p className="text-[16px] leading-[24px] text-[#424656]">
            The inventory link you followed might be broken, or the page has been moved to a new warehouse location. Don't worry, your data is safe.
          </p>
        </div>

        {/* Action Matrix */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          {/* Primary Action */}
          <a
            className="group relative w-full sm:w-auto"
            href="/dashboard"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-[#0066ff] text-white text-[20px] leading-[28px] font-semibold rounded-lg shadow-lg hover:bg-[#0050cb] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3">
              <LayoutDashboard size={20} />
              Back to Dashboard
            </button>
          </a>
          {/* Secondary Action */}
          <button className="w-full sm:w-auto px-10 py-4 bg-[#d9e3f2] text-[#0050cb] text-[20px] leading-[28px] font-semibold rounded-lg hover:bg-[#e8e8ea] transition-all duration-200 active:scale-95 flex items-center justify-center gap-3">
            <MessageCircle size={20} />
            Contact Support
          </button>
        </div>

        {/* Quick Links (Bento-lite) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <div
                key={index}
                className="p-4 bg-[#f3f3f6] rounded-xl border border-[#c2c6d8] hover:border-[#0066ff] transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-2 shadow-sm">
                  <Icon
                    size={20}
                    className="text-[#555f6c] group-hover:text-[#0050cb] transition-colors"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] text-sm">
                    {link.title}
                  </h3>
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">
                    {link.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Identity Footer */}
        <div className="mt-6 pt-4 border-t border-[#c2c6d8] w-full max-w-xs mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-[#0066ff] rounded-full animate-pulse"></div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687]">
              inventory ECOSYSTEM SECURE
            </span>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;