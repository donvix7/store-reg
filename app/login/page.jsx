import { Shield } from 'lucide-react';
import Link from 'next/link';
import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="h-screen font-body bg-background text-on-background antialiased overflow-hidden">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-on-primary">
            <Shield size={24} fill="currentColor" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-on-surface">Inventory Management</span>
        </div>
      </header>

      <main className="h-full flex flex-col md:flex-row">
        {/* Left Section: Architectural/Marketing Content */}
        <section className="hidden md:flex relative w-1/2 h-full flex-col justify-end p-20 overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              alt="Modern logistics hub with architectural precision" 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdwQIexpVXiZEVcsK1PAeXH4_vzy5u6lSZUmCgYa805riVzrL9jZYJ6NQKoy6m8k3z2gcPObsCZbEqavENsKotp-HkBGA9urvfaSAnTqZvxoxW3HK3gJyfI-o1Nr3ioxjcJhurTMqea7mXTqb87En6fZwIc9QjP0-b39lHM9V6o3tnSmH2XAZ5QdChkK8C2AmWWDKqdzQhbiXP08iSoPR65AtHsqkShdgKmekGJ-68poNSbjZKhkyeQm2rzwDuVQYTbzBoRxkmwcc"
            />
          </div>
          {/* Atmospheric Gradient Overlay */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-primary via-primary/40 to-transparent"></div>
          
          <div className="relative z-20 space-y-6 max-w-lg">
            <div className="inline-flex px-3 py-1 rounded-full bg-primary-container/20 border border-on-primary-container/20 backdrop-blur-sm">
              <span className="text-primary-fixed-dim text-xs font-bold tracking-widest uppercase">The Precision Atelier</span>
            </div>
            <h1 className="font-headline font-extrabold text-5xl lg:text-6xl text-on-primary leading-tight">
              Inventory<br/>
              <span className="text-primary-fixed">Perfected.</span>
            </h1>
            <p className="text-primary-fixed-dim text-lg leading-relaxed font-light">
              Experience the architectural approach to logistics. Orchestrate your entire supply chain with clinical precision and effortless clarity.
            </p>

            <div className="pt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover" alt="User profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjaOiDLZcsQJPU6p-_bKjpET-raS4BLVUQm203bKkXPQxsbbhexRq8njfRyPTwAQhKVg5PJhBU_NA6DKCP9aLlCLxm1-Dr_gIpbI_oKqITSCFPL050AjutpKrfsr-DCASCngn0RuOOrLwyLWYJzIsh3RDKV-TSiiFeVmyRxh1kWMJJwm1M5dD3KBVf8S0NSBPYAn9IgM-TPjCdLiJovEKKwCET9yiqYxShdgKmekGJ-68poNSbjZKhkyeQm2rzwDuVQYTbzBoRxkmwcc"/>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover" alt="User profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhiLCYuG4Mb0iKtkuZ8FJ1M9Btvx2D4f3RN4TGveDYrDArZC_l0CAP5E7H49AHbAdbmcsEvMqKDypAGXR6h2K252-OkwkRbHsyarrCC_XlBRhLa-qtMVx3RfKhm9ZDKSUtiNAm1CO2C8hi4pyHRnBiHdwnMt3UscV_BhLLD2Zd6maX5MXEe7LmHg1Ur5lnaQd_aSjDJkilKZ4aLVqoG1qbCXqPHi6nyr-ZvgKMVNAzsGYMqwk4hctH6qOs9Rp9xgdZ_m4PKfS3yQ"/>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden bg-surface-container-high">
                  <img className="w-full h-full object-cover" alt="User profile portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIYT74hudVYIvdEyKTMTLN3PHU3PKo5vHRf9h_Ea7ZKUbYKyXNPufq3aJLV8oFbI1DDlAtCcILJ4NvF0IG5fPABeexwjlgeg5x1Jub93E_h20LN6Pog6iQyMXfstJ4Bej57xTMCmwPd271ZZSa6Tih5P4hVlYYB7PeWEueVcEzFNP2iCfvUkVaON_liO5YCk8MISD0DYhqsJsCCYm3YRU66_ywHiGnz3Q-NDBULMWHc1TlYixYs_adDVJjDrnG-njN4xe84Ho75j0"/>
                </div>
              </div>
              <span className="text-on-primary/80 text-sm font-medium">Trusted by 2,000+ global enterprises</span>
            </div>
          </div>
        </section>

        {/* Right Section: Login Form */}
        <section className="flex flex-col flex-1 h-full items-center justify-center p-8 lg:p-24 bg-surface">
          <div className="w-full max-w-md space-y-10">
            <div className="space-y-2">
              <h2 className="font-headline font-bold text-3xl text-on-surface">Welcome back</h2>
              <p className="text-on-surface-variant">Access your precision inventory dashboard.</p>
            </div>

            <LoginForm/>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-outline-variant/30"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-4 bg-surface text-outline font-medium">AUTHORIZED ACCESS ONLY</span>
              </div>
            </div>

            <p className="text-center text-sm text-on-surface-variant">
              New enterprise? <Link className="font-bold text-primary hover:underline" href="/register">Schedule an onboarding</Link>
            </p>
          </div>

          {/* Footer Meta */}
          <footer className="absolute bottom-8 text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-outline/40">
              © 2024 Inventory Pro Systems • Precise Operations Division
            </p>
          </footer>
        </section>
      </main>
      
      <div className="md:hidden"></div>
    </div>
  );
}