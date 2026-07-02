'use client';


import React, { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  History,
  Settings,
  LogOut,
  Search,
  Bell,
  HelpCircle,
  User,
  UserPlus,
  QrCode,
  Plus,
  Minus,
  Trash2,
  Edit,
  ChevronRight,
  CheckCircle,
  Loader2,
  CreditCard,
  Landmark,
  Wallet,
  X,
  ShoppingBag,
  Tag,
  Store
} from 'lucide-react';
import getProducts from '@/lib/service';

const DesktopRecordSale = () => {
      const [products, setProducts] = useState([]);
      
        
const [cartItems, setCartItems] = useState([
   /*
    {
      id: 1,
      name: 'Noise Cancelling Pods',
      price: 45000,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIsImt9W6UDDZbCLB-Y7d1v_MJ3HXX8BzHDysNv47cy9blzBO32WUmjpAB2W-mEiXqK2OxxTNwMPH3CCP3-YZK2wT2udnTuhdCinK7hUli1V-HLCYK9KKQ2uyaAh5ehsWuPOpnNoxM62AlvXBGQ1eFX6ZQDyl55ssnO3sZpWtTRvh5UEqJVaB8smtKdRwRcJ93pdjgaTgI4KPey2RaoD3NajJ3-7_MzF_cgRWMOqCQMO6AuQPLG5hsgBbyvsemdqo6sTcbEVKJHCQ_'
    },
    {
      id: 2,
      name: 'Premium Leather Wallet',
      price: 12500,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFrNnp9p0EK59sPoShqKaHvalkppq8Wf-9_GI7iyNwFIS8o0jaxzo0-zac9nLq4V9cMgmJZ7BdTc2qT6JN0u_6acL8nULIOhQTbT5bWOxHmzzthKD9FbNuwQt0Tg2C91H6w9_TNOQrQUNaZcYaxAjMf5MbbJGQr4C0TGp922joa1vwoi-FU2O09h71Qg_nl-i9W9UbqazAN4YxfHKlZu6h3eRNEmce6z4yE64SSNQ_oA0798EvRnlOPOLK1HSJ8CdHp3wDdvgRYmdp'
    }
   */
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [inventory, setInventory] = useState([]);

  
    const loadProducts = async () => {
            const inventory = await getProducts();
            if(inventory.success){
              setInventory(inventory.data);
              setProducts(inventory.data);

            }
            else{
            setInventory([]);
            setProducts([]);

            }
    }
    useEffect(() => {
        loadProducts();
    }, []);



  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: History, label: 'Inventory' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const addToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    if (existing) {
      updateQuantity(product.id, 1);
    } else {
      setCartItems(prev => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const handleCompleteSale = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setCartItems([]);
      }, 3000);
    }, 1200);
  };

  const getStockColor = (stock) => {
    if (stock <= 5) return 'bg-error-container text-error';
    if (stock <= 15) return 'bg-amber-100 text-amber-700';
    return 'bg-surface-container-high text-outline';
  };
  return (
    <div className="">
        

      {/* Main Content */}
      <main className=" pt-16 min-h-screen p-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Record Sale</h2>
              <p className="text-[#424656] text-[14px] leading-[20px]">Create a new manual transaction for your store.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 flex items-center gap-2 text-[14px] leading-[20px] font-semibold text-[#0050cb] bg-[#d9e3f2] rounded-lg hover:bg-[#b3c5ff] transition-all active:scale-[0.98]">
                <UserPlus size={16} />
                New Customer
              </button>
              <button className="px-4 py-2 flex items-center gap-2 text-[14px] leading-[20px] font-semibold text-white bg-[#0050cb] rounded-lg hover:bg-[#003fa4] transition-all shadow-sm active:scale-[0.98]">
                <QrCode size={16} />
                Scan Barcode
              </button>
            </div>
          </div>

          {/* POS Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6" style={{ height: 'calc(100vh - 200px)' }}>
            {/* Left: Product Selection */}
            <section className="flex flex-col gap-6 overflow-hidden">
              {/* Filters */}
              <div className="bg-white p-4 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex gap-4">
                <div className="flex-1 relative">
                  <input
                    className="w-full h-12 pl-12 pr-4 bg-[#f3f3f6] border-none rounded-lg text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/10 transition-all outline-none"
                    placeholder="Search product name or SKU..."
                    type="text"
                  />
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#727687]" />
                </div>
                <select className="bg-[#f3f3f6] border-none rounded-lg px-4 h-12 text-[14px] leading-[20px] text-[#424656] focus:ring-2 focus:ring-[#0050cb]/10 cursor-pointer outline-none">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Home Decor</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto pr-2 pb-8">
                {products.map((product) => {
                  const isLowStock = product.stock <= 5;
                  const isMediumStock = product.stock <= 15;
                  const stockColor = isLowStock ? 'bg-error-container text-error' : isMediumStock ? 'bg-amber-100 text-amber-700' : 'bg-surface-container-high text-outline';

                  return (
                    <div
                      key={product.id}
                      className="bg-white p-3 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-[#0050cb] transition-all cursor-pointer group active:scale-[0.97]"
                      onClick={() => addToCart(product)}
                    >
                      <div className="h-40 relative rounded-lg overflow-hidden bg-[#eeeef0] mb-3">
                        <span className={`px-2 py-0.5 rounded absolute top-2 right-2 text-[10px] ${stockColor}`}>{product.stock} in stock</span>

                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={product.name}
                          src={product.image}
                        />
                      </div>
                      <h3 className="text-[16px] leading-[24px] font-semibold text-[#1a1c1e] truncate mb-1">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-[18px] font-bold text-[#0050cb]">₦ {product.price.toLocaleString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Right: Cart */}
            <aside className="flex flex-col gap-4 h-full">
              {/* Customer Card */}
              <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[14px] font-semibold text-[#727687] uppercase tracking-wider">Customer Details</span>
                  <button className="text-[#0050cb] text-[14px] leading-[20px] font-semibold text-xs">Change</button>
                </div>
                <div className="flex items-center gap-3 bg-[#f3f3f6] p-3 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-[#d9e3f2] flex items-center justify-center font-bold text-[#0050cb]">JD</div>
                  <div>
                    <p className="text-[14px] leading-[20px] font-bold text-[#1a1c1e]">John Doe</p>
                    <p className="text-[12px] text-[#424656]">john.doe@email.com</p>
                  </div>
                  <CheckCircle size={20} className="ml-auto text-[#727687]" />
                </div>
              </div>

              {/* Cart */}
              <div className="flex-1 bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-4 flex flex-col overflow-hidden">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-[18px] font-semibold">Current Cart</h3>
                  <span className="bg-[#0066ff] text-white px-2 py-0.5 rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-medium">{cartItems.length} Items</span>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-4 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3 group">
                      <div className="w-16 h-16 rounded-lg bg-[#eeeef0] overflow-hidden shrink-0">
                        <img className="w-full h-full object-cover" alt={item.name} src={item.image} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[14px] leading-[20px] font-bold text-[#1a1c1e] truncate">{item.name}</h4>
                        <p className="text-[14px] font-bold text-[#0050cb] mb-1">₦{item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-[#c2c6d8] rounded bg-[#f9f9fc] overflow-hidden">
                            <button className="px-2 py-0.5 hover:bg-[#f3f3f6] transition-colors" onClick={() => updateQuantity(item.id, -1)}>
                              <Minus size={14} />
                            </button>
                            <span className="px-3 py-0.5 text-[12px] leading-[16px] tracking-[0.05em] font-medium border-x border-[#c2c6d8]">{item.quantity}</span>
                            <button className="px-2 py-0.5 hover:bg-[#f3f3f6] transition-colors" onClick={() => updateQuantity(item.id, 1)}>
                              <Plus size={14} />
                            </button>
                          </div>
                          <button className="text-[#ba1a1a] opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => removeItem(item.id)}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                  {cartItems.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-[#727687]">
                      <ShoppingBag size={48} className="mb-4 opacity-30" />
                      <p className="text-[14px] leading-[20px]">Your cart is empty</p>
                      <p className="text-[12px]">Click on products to add them</p>
                    </div>
                  )}
                </div>

                {/* Summary */}
                <div className="pt-4 border-t border-[#c2c6d8] space-y-2">
                  <div className="flex justify-between items-center text-[14px] leading-[20px] text-[#424656]">
                    <span>Subtotal</span>
                    <span>₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-[14px] leading-[20px] text-[#424656]">
                    <span className="flex items-center gap-1 cursor-pointer hover:text-[#0050cb]">
                      Discount <Edit size={14} />
                    </span>
                    <span className="text-[#ba1a1a]">-₦{discount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-[14px] leading-[20px] text-[#424656]">
                    <span>Shipping</span>
                    <span>₦ {shipping.toLocaleString()}</span>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Total Amount</span>
                    <span className="text-[24px] font-bold text-[#0050cb]">₦{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Payment & Checkout */}
              <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-4 space-y-4">
                <div>
                  <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#727687] uppercase tracking-wider mb-2 block">Payment Method</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all ${
                        paymentMethod === 'cash'
                          ? 'border-[#0050cb] bg-[#d9e3f2] text-[#0050cb]'
                          : 'border-[#c2c6d8] text-[#424656] hover:border-[#0050cb]'
                      }`}
                      onClick={() => setPaymentMethod('cash')}
                    >
                      <Wallet size={20} />
                      <span className="text-[10px] font-bold">Cash</span>
                    </button>
                    <button
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all ${
                        paymentMethod === 'transfer'
                          ? 'border-[#0050cb] bg-[#d9e3f2] text-[#0050cb]'
                          : 'border-[#c2c6d8] text-[#424656] hover:border-[#0050cb]'
                      }`}
                      onClick={() => setPaymentMethod('transfer')}
                    >
                      <Landmark size={20} />
                      <span className="text-[10px] font-bold">Transfer</span>
                    </button>
                    <button
                      className={`flex flex-col items-center justify-center gap-1 p-2 rounded-lg border-2 transition-all ${
                        paymentMethod === 'card'
                          ? 'border-[#0050cb] bg-[#d9e3f2] text-[#0050cb]'
                          : 'border-[#c2c6d8] text-[#424656] hover:border-[#0050cb]'
                      }`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <CreditCard size={20} />
                      <span className="text-[10px] font-bold">Card</span>
                    </button>
                  </div>
                </div>
                <button
                  className="w-full py-4 bg-[#0050cb] text-white text-[20px] leading-[28px] font-semibold rounded-xl shadow-lg hover:bg-[#003fa4] transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                  onClick={handleCompleteSale}
                  disabled={isProcessing || cartItems.length === 0}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Record Sale
                      <ChevronRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DesktopRecordSale;
