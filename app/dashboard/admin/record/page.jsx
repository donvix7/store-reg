"use client"
import React, { useEffect, useState } from 'react';
import DesktopRecordSale from '@/app/components/DesktopRecordSale';
import MobileRecordSale from '@/app/components/MobileRecordSale';
import getInventory from '@/libs/service';

export default function RecordSalePage() {
  const [products, setProducts] = useState([]);

  const loadData = async() => {
    const res = await getInventory();
    setProducts(res);
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-full">
      {/* Mobile View */}
      <div className="lg:hidden h-full">
        <MobileRecordSale products={products}/>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block h-full">
        <DesktopRecordSale products={products}/>
      </div>
    </div>
  );
}