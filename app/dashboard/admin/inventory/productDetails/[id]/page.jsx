"use client"
import React, { useEffect, useState } from 'react';
import DesktopProductDetails from '@/components/DesktopProductDetails';
import MobileProductDetails from '@/components/MobileProductDetails';
import Link from 'next/link';
import { getProductById } from '@/lib/service';
import { useParams } from 'next/navigation';


export default function ProductDetailsPage() {

  const [product, setProduct] = useState(null);
    const { id } =  useParams();

  const loadData = async() => {
    const product = await getProductById(id);
    setProduct(product);
  } 
  useEffect(() => {
    loadData()
  }, []);

  if (!product) {
    return (
      <div className="p-10 text-center space-y-4">
        <h1 className="text-2xl font-extrabold font-headline">Product not found</h1>
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
      <section className="">
        <DesktopProductDetails product={product} />
      </section>

     
    </div>
  );
}