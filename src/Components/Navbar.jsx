import { useState, useRef, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import SignInForm from "./SignInForm";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  
  const menuItems = ["Buy", "Sell", "Rent"];

  const dropdownOptions = [
    [
      { name: "Buy a commercial Property", path: "/imageslider" },
      { name: "Buy a residential Property", path: "/imageslider" },
      { name: "Buy a Plot", path: "/imageslider" }
    ],
    [
      { name: "Sell a Property", path: "/sell" },
      { name: "Rentout a Property", path: "/sell" },
      { name: "", path: "" }
    ],
    [
      { name: "Residential Property on rent", path: "/imageslider" },
      { name: "Commercial Property on rent", path: "/imageslider" },
      { name: "List my home for rent", path: "/imageslider" }
    ]
  ];

  const [showSignIn, setShowSignIn] = useState(false);
  const formRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowSignIn(false);
      }
    };
    
    if (showSignIn) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSignIn]);

  const handleMenuHover = (index) => {
    setDropdownOpen(index);
    setIsHoveringDropdown(true);
  };

  const handleMenuLeave = () => {
    setTimeout(() => {
      if (!isHoveringDropdown) {
        setDropdownOpen(null);
      }
    }, 200);
  };

  const handleDropdownEnter = () => {
    setIsHoveringDropdown(true);
  };

  const handleDropdownLeave = () => {
    setIsHoveringDropdown(false);
    setDropdownOpen(null);
  };

  return (
    <div>
      <nav className="text-white shadow-lg bg-white w-full fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center w-full px-4 py-2">
          {/* Mobile Menu Button on Left */}
          <button
            className="md:hidden order-1 flex flex-col items-center gap-1"
            onClick={() => setMenuOpen(true)}
          >
            <div className="w-4 h-0.5 bg-gray-700"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>

          {/* Clickable Logo in Desktop and Mobile */}
          <NavLink to="/" className="h-10 md:h-10 order-2 md:order-1 ml-12">
            <img src="./img/GraanaLogo.svg" alt="Logo" className="h-full" />
          </NavLink>

          {/* Desktop Menu Centered */}
          <div className="hidden md:flex items-center font-medium text-gray-800 gap-6 order-3 mr-6 mx-auto text-sm">
            {/* Dropdowns */}
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => handleMenuHover(index)}
                onMouseLeave={handleMenuLeave}
              >
                <button className="flex items-center hover:text-gray-400">
                  {item}
                </button>
                {dropdownOpen === index && (
                  <div 
                    className="absolute left-0 mt-2 w-64 bg-white text-black rounded shadow-lg z-50"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownOptions[index].map((option, i) => (
                      option.name && (
                        <NavLink
                          key={i}
                          to={option.path}
                          className="block px-4 py-3 hover:bg-gray-200 text-gray-600 font-medium text-sm   text-left"
                          onClick={() => setDropdownOpen(null)}
                        >
                          {option.name}
                        </NavLink>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Buttons Centered */}
            <div className="flex gap-2">
              <NavLink to="/invest"><button className="px-2 py-2 text-gray-800">INVEST</button></NavLink>
              <button className="px-2 py-2 text-gray-800">BUILDING MATERIAL</button>
              <button className="px-2 py-2 text-gray-800">MORE</button>
            </div>
          </div>

          {/* Additional Buttons at the End */}
          <div className="hidden md:flex gap-2 ml-auto order-4">
            <NavLink to="/wanted"><button className="px-2 py-2 text-black mr-10 font-medium">WANTED</button></NavLink>
            <button
              onClick={() => setShowSignIn(true)}
              className="px-2 py-2 mr-20 border font-medium border-gray-900 text-black rounded-lg"
            >
              SIGN IN
            </button>
          </div>
        </div>

        {/* Side Menu */}
        {menuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <div 
          className={`fixed top-0 left-0 h-full w-1/2 bg-white z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <div className="flex justify-between items-center p-4">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <img src="./img/GraanaLogo.svg" alt="Logo" className="h-10 mr-3 w-30" />
            </NavLink>
            <button onClick={() => setMenuOpen(false)}>
              <X size={24} className="text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 p-4">
            <button 
              onClick={() => setShowSignIn(true)}
              className="px-4 py-2 text-gray-900 border border-gray-400 rounded-md"
            >
              SIGN IN
            </button>
            {/* Dropdowns */}
            {["BUY", "SELL", "RENT"].map((item, index) => (
              <div key={index} className="relative">
                <button 
                  className="flex items-center w-full text-gray-700 text-sm hover:text-gray-400"
                  onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                >
                  {item}
                  <ChevronDown className="ml-auto text-gray-700" />
                </button>
                {dropdownOpen === index && (
                  <div className="bg-white text-black rounded shadow-lg mt-2">
                    {dropdownOptions[index].map((option, i) => (
                      option.name && (
                        <NavLink
                          key={i}
                          to={option.path}
                          className="block px-4 py-2 hover:bg-gray-200 text-sm text-gray-700"
                          onClick={() => {
                            setDropdownOpen(null);
                            setMenuOpen(false);
                          }}
                        >
                          {option.name}
                        </NavLink>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* More buttons */}
            <button className="px-2 py-2 text-gray-700 mr-28 text-sm text-left">More</button>
            <NavLink to="/invest"><button className="px-2 py-2 text-gray-700 mr-28 text-sm text-left">Invest</button></NavLink>
            <button className="px-2 py-2 text-gray-700 mr-9 text-sm text-left">Building Materials</button>
            <NavLink to="/wanted"><button className="px-2 py-2 text-gray-900 border border-gray-400 rounded-md">WANTED</button></NavLink>
          </nav>
        </div>
      </nav>
      {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} ref={formRef} />}
    </div>
  );
};

export default Navbar;