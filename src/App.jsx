import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceCategory from './pages/ServiceCategory';
import ServiceItem from './pages/ServiceItem';
import Shopify from './pages/Shopify';
import WooCommerce from './pages/WooCommerce';
import Contact from './pages/Contact';
import Research from './pages/Research';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
import Offline from './pages/Offline';
import { MAINTENANCE_MODE } from './utils/constants';

function App() {
  if (MAINTENANCE_MODE) {
    return (
      <ErrorBoundary>
        <HelmetProvider>
          <Offline />
        </HelmetProvider>
      </ErrorBoundary>
    );
  }
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:category" element={<ServiceCategory />} />
              <Route path="services/:category/:service" element={<ServiceItem />} />
              <Route path="shopify" element={<Shopify />} />
              <Route path="woocommerce" element={<WooCommerce />} />
              <Route path="contact" element={<Contact />} />
              <Route path="research" element={<Research />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/category/:category" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogArticle />} />
              <Route path="legal/:type" element={<LegalPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
