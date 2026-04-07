import { useState } from 'react'
import SidebarNav from '../components/SidebarNav'
import { sidebarItems, propertyCategories } from '../data/content'

export default function AddProperty() {
  const [form, setForm] = useState({ title: '', price: '', location: '', category: propertyCategories[0], description: '' })
  const [fileName, setFileName] = useState('')
  const [error, setError] = useState('')
  const [saved, setSaved] = useState('')

  const handleChange = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const handleUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) setFileName(file.name)
  }

  const handleSubmit = (type) => (event) => {
    event.preventDefault()
    if (!form.title || !form.price || !form.location) {
      setError('Title, price, and location are required.')
      setSaved('')
      return
    }
    setError('')
    setSaved(type === 'publish' ? 'Listing published successfully.' : 'Draft saved successfully.')
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
      <SidebarNav title="Inventory Management" items={sidebarItems} ctaLabel="New Listing" ctaPath="/add-property" user />
      <section className="space-y-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-600">Inventory Management</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950 dark:text-white">Add New Property</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Create a high-impact listing for the global market.</p>
        </div>
        <form className="space-y-8">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <div className="mb-6 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Core Details</h2>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Complete the essential fields for your listing.</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Property Title
                <input
                  value={form.title}
                  onChange={handleChange('title')}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  placeholder="e.g. Modern Minimalist Villa in Malibu"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Listing Price (USD)
                <input
                  value={form.price}
                  onChange={handleChange('price')}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  placeholder="$ 0,000,000"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Location
                <input
                  value={form.location}
                  onChange={handleChange('location')}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  placeholder="Enter address or neighborhood"
                />
              </label>
              <label className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                Property Category
                <select
                  value={form.category}
                  onChange={handleChange('category')}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                >
                  {propertyCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </label>
            </div>
          </div>
          <div className="rounded-[32px] border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft dark:border-slate-700 dark:bg-slate-950">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-3xl text-brand-600 dark:bg-slate-900">
              ⬆
            </div>
            <p className="mt-6 text-base font-semibold text-slate-950 dark:text-white">Visual Assets</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Click to upload or drag and drop High-resolution JPEG or PNG (Max 15MB)</p>
            <label className="mt-6 inline-flex cursor-pointer rounded-full border border-brand-600 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 transition hover:bg-brand-100">
              Select Files
              <input type="file" onChange={handleUpload} className="hidden" />
            </label>
            {fileName ? <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Uploaded: {fileName}</p> : null}
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-950">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Market Description</h2>
            <div className="mt-5 rounded-[28px] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-slate-200 px-3 py-2 dark:bg-slate-800">B</span>
                <span className="rounded-full bg-slate-200 px-3 py-2 dark:bg-slate-800">I</span>
                <span className="rounded-full bg-slate-200 px-3 py-2 dark:bg-slate-800">•</span>
                <span className="rounded-full bg-slate-200 px-3 py-2 dark:bg-slate-800">Link</span>
              </div>
              <textarea
                value={form.description}
                onChange={handleChange('description')}
                rows="6"
                className="w-full resize-none rounded-[24px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-brand-500 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                placeholder="Describe the architectural highlights, neighborhood amenities, and lifestyle opportunities..."
              />
            </div>
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {saved ? <p className="text-sm text-emerald-700">{saved}</p> : null}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={handleSubmit('draft')} className="rounded-full border border-slate-300 bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
              Save as Draft
            </button>
            <div className="flex flex-wrap gap-3">
              <button type="button" className="rounded-full px-6 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
                Discard Draft
              </button>
              <button type="button" onClick={handleSubmit('publish')} className="rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                Publish Listing
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}
