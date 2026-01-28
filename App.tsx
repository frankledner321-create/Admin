
import React, { useState, useEffect } from 'react';
import { TabType, Task, Category, UserAccount, MediaItem } from './types';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardView';
import AddTaskView from './views/AddTaskView';
import CategoriesView from './views/CategoriesView';
import AccountsView from './views/AccountsView';
import MediaView from './views/MediaView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Real Data States (To be synced with Firebase)
  const [tasks, setTasks] = useState<Task[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);

  // Simulate loading real data (Replace with Firebase listeners later)
  useEffect(() => {
    // This is where you would connect Firebase listeners
    // Example: const unsubscribe = onSnapshot(collection(db, 'tasks'), ...)
    
    // For now, initializing with empty arrays or minimal starting data
    // to show functionality
    setCategories([
      { id: '1', name: 'Social Media', taskCount: 0 },
      { id: '2', name: 'App Review', taskCount: 0 }
    ]);
  }, []);

  const handleAddTask = (newTask: Partial<Task>) => {
    const task: Task = {
      id: `task-${Date.now()}`,
      title: newTask.title || 'Untitled Task',
      accountName: newTask.accountName || 'Unknown',
      status: 'Pending',
      uptime: '0h 0m',
      createdAt: Date.now(),
    };
    setTasks(prev => [task, ...prev]);
    setActiveTab('dashboard'); // Redirect to dashboard after adding
  };

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView tasks={tasks} accounts={accounts} />;
      case 'add-task':
        return <AddTaskView onAdd={handleAddTask} categories={categories} />;
      case 'categories':
        return <CategoriesView categories={categories} setCategories={setCategories} />;
      case 'accounts':
        return <AccountsView accounts={accounts} setAccounts={setAccounts} />;
      case 'media':
        return <MediaView media={media} setMedia={setMedia} />;
      default:
        return <DashboardView tasks={tasks} accounts={accounts} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden relative">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
      
      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        <Header 
          activeTab={activeTab} 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        />
        
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">
          {renderView()}
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-40">
        <button 
          onClick={() => setActiveTab('add-task')}
          className="size-14 rounded-full bg-primary text-background-dark shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl font-bold">add</span>
        </button>
      </div>
    </div>
  );
};

export default App;
