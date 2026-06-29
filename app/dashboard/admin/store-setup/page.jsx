"use client"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Store,
  Wallet,
  Search,
  Eye,
  Bell,
  User,
  CheckCircle,
  Radio,
  Menu,
  ShoppingBag,
  Home,
  Compass,
  User as UserIcon,
  Info,
  ArrowRight,
  MessageCircle,
  ChevronDown,
  Upload,
  Globe,
  Clock,
  DollarSign,
  Mail,
  Tag
} from 'lucide-react';

const page = () => {
    const [storeName, setStoreName] = useState("Nnaemeka's Boutique");
  const [contactEmail, setContactEmail] = useState('hello@nnaemeka.com');
  const [currency, setCurrency] = useState('NGN');
  const [timezone, setTimezone] = useState('WAT');
  const [description, setDescription] = useState('');

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' }
  ];

  const settingsItems = [
    { icon: Store, label: 'Store Setup', active: true },
    { icon: Wallet, label: 'inventory Wallet' }
  ];

  const setupSteps = [
    { label: 'Store Identity', completed: true },
    { label: 'Payment', completed: true },
    { label: 'Shipping', completed: true },
    { label: 'Domain Setup', completed: false }
  ];

  const featuredProducts = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDBOKasPiukG8wCF5Yq8m2y3hrhneX_Jn9_8jAulWwtBoQy6QnyI8FqXrKLOZ3S5tMxZomjO_HzjE1G-0H6YKp7J89pbuqWIlLPh2374j03w5X5yeUihVtSGQNyXo938CrFhAE1G1tP84o8f4UON0G831db2KlcAgACOQnPh1FNrybuwqbZGPfiViSJnDuF6OPDL9ofsk8eHpF1XbfASKZVq4Z2bZ19tgVSSZu20HdtedJhW2gl60rzjKz8wuZUCFYxKymjJgQQycuW',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDiB3YSFU4Zlg9SI2nzIzOOh755bgWx-18IuTVXOXgThcLAsETuGi4UuK6Y4Q_pVsv9MdKI0N0yr4KwLASTQRV9k9aYwagYR_b9Ut2LvmjLJOSSq7tR9aau2rbJxqsgjOIRlhlI89SgP2hq65a60BTbASF3eKsdg7EwVZAKANb0SgnrhXAtxeWYzNuOcB_BJ-aq5JYe7A_IooondNpSBSc8ZUXlEGGdnMreoegGhKkcN5tIOOjY58fUAz-oH5aCewfVBUtn-s0g96xV'
  ];

  const getStepIcon = (completed) => {
    return completed ? (
      <CheckCircle size={20} className="text-green-600" fill="#4CAF50" />
    ) : (
      <Radio size={20} className="text-[#0050cb]" />
    );
  };
  return (
    <div>
         <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-[#f9f9fc] border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center gap-4 bg-[#f3f3f6] px-4 py-2 rounded-lg w-96 border border-transparent focus-within:border-[#0050cb] transition-all">
          <Search size={20} className="text-[#555f6c]" />
          <input
            className="bg-transparent border-none focus:ring-0 w-full text-[14px] leading-[20px] outline-none"
            placeholder="Search orders, products..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#0050cb] border border-[#0050cb] font-bold text-[14px] leading-[20px] hover:bg-[#0066ff] hover:text-white transition-all">
            <Eye size={18} />
            View Store
          </button>
          <button className="p-2 text-[#555f6c] hover:bg-[#eeeef0] rounded-full transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-[#c2c6d8]">
            <div className="text-right">
              <p className="text-[14px] leading-[20px] font-bold">Nnaemeka U.</p>
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">Merchant</p>
            </div>
            <img
              className="w-10 h-10 rounded-full border-2 border-[#0066ff] object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFYlizt9a0LevQrIETy0l-fn0SUzPd1LEnQiPGuFPvoecsjlPkWFNmHIMoRz7ZNzX2A8jg3tG61_nzpQnRL7E8QpjMv-mJngHq35bigVZ25RrZWluRG5mHpXu2PFsjvITSNd-j96nbJX7eLYPhql2hoZww9p72Tbm4wpNyHQknrBAPHo5kybTk-rAwhTQIBtUyuPKbtICFIJm2NaKH2nQXhtyEatzpdvXwUQ5WsINJ9EAT3Rva-_fLbZT082PXwDovmT1iBCccvdjI"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-24 pr-8 pb-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Store Setup</h2>
              <p className="text-[14px] leading-[20px] text-[#555f6c] mt-1">Configure your online storefront and business details.</p>
            </div>
            <button className="bg-[#0050cb] text-white px-8 py-3 rounded-lg font-bold text-[14px] leading-[20px] shadow-lg shadow-[#0050cb]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Save Changes
            </button>
          </header>

          <div className="grid grid-cols-12 gap-6">
            {/* Left: Progress & Forms */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Checklist Progress */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-[20px] leading-[28px] font-semibold">Setup Progress</h3>
                  <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#0050cb] font-bold bg-[#0066ff]/10 px-3 py-1 rounded-full">75% Complete</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {setupSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        step.completed
                          ? 'bg-green-50 border border-green-100'
                          : 'bg-[#0066ff]/10 border border-[#0050cb]/20 animate-pulse'
                      }`}
                    >
                      {getStepIcon(step.completed)}
                      <span className={`text-[14px] leading-[20px] font-semibold ${
                        step.completed ? 'text-green-800' : 'text-[#0050cb]'
                      }`}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Store Information Form */}
              <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                <h3 className="text-[20px] leading-[28px] font-semibold mb-6">Store Information</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Store Name</label>
                      <input
                        className="w-full p-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.25)] outline-none transition-all text-[14px] leading-[20px]"
                        type="text"
                        value={storeName}
                        onChange={(e) => setStoreName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Contact Email</label>
                      <input
                        className="w-full p-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.25)] outline-none transition-all text-[14px] leading-[20px]"
                        type="email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Currency</label>
                      <select
                        className="w-full p-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.25)] outline-none transition-all text-[14px] leading-[20px] appearance-none"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                      >
                        <option value="NGN">Nigerian Naira (NGN)</option>
                        <option value="USD">US Dollar (USD)</option>
                        <option value="GBP">British Pound (GBP)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Timezone</label>
                      <select
                        className="w-full p-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.25)] outline-none transition-all text-[14px] leading-[20px] appearance-none"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                      >
                        <option value="WAT">(GMT +01:00) West Africa Time</option>
                        <option value="UTC">(GMT +00:00) UTC</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Store Logo</label>
                    <div className="flex items-center gap-6 p-6 border-2 border-dashed border-[#c2c6d8] rounded-xl bg-[#f9f9fc] hover:bg-[#f3f3f6] transition-all cursor-pointer group">
                      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center border border-[#c2c6d8] overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          alt="Store logo"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8Eo3MTiK-9MY0WWeQuhWGHUoMmWWckmdn7UpG5W-wiPc43BJBSLbQ0iK_oBEHgr3JkIpEXCyCmU800PhMLNkbHsj2j2A7Fl4zQHhN3eMycgTwkI2NnmM-kxieZGW5s50WL6j9uVCs6i08rshrTNqWz5fOBElRwwDKZwGhzUPaIoO4wvuYErl0WpNAcIm7A6jdvUhmCNdUZKYGOwkuIBkeYWEn6-Y3B34ujWfpEEtzkwbAVSaaKJnt7aFXe-_wDJLfUn5t03Kiji00"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="text-[14px] leading-[20px] font-bold text-[#0050cb] group-hover:underline">Click to change logo</p>
                        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">SVG, PNG or JPG (Max. 800x800px)</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase font-semibold">Store Description</label>
                    <textarea
                      className="w-full p-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.25)] outline-none transition-all text-[14px] leading-[20px] resize-none"
                      placeholder="Tell your customers about your store..."
                      rows="4"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* Right: Mobile Preview */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <section className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
                  <h3 className="text-[20px] leading-[28px] font-semibold mb-6">Mobile Preview</h3>
                  {/* Phone Frame */}
                  <div className="relative mx-auto w-[280px] h-[560px] bg-[#1a1c1e] rounded-[40px] p-3 shadow-2xl border-[6px] border-[#2f3133]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1c1e] rounded-b-2xl z-10"></div>
                    {/* Screen Content */}
                    <div className="w-full h-full bg-white rounded-[32px] overflow-hidden flex flex-col">
                      {/* Mobile Nav */}
                      <div className="p-4 border-b border-[#c2c6d8] flex justify-between items-center bg-white">
                        <div className="w-8 h-8 rounded-full bg-[#0066ff]/10 flex items-center justify-center">
                          <Menu size={16} className="text-[#0050cb]" />
                        </div>
                        <span className="font-bold text-sm tracking-tight text-[#0050cb]">Nnaemeka's Boutique</span>
                        <div className="flex gap-2">
                          <Search size={20} className="text-[#555f6c]" />
                          <ShoppingBag size={20} className="text-[#555f6c]" />
                        </div>
                      </div>
                      {/* Hero */}
                      <div className="h-40 bg-[#eeeef0] relative">
                        <img
                          className="w-full h-full object-cover opacity-80"
                          alt="Hero banner"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxLFGaY49t1-0jDaSrPxop8RqYsDNWqv1ctacdlIbIfw2ErP3qUgahzCm9-FU88DE2PgGNr2W9UkdLzUUDsIdm5UNPBZjPo2l8X493tvbgJBQkiz783NpOSbrPuYSoTabu6G5WDtn4TZdJ0PLqJSW_UC940NQ7u1Tf9dEl0T8Bw15ekrDG8G4_mGZxm3D4TwLwGKPciMWgSGlsAs4VBerzRIbH889dRwP6T0JUDriteRH5sRgoZR2qThHQ_IY7gXYIoNr9ovhFlC_7"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                          <p className="text-white font-bold text-lg leading-tight">New Summer<br/>Collection 2024</p>
                        </div>
                      </div>
                      {/* Products Grid */}
                      <div className="flex-1 p-4 overflow-y-auto bg-[#f9f9fc]">
                        <p className="font-bold text-xs mb-3 text-[#555f6c] uppercase">Featured Products</p>
                        <div className="grid grid-cols-2 gap-3">
                          {featuredProducts.map((img, idx) => (
                            <div key={idx} className="bg-white p-2 rounded-lg shadow-sm">
                              <div className="h-24 bg-[#eeeef0] rounded-md mb-2 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Product" src={img} />
                              </div>
                              <div className="h-2 w-full bg-[#eeeef0] rounded mb-1"></div>
                              <div className="h-2 w-2/3 bg-[#0050cb]/20 rounded"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* Bottom Nav */}
                      <div className="p-3 border-t border-[#c2c6d8] flex justify-around items-center bg-white">
                        <Home size={20} className="text-[#0050cb]" fill="#0050cb" />
                        <Compass size={20} className="text-[#555f6c]" />
                        <UserIcon size={20} className="text-[#555f6c]" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] mt-6 italic">Changes update in real-time</p>
                </section>

                <section className="bg-[#0050cb]/5 border border-[#0050cb]/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <Info size={20} className="text-[#0050cb] mt-0.5" />
                    <div>
                      <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e] mb-1">Need help setting up?</p>
                      <p className="text-[14px] leading-[20px] text-[#555f6c] mb-4">Our support team is available 24/7 to help you configure your store for maximum sales.</p>
                      <button className="text-[#0050cb] font-bold text-[14px] leading-[20px] flex items-center gap-1 hover:underline">
                        Read Setup Guide
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page