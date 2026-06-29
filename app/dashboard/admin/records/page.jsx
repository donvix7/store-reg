'use client'
import DesktopRecordSale from '@/components/DesktopRecordSale'
import MobileRecordSale from '@/components/MobileRecordSale'
import getInventory from '@/lib/service'
import React, { useEffect, useState } from 'react'

const page = () => {

      const [products, setProducts] = useState([]);
    
      const loadData = async() => {
        const res = await getInventory();
        if(res.success){
          setProducts(res.data || res)
        }else{
          setProducts([])
        }
      }
      useEffect(() => {
        loadData();
      }, []);
  return (
   <div className="">
      {/* Mobile View */}
      <div className="lg:hidden h-screen">
        <MobileRecordSale products={products}/>
      </div>

      {/* Desktop View */}
      <div className="lg:flex hidden h-screen">
        <DesktopRecordSale products={products}/>
      </div>
    </div>
    )
}

export default page