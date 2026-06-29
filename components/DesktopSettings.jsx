"use client"
import React, { useState } from 'react';
import { Pencil, Lock, ShieldCheck, Info, Laptop, Smartphone, Monitor, Save, ShoppingBag, Eye, Bell, StoreIcon, Camera, Power, Briefcase, Mail, Phone, MapPin, Share2, MessageCircle, MessageSquare, Search, HelpCircle, LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Wallet, Megaphone, Puzzle, Settings, CreditCard } from 'lucide-react';

const DesktopSettings = () => {

  const [isStoreOpen, setIsStoreOpen] = useState(true);
  const [storeName, setStoreName] = useState('The Artisan Collective');
  const [tagline, setTagline] = useState('Handcrafted goods for modern living.');
  const [email, setEmail] = useState('hello@theartisan.shop');
  const [phone, setPhone] = useState('+234 812 345 6789');
  const [address, setAddress] = useState('12B Admiralty Way, Lekki Phase 1, Lagos, Nigeria');
  const [instagram, setInstagram] = useState('@artisan_collective');
  const [whatsapp, setWhatsapp] = useState('+2348123456789');
  const [facebook, setFacebook] = useState('artisan.collective.ng');
  const [metaTitle, setMetaTitle] = useState('Artisan Collective | Handcrafted Goods in Nigeria');
  const [metaDescription, setMetaDescription] = useState(
    'Shop unique, handcrafted goods from the best artisans in Lagos. From home decor to bespoke fashion accessories, The Artisan Collective brings quality to your doorstep.'
  );

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions' },
    { icon: StoreIcon, label: 'Store Setup', active: true }
  ];

  const bottomNav = [
    { icon: Settings, label: 'Operations' },
    { icon: CreditCard, label: 'Finance' }
  ];

  const businessHours = [
    { days: 'Mon - Fri', hours: '08:00 AM - 06:00 PM' },
    { days: 'Saturday', hours: '10:00 AM - 04:00 PM' },
    { days: 'Sunday', hours: 'Closed', isClosed: true }
  ];
  return (
    <div className="">
       <header className="h-16 w-full fixed top-0 z-40 flex justify-between items-center px-6 bg-white/80 backdrop-blur-md border-b border-[#c2c6d8]">
        <div className="flex items-center gap-4">
          <h1 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Shop Settings</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d9e3f2] text-[#0066ff] font-medium hover:opacity-90 transition-all">
            <ShoppingBag size={20} />
            <span className="text-[14px] leading-[20px]">Point of Sale</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0066ff] text-white font-medium hover:shadow-lg transition-all">
            <Eye size={20} />
            <span className="text-[14px] leading-[20px]">View Store</span>
          </button>
          <div className="flex items-center gap-4 border-l border-[#c2c6d8] pl-6">
            <button className="text-[#424656] hover:text-[#0050cb] transition-colors relative">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#c2c6d8] cursor-pointer">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADeBkKlX2saGDdm5luzep4yMikZkGWld-4GpHZIjON3-QiVi8TPjtVJtRON8c8yZ5pO5WX_KLnl-yUe298ycSiL3xQHGY9IDw1Hgwe3UD_53N9XwMQ8-nf8qUSmSqP0tF3Gd4kyiC1v5n64vDFYWa9O_Z_mxVYr9wiVZcDHk6HVyDs13pYs7lQR3Yg7E-9SXKolZ8cOCaJKI4Wwp_wcS95qy9p9bT-VU7jjR7MGk1CrNz2lF5FraBXqCqIr503EK9MSs1iJ9N7L7G"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content Canvas */}
      <main className=" pt-24 pb-12 bg-[#f9f9fc] min-h-screen">
        <div className=" px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Manage Your Storefront</h2>
              <p className="text-[#424656] text-[14px] leading-[20px]">Customize how customers see and interact with your business online.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg border border-[#727687] text-[#1a1c1e] hover:bg-[#eeeef0] transition-all">
                Cancel Changes
              </button>
              <button className="px-8 py-3 rounded-lg bg-[#0066ff] text-white font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all">
                Save Changes
              </button>
            </div>
          </div>

          {/* Bento Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Section 1: Storefront Identity */}
            <section className="col-span-12 lg:col-span-7 bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                <StoreIcon size={24} className="text-[#0050cb]" fill="#0050cb" />
                <h3 className="text-[20px] leading-[28px] font-semibold">Storefront Identity</h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Logo Upload */}
                <div className="flex-shrink-0">
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-3">STORE LOGO</label>
                  <div className="relative group cursor-pointer">
                    <div className="w-32 h-32 rounded-xl bg-[#eeeef0] border-2 border-dashed border-[#c2c6d8] flex flex-col items-center justify-center text-center p-4 group-hover:border-[#0050cb] transition-colors">
                      <Camera size={24} className="text-[#424656] group-hover:text-[#0050cb] mb-1" />
                      <span className="text-[10px] font-medium leading-tight">Click to change logo</span>
                    </div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl"></div>
                  </div>
                </div>
                {/* Info Fields */}
                <div className="flex-1 space-y-6">
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">STORE NAME</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none transition-all text-[16px] leading-[24px]"
                      placeholder="Enter your store name"
                      type="text"
                      value={storeName}
                      onChange={(e) => setStoreName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">STORE TAGLINE</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] focus:ring-1 focus:ring-[#0066ff] outline-none transition-all text-[16px] leading-[24px]"
                      placeholder="Short description of your store"
                      type="text"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Operational Status */}
            <section className="col-span-12 lg:col-span-5 bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Power size={24} className="text-[#0050cb]" fill="#0050cb" />
                    <h3 className="text-[20px] leading-[28px] font-semibold">Store Status</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] leading-[16px] tracking-[0.05em] font-bold ${isStoreOpen ? 'text-[#0050cb]' : 'text-[#ba1a1a]'}`}>
                      {isStoreOpen ? 'OPEN' : 'CLOSED'}
                    </span>
                    <label className="relative inline-block w-11 h-6">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isStoreOpen}
                        onChange={() => setIsStoreOpen(!isStoreOpen)}
                      />
                      <div className={`block w-full h-full rounded-full cursor-pointer transition-all ${
                        isStoreOpen ? 'bg-[#0066ff]' : 'bg-[#c2c6d8]'
                      }`}>
                        <div className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] bg-white rounded-full transition-all ${
                          isStoreOpen ? 'transform translate-x-[20px]' : ''
                        }`}></div>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="p-6 bg-[#f3f3f6] rounded-xl mb-6">
                  <p className="text-[14px] leading-[20px] text-[#424656] italic mb-2">
                    "Your store is currently visible and customers can place orders."
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656]">BUSINESS HOURS</h4>
                <div className="space-y-2">
                  {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-[14px] leading-[20px] py-1 border-b border-[#c2c6d8]/30">
                      <span className="font-semibold">{item.days}</span>
                      <span className={item.isClosed ? 'text-[#ba1a1a] font-medium' : 'text-[#0066ff] font-medium'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2 text-[#0050cb] font-medium hover:bg-[#0050cb]/5 rounded-lg transition-colors">
                  Edit Schedule
                </button>
              </div>
            </section>

            {/* Section 3: Business Information */}
            <section className="col-span-12 lg:col-span-8 bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase size={24} className="text-[#0050cb]" fill="#0050cb" />
                <h3 className="text-[20px] leading-[28px] font-semibold">Business Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-1">
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">CONTACT EMAIL</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-3 text-[#727687]" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] outline-none transition-all text-[14px] leading-[20px]"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">PHONE NUMBER</label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-3 text-[#727687]" />
                    <input
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] outline-none transition-all text-[14px] leading-[20px]"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">PHYSICAL ADDRESS</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-4 top-3 text-[#727687]" />
                    <textarea
                      className="w-full pl-12 pr-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] outline-none transition-all text-[14px] leading-[20px] resize-none"
                      rows="2"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Social Links */}
            <section className="col-span-12 lg:col-span-4 bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-8">
                <Share2 size={24} className="text-[#0050cb]" fill="#0050cb" />
                <h3 className="text-[20px] leading-[28px] font-semibold">Social Presence</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C]">
                    <Camera size={20} />
                  </div>
                  <div className="flex-1">
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-[#c2c6d8] focus:border-[#E1306C] outline-none transition-all text-sm"
                      placeholder="Instagram Username"
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <MessageCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-[#c2c6d8] focus:border-[#25D366] outline-none transition-all text-sm"
                      placeholder="WhatsApp Number"
                      type="text"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                    <MessageSquare size={20} />
                  </div>
                  <div className="flex-1">
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-[#c2c6d8] focus:border-[#1877F2] outline-none transition-all text-sm"
                      placeholder="Facebook Page ID"
                      type="text"
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: SEO Optimization */}
            <section className="col-span-12 bg-white rounded-xl p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border-t-4 border-[#0050cb]">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Search size={24} className="text-[#0050cb]" fill="#0050cb" />
                  <h3 className="text-[20px] leading-[28px] font-semibold">Search Engine Optimization (SEO)</h3>
                </div>
                <span className="px-3 py-1 bg-[#e8e8ea] rounded text-[10px] font-bold tracking-widest text-[#424656]">ADVANCED</span>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-7 space-y-6">
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">META TITLE</label>
                    <input
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] outline-none transition-all text-[14px] leading-[20px]"
                      maxLength="60"
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                    />
                    <p className="text-[10px] text-[#424656] mt-1">Recommended: 60 characters or less. (Currently {metaTitle.length})</p>
                  </div>
                  <div>
                    <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-2">META DESCRIPTION</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg border border-[#c2c6d8] focus:border-[#0066ff] outline-none transition-all text-[14px] leading-[20px] resize-none"
                      rows="3"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                    />
                    <p className="text-[10px] text-[#424656] mt-1">Recommended: 160 characters or less. (Currently {metaDescription.length})</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] mb-4 uppercase tracking-wider">Search Result Preview</label>
                  <div className="p-6 bg-[#f3f3f6] rounded-xl border border-[#c2c6d8]/30">
                    <div className="text-[#1a0dab] text-lg hover:underline cursor-pointer mb-1 leading-tight">{metaTitle}</div>
                    <div className="text-[#006621] text-sm mb-1">https://artisan.inventory.shop/</div>
                    <div className="text-[#4d5156] text-sm leading-relaxed">{metaDescription.slice(0, 160)}...</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Help/Actions */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between p-8 bg-[#0066ff] rounded-2xl text-white">
            <div className="mb-6 md:mb-0">
              <h4 className="text-[20px] leading-[28px] font-semibold mb-2">Need help with your store setup?</h4>
              <p className="opacity-90 text-[14px] leading-[20px]">Our merchant success team is available 24/7 to help you grow your business.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-lg bg-white/20 border border-white/30 text-white font-semibold hover:bg-white/30 transition-all flex items-center gap-2">
                <HelpCircle size={20} />
                Read Guide
              </button>
              <button className="px-6 py-3 rounded-lg bg-white text-[#0066ff] font-bold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2">
                <MessageCircle size={20} />
                Chat Support
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopSettings;
