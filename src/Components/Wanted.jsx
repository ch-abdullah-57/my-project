import { useState, useRef, useEffect } from "react";
import { FaHome, FaKey, FaBuilding, FaWarehouse, FaChevronDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

function Wanted() {

   useEffect(() => {
        window.scrollTo(0, 0); // Jab bhi Invest page load ho, scroll top ho
      }, []);

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [activeOption, setActiveOption] = useState(null);
  const [showCities, setShowCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [showCountries, setShowCountries] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: "+92", countryCode: "PK", name: "Pakistan" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [activeBox, setActiveBox] = useState(""); // Track active box ("Home" or "Key")

  const propertyOptions = [
    { icon: <FaHome className="text-sm" />, label: "House" },
    { icon: <FaBuilding className="text-sm" />, label: "Apartment" },
    { icon: <FaWarehouse className="text-sm" />, label: "Plot" },
    { icon: <FaKey className="text-sm" />, label: "Shop" },
    { icon: <FaBuilding className="text-sm" />, label: "Office" },
    { icon: <FaWarehouse className="text-sm" />, label: "Farmhouse" }
  ];

  const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Peshawar", "Quetta", "Multan", "Sialkot", "Hyderabad"];

  const countries = [
    { code: "+93", countryCode: "AF", name: "Afghanistan" },
    { code: "+355", countryCode: "AL", name: "Albania" },
    { code: "+213", countryCode: "DZ", name: "Algeria" },
    { code: "+1", countryCode: "US", name: "USA" },
    { code: "+44", countryCode: "GB", name: "UK" },
    { code: "+92", countryCode: "PK", name: "Pakistan" },
    { code: "+91", countryCode: "IN", name: "India" },
    { code: "+86", countryCode: "CN", name: "China" },
    { code: "+81", countryCode: "JP", name: "Japan" },
    { code: "+33", countryCode: "FR", name: "France" },
    { code: "+49", countryCode: "DE", name: "Germany" },
    // Add more countries here...
  ];

  const optionsRef = useRef(null);
  const citiesRef = useRef(null);
  const countriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(event.target)) {
        setShowCities(false);
      }
      if (countriesRef.current && !countriesRef.current.contains(event.target)) {
        setShowCountries(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if all required fields are filled
  const isFormComplete = () => {
    return (
      selectedOption.trim() !== "" &&
      selectedCity.trim() !== "" &&
      name.trim() !== "" &&
      phone.trim() !== "" &&
      isAgreed
    );
  };

  // Handle submit button click
  const handleSubmit = () => {
    if (isFormComplete()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen gap-6 p-6 mt-14">
      {/* Left Card */}
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 rounded-2xl">
        <h2 className="text-base font-semibold text-gray-800 mb-2">Tell us what you need</h2>
        
        {/* Top Two Boxes */}
        <div className="flex gap-5 mb-3">
          <div
            className={`border p-2   gap-1 w-28 h-20 text-sm cursor-pointer ${
              activeBox === "Home" ? "border-red-600" : "border-gray-300"
            }`}
            onClick={() => setActiveBox("Home")}
          >
            <FaHome className="text-lg mt-4 ml-5 w-10 text-gray-700 " />   <p className="ml-7 mt-2 text-gray-700 text-md">Buy</p>
          </div>
          <div
            className={`border p-2  gap-1 w-28 h-20 text-sm cursor-pointer ${
              activeBox === "Key" ? "border-red-600" : "border-gray-300"
            }`}
            onClick={() => setActiveBox("Key")}
          >
            <FaKey className="text-lg mt-4 ml-5 w-10 text-gray-700 " /> <p className="ml-7 mt-2 text-gray-700 text-md">Rent</p>
          </div>
        </div>
        
        <h3 className="text-base font-semibold text-gray-800 mb-7">Provide details by filling out the form</h3>
        <div className="relative mb-2">
          <input 
            type="text" 
            className="w-full p-2 pr-8 border rounded-md cursor-pointer text-sm" 
            placeholder="Property Type*" 
            value={selectedOption}
            onFocus={() => setShowOptions(true)}
            readOnly
          />
          <FaChevronDown className="absolute top-2 right-2 cursor-pointer text-red-500 text-sm" onClick={() => setShowOptions(!showOptions)} />
        </div>
        
        {showOptions && (
          <div ref={optionsRef} className="mt-1 p-2 bg-white rounded-lg shadow text-sm">
            <h3 className="text-sm font-semibold mb-1 ml-3 text-gray-700">Residential</h3>
            <div className="grid grid-cols-3 gap-1 ">
              {propertyOptions.map((option, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveOption(option.label)} 
                  className={`border p-1 rounded flex items-center gap-1 w-full text-gray-500 text-sm ${activeOption === option.label ? 'border-red-500' : ''}`}
                >
                  {option.icon} {option.label}
                </button>
              ))}
            </div>
            <div className="mt-1 flex justify-between">
              <button onClick={() => setActiveOption(null)} className="px-2 py-1 border rounded text-sm mt-4">Cancel</button>
              <button onClick={() => { setSelectedOption(activeOption); setShowOptions(false); }} className="px-5 py-1 border rounded bg-gray-700 mt-5 text-white text-sm">Apply</button>
            </div>
          </div>
        )}
        
        <h3 className="text-sm font-semibold mb-1 mt-8"></h3>
        <div className="relative mb-2">
          <input 
            type="text" 
            className="w-full p-2 pr-8 border rounded-md  cursor-pointer text-sm text-gray-500" 
            placeholder="City of Intrest*" 
            value={selectedCity}
            onFocus={() => { setShowCities(true); setShowCountries(false); }}
            readOnly
          />
          <FaChevronDown className="absolute top-2 right-2 cursor-pointer text-red-500 text-sm" onClick={() => setShowCities(!showCities)} />
          {showCities && (
            <div ref={citiesRef} className="absolute w-full bg-white border rounded shadow-lg  text-gray-500  mt-1 z-30 text-sm">
              {cities.map((city, index) => (
                <div key={index} className="p-1 hover:bg-gray-100 cursor-pointer " onClick={() => { setSelectedCity(city); setShowCities(false); }}>{city}</div>
              ))}
            </div>
          )}
        </div>
        
        <h3 className="text-sm font-semibold mb-1 mt-8"></h3>
        <input 
          type="text" 
          className="w-full p-2 border rounded-md mb-2 text-sm text-gray-500" 
          placeholder="Name*" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <h3 className="text-sm font-semibold mb-1 mt-4"></h3>
        <div className="flex border rounded-lg overflow-hidden text-sm">
          {/* Country Selector */}
          <div 
            className="relative flex items-center px-2  cursor-pointer gap-1" 
            onClick={() => setShowCountries(!showCountries)}
          >
            <ReactCountryFlag 
              countryCode={selectedCountry.countryCode} 
              svg 
              style={{ width: "2em", height: "1em" }} 
            />
            <span>{selectedCountry.code}</span>
            <FaChevronDown className="ml-1 text-red-500 text-lg" /> {/* Increased size */}
          </div>
          {/* Phone Number Input */}
          <input 
            type="text" 
            className="w-full p-2 text-gray-600" 
            placeholder="--- ----------*" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        {/* Country Dropdown */}
        {showCountries && (
          <div ref={countriesRef} className="absolute w-1/3 bg-white border rounded shadow-lg mt-1 z-10 max-h-60 overflow-y-auto text-sm">
            {countries.map((country, index) => (
              <div 
                key={index} 
                className="p-1 hover:bg-gray-100 cursor-pointer flex items-center gap-1" 
                onClick={() => { 
                  setSelectedCountry(country); 
                  setShowCountries(false); 
                }}
              >
                <ReactCountryFlag 
                  countryCode={country.countryCode} 
                  svg 
                  style={{ width: "1em", height: "1em" }} 
                />
                <span>{country.code}</span>
                <span className="text-xs text-gray-500">{country.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Additional Details Box */}
        <div className="mt-3">
          <h3 className="text-sm font-semibold mb-1 mt-8"></h3>
          <textarea
            className="w-full p-2 border rounded-sm text-sm"
            placeholder="Additional details"
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            rows={6}
          />
          <p className="text-xs text-gray-700 mt-1">Optional</p>
        </div>

        {/* Agreement Checkbox */}
        <div className="mt-12 flex items-center gap-1 cursor-pointer " onClick={() => setIsAgreed(!isAgreed)}>
          <div className={`w-4 h-4 border  flex items-center justify-center ${isAgreed ? ' text-red-700 ' : 'bg-white border-gray-400'}`}>
            {isAgreed && <span className="text-white text-xs">
           <img className="w-96 h-5" src="./img/redimg.png" alt="" />
              </span>}
          </div>
          <span className="text-xs ml-3">I have read and agree to the Graana’s Term of Service</span>
        </div>

        {/* Submit Button */}
        <div className="flex justify-start mt-4">
          <button
            onClick={handleSubmit}
            disabled={!isFormComplete()}
            className={`w-32 p-2 rounded-lg text-sm ${
              isFormComplete() ? "bg-gray-800 text-white cursor-pointer" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>

        {/* Horizontal Line at the End */}
        <div className="w-full  border-t border-gray-300 mt-4"></div>
      </div>

      {/* Vertical Line (Hidden on small screens) */}
      <div className="hidden sm:block h-[700px] w-px bg-gray-300"></div>

      {/* Right Card (Hidden on small screens) */}
      <div className="hidden sm:block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 rounded-2xl mb-[300px] ml-14">
        {/* Top Three Lines of Text */}
        <div className="mb-4 text-center">
          <h2 className="text-3xl text-gray-700">Wanted</h2>
          <p className="text-sm text-gray-600 mt-10">For the first time in Pakistan, activate a te in just 3 clicks to</p>
          <p className="text-sm text-gray-600">find the properties you need with completely secure and </p>
          <p className="text-sm text-gray-600">transactions</p>
        </div>

        {/* Background Image */}
        <div
          className="h-72 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('./img/wantedimg.webp')" }}
          
        ></div>
      </div>
    </div>
  );
}

export default Wanted;