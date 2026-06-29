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
  Store,
  Search,
  Bell,
  User,
  MapPin,
  Filter,
  Check,
  Mail,
  CheckCircle,
  ShoppingBag,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  TrendingUp,
  Clock,
  ArrowRight,
  Circle,
  CircleCheck,
  CircleAlert
} from 'lucide-react';

const NotificationList = () => {
 const [currentPage, setCurrentPage] = useState(1);
  const [filterUnread, setFilterUnread] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'New Order #82741 Received',
      description: 'Customer "James Carter" just purchased 3 items totaling ₦45,000.',
      category: 'Order',
      categoryColor: 'bg-blue-50 text-blue-700 border-blue-100',
      date: 'Oct 24, 2023',
      time: '09:45 AM',
      unread: true,
      type: 'order'
    },
    {
      id: 2,
      title: 'Platform Update: Version 2.4.0',
      description: 'New inventory tracking features are now live in your store dashboard.',
      category: 'System',
      categoryColor: 'bg-purple-50 text-purple-700 border-purple-100',
      date: 'Oct 23, 2023',
      time: '02:15 PM',
      unread: false,
      type: 'system'
    },
    {
      id: 3,
      title: 'Payment Settlement Successful',
      description: 'Your weekly payout of ₦214,000 has been credited to your inventory Wallet.',
      category: 'Payment',
      categoryColor: 'bg-green-50 text-green-700 border-green-100',
      date: 'Oct 22, 2023',
      time: '11:00 AM',
      unread: true,
      type: 'payment'
    },
    {
      id: 4,
      title: 'Stock Alert: Critical Level',
      description: '5 items in "Summer Collection" are running extremely low on stock.',
      category: 'System',
      categoryColor: 'bg-red-50 text-red-700 border-red-100',
      date: 'Oct 22, 2023',
      time: '08:30 AM',
      unread: true,
      type: 'alert'
    },
    {
      id: 5,
      title: 'New Customer Registered',
      description: 'Sarah Benson just created an account and added items to her cart.',
      category: 'Order',
      categoryColor: 'bg-blue-50 text-blue-700 border-blue-100',
      date: 'Oct 21, 2023',
      time: '04:45 PM',
      unread: false,
      type: 'order'
    }
  ]);

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions' },
    { icon: Store, label: 'Store Setup' }
  ];

  const stats = [
    { label: 'Unread Alerts', value: '12', icon: Mail, color: 'bg-primary/5 text-primary' },
    { label: 'System Status', value: 'Optimal', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Order Alerts', value: '8 New', icon: ShoppingBag, color: 'bg-orange-50 text-orange-600' }
  ];

  const getStatusIcon = (unread, type) => {
    if (unread && type === 'alert') {
      return <CircleAlert size={12} className="text-[#ba1a1a]" />;
    }
    if (unread) {
      return <Circle size={12} className="text-[#0050cb] fill-[#0050cb]" />;
    }
    return <Circle size={12} className="text-[#c2c6d8]" />;
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, unread: false })));
  };

  const toggleFilterUnread = () => {
    setFilterUnread(!filterUnread);
  };

  const filteredNotifications = filterUnread
    ? notifications.filter(n => n.unread)
    : notifications;

  const totalPages = Math.ceil(filteredNotifications.length / 5);
  const displayedNotifications = filteredNotifications.slice(0, 5);


  return (
    <div className='p-4 sm:p-10 flex flex-col gap-8 max-w-6xl mx-auto'>
           {/* Top Navigation Bar */}
      <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-[#f9f9fc] border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
            <input
              className="w-full bg-[#f3f3f6] border-none rounded-lg pl-10 pr-4 py-2 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
              placeholder="Search orders, customers or alerts..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 text-[#555f6c] hover:bg-[#f3f3f6] rounded-lg transition-all relative">
              <MapPin size={20} />
            </button>
            <button className="p-2 text-[#0050cb] hover:bg-[#0050cb]/5 rounded-lg transition-all relative">
              <Bell size={20} fill="#0050cb" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-white"></span>
            </button>
          </div>
          <div className="h-8 w-px bg-[#c2c6d8] mx-2"></div>
          <div className="flex items-center gap-3">
            <button className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#0050cb] font-bold hover:underline">View Store</button>
            <button className="bg-[#0066ff] text-white px-4 py-2 rounded-lg text-[12px] leading-[16px] tracking-[0.05em] font-medium font-bold shadow-sm">Point of Sale</button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBiPD7QiBgKiNgjIo2wtf2_8g888MhOjBY2EAdJ7N4xvjWW5CHY_mh5RbeDJ0ug1qUjEpa4WAuiEURmnAvUIUFeMvIRKmLhGwxHpy1ZnCfyl0-tKq-Owvks1FfMFA8IqAkKw05B9D0FMtwaFfp6Tg9Ud4wi37_vkYrCd56kWY8oRzxFf2ZvNw15sm00VsLzDOGuIZsMIYcInoTcJ613n_XZti7WAUYtJ2PEJSU69K73_ariK4DYnfkRlKa1zDb-azj8o3lP-q-wA84"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-24 px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Notifications</h2>
              <p className="text-[14px] leading-[20px] text-[#555f6c] mt-1">Manage your store alerts, system updates, and order activity.</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-[14px] leading-[20px] transition-all ${
                  filterUnread
                    ? 'bg-[#0050cb] text-white border-[#0050cb]'
                    : 'border-[#727687] text-[#555f6c] hover:bg-[#eeeef0]'
                }`}
                onClick={toggleFilterUnread}
              >
                <Filter size={20} />
                Filter Unread
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0066ff] text-white text-[14px] leading-[20px] font-semibold hover:opacity-90 transition-all shadow-sm"
                onClick={markAllAsRead}
              >
                <Check size={20} />
                Mark all as read
              </button>
            </div>
          </div>

          {/* Bento Layout Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] flex items-center justify-between group hover:border-[#0050cb] transition-colors cursor-default"
                >
                  <div>
                    <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase mb-1">{stat.label}</p>
                    <h3 className="text-[24px] leading-[32px] font-bold text-[#1a1c1e]">{stat.value}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Notifications Table */}
          <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f3f3f6] border-b border-[#c2c6d8]">
                  <tr>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider w-1/2">Notification</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Category</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c2c6d8]">
                  {displayedNotifications.map((notification) => (
                    <tr
                      key={notification.id}
                      className={`hover:bg-[#f9f9fc] transition-colors group ${
                        !notification.unread ? 'opacity-75 grayscale-[0.5]' : ''
                      }`}
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-start gap-4">
                          <div className="mt-1 relative">
                            {getStatusIcon(notification.unread, notification.type)}
                          </div>
                          <div>
                            <h4 className={`text-[16px] leading-[24px] ${notification.unread ? 'font-bold' : 'font-medium'} text-[#1a1c1e]`}>
                              {notification.title}
                            </h4>
                            <p className="text-[14px] leading-[20px] text-[#555f6c] mt-0.5">{notification.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1 rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-medium border ${notification.categoryColor}`}>
                          {notification.category}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-[14px] leading-[20px] text-[#1a1c1e]">{notification.date}</span>
                        <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">{notification.time}</p>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="p-2 text-[#555f6c] hover:text-[#0050cb] transition-colors">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="px-6 py-4 bg-[#f3f3f6] border-t border-[#c2c6d8] flex justify-between items-center">
              <p className="text-[14px] leading-[20px] text-[#555f6c]">
                Showing 1 to {displayedNotifications.length} of {filteredNotifications.length} notifications
              </p>
              <div className="flex items-center gap-2">
                <button
                  className="p-2 rounded-lg border border-[#c2c6d8] text-[#555f6c] disabled:opacity-30"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                >
                  <ChevronLeft size={20} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#0050cb] text-white font-bold text-[14px] leading-[20px]">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#eeeef0] text-[#555f6c] font-medium text-[14px] leading-[20px]">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#eeeef0] text-[#555f6c] font-medium text-[14px] leading-[20px]">3</button>
                <button
                  className="p-2 rounded-lg border border-[#c2c6d8] text-[#555f6c] hover:bg-[#eeeef0] transition-all"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Contextual Help / Tips Card */}
          <div className="mt-10 bg-[#0066ff] rounded-xl p-8 relative overflow-hidden group">
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[20px] leading-[28px] font-semibold text-white mb-2">Automate your store alerts</h3>
              <p className="text-[16px] leading-[24px] text-white/90 mb-6">
                Connect your Telegram or WhatsApp to get real-time order notifications directly to your phone. Never miss a sale again.
              </p>
              <button className="px-6 py-3 bg-white text-[#0050cb] rounded-xl font-bold text-[14px] leading-[20px] hover:bg-[#f9f9fc] transition-all shadow-lg flex items-center gap-2">
                Configure Channels
                <ArrowRight size={18} />
              </button>
            </div>
            {/* Abstract Design Elements */}
            <div className="absolute top-0 right-0 h-full w-1/3 opacity-20 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <div className="absolute top-[-20%] right-[-10%] w-64 h-64 border-[32px] border-white rounded-full"></div>
              <div className="absolute bottom-[-10%] left-[-20%] w-48 h-48 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default NotificationList;