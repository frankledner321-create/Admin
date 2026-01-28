
export type TabType = 'dashboard' | 'add-task' | 'categories' | 'accounts' | 'media';

export interface Task {
  id: string;
  title: string;
  accountName: string;
  status: 'Running' | 'Idle' | 'Completed' | 'Pending';
  uptime: string;
  createdAt: number;
}

export interface Category {
  id: string;
  name: string;
  taskCount: number;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Worker' | 'Client';
  status: 'Active' | 'Banned';
}

export interface MediaItem {
  id: string;
  url: string;
  fileName: string;
  type: 'image' | 'video' | 'file';
}
