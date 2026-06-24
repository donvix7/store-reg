"use client"
import { LineChart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import DesktopInventory from '@/app/components/DesktopInventory';
import MobileInventory from '@/app/components/MobileInventory';
import getInventory from '@/libs/service';


export default function InventoryPage() {

  const [initialInventory, setinitialInventory] = useState([])

  const loadData = async() => {
    const inventory = await getInventory()
    setinitialInventory(inventory)
    console.log(inventory)
    
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div className="p-5 lg:p-10 space-y-8 font-body">
     

      {/* Desktop View Section */}
      <section className="hidden lg:block space-y-8">
        <DesktopInventory initialInventory={initialInventory}/>
      </section>

      {/* Mobile View Section */}
      <section className="lg:hidden">
        <MobileInventory initialInventory={initialInventory} />
      </section>

     
    </div>
  );
}