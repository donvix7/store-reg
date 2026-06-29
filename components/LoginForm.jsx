"use client";
import { ChevronRight, Eye, Lock, LogIn, Mail } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import loginAction from '../app/libs/actions';
import { Login } from '@/lib/actions';


const LoginForm = () => {
    const [formData, setFormData] = useState({})
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password };
        setFormData(data);
        
        try {
            // Using the imported loginAction to avoid recursive call to handleLogin
            const res = await Login(formData);
            
            // Note: loginAction currently doesn't return anything but we keep this structure for future use
            if (!res.success) {
                alert(res.message);
            }
            else{
                alert(res.message);

              router.push("/dashboard/admin");
            }
            
        } catch (error) {
            console.error("Login error:", error);
            alert("An error occurred during login.");
        }
    }



  return (
    <div>
        <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-5">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-on-surface-variant ml-1" htmlFor="email">Work Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                        <Mail/>
                    </div>
                    <input 
                      className="block w-full pl-11 pr-4 py-3.5 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/60" 
                      id="email" 
                      name="email" 
                      placeholder="name@company.com" 
                      required 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center ml-1">
                    <label className="block text-sm font-semibold text-on-surface-variant" htmlFor="password">Password</label>
                    <Link className="text-xs font-bold text-primary hover:underline" href="/forgot-password">Forgot Password?</Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                        <Lock/>
                    </div>
                    <input 
                      className="block w-full pl-11 pr-12 py-3.5 bg-surface-container-highest border-0 rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all duration-200 placeholder:text-outline/60" 
                      id="password" 
                      name="password" 
                      placeholder="••••••••" 
                      required 
                      value={password}
                      onChange ={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                    <button className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors" type='button'>
                        <Eye/>
                    </button>
                  </div>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-3 ml-1">
                <div className="flex items-center h-5">
                  <input className="h-5 w-5 rounded-lg border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-highest transition-colors" id="remember" name="remember" type="checkbox"/>
                </div>
                <label className="text-sm font-medium text-on-surface-variant cursor-pointer" htmlFor="remember">Stay signed in for 30 days</label>
              </div>

              {/* Submit Button */}
              <button 
              className="group relative flex w-full justify-center items-center py-4 px-6 border border-transparent font-bold text-on-primary bg-primary hover:bg-primary-container rounded-xl shadow-lg shadow-primary/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 overflow-hidden" type="submit">
                <span className="relative z-10 flex items-center gap-2">
                  Sign In to Inventory Pro
                    <LogIn/>
                </span>
                {/* Gloss effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
    </div>
  )
}

export default LoginForm