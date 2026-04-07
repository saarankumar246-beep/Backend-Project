export default function StatCard({ label, value, diff }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-5 shadow-soft transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <p className="text-3xl font-semibold text-slate-950 dark:text-white">{value}</p>
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">{diff}</span>
      </div>
    </div>
  )
}
