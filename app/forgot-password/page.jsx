import { Landmark, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen font-body">
      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Side: Brand Imagery & Messaging */}
        <section className="relative hidden lg:flex flex-col justify-between p-24 overflow-hidden bg-primary">
          {/* Decorative Background Element */}
          <div className="absolute inset-0 z-0">
            <img 
              alt="Modern architectural lines and precision glass" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCGuU_U0tzxjtU-LJqNt8KMgFCDNKwjDB2y3V_yp7OXZS6tPCi5IG91q0bJTsNiVonROf4TuL30AwUYgCcd5yKT-uf8rJI3--3aQgl6PugIY7dYV0HnorcIgsD6ztOKjMNKhYAEaD-FX3lDB-Iam7j_PlADAOemVLC49IgQDVaOZBe42eggP8yITMW-mF6ep49xB1D1PNFm4PHX_CnwKIhHseu3HJJLaoHr6WQljApVdJy3fVm5W4y5Tqzgo8W9-kpL3vqvMxAJi8"
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-container to-primary-fixed/20"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-on-primary">
              <Landmark size={30} fill="currentColor" />
              <span className="font-headline font-bold text-xl tracking-tight">Inventory Management</span>
            </div>
          </div>
          
          <div className="relative z-10 max-w-lg">
            <h1 className="font-headline text-5xl font-extrabold text-on-primary leading-tight mb-6">
              The Precision Atelier
            </h1>
            <p className="text-on-primary-container text-lg leading-relaxed font-body">
              Restoring order to your inventory ecosystem. Our architectural approach ensures every SKU resides in its perfect place, maintaining the delicate balance of your supply chain.
            </p>
          </div>
          
          <div className="relative z-10 flex gap-4">
            <div className="h-1 w-12 bg-on-primary/30 rounded-full"></div>
            <div className="h-1 w-12 bg-on-primary rounded-full"></div>
            <div className="h-1 w-12 bg-on-primary/30 rounded-full"></div>
          </div>
        </section>

        {/* Right Side: Reset Form */}
        <section className="flex items-center justify-center p-8 lg:p-24 bg-surface">
          <div className="w-full max-w-md space-y-12">
            {/* Mobile Branding (Hidden on Desktop) */}
            <div className="lg:hidden flex items-center gap-2 mb-8">
              <Landmark className="text-primary" size={24} fill="currentColor" />
              <span className="font-headline font-bold text-on-surface">Inventory Management</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="font-headline text-4xl font-bold text-on-surface tracking-tight">
                Forgot Password?
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed">
                Enter the email address associated with your account and we&apos;ll send you a link to reset your credentials.
              </p>
            </div>
            
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-on-surface-variant font-label" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                    <Mail size={20} />
                  </div>
                  <input 
                    className="block w-full pl-12 pr-4 py-4 bg-surface-container-highest border-none rounded-xl text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200" 
                    id="email" 
                    name="email" 
                    placeholder="name@company.com" 
                    required 
                    type="email"
                  />
                </div>
              </div>
              
              <Link className="w-full py-4 px-6 bg-primary text-on-primary font-headline font-bold rounded-xl shadow-lg shadow-primary/10 hover:bg-primary-container hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2" href="/reset-password">
                <span>Send Reset Link</span>
                <ArrowRight size={20} />
              </Link>
              
              <div className="flex items-center justify-center pt-4">
                <Link className="text-sm font-semibold text-primary hover:text-primary-container flex items-center gap-1 transition-colors" href="/login">
                  <ArrowLeft size={18} />
                  Back to Sign In
                </Link>
              </div>
            </form>
            
            {/* Footer Info */}
            <footer className="pt-12 border-t border-outline-variant/15">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <p className="text-xs text-outline font-label">© 2024 Inventory Pro Systems • Precise Operations Division</p>
                <div className="flex gap-4">
                  <a className="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
                  <a className="text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
      
      {/* Visual Polish: Architectural Detail */}
      <div className="fixed top-0 right-0 w-32 h-32 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full fill-on-surface" viewBox="0 0 100 100">
          <path d="M0 0 L100 100 M20 0 L100 80 M40 0 L100 60 M60 0 L100 40 M80 0 L100 20"></path>
        </svg>
      </div>
    </div>
  );
}
