import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-6 w-full">


<div className="flex justify-between items-center w-full">
   <p className="text-2xl font-bold text-[#1A1A1A]">Employee List</p>
   <button className="flex gap-1 justify-center items-center bg-[#1A1A1A] h-[56px] text-sm text-white font-medium rounded-2xl w-[214px] cursor-pointer" id="add-employee-btn">
     + Add Employee
   </button>
</div>

<div className="flex flex-col gap-4 w-full" id="employee-list">
   {/* Placeholder for employee items - will be populated by JS */}
   {/* Example structure:
   <div class="employee-item" ...>
       <div class="employee-info" ...>
           <div class="employee-avatar">A</div>
           <div class="employee-details">
               <p class="employee-name">Employee Name</p>
               <p class="employee-id">E001</p>
           </div>
       </div>
       <div class="employee-actions" ...>
           <button class="edit-employee-btn" ...>Edit</button>
           <button class="delete-employee-btn" ...>Delete</button>
       </div>
   </div>
   */}
</div>

{/* Add Employee Modal */}
<div id="add-employee-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">
   <div class="bg-white p-8 rounded-2xl w-96 shadow-lg">
       <h3 class="text-xl font-bold mb-6">Add New Employee</h3>
       <form id="add-employee-form" class="flex flex-col gap-4">
           <div class="flex flex-col">
               <label for="modal-employee-name" class="text-sm font-medium text-[#1A1A1A]">Employee Name</label>
               <input type="text" id="modal-employee-name" class="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div class="flex flex-col">
               <label for="modal-employee-id" class="text-sm font-medium text-[#1A1A1A]">Employee ID</label>
               <input type="text" id="modal-employee-id" class="mt-2 p-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#1A1A1A]" required />
           </div>
           <div class="flex gap-4 justify-end mt-4">
               <button type="button" class="px-4 py-2 text-gray-700 rounded-xl hover:bg-gray-100" id="cancel-add-employee">Cancel</button>
               <button type="submit" class="px-4 py-2 bg-[#1A1A1A] text-white rounded-xl">Add</button>
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