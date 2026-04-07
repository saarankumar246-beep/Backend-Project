import { Link } from 'react-router-dom'

export default function SidebarNav({ title, items, ctaLabel, ctaPath, user }) {
  return (
    <aside className="w-full max-w-[320px] rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">{title}</p>
        {items.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {item.label}
          </Link>
        ))}
      </div>
      {ctaLabel ? (
        <Link
          to={ctaPath}
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {ctaLabel}
        </Link>
      ) : null}
      {user ? (
        <div className="mt-8 flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-base font-semibold text-white">A</div>
          <div>
            <p className="text-sm font-semibold text-slate-950 dark:text-white">Alex Mercer</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Premium Tier</p>
          </div>
        </div>
      ) : null}
    </aside>
  )
}
