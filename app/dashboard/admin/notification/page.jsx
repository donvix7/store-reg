"use client"
import NotificationList from '@/components/NotificationList';
import { getNotifications } from '@/lib/service';
import { useEffect, useState } from 'react';
import React from 'react';

export default function NotificationPage() {

  const [notifications, setNotifications] = useState([])
  const [empty, setEmpty] = useState("")

  const loadNotifications = async() => {
    const res = await getNotifications()
    if(res.success){
      setNotifications(res?.data)
      setEmpty(res.message)
    }else{
      setNotifications([])
      setEmpty(res?.message)
    }
  }
  useEffect(() => {
    loadNotifications()
  }, [])


  return (
    <div className="space-y-10 font-body">
     <NotificationList notifications={notifications} empty={empty} onRefresh={loadNotifications}/>
    </div>
  );
}