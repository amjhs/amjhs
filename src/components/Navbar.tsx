
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Material UI Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import ContactsIcon from '@mui/icons-material/Contacts';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavLinkClick = () => {
    // Scroll to top when clicking a nav link
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if screen is smaller than 9 inches (roughly 576px)
  const isSmallScreen = typeof window !== 'undefined' && window.innerWidth < 576;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-school-primary text-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
      ref={navRef}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={handleNavLinkClick}>
          <img 
            src="/lovable-uploads/6d71897e-2871-4084-a095-eb61f98531da.png" 
            alt="Adeiso Methodist JHS Logo" 
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className={`font-playfair font-bold text-lg leading-tight ${isScrolled ? 'text-white' : 'text-school-primary'}`}>
              Adeiso Methodist
              <span className="block text-sm">J.H.S</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            About
          </Link>
          <Link 
            to="/staff" 
            className={`nav-link ${isActive('/staff') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Staff
          </Link>
          <Link 
            to="/students" 
            className={`nav-link ${isActive('/students') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Students
          </Link>
          <Link 
            to="/facilities" 
            className={`nav-link ${isActive('/facilities') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Facilities
          </Link>
          <Link 
            to="/events" 
            className={`nav-link ${isActive('/events') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Events
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''} ${isScrolled ? 'text-white/90 hover:text-white' : ''}`}
            onClick={handleNavLinkClick}
          >
            Contact
          </Link>
        </nav>

        {/* Contact Info on Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:0541813988" 
            className={`text-sm flex items-center gap-1 transition-colors ${
              isScrolled ? 'text-white/80 hover:text-white' : 'text-muted-foreground hover:text-school-primary'
            }`}
          >
            <Phone className="h-3 w-3" />
            <span>0541 813 988</span>
          </a>
          <Button 
            asChild 
            size="sm" 
            variant={isScrolled ? "secondary" : "default"}
          >
            <a href="mailto:methodistjhsadeiso@gmail.com">
              <Mail className="mr-1 h-3 w-3" />
              Contact Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${isScrolled ? 'text-white' : 'text-foreground'}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-slate-900 shadow-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
        }`}
      >
        {/* Icons Only Navigation for Small Screens (<9 inches) */}
        {isSmallScreen ? (
          <nav className="grid grid-cols-4 gap-4 px-6 py-4">
            <Link 
              to="/" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link 
              to="/about" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/about') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <InfoIcon className="h-6 w-6" />
              <span className="text-xs mt-1">About</span>
            </Link>
            <Link 
              to="/staff" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/staff') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <PeopleIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Staff</span>
            </Link>
            <Link 
              to="/students" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/students') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <SchoolIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Students</span>
            </Link>
            <Link 
              to="/facilities" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/facilities') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <BusinessIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Facilities</span>
            </Link>
            <Link 
              to="/events" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/events') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <EventIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Events</span>
            </Link>
            <Link 
              to="/contact" 
              className={`flex flex-col items-center justify-center p-2 rounded-lg ${isActive('/contact') ? 'bg-school-primary/10 text-school-primary' : 'text-muted-foreground'}`}
              onClick={handleNavLinkClick}
            >
              <ContactsIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Contact</span>
            </Link>
          </nav>
        ) : (
          <nav className="flex flex-col gap-4 px-6">
            <Link 
              to="/" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/about" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/about') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <InfoIcon className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link 
              to="/staff" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/staff') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <PeopleIcon className="h-5 w-5" />
              <span>Staff</span>
            </Link>
            <Link 
              to="/students" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/students') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <SchoolIcon className="h-5 w-5" />
              <span>Students</span>
            </Link>
            <Link 
              to="/facilities" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/facilities') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <BusinessIcon className="h-5 w-5" />
              <span>Facilities</span>
            </Link>
            <Link 
              to="/events" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/events') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <EventIcon className="h-5 w-5" />
              <span>Events</span>
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link py-2 flex items-center gap-3 ${isActive('/contact') ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            >
              <ContactsIcon className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            
            <div className="flex flex-col gap-3 mt-2 pb-4">
              <a href="tel:0541813988" className="text-sm flex items-center gap-2 text-muted-foreground hover:text-school-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span>0541 813 988</span>
              </a>
              <a href="mailto:methodistjhsadeiso@gmail.com" className="text-sm flex items-center gap-2 text-muted-foreground hover:text-school-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span>methodistjhsadeiso@gmail.com</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
