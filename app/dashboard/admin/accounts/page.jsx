import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {

  const employee = [
    {
      name: 'Store Manager',
      id: 'E001',
    },
    {
      name: 'Accounts Manager',
      id: 'E002',
    },
    {
      name: 'Inventory Manager',
      id: 'E003',
    },
  ]
  return (
    <div className="flex flex-col items-center gap-10 p-4 w-full">


<div className="flex justify-between items-center w-full">
   <div className="flex flex-col items-start ">
   <p className="text-2xl font-bold text-on-surface">Manage Employees and accounts</p>
   <p className="text-sm font-medium text-on-surface-variant">Add or manage employee accounts</p>
   </div>
   <Link href="/dashboard/admin/accounts/add-employee">
   <button className="flex gap-1 justify-center items-center bg-primary p-4 px-8 text-sm text-white font-medium rounded-2xl w-[214px] cursor-pointer">
     <Plus size={20} />
     Add New Account
   </button>
   </Link>
</div>

{/* Add Employee Modal */}
<div id="add-employee-modal" className="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">
   <div className="bg-white p-8 rounded-2xl w-96 shadow-lg">
       <h3 className="text-xl font-bold mb-6">Add New Employee</h3>
       <form id="add-employee-form" className="flex flex-col gap-4">
           <div className="flex flex-col">
               <label htmlFor="modal-employee-name" className="text-sm font-medium text-[#1A1A1A]">Employee Name</label>
               <input type="text" id="modal-employee-name" className="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div className="flex flex-col">
               <label htmlFor="modal-employee-id" className="text-sm font-medium text-[#1A1A1A]">Employee ID</label>
               <input type="text" id="modal-employee-id" className="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div className="flex gap-4 justify-end mt-4">
               <button type="button" className="px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-100" id="cancel-add-employee">Cancel</button>
               <button type="submit" className="px-4 py-2 bg-[#1A1A1A] text-white rounded-xl">Add</button>
           </div>
       </form>
   </div>
</div>

{/* Edit Employee Modal */}
<div id="edit-employee-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">
   <div class="bg-white p-8 rounded-2xl w-96 shadow-lg">
       <h3 class="text-xl font-bold mb-6">Edit Employee</h3>
       <form id="edit-employee-form" class="flex flex-col gap-4">
           <input type="hidden" id="edit-employee-id" />
           <div class="flex flex-col">
               <label for="edit-employee-name" class="text-sm font-medium text-[#1A1A1A]">Employee Name</label>
               <input type="text" id="edit-employee-name" class="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div class="flex flex-col">
               <label for="edit-employee-employee-id" class="text-sm font-medium text-[#1A1A1A]">Employee ID</label>
               <input type="text" id="edit-employee-employee-id" class="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div class="flex gap-4 justify-end mt-4">
               <button type="button" class="px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-100" id="cancel-edit-employee">Cancel</button>
               <button type="submit" class="px-4 py-2 bg-[#1A1A1A] text-white rounded-xl">Save Changes</button>
           </div>
       </form>
   </div>
</div>
    </div>
  )
}

export default page