import React from 'react';
import { DollarSign, TrendingUp, ArrowRight, TrendingDown } from 'lucide-react';

const MobileReports = () => {
  return (
    <div className="p-5 space-y-6 pb-24 font-body">
      {/* Header Info */}
      <div className="space-y-1">
        <h2 className="font-headline text-2xl font-extrabold text-on-surface tracking-tight">Analytics Overview</h2>
        <p className="text-on-surface-variant font-medium text-xs">Real-time inventory intelligence.</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="text-outline font-semibold text-[10px] tracking-wider uppercase">Total Inventory Value</span>
            <div className="p-2 bg-primary-fixed rounded-lg text-primary">
              <DollarSign size={20} />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-headline font-extrabold text-on-surface">$1,482,900</h3>
            <span className="text-tertiary font-bold text-[10px] flex items-center bg-tertiary-fixed px-1.5 py-0.5 rounded-full">
              <TrendingUp size={10} className="mr-1" />
              +12.4%
            </span>
          </div>
          <div className="mt-6 h-12 w-full bg-surface-container-low rounded-xl relative overflow-hidden">
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <path d="M0 40 Q 50 10 100 30 T 200 5 T 300 25 T 400 35 T 500 10 T 600 25 L 600 60 L 0 60 Z" fill="rgba(0, 61, 155, 0.05)"></path>
              <path d="M0 40 Q 50 10 100 30 T 200 5 T 300 25 T 400 35 T 500 10 T 600 25" fill="none" stroke="#003d9b" strokeWidth="2"></path>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10">
            <span className="text-outline font-semibold text-[10px] tracking-wider uppercase">Active SKUs</span>
            <h3 className="text-2xl font-headline font-extrabold text-on-surface mt-2">4,821</h3>
            <p className="text-on-surface-variant text-[10px] mt-1">+82 this mo</p>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-outline-variant/10 flex flex-col justify-between">
            <div>
              <span className="font-semibold text-[10px] tracking-wider uppercase text-error">Alerts</span>
              <h3 className="text-2xl font-headline font-extrabold text-error mt-2">24</h3>
            </div>
            <button className="mt-2 text-[10px] font-bold text-primary flex items-center">
              Review <ArrowRight className="ml-0.5" size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Stock Movement (Simplified for Mobile) */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
        <h4 className="font-headline font-bold text-sm mb-6">Net Stock Movement</h4>
        <div className="h-32 flex items-end gap-2 px-1">
          {[ 
            { in: 60, out: 40 },
            { in: 80, out: 30 },
            { in: 40, out: 50 },
            { in: 90, out: 20 },
            { in: 75, out: 45 }
          ].map((d, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end gap-0.5">
              <div className="w-full bg-secondary-container rounded-t-sm" style={{ height: `${d.out}%` }}></div>
              <div className="w-full bg-primary rounded-t-sm" style={{ height: `${d.in}%` }}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Mix */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
        <h4 className="font-headline font-bold text-sm mb-6">Category Mix</h4>
        <div className="space-y-4">
          {[
            { label: "Electronics", val: 45, color: "bg-primary" },
            { label: "Furniture", val: 28, color: "bg-secondary" },
            { label: "Supplies", val: 18, color: "bg-tertiary-container" }
          ].map((c, i) => (
            <div key={i}>
              <div className="flex justify-between text-[11px] mb-1.5">
                <span className="font-bold text-on-surface">{c.label}</span>
                <span className="text-outline font-bold">{c.val}%</span>
              </div>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className={`${c.color} h-full`} style={{ width: `${c.val}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Items List */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
        <div className="p-5 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/20">
          <h4 className="font-headline font-bold text-sm">Most Popular</h4>
          <span className="text-[10px] font-bold text-primary uppercase">Month</span>
        </div>
        <div className="divide-y divide-outline-variant/5">
          {[
            { name: "Pro-X Wireless", sales: "1,240", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0-j6GkxC_xhIn-mAtKIzfFbT9hvH-d-tgZVxeKJQByoaE2F7sDjSPcqzytceL9_Ny3aAG5amTjAnitkQVdv4gs7WM27E777Pd0otGoKimlmKOiit0MF0MIKrP9y0JwakrGOvqEOz8dz0jhBbEsttoZu5Ntkl4RiNPq0hfyMQ-iH8_THubHdU2-hcJid4R8Kwq_9KkXfExUsaqE9_nbAbPJTQqyVgNItKV6nx8hvLnSsqcYQN5AdjB91yNU_4pU2DU-OCxcuK_e3I" },
            { name: "ErgoDesk Chair", sales: "892", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDItrAYrzTPQ6dPI8LU2RxA2LJkubcKtfnC9BbgUTia3sJim6gb_dQBjGQgwMH25FgqaczHI2F38oFx8tJF0hoXUWebcTBzJ21Mmf5tlk5fZJniAkhuAZrJovs7SKknp7qfnj-Z4jhRqRt6UWKFU4NjzhuaFWJ81R1FRCL4qC0Q1pWa3ZgxpDPlnZKNJp4lxrgWPrZJYvoMTX-Pa2Ebs9lrXJf5OxmNhnRTAofLjg6nosaN7UutfNe5JNue8aOmGesVDtC-yG_Xzro" }
          ].map((row, i) => (
            <div key={i} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-container overflow-hidden">
                  <img className="w-full h-full object-cover" src={row.img} alt={row.name} />
                </div>
                <div>
                  <div className="font-bold text-xs text-on-surface">{row.name}</div>
                  <div className="text-[10px] text-on-surface-variant font-medium">{row.sales} sold</div>
                </div>
              </div>
              <TrendingDown className="text-outline" size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileReports;
