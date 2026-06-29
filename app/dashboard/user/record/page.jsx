"use client"
import React, { useEffect, useState } from 'react';
import DesktopRecordSale from '@/components/DesktopRecordSale';
import MobileRecordSale from '@/components/MobileRecordSale';
import getInventory from '@/lib/service';

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
    <div className="">
      {/* Mobile View */}
      <div className="lg:hidden h-full">
        <MobileRecordSale products={products}/>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex h-full">
        <DesktopRecordSale products={products}/>
      </div>
    </div>
  );
}