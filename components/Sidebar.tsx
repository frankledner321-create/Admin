
import React from 'react';
import { TabType } from '../types';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, setIsOpen }) => {
  const navItems: { id: TabType; icon: string; label: string }[] = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'add-task', icon: 'add_circle', label: 'Add Task' },
    { id: 'categories', icon: 'category', label: 'Manage Categories' },
    { id: 'accounts', icon: 'group', label: 'Accounts' },
    { id: 'media', icon: 'folder_shared', label: 'Shared Media' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-sidebar-dark border-r border-slate-200 dark:border-border-dark flex flex-col shrink-0 transition-transform duration-300 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static
      `}>
        <div className="p-6 flex items-center justify-between lg:justify-start gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark">work_history</span>
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Micro-Job</h1>
              <p className="text-xs text-primary font-medium uppercase tracking-wider">Admin System</p>
            </div>
          </div>
          <button className="lg:hidden cursor-pointer" onClick={() => setIsOpen(false)}>
            <span className="material-symbols-outlined text-slate-500">close</span>
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                ${activeTab === item.id 
                  ? 'bg-primary/15 text-primary border-l-4 border-primary' 
                  : 'text-slate-500 dark:text-[#92c9b7] hover:bg-slate-100 dark:hover:bg-border-dark'
                }
              `}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className={`text-sm ${activeTab === item.id ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-border-dark">
          <button 
            onClick={() => setActiveTab('add-task')}
            className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 mb-6"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            <span>New Task</span>
          </button>
          
          <div className="flex items-center gap-3 px-2">
            <div 
              className="h-10 w-10 rounded-full bg-cover bg-center border-2 border-primary/20" 
              style={{ backgroundImage: `url('https://picsum.photos/seed/admin/100/100')` }}
            ></div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">System Admin</p>
              <p className="text-xs text-slate-500 dark:text-[#92c9b7] truncate">alex@microjob.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
