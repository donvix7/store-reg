"use client"
import { deleteProduct } from '@/lib/actions';
import { Save, Pencil, Plus, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const DesktopProductDetails = ({ product }) => {
  // Use displayProduct to avoid shadowing the 'product' prop
  const [displayProduct, setDisplayProduct] = useState(product);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const percentage = (displayProduct.stock?.current / displayProduct.stock?.max) * 100 || 0;
  const router = useRouter()
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Optimal':
        return { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' };
      case 'Low Stock':
        return { bg: 'bg-tertiary-fixed', text: 'text-on-tertiary-fixed-variant', dot: 'bg-tertiary' };
      case 'Out of Stock':
        return { bg: 'bg-error-container', text: 'text-on-error-container', dot: 'bg-error' };
      default:
        return { bg: 'bg-surface-container', text: 'text-on-surface-variant', dot: 'bg-outline' };
    }
  };
  const handleDelete = async () => {
    if(confirm("Are you sure you want to delete this product?")){
      const res = await deleteProduct(displayProduct.name)
      if(res){
        router.push('/dashboard/admin/inventory')
      }
    }
  }

  const statusStyles = getStatusStyles(displayProduct.status);

  const getProgressColor = (percent) => {
    if (percent === 0) return 'bg-error';
    if (percent < 25) return 'bg-tertiary';
    return 'bg-green-500';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setEditedProduct(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setEditedProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    setDisplayProduct(editedProduct);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProduct(displayProduct);
    setIsEditing(false);
  };

  return (
    <div className="space-y-10">
      {/* Header Info */}
      <div className="flex items-end justify-between border-b border-outline-variant/20 pb-8">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-outline tracking-wider uppercase">SKU: {displayProduct.sku}</span>
            <span className={`px-3 py-1 ${statusStyles.bg} ${statusStyles.text} rounded-full text-xs font-semibold uppercase tracking-wider`}>{displayProduct.status}</span>
          </div>
          {isEditing ? (
            <div className="space-y-4">
              <input
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
                className="text-4xl font-extrabold text-on-surface leading-tight font-headline bg-surface-container-low border-none rounded-xl py-2 px-4 w-full focus:ring-2 focus:ring-primary/20"
                placeholder="Product Name"
              />
              <textarea
                name="desc"
                value={editedProduct.desc}
                onChange={handleInputChange}
                rows="2"
                className="text-on-surface-variant mt-2 text-lg bg-surface-container-low border-none rounded-xl py-2 px-4 w-full focus:ring-2 focus:ring-primary/20 resize-none"
                placeholder="Product Description"
              />
            </div>
          ) : (
            <>
              <h2 className="text-4xl font-extrabold text-on-surface leading-tight font-headline">{displayProduct.name}</h2>
              <p className="text-on-surface-variant mt-2 text-lg">{displayProduct.desc}</p>
            </>
          )}
        </div>
        <div className="flex gap-4">
          {isEditing ? (
            <>
              <button 
                onClick={handleCancel}
                className="px-6 py-3 bg-surface-container text-on-surface-variant font-semibold rounded-xl hover:bg-surface-container-high transition-all flex items-center gap-2"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave}
                className="px-8 py-3 bg-primary text-on-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Save size={20} /> Save Changes
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-secondary-container text-secondary font-semibold rounded-xl hover:bg-opacity-80 transition-all flex items-center gap-2"
              >
                <Pencil size={20} /> Edit Details
              </button>
              <Link href="/dashboard/admin/inventory/reorder" className="px-6 py-3 bg-primary text-on-primary font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                <Plus size={20} /> Reorder Stock
              </Link>
                  <button 
                  onClick={handleDelete}
                  className="px-6 py-3 bg-error text-on-error font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2">
                <Trash size={20} /> Delete Product
              </button>
            </>
          )}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Large Image Panel */}
        <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-3xl p-4 flex flex-col gap-4">
          <div className="aspect-16/10 bg-surface-container-low rounded-2xl overflow-hidden relative group">
            <img 
              alt={displayProduct.name}
              className="w-full h-full object-cover" 
              src={displayProduct.src}
            />
          </div>
        </div>

        {/* Stats & Stock Panel */}
        <div className="col-span-12 lg:col-span-5 space-y-8">
          <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-on-surface-variant text-sm font-medium uppercase tracking-wider">Unit Price</p>
                {isEditing ? (
                  <div className="relative mt-2">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-outline">$</span>
                    <input
                      name="price"
                      type="number"
                      value={editedProduct.price}
                      onChange={handleInputChange}
                      className="text-4xl font-bold text-on-surface bg-surface-container-lowest border-none rounded-2xl py-3 pl-10 pr-4 w-full focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ) : (
                  <h3 className="text-4xl font-bold text-on-surface mt-1">${displayProduct.price}</h3>
                )}
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-on-surface uppercase tracking-wider">Stock Levels</span>
                {isEditing ? (
                  <div className="flex items-center gap-2">
                    <input
                      name="stock.current"
                      type="number"
                      value={editedProduct.stock.current}
                      onChange={handleInputChange}
                      className="w-20 text-right font-bold text-on-surface bg-surface-container-lowest border-none rounded-xl py-1 px-3 focus:ring-2 focus:ring-primary/20"
                    />
                    <span className="text-outline">/</span>
                    <input
                      name="stock.max"
                      type="number"
                      value={editedProduct.stock.max}
                      onChange={handleInputChange}
                      className="w-20 text-right font-bold text-on-surface bg-surface-container-lowest border-none rounded-xl py-1 px-3 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                ) : (
                  <span className="text-2xl font-black text-on-surface">{displayProduct.stock.current} <span className="text-sm font-medium text-on-surface-variant">/ {displayProduct.stock.max} units</span></span>
                )}
              </div>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className={`h-full ${getProgressColor(percentage)} transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopProductDetails;
