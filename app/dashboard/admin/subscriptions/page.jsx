"use client"

import { Bell, Check, CheckCircle, MapPin, Pencil, Search, XCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const page = () => {
   
const [isYearly, setIsYearly] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for new merchants starting their journey.',
      price: '₦0',
      period: '/mo',
      features: [
        { name: 'Up to 20 Products', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Online Storefront', included: true },
        { name: 'Custom Domain', included: false }
      ],
      buttonText: 'Current Plan',
      buttonVariant: 'outline',
      recommended: false
    },
    {
      name: 'Pro',
      description: 'Enhanced features for growing businesses.',
      price: isYearly ? '₦48,000' : '₦5,000',
      period: isYearly ? '/yr' : '/mo',
      features: [
        { name: 'Everything in Basic', included: true },
        { name: 'Unlimited Products', included: true },
        { name: 'Custom Domain Integration', included: true },
        { name: 'Advanced Inventory Sync', included: true },
        { name: 'Priority Support', included: true }
      ],
      buttonText: 'Upgrade to Pro',
      buttonVariant: 'primary',
      recommended: true,
      discount: isYearly ? 'Save 20%' : null
    },
    {
      name: 'Enterprise',
      description: 'Dedicated infrastructure for high-volume stores.',
      price: 'Custom Pricing',
      period: '',
      features: [
        { name: 'Dedicated Account Manager', included: true },
        { name: 'Custom API Access', included: true },
        { name: 'Multi-warehouse Support', included: true },
        { name: 'SLA Guarantee', included: true }
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline',
      recommended: false
    }
  ];
 const supportAvatars = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDimGZn3zezG8SwcXPSbDW4za6dxCR4kroC9RWZXjewbB6Fr7i_wKvnCdjQ4D78c9qxHHlskLcorIkYz4oM7We5FlhpyiFMw5vJUqJ7C2P5BDWtzsk897wZzSGvyB8AWR566URfmzMIiV1kM5uSiEXSos82Bdjzknv4cpPiUbXnelh-BOHe7Tx3NpchXYghXmRAgEM0kaeGTwv8Mm5WZZuXoh-GOvxTtxdESK9Rj9FrYlX4QU75lDNL5mH3sfd5mz6UMIQY0gRM8wr6',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDEeAGvGxv1bqrCqqLmsUKEzrDs90tO4BAW09Fj_SweD2RnhbLjJKqtvwJ8uHSALmw-iXY2lyZE6xjo0FIlBJ7X9vJ19eBJIfNXWyx1Nlbf6G1LcdT83fAZOTnDh_uoBC9aJgtIxvgttvWiz4gt0klpgLyqDs8VqTunFEJhMGtiigJF9Cz_VGqDA3QIF86nGGgrx6Fk-6HZny79DdwFYZJXW5DPl5usfoH24UaBj4GtNbWHnefzwirSz_CsuJx58noJEh5PQVrbCioE',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAaki39XczV0hYLA-hjzozVAXlpXKqecLBNH-So1IH-6wdZe0H31iypYX5foICHSqeiKg7APIXOeJZOu-nmnzcENkjNmpwnN0lCbRBQTMklCmyFrxlNKjmrOBMiHvbreKnKdCL1TUrExbMGYj6ni-ZKRPLF8Zvbwl_vqpAEeT1sO7PoU0CZ8uq1uRjQFCCdaGOSJ0Pzp87OLWxQ6iFqZg9RTkQ23aIeXuyCeOwIAd-jiCajjz7l2ja1jvagBEQ90qP72gikOEokE4Ph'
  ];

  return (
    <div className='p-4 flex flex-col gap-4'>
     <main className="min-h-screen">
        {/* Top Bar */}
        <header className="h-16 border-b border-[#c2c6d8] bg-[#f9f9fc] flex justify-between items-center px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727687]" />
              <input
                className="w-full bg-[#f3f3f6] border-none rounded-lg pl-10 pr-4 py-2 text-[14px] leading-[20px] focus:ring-2 focus:ring-[#0050cb]/20 outline-none"
                placeholder="Search orders, products..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#f3f3f6] transition-all text-[#555f6c]">
                <MapPin size={20} />
                <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase">Point of Sale</span>
              </button>
              <button className="p-2 rounded-lg hover:bg-[#f3f3f6] transition-all relative">
                <Bell size={20} className="text-[#555f6c]" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
              </button>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#d9e3f2] overflow-hidden border border-[#c2c6d8]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl02z4yf5cj35_1qVnosts7dg6J8kt3HZeoQKwIbcpur-vFbKSWqM2JqzAR7B5Q1B0j-XjEmpVyZGILtf5Qy6n2FpfuMOmbj_D13G438Ufo_8BWAyr7GJc9OtstypOJoBeXEhwwxbjSz2xgkyd7Q_Sp60VUIk1vNWbc7wdvhDmC2KPfn2XWHV8xEM51YSPfMyytJPcDPPbORNlEPx-NkrXLAgF8_W_hquxLcbTk8tVOvlzHyA6uQN1d84j6wgsSfroSSaN8aGeLAMZ"
              />
            </div>
          </div>
        </header>

        {/* Pricing Content */}
        <section className="p-8 max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Scale your business with inventory</h2>
            <p className="text-[16px] leading-[24px] text-[#555f6c] max-w-2xl mx-auto">
              Choose the perfect plan to manage your orders, products, and customers with confidence.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-[14px] leading-[20px] font-semibold ${!isYearly ? 'text-[#1a1c1e]' : 'text-[#555f6c]'}`}>
                Monthly
              </span>
              <button
                className="relative w-12 h-6 bg-[#d9e3f2] rounded-full transition-colors duration-200"
                onClick={toggleBilling}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-[#0050cb] rounded-full transition-all duration-200 ${
                    isYearly ? 'left-[calc(100%-1.25rem)]' : 'left-1'
                  }`}
                ></div>
              </button>
              <span className={`text-[14px] leading-[20px] ${isYearly ? 'text-[#1a1c1e] font-semibold' : 'text-[#555f6c]'}`}>
                Yearly <span className="text-[#a33200] font-bold ml-1">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan, index) => {
              const cardAnimation = {
                opacity: showAnimation ? 1 : 0,
                transform: showAnimation ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
              };

              return (
                <div
                  key={plan.name}
                  className={`bg-[#f9f9fc] p-8 rounded-xl border transition-all duration-300 flex flex-col h-full shadow-[0px_4px_20px_rgba(0,0,0,0.04)] hover:translate-y-[-4px] ${
                    plan.recommended
                      ? 'border-2 border-[#0050cb] shadow-[0px_12px_32px_rgba(0,102,255,0.08)] relative'
                      : 'border border-[#c2c6d8]'
                  }`}
                  style={cardAnimation}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0050cb] text-white px-4 py-1 rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-bold uppercase tracking-widest shadow-md">
                      Recommended
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2">{plan.name}</h3>
                    <p className="text-[14px] leading-[20px] text-[#555f6c]">{plan.description}</p>
                  </div>

                  <div className="mb-10">
                    <span className={`${plan.price === 'Custom Pricing' ? 'text-[20px] leading-[28px] font-semibold' : 'text-[48px] leading-[56px] tracking-[-0.02em] font-bold'} text-[#1a1c1e]`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[14px] leading-[20px] text-[#555f6c]">{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <CheckCircle
                            size={20}
                            className={`text-[#0050cb] ${plan.recommended ? 'fill-[#0050cb]' : ''}`}
                          />
                        ) : (
                          <XCircle size={20} className="text-[#c2c6d8]" />
                        )}
                        <span className={`text-[14px] leading-[20px] ${feature.included ? 'text-[#1a1c1e]' : 'text-[#555f6c] line-through'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
                      plan.buttonVariant === 'primary'
                        ? 'bg-[#0050cb] text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                        : plan.buttonText === 'Current Plan'
                        ? 'border-2 border-[#0050cb] text-[#0050cb] hover:bg-[#0050cb]/10'
                        : 'border-2 border-[#727687] text-[#555f6c] hover:bg-[#f3f3f6]'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Help Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#f3f3f6] p-10 rounded-2xl">
            <div className="space-y-6">
              <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e]">Need help deciding?</h3>
              <p className="text-[16px] leading-[24px] text-[#555f6c]">
                Our team is ready to help you find the right tools for your business scale. Whether you're just starting or managing thousands of orders daily, inventory grows with you.
              </p>
              <div className="flex gap-4">
                <div className="flex -space-x-3">
                  {supportAvatars.map((avatar, idx) => (
                    <div key={idx} className="w-10 h-10 rounded-full border-2 border-[#f9f9fc] overflow-hidden">
                      <img className="w-full h-full rounded-full object-cover" alt="Support team" src={avatar} />
                    </div>
                  ))}
                </div>
                <p className="text-[14px] leading-[20px] text-[#1a1c1e] self-center">
                  <span className="font-bold">4.8/5</span> from over 10,000+ merchants
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-video shadow-xl">
              <img
                className="w-full h-full object-cover"
                alt="E-commerce dashboard interface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_p-_eIiAkNktX5Dqn11aXX4psUrVDDUqBHk8UAH6IlVOpP9mD28vnXxWtlWLzlHFsoSZHyATrgh8XtfTK8jW6U8rssZaCGjVPrVGnmfNXNCZME-AjGRrPC7_yVNmvd0bfpCCDszdWK6mKyYkt4IgjUOGEh5upwqMpkD7ZrVzuBzlcZ98yby37znUfRhIyS194JQ4mxXEe74EAHwxehatWpy02n5mo-WdYqCc_KYJSTNWrB6u0ukw44nED-nJG1YEpQY49j1ts1Zpi"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 border-t border-[#c2c6d8] mt-10">
          <div className="flex justify-between items-center opacity-60 py-4">
            <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium">© 2024 inventory E-commerce. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-[12px] leading-[16px] tracking-[0.05em] font-medium hover:text-[#0050cb] transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-[12px] leading-[16px] tracking-[0.05em] font-medium hover:text-[#0050cb] transition-colors" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </main>
      
    </div>
  )
}

export default page