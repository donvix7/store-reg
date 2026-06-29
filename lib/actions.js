import getInventory, { getBanks, getNotifications } from "./service";

  export  async function saveProduct(product){
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const date = new Date();
    const newNotification = {
      date,
      time: date.toLocaleTimeString(),
      message: `Product ${product.name} created successfully`,
      sku: product.sku || "unknown",
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
    return {success: true, message: "Product created successfully"}
  }
  export  async function saveNotification(data){
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const date = new Date();
    const newNotification = {
      date,
      time: date.toLocaleTimeString(),
      message: `Notification ${data.id} created successfully`,
      sku: data.id || "unknown",
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
    return {success: true, message: "Notification created successfully"}
  }
  export  async function saveHistory(data){
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const date = new Date();
    const newNotification = {
      date,
      time: date.toLocaleTimeString(),
      message: `History ${data.id} created successfully`,
      sku: data.id || "unknown",
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
    return {success: true, message: "History created successfully"}
  }
  export  async function saveInvoice(data){
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const date = new Date();
    const newNotification = {
      date,
      time: date.toLocaleTimeString(),
      message: `Invoice ${data.id} created successfully`,
      sku: data.id || "unknown",
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
    return {success: true, message: "Invoice created successfully"}
  }

  export async function updateNotification(id) {
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const updatedNotifications = notify.map(n => 
      String(n.sku) === String(id) ? { ...n, status: 'read' } : n
    );
    localStorage.setItem('notification', JSON.stringify(updatedNotifications));
    return true;
  }

  export async function markAllNotificationsAsRead() {
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
    const updatedNotifications = notify.map(n => ({ ...n, status: 'read' }));
    localStorage.setItem('notification', JSON.stringify(updatedNotifications));
    return true;
  }

  export  async function deleteProduct(key){
    const notifyResult = await getNotifications();
    const notify = notifyResult.data || [];
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

    const inventoryResult = await getInventory();
    const inventory = inventoryResult.data || [];
    const newInventory = inventory.filter(item => item.name !== key);
    localStorage.setItem('inventory', JSON.stringify(newInventory));
    return {success: true, message: "Product deleted successfully"}
  }
     export  async function deleteInvoice(key){
    localStorage.removeItem(key);
    return {success: true, message: "Invoice deleted successfully"}
  }
     export  async function clearStorage(){
    localStorage.clear();
    return {success: true, message: "Storage cleared successfully"}
  }
  export async function createProfile(data) {
  

    try{
        const profile = localStorage.getItem('profile');
   
        if(!profile || JSON.parse(profile).length < 1){
          const newProfile = [{
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            password : data.password,
            storeName : data.storeName,
            phoneNumber : data.phoneNumber,
            address : data.address,
          }]
          
            localStorage.setItem('profile', JSON.stringify(newProfile))
            return {success: true, message: "Profile created successfully"}
        }
        else if(JSON.parse(profile).email === data.email){
          
            return {success: false, message: "Profile with this email already exists"}
        }
        else{
            return {success: false, message: "An error occured while creating profile"}
        }
        
    }
    catch(error){
        console.log(error)
    }
  }

  export  async function updateProfile(data ) {
      const notifyResult = await getNotifications();
      const notify = notifyResult.data || [];
      const date = new Date();
      const newNotification = {
        date,
        time: date.toLocaleTimeString(),
        message: `Profile ${data.id} updated successfully`,
        sku: data.id || "unknown",
        status: "unread",
        iconName: "CheckCheck",
        bgClass: "bg-surface-container text-outline",
        dotClass: "bg-outline",
        type: "Profile Updated",
        category: "Normal",
        badge: "Profile",
        badgeClass: "bg-surface-container-high text-outline",
      }
      notify.push(newNotification)
      try {
        localStorage.setItem('notification', JSON.stringify(notify))
        localStorage.setItem('profile', JSON.stringify(data))
      const response = { success: true, message: "Profile updated successfully"}
  const data = JSON.parse(response) 
            return data
      } catch (error) {
            const response = { success: false, message: "An error occured while updating profile"}
  const data = JSON.parse(response) 
            return data
      }
  }
  export async function Login(data){
    const { email, password } = data


    try{
      const profile = localStorage.getItem('profile')
      if(profile){
        const parsedProfile = JSON.parse(profile)
        console.log(data)
        console.log(parsedProfile.email, parsedProfile.password)
        if(parsedProfile.email === email && parsedProfile.password === password){
          return {success: true, message: "Logged in successfully"}
        }
        else{
          return {success: false, message: "Profile not found"}
        }
      }
      else{
        return {success: false, message: "No profile found"}
      }
      
    }catch(error){
      console.log(error)
      return {success: false, message: "An error occured while logging in"}
    }

    
  }
export async function Logout() {
  return {success: true, message: "Profile logged out successfully"}
}
export async function addBank(data) {
  const notifyResult = await getNotifications();
  const notify = notifyResult.data || [];
  const date = new Date();
  const newNotification = {
    date,
    time: date.toLocaleTimeString(),
    message: `Bank ${data.bankName} added successfully`,
    sku: `notif-${Date.now()}`,
    status: "unread",
    iconName: "CheckCheck",
    bgClass: "bg-surface-container text-outline",
    dotClass: "bg-outline",
    type: "Bank Added",
    category: "Normal",
    badge: "Bank",
    badgeClass: "bg-surface-container-high text-outline",
  };

  const banksResult = await getBanks();

  // If banks list doesn't exist, we can handle it
  const banks = banksResult.success ? (banksResult.data || []) : [];
  
  const newBank = {
    bankName: data.bankName,
    accountNumber: data.accountNumber,
    accountName: data.accountName,
    status: "active",
    id: banks.length + 1
  };
  
  banks.push(newBank);
  notify.push(newNotification);

  localStorage.setItem('notification', JSON.stringify(notify));
  localStorage.setItem('bank', JSON.stringify(banks));
  
  return {success: true, message: "Bank added successfully"};
}