
import React from 'react';
import { Task, UserAccount } from '../types';

interface DashboardProps {
  tasks: Task[];
  accounts: UserAccount[];
}

const DashboardView: React.FC<DashboardProps> = ({ tasks, accounts }) => {
  const completedCount = tasks.filter(t => t.status === 'Completed').length;
  const pendingCount = tasks.filter(t => t.status === 'Pending').length;
  const runningCount = tasks.filter(t => t.status === 'Running').length;

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          { label: 'Tasks Total', value: tasks.length, trend: '12%', color: 'text-primary' },
          { label: 'Completed', value: completedCount, trend: '5%', color: 'text-primary' },
          { label: 'Active Workers', value: accounts.length, trend: '2%', color: 'text-primary' },
          { label: 'Pending Approval', value: pendingCount, trend: '0%', color: 'text-rose-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-sidebar-dark/40 dark:border dark:border-accent-dark p-4 lg:p-6 rounded-xl shadow-sm">
            <p className="text-slate-500 dark:text-[#92c9b7] text-xs lg:text-sm font-medium">{stat.label}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl lg:text-3xl font-bold tracking-tight">{stat.value}</h3>
              <span className={`${stat.color} flex items-center text-xs font-bold`}>
                <span className="material-symbols-outlined text-base lg:text-lg">trending_up</span>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
        <div className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark p-6 lg:p-8 rounded-xl shadow-sm flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h4 className="text-lg font-bold">Completion Velocity</h4>
              <p className="text-sm text-slate-500 dark:text-[#92c9b7]">Firebase Real-time Data</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-[10px] lg:text-xs font-semibold text-slate-500 dark:text-[#92c9b7]">
                <span className="h-2 w-2 rounded-full bg-primary"></span> Today
              </span>
              <span className="flex items-center gap-1 text-[10px] lg:text-xs font-semibold text-slate-500 dark:text-[#92c9b7]">
                <span className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-600"></span> Yesterday
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-col flex-1 min-h-[160px] lg:h-64">
            <svg className="flex-1" fill="none" preserveAspectRatio="none" viewBox="0 0 480 150" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25V149H0V109Z" fill="url(#line_grad)"></path>
              <path d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25" stroke="#11d493" strokeLinecap="round" strokeWidth="3"></path>
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="line_grad" x1="236" x2="236" y1="1" y2="149">
                  <stop stopColor="#11d493" stopOpacity="0.3"></stop>
                  <stop offset="1" stopColor="#11d493" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="flex justify-between mt-4">
              <span className="text-[10px] font-bold text-slate-400 dark:text-[#92c9b7]">00:00</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-[#92c9b7]">12:00</span>
              <span className="text-[10px] font-bold text-slate-400 dark:text-[#92c9b7]">23:59</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark p-6 lg:p-8 rounded-xl shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-bold">Monthly Growth</h4>
              <p className="text-sm text-slate-500 dark:text-[#92c9b7]">Real-time cloud metrics</p>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-primary">124.5k</h3>
          </div>
          <div className="mt-4 grid grid-cols-6 gap-2 lg:gap-4 items-end min-h-[160px] lg:h-64 px-2 pb-2">
            {[60, 35, 50, 80, 70, 95].map((h, i) => (
              <div key={i} className="space-y-2">
                <div className="bg-border-dark border-t-2 border-primary rounded-t w-full" style={{ height: `${h}%` }}></div>
                <p className="text-center text-[10px] font-bold text-slate-400 dark:text-[#92c9b7]">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Table */}
      <section className="bg-white dark:bg-sidebar-dark dark:border dark:border-accent-dark rounded-xl shadow-sm overflow-hidden">
        <div className="px-4 lg:px-8 py-4 lg:py-6 border-b border-slate-100 dark:border-border-dark flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h4 className="text-lg font-bold">Live Task Monitoring</h4>
            <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
              <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
              FIREBASE ACTIVE
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          {tasks.length === 0 ? (
            <div className="p-12 text-center text-slate-400 dark:text-[#92c9b7]">
              <span className="material-symbols-outlined text-4xl mb-2">inbox</span>
              <p>No active tasks currently. Add a new task to begin.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-slate-400 dark:text-[#92c9b7] text-xs uppercase tracking-wider font-bold">
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">ID</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">Task Title</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">Account</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">Status</th>
                  <th className="px-8 py-4 border-b border-slate-100 dark:border-border-dark text-right">Uptime</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {tasks.map(task => (
                  <tr key={task.id} className="hover:bg-slate-50 dark:hover:bg-border-dark/50 transition-colors">
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark font-medium">#{task.id.slice(-4).toUpperCase()}</td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">{task.title}</td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">{task.accountName}</td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark">
                      <span className={`
                        px-2.5 py-1 rounded-full text-[10px] font-bold uppercase
                        ${task.status === 'Running' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 
                          task.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400' :
                          'bg-slate-100 text-slate-600 dark:bg-border-dark dark:text-[#92c9b7]'}
                      `}>
                        {task.status}
                      </span>
                    </td>
                    <td className="px-8 py-4 border-b border-slate-100 dark:border-border-dark text-right tabular-nums">{task.uptime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  );
};

export default DashboardView;
