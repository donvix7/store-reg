import { Package, Lock, UserCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResetPasswordPage() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-body">
      <main className="flex min-h-screen">
        {/* Left Side: Visual/Brand Side */}
        <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 bg-primary overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary-container blur-[120px] opacity-40"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-surface-tint blur-[100px] opacity-30"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center shadow-lg">
                <Package className="text-primary" size={24} fill="currentColor" />
              </div>
              <span className="font-headline text-on-primary text-xl font-bold tracking-tight">Inventory Management</span>
            </div>
          </div>

          <div className="relative z-10 max-w-md">
            <h1 className="font-headline text-5xl font-extrabold text-on-primary leading-tight mb-6">
              Precision in every <span className="text-primary-fixed">component.</span>
            </h1>
            <p className="text-on-primary-container text-lg opacity-90 leading-relaxed">
              Access the atelier&apos;s central nervous system. Securely manage inventory, track orders, and orchestrate logistics with architectural clarity.
            </p>
          </div>

          <div className="relative z-10 flex gap-12">
            <div className="flex flex-col">
              <span className="text-primary-fixed text-3xl font-bold font-headline">99.9%</span>
              <span className="text-on-primary-container text-sm font-label uppercase tracking-widest">Accuracy Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-fixed text-3xl font-bold font-headline">24/7</span>
              <span className="text-on-primary-container text-sm font-label uppercase tracking-widest">Live Syncing</span>
            </div>
          </div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPkbOxRwSmCqoPH_DyB6bC4A3cIGBgBe1fLLZzpImfIpwO4q6zMCYzYUe-zRtknTMPxEHw6zznJhE6kjf0pZ_eH4hx1gmQ3VV_1HwWNB6jCxiCrrSD1zouxUKbrAMyBE6IcwSuXTbyKQZclsAJkzAKJGTmJO2E3YqfDObRtT5MUpMKvLVdf-XgeHPD6WnvdEUW3xQnpvvfSE8c3sF1nSUFqW17KtqciUYEKDb4WPX5F578va19SBjABPU03IDblRLZh0rYyf50vgw')" }}></div>
        </section>

        {/* Right Side: Reset Password Form */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-surface">
          <div className="w-full max-w-md space-y-10">
            <div className="space-y-3">
              <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight">Reset Password</h2>
              <p className="text-on-surface-variant text-base">
                Your new password must be different from previously used passwords to maintain security.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-5">
                {/* New Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface font-label" htmlFor="new_password">New Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="text-outline group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input className="block w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest text-on-surface placeholder:text-outline transition-all" id="new_password" placeholder="••••••••" type="password" />
                  </div>
                  <div className="flex gap-1 mt-2">
                    <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                    <div className="h-1.5 flex-1 rounded-full bg-primary"></div>
                    <div className="h-1.5 flex-1 rounded-full bg-surface-variant"></div>
                    <div className="h-1.5 flex-1 rounded-full bg-surface-variant"></div>
                  </div>
                  <p className="text-xs text-outline font-label">Password strength: <span className="text-primary font-bold">Medium</span></p>
                </div>

                {/* Confirm New Password Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface font-label" htmlFor="confirm_password">Confirm New Password</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <UserCheck className="text-outline group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input className="block w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest text-on-surface placeholder:text-outline transition-all" id="confirm_password" placeholder="••••••••" type="password" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full bg-primary hover:bg-primary-container text-on-primary font-headline font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2" type="button">
                  Reset Password
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>

            <div className="pt-8 border-t border-outline-variant opacity-40">
              <div className="flex justify-between items-center text-sm font-label">
                <Link className="text-primary font-semibold hover:underline flex items-center gap-1" href="/login">
                  <ArrowLeft size={16} />
                  Back to Login
                </Link>
                <span className="text-outline">© 2024 Inventory Pro Systems Inc.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer Rendering (JSON Specified) - Hidden */}
      <footer className="hidden">
        <div className="container mx-auto">
          <span>© 2024 Inventory Pro Systems Inc. All rights reserved.</span>
          <nav>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
