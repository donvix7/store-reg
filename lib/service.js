

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
            date: "September 12, 2023",
            time: "09:12:00",
            message: "A new login was detected for user 'Admin' from a Chrome browser on Windows (IP: 192.168.1.45).",
            sku: "78210",
            status: "read",
            iconName: "CheckCheck",
            bgClass: "bg-surface-container text-outline",
            dotClass: "bg-outline",
            type: "New Device Login",
            category: "Normal",
            badge: "Security",
            badgeClass: "bg-surface-container-high text-outline",
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
            id: "INV-2024-005", 
            customer: "Urban Retail", 
            email: "ops@urban.retail", 
            date: "Nov 01, 2023", 
            amount: 2440.50, 
            status: "Paid", 
            statusClass: "bg-green-100 text-green-700", 
            initials: "UR",
            billTo: {
                name: "Urban Retail",
                address: "321 Marketplace Ave",
                city: "Chicago",
                country: "USA",
                phone: "+1 (312) 555-6789"
            },
            items: [
                { description: "Inventory Management System", qty: 1, price: 1950.00, total: 1950.00 },
                { description: "Handheld Scanner Lease", qty: 2, price: 245.25, total: 490.50 }
            ]
        },
    ]

export  default async function getInventory() {
    
    try{
        const inventory = localStorage.getItem('inventory');
        if(!inventory || JSON.parse(inventory).length < 1){
            localStorage.setItem('inventory', JSON.stringify(products))
            return products
        }else{
            return JSON.parse(inventory)
        }
        
    }
    catch(error){
        console.log(error)
    }
}

export async function getProductById(id) {
    try{
        const inventory = localStorage.getItem('inventory');
        const data = JSON.parse(inventory) || products
        console.log("data", data, id)
        return data.find(item => item.sku === id)
    }
    catch(error){
        console.log(error)
    }
}

export  async function getNotifications() {
    try{
        const notifications = localStorage.getItem('notification');
        if(!notifications || JSON.parse(notifications).length < 1){
            localStorage.setItem('notification', JSON.stringify(dummyNotifications))
            return dummyNotifications
        }
        return JSON.parse(notifications)

    }
    catch(error){
        console.log(error)
    }
}

export  async function getHistory() {
    try{
        const history = localStorage.getItem('history');
        const data = JSON.parse(history) || dummyHistory
        console.log("history", data)
        return data
    }
    catch(error){
        console.log(error)
    }
}

export  async function getInvoices() {
    try{
        const invoice = localStorage.getItem('invoice');
        const data = JSON.parse(invoice) || dummyInvoice
        console.log("invoice", data)
        return data
    }
    catch(error){
        console.log(error)
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