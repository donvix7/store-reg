import NotificationList from '@/app/components/NotificationList';
import { getNotifications } from '@/app/libs/service';
import React from 'react';

export default async function NotificationPage() {


    const notifications = await getNotifications()
  return (
    <div className="p-10 space-y-10 font-body">
     <NotificationList notifications= {notifications}/>
    </div>
  );
}