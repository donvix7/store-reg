"use client";

import { saveProduct } from '@/lib/actions';
import getInventory from '@/lib/service';
import { Fingerprint, Grid, Factory, Truck, DollarSign, Info, CheckCircle2, BarChart3, Image as ImageIcon, Plus, FileStack, LayoutDashboard, Package, ShoppingCart, Users, Wallet, Megaphone, Ruler, Palette, Bell, CloudUpload, Trash2, Eye, Calendar, Store, Globe, ShoppingBag, Lightbulb, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function AddProductPage() {

const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [taxEnabled, setTaxEnabled] = useState(false);
  const [sku, setSku] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [isOnlineStoreEnabled, setIsOnlineStoreEnabled] = useState(true);
  const [isInstagramEnabled, setIsInstagramEnabled] = useState(false);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products', active: true },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' }
  ];

  const variations = [
    { icon: Ruler, name: 'Size: Large', sku: 'BUM-LEA-L', qty: 45 },
    { icon: Palette, name: 'Color: Dark Brown', sku: 'BUM-LEA-DB', qty: 55 }
  ];

  const uploadedImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1kLqa4nRsnEacwcC-ffTLleZ425HMZz6M6T1Yl_RczwgiHPmGnAplA85OpO9b8Ft0E1bKtN28Kbsh_YcSPZkVNJ2R0P1cu8eVUWOnPY6sYKKmmHZq2pf-qsBapikP1_tzNNUBlByXwMXWs0tjMC3nFjJDUpVOEXlavqz0IdtHlVK99fjjvJHRRHfxrRolj3vM2X_K4dpYlD7-AW4aktqY1XOMSY6e8VlnQVW5I-sjBSVGYcGlHZ6s7jt2pXjESMRCoK9umAu1zfy6'
  ];
  return (
    <div className="p-4 ">
       <header className="h-16 w-full sticky top-0 z-40 flex justify-between items-center px-6 border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <h1 className="text-[20px] leading-[28px] font-semibold">Add Product</h1>
            <div className="h-4 w-[1px] bg-[#c2c6d8]"></div>
            <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">CATALOG / NEW</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-[#0050cb] font-semibold hover:bg-[#f3f3f6] rounded-lg transition-all">
              Point of Sale
            </button>
            <button className="bg-[#0066ff] text-white px-4 py-2 rounded-lg font-semibold hover:scale-98 transition-all">
              View Store
            </button>
            <button className="p-2 text-[#424656] hover:bg-[#f3f3f6] rounded-full">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#eeeef0] border border-[#c2c6d8] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAe_FpBxEqY83DEf5xLRjuunIgThiIC1iAoypTgwo4C9IkQQ7LIVvd0IaY06aPf2CwvRlrSgJcy6ZRkM4Uq3mMnI3LnKErHKrLtSMHdyeWPyQYrIaNiH21J6j0WQzKx-fEWebbKtHnGrH6BHmcit5LBe2IiUOwE53pIYTPtmopnJT7ytbxAurwQN6EjPtUYm2PWEz5wI40f_32-8Gv2bytmRbgx-kkdMK2rDWr5tEgnLVJei4SE_9LjcEmRxTHuBMvFB0tIZaeUliT"
              />
            </div>
          </div>
        </header>

        {/* Product Form Content */}
        <main className="p-6 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Form Sections */}
          <div className="lg:col-span-8 space-y-6">
            {/* Product Information */}
            <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <h2 className="text-[20px] leading-[28px] font-semibold mb-4">Product Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Product Name</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] placeholder:text-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="e.g. Vintage Leather Messenger Bag"
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Description</label>
                  <textarea
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] placeholder:text-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all resize-none"
                    placeholder="Tell your customers more about the product features, benefits and style..."
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Category</label>
                    <select
                      className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all appearance-none"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">Select Category</option>
                      <option value="bags">Bags &amp; Accessories</option>
                      <option value="electronics">Electronics</option>
                      <option value="home">Home Decor</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Tags</label>
                    <input
                      className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                      placeholder="Leather, Luxury, Travel"
                      type="text"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Media Upload */}
            <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] leading-[28px] font-semibold">Product Media</h2>
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">MAX 5 IMAGES</span>
              </div>
              <div className="border-2 border-dashed border-[#c2c6d8] rounded-xl p-10 flex flex-col items-center justify-center bg-white hover:bg-[#f3f3f6] transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#0050cb] mb-4 group-hover:scale-110 transition-transform">
                  <CloudUpload size={32} />
                </div>
                <p className="text-[16px] leading-[24px] font-semibold text-[#1a1c1e] mb-1">Click to upload or drag and drop</p>
                <p className="text-[14px] leading-[20px] text-[#424656]">PNG, JPG or WEBP (max. 5MB per image)</p>
              </div>
              <div className="grid grid-cols-5 gap-2 mt-4">
                {uploadedImages.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-lg bg-[#eeeef0] border border-[#c2c6d8] flex items-center justify-center overflow-hidden relative group">
                    <img className="w-full h-full object-cover" alt="Product" src={img} />
                    <button className="absolute top-1 right-1 bg-[#ba1a1a] text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <X size={12} />
                    </button>
                  </div>
                ))}
                <div className="aspect-square rounded-lg border border-dashed border-[#c2c6d8] flex items-center justify-center text-[#c2c6d8]">
                  <Plus size={24} />
                </div>
              </div>
            </section>

            {/* Pricing */}
            <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <h2 className="text-[20px] leading-[28px] font-semibold mb-4">Pricing &amp; Tax</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Sale Price (₦)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[24px] leading-[32px] font-bold focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="0.00"
                    type="number"
                    value={salePrice}
                    onChange={(e) => setSalePrice(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Regular Price (₦)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[24px] leading-[32px] font-bold text-[#424656] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="0.00"
                    type="number"
                    value={regularPrice}
                    onChange={(e) => setRegularPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Cost Price (₦)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[24px] leading-[32px] font-bold text-[#424656] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="0.00"
                    type="number"
                    value={costPrice}
                    onChange={(e) => setCostPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <input
                  className="rounded border-[#c2c6d8] text-[#0050cb] focus:ring-[#0066ff] h-5 w-5"
                  id="tax"
                  type="checkbox"
                  checked={taxEnabled}
                  onChange={(e) => setTaxEnabled(e.target.checked)}
                />
                <label className="text-[14px] leading-[20px] text-[#1a1c1e]" htmlFor="tax">Charge tax on this product</label>
              </div>
            </section>

            {/* Inventory */}
            <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[20px] leading-[28px] font-semibold">Inventory</h2>
                <button className="text-[#0050cb] font-semibold text-[14px] leading-[20px] flex items-center gap-1 hover:underline">
                  <Plus size={16} /> Add Variation
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">SKU (Stock Keeping Unit)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="BUM-LEA-001"
                    type="text"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Stock Quantity</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="100"
                    type="number"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 space-y-4">
                {variations.map((variation, idx) => {
                  const Icon = variation.icon;
                  return (
                    <div key={idx} className="p-4 bg-[#f3f3f6] rounded-lg border border-[#c2c6d8] flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded border border-[#c2c6d8] flex items-center justify-center">
                          <Icon size={20} className="text-[#727687]" />
                        </div>
                        <div>
                          <p className="text-[14px] leading-[20px] font-bold">{variation.name}</p>
                          <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">SKU: {variation.sku} | Qty: {variation.qty}</p>
                        </div>
                      </div>
                      <button className="text-[#ba1a1a] hover:bg-[#ffdad6] p-2 rounded-full transition-colors">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Shipping */}
            <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <h2 className="text-[20px] leading-[28px] font-semibold mb-4">Shipping</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Weight (kg)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="1.2"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Length (cm)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="40"
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Width (cm)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="30"
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-1 uppercase">Height (cm)</label>
                  <input
                    className="w-full bg-white border border-[#c2c6d8] rounded-lg p-3 text-[14px] leading-[20px] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all"
                    placeholder="10"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Actions & Status */}
          <div className="lg:col-span-4 space-y-6">
            {/* Publish Widget */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0] sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[20px] leading-[28px] font-semibold">Publish</h3>
                <span className="px-3 py-1 bg-[#eeeef0] text-[#424656] text-[12px] leading-[16px] tracking-[0.05em] font-medium rounded-full">DRAFT</span>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] leading-[20px] text-[#424656] flex items-center gap-2">
                    <Eye size={16} /> Visibility
                  </span>
                  <span className="font-bold text-[14px] leading-[20px]">Public</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] leading-[20px] text-[#424656] flex items-center gap-2">
                    <Calendar size={16} /> Publish Date
                  </span>
                  <span className="font-bold text-[14px] leading-[20px]">Immediately</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] leading-[20px] text-[#424656] flex items-center gap-2">
                    <Store size={16} /> Storefront
                  </span>
                  <span className="text-[#0050cb] font-bold text-[14px] leading-[20px]">Enabled</span>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-[#0066ff] text-white py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-all active:scale-95 shadow-lg shadow-[#0066ff]/20">
                  Save Product
                </button>
                <button className="w-full bg-[#d9e3f2] text-[#5b6572] py-3 rounded-lg font-bold hover:bg-[#d9e3f2] transition-all">
                  Save as Draft
                </button>
                <button className="w-full bg-transparent text-[#ba1a1a] py-2 font-bold text-[14px] leading-[20px] hover:bg-[#ffdad6] rounded-lg transition-all">
                  Discard Changes
                </button>
              </div>
            </div>

            {/* Sales Channels */}
            <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#eeeef0]">
              <h3 className="text-[20px] leading-[28px] font-semibold mb-4">Sales Channels</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#dae1ff] flex items-center justify-center">
                      <Globe size={16} className="text-[#0050cb]" />
                    </div>
                    <span className="text-[14px] leading-[20px]">Online Store</span>
                  </div>
                  <div
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${
                      isOnlineStoreEnabled ? 'bg-[#0050cb]' : 'bg-[#c2c6d8]'
                    }`}
                    onClick={() => setIsOnlineStoreEnabled(!isOnlineStoreEnabled)}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                      isOnlineStoreEnabled ? 'right-0.5' : 'left-0.5'
                    }`}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#e8e8ea] flex items-center justify-center">
                      <ShoppingBag size={16} className="text-[#424656]" />
                    </div>
                    <span className="text-[14px] leading-[20px]">Instagram Store</span>
                  </div>
                  <div
                    className={`w-10 h-5 rounded-full relative cursor-pointer transition-colors ${
                      isInstagramEnabled ? 'bg-[#0050cb]' : 'bg-[#c2c6d8]'
                    }`}
                    onClick={() => setIsInstagramEnabled(!isInstagramEnabled)}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                      isInstagramEnabled ? 'right-0.5' : 'left-0.5'
                    }`}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips / Guidance */}
            <div className="bg-[#dae1ff]/30 rounded-xl p-6 border border-[#dae1ff]">
              <div className="flex items-start gap-3">
                <Lightbulb size={20} className="text-[#0050cb] mt-0.5" />
                <div>
                  <p className="font-bold text-[#003fa4] mb-1">Selling Tip</p>
                  <p className="text-[14px] leading-[20px] text-[#3e4853] leading-relaxed">
                    Products with high-quality, clear images sell up to 40% more. Try using a plain background for best results!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
    </div>
  );
}