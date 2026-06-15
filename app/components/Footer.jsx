import { Share2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface py-20 px-24 border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <span className="text-on-surface font-headline font-extrabold text-xl tracking-tight block mb-6">Equilibrium Store Manager</span>
          <p className="text-on-surface-variant font-body max-w-xs">
            Engineering precision into the heart of retail operations.
          </p>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <p className="text-on-surface font-label font-bold text-sm uppercase tracking-widest">Platform</p>
            <a className="text-secondary hover:text-primary transition-colors font-body text-sm" href="#">Privacy Policy</a>
            <a className="text-secondary hover:text-primary transition-colors font-body text-sm" href="#">Terms of Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-on-surface font-label font-bold text-sm uppercase tracking-widest">Support</p>
            <a className="text-secondary hover:text-primary transition-colors font-body text-sm" href="#">Contact Us</a>
            <a className="text-secondary hover:text-primary transition-colors font-body text-sm" href="#">Documentation</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 flex justify-between items-center">
        <p className="text-outline font-label text-xs">© 2024 Equilibrium Store Manager. All rights reserved.</p>
        <div className="flex gap-6">
          <Share2 className="text-outline hover:text-primary cursor-pointer transition-colors" size={20} />
          <Globe className="text-outline hover:text-primary cursor-pointer transition-colors" size={20} />
        </div>
      </div>
    </footer>
  );
}
