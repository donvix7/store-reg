import React from 'react';
import DesktopSettings from '@/components/DesktopSettings';
import MobileSettings from '@/components/MobileSettings';

export default function SettingsPage() {
  return (
    <div className="">
      {/* Desktop View Section */}
      <section className="">
        <DesktopSettings />
      </section>

    </div>
  );
}