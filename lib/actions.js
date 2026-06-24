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
}
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
*/

import getInventory, { getNotifications } from "./service";

  export  async function saveProduct(product){
    const notify = await getNotifications();
    const date = new Date();
    const newNotification = {
      date,
      time: date.toLocaleTimeString(),
      message: `Product ${product.name} created successfully`,
      sku: product.sku || Staatliches.sku,
      status: "unread",
      iconName: "CheckCheck",
      bgClass: "bg-surface-container text-outline",
      dotClass: "bg-outline",
      type: "Product Created",
      category: "Normal",
      badge: "Inventory",
      badgeClass: "bg-surface-container-high text-outline",
    }
    notify.push(newNotification)
    localStorage.setItem('notification', JSON.stringify(notify))

    let inventory = await getInventory();

    const newProduct = { ...product, id: Date.now(), sku: `SKU-${Date.now()}` }   
    inventory.push(newProduct);

    localStorage.setItem('inventory', JSON.stringify(inventory));
  }
    export  async function saveNotification(data){
      const notify = await getNotifications();
      const date = new Date();
      const newNotification = {
        date,
        time: date.toLocaleTimeString(),
        message: `Notification ${data.id} created successfully`,
        sku: data.id || Staatliches.sku,
        status: "unread",
        iconName: "CheckCheck",
        bgClass: "bg-surface-container text-outline",
        dotClass: "bg-outline",
        type: "Notification Created",
        category: "Normal",
        badge: "Notification",
        badgeClass: "bg-surface-container-high text-outline",
      }
      notify.push(newNotification)
      localStorage.setItem('notification', JSON.stringify(notify))
    localStorage.setItem('notification', JSON.stringify(data));

  }
    export  async function saveHistory(data){
      const notify = await getNotifications();
      const date = new Date();
      const newNotification = {
        date,
        time: date.toLocaleTimeString(),
        message: `History ${data.id} created successfully`,
        sku: data.id || Staatliches.sku,
        status: "unread",
        iconName: "CheckCheck",
        bgClass: "bg-surface-container text-outline",
        dotClass: "bg-outline",
        type: "History Created",
        category: "Normal",
        badge: "History",
        badgeClass: "bg-surface-container-high text-outline",
      }
      notify.push(newNotification)
      localStorage.setItem('notification', JSON.stringify(notify))
    localStorage.setItem('history', JSON.stringify(data));

  }
    export  async function saveInvoice(data){
      const notify = await getNotifications();
      const date = new Date();
      const newNotification = {
        date,
        time: date.toLocaleTimeString(),
        message: `Invoice ${data.id} created successfully`,
        sku: data.id || Staatliches.sku,
        status: "unread",
        iconName: "CheckCheck",
        bgClass: "bg-surface-container text-outline",
        dotClass: "bg-outline",
        type: "Invoice Created",
        category: "Normal",
        badge: "Sales",
        badgeClass: "bg-surface-container-high text-outline",
      }
      notify.push(newNotification)
      localStorage.setItem('notification', JSON.stringify(notify))
    localStorage.setItem('invoice', JSON.stringify(data));
    return true

  }
     export  async function deleteProduct(key){

      const notify = await getNotifications();
      const date = new Date();
      const newNotification = {
        date,
        time: date.toLocaleTimeString(),
        message: `Product ${key} deleted successfully`,
        sku: key,
        status: "unread",
        iconName: "CheckCheck",
        bgClass: "bg-surface-container text-outline",
        dotClass: "bg-outline",
        type: "Product Deleted",
        category: "Normal",
        badge: "Inventory",
        badgeClass: "bg-surface-container-high text-outline",
      }
      notify.push(newNotification)
      localStorage.setItem('notification', JSON.stringify(notify))

        const inventory = await getInventory();
        const newInventory = inventory.filter(item => item.name !== key);
        localStorage.setItem('inventory', JSON.stringify(newInventory));
        return true

  }
     export  async function deleteInvoice(key){
    localStorage.removeItem(key);
  }
     export  async function clearStorage(){
    localStorage.clear();
  }