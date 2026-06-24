'use client';

import React, { useEffect, useState } from 'react';
import DesktopReports from '@/components/DesktopReports';
import MobileReports from '@/components/MobileReports';
import getInventory from '@/lib/service';

export default function ReportsPage() {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    const loadData = async() => {
      const inventory = await getInventory();
      setInventory(inventory);
    }
    loadData();
  }, []);
  return (
    <div className="min-h-full">
      {/* Mobile View */}
      <div className="lg:hidden">
        <MobileReports initialInventory={inventory} />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <DesktopReports initialInventory={inventory} />
      </div>
    </div>
  );
}