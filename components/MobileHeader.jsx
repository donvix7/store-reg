import { Menu, UserCircle, User, Settings, LogOut, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const MobileHeader = ({navLinks}) => {
    const pathname = usePathname();
    const getPageTitle = (path) => {
    const link = navLinks.find(link => path.startsWith(link.href));
    return link ? link.title : "Admin Portal";
  };
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <div>
         {/* Mobile Header - Visible on Mobile Only */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant/15 h-16 flex items-center justify-between px-5 lg:hidden">
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center w-10 h-10 text-on-surface">
              <Home size={24} />
            </button>
            <h1 className="font-headline font-bold text-lg tracking-tight">{getPageTitle(pathname)}</h1>
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${isProfileMenuOpen ? 'bg-primary-container text-primary' : 'text-primary'}`}
            >
              <UserCircle size={24} />
            </button>

            {/* Profile Dropdown Menu */}
            {isProfileMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsProfileMenuOpen(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/15 py-2 z-50 animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-3 border-b border-outline-variant/10 mb-1">
                    <p className="text-xs font-bold text-outline uppercase tracking-wider">Account</p>
                    <p className="text-sm font-semibold text-on-surface truncate">Alex Thompson</p>
                  </div>
                
                  <Link 
                    href="/dashboard/admin/settings" 
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-on-surface hover:bg-surface-container transition-colors"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                  <div className="h-px bg-outline-variant/10 my-1 mx-2"></div>
                  <button 
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-error hover:bg-error/5 transition-colors text-left"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      // Add logout logic here
                    }}
                  >
                    <LogOut size={18} />
                    <span className="font-bold">Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </header>
    </div>
  )
}

export default MobileHeader;