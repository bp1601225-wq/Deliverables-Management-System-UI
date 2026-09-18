import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        404
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Page not found
      </h1>
      <Link to="/" className="inline-block font-medium text-blue-600 hover:text-blue-700">
        Return home
      </Link>
    </section>
  )
}

export default NotFound
