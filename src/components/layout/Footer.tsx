import { Link } from "react-router-dom";
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "NPK Fertilizers", href: "/products" },
    { name: "Organic Fertilizers", href: "/products" },
    { name: "Micronutrients", href: "/products" },
    { name: "Bio Fertilizers", href: "/products" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Quality & Research", href: "/quality" },
    { name: "Careers", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "Dealer Network", href: "/dealers" },
    { name: "Crop Solutions", href: "/crop-solutions" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-card/95 dark:text-gray-200">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-logoBackground/30">
                <img src="/logo.png" alt="Harsidhi Biotech" className="h-14 md:h-14" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Harsidhi Biotech</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Fertilizers & Agri Inputs
                </span>
              </div>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Established in 2013, Harsidhi Biotech manufactures biofertilizers and biostimulants to promote sustainable and science-driven agriculture.
            </p>

            <div className="flex gap-4">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Toll Free</p>
                  <a href="tel:1800123456" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    1800-123-456
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@HarsidhiBiotech.com" className="text-gray-600 dark:text-gray-400 hover:text-primary">
                    info@HarsidhiBiotech.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Head Office</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Industrial Area, Hyderabad<br />Telangana 500032
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Harsidhi Biotech Fertilizers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

