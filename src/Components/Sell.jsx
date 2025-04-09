import { useState, useRef, useEffect } from "react";
import { FaHome, FaKey, FaBuilding, FaWarehouse, FaChevronDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import SignInForm from "./SignInForm";


function Sell() {
    // this function show price of house convert to PKR 
    const [price, setPrice] = useState('');
    const [amountInWords, setAmountInWords] = useState('');
  
    const convertToPKRWords = (num) => {
      if (!num || isNaN(num)) return '';
      
      const number = parseFloat(num);
      if (number === 0) return 'Zero Rupees';
  
      const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
      const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
      const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
      
      const crore = Math.floor(number / 10000000);
      const lakh = Math.floor((number % 10000000) / 100000);
      const thousand = Math.floor((number % 100000) / 1000);
      const hundred = Math.floor((number % 1000) / 100);
      const remainder = Math.floor(number % 100);
      
      let result = '';
      
      if (crore > 0) {
        result += `${units[crore] || teens[crore - 10]} Crore `;
      }
      
      if (lakh > 0) {
        result += `${lakh >= 20 ? tens[Math.floor(lakh / 10)] + ' ' + units[lakh % 10] : units[lakh] || teens[lakh - 10]} Lakh `;
      }
      
      if (thousand > 0) {
        result += `${thousand >= 20 ? tens[Math.floor(thousand / 10)] + ' ' + units[thousand % 10] : units[thousand] || teens[thousand - 10]} Thousand `;
      }
      
      if (hundred > 0) {
        result += `${units[hundred]} Hundred `;
      }
      
      if (remainder > 0) {
        if (remainder >= 20) {
          result += `${tens[Math.floor(remainder / 10)]} ${units[remainder % 10]}`;
        } else if (remainder >= 10) {
          result += `${teens[remainder - 10]}`;
        } else {
          result += `${units[remainder]}`;
        }
      }
      
      return result.trim() + ' Rupees';
    };
  
    const handlePriceChange = (e) => {
      const value = e.target.value;
      setPrice(value);
      
      if (value && !isNaN(value)) {
        setAmountInWords(convertToPKRWords(value));
      } else {
        setAmountInWords('');
      }
    };
//   This function show when click on property in which city then show all address of Pkaistan 
    const [searchQuery, setSearchQuery] = useState('');
    const [showAddresses, setShowAddresses] = useState(false);
  
    // Sample list of Pakistan addresses (you can expand this with real data)
    const pakistanAddresses = [
      "House 123, Street 45, Sector F-8/4, Islamabad",
      "Flat 301, Al-Hafeez Heights, Main Boulevard, Gulberg III, Lahore",
      "Shop 5, Plaza 78, Tariq Road, Karachi",
      "Village Chak 45, Tehsil Burewala, District Vehari, Punjab",
      "Office 201, Business Plaza, I.I. Chundrigar Road, Karachi",
      "House 789, Street 12, Phase 5, DHA, Karachi",
      "123-Main Commercial Area, Blue Area, Islamabad",
      "45-A, Satellite Town, Rawalpindi",
      "Plot 67, Industrial Area, Hayatabad, Peshawar",
      "House 34, Street 9, University Town, Peshawar",
      "Shop 12, Jinnah Super Market, F-7 Markaz, Islamabad",
      "Flat 502, Eden Heights, Jail Road, Lahore",
      "Village Kot Addu, District Muzaffargarh, Punjab",
      "Office 3, 2nd Floor, Rehman Business Center, Multan"
    ];
  
    const handleInputClick = () => {
        setShowAddresses(true);
      };
    
      const handleAddressSelect = (address) => {
        setSearchQuery(address);
        setShowAddresses(false);
      };
      const filteredAddresses = pakistanAddresses.filter(address =>
        address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    // function of sign in page 
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
    //    function of uploading image of computer
    const [selectedImage, setSelectedImage] = useState(null);
    const [preview, setPreview] = useState(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(file);
        
        // Create preview URL
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    // show search  bar with  options of size of house 
   const [isOpen, setIsOpen] = useState(false);
   const options = [
    'Kanal',
    'Marla',
    'Square Feet',
    'Square Yards',
    'Square Meters',
    'Acres'
  ];

  const toggleDropdown = () => {
   setIsOpen(!isOpen);
  };
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

  return (
  <div>
    {/* rough text  */}
    <div>
    <h1>idhadfoiashiodnid</h1>
    <p>qidhdiwhdwhid</p>
    </div>
    {/* Mian Card   */}
    <div className="max-w-6xl mx-auto my-8 p-6 bg-red-500 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left side - Text content */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold ml-12 mt-5 text-white mb-2">
           Upload your Property Detials
          </h1>
          <h2 className="text-lg ml-12 mt-5 text-white">
          Get the best value for your property in a few steps.
          </h2>
        </div>
        
        {/* Right side - Image */}
        <div className="md:w-1/3 flex justify-end">
          <img
            className="w-40 h-full "
            src="./img/imarat-residencia.png"
            alt="Card content"
          />
        </div>
      </div>
    </div>

    <div className="flex justify-start ml-12 min-h-screen gap-6 p-6 mt-14">
      {/* Left Card */}
      <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 p-4 rounded-2xl">
        <h2 className="text-md font-semibold text-gray-700 mb-5"> What do  you want to do</h2>
        
        {/* Top Two Boxes */}
        <div className="flex gap-5 mb-10 ">
          <div
            className={`border p-2   gap-1 w-20 h-12 text-sm cursor-pointer ${
              activeBox === "Home" ? "border-red-600" : "border-gray-300"
            }`}
            onClick={() => setActiveBox("Home")}
          >
            <FaHome className="text-sm mt-1 w-10 text-gray-700 " />   <p className="  ml-3 text-gray-700">Sell</p>
          </div>
          <div
            className={`border p-2  gap-1 w-20 h-12 text-sm cursor-pointer ${
              activeBox === "Key" ? "border-red-600" : "border-gray-300"
            }`}
            onClick={() => setActiveBox("Key")}
          >
            <FaKey className="text-sm mt-1 w-10 text-gray-700 " /> <p className="ml-3 text-gray-700 text-sm">Rent</p>
          </div>
        </div>
        
        <h3 className="text-base font-semibold text-gray-800 mb-8 mt-3">What kind of property do you have?</h3>
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
        
        <h3 className="text-sm font-semibold mb-6 text-gray-700 mt-8">Which city is your property in?</h3>
        <div className="relative mb-2">
          <input 
            type="text" 
            className="w-full p-2 pr-8 border   cursor-pointer text-sm text-gray-500" 
            placeholder=" Select your city" 
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
        {/* which area in property */}
        <div className="max-w-md mx-auto mt-10 relative">
        <h1 className="font-3xl mb-5 text-gray-700">Which area is your property in?</h1>
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleInputClick}
          placeholder=" Addresses Phase Block etc.."
          className="w-full px-4 py-2 border border-gray-300 text-sm  focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
        />
        <button className="absolute left-1 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {showAddresses && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredAddresses.length > 0 ? (
            filteredAddresses.map((address, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => handleAddressSelect(address)}
              >
                {address}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No addresses found</div>
          )}
        </div>
      )}
    </div>
    {/* Asking Price */}

    <div className="max-w-md mx-auto p-45">
        <h1 className="mt-5 text-gray-700">What is the asking price?</h1>
      <div className="relative">
        <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          placeholder="0"
          className="w-full px-4 py-2 mt-5 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        {amountInWords && (
          <div className="mt-2 text-sm text-gray-600">
            {amountInWords}
          </div>
        )}
      </div>
    </div>
       {/* rooms and bedroom uplod here  */}
       {/* Property Name  */}
      <h3 className="text-sm font-semibold mb-5 text-gray-700 mt-8">Name your property      </h3>
        <input 
          type="text" 
          className="w-full p-2 border mb-2 text-sm text-gray-500" 
          placeholder="Name your Property" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
      {/*proprty size   */}
      <div className="max-w-md mx-auto mt-10 relative">
        <h1 className="text-gray-800 text-md">What is the size of your property?</h1>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-5">
        <input
          type="text"
          placeholder="0"
          className="px-4 py-2 w-full focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={toggleDropdown}
          className="px-4 py-2  text-red-600  focus:outline-none transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchQuery(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
          {/* Additional Details Box */}
          <div className="mt-3">
          <h3 className="text-sm font-semibold mb-1 mt-8">What do you love about the place?</h3>
          <textarea
            className="w-full p-2 border rounded-sm text-sm"
            placeholder="Describe your property in detials "
            value={additionalDetails}
            onChange={(e) => setAdditionalDetails(e.target.value)}
            rows={6}
          />
          <p className="text-xs text-gray-700 mt-1">Optional</p>
        </div>
       {/*  Function of uploading image from computer */}
       <div className="max-w-md mx-auto p-6 ">
      {/* Function description at the top */}
      <div className="mb-6">
        <h2 className="text-md font-semibold text-gray-800 mb-2">Upload images of your property</h2>
        <p className="text-gray-600 text-sm">
        Properties with images of good quality
        generate 8X more leads.
        Supported file formats: png, jpeg, jpg
        </p>
      </div>

      {/* Image preview */}
      {preview && (
        <div className="mb-4 flex justify-center">
          <img 
            src={preview} 
            alt="Preview" 
            className="max-h-64 rounded-md border border-gray-200"
          />
        </div>
      )}

      {/* Upload button at the bottom - modified version */}
      <div className="w-full">
        <label className="cursor-pointer flex flex-col items-center w-full">
          <div className="w-full px-4 py-2 text-sm  text-gray-700 border border-gray-800 rounded-md  hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>{selectedImage ? 'Change Image' : 'Upload Image'}</span>
          </div>
          <input 
            type="file" 
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </label>
        {selectedImage && (
          <p className="mt-2 text-sm text-gray-500 text-center">
            Selected: {selectedImage.name}
          </p>
        )}
      </div>
    </div>
        <h3 className="text-sm font-semibold mb-5  mt-4"> Tell us how to contact you </h3>
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

        {/* Coustmer Name */}
        <h3 className="text-sm font-semibold mb-5 text-gray-700 mt-8">What is your name?        </h3>
        <input 
          type="text" 
          className="w-full p-2 border mb-2 text-sm text-gray-500" 
          placeholder="What is your name?" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowSignIn(true)}
            className="bg-gray-700 text-white p-2 rounded-lg"
          >
          Sumbit Review
          </button>
        </div>

        {/* Horizontal Line at the End */}
        <div className="w-full  border-t border-gray-300 mt-4"></div>
      </div>
    </div>
          {showSignIn && <SignInForm onClose={() => setShowSignIn(false)} ref={formRef} />}
    </div>
  );
}

export default Sell;