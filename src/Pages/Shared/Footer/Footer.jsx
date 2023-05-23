import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1920px] mx-auto inter-font text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#1F2937] px-5 flex md:justify-center items-center py-10 md:py-24 md:text-center">
          <div>
            <h2 className="text-3xl font-medium">CONTACT US</h2>
            <div className="text-xl font-medium mt-6">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] px-5 flex md:justify-center items-center py-10 md:py-24 md:text-center">
          <div>
            <h2 className="text-3xl font-medium">Follow US</h2>
            <p className="text-xl font-medium mt-6">Join us on social media</p>
            <div className="flex md:justify-center gap-8 text-3xl mt-8">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] py-[17px] font-medium inter-font text-center">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
