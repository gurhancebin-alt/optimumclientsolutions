import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import { usePageTracking } from '../../hooks/usePageTracking';

export default function Layout() {
  usePageTracking();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
