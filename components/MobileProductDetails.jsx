"use client"
import { ChevronRight, Save, Share2, Pencil } from 'lucide-react';
import React, { useState } from 'react';

const MobileProductDetails = ({ product }) => {
  const [displayProduct, setDisplayProduct] = useState(product);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

  const percentage = (displayProduct.stock?.current / displayProduct.stock?.max) * 100 || 0;

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
    <div className="space-y-8 pb-10">
      {/* Breadcrumb & Actions */}
      <div className="space-y-6">
        <nav className="flex items-center gap-2 text-outline text-xs font-label">
          <span>Inventory</span>
          <ChevronRight size={14} />
          <span>{displayProduct.category}</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">Details</span>
        </nav>
        <div className="flex flex-col gap-4">
          {isEditing ? (
            <input
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
              className="text-3xl font-headline font-extrabold tracking-tight text-on-surface bg-surface-container border-none rounded-xl py-2 px-4 w-full focus:ring-2 focus:ring-primary/20"
              placeholder="Product Name"
            />
          ) : (
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-on-surface leading-tight">
              {displayProduct.name}
            </h2>
          )}
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button 
                  onClick={handleCancel}
                  className="flex-1 py-3 rounded-xl bg-surface-container text-on-surface font-semibold flex items-center justify-center gap-2 text-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/15"
                >
                  <Save size={16} />
                  Save
                </button>
              </>
            ) : (
              <>
                <button className="flex-1 py-3 rounded-xl bg-secondary-container text-on-secondary-container font-semibold flex items-center justify-center gap-2 text-sm">
                  <Share2 size={16} />
                  Share
                </button>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex-1 py-3 rounded-xl bg-primary text-on-primary font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-primary/15"
                >
                  <Pencil size={16} />
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Hero Product Card */}
      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10">
        <div className="aspect-square relative bg-surface-container group">
          <img 
            className="w-full h-full object-cover" 
            alt={displayProduct.name}
            src={displayProduct.src} 
          />
        </div>
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-wider border border-outline-variant/10">SKU: {displayProduct.sku}</span>
            <span className={`px-2.5 py-1 rounded-full ${getStatusStyles(displayProduct.status).bg} ${getStatusStyles(displayProduct.status).text} text-[10px] font-bold uppercase tracking-wider`}>{displayProduct.status}</span>
          </div>
          {isEditing ? (
            <textarea
              name="desc"
              value={editedProduct.desc}
              onChange={handleInputChange}
              rows="3"
              className="w-full text-sm leading-relaxed font-body bg-surface-container-low border-none rounded-xl py-2 px-4 focus:ring-2 focus:ring-primary/20 resize-none"
              placeholder="Description"
            />
          ) : (
            <p className="text-on-surface-variant text-sm leading-relaxed font-body">
              {displayProduct.desc}
            </p>
          )}
          
          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-end">
              <span className="text-outline font-label text-[10px] uppercase tracking-wider">Stock Status</span>
              {isEditing ? (
                <div className="flex items-center gap-1">
                  <input
                    name="stock.current"
                    type="number"
                    value={editedProduct.stock.current}
                    onChange={handleInputChange}
                    className="w-16 text-right font-bold text-on-surface bg-surface-container-low border-none rounded-lg py-1 px-2 focus:ring-2 focus:ring-primary/20 text-sm"
                  />
                  <span className="text-outline">/</span>
                  <input
                    name="stock.max"
                    type="number"
                    value={editedProduct.stock.max}
                    onChange={handleInputChange}
                    className="w-16 text-right font-bold text-on-surface bg-surface-container-low border-none rounded-lg py-1 px-2 focus:ring-2 focus:ring-primary/20 text-sm"
                  />
                </div>
              ) : (
                <span className="text-2xl font-headline font-bold text-on-surface">{displayProduct.stock.current} Units</span>
              )}
            </div>
             <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div className={`h-full ${getProgressColor(percentage)} transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
              </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/15 flex items-baseline gap-2">
            {isEditing ? (
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-primary font-bold">$</span>
                <input
                  name="price"
                  type="number"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                  className="w-full text-4xl font-headline font-extrabold text-primary bg-surface-container-low border-none rounded-xl py-2 pl-8 pr-4 focus:ring-2 focus:ring-primary/20"
                />
              </div>
            ) : (
              <span className="text-4xl font-headline font-extrabold text-primary">${displayProduct.price}</span>
            )}
            <span className="text-outline text-xs font-label italic shrink-0">MSRP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProductDetails;
