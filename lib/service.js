
const products = [
   {
      id: 1,
      name: 'iPhone 14 Pro Max',
      sku: 'BMP-IP14-DP256',
      category: 'Electronics',
      stock: 42,
      maxStock: 50,
      status: 'In Stock',
      variants: 8,
      price: '950000.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArxO4ogEGln8d9TEOdAmv0ni-6sdIydWodBax16Knp_m2miulp20X6tCXIR7Xp1LFtb-dkBOocInJoAHbFqCC3CwDwsjO2gI473nRtZO9hGFLSBSZ9y-b3GYjeYRCPReSO13gNfkpAdFIvqahbDxuA2qPMlYWKGER65vq_SKmNcdvNhZLHMnzUvmGRCNlUhh1r-JjwzL2-3IfPhVTbgpIVDOKtbsls_PnVniAQ-7mZxIzkoDXTf-CBLzMl4Bwjmil5shuobZPVNWTs'
    },
    {
      id: 2,
      name: 'Nike Air Zoom',
      sku: 'BMP-NKAZ-OB44',
      category: 'Footwear',
      stock: 5,
      maxStock: 25,
      status: 'Low Stock',
      variants: 3,
      price: '85000.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIqUAR6zq3DrQbU8mRbjiBf-OXJ7GL7vDJlqpkF9kzZ9bUejB6T2jmnLc3BvmZPPWzDBL9-OcB8ALxy7ZCQxkkVGw1GZCEbgRTeftZ5vdkWUNhzfnbdQET6LHiyBiUPp_1_EtabCBWmkoA3w2OG5sxNY6qCEcvih3nEB1qwcX7SpiGgVtcA1XIJ6BufbPmhJfeOwiJlmxpR7yK8umiNcxQuZbkI9_1fNCcBOp-0aSKCWXulNpVLzs1M0KYONo1D43Lq_OGjkXI4521'
    },
    {
      id: 3,
      name: 'Classic Tote Bag',
      sku: 'BMP-TBAG-TBM',
      category: 'Accessories',
      stock: 0,
      maxStock: 30,
      status: 'Out of Stock',
      variants: 2,
      price: '45000.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX6nWiLd1cXR_6uYbVWhIMzRs_wWIh9Ntx8ljXyyvC0S8qqpmBKHrRXG7yIUC5eM0FAheD3MfMK3LLxlNDCBVb686jjQI4eNXhqkPeDYCJgdMfMh8-a4gTGcg_myki4tNppEecU2yQaclDhc_aEI2TH2CJSaWUNE-l5EEr40Z8QSV_lcgak8oC53lDO4H-YjeuHeJ1PJ9HWjKYTtZU2ME_Afur7d6XdNgvuZQhTXpRhGqr-w0AglhbKn1LnfNlhKh2a-EXqGP95vCA'
    },
    {
      id: 4,
      name: 'Ceramic Mug Set',
      sku: 'BMP-CMS-S4',
      category: 'Kitchenware',
      stock: 120,
      maxStock: 120,
      status: 'In Stock',
      variants: 1,
      price: '12500.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi3CVfTN-4s36scKniGZpMvln2xwrCoGi28AUEysQRTk1aBSMF2EogitQDk9PZvFafKFLVgrrRG-CWnoVXYm321lAXJTGcosBIR7x33OuPu9FUvG-vk_YVuvbka_nbjlQs4hEwNEFH42KOCVb0av57OlptYFoXN5_DeburLBn-odyn6lcz2yVd04RrlODPyreeIrDkngjX3GS6IBNHgnL8HkQM_FlgGqsORSZ46q_rBpFbgeS3skzFqV9D0fVMHy4yj96LmDZb-o64'
    },
    {
      id: 5,
      name: 'Noise Cancelling XL',
      sku: 'BMP-NCXL-MB',
      category: 'Electronics',
      stock: 8,
      maxStock: 25,
      status: 'Low Stock',
      variants: 1,
      price: '180000.00',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBktttkpU-Cq1-_IrJEpZo7KTeKLQDF64E0N9_YE_Y9KOjN2c3TTjbhg4l-JPXVeu0LiQS44xENIPtxSGHOGPsDJ3x2SV5cnDsEBfkVGP_LJFbbnYNNfP8l_Son9npY_eXUdXclug3XzXxoPqKtVN7tYlNili5fxZShn7lLXpQxVRQfClgbfvxiTNBJapoTLJGJYIlUotaZpxWctWBbOwDANbpu63tiCg_YFSfdxj2fE2sPC__ObqzkOT1c-nKVpIaNAGzYtT8t1oEp'
    },
    {
      id: 6,
      name: 'Premium Leather Wallet',
      stock: 24,
      sku:" BMP-NCXL-UB",
      price: "12500",
      category: "Accessory",
      maxStock: 70,
      status: "Low Stock",
      variants: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzWkOwjYpPIf2EWhKIkiKCrOELZRl3ol6R5Jpfm4GI_uDQHz5n0USAWTfwAyM-7f50Xpwe6Mr49MFWs4c4Fg9ogGKxzP3S73WY1DVXmD1Lirvz1y35yKfqTC4UKLuTzKnegPtSCx5sDUrLQ8cJFKqTkA21QwlMj_AlWD9revgx777gme-so6RXULYMcYigkFZk2myVzmBzOH6eUWnwmI0voHXIjNDC2tWGZq9zdrn9y6fcRdoiYBosldgog0nBTa_u1vrfahT_Gey-'
    },
    {
      id: 7,
      name: 'Noise Cancelling Pods',
      price: "45000",
      sku: "",
      category: "Electronics",
      maxStock: 25,
      status: "Low Stock",
      variants: 1,
      stock: 5,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxyJQazl7k2wAq6564qPHS_WAqeK61Tw3YYyLcdieUb6ymGctToOTGXyedpzOzTlClOep9hcKGkBXvkFfb7D1P7ari6Vb266wnHWChz7wVZBGQyMTsindMMTTw44Vz8U_XYif7N_LGG0c52XOOI4stCZPlQPtmLvW807AK7tuJQO9SkLAMjN0oaGhTcey4S1IoGgWoDExIcoJIIeITlw-IaFI8NwOFs8qY6HMDPNhwwc_6LYsVF1E-pqSWGyPVX5q-ZW5kxWglH8yo'
    },
    {
      id: 8,
      name: 'Lavender Essence Oil',
      price: "8200",
      stock: 112,
      sku: "",
      category: "Cosmetics",
      maxStock: 70,
      status: "Low Stock",
      variants: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvyA-bXUrxOslkJkEHXE_E4PhoO-7R_KWU4e3_hbgaUu2_H1rW7E2mIDKmdHAPrISFUkDjUuJa2Q_KglRzFWdWDFQqFxebq1E915rp61dg2c1GAxpYKkhqpVZvz0jdwuC9g8O0gUQIQ8UMr0KeDBgetQq0RddJa30rEyHy3A2X66uVN8zpIkTRn-ISllvA22vgSINBSDKm7nrf3tTbCs5mY5TB2kX_oGSDJt7fbmLganpc5US4fpxpa0iM2HmP01EpBVTNYQJ17e-0'
    },
    {
      id: 9,
      name: 'Ceramic Minimalist Mug',
      price: "4500",
      stock: 89,
      sku:"",
      category: "Kitchenware",
      maxStock: 120,
      status: "In Stock",
      variants: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKQxsJMOieBCcRv3qlRe4zOUFwR0UFxZv1ylG71AG536GISl4ASNoGa3F_onpBE42hottOS9IX7-cWrUlzPwE5Fuvj9NmiuYzknRu8m_ST8qd1lKbTjvhw5xwILnSPITzApZWR0YERwbBEIq5Is9ZjeL5LR3npR9HY2njt2oZAsTy98VdIimAkQFpMzBf9o5g9ZeMAt8aUWxN4HLOKAtt_CXsXydMpWk0uUI883Re6o78yRr22HJ9vzZP6uobQURD9hfpLtiTO37uS'
    },
    {
      id: 10,
      name: 'Classic White Tee',
      price: "15000",
      sku: "",
      category: "Clothing",
      maxStock: 100,
      status: "Low Stock",
      variants: 5,
      stock: 15,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE0Cyy-oG9cbicoUcOJm8CQJrxWgWBNIVZG3sGgoQCQU3MjshHeiapF4TKKUZQSuDrUnNjhtwQiYBDbUqEbRXouVcu_BSRUuxJ1Nfo-0LFdWNWG2K-ooDdJhJLqdhoAPqTeoDE9AFmZ8eAU3EUn2uln5sjVp8gv_nbaPjWrMXtGSfZN_vx8l0u8uOn1FogDYOFVWjIFLVztgaf0fqG7l2Sw8CUUinIKCoz0QTO_56etyd9OLepc__1Pz2JdHvrGmtWvCd25c5NAnwK'
    },
    {
      id: 11,
      name: 'Steel Hydro Flask',
      price: "22000",
      stock: 32,
      sku: "",
      category: "Accessory",
      maxStock: 70,
      status: "Low Stock",
      variants: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoEYbMtYPc2796CPjVnuDI3UgbAud3VRSbWdFJZxc20glGyY6aOTGJbsBWvGru-8-01NOa9eNqfOXIKbLtgQ7T8gRl1MQ-xpRV6n88CXtaQDAfh5M3E8ND9JIW2CVx6EGxNyHc-HiIBVympX6SAnCwB3iQJJzUafvj2hIcMBYd14TndigXEvLGzjYSKV-9YG9g--bXQuAtoJH2H-2vvJ25GeIwL6dECQu0IKcjI60hqvED_kYVAB6zWyD0XXmCHuMUiNUbfHc5di5F'
    }
  ];

  const dummyNotifications = [
    {
      id: 1,
      title: 'New Order #82741 Received',
      description: 'Customer "James Carter" just purchased 3 items totaling ₦45,000.',
      category: 'Order',
      categoryColor: 'bg-blue-50 text-blue-700 border-blue-100',
      date: 'Oct 24, 2023',
      time: '09:45 AM',
      unread: true,
      type: 'order'
    },
    {
      id: 2,
      title: 'Platform Update: Version 2.4.0',
      description: 'New inventory tracking features are now live in your store dashboard.',
      category: 'System',
      categoryColor: 'bg-purple-50 text-purple-700 border-purple-100',
      date: 'Oct 23, 2023',
      time: '02:15 PM',
      unread: false,
      type: 'system'
    },
    {
      id: 3,
      title: 'Payment Settlement Successful',
      description: 'Your weekly payout of ₦214,000 has been credited to your inventory Wallet.',
      category: 'Payment',
      categoryColor: 'bg-green-50 text-green-700 border-green-100',
      date: 'Oct 22, 2023',
      time: '11:00 AM',
      unread: true,
      type: 'payment'
    },
    {
      id: 4,
      title: 'Stock Alert: Critical Level',
      description: '5 items in "Summer Collection" are running extremely low on stock.',
      category: 'System',
      categoryColor: 'bg-red-50 text-red-700 border-red-100',
      date: 'Oct 22, 2023',
      time: '08:30 AM',
      unread: true,
      type: 'alert'
    },
    {
      id: 5,
      title: 'New Customer Registered',
      description: 'Sarah Benson just created an account and added items to her cart.',
      category: 'Order',
      categoryColor: 'bg-blue-50 text-blue-700 border-blue-100',
      date: 'Oct 21, 2023',
      time: '04:45 PM',
      unread: false,
      type: 'order'
    }
];

  const dummyHistory = [
    {
      id: "1",
      date: "Oct 22, 2023",
      time: "09:12:00",
      type: "Return Processed",
      product: "Modular Sensor Unit",
      sku: "MSU-MOD-B",
      quantity: "+5",
      user: "Marcus Thorne",
      staff: "Daniel",
      source:"Inventory",
      status: "Completed",
    },
    {
      id: "2",
      date: "Oct 22, 2023",
      time: "09:12:00",
      type: "Return Processed",
      product: "Modular Sensor Unit",
      sku: "MSU-MOD-B",
      quantity: "+5",
      user: "Marcus Thorne",
      staff: "Daniel",
      source:"Inventory",
      status: "Completed",
    },
    {
      id: "3",
      date: "Oct 22, 2023",
      time: "09:12:00",
      type: "Return Processed",
      product: "Modular Sensor Unit",
      sku: "MSU-MOD-B",
      quantity: "+5",
      user: "Marcus Thorne",
      staff: "Daniel",
      source:"Inventory",
      status: "Completed",
    },
   
  ]
    
  const dummyBanks = [
    {
      id: 1,
      name: 'Access Bank',
      accountNumber: '0123456789',
      accountName: 'TAYO OLOWU ENTERPRISES',
      isPrimary: true,
      verified: true,
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlvLcYLFTWT_-lmhSqAzLmyvtHisvx-bbRmhjCuuC0O5dyuDGp3G6_nRCIei5LoO6SIz7brC9FVb_5R7so2PkmILosncnPO8RUeORCTWIk8G9TLL4uDhIuGwXmbQY4b-oo89x_E9bSRJShFvcQerYIPV9eBKgsCouzd-UO4qneLz4IOQ_VQMsys704GWxVoHBf8qoF-jt1_WcJwVTAlRr93aeu2CAdRYbPX4tZsZxV4qCx8mTBSeQdnoHcv1wPZpJiwFrXxLmLVNZK'
    },
    {
      id: 2,
      name: 'GTBank',
      accountNumber: '0048123992',
      accountName: 'TAYO OLOWU VENTURES',
      isPrimary: false,
      verified: true,
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4U4ulJyZCw0F3hZRw5rS58APjTPRZ2c7V4PIePGt6tXaW--jPLT0Lp_Ph5ZwGx8jLtGSCCS816acafLPuxAqyVk838TcH5hF48hO8HaWojtZlJ4VAE1_Fc1RqnulEbTu8TqUZlrT937o577uUfb-q8-RSfYrFCP2eHtoYnSkdcWwB1w0BVykyWJDBgw14I6ozhB-l5CC0L0C4LJWB8uSKrcZeBKyL9Bx_XqTYbrN2nefdSXtY01p9SNVGoCyzOQJ_tKN17F82emtB'
    }
  ];

  const dummyInvoice = [
    {
      id: '#INV-8821',
      customer: 'Adebayo Omokore',
      email: 'ade.omokore@gmail.com',
      initials: 'AO',
      date: 'Oct 12, 2023',
      dueDate: 'Oct 19, 2023',
      amount: '120000.00',
      status: 'Paid',
      statusColor: 'bg-tertiary-fixed text-tertiary',
      avatarColor: 'bg-primary-fixed text-primary'
    },
    {
      id: '#INV-8822',
      customer: 'Chidinma Joy',
      email: 'c.joy@outlook.com',
      initials: 'CJ',
      date: 'Oct 10, 2023',
      dueDate: 'Oct 17, 2023',
      amount: '45000.00',
      status: 'Overdue',
      statusColor: 'bg-error-container text-error',
      avatarColor: 'bg-secondary-fixed text-secondary'
    },
    {
      id: '#INV-8823',
      customer: 'Benson Egwueke',
      email: 'begwueke@tech.ng',
      initials: 'BE',
      date: 'Oct 15, 2023',
      dueDate: 'Oct 22, 2023',
      amount: '280500.00',
      status: 'Unpaid',
      statusColor: 'bg-secondary-container text-on-secondary-fixed-variant',
      avatarColor: 'bg-tertiary-fixed text-tertiary'
    },
    {
      id: '#INV-8824',
      customer: 'Tayo Ajayi',
      email: 'tayo@bumpa.com',
      initials: 'TA',
      date: 'Oct 18, 2023',
      dueDate: '—',
      amount: '12000.00',
      status: 'Draft',
      statusColor: 'bg-surface-variant text-on-surface-variant',
      avatarColor: 'bg-outline-variant text-on-surface-variant'
    },
    {
      id: '#INV-8825',
      customer: 'Seyi Olumide',
      email: 'seyi.olu@me.com',
      initials: 'SO',
      date: 'Oct 19, 2023',
      dueDate: 'Oct 26, 2023',
      amount: '92000.00',
      status: 'Paid',
      statusColor: 'bg-tertiary-fixed text-tertiary',
      avatarColor: 'bg-primary-fixed text-primary'
    }
  ];
   
    const dummyTransactions = [
    {
      id: 1,
      date: 'Oct 24, 2023',
      description: 'Bumpa Pro - Annual Subscription',
      amount: '328000.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: 'Sparkles',
      iconBg: 'bg-[#dae1ff]/50 text-[#0050cb]'
    },
    {
      id: 2,
      date: 'Sep 12, 2023',
      description: 'SMS Bundle - 5000 units',
      amount: '12500.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: 'Zap',
      iconBg: 'bg-[#d9e3f2]/50 text-[#555f6c]'
    },
    {
      id: 3,
      date: 'Aug 24, 2023',
      description: 'Bumpa Pro - Annual Subscription',
      amount: '328000.00',
      status: 'Success',
      statusColor: 'bg-green-100 text-green-700',
      icon: 'Sparkles',
      iconBg: 'bg-[#dae1ff]/50 text-[#0050cb]'
    },
    {
      id: 4,
      date: 'Jul 10, 2023',
      description: 'Email Marketing Add-on',
      amount: '4500.00',
      status: 'Pending',
      statusColor: 'bg-blue-100 text-[#0050cb]',
      icon: 'Mail',
      iconBg: 'bg-[#d9e3f2]/50 text-[#555f6c]',
      isPending: true
    }
  ];


    const dummyOrders = [
    {
      id: '#00002',
      name: 'Book',
      total: '2000.00',
      status: 'completed',
      statusColor: 'bg-green-100 text-green-700',
      payment: 'Paid',
      paymentColor: 'bg-blue-100 text-blue-700',
      shipping: 'Picked Up',
      shippingColor: 'bg-blue-100 text-blue-700',
      date: 'June 25, 2026 6:50 AM',
      downloads: 0,
     
    },
    {
      id: '#00001',
      name: 'Book',
      total: '1000.00',
      status: 'processing',
      statusColor: 'bg-[#e2e2e5] text-[#424656]',
      payment: 'Paid',
      paymentColor: 'bg-blue-100 text-blue-700',
      shipping: 'Unfulfilled',
      shippingColor: 'bg-orange-100 text-orange-700',
      date: 'June 24, 2026 4:57 PM',
      downloads: 0,
    }
  ];
  
  const dummyCustomers = [
    {
        id: 1,
        name: "John Doe",
        email:" example1@Ga_Maamli.com",
        phone: "+2348000000000",
        date: "Oct 22, 2023",
        status: "Completed",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "example2@gmail.com",
        phone: "+2348000000000",
        date: "Oct 22, 2023",
        status: "Completed",
    },
  ]

  const dummyCustomerGroups = [
    {name:"John Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090",status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", phone: "09090909090", status: "Inactive"},
]
  const dummySubscribers = [
    {name:"John Doe",email:"[EMAIL_ADDRESS]", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", status: "Inactive"},
    {name:"John Doe",email:"[EMAIL_ADDRESS]", status: "Active"},
    {name:"Jane Doe",email:"[EMAIL_ADDRESS]", status: "Inactive"},
]

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

const dummyStaffMembers = [
    {
      id: 1,
      name: 'Chidimma Okafor',
      email: 'chidimma@inventorystore.com',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2 mins ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKXdybdaVdWKfaNXgJMrdKCcRCY0yC0MdP0tb5ek45ruh9ZCMNS2UbNXq1ZBQhSydoRXrQV7xusp6KF6cEQ45aNh2SMasqNX2I0z1XQSIyD018w0oqKmJHCJToMiTffY9fpRZBwjCwOpcA1wsktCrFAGmyIQfVvy50c2K06cBuyHvaWzLeTk18cM-JpvRoGxtcA6Vr_FnrAT5fHzMpQwOQWRE3XI4DzHI3P3to8fCPcrrND21Q3x46u3jOl4c24FFJutf2hXkv5P4N'
    },
    {
      id: 2,
      name: 'Tunde Adebayor',
      email: 'tunde@inventorystore.com',
      role: 'Manager',
      status: 'Active',
      lastLogin: '4 hours ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXn-iYSaKKJkYbLj4WbP7Vg-Hd8lNthw0lf2vsqjFzJ4oE44vIZX0BY1lqp3HKZQ4hVSa65StUjKAFfEfQ2tRP5gJld_4tzKEFcB64PF8Y4bPGkKYqQ0PjbFfUEReWJul175sU5TP6_9CkRMc8a9FZL13DtRo8-cyhVph1oitN65SAEMJBo88Fh6pLiol-qBjvMvBfEF8XvGmnb-M1ZvV49pDehlLVWsnThkNqlLuPG5F3dNmy6noWbMP80ZgJ0pHXoDFllx544plU'
    },
    {
      id: 3,
      name: 'Kemi Animashaun',
      email: 'kemi@inventorystore.com',
      role: 'Sales',
      status: 'Inactive',
      lastLogin: '2 days ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1KsOMZPkotapYT_tflgyNAJiugRQbLfQc7hG1MVFTbesdOQhOWmYHHGJyWwDAMZ5d73bkSXVyN4cJW_ERo3VW0cdAEwbl_OsLRpWOYoyLqKpvM0UlwSDK6ZSVAid7nBl076W2MsvEwLtwV-zcQsXAKWret1AEbGisGzvJjYnALqZVdJ7a1qIvTqbOZn9wPZNXSi6VoiyfG7Lt3qpcgYqfi3tFpxOM_YcG25E9vNGYLuWaPx7mCEOTrRgxbozNRTPNnbyhiFl-hGYM'
    },
    {
      id: 4,
      name: 'Emeka Nwosu',
      email: 'emeka@gmail.com',
      role: 'Sales',
      status: 'Pending',
      lastLogin: 'Never',
      avatar: null
    }
  ];
const dummyPayouts = [
    { date: 'Oct 12, 2023', reference: 'BUMP-98231-X', bank: 'Access Bank', amount: '₦245,000.00', status: 'SUCCESSFUL' },
    { date: 'Oct 11, 2023', reference: 'BUMP-97120-P', bank: 'Access Bank', amount: '₦12,400.00', status: 'SUCCESSFUL' },
    { date: 'Oct 10, 2023', reference: 'BUMP-96555-K', bank: 'GTBank', amount: '₦502,000.00', status: 'SUCCESSFUL' }
  ];

  const dummyCart = [

  ]

const dummyAnalytics ={
  sales:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
    ],
  },
  expenses:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
    ],
  },
  cashflow:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
  ],
  },
  inventory:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
  ],
            
  },
  orders:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
  ],
            
    },
    customers:{
      labels: ["Aug", "Sep", "Oct", "Nov"],
      datasets: [
      {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
  ],
  },
  visitors:{
    labels: ["Aug", "Sep", "Oct", "Nov"],
    datasets: [
    {
      label: "Revenue",
      data: [65, 59, 80, 81],
      tension: 0.4,
      borderColor: "#8B5CF6",
      backgroundColor: "rgba(139, 92, 246, 0.2)",
    },
  ],
  },
}


export  default async function getProducts() {

    // localStorage.removeItem('inventory'); 

    try{
        const inventory = localStorage.getItem('inventory');
        if(!inventory || JSON.parse(inventory).length === 0){
            localStorage.setItem('inventory', JSON.stringify(products))
            return {success: true, message:"Inventory fetched successfully", data: products}
        }else{
            return {success: true, message:"Inventory fetched successfully", data: JSON.parse(inventory)}
        }
    }
    catch(error){
        return {success: false, message:"Inventory fetch failed", data: []}
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
export async function getAnalytics() {
    try{
        const analytics = localStorage.getItem('analytics');
        if(!analytics || JSON.parse(analytics).length < 1){
            localStorage.setItem('analytics', JSON.stringify(dummyAnalytics))
            return {success: true,message:"Analytics fetched successfully", data: dummyAnalytics}
        }else{
            return {success: true,message:"Analytics fetched successfully", data: JSON.parse(analytics)}
        }
    }
    catch(error){
        return {success: false,message:"Analytics fetched failed", data: []}
    }
}

export async function getCartItems() {
  try{
    const cartItems = localStorage.getItem('cartItems');
    if(!cartItems || JSON.parse(cartItems).length < 1){
      localStorage.setItem('cartItems', JSON.stringify(dummyCart))
      return {success: true,message:"Cart items fetched successfully", data: dummyCart}
    }else{
      return {success: true,message:"Cart items fetched successfully", data: JSON.parse(cartItems)}
    }
  }
  catch(error){
    return {success: false,message:"Cart items fetched failed", data: []}
  }
}
export const getOrders = async () => {
//localStorage.removeItem('orders');

    try{
        const orders = localStorage.getItem('orders');
        if(!orders || JSON.parse(orders).length === 0){
            localStorage.setItem('orders', JSON.stringify(dummyOrders))
            return {success: true,message:"Orders fetched successfully", data: dummyOrders}
        }else{
            return {success: true,message:"Orders fetched successfully", data: JSON.parse(orders)}
        }
    }
    catch(error){
        return {success: false,message:"Orders fetched failed", data: []}
    }
}   

export async function getCustomers() {
    try{
        const customers = localStorage.getItem('customers');
        if(!customers || JSON.parse(customers).length < 1){
            localStorage.setItem('customers', JSON.stringify(dummyCustomers))
            return {success: true,message:"Customers fetched successfully", data: dummyCustomers}
        }else{
            return {success: true,message:"Customers fetched successfully", data: JSON.parse(customers)}
        }
    }
    catch(error){
        return {success: false,message:"Customers fetched failed", data: []}
    }
}   
export async function getCustomerGroups(){


    try{
        const customerGroups = localStorage.getItem('customerGroups');
        if(!customerGroups || JSON.parse(customerGroups).length < 1){
            localStorage.setItem('customerGroups', JSON.stringify(dummyCustomerGroups))
            return {success: true,message:"Customer groups fetched successfully", data: dummyCustomerGroups}
        }else{
            return {success: true,message:"Customer groups fetched successfully", data: JSON.parse(customerGroups)}
        }
    }
    catch(error){
        return {success: false,message:"Customer groups fetched failed", data: []}
    }
  }   
export async function getNewsletterSubscribers() {

    
    try{
        const subscribers = localStorage.getItem('subscribers');
        if(!subscribers || JSON.parse(subscribers).length < 1){
            localStorage.setItem('subscribers', JSON.stringify(dummySubscribers))
            return {success: true,message:"Subscribers fetched successfully", data: dummySubscribers}
        }else{
            return {success: true,message:"Subscribers fetched successfully", data: JSON.parse(subscribers)}
        }
    }
    catch(error){
        return {success: false,message:"Subscribers fetched failed", data: []}
    }
}
  export async function getStaffs(){
        try{
        const staffs = localStorage.getItem('staffs');
        if (!staffs || JSON.parse(staffs).length < 1) {
            localStorage.setItem('staffs', JSON.stringify(dummyStaffMembers));
            return {success: true,message:"Staffs fetched successfully", data: dummyStaffMembers}
        }else{
            return {success: true,message:"Staffs fetched successfully", data: JSON.parse(staffs)}
        }
    }
    catch(error){
        return {success: false,message:"Staffs fetched failed", data: []}
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
export  async function getTransactions() {
//localStorage.removeItem('transactions'); 


    try{
        const transactions = localStorage.getItem('transactions');
        if (!transactions || JSON.parse(transactions).length < 1) {
            localStorage.setItem('transactions', JSON.stringify(dummyTransactions));
            return {success: true,message:"Transactions fetched successfully", data: dummyTransactions}
        }else{
            return {success: true,message:"Transactions fetched successfully", data: JSON.parse(transactions)}
        }
    }
    catch(error){
        return {success: false,message:"Transactions fetched failed", data: []}
    }
}

export  async function getHistory() {
localStorage.removeItem('history'); 

    try{
        const history = localStorage.getItem('history');
        const data = JSON.parse(history) || dummyHistory
        return {success: true,message:"History fetched successfully", data: data}
    }
    catch(error){
        return {success: false,message:"History fetched failed", data: []}
    }
}
export async function getPayoutAccounts(){
    try{
        const accounts = localStorage.getItem('accounts');
        if (!accounts || JSON.parse(accounts).length < 1) {
            localStorage.setItem('accounts', JSON.stringify(dummyBanks));
            return {success: true,message:"Accounts fetched successfully", data: dummyBanks}
        }else{
            return {success: true,message:"Accounts fetched successfully", data: JSON.parse(accounts)}
        }
    }
    catch(error){
        return {success: false,message:"Accounts fetched failed", data: []}
    }
}

export async function getPayouts(){
    try{
        const payouts = localStorage.getItem('payouts');
        if (!payouts || JSON.parse(payouts).length < 1) {
            localStorage.setItem('payouts', JSON.stringify(dummyPayouts));
            return {success: true,message:"Payouts fetched successfully", data: dummyPayouts}
        }else{
            return {success: true,message:"Payouts fetched successfully", data: JSON.parse(payouts)}
        }
    }
    catch(error){
        return {success: false,message:"Payouts fetched failed", data: []}
    }
}

export  async function getInvoices() {
//localStorage.removeItem('invoice'); 

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