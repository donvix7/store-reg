import React from 'react';
import DesktopProductDetails from '@/app/components/DesktopProductDetails';
import MobileProductDetails from '@/app/components/MobileProductDetails';
import { getProductById } from '@/app/libs/service';
import Link from 'next/link';

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="p-10 text-center space-y-4">
        <h1 className="text-2xl font-extrabold font-headl.ine">Product not found</h1>
        <p className="text-on-surface-variant">The product with SKU "{id}" could not be located.</p>
        <Link href="/dashboard/admin/inventory" className="inline-block px-6 py-2 bg-primary text-on-primary rounded-xl font-bold">
          Back to Inventory
        </Link>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-10 max-w-7xl mx-auto space-y-10 font-body">
      {/* Desktop View Section */}
      <section className="hidden lg:block">
        <DesktopProductDetails product={product} />
      </section>

      {/* Mobile View Section */}
      <section className="lg:hidden">
        <MobileProductDetails product={product} />
      </section>
    </div>
  );
}