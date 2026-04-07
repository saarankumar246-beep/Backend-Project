import { Link } from 'react-router-dom'
import { propertyDetail, recommendedProperties } from '../data/content'

export default function PropertyDetails() {
  return (
    <div className="space-y-12">
      <section className="space-y-10">
        <div className="grid gap-6 lg:grid-cols-[2.3fr_1fr]">
          <div className="space-y-6 rounded-[32px] bg-white p-6 shadow-soft dark:bg-slate-950">
            <div className="grid gap-4 sm:grid-cols-[1.8fr_1fr]">
              <img src={propertyDetail.images[0]} alt="Hero property" className="aspect-[4/3] w-full rounded-[32px] object-cover" />
              <div className="grid gap-4">
                <img src={propertyDetail.images[1]} alt="Secondary property" className="h-full w-full rounded-[28px] object-cover" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <img src={propertyDetail.images[2]} alt="Detail property" className="h-40 w-full rounded-[28px] object-cover" />
                  <div className="relative overflow-hidden rounded-[28px] bg-slate-950 text-white">
                    <img src={propertyDetail.images[3]} alt="Detail property" className="h-full w-full object-cover opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 text-center text-sm font-semibold uppercase tracking-[0.3em] text-white">
                      +18 more
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {propertyDetail.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-[1.5fr_auto] md:items-end">
              <div>
                <h1 className="text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">{propertyDetail.title}</h1>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{propertyDetail.address}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-right dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Price</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{propertyDetail.price}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Est. Mortgage {propertyDetail.mortgage}</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: 'Bedrooms', value: `${propertyDetail.beds} Beds` },
                { label: 'Bathrooms', value: `${propertyDetail.baths} Baths` },
                { label: 'Square Feet', value: propertyDetail.sqft },
                { label: 'Lot Size', value: propertyDetail.lot }
              ].map((item) => (
                <div key={item.label} className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950 dark:text-white">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Property Narrative</h2>
              <p className="mt-4 whitespace-pre-line">{propertyDetail.description}</p>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full bg-slate-200" />
                <div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">Julian Thorne</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Senior Portfolio Partner</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 rounded-[24px] bg-slate-50 p-4 dark:bg-slate-900">
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>Response Time</span>
                  <span>Under 15 mins</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>Experience</span>
                  <span>12+ Years</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700">I'm Interested</button>
                <button className="w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">Schedule Private Tour</button>
                <button className="w-full rounded-full bg-slate-950/5 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">Request Digital Brochure</button>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Location & Surroundings</h3>
              <div className="mt-5 h-64 rounded-[28px] bg-slate-200 dark:bg-slate-800" />
              <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm dark:bg-slate-950">
                  <span className="font-medium text-slate-950 dark:text-white">Neighborhood Score</span>
                  <span>{propertyDetail.nearby.score}</span>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-sm dark:bg-slate-950">
                  <span className="font-medium text-slate-950 dark:text-white">Transit</span>
                  <span>{propertyDetail.nearby.transit}</span>
                </div>
                <button className="mt-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Open Maps</button>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Curated for You</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Similar estates in the Beverly Hills enclave.</h2>
          </div>
          <Link to="/listings" className="text-sm font-semibold text-brand-600 transition hover:text-brand-700">
            View All →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recommendedProperties.map((property) => (
            <div key={property.id} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950">
              <img src={property.image} alt={property.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="mb-3 text-xs uppercase tracking-[0.24em] text-brand-600">Featured</div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{property.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{property.location}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.area} sqft</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">{property.price}</p>
                  <Link to="/details" className="text-sm font-semibold text-brand-600 hover:text-brand-700">View</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
