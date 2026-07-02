import React from 'react';
import DesktopInventory from '@/components/DesktopInventory';

export default function InventoryPage() {

  return (
    <div className="font-body">

      {/* Desktop View Section */}
      <section className=" space-y-8">
        <DesktopInventory />
      </section>
 
    </div>
  );
}