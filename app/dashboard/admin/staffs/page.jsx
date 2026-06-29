"use client"
import React, { useState } from 'react'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Badge,
  Puzzle,
  Settings,
  Bell,
  User,
  Plus,
  TrendingUp,
  Users as UsersIcon,
  UserCheck,
  Mail,
  Search,
  Filter,
  MoreVertical,
  Shield,
  Store,
  UserCog,
  ShoppingBag,
  HelpCircle,
  FileText,
  CheckCircle,
  XCircle,
  Eye,
  Clock,
  UserPlus
} from 'lucide-react';

const page = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const staffMembers = [
    {
      id: 1,
      name: 'Chidimma Okafor',
      email: 'chidimma@inventorystore.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 mins ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKXdybdaVdWKfaNXgJMrdKCcRCY0yC0MdP0tb5ek45ruh9ZCMNS2UbNXq1ZBQhSydoRXrQV7xusp6KF6cEQ45aNh2SMasqNX2I0z1XQSIyD018w0oqKmJHCJToMiTffY9fpRZBwjCwOpcA1wsktCrFAGmyIQfVvy50c2K06cBuyHvaWzLeTk18cM-JpvRoGxtcA6Vr_FnrAT5fHzMpQwOQWRE3XI4DzHI3P3to8fCPcrrND21Q3x46u3jOl4c24FFJutf2hXkv5P4N'
    },
    {
      id: 2,
      name: 'Tunde Adebayor',
      email: 'tunde@inventorystore.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '4 hours ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXn-iYSaKKJkYbLj4WbP7Vg-Hd8lNthw0lf2vsqjFzJ4oE44vIZX0BY1lqp3HKZQ4hVSa65StUjKAFfEfQ2tRP5gJld_4tzKEFcB64PF8Y4bPGkKYqQ0PjbFfUEReWJul175sU5TP6_9CkRMc8a9FZL13DtRo8-cyhVph1oitN65SAEMJBo88Fh6pLiol-qBjvMvBfEF8XvGmnb-M1ZvV49pDehlLVWsnThkNqlLuPG5F3dNmy6noWbMP80ZgJ0pHXoDFllx544plU'
    },
    {
      id: 3,
      name: 'Kemi Animashaun',
      email: 'kemi@inventorystore.com',
      role: 'Sales',
      status: 'Inactive',
      lastLogin: '2 days ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1KsOMZPkotapYT_tflgyNAJiugRQbLfQc7hG1MVFTbesdOQhOWmYHHGJyWwDAMZ5d73bkSXVyN4cJW_ERo3VW0cdAEwbl_OsLRpWOYoyLqKpvM0UlwSDK6ZSVAid7nBl076W2MsvEwLtwV-zcQsXAKWret1AEbGisGzvJjYnALqZVdJ7a1qIvTqbOZn9wPZNXSi6VoiyfG7Lt3qpcgYqfi3tFpxOM_YcG25E9vNGYLuWaPx7mCEOTrRgxbozNRTPNnbyhiFl-hGYM'
    },
    {
      id: 4,
      name: 'Emeka Nwosu',
      email: 'emeka@gmail.com',
      role: 'Sales',
      status: 'Pending',
      lastLogin: 'Never',
      avatar: null
    }
  ];

  const roles = [
    {
      name: 'Administrator',
      icon: Shield,
      description: 'Full access to all features, settings, and staff management tools.',
      permissions: ['Financial Access', 'Store Configuration', 'Manage Roles'],
      color: 'border-primary/20'
    },
    {
      name: 'Store Manager',
      icon: UserCog,
      description: 'Manage products, view orders, and handle daily store operations.',
      permissions: ['Inventory Control', 'Customer Management'],
      restricted: ['Staff Salaries & Payouts'],
      color: 'border-outline-variant/30'
    },
    {
      name: 'Sales Officer',
      icon: ShoppingBag,
      description: 'Create orders and view customer profiles. Ideal for floor staff.',
      permissions: ['POS Checkout'],
      restricted: ['Edit Product Prices', 'Export Analytics'],
      color: 'border-outline-variant/30'
    }
  ];

 

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-500';
      case 'Inactive':
        return 'bg-outline-variant';
      case 'Pending':
        return 'bg-[#c2c6d8]';
      default:
        return 'bg-outline-variant';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'Manager':
        return 'bg-secondary-container text-on-secondary-container';
      case 'Sales':
        return 'bg-tertiary-container/20 text-tertiary border-tertiary/30';
      default:
        return 'bg-surface-container text-on-surface-variant';
    }
  };
  return (
    <div>
         <main className=" min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <header className="h-16 w-full sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-[#c2c6d8] flex justify-between items-center px-8">
          <div className="flex items-center gap-4">
            <span className="text-[#424656] text-[14px] leading-[20px]">Store: <strong>Lagos Boutique</strong></span>
          </div>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#f3f3f6] text-[#0050cb] font-semibold hover:bg-[#0066ff]/10 transition-all text-[14px] leading-[20px]">
              Point of Sale
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#0050cb] text-[#0050cb] font-semibold hover:bg-[#0066ff]/5 transition-all text-[14px] leading-[20px]">
              View Store
            </button>
            <div className="flex items-center gap-4 border-l border-[#c2c6d8] pl-6">
              <Bell size={20} className="text-[#424656] cursor-pointer" />
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
                <img
                  className="w-full h-full object-cover"
                  alt="Profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSX_B2eCLsUDuS9BaQ1rsElZuCaRjW-AD3P8dBuQFR00_sq1N4N63OPnujT3t16CTQkTr0TodjFAW999ixW_CQv7SnAryiX2R-YpwH8C00mmR8unavnCt-rowGuPIMHhTDTaxTotqpZu--GCnhLRzqjwY3FS5cIDJkNc4sBgMuz75TiTjRpikQYMYEF8NLk6DO7DFPto8xtYVyMEw2bOGeu6FpPhxpHlAPYgPeIQtJijhRLAOXAJ_12yG-qJE5Q9H4dNw9YNlAKcY6"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-8 space-y-8 max-w-7xl">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Staff Management</h2>
              <p className="text-[14px] leading-[20px] text-[#424656] mt-1">Manage your team members, their roles, and system access levels.</p>
            </div>
            <button className="bg-[#0066FF] hover:bg-[#0050CB] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm transition-all transform active:scale-95">
              <UserPlus size={20} />
              Add Staff Member
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 flex items-center justify-between">
              <div>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Total Staff</p>
                <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mt-1">4</h3>
                <p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
                  <TrendingUp size={14} />
                  +1 this month
                </p>
              </div>
              <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center text-[#0050cb]">
                <UsersIcon size={24} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 flex items-center justify-between">
              <div>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Active Now</p>
                <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mt-1">2</h3>
                <div className="flex items-center gap-2 mt-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-[#424656]">Real-time status</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <UserCheck size={24} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 flex items-center justify-between">
              <div>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase">Pending Invites</p>
                <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mt-1">1</h3>
                <p className="text-xs text-[#424656] mt-2 italic">Awaiting confirmation</p>
              </div>
              <div className="w-12 h-12 bg-[#cc4204]/10 rounded-full flex items-center justify-center text-[#a33200]">
                <Mail size={24} />
              </div>
            </div>
          </div>

          {/* Data Table Section */}
          <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#c2c6d8] flex items-center justify-between bg-[#f3f3f6]">
              <h4 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Staff List</h4>
              <div className="flex gap-2">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
                  <input
                    className="pl-10 pr-4 py-2 border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0066ff]/20 focus:border-[#0050cb] outline-none transition-all"
                    placeholder="Search staff..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="p-2 border border-[#c2c6d8] rounded-lg hover:bg-[#eeeef0] transition-colors">
                  <Filter size={20} />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Staff Member</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c2c6d8]/40">
                  {staffMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-white transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#0050cb]/10 border border-[#0050cb]/20 flex items-center justify-center text-[#0050cb] font-bold overflow-hidden">
                            {member.avatar ? (
                              <img className="w-full h-full object-cover" alt={member.name} src={member.avatar} />
                            ) : (
                              <User size={20} />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-[16px] leading-[24px] text-[#1a1c1e]">{member.name}</p>
                            <p className="text-xs text-[#424656]">{member.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full font-semibold text-xs border ${getRoleColor(member.role)}`}>
                          {member.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`}></div>
                          <span className={`text-[14px] leading-[20px] font-medium ${member.status === 'Pending' ? 'text-[#424656]' : 'text-[#1a1c1e]'}`}>
                            {member.status}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[14px] leading-[20px] text-[#424656]">{member.lastLogin}</td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-[#727687] hover:text-[#0050cb] transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#f3f3f6] border-t border-[#c2c6d8] flex items-center justify-between">
              <p className="text-[14px] leading-[20px] text-[#424656]">Showing 1-4 of 4 staff members</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 rounded border border-[#c2c6d8] text-[#727687] bg-white disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 rounded border border-[#c2c6d8] bg-white hover:bg-[#eeeef0] transition-colors">Next</button>
              </div>
            </div>
          </div>

          {/* Roles and Permissions Section */}
          <section className="space-y-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Roles &amp; Permissions</h3>
              <p className="text-[14px] leading-[20px] text-[#424656]">Define and manage what each staff role can access in your store dashboard.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roles.map((role, index) => {
                const Icon = role.icon;
                return (
                  <div key={index} className={`bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border ${role.color} relative overflow-hidden group`}>
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Icon size={64} />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={24} className={index === 0 ? 'text-[#0050cb]' : index === 1 ? 'text-[#5b6572]' : 'text-[#a33200]'} />
                      <h4 className="font-bold text-lg text-[#1a1c1e]">{role.name}</h4>
                    </div>
                    <p className="text-sm text-[#424656] mb-6">{role.description}</p>
                    <div className="space-y-2 mb-8">
                      {role.permissions.map((perm, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-green-600">
                          <CheckCircle size={14} />
                          {perm}
                        </div>
                      ))}
                      {role.restricted && role.restricted.map((rest, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#ba1a1a]">
                          <XCircle size={14} />
                          {rest}
                        </div>
                      ))}
                    </div>
                    <button className={`w-full py-2 border font-semibold rounded-lg transition-all text-sm ${
                      index === 0
                        ? 'border-[#0050cb] text-[#0050cb] hover:bg-[#0066ff]/5'
                        : 'border-[#c2c6d8] text-[#424656] hover:bg-[#eeeef0]'
                    }`}>
                      Edit Permissions
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-auto px-8 py-6 bg-[#eeeef0] border-t border-[#c2c6d8] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-8">
            <a className="flex items-center gap-2 text-[#424656] text-[14px] leading-[20px] hover:text-[#0050cb] transition-colors" href="#">
              <HelpCircle size={20} />
              Support Center
            </a>
            <a className="flex items-center gap-2 text-[#424656] text-[14px] leading-[20px] hover:text-[#0050cb] transition-colors" href="#">
              <FileText size={20} />
              Privacy Policy
            </a>
          </div>
          <div className="text-[#424656] text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase tracking-wider">
            © 2024 inventory TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default page