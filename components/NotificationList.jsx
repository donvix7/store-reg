"use client";
import React, { useState } from 'react';
import { CheckCheckIcon, TriangleAlert, BellRing, Filter, ChevronDown, BellRingIcon } from 'lucide-react';

const NotificationList = ({ notifications }) => {
    const [activeTab, setActiveTab] = useState('All');

    const renderIcon = (name) => {
        switch (name) {
            case 'TriangleAlert': return <TriangleAlert size={20} />;
            case 'CheckCheck': return <BellRing size={20} />;
            default: return <BellRing size={20} />;
        }
    };

  return (
    <div>
         {/* Hero Stats / Summary Section (Asymmetric) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-1 md:col-span-12 lg:col-span-8 bg-surface-container-low p-4 rounded-2xl flex justify-between items-center overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="font-headline text-3xl font-bold mb-2">Notifications</h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-xl text-sm shadow-sm hover:opacity-90 transition-opacity"
              onClick={() => setActiveTab('Urgent')}>
                View Alerts
              </button>
              <button className="px-6 py-2 bg-secondary-container text-on-secondary-fixed font-bold rounded-xl text-sm hover:bg-surface-container-high transition-colors">
                Archive All
              </button>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10 hidden sm:block">
            <BellRing size={200} className="text-primary" />
          </div>
        </div>
        <div className="col-span-1 md:col-span-12 lg:col-span-4 bg-tertiary-fixed p-4 rounded-2xl flex flex-col justify-center">
          <p className="text-on-tertiary-fixed font-bold uppercase tracking-widest text-xs mb-2">Urgent Tasks</p>
          <span className="font-headline text-2xl font-extrabold text-on-tertiary-fixed">03</span>
          <p className="text-on-tertiary-fixed-variant text-sm mt-2">Critical low stock items found in Warehouse A.</p>
        </div>
      </section>

      {/* Notification Center */}
      <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10 grid grid-cols-12">
        {/* Filters */}
        <div className="col-span-12 p-4 border-b border-outline-variant/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 p-1 bg-surface-container-low rounded-xl">
            {['All', 'Unread', 'Urgent'].map((category) => (
              <button 
                key={category} 
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-lg text-sm transition-colors ${
                  activeTab === category 
                    ? 'bg-surface-container-lowest font-bold text-primary shadow-sm hover:bg-white' 
                    : 'font-medium text-outline hover:bg-surface-container-high'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-outline cursor-pointer hover:text-primary transition-colors">
            <span className="text-xs font-medium uppercase tracking-tighter">Sort by: Newest</span>
            <Filter size={14} />
          </div>
        </div>

        {/* Notification List */}
        <div className="col-span-12 sm:col-span-8 divide-y mb-20 divide-outline-variant/10">
          
          {(notifications || [])
            .filter(n => activeTab === 'All' || (activeTab === 'Unread' && n.status === 'unread') || (activeTab === 'Urgent' && n.category === 'Urgent'))
            .map((notification, index) => (
            <div key={index} className={`p-4 flex flex-col sm:flex-row items-start gap-6 hover:bg-surface-container-low transition-colors group cursor-pointer ${notification.status === 'read' ? 'opacity-60' : ''}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${notification.bgClass}`}>
                {renderIcon(notification.iconName)}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold rounded-full uppercase tracking-widest ${notification.badgeClass}`}>{notification.badge}</span>
                  {notification.status === 'unread' && (
                    <span className={`w-1.5 h-1.5 rounded-full ${notification.dotClass}`}></span>
                  )}
                </div>
                <h4 className="font-headline text-sm font-bold text-on-surface">{notification.type}: {notification.sku}</h4>
                <p className="text-on-surface-variant leading-relaxed text-sm">{notification.message}</p>
              </div>
              <div className="text-left sm:text-right mt-4 sm:mt-0 w-full sm:w-auto flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end">
                <p className="text-xs font-medium text-outline">{notification.date}</p>
                {notification.status === 'unread' ? (
                  <button className="sm:mt-4 sm:opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold text-xs uppercase tracking-widest">Mark as Read</button>
                ) : (
                  <span className="sm:mt-4 inline-block text-outline font-bold text-xs uppercase tracking-widest">Read</span>
                )}
              </div>
            </div>
          ))}
           <div className="col-span-12 flex justify-center items-center p-4 bg-surface-container-low/30">
          <button className="px-8 py-3 border border-outline-variant rounded-xl font-bold text-primary hover:bg-surface-container-low transition-colors inline-flex items-center gap-2">
            <span>Load Previous Notifications</span>
            <ChevronDown size={14} />
          </button>
        </div>
        </div>
      </section>
    </div>
  )
}

export default NotificationList