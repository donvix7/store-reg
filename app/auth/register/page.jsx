"use client"
import React, { useState } from 'react';
import {
  Store,
  User,
  Building2,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck
} from 'lucide-react';
import { createProfile } from '@/lib/actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
    let payload = {
      email: email,
      password: password,
      business_name: businessName,
      phone: phone,
      full_name: fullName
    }
    const res = await createProfile(payload)
    if(res) {
      alert(res.message)
      router.push('/auth/store-setup')
    }
    else{
      alert(res.message)
    }
  };

  const getIconColor = (fieldName) => {
    if (focusedField === fieldName) return '#0066ff';
    return '#555f6c';
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#f9f9fc] font-['Hanken_Grotesk'] text-[#1a1c1e]">
      {/* Left Section: Branding & Atmospheric Visual */}
      <section className="relative hidden md:flex md:w-5/12 lg:w-1/2 flex-col justify-between p-12 bg-[#0050cb] overflow-hidden">
        {/* Background Shader */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,84,214,0.4)] to-[rgba(0,24,73,0.8)]"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Store className="text-[#0050cb] font-bold" size={24} />
            </div>
            <span className="text-[20px] leading-[28px] text-white tracking-tight font-semibold">inventory</span>
          </div>
          <div className="max-w-md">
            <h1 className="text-[48px] leading-[56px] tracking-[-0.02em] font-bold text-white mb-6 leading-tight">
              Empower your business with digital precision.
            </h1>
            <p className="text-[16px] leading-[24px] text-[#dae1ff] opacity-90 leading-relaxed">
              Join 50,000+ merchants who have scaled their operations using inventory's professional e-commerce toolkit. Manage orders, inventory, and analytics in one unified dashboard.
            </p>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-[#0066ff] object-cover"
                alt="Professional headshot of a female entrepreneur"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAbKH81cXSUQER7Grxbj4S3jw7LUbMBKUi__uZEaz8hCc6iOANTWsJ-UfCf3sUkIUcKTt_IqhDKRORWgAmiATfESPJVmdXhfXQn-qMuFaemU7snqTgPAfqNNpU5wjYXXyuBZDZPEO4WMzXDXSe7TBglmeUSK-HtalNEeLljnhe_1x8GBlTKqjbiHpf52088hSiCHFbMlJTl_nFWmC_g3mgFV7jq6zaALV_jdj0UJ7QaF2Q6CwmFS3lyPoD7ZqgJVCcc7xfpm5roskc"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#0066ff] object-cover"
                alt="Confident male business owner"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN0wk4yRylbZsKrmozQOYwXfGYr4iMAUNm1gehekBLrTbV6BaQ-ij66rwtQzEPqRQ8y-_H6DlYpmiddQqsH3_mvPlreU-XES1rtMcqCauas2usNH4GIy7NRzFj4tlwI0e2x5vBC2Zc3WzMLsncXhVpxkGNmco5prpkNryMv6XK8473HBB7oJImlgVkIakCYxjHi8ovmZaJuJcP86vIBRykCxxWqcgl-xESFcER1OQJaJNQENfKyyahVl-6KrWVJQlw2N9bARKgOI1Y"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-[#0066ff] object-cover"
                alt="Professional merchant with tablet"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5_gXKEfLgQ_kcse0S2PdlElybkpJ8Geow1jDTwu7hGRx8powUd3Jg06zIEbQZxPO9u7ZItmbZCv5Kh9b1Yx4JSf8VMuzGsXfiwsWtza45LplKSMt9erpypg5dlTr0pd0o0NsSeM7z1LC2B0cgGDwiH4Bo3RdVdKZ5LGBzARFnNZB0X--a1t27druOLHkzauorsF56wfuVWrNKfXGhgMI8QsY6fr8eNQFBKhz29ExWKLrJ4QstCShqX0QDD33XaxgcbCCbAYGU7j1H"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[20px] text-white font-bold">Trusted by global merchants</p>
              <p className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#b3c5ff]">Join our thriving community today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Section: Registration Form */}
      <section className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-24 bg-[#f9f9fc] overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="md:hidden flex items-center gap-2 mb-8">
            <Store className="text-[#0050cb] text-3xl font-bold" size={32} />
            <span className="text-[20px] leading-[28px] text-[#0050cb] font-extrabold tracking-tight">inventory</span>
          </div>

          <header className="mb-10">
            <h2 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#1a1c1e] mb-2">Create your account</h2>
            <p className="text-[14px] leading-[20px] text-[#555f6c]">Start your 14-day growth journey today.</p>
          </header>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] block" htmlFor="full_name">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User size={18} color={getIconColor('fullName')} />
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]"
                  id="full_name"
                  placeholder="John Doe"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Business Name */}
            <div className="space-y-1.5">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] block" htmlFor="business_name">
                Business Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Building2 size={18} color={getIconColor('businessName')} />
                </span>
                <input
                  className="w-full h-12 pl-10 pr-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]"
                  id="business_name"
                  placeholder="Acme Corporation"
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  onFocus={() => setFocusedField('businessName')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] block" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Mail size={18} color={getIconColor('email')} />
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] block" htmlFor="phone">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Phone size={18} color={getIconColor('phone')} />
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-4 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]"
                    id="phone"
                    placeholder="+234..."
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] block" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Lock size={18} color={getIconColor('password')} />
                </span>
                <input
                  className="w-full h-12 pl-10 pr-12 bg-white border border-[#c2c6d8] rounded-lg text-[14px] leading-[20px] outline-none transition-all focus:border-[#0066ff] focus:shadow-[0_0_0_4px_rgba(0,102,255,0.15)]"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#555f6c] hover:text-[#0050cb] transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* No Credit Card Badge */}
            <div className="flex items-center gap-2 py-2 px-4 bg-[#d9e3f2]/30 rounded-lg w-fit">
              <ShieldCheck size={14} className="text-[#0066ff]" fill="#0066ff" />
              <span className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#3e4853]">No credit card required</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-14 bg-[#0066ff] text-white text-[20px] leading-[28px] font-semibold rounded-lg shadow-lg hover:shadow-[#0066ff]/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
            >
              Get Started for Free
            </button>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-[14px] leading-[20px] text-[#555f6c]">
                Already have an account?
                <Link className="text-[#0050cb] font-bold hover:underline ml-1" href="/auth/login">Sign in</Link>
              </p>
            </div>
          </form>

          <footer className="mt-12 pt-8 border-t border-[#c2c6d8]">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] hover:text-[#0050cb] transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] hover:text-[#0050cb] transition-colors" href="#">
                Terms of Service
              </a>
              <a className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#555f6c] hover:text-[#0050cb] transition-colors" href="#">
                Help Center
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Registration;