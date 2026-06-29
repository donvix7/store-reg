import { LogIn, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50 px-6 md:px-24 py-5 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <span className="text-on-surface font-headline font-extrabold text-xl tracking-tight">Equilibrium Store Manager</span>
        <div className="hidden lg:flex gap-8">
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Solutions</a>
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/auth/login" className="flex text-primary items-center font-label text-sm font-medium hover:text-secondary transition-colors gap-2">
          <LogIn />
          Login
        </Link>
        <Link href="/auth/register" className="flex text-primary items-center font-label text-sm font-medium hover:text-secondary transition-colors gap-2">
          <User />
          Register
        </Link>
      </div>
    </nav>
  );
}
