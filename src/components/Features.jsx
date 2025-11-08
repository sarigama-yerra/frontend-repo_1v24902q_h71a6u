import { Code2, Database, Server, Sparkles } from 'lucide-react'

const features = [
  { icon: Code2, title: 'Frontend ready', desc: 'Vite + React + Tailwind with beautiful defaults.' },
  { icon: Server, title: 'Backend included', desc: 'FastAPI server with routing and validation.' },
  { icon: Database, title: 'Database wired', desc: 'MongoDB connection and helpers—no setup.' },
  { icon: Sparkles, title: 'AI assisted', desc: 'Generate, edit, and preview in seconds.' },
]

function Features() {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to ship</h2>
          <p className="mt-3 text-gray-600">Spin up a full-stack app with best practices baked in.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
