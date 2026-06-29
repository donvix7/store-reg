"use client"
import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Package,
  Trash2,
  X,
  Loader2
} from 'lucide-react';

const DeleteConfirmation = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [modalScale, setModalScale] = useState('scale-95 opacity-0');

  const product = {
    name: 'Premium Leather Bag',
    sku: 'RL-7721-BRW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsXYWiSg-4qinX5zq5h1XaXTP8dno1Fvqhrfsx6-0HQcgpJBAoV1V2eeZlFbHixSyqLzH9Og58DfpEmvgqir7XTxm5Tnbl4Wy1TFSLG3FvATGKfrCiL4gROXW3fDciKrvvHoARyeLQVY6m0ZxGAu2B1zLx9kGQUwFWGwLoqKJ0PagUAWAWOISa-6-yrYRG9vhlzduyu0JpiuMqwVfWKmsdXI1jyn7Wbq6GCGX_CN77m0bvMou5BQc5kaVgbvMJgQb__nDL-XnCwY1j'
  };

  useEffect(() => {
    // Animate modal in on mount
    setTimeout(() => {
      setModalScale('scale-100 opacity-100');
    }, 50);

    // Handle ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const closeModal = () => {
    setModalScale('scale-95 opacity-0');
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  const handleDelete = () => {
    setIsDeleting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Product "Premium Leather Bag" has been deleted.');
      closeModal();
    }, 1200);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f9f9fc] font-['Hanken_Grotesk'] text-[#1a1c1e] overflow-hidden">
      {/* Content Underlay (Blurred Dashboard Representation) */}
      <div className="fixed inset-0 flex">
        {/* Sidebar Shell */}
        <aside className="hidden md:flex flex-col h-screen border-r border-[#c2c6d8] bg-white w-[260px] p-4 opacity-20 pointer-events-none">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#0050cb]"></div>
            <div>
              <h2 className="text-[20px] leading-[28px] font-bold text-[#0050cb]">Royal Precision</h2>
              <p className="text-[10px] text-[#5b6572]">Admin Portal</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="h-10 bg-[#e8e8ea] rounded-lg w-full"></div>
            <div className="h-10 bg-[#e8e8ea] rounded-lg w-full"></div>
            <div className="h-10 bg-[#e8e8ea] rounded-lg w-full"></div>
          </div>
        </aside>

        {/* Main Content Canvas Shell */}
        <main className="flex-1 p-6 opacity-10 pointer-events-none">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-32 bg-white rounded-xl shadow-sm"></div>
            <div className="h-32 bg-white rounded-xl shadow-sm"></div>
            <div className="h-32 bg-white rounded-xl shadow-sm"></div>
            <div className="col-span-full h-96 bg-white rounded-xl shadow-sm"></div>
          </div>
        </main>
      </div>

      {/* Modal Overlay Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-[#1a1c1e]/40 transition-opacity duration-300">
        {/* Delete Confirmation Modal */}
        <div
          className={`bg-white w-full max-w-md rounded-xl shadow-[0px_12px_32px_rgba(0,0,0,0.08)] overflow-hidden transform transition-all duration-300 ${modalScale}`}
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div className="p-6">
            {/* Warning Header */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ffdad6] flex items-center justify-center">
                <AlertTriangle className="text-[#ba1a1a] text-[28px]" size={28} />
              </div>
              <div className="flex-1">
                <h1 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2" id="modal-title">
                  Delete Product?
                </h1>
                <p className="text-[14px] leading-[20px] text-[#5b6572] leading-relaxed">
                  Are you sure you want to delete <span className="font-bold text-[#1a1c1e]">"{product.name}"</span>? This action cannot be undone and will permanently remove all associated data from your inventory.
                </p>
              </div>
            </div>

            {/* Product Image Context */}
            <div className="mt-6 rounded-lg overflow-hidden h-32 relative group">
              <img
                className="w-full h-full object-cover"
                alt="Premium leather bag product"
                src={product.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-3 flex items-center gap-2">
                <Package size={14} className="text-white" />
                <span className="text-white text-xs font-medium">SKU: {product.sku}</span>
              </div>
            </div>
          </div>

          {/* Modal Footer / Actions */}
          <div className="bg-[#f3f3f6] px-6 py-4 flex flex-col sm:flex-row-reverse gap-3">
            <button
              className="flex-1 sm:flex-none px-6 py-2.5 bg-[#ba1a1a] text-white rounded-lg font-semibold text-[14px] leading-[20px] hover:brightness-90 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 size={16} />
                  Delete
                </>
              )}
            </button>
            <button
              className="flex-1 sm:flex-none px-6 py-2.5 bg-transparent text-[#555f6c] font-semibold text-[14px] leading-[20px] hover:bg-[#e8e8ea] transition-all active:scale-95 rounded-lg border border-[#c2c6d8]"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;