"use client";
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Megaphone,
  Puzzle,
  MoreHorizontal,
  MessageCircle,
  Store,
  CreditCard,
  Settings,
  Bell,
  User,
  Camera,
  Shield,
  Lock,
  Smartphone,
  Mail,
  Phone,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Eye,
  EyeOff,
  Save,
  CreditCard as CreditCardIcon,
  Receipt,
  AlertCircle
} from 'lucide-react';
const page = () => {
     const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions' },
    { icon: MoreHorizontal, label: 'More' },
    { icon: MessageCircle, label: 'Chat Now!' }
  ];

  const bottomNav = [
    { icon: Store, label: 'Store Setup', active: true },
    { icon: CreditCard, label: 'Finance' },
    { icon: Settings, label: 'Operations' }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'store', label: 'Store Info', icon: Store },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCardIcon }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-8 bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#dae1ff] bg-[#eeeef0] flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      alt="Profile"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZf6MSL8jgKAoBtYofzSyUGB5bCQ3or-z_QgDbNx-oawxM4As7pXATb1nqZsW23SIRuLdVSNpmQmz-eYnspN9JcPEp98qb4Tt5BLG-cfSO6nzKkoVHDBcR8YyjD7WhlfGbohrXgOlKo_b5URWHDNybZ5pCeL6ydEobdeTsxQR3vX4D_b7Uvs8B5Z9b9D2Mo2T7IrCG4Zyzl-JnYyyFhI-Lof1ybPyzLSxwT8oKO6CRv5d-JuptSWzHgn2Daq-6J1jPXtz53HCcksph"
                    />
                  </div>
                  <button className="absolute -bottom-2 -right-2 bg-[#0050cb] text-white p-2 rounded-lg shadow-lg hover:scale-105 transition-transform">
                    <Camera size={14} />
                  </button>
                </div>
                <div>
                  <h4 className="text-[20px] leading-[28px] font-semibold">Personal Information</h4>
                  <p className="text-[14px] leading-[20px] text-[#424656]">Update your photo and personal details here.</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Full Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      type="text"
                      value="Adesola Olumide"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Display Name</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      type="text"
                      value="Sola_inventory"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Email Address</label>
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                    type="email"
                    value="adesola@getinventory.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[14px] leading-[20px] text-[#424656]">+234</span>
                    <input
                      className="w-full pl-16 pr-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      type="tel"
                      value="8034567890"
                    />
                  </div>
                </div>
                <div className="pt-4 flex justify-end">
                  <button className="px-8 py-3 bg-[#0050cb] text-white font-bold rounded-lg hover:shadow-lg transition-all active:scale-95" type="button">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            {/* Meta Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0066ff] p-6 rounded-xl text-white overflow-hidden relative">
                <div className="relative z-10">
                  <CheckCircle size={36} className="mb-4" />
                  <h4 className="text-[20px] leading-[28px] font-semibold mb-2">Verified Merchant</h4>
                  <p className="text-[14px] leading-[20px] opacity-90">Your identity has been verified. You have access to all premium features.</p>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <Shield size={160} />
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border-l-4 border-[#cc4204]">
                <h5 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#a33200] font-bold mb-2">LAST LOGIN</h5>
                <p className="text-[14px] leading-[20px] text-[#1a1c1e]">Oct 24, 2023 • 10:45 AM</p>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mt-1">Lagos, Nigeria • IP: 192.168.1.1</p>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Password Change */}
            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#d9e3f2] rounded-xl flex items-center justify-center text-[#0050cb]">
                  <Lock size={24} />
                </div>
                <h4 className="text-[20px] leading-[28px] font-semibold">Change Password</h4>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Current Password</label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      placeholder="••••••••••••"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727687] hover:text-[#0050cb]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">New Password</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      type="password"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase">Confirm New Password</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)] outline-none transition-all text-[14px] leading-[20px]"
                      type="password"
                    />
                  </div>
                </div>
                <div className="pt-4">
                  <button className="px-8 py-3 bg-[#0050cb] text-white font-bold rounded-lg hover:shadow-lg transition-all" type="button">
                    Update Password
                  </button>
                </div>
              </div>
            </div>

            {/* 2FA Toggle */}
            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex items-center justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <Smartphone size={24} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-[20px] leading-[28px] font-semibold">Two-Factor Authentication</h4>
                  <p className="text-[14px] leading-[20px] text-[#424656]">Add an extra layer of security to your account.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={twoFactorEnabled}
                  onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                />
                <div className={`w-14 h-7 bg-[#eeeef0] rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all ${twoFactorEnabled ? 'bg-[#0050cb]' : ''}`}></div>
              </label>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] text-center py-20">
            <Store size={48} className="text-[#c2c6d8] mx-auto mb-4" />
            <h3 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
            <p className="text-[16px] leading-[24px] text-[#424656]">{activeTab === 'store' ? 'Store configuration settings will appear here.' : `Customize your ${activeTab} preferences.`}</p>
          </div>
        );
    }
  };
  return (
    <div>
        <header className="h-16 w-full fixed top-0 z-40 border-b border-[#c2c6d8] bg-white/80 backdrop-blur-md flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <h2 className="text-[20px] leading-[28px] font-semibold text-[#0050cb]">Settings</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-[#0050cb] font-bold hover:bg-[#f3f3f6] transition-all rounded-lg">Point of Sale</button>
          <button className="px-4 py-2 bg-[#0050cb] text-white font-bold rounded-lg hover:opacity-90 transition-all">View Store</button>
          <div className="flex items-center gap-2 ml-4">
            <Bell size={20} className="text-[#424656] cursor-pointer p-2 hover:bg-[#eeeef0] rounded-full" />
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkx61gs3aH063Ec4BgdMRnIi3rxubgTUd2b2RiUCEcfi8xR1-tp3rVivXFXP7A9fBwce5Pm9CTYca1lhOsBt60G4gXULcN1GzyU_xQaZ--y5mdANtoHsDbyFbI-agPyd2vAK3F3TaQ21OB_Um__yhJLLxWpE5W4Za0tCP_7NKC4syBrQhFs2XqJfYLETjgusr0Swx4AnjPG_V7M7Nh31ok-HmBmlg_bnkcLdvhvvwuHzHTYGDPJ6-WWJ_C97CbC9yty3ZRFQUGEQjX"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h3 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold">Account Configuration</h3>
            <p className="text-[16px] leading-[24px] text-[#424656]">Manage your profile, security preferences, and store operations.</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={`px-6 py-3 rounded-full text-[20px] leading-[28px] font-semibold flex items-center gap-2 transition-all ${
                    isActive
                      ? 'bg-[#0066ff] text-white shadow-md'
                      : 'text-[#424656] hover:bg-[#eeeef0]'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </main>
    </div>
  )
}

export default page