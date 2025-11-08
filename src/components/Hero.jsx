import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 ring-1 ring-blue-200">New • AI dev workspace</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Build full apps in your browser
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Spin up a frontend and backend, connect a database, and ship—without leaving your tab.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow">Start building</button>
            <button className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Live demo</button>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Fast previews</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>API + DB ready</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Type-safe schemas</li>
            <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Production deploys</li>
          </ul>
        </div>
        <div className="relative h-[420px] rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 ring-1 ring-blue-100">
          <Spline scene="https://prod.spline.design/Gw9aCiqEubJfZS5k/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
