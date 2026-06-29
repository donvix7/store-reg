"use client"
import { deleteProduct } from '@/lib/actions';
import { Save, Pencil, Plus, Trash, LayoutDashboard, Package, ShoppingCart, Users, BarChart3, ChevronRight, Bell, Edit, Star, TrendingUp, DollarSign, Eye, Share2, Copy, Trash2, Link2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DesktopProductDetails = () => {
 const product = {
    name: 'Premium Leather Bag',
    status: 'In Stock',
    price: '$7,560.00',
    sales: 42,
    views: 1204,
    rating: 4.9,
    reviews: 124,
    description: 'Crafted from top-grain Italian leather, the Premium Leather Bag is designed for the modern professional. Featuring a sleek silhouette and reinforced brass hardware, it balances style with rugged durability.',
    features: [
      'Padded compartment for up to 15" laptops',
      'Water-resistant vegetable-tanned leather',
      'Ergonomic shoulder strap with memory foam',
      'Hand-stitched detailing for lifetime longevity'
    ],
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA3RaHvkVaVmelAl0StPzfHt_tXeTEfIMBn-oMruiCSGc4DFUsHH2bWvPo2V0vWSZ69OMgkSyi9J8OMDCbDlwEkn4ZUEHbnYaG4PwJT3YAB7mTyvciB3MVxXsqe3KUx6mPBEu6ssnhilU1AZRpFNKDNa4e0cG70a0cgE30CBVRxetCPP7rWqtlfUEmYaGuUFydOsJq6gOQvGkvoSd_AgNYvyILdKW2y41rxVsEdSEpeJvnk7Ld0LdPngbBpeeS3Li0CCboZuw2Z-eC1',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoZ2Qdy8zqF1KnB5I5QLMpaF-3pjZe4aegK_B2fm6uMFg4ZjDRck7ea7SgbIiDrlC1tuIbqKta1i-HeEOoCf4Y74aad2K3tGgTPlSuTAdNhI7ikNVHCr49SR1pAojGRrJnMrPWk6ukIt-ZDdyAsnXkgGeL9BJ9064TkAIS_oCHeNzt1x8LIGzm8j-cD-XC828g1W1BdV4hX-o0_utPv5ffNU4bTJXtLNUeRLGcJicu9z1DxFB3SN5ZDdGefcc4DgnD_b7jkm4QU8iS',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBdmLTaxu1a4IVdZbe34jrsmFGqRk7Eb35NNJx25cYmW4_l6SYYbMPTq7zxNXzmdJ9UIXyo77US9b161FkIvw7c2v9a84Yi7Ld-S7fVVzvb__1buqWxEdMaPUAKux0qwuqSU5WA9kvlSQqvvIlZLarK8P1QTt0jscYvd_XQaOFkAD53sFq9jTAt8XXqtiYdlvtVQVDP7a87ZwjKS0Lul5PG4WV5H_nIUK4gJyI_YXRat5fXY68-sI5MB-NkDuibtYzROeZ6cgUeCuHq',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsZrPiqVCVrDYSHqiuj6iVbdJ6jniWaEEX4BhgsaZEi4cyvpQftEq627dvUoQqHwFX80IgDVP5gvwEQQJpGqcp9lrEuIpP0sEnDPW5gaNngfzKt5ob7Z7sSGM3YbYhARzQUnVBQnjAvw4SkLzQ-wIasPwK0PyU9slyDfEYzZv4Au6VtTZ4e9XbtAYFeIg_sit4HoNf3vb82htFHAuW2C5t2xxBIH7AaGZFz1C6uMipkNs43KHG67CqE7u_77PCYIbCQbMBPS4kUWBq'
    ],
    inventory: [
      { color: 'Mahogany Brown', stock: 18 },
      { color: 'Midnight Black', stock: 5 },
      { color: 'Cognac Tan', stock: 0 }
    ]
  };



  return (
    <div className="space-y-10">
      <header className="h-16 w-full fixed top-0 z-40 border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-8">
        <div className="flex items-center gap-2">
          <span className="text-[14px] leading-[20px] text-[#424656]">Products</span>
          <ChevronRight size={16} className="text-[#727687]" />
          <span className="text-[14px] leading-[20px] text-[#0050cb] font-bold">{product.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#E6F0FF] text-[#0050cb] px-4 py-2 rounded-lg text-[14px] leading-[20px] hover:bg-[#b3c5ff] transition-all">
            Point of Sale
          </button>
          <button className="bg-[#0050cb] text-white px-4 py-2 rounded-lg text-[14px] leading-[20px] hover:shadow-md transition-all">
            View Store
          </button>
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-[#c2c6d8]">
            <button className="text-[#424656] p-2 hover:bg-[#eeeef0] rounded-full transition-all">
              <Bell size={20} />
            </button>
            <img
              className="w-8 h-8 rounded-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnmR3I5nNivdj__mye2x4PRVUYOJu9jytGratrBHKjNlsD7KiNd19zW6qxpVStlHZ8gYtxKEUOs6LW2Q2z-887hucENL1mJKZsmjew-OKHBQHkKN694-t8wvLdtfvSWd9lKMR0Mg7gV5QrYwP5mjHSMQIEk-sRIBQZAWznC8_fXOnJPXliicNCDrU1YMKSAKIoTua7NB18H8zyTU-hsQ2YiexbuOrVRad7kWVna1qV1jfvRqjj56sBnciBJ5SXiMaN_3C2xu2ktbry"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-16 min-h-screen">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Page Header Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">{product.name}</h2>
              <span className="px-3 py-1 bg-[#dae1ff] text-[#001849] rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-medium border border-[#b3c5ff]">
                {product.status}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white border border-[#c2c6d8] text-[#1a1c1e] px-6 py-2.5 rounded-lg text-[16px] leading-[24px] hover:bg-[#eeeef0] transition-all">
                <Edit size={20} />
                Edit Product
              </button>
            </div>
          </div>

          {/* Dashboard Layout */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column: Details & Content */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Image Gallery Card */}
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#c2c6d8]">
                <div className="relative group h-[480px]">
                  <img
                    className="w-full h-full object-cover"
                    alt={product.name}
                    src={product.images[0]}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                </div>
                <div className="p-4 flex gap-4 overflow-x-auto">
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`w-20 h-20 rounded-lg overflow-hidden cursor-pointer flex-shrink-0 ${
                        idx === 0 ? 'border-2 border-[#0050cb]' : 'border border-[#c2c6d8] opacity-70 hover:opacity-100'
                      } transition-opacity`}
                    >
                      <img className="w-full h-full object-cover" alt={`Product ${idx + 1}`} src={img} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Card */}
              <div className="bg-white rounded-xl p-8 border border-[#c2c6d8] shadow-sm">
                <h3 className="text-[20px] leading-[28px] font-semibold mb-4">Description</h3>
                <div className="text-[#424656] text-[16px] leading-[24px]">
                  <p className="mb-4">{product.description}</p>
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reviews Section */}
              <div className="bg-white rounded-xl p-8 border border-[#c2c6d8] shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[20px] leading-[28px] font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-1 text-[#FF9800]">
                    <Star size={20} fill="#FF9800" />
                    <span className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">{product.rating}</span>
                    <span className="text-[14px] leading-[20px] text-[#424656] ml-1">({product.reviews} reviews)</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-[#c2c6d8]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#d9e3f2] flex items-center justify-center text-[#0050cb] font-bold">JD</div>
                      <div>
                        <p className="text-[14px] leading-[20px] font-bold">John Doe</p>
                        <p className="text-[12px] text-[#424656]">2 days ago</p>
                      </div>
                    </div>
                    <p className="text-[14px] leading-[20px] text-[#424656]">
                      "The quality of the leather is absolutely stunning. It has aged beautifully in the few months I've had it. Highly recommend for anyone looking for a professional work bag."
                    </p>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 text-[#0050cb] font-bold hover:bg-[#eeeef0] rounded-lg transition-colors">
                  View All Reviews
                </button>
              </div>
            </div>

            {/* Right Column: Analytics & Actions */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Performance Metrics */}
              <div className="bg-white rounded-xl p-6 border border-[#c2c6d8] shadow-sm">
                <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-widest mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#dae1ff] rounded-lg text-[#0050cb]">
                        <TrendingUp size={20} />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#424656]">Sales (30d)</p>
                        <p className="text-[24px] leading-[32px] font-bold">{product.sales}</p>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#4CAF50] bg-[#E8F5E9] px-2 py-1 rounded">+12%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#dae1ff] rounded-lg text-[#0050cb]">
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#424656]">Revenue (30d)</p>
                        <p className="text-[24px] leading-[32px] font-bold">{product.price}</p>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#4CAF50] bg-[#E8F5E9] px-2 py-1 rounded">+8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#dae1ff] rounded-lg text-[#0050cb]">
                        <Eye size={20} />
                      </div>
                      <div>
                        <p className="text-[12px] text-[#424656]">Views</p>
                        <p className="text-[24px] leading-[32px] font-bold">{product.views.toLocaleString()}</p>
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#424656] bg-[#eeeef0] px-2 py-1 rounded">Stable</span>
                  </div>
                </div>
              </div>

              {/* Inventory Summary */}
              <div className="bg-white rounded-xl p-6 border border-[#c2c6d8] shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-widest">Inventory Summary</h3>
                  <button className="text-[#0050cb] font-bold text-[12px]">Manage Stock</button>
                </div>
                <div className="space-y-4">
                  {product.inventory.map((item, idx) => {
                    const isOutOfStock = item.stock === 0;
                    return (
                      <div
                        key={idx}
                        className={`flex justify-between items-center p-3 rounded-lg ${
                          isOutOfStock ? 'bg-[#ffdad6] text-[#93000a]' : 'bg-[#eeeef0]'
                        }`}
                      >
                        <span className="text-[14px] leading-[20px]">{item.color}</span>
                        <span className={`font-bold ${isOutOfStock ? 'text-[#93000a]' : 'text-[#1a1c1e]'}`}>
                          {isOutOfStock ? 'Out of stock' : `${item.stock} left`}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 border border-[#c2c6d8] shadow-sm">
                <h3 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase tracking-widest mb-4">Quick Actions</h3>
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[#f3f3f6] transition-all group">
                    <Share2 size={20} className="text-[#424656] group-hover:text-[#0050cb] transition-colors" />
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[10px]">Share</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[#f3f3f6] transition-all group">
                    <Copy size={20} className="text-[#424656] group-hover:text-[#0050cb] transition-colors" />
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[10px]">Duplicate</span>
                  </button>
                  <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-[#ffdad6]/20 transition-all group">
                    <Trash2 size={20} className="text-[#ba1a1a] transition-colors" />
                    <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[10px] text-[#ba1a1a]">Delete</span>
                  </button>
                </div>
              </div>

              {/* Product URL Display */}
              <div className="bg-[#0066ff] p-6 rounded-xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform rotate-12 group-hover:scale-125 transition-transform">
                  <Link2 size={64} />
                </div>
                <h4 className="font-bold text-[16px] leading-[24px] mb-2 relative z-10">Direct Store Link</h4>
                <p className="text-[12px] opacity-80 mb-4 relative z-10">
                  Copy this link to share the product directly on your social channels.
                </p>
                <div className="flex gap-2 relative z-10">
                  <div className="flex-1 bg-white/20 px-3 py-2 rounded-lg text-[12px] leading-[16px] tracking-[0.05em] font-medium truncate">
                    mystore.inventory.com/products/premium-leather-bag
                  </div>
                  <button className="bg-white text-[#0050cb] p-2 rounded-lg hover:scale-105 active:scale-95 transition-all">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopProductDetails;
