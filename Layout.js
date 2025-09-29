
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, User, ShoppingBag, Menu, X, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#F4F1E9]">
      <style jsx>{`
        :root {
          --primary-dark: #2B463C;
          --primary-medium: #68BF4E;
          --primary-light: #B1D182;
          --cream: #F4F1E9;
        }
      `}</style>

      {/* Header */}
      <header className="bg-[#2B463C] text-white relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#68BF4E] rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-[#2B463C]">S</span>
              </div>
              <span className="text-xl font-bold tracking-wide">Sein Lin Electronic Center</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to={createPageUrl("Home")} className="text-sm font-medium hover:text-[#68BF4E] transition-colors">
                HOME
              </Link>
              <a href="#" className="text-sm font-medium hover:text-[#68BF4E] transition-colors">
                PRODUCTS
              </a>
              <a href="#" className="text-sm font-medium hover:text-[#68BF4E] transition-colors">
                BRANDS
              </a>
              <a href="#" className="text-sm font-medium hover:text-[#68BF4E] transition-colors">
                CONTACT
              </a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <ShoppingBag className="w-4 h-4" />
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:text-[#68BF4E] hover:bg-transparent"
                onClick={toggleMobileMenu}>

                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen &&
          <div className="md:hidden border-t border-[#68BF4E]/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                to={createPageUrl("Home")}
                className="block px-3 py-2 text-sm font-medium hover:text-[#68BF4E] transition-colors"
                onClick={toggleMobileMenu}>

                  HOME
                </Link>
                <a href="#" className="block px-3 py-2 text-sm font-medium hover:text-[#68BF4E] transition-colors">
                  PRODUCTS
                </a>
                <a href="#" className="block px-3 py-2 text-sm font-medium hover:text-[#68BF4E] transition-colors">
                  BRANDS
                </a>
                <a href="#" className="block px-3 py-2 text-sm font-medium hover:text-[#68BF4E] transition-colors">
                  CONTACT
                </a>
              </div>
            </div>
          }
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-[#2B463C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT US</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                Your trusted partner for premium home appliances. From refrigerators to air conditioners, we bring you the latest in electronic innovation and quality.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">📧 seinlin@gmail.com</p>
                <p className="text-sm text-gray-300">📞 01-838 6635, 01-824 2132
09-443 022 675, 09-443 051 593, 09-519 7191</p>
                <p className="text-gray-300 text-sm font-medium">📍No.388, Mahabanduhla Panchan St., Barr St, Upper Block ,
Kyauttada Tsp., Yangon</p>
              </div>
            </div>

            {/* Account Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ACCOUNT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">My Account</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Order History</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Wish List</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Newsletter</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">Returns</a></li>
                <li><a href="#" className="text-sm text-gray-300 hover:text-[#68BF4E] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to receive updates about new appliances and exclusive deals.
              </p>
              <div className="flex">
                <input type="email" placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-md text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#68BF4E]" />

                <Button className="bg-[#68BF4E] hover:bg-[#B1D182] text-[#2B463C] px-4 py-2 rounded-r-md rounded-l-none">
                  →
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-sm text-gray-400">© 2025 Sein Lin Electronic Center. All Rights Reserved.</span>
            </div>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-[#68BF4E] hover:bg-transparent">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}
