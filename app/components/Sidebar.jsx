import { Package } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ navLinks }) => {
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
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navLinks.map((link, index) => (
          <Link 
            key={index} 
            href={link.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
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
      <div className="p-4 mt-auto">
        <div className="p-4 bg-surface-container rounded-xl">
          <div className="flex items-center gap-3">
            <img className="w-10 h-10 rounded-full object-cover" alt="User profile avatar circular portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxiCGNrgMFkhktl3F0l_tLbgojtcd8qAkyXNxteLnAlat84E3jGGSZonBTa31EjxXdVRF_X-iODHaHBS_hO7pixHACYkqJqnV2XuFmWl3whgCWHjCbzsjRnxTZ_QpI-qlynpt2X1DlzwpgglU7KVN2eRGgxo57KLO9IYEk4Rj2srRdfGumzKky_OmDI5zb3TUD5kfpEf5rhu1AAPxFdBn3VrDKxqFdrFB_1YVE3EYk7x0ESa4xQMfRO5TkO9UAIkhRXFd998C3WHY"/>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate text-on-surface">Alex Thompson</p>
              <p className="text-xs text-outline truncate">Senior Manager</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;