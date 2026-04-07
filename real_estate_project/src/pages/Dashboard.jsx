import StatCard from '../components/StatCard'
import SidebarNav from '../components/SidebarNav'
import { dashboardStats, recentLeads, sidebarItems } from '../data/content'

export default function Dashboard() {
  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Digital Curator Premium</p>
          <div className="mt-8 space-y-2">
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">Dashboard Overview</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Welcome back, Curator. Here's your portfolio activity.</p>
          </div>
          <button className="mt-8 w-full rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
            + New Listing
          </button>
        </div>
        <SidebarNav title="Navigation" items={sidebarItems} />
      </aside>
      <section className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStats.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} diff={item.diff} />
          ))}
        </div>
        <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Lead Growth</p>
                <p className="mt-2 text-slate-500 dark:text-slate-400">Analytics across last 30 days.</p>
              </div>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                Monthly
              </button>
            </div>
            <div className="mt-8 overflow-hidden rounded-[32px] bg-slate-100 px-4 py-6 dark:bg-slate-900">
              <div className="relative h-64">
                <div className="absolute bottom-0 left-0 grid h-full w-full grid-cols-12 items-end gap-3">
                  {[6, 10, 8, 12, 10, 14, 11, 13, 9, 12, 10, 14].map((height, idx) => (
                    <span key={idx} className="block w-full rounded-full bg-brand-600" style={{ height: `${height * 4}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-brand-600 p-6 text-white shadow-soft dark:border-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">Market Insight</p>
            <h3 className="mt-4 text-3xl font-semibold">Luxury market in Chelsea up 14% this quarter.</h3>
            <p className="mt-4 text-sm leading-7 text-blue-100/90">Automated data curation shows high demand for smart-integrated townhouses.</p>
            <button className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition hover:bg-slate-100">
              View Report
            </button>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Recent Leads</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Review and manage inbound inquiries.</p>
            </div>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Filter by status
            </button>
          </div>
          <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 dark:border-slate-800">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 dark:bg-slate-900 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Property</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.id} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-sm font-semibold text-brand-700">{lead.initials}</div>
                        <div>
                          <p className="font-semibold text-slate-950 dark:text-white">{lead.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">{lead.phone}</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">{lead.property}</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">{lead.date}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        lead.status === 'New' ? 'bg-emerald-100 text-emerald-700' : lead.status === 'Contacted' ? 'bg-amber-100 text-amber-700' : 'bg-sky-100 text-sky-700'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
