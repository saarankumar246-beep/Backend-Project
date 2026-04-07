export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/20 backdrop-blur-sm">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white/90 shadow-soft dark:border-slate-700 dark:bg-slate-900/95">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  )
}
