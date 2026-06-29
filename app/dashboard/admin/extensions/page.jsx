"use client"
import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Megaphone,
  Puzzle,
  Store,
  Search,
  Bell,
  User,
  MapPin,
  Settings,
  Plus,
  ArrowRight,
  TrendingUp,
  MoreVertical,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Zap,
  ShoppingBag,
  Link,
  Mail,
  CreditCard,
  Truck,
  Bot
} from 'lucide-react';

const page = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All Extensions');

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: Package, label: 'Products' },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Users, label: 'Customers' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Wallet, label: 'inventory Wallet' },
    { icon: Megaphone, label: 'Sales & Marketing' },
    { icon: Puzzle, label: 'Extensions', active: true },
    { icon: Store, label: 'Store Setup' }
  ];

  const tabs = ['All Extensions', 'Marketing', 'Payments', 'Logistics', 'Analytics', 'CRM'];

  const extensions = [
    {
      name: 'WhatsApp Business',
      icon: 'whatsapp',
      iconBg: 'bg-green-50',
      status: 'INSTALLED',
      statusColor: 'bg-secondary-container text-on-secondary-fixed-variant',
      description: 'Sync your products directly to WhatsApp and chat with customers to close sales faster.',
      price: null,
      action: 'Configure',
      actionType: 'configure'
    },
    {
      name: 'Facebook Pixel',
      icon: 'facebook',
      iconBg: 'bg-blue-50',
      status: 'Free',
      statusColor: 'text-outline',
      description: 'Track visitor behavior and optimize your ad campaigns for better conversion rates.',
      price: 'Free',
      action: 'Install App',
      actionType: 'install'
    },
    {
      name: 'Google Analytics',
      icon: 'google',
      iconBg: 'bg-orange-50',
      status: 'Free',
      statusColor: 'text-outline',
      description: 'Deep dive into your store traffic and customer journey with GA4 integration.',
      price: 'Free',
      action: 'Install App',
      actionType: 'install'
    },
    {
      name: 'Mailchimp Email',
      icon: 'mailchimp',
      iconBg: 'bg-yellow-50',
      status: '$15/mo',
      statusColor: 'text-tertiary font-bold',
      description: 'Automate your email marketing, abandoned cart recovery, and customer newsletters.',
      price: '$15/mo',
      action: 'Get Started',
      actionType: 'install'
    },
    {
      name: 'Paystack Payments',
      icon: 'paystack',
      iconBg: 'bg-cyan-50',
      status: 'INSTALLED',
      statusColor: 'bg-secondary-container text-on-secondary-fixed-variant',
      description: 'Accept payments via cards, USSD, and bank transfers seamlessly on your checkout page.',
      price: null,
      action: 'Configure',
      actionType: 'configure'
    },
    {
      name: 'Flutterwave',
      icon: 'flutterwave',
      iconBg: 'bg-orange-50',
      status: 'Free',
      statusColor: 'text-outline',
      description: 'Expand your reach across Africa and beyond with multi-currency payment options.',
      price: 'Free',
      action: 'Install App',
      actionType: 'install'
    },
    {
      name: 'Shipbubble Logistics',
      icon: 'shipbubble',
      iconBg: 'bg-purple-50',
      status: 'Per Delivery',
      statusColor: 'text-outline',
      description: 'Automate your shipping, compare courier rates, and track deliveries in real-time.',
      price: 'Per Delivery',
      action: 'Connect Now',
      actionType: 'install'
    },
    {
      name: 'AI Product Writer',
      icon: 'ai',
      iconBg: 'bg-white border border-outline-variant',
      status: 'BETA',
      statusColor: 'bg-primary text-on-primary',
      description: 'Generate high-converting product descriptions and SEO metadata automatically.',
      price: null,
      action: 'Join Waitlist',
      actionType: 'beta',
      beta: true
    }
  ];

  const getIcon = (iconName) => {
    const iconMap = {
      whatsapp: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWNPphL7iIEWB1fuk5bAHl07T6Q6U_1DF1rlgcel7V8gJ2srF2xl_rM1bvWIR_oMybJ12cId_VDFgK3ssPNq3lQ_qGzEf3KxtaUYGYEUhGvpwn2AbvCNDhKNqOzTgS4nKae2dhY-QyJrG8ZPXgqADSVIlYXgiULu65H-Os3wxdBfk-QWFn_FLwH2Op_pNnACSWXJXhXHSsGQwjxgsJjAvHdizYnnbjxOxMPWpDghJrg6_QERGW1XiNe7evdQftw6vThFRYSppE3HgT',
      facebook: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz-mJtagP48YkHIyYT4GLoh6WzdOZ5jh8_AU1mREiBA9DqZsebYNcbM3cGZSctUdahxe7s6-ewiNq1K-aXNAGABlaCZ02HDje4VtryjqaSd4ZfsZvo_0FcaClyBVddbwFc5QkUw_iRsQgVa5lCb1zIQCMVyjHP1CWy_Ts4eEz15f3960M82P1y5NLcbVYptlMB5yJ3Qp9s9MoBN6vV6K9tNEFMgtibfgG-kEzQ7Pw72ybKx_8WrY4dH5uowmwqZr1SOeivzI85GM91',
      google: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsJU-JXq4oA2bbgH93EdXLGao-gKCinCSY9QFDjhTnNlpyPN2jgclOtIv_fJhwq6z-k6hhozRW00hAvWrTPv9WPqp6M1d35a2v0A-Yg2DZ-EygTqTEj9zYDnoE0isluW3ToNmDrOm9z1-WOctZF5rzeUweHeRIZIjrHiq96D9sAJ1OfCn4mGF9BXZJLbYybPRyG3MDasdf1LfTyUK9FeyX3wqWoTj1QwNbgEuVvcxztRv2A8-rUIW_ii295jfn09BwC3BP6NrHpRcO',
      mailchimp: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDq_4q-wrSYTNgWd07FBC-sV8LghgqTi12D4uleygc5olcUBHB6GZVB6A7a9xWmKoToQdxgnE9RKljz--Di1HfwS4OblZXdY1bSP29jDEFAQ-SBvtad5U0N_roM9TeeNa-z5raUDRBP_U2pj5Ri4k0kBc0KQxiZKyWL6svxbbiFdaPVR5aAmimyhlHwl-cV3xmKnxSx1XMdRUGFzlbF1sMNXS-lMVy8VJ3LyYhWLth024bpqTjNnOt5SlOHnLE8lsnzovEITABc6p_',
      paystack: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqUfSkiZ-quxd3OUQd1fJfGGHpjDqVSM8i-I-z8UJ96jbhQDJSNK98jCeyLZkdQT49e2svJXvBo2Yx0RUR0uEgmSQceOAG6PMF6D3X3tzbGds2BDXM74jymvHTfjoIX-Aje0MeT3iIY4-p0-qd37p3NzD1WkHdLcjbJmeQyTjZrTKAVVB3itD-QRaCfmjNJwjmj3PgDtBqtBaBAc5oswPQbA3Im8lNY6NJ00Rrjz0-YZGMtKD2skkxBDtPX8InwHe1kPAO-01d89oI',
      flutterwave: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG3CcgU_5s6UGCJDKqXEf70WEUykqN3WTHeDCjTAAk9ByxhqSZ7qEAdYcS6yfwn1XBg5lkhsLrh-v7dyp3iGaoh4f6t5whetkNd0XV09Mm4lX1GOEl2ug3XZ08ZyGZcBjNN1EENo5JD1lXZtfIB6pCasBr7YNZ3k9HhN9LFP2vyaFkD3B8fjOgFpFB057RrW-eTk10KGn8nC4uSG85WRn7fwm2ngNqHP0q2gbeOnDBjWMswbdaMo26I2tZd5VgkJ8pTJ4iyjPZ3dJn',
      shipbubble: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcqgwOFzZYyfFkF3NmBuehV9umA5NkrXyzCMDL8mgzFIC5qi6zWJDhUBB3jmdAK_Y8-04TB0Gn_4RuYT9OJ7N9OSU-UkTf3SMgOe8vnPsPBkDmFarMPiikLe82yvRy25pbZvUQz4ilHZJJS2X0tfo0htqlTo4IJ04gHqtjvvpIsmKUnoFyFhWqs_wvpNkEEIKbC4yfJEHvSYPlINfxvJF2psUAMJy46gdkXL5Z_ZGfKlyia_DgdBLFixa7BHlRBkjb63A4iftQ6Vm-'
    };
    return iconMap[iconName] || '';
  };
  return (
    <div>
         <header className="fixed top-0 right-0 w-[calc(100%-260px)] h-16 bg-[#f9f9fc] border-b border-[#c2c6d8] flex justify-between items-center px-6 z-40">
        <div className="flex items-center gap-4 bg-[#f3f3f6] rounded-lg px-3 py-1.5 w-96">
          <Search size={20} className="text-[#727687]" />
          <input
            className="bg-transparent border-none focus:ring-0 text-[14px] leading-[20px] w-full placeholder:text-[#727687] outline-none"
            placeholder="Search apps, orders, settings..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[#555f6c] hover:bg-[#f3f3f6] transition-all">
              <MapPin size={20} />
              <span className="text-[14px] leading-[20px]">Headquarters</span>
            </button>
          </div>
          <div className="h-6 w-[1px] bg-[#c2c6d8]"></div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-[#555f6c] hover:bg-[#f3f3f6] rounded-lg">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-[#f9f9fc]"></span>
            </button>
            <div className="flex items-center gap-3 pl-2 cursor-pointer group">
              <div className="text-right">
                <p className="text-[14px] leading-[20px] font-bold leading-tight">Nnaemeka U.</p>
                <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c]">Admin</p>
              </div>
              <img
                className="w-10 h-10 rounded-full object-cover border-2 border-[#dae1ff]"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgDmyJRxV9iRRnMMi9Tx8ZqV303s4o4ON3bBrK3J2fhwBVJ-J2FyQIN-W1Pw5AR-1xZB4JoOzT1mnQx9__-sPhwdL9gecvt4qgzKLYUyhhdmY40g9SG7625CXdoGSH2Mzf9yIKBXQwQd2dBU6CqM_ABxC5d0_UEormW3CuCnEcIRvAiHnXGpOIlM0Vg-7vXK_sPj7tf7QK20bF0V-S9B0_ucbuXX1OZyzy0TVVBhtfDmnKewHuS_6aK5nNJCCt9R74weZhBtmxlDiq"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pr-6 pb-6 min-h-screen">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e]">Extensions</h2>
            <p className="text-[#555f6c] mt-1">Supercharge your business with integrated third-party applications.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#c2c6d8] text-[14px] leading-[20px] text-[#555f6c] hover:bg-[#eeeef0] transition-all">
              <Settings size={20} />
              Manage Installed
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0050cb] text-white text-[14px] leading-[20px] font-bold hover:opacity-90 transition-all">
              <Plus size={20} />
              Request Extension
            </button>
          </div>
        </div>

        {/* Hero Featured Section */}
        <section className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-xl bg-[#0050cb] text-white p-10 flex flex-col justify-center min-h-[320px] shadow-sm group">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700"></div>
            <div className="relative z-10 max-w-lg">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[12px] leading-[16px] tracking-[0.05em] font-medium mb-4">RECOMMENDED FOR YOU</span>
              <h3 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold mb-4">Advanced Inventory Pro</h3>
              <p className="text-[16px] leading-[24px] opacity-90 mb-8">Take control of complex stock across multiple channels. Predictive restock alerts, serial number tracking, and automated warehouse management.</p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-[#0050cb] px-8 py-3 rounded-lg text-[14px] leading-[20px] font-bold hover:bg-[#f8f7ff] transition-colors">
                  Upgrade Now
                </button>
                <button className="text-white text-[14px] leading-[20px] font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Learn more <ArrowRight size={20} />
                </button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block p-8">
              <div
                className="w-full h-full bg-contain bg-no-repeat bg-center opacity-80"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKQrm7h6l5tI6e9vkJ72OIdZ0LlzAX06Q1bxWglutjpGzSYYn4Wjkn1m2WaDlPrRY66O-rDxKHkMgpOOPA35l14NxrRDQkYAox3t4wYFcc285k8AVKdgQ91LGWrLazqbF7EQsbI2PjKiUoT_wxuM8s5gIQlkmd9PwPdkuE4j2pDTar1nqdkBmrwp1RnHwf-a7Sb--SvveM9j-eEIJiVd7sV2yysstlpaZBJaVHOBtXQmNXrEx93pO0VcElpekylK5_DMMFhnoZ3fps')"
                }}
              />
            </div>
          </div>

          {/* Side Card */}
          <div className="col-span-12 lg:col-span-4 bg-white rounded-xl p-8 border border-[#c2c6d8] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] flex flex-col">
            <div className="bg-[#dae1ff] p-3 rounded-lg w-fit mb-6">
              <TrendingUp size={32} className="text-[#0050cb]" />
            </div>
            <h4 className="text-[20px] leading-[28px] font-semibold mb-2">Marketplace Growth</h4>
            <p className="text-[#555f6c] mb-8">Connect to 10+ new channels and increase your reach by up to 45%.</p>
            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between p-3 bg-[#f9f9fc] rounded-lg">
                <span className="text-[14px] leading-[20px]">Active Connections</span>
                <span className="text-[24px] leading-[32px] font-bold text-[#0050cb]">08</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#f9f9fc] rounded-lg">
                <span className="text-[14px] leading-[20px]">Potential Reach</span>
                <span className="text-[24px] leading-[32px] font-bold text-[#a33200]">+12k</span>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Tabs */}
        <div className="flex items-center gap-8 border-b border-[#c2c6d8] mb-6 overflow-x-auto whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-2 py-4 border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[#0050cb] text-[#0050cb] font-bold'
                  : 'border-transparent text-[#555f6c] hover:text-[#0050cb]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Extension Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {extensions.map((ext, index) => {
            const isBeta = ext.beta;
            const isInstalled = ext.status === 'INSTALLED';
            const isConfigure = ext.actionType === 'configure';

            return (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex flex-col ${
                  isBeta ? 'border-dashed border-[#0050cb]/40 bg-[#0050cb]/5' : 'border-[#c2c6d8]'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-14 h-14 rounded-xl ${ext.iconBg} flex items-center justify-center`}>
                    {ext.icon === 'ai' ? (
                      <Sparkles size={32} className="text-[#0050cb]" />
                    ) : (
                      <div
                        className="w-10 h-10 bg-contain bg-no-repeat"
                        style={{ backgroundImage: `url(${getIcon(ext.icon)})` }}
                      />
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${ext.statusColor}`}>
                    {ext.status}
                  </span>
                </div>
                <h5 className="text-[20px] leading-[28px] font-semibold mb-2">{ext.name}</h5>
                <p className="text-[#555f6c] text-[14px] leading-[20px] mb-6 flex-1">{ext.description}</p>
                {isConfigure || isInstalled ? (
                  <div className="flex items-center gap-3">
                    <button className="flex-1 border border-[#0050cb] text-[#0050cb] py-2 rounded-lg text-[14px] leading-[20px] font-bold hover:bg-[#d9e3f2] transition-all">
                      {ext.action}
                    </button>
                    <button className="p-2 text-[#555f6c] hover:bg-[#eeeef0] rounded-lg transition-all">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                ) : isBeta ? (
                  <button className="w-full border-2 border-[#0050cb] text-[#0050cb] py-2 rounded-lg text-[14px] leading-[20px] font-bold hover:bg-[#0050cb] hover:text-white transition-all">
                    {ext.action}
                  </button>
                ) : (
                  <button className="w-full bg-[#0050cb] text-white py-2 rounded-lg text-[14px] leading-[20px] font-bold hover:opacity-90 transition-all">
                    {ext.action}
                  </button>
                )}
              </div>
            );
          })}
        </section>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-[#c2c6d8] hover:bg-[#eeeef0] disabled:opacity-50" disabled>
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 rounded-lg bg-[#0050cb] text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg hover:bg-[#eeeef0] text-[#555f6c]">2</button>
            <button className="w-10 h-10 rounded-lg hover:bg-[#eeeef0] text-[#555f6c]">3</button>
            <span className="px-2 text-[#727687]">...</span>
            <button className="w-10 h-10 rounded-lg hover:bg-[#eeeef0] text-[#555f6c]">12</button>
            <button className="p-2 rounded-lg border border-[#c2c6d8] hover:bg-[#eeeef0]">
              <ChevronRight size={20} />
            </button>
          </nav>
        </div>
      </main>
    </div>
  )
}

export default page