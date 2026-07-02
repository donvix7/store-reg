"use client"
import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Megaphone,
  Puzzle,
  Settings,
  MessageCircle,
  ChevronDown,
  Bell,
  User,
  Store,
  Download,
  UserPlus,
  Users as UsersIcon,
  Mail,
  Upload,
  Search,
  Filter,
  MoreVertical,
  Plus,
  ArrowUp,
  ArrowDown,
  Eye,
  MoreHorizontal,
  HelpCircle
} from 'lucide-react';
import { getCustomerGroups, getCustomers, getNewsletterSubscribers } from '@/lib/service';

const page = () => {
  const [activeTab, setActiveTab] = useState('Customers');
  const [stats, setStats] = useState([]);
  const [group, setGroup] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadData = async() => {
    const res = await getCustomers();
    const res2 = await getCustomerGroups();
    const res3 = await getNewsletterSubscribers();

    if(res.success){
      setStats(res.data);
      console.log(res.data)
    }
    else{
      console.log(res.message)
    }
    if(res2.success){
      setGroup(res2.data);

      console.log(res2.data)
    }
    else{
      console.log(res2.message)
    }
    if(res3.success){
      setNewsletter(res3.data);
      console.log(res3.data)
    }
    else{
      console.log(res3.message)
    }
  }

  useEffect(() => {
    loadData();
  }, []);
  
 const stat =[{
   label: 'Total Customers', value: stats.length, icon: User, color: 'bg-[#dae1ff] text-[#0050cb]' },
   { label: 'Customer groups', value: group.length, icon: UsersIcon, color: 'bg-[#d9e3f2] text-[#555f6c]' },
   { label: 'Newsletter Subscribers', value: newsletter.length, icon: Mail, color: 'bg-[#ffdbd0] text-[#a33200]' }
 ]    

  const tabs = ['Customers', 'Customer Groups', 'Newsletter'];



  return (
    <div>
        <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-white border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
            <input
              className="w-full pl-10 pr-4 py-2 bg-[#f3f3f6] border-none rounded-full text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
              placeholder="Search invoices, customers..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <Bell size={20} className="text-[#424656]" />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <Settings size={20} className="text-[#424656]" />
          </button>
          <button className="hover:bg-[#eeeef0] rounded-full p-2 transition-transform scale-95 active:scale-90">
            <HelpCircle size={20} className="text-[#424656]" />
          </button>
          <div className="ml-4 flex items-center gap-3 cursor-pointer pl-4 border-l border-[#c2c6d8]">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcpNK9tcRX4-uDuCKjpjvtN5tg5bBj8w4juI-C5YlHzU-CyKkQ76PgXBAEa1cWZiif4vAlgpZGQbdbOzxVMyeu6ZA1uteLBLUQqEMFv3sE4hwJKttwK3v85xPq5y48t4F0XBZiSxxj_lVZcLXY2f9kisyFYqSKabeXuiDO0GnBAm6nLwc99U-FniyOhxkwKoQvtAeICIBuiDmu0X0zvIRBtzqy3kfn5PIkbQGG32nRbqO5J-VjOg2qBx-S-Rh7RROD2AKcx75HsM_1"
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-[14px] leading-[20px] font-semibold text-[#1a1c1e]">Store Admin</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-24 pb-12 px-8 min-h-screen">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Customers</h2>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 border border-[#0050cb] text-[#0050cb] font-semibold text-[14px] leading-[20px] rounded-lg hover:bg-[#dae1ff] transition-all flex items-center gap-2 active:scale-98">
              <Download size={20} />
              Export CSV
            </button>
            <button className="px-6 py-2.5 bg-[#0066ff] text-white font-semibold text-[14px] leading-[20px] rounded-lg shadow-lg shadow-[#0066ff]/20 hover:shadow-[#0066ff]/30 transition-all flex items-center gap-2 active:scale-98">
              <UserPlus size={20} />
              + Add New Customer
            </button>
          </div>
        </div>

        {/* KPI Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stat && stat?.map((stat, index) => {
            const Icon = stat.icon;
            return (
                <div
                  key={index}
                  className="bg-white p-6  border border-[#c2c6d8] flex items-center justify-between group  transition-colors cursor-default"
                >                
                <div className="flex justify-between w-full items-start">
                  <div className=''>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] mb-1 uppercase">{stat.label}</p>
                    <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">
                      {stat.value.toLocaleString()}
                    </h3>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={28} fill={stat.value > 0 ? 'currentColor' : 'none'} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#c2c6d8]/30">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 font-semibold text-[14px] leading-[20px] transition-all ${
                activeTab === tab
                  ? 'text-[#0050cb] border-b-2 border-[#0050cb]'
                  : 'font-medium text-[#424656] hover:text-[#0050cb]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty State Container */}
        {
          stats ? (
            <>
            
          <div className="bg-white rounded-xl shadow-sm border border-[#c2c6d8]/30 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                   {activeTab === "Customers" && [ 
                    "Customer Name",
                    "Email",
                    "Phone Number",
                    "Status",
                    "Actions"
                  ].map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#424656] uppercase">
                        {header}
                    </th>
                  ))}
                   {activeTab === "Newsletter" && [ 
                    "Name",
                    "Email",
                    "Status",
                    "Actions"
                  ].map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#424656] uppercase">
                      <div className="flex items-center gap-2 cursor-pointer">
                        {header}
                        <ChevronDown size={12} className="text-[#727687]" />
                      </div>
                    </th>
                  ))}
                   {activeTab === "Customer Groups" && [ 
                    "Customer Name",
                    "Email",
                    "Phone Number",
                    "Status",
                    "Actions"
                  ].map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left text-[12px] leading-[16px] tracking-[0.05em] font-semibold text-[#424656] uppercase">
                      <div className="flex items-center gap-2 cursor-pointer">
                        {header}
                        <ChevronDown size={12} className="text-[#727687]" />
                      </div>
                    </th>
                  ))}
                  </tr>
                </thead>

                
                  
                
                <tbody className="divide-y divide-[#c2c6d8]/30">
                   {activeTab === "Newsletter" && newsletter?.map((row, index) => (
                    <tr key={index} className="hover:bg-white/50 transition-colors group cursor-pointer">
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#0066ff] font-semibold text-[12px] uppercase">
                            {row.name.charAt(0)}
                          </div>
                          <span className="text-[#1a1c1e] font-semibold text-[14px] leading-[20px]">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className="text-[#424656] text-[14px] leading-[20px]">{row.email}</span>
                      </td>
                     
                      <td className="px-6 py-4 text-left">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] leading-[16px] font-semibold ${
                          row.status === 'Active'
                            ? 'bg-[#d4edda] text-[#155724]'
                            : 'bg-[#ffeeba] text-[#856404]'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                          {row.status}
                        </span>
                      </td>
                     
                      <td className="px-6 py-4 text-left">
                        <button className="p-1.5 text-[#0066ff] hover:bg-[#dae1ff] rounded-lg transition-colors active:scale-95" title="More">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}

                   {activeTab === "Customer Groups" && group?.map((row, index) => (
                    <tr key={index} className="border-b border-[#e4e5ea] hover:bg-[#f8f9fb] transition-colors">
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#0066ff] font-semibold text-[12px] uppercase">
                            {row.name.charAt(0)}
                          </div>
                          <span className="text-[#1a1c1e] font-semibold text-[14px] leading-[20px]">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className="text-[#424656] text-[14px] leading-[20px]">{row.email}</span>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className="text-[#424656] text-[14px] leading-[20px]">{row.phone}</span>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] leading-[16px] font-semibold ${
                          row.status === 'Active'
                            ? 'bg-[#d4edda] text-[#155724]'
                            : 'bg-[#ffeeba] text-[#856404]'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                          {row.status}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-2">
                          
                          <button className="p-1.5 text-[#0066ff] hover:bg-[#dae1ff] rounded-lg transition-colors active:scale-95" title="More">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}


                  {activeTab === "Customers" && stats?.map((row, index) => (
                    <tr key={index} className="border-b border-[#e4e5ea] hover:bg-[#f8f9fb] transition-colors">
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#dae1ff] flex items-center justify-center text-[#0066ff] font-semibold text-[12px] uppercase">
                            {row.name.charAt(0)}
                          </div>
                          <span className="text-[#1a1c1e] font-semibold text-[14px] leading-[20px]">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className="text-[#424656] text-[14px] leading-[20px]">{row.email}</span>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className="text-[#424656] text-[14px] leading-[20px]">{row.phone}</span>
                      </td>
                      <td className="px-6 py-4 text-left">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-[12px] leading-[16px] font-semibold ${
                          row.status === 'Active'
                            ? 'bg-[#d4edda] text-[#155724]'
                            : 'bg-[#ffeeba] text-[#856404]'
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                          {row.status}
                        </span>
                      </td>
                     
                      <td className="px-6 py-4 text-left">
                        <div className="flex items-center gap-2">
                          
                          <button className="p-1.5 text-[#0066ff] hover:bg-[#dae1ff] rounded-lg transition-colors active:scale-95" title="More">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* Rows would go here */}
                </tbody>
              </table>
            </div>
            </>

          ):(
            <>
            <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30 min-h-[500px] flex flex-col items-center justify-center text-center p-12 overflow-hidden relative">
          {/* Decorative atmospheric circles */}
          <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#dae1ff]/20 rounded-full blur-[80px] -z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            {/* Person Illustration Wrapper */}
            <div className="relative mb-8 group">
              <div className="w-32 h-32 rounded-full bg-[#b3c5ff]/30 flex items-center justify-center animate-pulse">
                <div className="w-24 h-24 rounded-full bg-[#0066ff]/10 flex items-center justify-center">
                  <span className="text-[64px] text-[#0050cb]" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>
                    🔍
                  </span>
                </div>
              </div>
              {/* Small decorative pips */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ffdbd0] rounded-full shadow-sm"></div>
              <div className="absolute -bottom-1 -left-4 w-6 h-6 bg-[#d9e3f2] rounded-full shadow-sm opacity-60"></div>
            </div>
            <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2">Add customers to your contact list</h3>
            <p className="text-[16px] leading-[24px] text-[#424656] max-w-md mb-8">
              Start growing your business by building your database. You can add a new customer manually or import your existing contacts in bulk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#0066ff] text-white font-bold text-[14px] leading-[20px] rounded-xl shadow-xl shadow-[#0066ff]/30 hover:bg-[#0050cb] hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95">
                <UserPlus size={20} />
                + Add Customers
              </button>
              <button className="px-8 py-3 bg-[#eeeef0] text-[#424656] font-bold text-[14px] leading-[20px] rounded-xl hover:bg-[#e8e8ea] transition-all flex items-center gap-2 active:scale-95">
                <Upload size={20} />
                Import Contacts
              </button>
            </div>
          </div>
        </div>
            </>

          )
        }
        
      </main>
    </div>
  )
}

export default page