"use client"
import NotificationList from '@/app/components/NotificationList';
import { getNotifications } from '@/libs/service';
import { useEffect, useState } from 'react';
import React from 'react';

export default function NotificationPage() {

  const [notifications, setNotifications] = useState([])

  const loadNotifications = async() => {
    const res = await getNotifications()
    setNotifications(res)

  }
  useEffect(() => {
    loadNotifications()
  }, [])


  return (
    <div className="p-10 space-y-10 font-body">
     <NotificationList notifications= {notifications}/>
    </div>
  );
}