import { Fingerprint, Grid, Factory, Truck, DollarSign, Info, CheckCircle2, BarChart3, Image as ImageIcon, Plus } from 'lucide-react';
import React from 'react';

export default function AddProductPage() {
  const productData = {
    img: "High-end wireless headphones product image",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChLcQeSboB1qG2Jrt1g9ffXIuDLeH0KdB92GVi8bhabIZ8lDdgSBo2E1DCQFcbO6I2AQKuHJyw7DIoSRi480V08grdoAtQRvDUMbHAq6QLh739gnAAn93DyIcj5aIcAygeRgUyqHlOXIk1KK1fohpQkSVktz7WIYiMdniWDA7qm-iWXwPGzSCx0OQYX7ZfFT28BpD4C8ObDlFyWEi0ipOfCeDIF97mWZO6AZU8fIU0TjDuYt3QWgLU8Ze3ZbBZofc-4IS_3CK-Rjc",
    name: "Zenith Wireless Headphones",
    sku: "WH-2024-X1",
    category: "Electronics",
    stock: {
      current: 240,
      max: 300,
    },
    price: "249.00",
    status: "Optimal",
  };

  return (
    <div className="p-4 max-w-6xl mx-auto w-full font-body">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-on-surface tracking-tight mb-2 font-headline">New Product Registration</h1>
        <p className="text-on-surface-variant text-lg">Initialize a new SKU within the Precision Atelier ecosystem.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Main Form Section */}
        <div className="col-span-1 md:col-span-8 space-y-10">
          
          {/* Product Media */}
          <section className="bg-surface-container-lowest rounded-4xl p-10 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
                <ImageIcon className="text-primary" size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold font-headline">Product Media</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-1 aspect-square rounded-3xl bg-surface-container-low overflow-hidden relative group border-2 border-dashed border-outline-variant/30 hover:border-primary/50 transition-colors">
                <img 
                  src={productData.src} 
                  alt={productData.img}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 flex flex-col justify-center space-y-4">
                <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/10">
                  <h4 className="text-sm font-bold text-on-surface mb-2 uppercase tracking-wider">Image Requirements</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Captured: 16-bit RAW processed to JPEG. 
                    Recommended resolution: 2000x2000px.
                    Current file: <span className="text-primary font-mono">{productData.img.replace(/ /g, '_').toLowerCase()}.jpg</span>
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 px-4 rounded-xl bg-primary text-on-primary font-bold text-sm hover:opacity-90 transition-opacity">
                    Replace Asset
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-xl border border-outline-variant text-on-surface font-bold text-sm hover:bg-surface-container-low transition-colors">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Product Identity */}
          <section className="bg-surface-container-lowest rounded-4xl p-10 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center">
                <Fingerprint className="text-primary" size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold font-headline">Product Identity</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="col-span-1 md:col-span-2">
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Product Designation</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="e.g., Ethereal Series - Oak Desk" 
                  type="text" 
                  defaultValue={productData.name}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Universal SKU</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface font-mono" 
                  placeholder="SKU-8829-XL" 
                  type="text" 
                  defaultValue={productData.sku}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Internal Reference</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="REF-PR-001" 
                  type="text" 
                />
              </div>
            </div>
          </section>

          {/* Categorization & Supply */}
          <section className="bg-surface-container-lowest rounded-4xl p-10 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center">
                <Grid className="text-secondary" size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold font-headline">Categorization &amp; Supply</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Primary Category</label>
                <select 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface appearance-none"
                  defaultValue={productData.category}
                >
                  <option>Select Workspace</option>
                  <option>Furniture</option>
                  <option>Technology</option>
                  <option>Textiles</option>
                  <option value="Electronics">Electronics</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Health Status</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-primary font-bold" 
                    type="text" 
                    readOnly
                    value={productData.status}
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Current Stock Level</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="0" 
                    type="number" 
                    defaultValue={productData.stock.current}
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-outline">UNITS</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Maximum Capacity</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="0" 
                    type="number" 
                    defaultValue={productData.stock.max}
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-bold text-outline">LIMIT</span>
                </div>
              </div>
            </div>
          </section>

          {/* Logistics & Value */}
          <section className="bg-surface-container-lowest rounded-4xl p-10 shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center">
                <DollarSign className="text-tertiary" size={24} fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold font-headline">Logistics &amp; Value</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Unit Cost</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-outline font-bold">$</span>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-10 pr-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="0.00" 
                    type="text" 
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">MSRP</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-outline font-bold">$</span>
                  <input 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-10 pr-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                    placeholder="0.00" 
                    type="text" 
                    defaultValue={productData.price}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-bold text-outline uppercase tracking-widest mb-2 px-1">Weight (KG)</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
                  placeholder="0.00" 
                  type="text" 
                />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Info Boxes */}
        <div className="col-span-1 md:col-span-4 space-y-8">
          
          {/* Metadata Requirements */}
          <div className="bg-primary text-on-primary rounded-4xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2 font-headline">
                <Info size={18} />
                Metadata Requirements
              </h4>
              <ul className="space-y-4 font-body">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-sm mt-1" size={14} fill="currentColor" />
                  <p className="text-sm opacity-90">High-resolution photography (min 2000px) required for E-commerce sync.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-sm mt-1" size={14} fill="currentColor" />
                  <p className="text-sm opacity-90">Dimensions must follow the ISO-9001 standardized measurement protocol.</p>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="text-sm mt-1" size={14} fill="currentColor" />
                  <p className="text-sm opacity-90">Global Trade Item Number (GTIN) mandatory for international logistics.</p>
                </li>
              </ul>
            </div>
            {/* Abstract decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </div>

          {/* Predictive Impact */}
          <div className="bg-surface-container-high rounded-4xl p-8 border border-outline-variant/10">
            <h4 className="text-lg font-bold text-on-surface mb-6 flex items-center gap-2 font-headline">
              <BarChart3 className="text-primary" size={20} />
              Predictive Impact
            </h4>
            <div className="space-y-6 font-body">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-on-surface-variant tracking-wider">MARKET VIABILITY</span>
                  <span className="text-primary">88%</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-on-surface-variant tracking-wider">LOGISTICS COMPLEXITY</span>
                  <span className="text-tertiary">LOW</span>
                </div>
                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20">
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Based on current category trends, this product is expected to reach &quot;High-Velocity&quot; status within <span className="text-on-surface font-bold">14 days</span> of listing.
                </p>
              </div>
            </div>
          </div>

          {/* Action Sidebar */}
          <div className="space-y-4 pt-4 font-body">
            <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]">
              Finalize Registration
            </button>
            <button className="w-full bg-surface-container-low text-on-surface py-5 rounded-xl font-bold text-lg border border-outline-variant/20 hover:bg-surface-container transition-colors">
              Save as Draft
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}