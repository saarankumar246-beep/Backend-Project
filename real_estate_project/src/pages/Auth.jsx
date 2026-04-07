import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Auth() {
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (field) => (event) => {
    const value = field === 'remember' ? event.target.checked : event.target.value
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.email || !form.password) {
      setError('Please provide both email and password.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <div className="grid min-h-[calc(100vh-4rem)] gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
      <div className="relative overflow-hidden rounded-[36px] bg-slate-950 text-white shadow-soft lg:flex lg:flex-col lg:justify-end">
        <img
          src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
          alt="Modern home exterior"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/50" />
        <div className="relative z-10 flex h-full flex-col justify-end p-10">
          <div className="max-w-xl space-y-6">
            <div className="text-sm uppercase tracking-[0.3em] text-slate-300">Curator Estate</div>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Where architecture meets digital precision.</h1>
            <p className="max-w-lg text-sm leading-7 text-slate-200">
              Access the world's most exclusive listings through our curated editorial lens. Your journey to the perfect estate begins here.
            </p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-slate-200">
              <p className="uppercase tracking-[0.28em] text-slate-300">The Digital Curator</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Welcome Back</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Sign in to manage your curated portfolio.</p>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  placeholder="alex@curator.estate"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <a href="#" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                  Forgot Password?
                </a>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900">
                <input
                  type="password"
                  value={form.password}
                  onChange={handleChange('password')}
                  placeholder="••••••••••"
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={handleChange('remember')}
                  className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                />
                Keep me signed in
              </label>
            </div>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {submitted ? <p className="text-sm text-emerald-700">Logged in successfully.</p> : null}
            <button type="submit" className="w-full rounded-3xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
              Sign In
            </button>
          </form>
          <div className="my-6 flex items-center gap-3 text-slate-400">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs uppercase tracking-[0.3em]">Or continue with</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="grid gap-3">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <span className="text-lg">G</span>
              Continue with Google
            </button>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
              <span className="text-lg"></span>
              Continue with Apple
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account yet?{' '}
            <Link to="/" className="font-semibold text-brand-600 hover:text-brand-700">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
