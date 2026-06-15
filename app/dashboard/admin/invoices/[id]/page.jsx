import { SearchX } from 'lucide-react';
import React from 'react';
import { getInvoiceById } from '@/app/libs/service';
import InvoiceDetailView from '@/app/components/InvoiceDetailView';
import Link from 'next/link';

export default async function InvoiceDetailsPage({ params }) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    return (
      <div className="p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[60vh] font-body">
        <div className="w-20 h-20 bg-error-container rounded-3xl flex items-center justify-center text-error mb-4">
          <SearchX size={48} />
        </div>
        <div>
          <h1 className="text-3xl font-headline font-black text-on-surface mb-2">Invoice Not Found</h1>
          <p className="text-on-surface-variant max-w-sm mx-auto">
            The invoice with reference <span className="font-mono font-bold text-primary">#{id}</span> could not be found in our records.
          </p>
        </div>
        <Link 
          href="/dashboard/admin/invoices" 
          className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
        >
          Back to Invoice List
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-10 bg-surface-container-lowest/50 min-h-screen font-body">
      <InvoiceDetailView invoice={invoice} />
    </div>
  );
}