"use client"

import React, { useState } from 'react';
import {
  Store,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  MessageSquare,
  
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Login } from '@/lib/actions';
import Link from 'next/link';

const page = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      email: email,
      password: password
    }

    const res = await Login(payload);

    if(res.success){
      alert(res.message);
      router.push("/dashboard/admin");
    }
    else{
      alert(res.message)
    }
    // Handle login logic here
    console.log('Login submitted:', { email, password, rememberMe });
  };

  const getIconColor = (fieldName) => {
    if (focusedField === fieldName) return '#0050cb';
    return '#727687';
  };

  return (
    <div className="min-h-screen flex bg-[#f9f9fc] text-[#1a1c1e] antialiased overflow-hidden font-['Hanken_Grotesk']">
      {/* Left Side: Interactive Brand Visual (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0050cb] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlD2AxTkhUJtnEj7RchtkZqgFAMETAFosP00XUdHWmDPZvq83gT0F5LT1IUrKHoPvLgMWstvx6UAFMSBPEb9q2YlZypZf0gY2MCKi2gjLlu0m8f49Ud3t6Sx_VZ7BM2OCzJMeIL6RTJuF0QKOjSDDO9LPpjHqhECSJWmMreAgFeLqxRrnecAPhIk4M9Y6Fk5xci8lJle2aQZkYA0-g95Een6_ZwDlNsYEZwfSAFLwT0Bx1sgYlDa1uqkvRd8QNIzBmbaL3-92v7Kbt')"
            }}
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0050cb]/80 via-[#0050cb]/20 to-transparent"></div>
        </div>

        {/* Floating Content */}
        <div className="relative z-10 p-12 max-w-lg text-white">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[12px] leading-[16px] tracking-[0.05em] font-medium uppercase text-white mb-6">
              Established 2024
            </span>
            <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold leading-tight mb-4">
              Empowering the next billion merchants.
            </h1>
            <p className="text-[16px] leading-[24px] text-[#dae1ff] opacity-90">
              Manage your business, orders, and growth all in one place. Join over 100,000 successful sellers across Africa today.
            </p>
          </div>

          {/* Stats/Social Proof */}
          <div className="grid grid-cols-2 gap-4 mt-12">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#dae1ff] uppercase mb-1">Active Users</p>
              <p className="text-[24px] leading-[32px] font-bold text-white">100k+</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl">
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#dae1ff] uppercase mb-1">Daily Sales</p>
              <p className="text-[24px] leading-[32px] font-bold text-white">₦2.5B+</p>
            </div>
          </div>
        </div>

        {/* Atmospheric micro-pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col px-8 md:px-16 lg:px-24 py-24 justify-center relative">
        {/* Mobile Brand Header */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center text-white">
            <Store size={24} fill="white" />
          </div>
          <span className="text-[20px] leading-[28px] font-bold text-[#0050cb]">inventory</span>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Desktop Header */}
          <div className="hidden lg:flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#0066ff]/20">
              <Store size={28} fill="white" />
            </div>
            <span className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#0050cb] tracking-tight">inventory</span>
          </div>

          <div className="mb-10">
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mb-2">Welcome back</h2>
            <p className="text-[16px] leading-[24px] text-[#555f6c]">Log in to manage your store and view your sales performance.</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-[12px] leading-[16px] tracking-[0.05em] text-[#555f6c] uppercase font-semibold" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail size={20} color={getIconColor('email')} />
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)]"
                  id="email"
                  name="email"
                  placeholder="merchant@business.com"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-[12px] leading-[16px] tracking-[0.05em] text-[#555f6c] uppercase font-semibold" htmlFor="password">
                  Password
                </label>
                <a className="text-[12px] leading-[16px] tracking-[0.05em] text-[#0050cb] hover:underline transition-all" href="#">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock size={20} color={getIconColor('password')} />
                </span>
                <input
                  className="w-full pl-12 pr-12 py-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066FF] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)]"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727687] hover:text-[#0050cb] transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input
                className="w-5 h-5 rounded border-[#c2c6d8] text-[#0050cb] focus:ring-[#0066ff] cursor-pointer"
                id="remember"
                name="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="text-[14px] leading-[20px] text-[#555f6c] select-none cursor-pointer" htmlFor="remember">
                Remember me on this device
              </label>
            </div>

            {/* Sign In Button */}
            <button

              className="w-full bg-[#0066ff] text-white py-4 px-6 rounded-lg text-[20px] leading-[28px] font-semibold hover:bg-[#0050cb] transition-all shadow-lg shadow-[#0066ff]/20 active:scale-[0.98] flex items-center justify-center gap-2"
              type="submit"
            >
              Sign In
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Social Login Separator */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#c2c6d8]"></div>
            </div>
            <div className="relative flex justify-center text-[12px] leading-[16px] tracking-[0.05em] font-medium">
              <span className="px-4 bg-white text-[#727687] uppercase">Or continue with</span>
            </div>
          </div>

          {/* Social Options */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] hover:bg-[#f3f3f6] transition-colors active:scale-[0.98]">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] hover:bg-[#f3f3f6] transition-colors active:scale-[0.98]">
              <MessageSquare size={20} className="text-[#1877F2]" fill="#1877F2" />
              Facebook
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-[14px] leading-[20px] text-[#555f6c]">
            Don't have an account yet?
            <Link className="text-[#0050cb] font-semibold hover:underline decoration-2 underline-offset-4 ml-1" href="/auth/register">
              Create an account
            </Link>
          </p>
        </div>

        {/* Legal Footer */}
        <div className="mt-16 text-center text-[#727687] text-[12px] leading-[16px] tracking-[0.05em] font-medium">
          <p>© 2024 inventory E-commerce. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a className="hover:text-[#0050cb] transition-colors" href="#">Privacy Policy</a>
            <span className="text-[#c2c6d8]">•</span>
            <a className="hover:text-[#0050cb] transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;