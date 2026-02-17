import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Optimum Client Solutions</title>
      </Helmet>
      <section className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-slate-400 mb-8">Page not found</p>
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-cyan-500 text-white rounded-xl font-bold hover:bg-cyan-400 transition-all"
          >
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
