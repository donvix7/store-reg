"use client"
import saveProduct from '@/libs/actions';
import getInventory from '@/libs/service';
import { DollarSign, TrendingUp, Scan, Warehouse, TrendingDown, AlertTriangle, Truck, FileEdit, UserPlus, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DashboardAdminPage() {

  const [inventory, setInventory] = useState([]);



  const loadData = async() => {
    const res = await getInventory();
    setInventory(res)
    console.log(res)
  }
  useEffect(() => {
    loadData()
  }, []);

  const totalInventory = inventory?.reduce((acc, item) => acc + item.stock.current, 0);
  const totalnventoryValue = inventory?.reduce((acc, item) => acc + Number(item.price) * Number(item.stock.current), 0);
  

  return (
    <div className="px-10 pb-12 space-y-10">
      {/* Welcome Section */}
      <section>
        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight">System Overview</h2>
        <p className="text-on-surface-variant mt-1">Real-time logistics and warehouse analytics for the last 24 hours.</p>
      </section>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-12 gap-6">
        {/* Metric Card 1 */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-4xl flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/5">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-primary-fixed rounded-2xl flex items-center justify-center text-on-primary-fixed-variant">
              <DollarSign size={24} />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-outline text-sm font-medium uppercase tracking-widest">Total Inventory Value</p>
            <h3 className="text-4xl font-extrabold mt-2 text-on-surface">₦{totalnventoryValue}</h3>
          </div>
        </div>

        {/* Metric Card 2 */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-4xl flex flex-col justify-between border border-outline-variant/5">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-secondary-fixed rounded-2xl flex items-center justify-center text-on-secondary-fixed-variant">
              <Scan size={24} />
            </div>
          </div>
          <div className="mt-8">
            <p className="text-outline text-sm font-medium uppercase tracking-widest">Total Inventory</p>
            <h3 className="text-4xl font-extrabold mt-2 text-on-surface">{totalInventory}</h3>
          </div>
        </div>

        {/* Metric Card 3 (Visual emphasis) */}
        <div className="col-span-12 lg:col-span-4 bg-primary p-8 rounded-4xl text-on-primary relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-on-primary/70 text-sm font-medium uppercase tracking-widest">Warehouse Capacity</p>
            <h3 className="text-4xl font-extrabold mt-2">84.2%</h3>
            <div className="mt-6 w-full h-2 bg-on-primary/20 rounded-full overflow-hidden">
              <div className="h-full bg-on-primary w-[84.2%] rounded-full"></div>
            </div>
            <p className="mt-4 text-sm text-on-primary/80">15,000 / 18,000 Units filled</p>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Warehouse size={160} />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-10">
        {/* Main Content Left */}
        <div className="col-span-12 xl:col-span-8 space-y-10">
          {/* Active Inventory Overview */}
          <div className="bg-surface-container-lowest rounded-[2.5rem] p-10 border border-outline-variant/5">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold">Active Inventory Overview</h3>
                <p className="text-outline text-sm mt-1">High velocity movements across all sectors.</p>
              </div>
              <button className="px-6 py-2 rounded-xl bg-surface-container-high text-primary font-bold text-sm hover:bg-primary hover:text-on-primary transition-all">View Full List</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-outline-variant/20">
                  {["Product & SKU", "In Stock", "Status", "Price" ]?.map((item) => (
                    <th className="pb-6 font-bold text-outline text-xs uppercase tracking-widest">{item}</th>
                  ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {inventory?.map((item) => (
                    <tr key={item.name} className="group">
                      <td className="py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-surface-container rounded-2xl overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" alt="Red athletic running sneaker studio shot" src={item.src}/>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{item.name}</p>
                          <p className="text-xs text-outline font-mono">{item.sku}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-6 text-center font-semibold">{item.stock.current}</td>
                    <td className="py-6">
                      <span className="px-4 py-1.5 rounded-full bg-[#e8f5e9] text-[#2e7d32] text-xs font-bold uppercase tracking-wider">{item.status}</span>
                      </td>
                    <td className="py-6 text-right font-bold">{item.price}</td>
                    <td className="py-6 text-right text-green-600 font-bold">{item.expiryDate}</td>
                  </tr>
                  ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar Content */}
        <div className="col-span-12 xl:col-span-4 space-y-10">
          {/* Urgent Replenishment Alert */}
          <div className="bg-error-container p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-on-error-container mb-6">
                <AlertTriangle size={20} />
                <h3 className="font-extrabold uppercase tracking-widest text-sm">Urgent Replenishment</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-lowest/40 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center border border-on-error-container/10">
                  <div>
                    <p className="text-sm font-bold text-on-error-container">SKU-2031-WHT</p>
                    <p className="text-xs text-on-error-container/70">Horizon Ceramic Watch</p>
                  </div>
                  <span className="text-error font-extrabold">42 Left</span>
                </div>
                <div className="bg-surface-container-lowest/40 backdrop-blur-sm p-5 rounded-2xl flex justify-between items-center border border-on-error-container/10">
                  <div>
                    <p className="text-sm font-bold text-on-error-container">SKU-7712-OAK</p>
                    <p className="text-xs text-on-error-container/70">Mid-Century Oak Desk</p>
                  </div>
                  <span className="text-error font-extrabold">08 Left</span>
                </div>
              </div>
              <button className="w-full mt-6 py-4 bg-error text-on-error rounded-xl font-bold text-sm shadow-lg shadow-error/20 hover:scale-[1.02] transition-transform">Initiate Bulk Order</button>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-surface-container-low rounded-[2.5rem] p-8 border border-outline-variant/15">
            <h3 className="text-xl font-bold mb-8">Recent Activity</h3>
            <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-outline-variant/30">
              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant z-10 shrink-0">
                  <Truck size={18} />
                </div>
                <div>
                  <p className="text-sm text-on-surface"><strong>Shipment #ORD-882</strong> departed from Warehouse B.</p>
                  <p className="text-xs text-outline mt-1 italic">12 minutes ago</p>
                </div>
              </div>
              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant z-10 shrink-0">
                  <FileEdit size={18} />
                </div>
                <div>
                  <p className="text-sm text-on-surface"><strong>Alex Thompson</strong> updated stock for &quot;Swift-Run Sneakers&quot;.</p>
                  <p className="text-xs text-outline mt-1 italic">45 minutes ago</p>
                </div>
              </div>
              <div className="relative flex gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-outline z-10 shrink-0">
                  <UserPlus size={18} />
                </div>
                <div>
                  <p className="text-sm text-on-surface">New vendor <strong>Nordic Logistics</strong> added to directory.</p>
                  <p className="text-xs text-outline mt-1 italic">2 hours ago</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-10 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:opacity-70 transition-opacity">
              View History <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}