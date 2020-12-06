const Footer = ({ placementProgramMenu, ciscoMenu, multivendorMenu, cloudMenu }) => {
  return (
    <>
      <footer className="overflow-hidden flex items-center justify-center bg-white">
        <div className="container bg-white pt-8 pb-8 px-4 mx-auto">
          <div className="sm:flex justify-center mb-4">
            <div className="sm:w-1/4 h-auto">
              <div className="text-secondary mb-2 text-2xl font-bold">
              <img src="/assets/logo.png" alt="Logo" className="w-32 h-full"/>
              </div>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="text-primary mb-2 text-2xl font-bold">The Company</div>
              <ul className="rounded-md mt-2">
                <a href="#" target="_blank">
                  <li className="py-1 text-grey text-sm hover:text-primary hover:bg-gray-100 cursor-pointer">About Us</li>
                </a>
              </ul>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="text-primary mb-2 text-2xl font-bold">Services</div>
              <ul className="rounded-md mt-2">
                <a href="#" target="_blank">
                  <li className="py-1 text-grey text-sm hover:text-primary hover:bg-gray-100 cursor-pointer">Web Design & Development</li>
                </a>
                <a href="#" target="_blank">
                  <li className="py-1 text-grey text-sm hover:text-primary hover:bg-gray-100 cursor-pointer">Digital Marketing</li>
                </a>
              </ul>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="text-primary mb-2 text-2xl font-bold">The Company</div>
              <ul className="rounded-md mt-2">
                <a href="#" target="_blank">
                  <li className="py-1 text-grey text-sm hover:text-primary hover:bg-gray-100 cursor-pointer">Blogs</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="py-2 px-12 bg-primary text-white flex flex-col sm:flex-row justify-between items-center text-center text-xs sm:text-sm">
        <div className="flex mb-4 sm:mb-0">
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" target="_blank">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white cursor-pointer">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-facebook fa-stack-2x"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" target="_blank">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white cursor-pointer">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-youtube fa-stack-2x"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <a href="#" target="_blank">
                <div className="flex items-center justify-center h-12 w-12 rounded-md text-white cursor-pointer">
                  <span className="fa-stack fa-lg">
                    <i className="fa fa-linkedin fa-stack-2x"></i>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <p className="mb-4 sm:mb-0">&copy; All Rights Reserved midday-dev.com &copy;</p>

        <div className="flex cursor-pointer">
          <a href="tel:9611027980">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md text-white">
                <span className="fa-stack fa-lg">
                  <i className="fa fa-phone fa-stack-2x"></i>
                </span>
              </div>
            </div>
          </a>
          <a href="tel:9611027980">
            <div className="ml-1 mt-3">
              <h3 className="text-lg leading-6 font-bold">Call Us </h3>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
