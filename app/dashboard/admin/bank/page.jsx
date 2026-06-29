"use client"
import { Edit, Loader2, PiggyBank, Wallet2Icon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getBanks } from '@/lib/service';
import { addBank } from '@/lib/actions';
import { useRouter } from 'next/navigation';

const page = () => {
    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [accountName, setAccountName] = useState('')
    const [banks, setBanks] = useState([])
    const [loading, setLoading] = useState(true)
    const [empty, setEmpty] = useState(false)

    const router = useRouter();

    const fetchBankData = async () => {

        const res = await getBanks();

        console.log(res, "bank res")
        
        if (res.success) {
            setBanks(res.data)
            setLoading(false)
        }
        else{
            setEmpty(res.message)
            setLoading(false)
        }
    }
    const handleSubmit = async () => {
        setLoading(true)
        const bank = {
            bankName: bankName,
            accountNumber: accountNumber,
            accountName: accountName,
        }
        const res = await addBank(bank)
        if(res.success){
            setBanks(res.data)
            setBankName('')
            setAccountNumber('')
            setAccountName('')
            setLoading(false)
            alert(res.message)
            router.refresh()
        }else{
            setLoading(false)
            alert(res.message)
        }
    }
    
    useEffect(() => {
        fetchBankData()
    }, [])
  return (
    <div className='w-full grid grid-cols-12 font-body l bg-surface-container-lowest items-start lg:items-center gap-6 p-4'>
        <section className='col-span-12 lg:col-span-8 flex flex-col gap-4'>
            <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-on-surface">Manage Your Bank Accounts</h1>
            <button className='hidden lg:flex gap-2 border font-bold border-primary text-sm text-primary p-2 px-6 self-end w-fit rounded-xl cursor-pointer' type="submit">
                <Edit size={20}/>
                Edit</button>
            </div>
            <form className='flex flex-col gap-4 border  py-8 border-slate-400 p-4 rounded-xl '>
            
                <div className="flex flex-col gap-2">
                    <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="bankName">Bank Name</label>
                    <input 
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className='border border-slate-400 p-2 rounded-md' type="text" id="bankName" name="bankName" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="accountNumber">Account Number</label>
                    <input 
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className='border border-slate-400 p-2 rounded-md' type="text" id="accountNumber" name="accountNumber" />
                </div>
                <div className="flex flex-col gap-2">
                    <label className='tracking-wider text-slate-700 text-sm font-bold' htmlFor="accountName">Account Name</label>
                    <input 
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    className='border border-slate-400 p-2 rounded-md' type="text" id="accountName" name="accountName" />
                </div>
                <button 
                disabled={loading}
                onClick={handleSubmit}
                className='bg-primary text-on-primary p-2 px-8 self-end w-fit rounded-xl cursor-pointer' type="submit">Add Bank Account</button>
            </form>

        </section>
        <section className='col-span-12 lg:col-span-4 flex flex-col gap-4 h-full'>
            <h2 className='text-2xl font-bold text-on-surface mb-4'>Available Bank Accounts</h2>
            <div className='flex flex-col gap-4 border border-slate-400 p-4 rounded-xl min-h-120'>
                {banks.length == 0 ? (
                    <div className='flex flex-col items-center align-center h-full justify-center p-4'>
                        <p className='text-on-surface-variant'>{empty}</p>
                        <Wallet2Icon className='w-16 h-16 text-slate-700 mt-4'/>
                    </div>
                ) : (
                    banks.map((bank, index) => (
                        <div key={index} className='flex p-2 border border-slate-400 items-center  justify-between'>
                            <div>
                                <h3 className='font-bold text-on-surface'>{bank.bankName}</h3>
                                <p className='text-sm text-on-surface-variant'>{bank.accountNumber}</p>
                            </div>
                            <button className='flex gap-2 border font-bold border-primary text-sm text-primary p-2 px-6 self-end w-fit rounded-xl cursor-pointer'>
                                <Edit size={20}/>
                                Edit
                            </button>
                        </div>
                    ))
                )}
            </div>
            

        </section>
        
    </div>
  )
}

export default page