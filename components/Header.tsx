
import React from 'react';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, toggleSidebar }) => {
  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Analytics & Monitoring';
      case 'add-task': return 'Create New Task';
      case 'categories': return 'Job Categories';
      case 'accounts': return 'User Management';
      case 'media': return 'Media Library';
      default: return 'Admin Dashboard';
    }
  };

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-slate-200 dark:border-border-dark bg-white dark:bg-sidebar-dark shrink-0">
      <div className="flex items-center gap-3 lg:gap-6 flex-1">
        <button onClick={toggleSidebar} className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-border-dark rounded-lg">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap">{getTitle()}</h2>
        
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#92c9b7] text-xl">search</span>
          <input 
            className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-400 dark:placeholder:text-[#92c9b7]" 
            placeholder="Search..." 
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex items-center gap-2 px-2 lg:px-3 py-1.5 rounded-full bg-slate-100 dark:bg-border-dark border border-slate-200 dark:border-accent-dark">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] lg:text-xs font-bold text-slate-600 dark:text-white uppercase tracking-wider whitespace-nowrap">Live Sync</span>
        </div>
        <button className="p-2 text-slate-500 dark:text-white hover:bg-slate-100 dark:hover:bg-border-dark rounded-lg">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
