import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { homeCards } from '../data/content'

const searchOptions = ['Buy', 'Rent', 'Commercial']

export default function Home() {
  const [search, setSearch] = useState({ location: '', type: 'Modern Villa', price: '$500,000 - $2.5M', category: 'Buy' })
  const [error, setError] = useState('')

  const description = useMemo(
    () => 'Exceptional properties curated for the discerning buyer.',
    []
  )

  const handleSearch = (event) => {
    event.preventDefault()
    if (!search.location.trim()) {
      setError('Please enter a location to continue.')
      return
    }
    setError('')
    // simulated search action
  }

  return (
    <div className="space-y-14">
      <section className="overflow-hidden rounded-[36px] bg-white bg-hero-soft px-6 py-12 shadow-soft dark:bg-slate-900 dark:bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.06),_transparent_35%),radial-gradient(circle_at_right,_rgba(59,130,246,0.12),_transparent_22%)] sm:px-10 lg:px-14 lg:py-16">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="mx-auto inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-brand-700 dark:bg-slate-800 dark:text-brand-200 lg:mx-0">
              PREMIUM REAL ESTATE EXPERIENCE
            </span>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-6xl">
                Find Your <span className="text-brand-600">Dream</span> Property
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:mx-0">
                Discover luxury real estate with exceptional curation, personalized listings, and modern concierge services.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-5xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950 lg:p-8">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr_1fr_auto]">
                <label className="group space-y-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Location</span>
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      📍
                    </span>
                    <input
                      value={search.location}
                      onChange={(e) => setSearch({ ...search, location: e.target.value })}
                      className="w-full bg-transparent text-base font-medium text-slate-950 outline-none placeholder:text-slate-400 dark:text-white"
                      placeholder="Where are you looking?"
                    />
                  </div>
                </label>
                <label className="group space-y-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Property Type</span>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">🏠</span>
                      {search.type}
                    </span>
                    <span className="text-lg">▾</span>
                  </div>
                </label>
                <label className="group space-y-2 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Price Range</span>
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">💰</span>
                    {search.price}
                  </div>
                </label>
                <button type="submit" className="rounded-3xl bg-brand-600 px-6 py-5 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-700">
                  Search
                </button>
              </div>
              {error ? <p className="text-sm text-red-600">{error}</p> : null}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                {searchOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSearch({ ...search, category: option })}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                      search.category === option
                        ? 'bg-brand-600 text-white shadow-lg'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600">Handpicked Collection</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Luxury homes tailored for you</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>
          <Link to="/listings" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700">
            View all properties →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {homeCards.map((property) => (
            <PropertyCard key={property.id} property={property} actionLabel="View Details" to="/details" />
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-brand-600 via-blue-600 to-indigo-700 px-8 py-12 text-white shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1.9fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Expert Advice, Exceptional Results</p>
            <h3 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Join over 50,000 property owners who trust Curator Estate.</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Manage luxury portfolios with cutting-edge data, elite agents, and personalized market intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/add-property" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-slate-100">
                List Your Property
              </Link>
              <Link to="/auth" className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Speak to a Concierge
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-slate-200">Customer Satisfaction</p>
                <p className="mt-3 text-4xl font-semibold">4.9/5</p>
              </div>
              <div className="flex -space-x-3">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-slate-900/90" />
                <div className="h-12 w-12 rounded-full border-2 border-white bg-blue-500/90" />
                <div className="h-12 w-12 rounded-full border-2 border-white bg-slate-100/90" />
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-100">Join over 50,000 property owners who trust Curator Estate to manage their real estate portfolios with cutting-edge data and elite agents.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
