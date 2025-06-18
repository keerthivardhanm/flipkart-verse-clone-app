
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-flipkart-darkblue text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* Author Section */}
        <div className="bg-flipkart-blue/10 rounded-lg p-6 mb-8 border border-flipkart-blue/20">
          <div className="text-center">
            <h2 className="text-white font-bold text-xl mb-2">E-Commerce Platform</h2>
            <p className="text-gray-300 mb-3">A fully responsive e-commerce website with secure payment integration and user authentication.</p>
            <div className="text-sm">
              <p className="text-flipkart-blue font-semibold">Developed by: M Keerthi Vardhan</p>
              <p className="text-gray-400">
                <a href="mailto:keerthivardhanm@gmail.com" className="hover:text-flipkart-blue transition-colors">
                  keerthivardhanm@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wide">ABOUT</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Information</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wide">HELP</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Payments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Report Infringement</a></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wide">POLICY</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EPR Compliance</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-wide">SOCIAL</h3>
            <ul className="space-y-3 text-xs">
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-600 mb-6" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Mail Us */}
          <div>
            <h4 className="text-white font-semibold mb-2">Mail Us:</h4>
            <address className="not-italic leading-relaxed">
              E-Commerce Platform,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </address>
          </div>

          {/* Registered Office */}
          <div>
            <h4 className="text-white font-semibold mb-2">Registered Office Address:</h4>
            <address className="not-italic leading-relaxed">
              E-Commerce Platform,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India<br />
              CIN : U51109KA2012PTC066107<br />
              Telephone: <a href="tel:044-45614700" className="text-flipkart-blue hover:text-blue-400">044-45614700</a>
            </address>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-semibold mb-2">Payment Methods</h4>
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="bg-white rounded p-1 h-8 flex items-center justify-center text-xs text-gray-800">VISA</div>
              <div className="bg-white rounded p-1 h-8 flex items-center justify-center text-xs text-gray-800">MC</div>
              <div className="bg-white rounded p-1 h-8 flex items-center justify-center text-xs text-gray-800">AMEX</div>
              <div className="bg-white rounded p-1 h-8 flex items-center justify-center text-xs text-gray-800">DC</div>
            </div>
            <h4 className="text-white font-semibold mb-2">Secure Payments</h4>
          </div>
        </div>

        <Separator className="bg-gray-600 my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="text-flipkart-blue font-bold text-lg">E-Commerce Platform</div>
            </div>
            <span>Become a Seller</span>
            <span>Advertise</span>
            <span>Gift Cards</span>
            <span>Help Center</span>
          </div>
          
          <div className="text-center md:text-right">
            © 2024 M Keerthi Vardhan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
