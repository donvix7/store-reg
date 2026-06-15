import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="glass-nav sticky top-0 z-50 px-24 py-5 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <span className="text-on-surface font-headline font-extrabold text-xl tracking-tight">Equilibrium Store Manager</span>
        <div className="hidden lg:flex gap-8">
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Features</a>
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Solutions</a>
          <a className="text-secondary font-label text-sm font-medium hover:text-primary transition-colors" href="#">Pricing</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/login">
          <button className="text-primary font-label text-sm font-semibold px-4 py-2">Sign In</button>
        </Link>
        <Link href="/register">
          <button className="bg-primary text-on-primary font-label text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:bg-primary-container transition-all">Sign Up</button>
        </Link>
      </div>
    </nav>
  );
}
