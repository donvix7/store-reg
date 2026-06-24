import { ArrowRight, Activity, Bot, Network, Quote } from 'lucide-react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 md:mb-8">
                Precision in Every <span className="text-primary">Component</span>
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl font-body leading-relaxed mb-8 md:mb-10 max-w-lg">
                Experience an architectural approach to stock control. We provide the clarity and structural integrity required for modern enterprise ecosystems.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-primary text-on-primary font-label text-md font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Start Free Trial
                </button>
                <button className="text-on-surface font-label text-md font-semibold px-8 py-4 flex items-center gap-2 group">
                  Book a Demo 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="bg-surface-container-highest rounded-xl p-4 shadow-2xl relative z-10">
                <Image src="/inventory image.jpg" alt="Inventory image" className="rounded-lg w-full object-cover aspect-4/3" width={750} height={900}/>
              </div>
              {/* Abstract Background Shape */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed-dim/30 rounded-full blur-3xl z-0"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-container/50 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </section>


        {/* Benefits Section (Bento Grid) */}
        <section className="py-32 p-6 sm:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <span className="text-primary font-label font-bold text-sm tracking-widest uppercase mb-4 block">Core Competencies</span>
              <h2 className="text-5xl font-headline font-bold text-on-surface">Architectural Excellence in Logistics</h2>
            </div>
            <div className="grid grid-cols-12 gap-8">
              {/* Benefit 1 */}
              <div className="col-span-12 md:col-span-7 bg-surface-container-lowest p-6 rounded-xl group hover:shadow-xl transition-shadow border border-outline-variant/10">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <Activity className="text-primary my-10" size={36} />
                    <h3 className="text-3xl font-headline font-bold mb-4 text-on-surface">Real-time Visibility</h3>
                    <p className="text-on-surface-variant font-body text-lg leading-relaxed max-w-md">
                      Monitor every SKU across global warehouses with millisecond latency. Our precision engine ensures your data is never stale.
                    </p>
                  </div>
                  <div className="mt-12 h-40 bg-surface-container rounded-lg overflow-hidden flex items-end px-4 gap-2">
                    <div className="w-full bg-primary/20 h-1/2 rounded-t-sm"></div>
                    <div className="w-full bg-primary/40 h-3/4 rounded-t-sm"></div>
                    <div className="w-full bg-primary h-2/3 rounded-t-sm"></div>
                    <div className="w-full bg-primary/60 h-full rounded-t-sm"></div>
                    <div className="w-full bg-primary/30 h-1/3 rounded-t-sm"></div>
                    <div className="w-full bg-primary/80 h-4/5 rounded-t-sm"></div>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="col-span-12 md:col-span-5 bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-between">
                <div>
                  <Bot className="mb-8" size={36} />
                  <h3 className="text-3xl font-headline font-bold mb-4">Automated Procurement</h3>
                  <p className="text-primary-fixed-dim font-body text-lg leading-relaxed">
                    AI-driven restocking protocols that adapt to market volatility and lead-time fluctuations automatically.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-4">
                  <div className="h-2 w-full bg-on-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-on-primary w-2/3"></div>
                  </div>
                  <span className="text-sm font-label opacity-80">67% Optimization Achieved</span>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="col-span-12 bg-surface-container-high p-12 rounded-xl flex items-center justify-between gap-12 group hover:bg-surface-container-highest transition-colors">
                <div className="max-w-xl">
                  <Network className="text-secondary mb-8" size={36} />
                  <h3 className="text-3xl font-headline font-bold mb-4 text-on-surface">Unified Ecosystem</h3>
                  <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                    Seamlessly integrate with your existing ERP, CRM, and logistics providers. A single source of truth for your entire operation.
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-4 justify-end max-w-sm">
                  <div className="px-6 py-3 bg-surface-container-lowest rounded-full font-label text-sm font-semibold text-primary shadow-sm">SAP Integration</div>
                  <div className="px-6 py-3 bg-surface-container-lowest rounded-full font-label text-sm font-semibold text-primary shadow-sm">Salesforce</div>
                  <div className="px-6 py-3 bg-surface-container-lowest rounded-full font-label text-sm font-semibold text-primary shadow-sm">Oracle</div>
                  <div className="px-6 py-3 bg-surface-container-lowest rounded-full font-label text-sm font-semibold text-primary shadow-sm">Shopify Plus</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-surface-container-lowest py-32 px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <Quote className="text-primary mb-8 mx-auto" size={56} fill="currentColor" />
            </div>
            <blockquote className="text-4xl font-headline font-medium text-on-surface leading-tight mb-12">
              &quot;Equilibrium hasn&apos;t just managed our store; it has redefined how we conceptualize our entire supply chain. The precision is unmatched.&quot;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img alt="Professional portrait of a male executive" className="w-16 h-16 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGo2dnw5fmnYMzTiG0nfDN0UTaC1XpsnI8NVyXnDmiB9w3BCEJWzu9YQOgM5DOXpFHkcmTG2h5G18eg7nwsVZRZR5ypWbksxQdaM_efulMMwdIwK5IZ-NOQUJ7kMUFNVbec1A68lSIzdGakJBdH6A8LqNTktqoGUdUU_BsUJhZ35or_mapmfefz6WbD4sGajbwOS0gUIB7f3xrnLMA5TRE7IEtkb3BbXIRGXpTp1Am9bZcRaCBPO2JTkKDu7_XGGRCU3w6CFn5yWc"/>
              <div className="text-left">
                <p className="text-on-surface font-headline font-bold">Marcus Sterling</p>
                <p className="text-secondary font-label text-sm">Director of Operations, Sterling Logistics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 p-6 sm:px-24">
          <div className="max-w-7xl mx-auto bg-inverse-surface rounded-4xl p-20 relative overflow-hidden text-center">
            <div className="relative z-10">
              <h2 className="text-5xl font-headline font-bold text-inverse-on-surface mb-6">Ready to balance your inventory?</h2>
              <p className="text-outline-variant font-body text-xl mb-12 max-w-2xl mx-auto">
                Join 2,000+ enterprises managing over $4B in assets through our precision platform.
              </p>
              <button className="bg-primary-fixed text-on-primary-fixed font-label text-lg font-bold px-12 py-5 rounded-xl hover:bg-primary-fixed-dim transition-all">
                Request Access
              </button>
            </div>
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 blur-[80px] rounded-full"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
