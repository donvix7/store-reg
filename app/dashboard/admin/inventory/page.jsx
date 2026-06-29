"use client"
import { LineChart } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import DesktopInventory from '@/components/DesktopInventory';
import MobileInventory from '@/components/MobileInventory';
import getInventory from '@/lib/service';


export default function InventoryPage() {

  const [initialInventory, setinitialInventory] = useState([])

  const loadData = async() => {
    const inventory = await getInventory();
    if(inventory.success){
      setinitialInventory(inventory.data)
    }else{
      setinitialInventory([])
    }
  }
  useEffect(() => {
    loadData()
  }, [])


  return (
    <div className="p-5 lg:p-10 space-y-8 font-body">
     

      {/* Desktop View Section */}
      <section className=" space-y-8">
        <DesktopInventory initialInventory={initialInventory}/>
      </section>

     

     
    </div>
  );
}