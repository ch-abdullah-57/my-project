import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" text-white p-6 w-full">
      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-4 gap-5 text-center mt-14">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">About</h1>
          <a href="#" className="block text-gray-800 text-sm mt-4">Our Story</a>
          <a href="#" className="block text-gray-800 text-sm mt-2">Our Blog</a>
          <a href="#" className="block text-gray-800 text-sm mt-2">Carrers</a>
          <a href="#" className="block text-sm text-gray-800 mt-2">Gurus</a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Quick Links</h3>
          <a href="#" className="block text-gray-800 mt-4 text-sm ">Project in Pakistan</a>
          <a href="#" className="block text-gray-800 text-sm mt-2"> Project in Islamabad</a>
          <a href="#" className="block text-gray-800 text-sm mt-2"> Project in Lahore</a>
          <a href="#" className="block text-gray-800 text-sm mt-2"> Project in Karachi</a>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Contact Us</h3>
          <div className="flex justify-center items-center gap-2 mt-2">
            <FaEnvelope className="text-sm text-gray-600 ml-7 " /><a href="mailto:#" className="text-gray-800">info@graana.com</a>
          </div>
          <div className="flex justify-center items-center gap-2 mt-2">
            <FaPhone className="text-sm text-gray-600 " /><a href="tel:#" className="text-gray-800">111-555-555</a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-600 mt-1"><FaInstagram className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaFacebook className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaYoutube className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaLinkedin className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaTwitter className="text-xl" /></a>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center text-center w-full px-4">
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-800">Contact</h3>
          <div className="flex justify-center items-center gap-2 mt-2">
            <FaEnvelope className="text-sm text-gray-600 ml-7 " /><a href="mailto:#" className="text-gray-800">info@graana.com</a>
          </div>
          <div className="flex justify-center items-center gap-2 mt-2">
            <FaPhone className="text-sm text-gray-600 " /><a href="tel:#" className="text-gray-800">111-555-555</a>
          </div>
        </div>
        <hr className="w-full my-4 border-gray-600" />
        <div className="w-full">
          <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
          <div className="flex justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/?utm_source=pwa_homescreen&__pwa=1" target="_blank" rel="noopener noreferrer" className="text-gray-600 mt-1"><FaInstagram className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaFacebook className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaYoutube className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaLinkedin className="text-xl" /></a>
            <a href="#" className="text-gray-600 mt-1"><FaTwitter className="text-xl" /></a>
          </div>
        </div>
      </div>
      {/* Mini Footer / second Footer */}
      <footer className="bg-gray-200 bg-opacity-90 text-gray-600 p-6 w-full flex flex-col items-center text-center mt-5">
      <p className="text-sm">Copyright 2025 Graana.com All rights reserved</p>
      <p className="text-sm">
        
        <a href="#" className="text-gray-600">Terms & Condition</a> |
        <a href="#" className="text-gray-600">Privacy Policy</a> | 
        <a href="#" className="text-gray-600">Disclamer</a>.
      </p>
    </footer>
    </footer>
  );
}

export default Footer;
