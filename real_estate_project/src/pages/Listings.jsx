import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'
import { listingProperties, amenities } from '../data/content'

const filters = ['Villa', 'Apartment', 'Commercial']

export default function Listings() {
  const [selectedType, setSelectedType] = useState('Villa')
  const [selectedAmenities, setSelectedAmenities] = useState([])
  const [priceRange, setPriceRange] = useState(500)

  const handleAmenityToggle = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity) ? prev.filter((item) => item !== amenity) : [...prev, amenity]
    )
  }

  return (
    <div className="grid gap-10 xl:grid-cols-[320px_1fr]">
      <aside className="space-y-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Refine Search</p>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Price Range</p>
            <input
              type="range"
              min="100"
              max="1000"
              step="50"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="mt-4 w-full accent-brand-600"
            />
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">${priceRange}k - $10M+</p>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Location</p>
            <button className="flex w-full items-center justify-between rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Beverly Hills, CA
              <span>▾</span>
            </button>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Property Type</p>
            <div className="space-y-3">
              {filters.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedType(item)}
                  className={`flex w-full items-center rounded-3xl px-4 py-3 text-sm font-semibold transition ${
                    selectedType === item
                      ? 'bg-brand-600 text-white'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Amenities</p>
            <div className="space-y-3">
              {amenities.map((amenity) => (
                <label key={amenity} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                    className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  {amenity}
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <section className="space-y-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-600">Exclusive Listings</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Curated selection of 148 luxury properties worldwide.</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Grid View
            </button>
            <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              Map View
            </button>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          {listingProperties.map((property) => (
            <PropertyCard key={property.id} property={property} actionLabel="View Details" to="/details" />
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 rounded-[32px] border border-slate-200 bg-white px-6 py-8 text-slate-700 shadow-soft dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
          <button className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">Load More Properties</button>
          <div className="flex items-center gap-2 text-sm">
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">1</button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900">2</button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900">3</button>
            <span className="text-slate-500 dark:text-slate-400">...</span>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900">24</button>
          </div>
        </div>
      </section>
    </div>
  )
}
