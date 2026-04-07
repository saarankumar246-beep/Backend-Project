import { Link } from 'react-router-dom'
import { HeartIcon } from './icons'

export default function PropertyCard({ property, actionLabel, to, compact }) {
  return (
    <article className={`group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${compact ? 'h-full' : ''}`}>
      <div className="relative overflow-hidden">
        <img src={property.image} alt={property.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-4 top-4 flex flex-wrap gap-2">
          {property.status?.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <button className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/90 text-slate-900 shadow-sm transition hover:bg-brand-600 hover:text-white dark:border-slate-800 dark:bg-slate-950 dark:text-white">
          <HeartIcon />
        </button>
      </div>
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xl font-semibold text-slate-950 dark:text-white">{property.title}</p>
          <p className="text-lg font-semibold text-brand-600">{property.price}</p>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{property.location}</p>
        <div className="grid grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-brand-600" />
            {property.beds} Beds
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-brand-600" />
            {property.baths} Baths
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-brand-600" />
            {property.area}
          </div>
        </div>
        {actionLabel ? (
          to ? (
            <Link
              to={to}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              {actionLabel}
            </Link>
          ) : (
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              {actionLabel}
            </button>
          )
        ) : null}
      </div>
    </article>
  )
}
