
import React from 'react';
import { UserAccount } from '../types';

interface AccountsProps {
  accounts: UserAccount[];
  setAccounts: React.Dispatch<React.SetStateAction<UserAccount[]>>;
}

const AccountsView: React.FC<AccountsProps> = ({ accounts, setAccounts }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark rounded-xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 dark:border-border-dark flex justify-between items-center">
          <h4 className="text-lg font-bold">User Accounts</h4>
          <button className="text-sm font-semibold text-primary">Export CSV</button>
        </div>
        <div className="overflow-x-auto">
          {accounts.length === 0 ? (
            <div className="p-12 text-center text-slate-400 dark:text-[#92c9b7]">
              <span className="material-symbols-outlined text-4xl mb-2">person_off</span>
              <p>No user accounts found in the database.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-400 dark:text-[#92c9b7] text-xs uppercase tracking-wider font-bold">
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">User</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">Role</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">Status</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {accounts.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-border-dark/50 transition-colors">
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark font-medium">
                      <div>
                        <p>{user.name}</p>
                        <p className="text-xs text-slate-500 font-normal">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">{user.role}</td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${user.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark text-right">
                      <button className="p-1 hover:text-primary"><span className="material-symbols-outlined">edit</span></button>
                      <button className="p-1 hover:text-rose-500 ml-2"><span className="material-symbols-outlined">block</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountsView;
