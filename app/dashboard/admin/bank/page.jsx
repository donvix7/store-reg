import { Edit } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className='w-full font-body h-full bg-gray-200 flex flex-col justify-center align-center items-center gap-6 p-4'>
        <div className="flex align-center justify-between w-full sm:w-150">
            <h1 className="text-2xl font-bold text-[#1A1A1A]">Manage Your Bank Accounts</h1>
            <button className='flex gap-2 border font-bold border-primary text-sm text-primary p-2 px-6 self-end w-fit rounded-xl cursor-pointer' type="submit">
                <Edit size={20}/>
                Edit</button>
        </div>
        <form className='flex flex-col gap-6 border w-full sm:w-150 py-8 border-slate-400 p-4 rounded-xl shadow-lg shadow-gray-400/50'>
        
            <div className="flex flex-col gap-2">
                <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="bankName">Bank Name</label>
                <input className='border border-slate-400 p-2 rounded-md' type="text" id="bankName" name="bankName" />
            </div>
            <div className="flex flex-col gap-2">
                <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="accountNumber">Account Number</label>
                <input className='border border-slate-400 p-2 rounded-md' type="text" id="accountNumber" name="accountNumber" />
            </div>
            <div className="flex flex-col gap-2">
                <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="accountName">Account Name</label>
                <input className='border border-slate-400 p-2 rounded-md' type="text" id="accountName" name="accountName" />
            </div>
            <button className='bg-primary text-on-primary p-2 px-8 self-end w-fit rounded-xl cursor-pointer' type="submit">Add Bank Account</button>
        </form>
    </div>
  )
}

export default page