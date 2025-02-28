import { FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from 'react-icons/fa';

export default function Footer({isDark}) {
  return (
    <footer className={`bg-[#dfc4f9] text-${isDark? "white":"black"} py-10 rounded-md`}>
      <div className="container mx-auto px-4 py-10 rounded-md">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Footer Text */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-lg font-semibold">Neeraj Pal</p>
            <p className="text-sm ">© 2025 All Rights Reserved</p>
          </div>

        
          <div className="flex space-x-6 justify-center md:justify-start">
          <a
                          href="https://www.facebook.com/profile.php?id=100037428103852"
                          className="text-xl p-2 bg-[#b164fa] rounded-full" style={{  boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                        >
                          <FaFacebook />
                        </a>
                        <a
                          href="https://www.instagram.com/watashi_wa_maodesu"
                          className="text-xl p-2 bg-[#b164fa] rounded-full" style={{  boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                        >
                          <FaInstagram />
                        </a>
                        <a
                          href="https://wa.me/<7905263694>"
                          className="text-xl p-2 bg-[#b164fa] rounded-full" style={{  boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                        >
                          <FaWhatsapp />
                        </a>
                        <a
                          href="https://github.com/NeerajTechVCM"
                          className="text-xl p-2 bg-[#b164fa] rounded-full" style={{  boxShadow: "5px 5px 30px rgb(177, 100, 250)" }}
                        >
                          <FaGithub />
                        </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
