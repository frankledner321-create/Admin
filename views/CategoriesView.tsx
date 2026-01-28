
import React, { useState } from 'react';
import { Category } from '../types';

interface CategoriesProps {
  categories: Category[];
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
}

const CategoriesView: React.FC<CategoriesProps> = ({ categories, setCategories }) => {
  const [newCat, setNewCat] = useState('');

  const addCategory = () => {
    if (!newCat.trim()) return;
    setCategories([...categories, { id: Date.now().toString(), name: newCat, taskCount: 0 }]);
    setNewCat('');
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter(c => c.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold mb-6">Create New Category</h3>
        <div className="flex gap-3">
          <input 
            value={newCat}
            onChange={e => setNewCat(e.target.value)}
            className="flex-1 bg-slate-100 dark:bg-border-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary"
            placeholder="Category name (e.g. SEO, Translation)"
          />
          <button 
            onClick={addCategory}
            className="bg-primary hover:bg-primary/90 text-background-dark px-6 font-bold rounded-lg transition-transform active:scale-95"
          >
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark p-5 rounded-xl flex justify-between items-center group">
            <div>
              <p className="font-bold">{cat.name}</p>
              <p className="text-xs text-slate-500 dark:text-[#92c9b7]">{cat.taskCount} active tasks</p>
            </div>
            <button 
              onClick={() => removeCategory(cat.id)}
              className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesView;
