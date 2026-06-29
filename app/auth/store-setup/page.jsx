"use client"
import React, {  useState } from 'react';
import {
  Store,
  Link,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const StoreSetup = () => {
  const [storeName, setStoreName] = useState('');
  const [storeUrl, setStoreUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [urlTouched, setUrlTouched] = useState(false);

  const router = useRouter()
  const generateSlug = (value) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleStoreNameChange = (e) => {
    const value = e.target.value;
    setStoreName(value);
    if (!urlTouched) {
      setStoreUrl(generateSlug(value));
    }
  };

  const handleUrlChange = (e) => {
    const value = e.target.value
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    setStoreUrl(value);
  };

  const handleUrlFocus = () => {
    setUrlTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    router.push('/auth/continue-setup')
    setTimeout(() => {
      alert('Moving to Step 2: Industry Selection');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#f9f9fc] font-['Hanken_Grotesk'] relative">
      {/* Header / Brand Logo */}
      <div className="mb-12">
        <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-extrabold text-[#0050cb]">inventory</h1>
      </div>
      {/* Main Onboarding Card */}
      <main className="w-full max-w-2xl bg-white rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] p-8 md:p-12 border border-[#c2c6d8]/30 relative z-10">
        {/* Progress Indicator */}
      {/* 
        <nav className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#0050cb] flex items-center justify-center text-white text-[12px] leading-[16px] tracking-[0.05em] font-medium">
              1
            </div>
            <span className="ml-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-[#0050cb]">
              Store Info
            </span>
          </div>
          <div className="h-[2px] flex-grow bg-[#e2e8f0] mx-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#c2c6d8] flex items-center justify-center text-[#555f6c] text-[12px] leading-[16px] tracking-[0.05em] font-medium">
              2
            </div>
            <span className="ml-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase hidden md:block">
              Industry
            </span>
          </div>
          <div className="h-[2px] flex-grow bg-[#e2e8f0] mx-4"></div>
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#c2c6d8] flex items-center justify-center text-[#555f6c] text-[12px] leading-[16px] tracking-[0.05em] font-medium">
              3
            </div>
            <span className="ml-3 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] uppercase hidden md:block">
              Preferences
            </span>
          </div>
        </nav>
        */}
        {/* Content Section */}
        <section className="space-y-8">
          <header>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mb-2">
              Let's build your store
            </h2>
            <p className="text-[16px] leading-[24px] text-[#555f6c]">
              Tell us a bit about your business to get started on your journey to growth.
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Store Name Input */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-[#424656]" htmlFor="store_name">
                What is your store name?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555f6c]">
                  <Store size={20} />
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#c2c6d8] rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-[#0050cb] transition-all text-[16px] leading-[24px] placeholder:text-[#c2c6d8] outline-none"
                  id="store_name"
                  placeholder="e.g. Divine Grace Collections"
                  required
                  value={storeName}
                  onChange={handleStoreNameChange}
                />
              </div>
            </div>

            {/* Store URL Input */}
            <div className="space-y-2">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-[#424656]" htmlFor="store_url">
                Choose your custom URL
              </label>
              <div className="flex items-stretch">
                <div className="relative flex-grow">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555f6c]">
                    <Link size={20} />
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#c2c6d8] rounded-l-lg border-r-0 focus:ring-2 focus:ring-[#0066ff] focus:border-[#0050cb] transition-all text-[16px] leading-[24px] placeholder:text-[#c2c6d8] outline-none"
                    id="store_url"
                    placeholder="mystore"
                    required
                    value={storeUrl}
                    onChange={handleUrlChange}
                    onFocus={handleUrlFocus}
                  />
                </div>
                <div className="flex items-center px-6 bg-[#e8e8ea] border border-[#c2c6d8] border-l-0 rounded-r-lg text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#5b6572] whitespace-nowrap">
                  .inventory.shop
                </div>
              </div>
              <p className="text-[14px] leading-[20px] text-[#bdc7d6] italic">
                This will be the web address where customers find your products.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0066ff] text-white py-4 rounded-lg text-[20px] leading-[28px] font-bold hover:shadow-[0_0_20px_rgba(0,102,255,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group disabled:opacity-80 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Setting up...</span>
                  </>
                ) : (
                  <>
                    <span>Next Step</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Footer Help */}
      <footer className="mt-8 text-center relative z-10">
        <p className="text-[14px] leading-[20px] text-[#555f6c]">
          Need help? <a className="text-[#0050cb] font-semibold hover:underline" href="#">Chat with an expert</a>
        </p>
      </footer>

      {/* Background Illustration - Bento Style Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#dae1ff] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#d9e3f2] rounded-full blur-[100px]"></div>
      </div>

      <style jsx>{`
        body {
          background-color: #f9f9fc;
          background-image: radial-gradient(#e6f0ff 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          font-family: 'Hanken Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default StoreSetup;