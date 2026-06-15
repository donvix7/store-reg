
    const notifications = [
       /*
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
        }*/
    ]
     const history = [
        /*
        {
            date: "Oct 22, 2023",
            time: "09:12:00",
            type: "Return Processed",
            product: "Modular Sensor Unit",
            sku: "MSU-MOD-B",
            quantity: "+5",
            user: "Marcus Thorne",
            status: "Completed",
        },*/
    ]
    const invoice = [
       
        /*
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
        */
    ]


const products = [
    /*{
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
    */
  ];
export const getInvoiceById = async (id) => {
    const invoices = await fetchInvoices()
    const invoice = invoices.find((inv) => inv.id === id)
    return invoice
}

export const fetchProducts = async () => {
   
  return products
}

export const getProductById = async (id) => {
    const products = await fetchProducts()
    const product = products.find((product) => product.sku === id)
    return product
}

export const getHistory = async () => {
   
    return history
}

export const getNotifications = async () => {
    
    return notifications
}
export const fetchInvoices = async () => {
    return invoice
}