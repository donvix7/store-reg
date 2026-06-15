import React from 'react';
import DesktopSettings from '@/app/components/DesktopSettings';
import MobileSettings from '@/app/components/MobileSettings';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-surface font-body">
      {/* Desktop View Section */}
      <section className="hidden lg:block">
        <DesktopSettings />
      </section>

      {/* Mobile View Section */}
      <section className="lg:hidden">
        <MobileSettings />
      </section>
    </div>
  );
}