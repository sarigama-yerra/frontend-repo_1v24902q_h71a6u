import { Rocket } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold text-gray-900">Vibe Coding</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-3 py-1.5 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">Sign in</button>
          <button className="inline-flex px-4 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow">
            Get started
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
