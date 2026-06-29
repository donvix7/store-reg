"use client"
import React, { useState } from 'react';
import {
  Rocket,
  Mail,
  ArrowRight,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9fc] font-['Hanken_Grotesk'] text-[#1a1c1e] relative">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#0050cb] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-[#0050cb] opacity-[0.03] blur-[120px] rounded-full"></div>
      </div>

      {/* Main Container */}
      <main className="w-full max-w-[440px] animate-[fadeIn_0.7s_ease-out] px-4">
        {/* Brand Identity */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-[#0066ff] rounded-xl flex items-center justify-center shadow-lg mb-4">
            <Rocket className="text-white text-[28px]" size={28} fill="white" />
          </div>
          <h1 className="text-[32px] leading-[40px] tracking-[-0.01em] font-bold text-[#0050cb]">inventory</h1>
        </div>

        {/* Auth Card */}
        <section className="bg-white p-6 rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] border border-[#c2c6d8]/30">
          <div className="text-center mb-6">
            <h2 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2">Reset Password</h2>
            <p className="text-[14px] leading-[20px] text-[#555f6c]">Enter your email to receive a reset link</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isSubmitted ? (
              <>
                {/* Email Input */}
                <div className="flex flex-col space-y-1.5">
                  <label className="text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#424656] uppercase" htmlFor="email">
                    Email Address
                  </label>
                  <div className={`relative border rounded-lg bg-white overflow-hidden transition-all duration-200 ${
                    isFocused ? 'border-[#0066FF] shadow-[0_0_0_4px_rgba(0,102,255,0.1)]' : 'border-[#c2c6d8]'
                  }`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={`text-[20px] ${isFocused ? 'text-[#0050cb]' : 'text-[#555f6c]'}`} size={20} />
                    </div>
                    <input
                      className="block w-full pl-10 pr-4 py-3 border-none focus:ring-0 text-[14px] leading-[20px] text-[#1a1c1e] placeholder:text-[#c2c6d8] bg-transparent outline-none"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full bg-[#0066ff] text-white font-semibold text-[20px] leading-[28px] py-3.5 px-4 rounded-lg shadow-sm hover:bg-[#0050cb] transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span>Send Reset Link</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-4 animate-[fadeIn_0.3s_ease-out]">
                <div className="w-16 h-16 bg-[#832600]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-[#a33200] text-[32px]" size={32} fill="#a33200" />
                </div>
                <h3 className="text-[20px] leading-[28px] font-semibold text-[#1a1c1e] mb-2">Check your email</h3>
                <p className="text-[14px] leading-[20px] text-[#555f6c]">
                  We've sent a password reset link to <span className="font-semibold text-[#1a1c1e]">{email}</span>
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-6 text-[#0050cb] text-[12px] leading-[16px] tracking-[0.05em] font-medium hover:underline"
                >
                  Didn't receive the email? Try again
                </button>
              </div>
            )}
          </form>

          {/* Divider */}
          {!isSubmitted && (
            <div className="relative my-6 flex items-center">
              <div className="flex-grow border-t border-[#c2c6d8]/30"></div>
              <span className="flex-shrink mx-4 text-[12px] leading-[16px] tracking-[0.05em] font-medium text-[#c2c6d8]">OR</span>
              <div className="flex-grow border-t border-[#c2c6d8]/30"></div>
            </div>
          )}

          {/* Footer Link */}
          <div className="text-center">
            <a
              className="inline-flex items-center gap-1.5 text-[14px] leading-[20px] text-[#0050cb] font-semibold hover:text-[#0054d6] transition-colors group"
              href="#"
            >
              <ArrowLeft size={18} />
              <span>Return to Login</span>
            </a>
          </div>
        </section>

        {/* Help Section */}
        <p className="text-center mt-6 text-[14px] leading-[20px] text-[#555f6c]">
          Need help? <a className="text-[#0050cb] font-semibold hover:underline" href="#">Contact Support</a>
        </p>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        body {
          font-family: 'Hanken Grotesk', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;