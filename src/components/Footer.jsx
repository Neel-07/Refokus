import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 ml-4">
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col md:flex-row gap-12 md:gap-32">
        {/* Refokus Logo */}
        <div className="basis-1/2">
          <h1 className="text-[4rem] md:text-[8rem] lg:text-[11.5rem] font-semibold leading-none tracking-tight hover:text-[#CBC3E3]">
            refokus.
          </h1>
        </div>
        
        {/* Footer Links */}
        <div className="basis-1/2 flex  md:flex-row gap-8 md:gap-2">
          {/* Socials */}
          <div className="basis-1/3">
            <h4 className="mb-4 md:mb-8 text-zinc-500 capitalize hover:text-white hover:underline underline-offset-4">
              socials
            </h4>
            {["instagram", "twitter (x?)", "Linkedin"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="mt-2 capitalize block text-zinc-600 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="basis-1/3">
            <h4 className="mb-4 md:mb-8 text-zinc-500 capitalize hover:text-white hover:underline underline-offset-4">
              contact
            </h4>
            {["support", "email us", "call us"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="mt-2 capitalize block text-zinc-600 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-start md:items-end">
            <p className="text-left md:text-right  ">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
              className="w-24 md:w-32 mt-5"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom Links */}
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center md:justify-start gap-5 mt-10 mr-6  ">
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a
              href="#"
              key={index}
              className="text-zinc-600 font-normal text-sm hover:text-white"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Footer;
