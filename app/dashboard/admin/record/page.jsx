
import React from 'react';
import DesktopRecordSale from '@/app/components/DesktopRecordSale';
import MobileRecordSale from '@/app/components/MobileRecordSale';
import { fetchProducts } from '@/app/libs/service';

export default async function RecordSalePage() {
  const products = await fetchProducts();


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