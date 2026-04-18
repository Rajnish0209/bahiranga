import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnnouncementBanner from './components/AnnouncementBanner';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased selection:bg-primary selection:text-on-primary">
      <AnnouncementBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
