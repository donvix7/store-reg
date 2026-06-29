

const products = [
    {
      img: "High-end wireless headphones product image",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChLcQeSboB1qG2Jrt1g9ffXIuDLeH0KdB92GVi8bhabIZ8lDdgSBo2E1DCQFcbO6I2AQKuHJyw7DIoSRi480V08grdoAtQRvDUMbHAq6QLh739gnAAn93DyIcj5aIcAygeRgUyqHlOXIk1KK1fohpQkSVktz7WIYiMdniWDA7qm-iWXwPGzSCx0OQYX7ZfFT28BpD4C8ObDlFyWEi0ipOfCeDIF97mWZO6AZU8fIU0TjDuYt3QWgLU8Ze3ZbBZofc-4IS_3CK-Rjc",
      name: "Zenith Wireless Headphones",
      sku: "WH-2024-X1",
      category: "Electronics",
      stock: {
        current: 240,
        max: 300,
      },
      price: "249.00",
      status: "Optimal",
    },
  ];
   const dummyNotifications = [
        {
            sku: "82741",
            type: "New Order Received",
            message: "Customer \"James Carter\" just purchased 3 items totaling ₦45,000.",
            category: "Order",
            status: "unread",
            date: "Oct 24, 2023",
            time: "09:45 AM",
            iconName: "shopping_basket",
            bgClass: "bg-blue-50 text-blue-700",
            dotClass: "bg-primary",
            badge: "Order",
            badgeClass: "bg-blue-50 text-blue-700"
        },
        {
            sku: "240",
            type: "Platform Update: Version 2.4.0",
            message: "New inventory tracking features are now live in your store dashboard.",
            category: "System",
            status: "read",
            date: "Oct 23, 2023",
            time: "02:15 PM",
            iconName: "check_circle",
            bgClass: "bg-purple-50 text-purple-700",
            dotClass: "",
            badge: "System",
            badgeClass: "bg-purple-50 text-purple-700"
        },
        {
            sku: "300",
            type: "Payment Settlement Successful",
            message: "Your weekly payout of ₦214,000 has been credited to your inventory Wallet.",
            category: "Payment",
            status: "unread",
            date: "Oct 22, 2023",
            time: "11:00 AM",
            iconName: "mark_email_unread",
            bgClass: "bg-green-50 text-green-700",
            dotClass: "bg-primary",
            badge: "Payment",
            badgeClass: "bg-green-50 text-green-700"
        },
        {
            sku: "500",
            type: "Stock Alert: Critical Level",
            message: "5 items in \"Summer Collection\" are running extremely low on stock.",
            category: "System",
            status: "unread",
            date: "Oct 22, 2023",
            time: "08:30 AM",
            iconName: "warning",
            bgClass: "bg-red-50 text-red-700",
            dotClass: "bg-error",
            badge: "System",
            badgeClass: "bg-red-50 text-red-700"
        },
        {
            sku: "600",
            type: "New Customer Registered",
            message: "Sarah Benson just created an account and added items to her cart.",
            category: "Order",
            status: "read",
            date: "Oct 21, 2023",
            time: "04:45 PM",
            iconName: "shopping_basket",
            bgClass: "bg-blue-50 text-blue-700",
            dotClass: "",
            badge: "Order",
            badgeClass: "bg-blue-50 text-blue-700"
        }
    ]
     const dummyHistory = [
        {
            date: "Oct 22, 2023",
            time: "09:12:00",
            type: "Return Processed",
            product: "Modular Sensor Unit",
            sku: "MSU-MOD-B",
            quantity: "+5",
            user: "Marcus Thorne",
            status: "Completed",
        },
    ]
    const dummyInvoice = [
       
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
        { 
           category:"Inventory Management System",
           description:"Inventory Management System",
           amount:2440.50,
           status:"Paid",
           date:"Oct 22, 2023"
        },
    ]

export  default async function getInventory() {
    
    try{
        const inventory = localStorage.getItem('inventory');
        if(!inventory || JSON.parse(inventory).length < 1){
            localStorage.setItem('inventory', JSON.stringify(products))
            return {success: true,message:"Inventory fetched successfully", data: products}
        }else{
            return {success: true,message:"Inventory fetched successfully", data: JSON.parse(inventory)}
        }
        
    }
    catch(error){
        return {success: false,message:"Inventory fetched failed", data: []}
    }
}

export async function getProductById(id) {
    try{
        const inventory = localStorage.getItem('inventory');
        const data = JSON.parse(inventory) || products
        return {success: true,message:"Product fetched successfully", data: data.find(item => item.sku === id)}
    }
    catch(error){
        return {success: false,message:"Product fetched failed", data: []}
    }
}

export  async function getNotifications() {


    try {
        const notifications = localStorage.getItem('notification');
        if (!notifications || JSON.parse(notifications).length < 1) {
            localStorage.setItem('notification', JSON.stringify(dummyNotifications));
            return {success: true, message: "Notifications initialized", data: dummyNotifications};
        } else {
            return {success: true, message: "Notifications fetched successfully", data: JSON.parse(notifications)};
        }
    } catch (error) {
        return {success: false, message: "Notifications fetched failed", data: []};
    }
}

export  async function getHistory() {

    try{
        const history = localStorage.getItem('history');
        const data = JSON.parse(history) || dummyHistory
        return {success: true,message:"History fetched successfully", data: data}
    }
    catch(error){
        return {success: false,message:"History fetched failed", data: []}
    }
}

export  async function getInvoices() {
    try{
        const invoice = localStorage.getItem('invoice');
        if (!invoice || JSON.parse(invoice).length < 1) {
            localStorage.setItem('invoice', JSON.stringify(dummyInvoice));
            return {success: true,message:"Invoices fetched successfully", data: dummyInvoice}
        }else{
            return {success: true,message:"Invoices fetched successfully", data: JSON.parse(invoice)}
        }
    }
    catch(error){
        return {success: false,message:"Invoices fetched failed", data: []}
    }
}
export async function getBanks() {
//localStorage.removeItem('bank');

    try{
        const bank = localStorage.getItem('bank');
        if (localStorage.getItem('bank') !== null) {

            return {success: false,message:"No Banks", data: []}

        }
        else if(!bank || JSON.parse(bank).length < 1){

            return {success: false,message:"Banks not found", data: []}
        }
        else{
            return {success: true,message:"Banks fetched successfully", data: JSON.parse(bank)}
        }
    }
    catch(error){
        return {success: false,message:error.message, data: []}
    }
}

const defaultLocations = [
  {
    id: "loc-1",
    name: "Lagos HQ Outlet",
    type: "Main Distribution Hub",
    address: "12 Adeola Hopewell St, Victoria Island, Lagos, Nigeria",
    managerName: "Adewale Musa",
    managerInitials: "AM",
    status: "Active"
  },
  {
    id: "loc-2",
    name: "Abuja Central",
    type: "Retail Branch",
    address: "45 Gana Street, Maitama District, Abuja, FCT",
    managerName: "Chioma Okoro",
    managerInitials: "CO",
    status: "Active"
  },
  {
    id: "loc-3",
    name: "Port Harcourt Pier",
    type: "Warehouse / Pickup",
    address: "Old GRA, Phase 2, Port Harcourt, Rivers State",
    managerName: "Blessing Akpan",
    managerInitials: "BA",
    status: "Inactive"
  },
  {
    id: "loc-4",
    name: "Ibadan Hub",
    type: "Regional Center",
    address: "Ring Road, Opposite High Court, Ibadan, Oyo State",
    managerName: "Segun Olatunji",
    managerInitials: "SO",
    status: "Active"
  }
];

export async function getLocations() {
  try {
    const locations = localStorage.getItem('locations');
    if (!locations || JSON.parse(locations).length < 1) {
      localStorage.setItem('locations', JSON.stringify(defaultLocations));
      return { success: true, message: "Locations initialized", data: defaultLocations };
    } else {
      return { success: true, message: "Locations fetched successfully", data: JSON.parse(locations) };
    }
  } catch (error) {
    return { success: false, message: "Locations fetched failed", data: [] };
  }
}

/*

// SET - Store data
localStorage.setItem('username', 'JohnDoe');
localStorage.setItem('theme', 'dark');

// GET - Retrieve data
const username = localStorage.getItem('username');
console.log(username); // "JohnDoe"

// REMOVE - Delete specific item
localStorage.removeItem('theme');

// CLEAR - Delete all items
localStorage.clear();

// CHECK - Check if item exists
if (localStorage.getItem('username') !== null) {
  console.log('Username exists!');
}*/