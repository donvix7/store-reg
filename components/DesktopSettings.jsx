import React from 'react';
import { Pencil, Lock, ShieldCheck, Info, Laptop, Smartphone, Monitor, Save } from 'lucide-react';

const DesktopSettings = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-10 p-10">
      {/* Section: User Profile (Bento Layout) */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <h3 className="font-headline text-xl font-bold mb-1 text-on-surface">User Profile</h3>
          <p className="font-body text-sm text-on-surface-variant mb-6">Manage your public information and digital identity.</p>
        </div>
        {/* Avatar Card */}
        <div className="col-span-4 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 flex flex-col items-center justify-center text-center space-y-4 shadow-sm">
          <div className="relative group">
            <img 
              alt="Profile Avatar" 
              className="w-32 h-32 rounded-full object-cover border-4 border-surface-container shadow-inner" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCRA6igzE-1T5TuKP6TqYpHvFAviuAxBHOXtLr2ofsGj8DGsM7y89MElIQlY2bC12CHZvf3HT2MABSsqrhXUm8BaIW_EkQtTzpKTNutb5KCRLIGdJ4Vn1hh7ioRBLc8NEm7njCFLSnvRAHRe1YMC26BpbyxFWUqzOOMKQMLXhbrStOaX05nTv1JQYm09RYZGlej0UIbsusyywuicma7_KamY7t_RdZNYKnECakuTfHzeHoAkRV7y2mk6irJ2dJ1J-6IXqODM3QBVw"
            />
            <button className="absolute bottom-1 right-1 bg-primary text-on-primary p-2.5 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all">
              <Pencil size={18} />
            </button>
          </div>
          <div>
            <h4 className="font-headline text-lg font-extrabold text-on-surface">Store Manager</h4>
            <p className="text-sm text-outline font-medium tracking-tight">Senior Operations Lead</p>
          </div>
          <button className="px-6 py-2.5 bg-secondary-container text-primary font-bold text-sm rounded-xl hover:opacity-90 transition-opacity">
            Change Photo
          </button>
        </div>
        {/* Basic Info Card */}
        <div className="col-span-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 space-y-8 shadow-sm">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-label text-xs font-bold text-outline uppercase tracking-widest px-1">Full Name</label>
              <input 
                className="w-full p-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm font-semibold text-on-surface" 
                type="text" 
                defaultValue="Store Manager"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs font-bold text-outline uppercase tracking-widest px-1">Email Address</label>
              <input 
                className="w-full p-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm font-semibold text-on-surface" 
                type="email" 
                defaultValue="admin@inventorypro.com"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs font-bold text-outline uppercase tracking-widest px-1">Phone Number</label>
              <input 
                className="w-full p-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm font-semibold text-on-surface" 
                type="text" 
                defaultValue="+1 (555) 000-1234"
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs font-bold text-outline uppercase tracking-widest px-1">Warehouse Location</label>
              <input 
                className="w-full p-4 bg-surface-container-low rounded-xl border-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-sm font-semibold text-on-surface" 
                type="text" 
                defaultValue="New York, USA"
              />
            </div>
          </div>
          <div className="flex justify-end pt-2 border-t border-outline-variant/10">
            <button className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Update Profile
            </button>
          </div>
        </div>
      </section>

      {/* Section: Security & Access */}
      <section className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <h3 className="font-headline text-xl font-bold mb-1 text-on-surface">Security Settings</h3>
          <p className="font-body text-sm text-on-surface-variant mb-6">Control your account security and monitor activity.</p>
        </div>
        {/* Password & 2FA */}
        <div className="col-span-7 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center shadow-inner">
                <Lock className="text-on-tertiary-fixed" size={28} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Password Management</h4>
                <p className="text-xs text-outline font-medium">Last changed 3 months ago • Standard requirements met</p>
              </div>
            </div>
            <button className="text-primary font-extrabold text-sm hover:underline">Change Password</button>
          </div>
          <div className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center shadow-inner">
                <ShieldCheck className="text-primary" size={28} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-headline font-bold text-on-surface">Two-Factor Authentication</h4>
                <p className="text-xs text-outline font-medium">Extra security layer: <span className="text-primary font-bold">Enabled</span></p>
              </div>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative p-1 cursor-pointer group">
              <div className="w-4 h-4 bg-on-primary rounded-full absolute right-1 shadow-md"></div>
            </div>
          </div>
        </div>
        {/* Active Sessions */}
        <div className="col-span-5 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h4 className="font-headline font-bold text-on-surface">Active Sessions</h4>
            <Info className="text-outline cursor-help" size={20} />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                <Laptop size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">MacBook Pro 16"</p>
                <p className="text-[10px] text-outline uppercase font-bold tracking-wider">New York, US • Current session</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
                <Smartphone size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">iPhone 14 Pro</p>
                <p className="text-[10px] text-outline uppercase font-bold tracking-wider">London, UK • 2 hours ago</p>
              </div>
              <button className="text-[10px] text-error font-black uppercase tracking-widest hover:underline">Revoke</button>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
                <Monitor size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-on-surface">Windows PC</p>
                <p className="text-[10px] text-outline uppercase font-bold tracking-wider">Berlin, DE • Yesterday</p>
              </div>
              <button className="text-[10px] text-error font-black uppercase tracking-widest hover:underline">Revoke</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notifications */}
      <section className="bg-surface-container-low rounded-3xl p-10 border border-outline-variant/10">
        <div className="mb-10">
          <h3 className="font-headline text-xl font-bold mb-1 text-on-surface">Notification Management</h3>
          <p className="font-body text-sm text-on-secondary-container font-medium">Configure how and when you receive inventory alerts.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
          {/* Category 1 */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black text-outline uppercase tracking-widest border-b border-outline-variant/30 pb-3">Inventory Alerts</h5>
            <div className="flex items-center justify-between group">
              <div className="max-w-[80%]">
                <p className="text-sm font-bold text-on-surface">Low Stock Warnings</p>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">Notify when items fall below reorder points.</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative p-1 cursor-pointer transition-colors shadow-inner">
                <div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
              </div>
            </div>
            <div className="flex items-center justify-between group">
              <div className="max-w-[80%]">
                <p className="text-sm font-bold text-on-surface">Out of Stock</p>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">Critical alerts for unavailable high-priority items.</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative p-1 cursor-pointer transition-colors shadow-inner">
                <div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
              </div>
            </div>
          </div>
          {/* Category 2 */}
          <div className="space-y-6">
            <h5 className="text-[10px] font-black text-outline uppercase tracking-widest border-b border-outline-variant/30 pb-3">Operational Reports</h5>
            <div className="flex items-center justify-between group">
              <div className="max-w-[80%]">
                <p className="text-sm font-bold text-on-surface">Daily Summary</p>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">Daily digest of stock movements and pending orders.</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative p-1 cursor-pointer transition-colors shadow-inner">
                <div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
              </div>
            </div>
            <div className="flex items-center justify-between group">
              <div className="max-w-[80%]">
                <p className="text-sm font-bold text-on-surface">System Updates</p>
                <p className="text-xs text-on-surface-variant font-medium mt-0.5">News about features and scheduled maintenance.</p>
              </div>
              <div className="w-10 h-5 bg-primary rounded-full relative p-1 cursor-pointer transition-colors shadow-inner">
                <div className="w-3 h-3 bg-white rounded-full absolute right-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-10 right-10 w-16 h-16 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all group z-20">
        <Save className="group-hover:rotate-12 transition-transform" size={28} fill="currentColor" />
      </button>
    </div>
  );
};

export default DesktopSettings;
