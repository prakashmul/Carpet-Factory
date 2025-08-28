import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

export const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white px-6 py-12">
            <div className="w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 gap-20">

                {/* Newsletter */}
                <div>
                    <img src="/src/assets/img/logo.jpeg" alt="Logo" className="h-12 w-20 mb-4" />
                    <p className="mb-4 text-sm text-neutral-300">Subscribe to our newsletter for updates and offers.</p>
                    <form className="flex flex-col bg-white border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 max-w-md px-4 py-2 space-y-2">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2 py-2 rounded"
                        />
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Quick Links */}
                <div className="ml-4 md:ml-18">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-3 text-sm text-neutral-300 ml-5">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/product" className="hover:text-white">Products</a></li>
                        <li><a href="/services" className="hover:text-white">Services</a></li>
                        <li><a href="/about" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 ml-5">Contact</h3>
                    <p className="text-sm text-neutral-300 mb-2">📍 Lalitpur, Nepal</p>
                    <p className="text-sm text-neutral-300 mb-2">📞 +977-9801037585</p>
                    <p className="text-sm text-neutral-300">✉️ info@yourcompany.com</p>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 ml-4">Follow Us</h3>
                    <div className="flex space-x-4 mb-6 text-xl">
                        <a href="#" className="text-white hover:text-[#1877F2]" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" className="text-white hover:text-[#E4405F]" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" className="text-white hover:text-[#1DA1F2]" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className="text-white hover:text-[#0077B5]" aria-label="LinkedIn"><FaLinkedin /></a>
                    </div>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.0134567890123!2d85.34200000000001!3d27.6277484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb173a709414c3%3A0x982c4a313e31facb!2sModern%20Nature%20Design%20Nepal!5e0!3m2!1sen!2snp!4v1691234567890!5m2!1sen!2snp"
                        className="w-full h-32 rounded"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-sm text-neutral-400">
                &copy; {new Date().getFullYear()} Modern Nature Design Nepal. All rights reserved.
            </div>
        </footer>
    )
}