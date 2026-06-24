"use client"

import { Check, Pencil } from 'lucide-react'
import React, { useState } from 'react'

const page = () => {
    const subscriptionPlans = [
        {
            id: 's1',
            name: 'Free',
            price: 0,
            features: [
                'Access to basic features',
                'Limited storage',
                'Limited support',
            ],
        },
        {
            id: 's2',
            name: 'Basic',
            price: 20000,
            features: [
                '100 SKUs',
                'Basic support',

            ],
        },
        {
            id: 's3',
            name: 'Premium',
            price: 50000,
            features: [
                'Access to all features',
                'Unlimited storage',
                'Priority support',
            ],
        },
    ]

    const [editting, setEditting] = useState(false);
    const [plans, setPlans] = useState('Basic');



  return (
    <div className='p-4 flex flex-col gap-4'>
      <div className='max-w-5xl mx-auto w-full'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between'>

          <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-2xl'>Subscription Plans</h2>
            <p className='text-sm'>Manage your Store Subscription Plans</p>
          </div>
          <button className='bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2'>
            <Pencil size={16} />
            Edit Plan</button>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                subscriptionPlans.map((plan) => (
                    <div key={plan.id} 
                        onClick={() => setPlans(plan.name)}

                    className={plans === plan.name ? 'w-full bg-gradient-to-br from-slate-200 to-slate-400 border-2 border-primary rounded-lg p-4' : 'w-full bg-gradient-to-br from-slate-200 to-slate-400 ounded-lg p-4'}>
                        <div className='flex justify-between items-center'>
                        <h3 className='text-primary text-2xl font-bold'>{plan.name}</h3>
                        <p className='text-sm font-bold'>₦{plan.price}</p>
                        </div>
                        <ul className='mt-4 space-y-2'>
                            {plan.features.map((feature) => (
                                <li 
                                className={ 'text-sm font-bold text-slate-700 flex items-center gap-2 px-2 py-1 rounded-lg'}>
                                     <span className='h-2 w-2 font-bold rounded-full bg-slate-500'></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                ))
            }
            
        </div>
        </div>
     
      </div>
      
    </div>
  )
}

export default page