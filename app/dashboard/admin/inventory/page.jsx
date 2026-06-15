import { LineChart } from 'lucide-react';
import React from 'react';
import DesktopInventory from '@/app/components/DesktopInventory';
import MobileInventory from '@/app/components/MobileInventory';
import { fetchProducts } from '@/app/libs/service';

export default async function InventoryPage() {
  const initialInventory = await fetchProducts()

  return (
    <div className="p-5 lg:p-10 space-y-8 font-body">
     

      {/* Desktop View Section */}
      <section className="hidden lg:block space-y-8">
        <DesktopInventory initialInventory={initialInventory}/>
      </section>

      {/* Mobile View Section */}
      <section className="lg:hidden">
        <MobileInventory initialInventory={initialInventory} />
      </section>

      {/* Contextual Sidebar / Info Panel (Asymmetric touch) */}
      <footer className="mt-8 p-10 grid grid-cols-1 md:grid-cols-3 gap-10 bg-surface-container-low border border-outline-variant/15 rounded-3xl">
        <div>
          <h4 className="font-headline font-bold text-on-surface mb-2">Recent Batches</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-sm font-medium">Batch #8829 arrived from Port</span>
              <span className="text-[10px] text-outline ml-auto">2h ago</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-sm font-medium">Internal transfer initiated</span>
              <span className="text-[10px] text-outline ml-auto">5h ago</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 bg-primary-container/20 border border-primary/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center shrink-0">
            <LineChart className="text-primary" size={32} />
          </div>
          <div>
            <h4 className="font-headline font-bold text-primary mb-1">Inventory Optimization Tip</h4>
            <p className="text-sm text-on-primary-container">Based on historical data for Q4, we recommend increasing stock of &apos;Electronics&apos; by 15% to avoid &apos;Low Stock&apos; disruptions next month.</p>
          </div>
          <button className="mt-4 md:mt-0 md:ml-auto px-6 py-2 bg-primary text-on-primary rounded-xl text-xs font-bold whitespace-nowrap shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform">View Report</button>
        </div>
      </footer>
    </div>
  );
}