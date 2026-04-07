export default function CardSection({ title, subtitle, action, children }) {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-slate-950 dark:text-white">{title}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  )
}
