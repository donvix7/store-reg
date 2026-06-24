"use client"
import NotificationList from '@/components/NotificationList';
import { getNotifications } from '@/lib/service';
import { useEffect, useState } from 'react';
import React from 'react';

export default function NotificationPage() {

  const [notifications, setNotifications] = useState([])

  const loadNotifications = async() => {
    const res = await getNotifications()
    console.log(res)
    setNotifications(res)

  }
  useEffect(() => {
    loadNotifications()
  }, [])


  return (
    <div className="space-y-10 font-body">
     <NotificationList notifications= {notifications}/>
    </div>
  );
}