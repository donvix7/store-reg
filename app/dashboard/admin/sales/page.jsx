import { Plus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto w-full font-body">
      <div className="mb-12">
        <h1 className="text-2xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">Sales & Marketing</h1>
        <p className="text-on-surface-variant text-lg">Scale your business with powerful promotional tools and automated campaigns.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Main Content Area */}
        <div className="col-span-1 md:col-span-8 space-y-10">
          
          {/* Campaigns Section (Empty State) */}
          <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
                  <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.205 2.268A1 1 0 0013.51 2h-3c-.476 0-.901.354-.966.832L9.226 9.87a1 1 0 001.018 1.243h4.54c.613 0 1.125.434 1.227.988l.704 3.518A1 1 0 0019 15.5H4.5a1 1 0 000 2h14.5c.966 0 1.843-.575 2.2-1.495l1.22-2.538C22.308 15.09 21.035 13.5 19.5 13.5h-3.704c-.008 0-.017 0-.025 0L15 6.118V3a1 1 0 00-1-1zM7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7 19.5h5.346l-.166-2H7.5a1.5 1.5 0 100-3h11.02l-1.655-2h-7.37l1.5-7.5H19.5c.828 0 1.604.45 1.923 1.2l-1.22 2.538C19.308 15.825 18.5 17.5 17.5 17.5h-3.704c-.008 0-.017 0-.025 0L12.5 20h-5z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-headline">Campaigns</h3>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded-xl font-bold text-sm hover:bg-primary/10 transition-colors">
                <Plus size={20} />
                Create Campaign
              </button>
            </div>
            
            {/* Empty State Content */}
            <div className="text-center py-16">
              <div className="inline-flex relative mb-8">
                <svg className="text-primary" width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="8 8"/>
                  <path d="M60 35v40l30 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="60" cy="60" r="40" fill="currentColor" className="text-primary/10"/>
                  <path d="M45 55l5 5 15-15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
                <div className="absolute -bottom-2 -right-2 bg-tertiary text-on-tertiary p-3 rounded-xl shadow-lg">
                  <span className="material-symbols-outlined text-2xl">trending_up</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-on-surface mb-4 font-headline">No active campaigns</h4>
              <p className="text-on-surface-variant text-base max-w-lg mx-auto mb-8">
                Launch your first marketing campaign to drive more sales, reach new customers, and grow your brand visibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                  Start First Campaign
                </button>
                <button className="px-8 py-3 bg-surface-container-low text-on-surface-variant rounded-xl font-bold text-sm hover:bg-surface-container transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Coupons Section */}
          <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-headline">Active Coupons</h3>
              <button className="text-primary font-bold text-sm hover:underline">+ New Coupon</button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="text-left py-4 px-2 font-bold text-xs text-on-surface-variant uppercase tracking-wider">Coupon Name</th>
                    <th className="text-left py-4 px-2 font-bold text-xs text-on-surface-variant uppercase tracking-wider">Discount</th>
                    <th className="text-left py-4 px-2 font-bold text-xs text-on-surface-variant uppercase tracking-wider">Expiry Date</th>
                    <th className="text-left py-4 px-2 font-bold text-xs text-on-surface-variant uppercase tracking-wider">Status</th>
                    <th className="text-right py-4 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-outline-variant/10 hover:bg-surface-container-low/50 transition-colors">
                    <td className="py-4 px-2">
                      <div className="font-bold text-on-surface">SUMMER_VIBES24</div>
                      <div className="text-xs text-on-surface-variant">Minimum purchase: ₦5,000</div>
                    </td>
                    <td className="py-4 px-2 text-on-surface">15% OFF</td>
                    <td className="py-4 px-2 text-on-surface">Aug 25, 2024</td>
                    <td className="py-4 px-2">
                      <span className="px-3 py-1 rounded-full bg-primary-container text-primary text-xs font-bold">ACTIVE</span>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-on-surface-variant hover:text-on-surface transition-colors">•••</button>
                    </td>
                  </tr>
                  {/* Add more coupon rows here */}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Sidebar - Quick Actions */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/10">
            <h3 className="text-xl font-bold mb-6 font-headline">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors group">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M8 12h8M8 16h4M12 8V4M4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-bold text-sm">New Order</span>
              </button>
              
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors group">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 6h16M4 12h16M4 18h16M3 6l2-2h14l2 2M3 18l2 2h14l2-2M7 12a1 1 0 102 0 1 1 0 00-2 0zM17 12a1 1 0 102 0 1 1 0 00-2 0z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-bold text-sm">New Promotion</span>
              </button>

              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container transition-colors group">
                <div className="p-2 rounded-lg bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-2-13h4v6h-4zm4 0V7h-4v2l2 2h2z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="font-bold text-sm">Manage Inventory</span>
              </button>
            </div>
          </section>

          {/* Analytics Widget */}
          <section className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-outline-variant/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold font-headline">Sales Snapshot</h3>
              <span className="text-xs text-primary bg-primary-container py-1 px-2 rounded-full">Live</span>
            </div>
            
            <div className="space-y-6">
              <div className="bg-primary-fixed p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Today's Revenue</p>
                    <p className="text-3xl font-extrabold text-on-primary">₦450,000</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-on-primary/20 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.586 2.586L12 0l-2.586 2.586M2 6l10 10 10-10M2 10l10 10 10-10" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between text-on-primary text-xs">
                  <span>+12% vs yesterday</span>
                  <span className="text-on-primary/70">38 orders</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-on-surface">Top Performing Product</span>
                  <span className="text-sm font-bold text-on-surface">Oak Desk</span>
                </div>
                <div className="w-full bg-outline-variant/10 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: "85%"}}></div>
                </div>
                <p className="text-xs text-on-surface-variant mt-2">12 units sold today</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page