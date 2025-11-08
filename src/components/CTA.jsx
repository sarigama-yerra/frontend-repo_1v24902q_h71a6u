function CTA() {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-indigo-100 p-8 md:p-10 bg-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Ready to build faster?</h3>
              <p className="mt-2 text-gray-600">Launch a full-stack app today. No local setup required.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow">Create project</button>
              <button className="px-5 py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50">View templates</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
