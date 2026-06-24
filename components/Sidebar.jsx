import { Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ financeLinks, inventoryLinks, quickLinks, settingsLinks }) => {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/dashboard/admin") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <aside className="hidden lg:flex w-64 glass-sidebar border-r border-outline-variant/15 flex-col z-20">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary">
            <Package size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-on-surface font-bold text-lg leading-none">Inventory Pro</h1>
            <p className="text-on-surface-variant text-xs mt-1">Admin Portal</p>
          </div>
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-scroll h-screen [&::-webkit-scrollbar]:hidden pb-12">
        <p className='my-3 font-bold text-slate-700 tracking-wider text-sm'>
        Quick actions

        </p>
        {quickLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors ${
              isActive(link.href) 
              ? ' text-primary font-bold' 
              : 'text-secondary hover:bg-surface-container'
            }`}
          >
            <div className={`${isActive(link.href) ? 'text-primary' : 'text-secondary'}`}>
              {link.icon}
            </div>
            <span>{link.title}</span>
          </Link>
        ))}
        <p className='my-3 font-bold text-slate-700 tracking-wider text-sm'>
        Inventory
        </p>
        {inventoryLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors ${
              isActive(link.href) 
              ? ' text-primary font-bold' 
              : 'text-secondary hover:bg-surface-container'
            }`}
          >
            <div className={`${isActive(link.href) ? 'text-primary' : 'text-secondary'}`}>
              {link.icon}
            </div>
            <span>{link.title}</span>
          </Link>
        ))}
         <p className='my-3 font-bold text-slate-700 tracking-wider text-sm'>
        Finance
        </p>
        {financeLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors ${
              isActive(link.href) 
              ? ' text-primary font-bold' 
              : 'text-secondary hover:bg-surface-container'
            }`}
          >
            <div className={`${isActive(link.href) ? 'text-primary' : 'text-secondary'}`}>
              {link.icon}
            </div>
            <span>{link.title}</span>
          </Link>
        ))}
        <p className='my-3 font-bold text-slate-700 tracking-wider text-sm'>
        Settings
        </p>
        {settingsLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors ${
              isActive(link.href) 
              ? ' text-primary font-bold' 
              : 'text-secondary hover:bg-surface-container'
            }`}
          >
            <div className={`${isActive(link.href) ? 'text-primary' : 'text-secondary'}`}>
              {link.icon}
            </div>
            <span>{link.title}</span>
          </Link>
        ))}
      </nav>
      
    </aside>
  );
};

export default Sidebar;