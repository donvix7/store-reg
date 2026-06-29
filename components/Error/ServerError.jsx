"use client"
import React, { useState } from 'react';
import {
  CloudOff,
  AlertTriangle,
  RefreshCw,
  LayoutDashboard,
  Terminal,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

const ServerError = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleRetry = () => {
    window.location.reload();
  };

  const handleDashboard = () => {
    // Navigate to dashboard
    console.log('Navigating to dashboard...');
  };

  const technicalDetails = {
    requestId: 'rid_9821_fxa_990',
    timestamp: '2023-10-27T14:22:01Z',
    cluster: 'Node-04-West',
    status: '500 (INTERNAL_SERVER_ERROR)'
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] selection:bg-[#dae1ff] selection:text-[#001849] font-['Hanken_Grotesk']">
      <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Subtle Ambient Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#0050cb]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#d9e3f2]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Visual Section: Isometric Error State */}
          <div className="hidden md:flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-sm aspect-square bg-[#f3f3f6] rounded-3xl border border-[#c2c6d8]/30 shadow-[0_0_40px_rgba(0,80,203,0.08)] flex items-center justify-center overflow-hidden">
              {/* Abstract Technical Illustration */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(#0050cb 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              ></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-[#e8e8ea] p-6 rounded-2xl animate-[float_4s_ease-in-out_infinite]">
                  <CloudOff
                    size={80}
                    className="text-[#0050cb]"
                    fill="#0050cb"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="mt-8 flex gap-4">
                  <div className="h-1.5 w-12 bg-[#0050cb] rounded-full opacity-20"></div>
                  <div className="h-1.5 w-12 bg-[#0050cb] rounded-full opacity-60"></div>
                  <div className="h-1.5 w-12 bg-[#0050cb] rounded-full opacity-20"></div>
                </div>
              </div>
              {/* Decorative Data Chips */}
              <div className="absolute top-10 left-10 bg-white shadow-sm border border-[#c2c6d8] p-3 rounded-lg flex items-center gap-2 transform -rotate-6">
                <AlertTriangle size={14} className="text-[#ba1a1a]" />
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase">ERR_500</span>
              </div>
              <div className="absolute bottom-10 right-10 bg-white shadow-sm border border-[#c2c6d8] p-3 rounded-lg flex items-center gap-2 transform rotate-3">
                <XCircle size={14} className="text-[#0050cb]" />
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase">Timeout</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 text-[#0050cb] text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase">
              <span className="w-8 h-[1px] bg-[#0050cb]"></span>
              Internal Server Error
            </div>
            <div className="space-y-4">
              <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-[#1a1c1e]">
                Something went <span className="text-[#0050cb]">wrong.</span>
              </h1>
              <p className="text-[16px] leading-[24px] text-[#424656] max-w-md">
                We're experiencing a technical hiccup on our end. Our engineers have been notified and are investigating the connection to your merchant data.
              </p>
            </div>

            {/* Technical Details Accordion */}
            <div
              className="bg-[#f3f3f6] border border-[#c2c6d8] rounded-xl p-4 cursor-pointer group transition-all duration-300 hover:bg-[#eeeef0]"
              onClick={() => setShowDetails(!showDetails)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal size={20} className="text-[#727687]" />
                  <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">
                    Technical details for support
                  </span>
                </div>
                <span className="text-[#727687] group-hover:text-[#0050cb] transition-colors">
                  {showDetails ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>
              {showDetails && (
                <div className="mt-4 pt-4 border-t border-[#c2c6d8]/30">
                  <pre className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#c2c6d8] overflow-x-auto font-['JetBrains_Mono']">
                    Request ID: {technicalDetails.requestId}
                    {'\n'}Timestamp: {technicalDetails.timestamp}
                    {'\n'}Cluster: {technicalDetails.cluster}
                    {'\n'}Status: {technicalDetails.status}
                  </pre>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="bg-[#0050cb] hover:bg-[#0066ff] text-white px-8 py-4 rounded-lg text-[20px] leading-[28px] font-semibold flex items-center justify-center gap-3 transition-all duration-200 active:scale-95 shadow-lg shadow-[#0050cb]/20"
                onClick={handleRetry}
              >
                <RefreshCw size={20} />
                Retry Request
              </button>
              <button
                className="bg-[#d9e3f2] hover:bg-[#d9e3f2] text-[#0050cb] px-8 py-4 rounded-lg text-[20px] leading-[28px] font-semibold flex items-center justify-center gap-3 transition-all duration-200 active:scale-95"
                onClick={handleDashboard}
              >
                <LayoutDashboard size={20} />
                Back to Dashboard
              </button>
            </div>

            {/* Footer Support Note */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
              <div className="flex -space-x-2">
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  alt="Support specialist"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmo--mksZd4cRAHtc4Y6iziDedOsbzeJ-Ewge0npKchwaYSO89BsQALkv8GxXGltjmSHwzUB3AVflHjESjuR1I_ZQ7nUD_UutWju2kd0JPGyQ5X2MuOKLZbOqF-kWvYVcr7JZA1GJyAaUuCj5Syz2ocmzPF0vOn8UvPMo1t3qHi5nTO7UK7bmN34MoJaEKO-coZm7sevA43ZgFD_LlTE0LuBmqdFOvDIQ660PI-HdlyTCygQWc8RT6hq-pcv1Gt8ez6eMPd6pTJ_-p"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  alt="Support engineer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhFp9otY9JOPmDpmRBw2pVKyC5fcW7K8QjoF6fysYMSvrxZuL81xSYKUKLTvFzTbxIDcA5XFH57o9-VXLLQLmtZwP3V69MeNwjNKDpTF_WZc-jxQab88mxDONkbLrqzuaWlhpZur3eEbYZNlQME-2rk_8qAcFiqkgztAjc5NpPQMCduvkIhys0qjgOvPX9ITO5TXgpdq6CG_VQ0VHdKgwr9EjFoOfWtk7ennf4YI-VMIXadhxHKAoPr29gc_yruShEIsNlTlUO2mP3"
                />
              </div>
              <p className="text-[14px] leading-[20px] text-[#727687]">
                Need immediate help? <a className="text-[#0050cb] font-bold hover:underline" href="#">Chat with Support</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServerError;