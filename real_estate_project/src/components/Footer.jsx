import { footerColumns } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50 px-6 py-12 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-300 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Curator Estate</h2>
          <p className="max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-400">
            Redefining the luxury real estate experience through architectural focus and data-driven intelligence.
          </p>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 dark:text-slate-200">
              {column.title}
            </p>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              {column.links.map((link) => (
                <a key={link} href="#" className="block transition hover:text-slate-950 dark:hover:text-white">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] border-t border-slate-200/80 pt-6 text-sm text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
        © 2024 Curator Estate. All rights reserved.
      </div>
    </footer>
  )
}
