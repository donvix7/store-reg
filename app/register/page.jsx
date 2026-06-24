import { Shield, BarChart3, Settings, Network, Star, ArrowRight, Building2, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body text-on-background antialiased">
      {/* Top Navigation Bar (Shared Component Anchor) */}
     
      <main className="grow grid grid-cols-12 lg:grid-cols-12">
        {/* Left Column: Marketing / Social Proof */}
        <section className="col-span-4 sm:col-span-4 space-y-10 relative h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-primary p-5 flex-col gap-10 justify-between text-on-primary">
          {/* Decorative Background Element */}
           <header className=" text-white justify-start  border-b border-outline-variant/15 z-50">
            <div className="flex items-center gap-3">
              <Shield className="text-white" size={24} fill="currentColor" />
              <span className="font-headline font-extrabold text-white text-lg tracking-tight">Inventory Management</span>
            </div>
          </header>
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-full h-full rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-1/4 -left-12 w-full h-full rounded-full bg-primary-container blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h1 className="text-4xl font-headline font-extrabold leading-tight mb-8">
              Master your logistics  with surgical precision.
            </h1>
            <div className="space-y-12 mt-12">
              {/* Feature Item */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <BarChart3 className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-2">Real-time Visibility</h3>
                  <p className="text-on-primary/70 leading-relaxed">Monitor stock levels across multiple warehouses with millisecond latency and predictive forecasting.</p>
                </div>
              </div>
              {/* Feature Item */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Settings className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-2">Automated Procurement</h3>
                  <p className="text-on-primary/70 leading-relaxed">Set intelligent thresholds that trigger restock orders before you ever hit a critical low.</p>
                </div>
              </div>
              {/* Feature Item */}
              <div className="flex flex-col items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Network className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold mb-2">Unified Ecosystem</h3>
                  <p className="text-on-primary/70 leading-relaxed">Seamlessly integrate with 50+ ERP and logistics providers through our high-performance API.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial/Social Proof */}
          <div className="relative z-10 bg-white/5 p-5 rounded-xl border border-white/10 mt-5">
            <div className="flex gap-1 mb-4">
              <Star className="text-yellow-400" size={14} fill="currentColor" />
              <Star className="text-yellow-400" size={14} fill="currentColor" />
              <Star className="text-yellow-400" size={14} fill="currentColor" />
              <Star className="text-yellow-400" size={14} fill="currentColor" />
              <Star className="text-yellow-400" size={14} fill="currentColor" />
            </div>
            <p className="italic text-lg text-on-primary/90 mb-6 font-body">Inventory Pro transformed our supply chain. We've reduced out-of-stock incidents by 42% in just three months.</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <img className="w-full h-full object-cover" alt="Profile photo of logistics director" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSZQaZagZ2YQP15YT9gPZ9mVetMJEbR3xKJDs4K62ItLw5vJwZKrzvSe_dCvycFv8pvGfNZ4f8N1eKo3dC9ad7uDtA5kGRFNQis_y34n3qxaWS2b8d_4xpNXFqr182fYH5erz4PTwmjR9s17R-yMBSE_l6WH5S5-_KG1xSb2MfMJBZ8_oAm2RYmQFK0NOlcbY6_HBDZl_p0l6AViZPOAG1csy1sgfXUkbNQKEPyNPKI9EYYv7oL2UeXf9Y262cwbZxlfNSA65pZ8"/>
              </div>
              <div>
                <p className="font-bold text-sm">Marcus Chen</p>
                <p className="text-xs text-on-primary/60">Operations Director, Apex Logistics</p>
              </div>
            </div>
          </div>
        </section>
        {/* Right Column: Signup Form */}
        <section className="col-span-12 sm:col-span-8 flex items-center justify-center   bg-surface">
          <div className="w-120">
            <div className="mb-12">
              <h2 className="text-3xl font-headline font-extrabold text-on-surface mb-2">Create Account</h2>
              <p className="text-on-surface-variant font-body">Begin your journey to architectural stock control.</p>
            </div>
            <form className="space-y-4">
              {/* Full Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4">
                <div className="space-y-2 ">
                <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">First Name</label>
                <div className="relative group">
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="John Doe" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">Last Name</label>
                <div className="relative group">
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="John Doe" type="text" />
                </div>
              </div>
              </div>
              
              {/* Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4">

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">Work Email</label>
                <div className="relative group">
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">Phone Number</label>
                <div className="relative group">
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="John Doe" type="text" />
                </div>
              </div>
              </div>
              {/* Password Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">Password</label>
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="••••••••" type="password" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-outline tracking-wider uppercase font-label">Confirm Password</label>
                  <input className="w-full p-2 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none placeholder:text-outline/50 text-on-surface font-body" placeholder="••••••••" type="password" />
                </div>
              </div>
              {/* Terms Agreement */}
              <div className="flex items-start gap-2 p-4">
                <div className="flex items-center h-5">
                  <input className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded" type="checkbox" />
                </div>
                <label className="text-sm text-on-surface-variant leading-relaxed font-body">
                  I agree to the <a className="text-primary font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary font-semibold hover:underline" href="#">Privacy Policy</a>.
                </label>
              </div>
              {/* CTA Button */}
              <button className="w-full px-16 mx-auto py-4 bg-primary hover:bg-primary-container text-on-primary font-bold rounded-xl transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2 group" type="submit">
                <span>Create Account</span>
                <ArrowRight className="text-xl group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              {/* Divider */}
              <div className="relative flex items-center py-4">
                <div className="grow border-t border-outline-variant/30"></div>
                <span className="shrink mx-4 text-xs font-semibold text-outline uppercase tracking-widest font-label">Or Join With</span>
                <div className="grow border-t border-outline-variant/30"></div>
              </div>
              {/* Social Signup Options */}
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3 bg-white border-2 border-primary rounded-xl  hover:bg-surface-container-low transition-colors" type="button">
                  <Globe2 className='text-primary' size={18} fill="currentColor"/>
                  <span className="text-sm font-semibold text-primary font-label">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3 bg-primary rounded-xl hover:opacity-90 transition-opacity" type="button">
                  <Building2 className="text-white" size={18} fill="currentColor" />
                  <span className="text-sm font-semibold text-white font-label">SSO</span>
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm text-on-surface-variant font-body">
              Already have an account? 
              <Link className="text-primary font-bold hover:underline ml-1" href="/login">Sign in here</Link>
            </p>
          </div>
        </section>
      </main>
      
    </div>
  );
}