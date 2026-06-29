"use client"
import React, { useState } from 'react';
import {
  Shield,
  Search,
  Bell,
  Settings,
  User,
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Plus,
  MoreVertical,
  TrendingUp,
  Zap,
  ShieldCheck,
  Mail,
  X,
  Send,
  LogIn,
  UserPlus,
  Download,
  AlertCircle
} from 'lucide-react';

const StaffManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedRole, setSelectedRole] = useState('admin');
  const [enableLogin, setEnableLogin] = useState(true);

  const staffMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      email: 'alex@royalprecision.com',
      initials: 'AJ',
      role: 'Admin',
      status: 'Online',
      lastActive: '2 mins ago',
      color: 'bg-[#dae1ff] text-[#001849]'
    },
    {
      id: 2,
      name: 'Sarah Lee',
      email: 'sarah.l@royalprecision.com',
      initials: 'SL',
      role: 'Manager',
      status: 'Offline',
      lastActive: '4 hours ago',
      color: 'bg-[#ffdbd0] text-[#390c00]'
    }
  ];

  const stats = [
    {
      label: 'Total Staff',
      value: '24',
      change: '+2 this month',
      icon: TrendingUp,
      iconColor: 'text-[#0050cb]'
    },
    {
      label: 'Active Now',
      value: '18',
      change: 'High activity',
      icon: Zap,
      iconColor: 'text-[#a33200]'
    },
    {
      label: 'Admins',
      value: '3',
      change: 'Full access',
      icon: ShieldCheck,
      iconColor: 'text-[#727687]'
    },
    {
      label: 'Pending Invites',
      value: '5',
      change: 'Awaiting response',
      icon: Mail,
      iconColor: 'text-[#832600]'
    }
  ];

  const roles = [
    { id: 'admin', label: 'Admin', icon: Shield },
    { id: 'manager', label: 'Manager', icon: Users },
    { id: 'sales', label: 'Sales', icon: ShoppingCart }
  ];

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Adding new staff member...');
    closeModal();
  };

  return (
    <div className="min-h-screen bg-[#f9f9fc] text-[#1a1c1e] font-['Hanken_Grotesk']">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-40 shadow-sm bg-[#f9f9fc] flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-4">
          <span className="text-[20px] leading-[28px] font-bold text-[#0050cb]">Royal Precision</span>
        </div>
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]">
              <Search size={20} />
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#eeeef0] rounded-lg border-none focus:ring-2 focus:ring-[#0050cb]/20 text-[14px] leading-[20px] outline-none"
              placeholder="Search staff, permissions..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[#f3f3f6] transition-colors duration-200 active:scale-95">
            <Bell size={20} className="text-[#555f6c]" />
          </button>
          <button className="p-2 rounded-full hover:bg-[#f3f3f6] transition-colors duration-200 active:scale-95">
            <Settings size={20} className="text-[#555f6c]" />
          </button>
          <div className="h-8 w-8 rounded-full overflow-hidden border border-[#c2c6d8] cursor-pointer active:scale-95">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB06Ck8wIFD_6cuNF-LBE8XC0QVdfanoi_du2vYN6ASWb_Z3-QM3G8EFZB2nyhhhhWIItNP7JZMZhIWTD-eWJCWRvpYvUGBg8QDSpzvmI23rKWoY_73GeCW_cBw8ry9bwLSBnzcMFsFMciXuV5FDYP9weW0uo1lh11NzuJ5SwvyBhiNEUQ_4CE5mtlLxpAOEnocmfhoNFE6vW2zIs8LHIentsiTIxvXBu3JtehC3R7yJgv2agR4wYdVSBFYxKRcqzo1fYKtpp7vYLU5"
            />
          </div>
        </div>
      </header>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[260px] flex flex-col border-r border-[#c2c6d8] bg-white z-30 pt-16">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#0050cb] flex items-center justify-center text-white">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">Admin Portal</h3>
              <p className="text-xs text-[#727687]">Enterprise Tier</p>
            </div>
          </div>
          <nav className="space-y-1">
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <Home size={20} />
              <span className="text-[14px] leading-[20px]">Dashboard</span>
            </a>
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <ShoppingCart size={20} />
              <span className="text-[14px] leading-[20px]">Orders</span>
            </a>
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <Package size={20} />
              <span className="text-[14px] leading-[20px]">Products</span>
            </a>
            <a className="flex items-center gap-4 bg-[#d9e3f2] text-[#5b6572] border-l-4 border-[#0050cb] px-4 py-3 font-semibold rounded-r-lg" href="#">
              <Users size={20} />
              <span className="text-[14px] leading-[20px]">Staff Management</span>
            </a>
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <BarChart3 size={20} />
              <span className="text-[14px] leading-[20px]">Analytics</span>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-[#c2c6d8]">
          <button className="w-full bg-[#0066ff] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 mb-4 hover:brightness-110 transition-all active:scale-95 shadow-sm">
            <Plus size={20} />
            Add New Staff
          </button>
          <nav className="space-y-1">
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <Settings size={20} />
              <span className="text-[14px] leading-[20px]">Settings</span>
            </a>
            <a className="flex items-center gap-4 text-[#3e4853] px-4 py-3 hover:bg-[#e8e8ea] transition-all duration-200 rounded-lg" href="#">
              <AlertCircle size={20} />
              <span className="text-[14px] leading-[20px]">Support</span>
            </a>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-[260px] pt-16 min-h-screen">
        <div className="p-8">
          <header className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Staff Members</h1>
              <p className="text-[#424656] text-[14px] leading-[20px] mt-1">Manage team access and role permissions for your royal precision portal.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-[#e8e8ea] rounded-lg text-[#555f6c] font-semibold hover:bg-[#e2e2e5] transition-colors flex items-center gap-2">
                <Download size={16} />
                Export CSV
              </button>
              <button className="px-4 py-2 bg-[#0050cb] text-white rounded-lg font-semibold shadow-sm hover:brightness-110 transition-all active:scale-95 flex items-center gap-2">
                <UserPlus size={20} />
                Add Member
              </button>
            </div>
          </header>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-[#c2c6d8]/50">
                  <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e] mt-1">{stat.value}</h3>
                  <div className="mt-2 text-sm flex items-center gap-1">
                    <Icon size={14} className={stat.iconColor} />
                    <span className={stat.iconColor}>{stat.change}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Staff Table */}
          <div className="bg-white rounded-xl shadow-sm border border-[#c2c6d8]/50 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                <tr>
                  <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest">Name</th>
                  <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest">Role</th>
                  <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest">Last Active</th>
                  <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-widest"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c2c6d8]/30">
                {staffMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-[#f3f3f6] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center font-bold text-xs`}>
                          {member.initials}
                        </div>
                        <div>
                          <div className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">{member.name}</div>
                          <div className="text-xs text-[#727687]">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-bold rounded uppercase ${
                        member.role === 'Admin' 
                          ? 'bg-[#d9e3f2] text-[#5b6572]' 
                          : 'bg-[#e8e8ea] text-[#424656]'
                      }`}>
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1.5 text-xs font-bold ${
                        member.status === 'Online' ? 'text-[#0050cb]' : 'text-[#727687]'
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${
                          member.status === 'Online' ? 'bg-[#0050cb]' : 'bg-[#727687]'
                        }`}></span>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-[14px] leading-[20px] text-[#424656]">{member.lastActive}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded hover:bg-[#e8e8ea] transition-colors text-[#727687]">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#1a1c1e]/40 backdrop-blur-sm" onClick={closeModal}></div>
          
          {/* Modal Card */}
          <div className="relative bg-[#f9f9fc] rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-[fadeIn_0.3s_ease-out]">
            {/* Header */}
            <div className="px-8 py-6 border-b border-[#c2c6d8] flex justify-between items-center bg-white">
              <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Add New Staff Member</h2>
              <button className="p-1 rounded-full hover:bg-[#f3f3f6] text-[#727687] transition-colors active:scale-95" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit}>
              <div className="px-8 py-8 space-y-6">
                {/* Full Name Field */}
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2 uppercase tracking-wider">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]">
                      <User size={18} />
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-[#f9f9fc] border border-[#c2c6d8] rounded-lg focus:ring-2 focus:ring-[#0050cb]/20 focus:border-[#0050cb] outline-none transition-all text-[14px] leading-[20px]"
                      placeholder="e.g. Johnathan Doe"
                      type="text"
                      required
                    />
                  </div>
                </div>

                {/* Email Address Field */}
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2 uppercase tracking-wider">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]">
                      <Mail size={18} />
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-[#f9f9fc] border border-[#c2c6d8] rounded-lg focus:ring-2 focus:ring-[#0050cb]/20 focus:border-[#0050cb] outline-none transition-all text-[14px] leading-[20px]"
                      placeholder="john@royalprecision.com"
                      type="email"
                      required
                    />
                  </div>
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2 uppercase tracking-wider">Role Assignment</label>
                  <div className="grid grid-cols-3 gap-3">
                    {roles.map((role) => {
                      const Icon = role.icon;
                      const isSelected = selectedRole === role.id;
                      return (
                        <label key={role.id} className="cursor-pointer group">
                          <input
                            type="radio"
                            name="role"
                            value={role.id}
                            className="hidden peer"
                            checked={isSelected}
                            onChange={() => setSelectedRole(role.id)}
                          />
                          <div className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-all group-hover:bg-[#f3f3f6] ${
                            isSelected 
                              ? 'bg-[#0066ff] border-[#0050cb] text-white' 
                              : 'border-[#c2c6d8] text-[#1a1c1e]'
                          }`}>
                            <Icon size={24} className="mb-1" />
                            <span className="text-xs font-bold uppercase tracking-tight">{role.label}</span>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  <p className="mt-2 text-xs text-[#727687] italic">Permissions vary based on the selected role.</p>
                </div>

                {/* Toggle Switch */}
                <div className="flex items-center justify-between p-4 bg-[#f3f3f6] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0050cb] shadow-sm">
                      <LogIn size={20} />
                    </div>
                    <div>
                      <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">Enable Login</p>
                      <p className="text-xs text-[#424656] leading-tight">Allow this user to access the dashboard</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={enableLogin}
                      onChange={() => setEnableLogin(!enableLogin)}
                    />
                    <div className="w-11 h-6 bg-[#c2c6d8] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0050cb]"></div>
                  </label>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-[#c2c6d8] flex gap-4 bg-white">
                <button
                  type="button"
                  className="flex-1 py-3 border border-[#c2c6d8] rounded-lg font-bold text-[#555f6c] hover:bg-[#f3f3f6] transition-colors active:scale-95"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#0050cb] text-white rounded-lg font-bold shadow-md hover:brightness-110 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Invite
                </button>
              </div>
            </form>
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
        /* Custom scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
      `}</style>
    </div>
  );
};

export default StaffManagement;