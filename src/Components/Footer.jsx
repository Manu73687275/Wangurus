import { FaLinkedinIn, FaXTwitter, FaGithub } from "react-icons/fa6";
import logo from "../assets/logo.png";
export const Footer = () => {
  return (
    <footer className="bg-[#140300] text-white border-t border-white/20 pt-16 pb-12 mt-7 pl-2">
      <div
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 gap-y-16"
        data-aos="fade-up"
      >
        <div className="space-y-4 col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
          <div className="flex justify-center">
            <img src={logo} alt="Logo" className="h-10" />
          </div>
          <p className="text-sm text-[#FFFFFF]  max-w-xs">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>

        {/* Product */}
        <div className="text-sm">
          <h4 className="text-[#dd6150] font-semibold mb-2">Product</h4>
          <ul className="space-y-1 text-[#FFFFFF] ">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Managed Services */}
        <div className="text-sm">
          <h4 className="text-[#dd6150] font-semibold mb-2">
            Managed Services
          </h4>
          <ul className="space-y-1 text-[#FFFFFF] ">
            <li>Cloud Services</li>
            <li>DevOps</li>
          </ul>
          <h4 className="text-[#dd6150] font-semibold mt-4 mb-2">
            Vapt Consultancy
          </h4>
          <ul className="space-y-1 text-[#FFFFFF] ">
            <li>VAPT Services</li>
            <li>Security Audit</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="text-sm">
          <h4 className="text-[#dd6150] font-semibold mb-2">Project</h4>
          <ul className="space-y-1 text-[#FFFFFF] ">
            <li>Network Assessment</li>
            <li>Data Center</li>
            <li>Network Security</li>
            <li>Monitoring and Management</li>
            <li>Wireless Network</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <h4 className="text-[#dd6150] font-semibold mb-2">Contact Us</h4>
          <ul className="space-y-1 text-[#FFFFFF] ">
            <li>Address</li>
            <li>support@wangurus.com</li>
            <li>+1 (561) 800-4023</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-[#FFFFFF] gap-6 md:gap-0">
        <p>© 2025 WANGURUS. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[#FFFFFF]  text-lg">
          <FaXTwitter className="hover:text-[#dd6150] cursor-pointer" />
          <FaLinkedinIn className="hover:text-[#dd6150] cursor-pointer" />
          <FaGithub className="hover:text-[#dd6150] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};
