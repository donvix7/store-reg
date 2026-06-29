"use client"
import React, { useState, useEffect } from 'react';
import {
  Store,
  LayoutDashboard,
  ShoppingCart,
  Package,
  Layers,
  BarChart3,
  Plus,
  Settings,
  Headphones,
  Search,
  Bell,
  User,
  X,
  CheckCircle,
  ShoppingBag,
  Edit,
  Tag
} from 'lucide-react';

const ProductQuickView = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Close modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const product = {
    name: 'Premium Leather Bag',
    sku: 'RL-PR-2024-LB',
    price: '₦45,000',
    stock: 12,
    description: 'Crafted from sustainably sourced full-grain Italian leather, the Royal Precision Premium Bag combines timeless elegance with modern utility. Featuring a padded 15-inch laptop compartment, reinforced silver-toned hardware, and an adjustable shoulder strap for maximum versatility in a corporate environment.',
    material: 'Full-Grain Leather',
    dimensions: '16" x 12" x 4"',
    isNew: true,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhrQdLknx-pSKKoL5kl1Bwh14U0hRKDJ_LxSMnNASVk4d-UjZ3QXRt6NFIYbYY5q5vbjaaVq0F4q5kR4acxgmCyAJECFGqu-b3Sv_EIK0VExxsks1UCwnSi0wor8ifzkpuUw5ZfXRhMn5y29yzwaAtha9zl8_91Ymg3I2g5Du1uu0MQEe0su8id5pls9o1JN3rKRrbEDs_c9B8AktVR7Gb-N-YaJb3RDhUytWDE8V3mEqziTzHNqCzuuZezTYR1OAGPYI4YQjo8Quw'
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Package, label: 'Products', active: true },
    { icon: Layers, label: 'Inventory' },
    { icon: BarChart3, label: 'Analytics' }
  ];

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] font-['Hanken_Grotesk'] overflow-hidden">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[260px] bg-white shadow-md flex flex-col border-r border-[#c2c6d8]">
        <div className="p-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#0066ff] flex items-center justify-center text-white">
            <Store size={24} />
          </div>
          <div>
            <h1 className="text-[20px] leading-[28px] font-bold text-[#0050cb]">Admin Portal</h1>
            <p className="text-[14px] leading-[20px] text-xs text-[#5b6572]">Enterprise Tier</p>
          </div>
        </div>
        <nav className="flex-1 px-4 mt-6">
          <ul className="space-y-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = item.active;
              return (
                <li
                  key={index}
                  className={`flex items-center gap-4 px-4 py-3 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#d9e3f2] text-[#5b6572] border-l-4 border-[#0050cb] font-semibold'
                      : 'text-[#3e4853] hover:bg-[#e8e8ea]'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-[14px] leading-[20px]">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="px-4 py-6 border-t border-[#c2c6d8]">
          <button className="w-full bg-[#0050cb] text-white py-3 px-4 rounded-lg text-[14px] leading-[20px] font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <Plus size={20} /> Add New Product
          </button>
          <div className="mt-6 space-y-1">
            <div className="flex items-center gap-4 text-[#3e4853] px-4 py-2 hover:bg-[#e8e8ea] transition-all duration-200 cursor-pointer">
              <Settings size={20} />
              <span className="text-[14px] leading-[20px]">Settings</span>
            </div>
            <div className="flex items-center gap-4 text-[#3e4853] px-4 py-2 hover:bg-[#e8e8ea] transition-all duration-200 cursor-pointer">
              <Headphones size={20} />
              <span className="text-[14px] leading-[20px]">Support</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] min-h-screen">
        {/* Top Bar */}
        <header className="fixed top-0 right-0 left-[260px] h-16 bg-[#f9f9fc] shadow-sm z-30 flex justify-between items-center px-6">
          <div className="flex items-center bg-[#eeeef0] px-4 py-2 rounded-full w-96 border border-[#c2c6d8]">
            <Search size={20} className="text-[#727687]" />
            <input
              className="bg-transparent border-none focus:ring-0 text-[14px] leading-[20px] w-full ml-2 outline-none"
              placeholder="Search catalog..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#f3f3f6] rounded-full transition-colors">
              <Bell size={20} className="text-[#555f6c]" />
            </button>
            <button className="p-2 hover:bg-[#f3f3f6] rounded-full transition-colors">
              <Settings size={20} className="text-[#555f6c]" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#0066ff]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvOmGeCAjJndXuYHC3JJ7O0ErtdCLMckLEAkWIuGWcBiQWwcXP-ZcwBaVJmk8GR-3Y1dKELj9Ntp74zXIgvJXlE7cUeEWGKWGcuZr3chkmzgdy4YMfEpi4NpAXVWWVnE_GBJzjgC5aZmlBze9NAoVK-QnZlvoBwdXTkRMccj-5PFTuellZPtKY0CQvCRmXqFmrTFRg7E8l1MgZ22MJ1Rdz3bKfdA1ZHO39a4N-63PtI4YvriehzOd7CBRsgd0RlsYlMrVvjDM0gnGc"
              />
            </div>
          </div>
        </header>

        {/* Products Section */}
        <section className="pt-24 px-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Products Catalog</h2>
              <p className="text-[#5b6572] text-[14px] leading-[20px]">Manage and view your store inventory at a glance.</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Placeholder products */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-[#c2c6d8] opacity-50 cursor-default">
                <div className="aspect-square bg-[#eeeef0] rounded-lg mb-4"></div>
                <div className="h-6 w-3/4 bg-[#eeeef0] rounded mb-2"></div>
                <div className="h-4 w-1/4 bg-[#eeeef0] rounded"></div>
              </div>
            ))}

            {/* Highlighted product that matches the modal */}
            <div className="bg-white p-4 rounded-xl shadow-sm border-2 border-[#0050cb] cursor-default">
              <div className="aspect-square bg-[#eeeef0] rounded-lg mb-4 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="Premium leather bag"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZoHOV1avKr7ibtLVvokZx5xREVYzFo3TJ-JihJWYaB3G3wpMySqL9Faxw240_R_J8uLQkyaHmqZyBJxl0Mn4vqlYz8SebsyZ27kXI6ICLATTTCZ8Fv3QGMrvUhH70wOb5Yr0yAnaarh-3xDJlheOhSDyWH59EP3j991aa_9eKNafV0GSFfe8OSuEnDoYDed1n1b__73ilBqpPh6ePXSDbsMP5Qj0YBR2LDOxUJgQJF1ISz474EaauNneCuI54ySvH3iaxKwpbMdvJ"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[20px] leading-[28px] font-semibold mb-1">Premium Leather Bag</h3>
                  <p className="text-[24px] leading-[32px] font-bold text-[#0050cb]">₦45,000</p>
                </div>
                <span className="bg-[#ffdbd0] text-[#832600] px-2 py-1 rounded text-xs font-medium uppercase">Quick View Open</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1c1e]/40 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          {/* Modal Container */}
          <div className="bg-white w-full max-w-4xl max-h-[921px] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-[fadeIn_0.3s_ease-out]">
            {/* Left Side: Image Gallery */}
            <div className="w-full md:w-1/2 h-80 md:h-auto bg-[#eeeef0] relative">
              <img
                className="w-full h-full object-cover"
                alt="Premium Leather Bag product shot"
                src={product.image}
              />
              {/* Close Button for Mobile */}
              <button
                className="md:hidden absolute top-4 right-4 bg-white/80 backdrop-blur rounded-full p-2 text-[#1a1c1e] shadow-md active:scale-95"
                onClick={() => setIsModalOpen(false)}
              >
                <X size={24} />
              </button>
              {/* Floating Navigation Badge */}
              {product.isNew && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0050cb] text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">NEW ARRIVAL</span>
                </div>
              )}
            </div>

            {/* Right Side: Product Details */}
            <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
              <div>
                {/* Header Info */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mb-1">
                      {product.name}
                    </h2>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">
                      SKU: {product.sku}
                    </p>
                  </div>
                  <button
                    className="hidden md:flex items-center justify-center w-10 h-10 hover:bg-[#e8e8ea] rounded-full transition-colors text-[#c2c6d8] hover:text-[#1a1c1e]"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Price & Stock */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[24px] leading-[32px] font-bold text-[#0050cb]">{product.price}</span>
                  <div className="h-6 w-px bg-[#c2c6d8]"></div>
                  <div className="flex items-center gap-1">
                    <CheckCircle size={18} className="text-[#cc4204]" fill="#cc4204" />
                    <span className="text-[14px] leading-[20px] text-[#cc4204] font-semibold">
                      In Stock ({product.stock} left)
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#1a1c1e] mb-2 uppercase">Description</h4>
                  <p className="text-[14px] leading-[20px] text-[#5b6572] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Specs Bento */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#f3f3f6] p-3 rounded-xl border border-[#c2c6d8]/30">
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] block mb-1">MATERIAL</span>
                    <span className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">{product.material}</span>
                  </div>
                  <div className="bg-[#f3f3f6] p-3 rounded-xl border border-[#c2c6d8]/30">
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] block mb-1">DIMENSIONS</span>
                    <span className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">{product.dimensions}</span>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 border-t border-[#c2c6d8] mt-auto">
                <div className="flex items-center gap-4">
                  <button className="flex-1 bg-[#0050cb] text-white py-4 rounded-xl text-[16px] leading-[24px] font-bold shadow-md hover:bg-[#0050cb]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <ShoppingBag size={20} /> Add to Shipment
                  </button>
                  <a className="flex items-center gap-1 text-[#0050cb] text-[14px] leading-[20px] font-semibold hover:underline px-2 transition-all" href="#">
                    <Edit size={16} /> Edit Product
                  </a>
                </div>
                <p className="text-center mt-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#c2c6d8]">
                  Last updated 2 hours ago by Inventory Manager
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductQuickView;