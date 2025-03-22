
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/6d71897e-2871-4084-a095-eb61f98531da.png" 
                alt="Adeiso Methodist JHS Logo" 
                className="h-16 w-auto bg-white p-1 rounded"
              />
              <h3 className="font-playfair font-bold text-xl">
                Adeiso Methodist J.H.S
              </h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Providing quality education to the youth of Adeiso since establishment.
            </p>
            <p className="text-white/90 text-sm italic">
              "Thy Kingdom Come"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/staff" className="text-white/80 hover:text-white transition-colors">Our Staff</Link></li>
              <li><Link to="/students" className="text-white/80 hover:text-white transition-colors">Students</Link></li>
              <li><Link to="/facilities" className="text-white/80 hover:text-white transition-colors">Facilities</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-school-secondary mt-0.5" />
                <span className="text-white/80">Adeiso, Eastern Region, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-school-secondary" />
                <a href="tel:0541813988" className="text-white/80 hover:text-white transition-colors">0541 813 988</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-school-secondary" />
                <a href="mailto:methodistjhsadeiso@gmail.com" className="text-white/80 hover:text-white transition-colors">methodistjhsadeiso@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/80 text-sm">
              Follow us on social media for updates and announcements.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Adeiso Methodist JHS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
