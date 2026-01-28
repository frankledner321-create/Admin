
import React, { useState } from 'react';
import { Task, Category } from '../types';

interface AddTaskProps {
  onAdd: (task: Partial<Task>) => void;
  categories: Category[];
}

const AddTaskView: React.FC<AddTaskProps> = ({ onAdd, categories }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    accountName: '',
    reward: '',
    instructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark p-6 lg:p-8 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold mb-6">Task Configuration</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-500 dark:text-[#92c9b7]">Job Title</label>
            <input 
              required
              value={formData.title}
              onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              placeholder="e.g. Follow on Instagram"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-500 dark:text-[#92c9b7]">Category</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Category</option>
                {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-500 dark:text-[#92c9b7]">Reward ($)</label>
              <input 
                type="number" step="0.01"
                value={formData.reward}
                onChange={e => setFormData({...formData, reward: e.target.value})}
                className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
                placeholder="0.05"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-500 dark:text-[#92c9b7]">Target Username/Handle</label>
            <input 
              required
              value={formData.accountName}
              onChange={e => setFormData({...formData, accountName: e.target.value})}
              className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              placeholder="@username"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-slate-500 dark:text-[#92c9b7]">Instructions</label>
            <textarea 
              rows={4}
              value={formData.instructions}
              onChange={e => setFormData({...formData, instructions: e.target.value})}
              className="w-full bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
              placeholder="Step by step instructions for workers..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 rounded-lg transition-transform active:scale-95 flex items-center justify-center gap-2 mt-4"
          >
            <span className="material-symbols-outlined">publish</span>
            Publish Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskView;
