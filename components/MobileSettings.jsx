import React from 'react';
import { Pencil, Mail, UserCheck, Building2, Award, BellRing, Shield, Info } from 'lucide-react';

const MobileSettings = () => {
  return (
    <div className="w-full  p-4 pb-32">
      <div className="flex flex-col gap-6">
        
        {/* Profile Section */}
        <section className="bg-surface-container-lowest rounded-xl p-8 transition-all hover:shadow-sm">
          <div className="flex flex-col items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-surface-container-highest ring-4 ring-surface-container-low transition-all group-hover:ring-primary/20">
                <img 
                  alt="User Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_EzIpa0nCDtqQB8sw5Sh6OWPRVsvd4kXJzswxC7KieQJGm3mV6zc-v2-PQlWyAaLlyF2k49YXNrguVTZhxhCfOIUNaPJbkhjtskIIinnmuxAR7MQTHtYrJVHgzJ621sPj7vBwaLSstK2fTWhyBfbgqR5akVPaUzohAHoM2HoWaVADm8cGlrCXLFNFkZevH7Icmqx4lyAGce-rsf0_r7Zehj1sTLnIkfDGI72jqne1JGjTzg8izsdKeZJLtsLphQUSjWalLTVi_iM"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-on-primary p-2 rounded-full shadow-lg">
                <Pencil size={14} />
              </button>
            </div>
            
            <div className="text-center">
              <span className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-1 block">Account Identity</span>
              <h2 className="font-headline text-3xl font-extrabold text-on-surface mb-2">Marcus Vance</h2>
              <p className="font-body text-sm text-on-surface-variant flex items-center justify-center gap-2 mb-4">
                <Mail size={14} />
                marcus.vance@precision-atelier.io
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <div className="px-4 py-1.5 bg-surface-container text-on-surface text-sm font-semibold rounded-full border border-outline-variant/20 flex items-center gap-2">
                  <UserCheck size={16} />
                  Senior Manager
                </div>
                <div className="px-4 py-1.5 bg-secondary-container text-on-secondary-container text-sm font-semibold rounded-full flex items-center gap-2">
                  <Building2 size={16} />
                  North Warehouse
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-outline-variant/10 space-y-6">
            <div>
              <label className="block font-label text-sm font-semibold text-outline mb-2">Display Name</label>
              <input 
                className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                type="text" 
                defaultValue="Marcus Vance"
              />
            </div>
            <div>
              <label className="block font-label text-sm font-semibold text-outline mb-2">Work Phone</label>
              <input 
                className="w-full bg-surface-container-highest border-none rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all" 
                placeholder="+1 (555) 000-0000" 
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Quick Stats/Info */}
        <aside className="flex flex-col gap-6">
          <div className="bg-primary p-8 rounded-xl text-on-primary relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-headline text-xl font-bold mb-2">Inventory Pro Plan</h3>
              <p className="text-on-primary-container text-sm mb-6 opacity-90">Your subscription renews on Oct 12, 2023.</p>
              <button className="bg-surface-container-lowest text-primary px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-on-primary transition-colors">
                Manage Billing
              </button>
            </div>
            <Award className="absolute -right-4 -bottom-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" size={96} fill="currentColor" />
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl">
            <h4 className="font-headline font-bold text-on-surface">Data Usage</h4>
            <p className="text-sm text-on-surface-variant mb-6">Real-time sync active across 4 nodes.</p>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-outline">
                <span>Storage</span>
                <span>78%</span>
              </div>
              <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[78%] rounded-full"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Notifications Section */}
        <section className="bg-surface-container-lowest rounded-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center">
              <BellRing className="text-on-tertiary-fixed" size={24} />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold">Notifications</h3>
              <p className="text-sm text-on-surface-variant">Configure how you receive alerts.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-on-surface text-sm">Email alerts</p>
                <p className="text-[10px] text-on-surface-variant">Daily summary of inventory</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white"></span>
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-on-surface text-sm">Push notifications</p>
                <p className="text-[10px] text-on-surface-variant">Immediate alerts for out-of-stock</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white"></span>
              </button>
            </div>
          </div>
        </section>

        {/* Account Security Section */}
        <section className="bg-surface-container-lowest rounded-xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center">
              <Shield className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold">Account Security</h3>
              <p className="text-sm text-on-surface-variant">Manage your credentials.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/10">
              <div className="max-w-[60%]">
                <p className="font-semibold text-on-surface text-sm">Password</p>
                <p className="text-[10px] text-on-surface-variant">Last changed 4 months ago</p>
              </div>
              <button className="px-4 py-2 bg-surface-container text-primary font-bold text-xs rounded-xl">
                Change
              </button>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-semibold text-on-surface text-sm">2FA</p>
                <p className="text-[10px] text-on-surface-variant">Via Authenticator App</p>
              </div>
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors">
                <span className="inline-block h-4 w-4 translate-x-6 transform rounded-full bg-white"></span>
              </button>
            </div>
            <div className="p-4 bg-tertiary-fixed rounded-xl flex gap-4 items-start">
              <Info className="text-on-tertiary-fixed mt-0.5" size={18} />
              <div>
                <p className="text-xs font-bold text-on-tertiary-fixed">Session Management</p>
                <p className="text-[10px] text-on-tertiary-fixed-variant mt-1 leading-relaxed">
                  Logged in on 3 devices. Securing your account is recommended.
                </p>
                <button className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-on-tertiary-fixed hover:underline">Logout others</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileSettings;
