import React from 'react'
import { useState } from "react";
import { Search  } from "lucide-react";
import { NavLink } from "react-router-dom";
import CardSlider from './SliderData';


const Home = () => {
    // This function show you can see all cities of pakistan
      const [showCities, setShowCities] = useState(false);
      const cities1 = [
        "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Quetta", "Sialkot", "Hyderabad", "America","Karachi", "Lahore", "Islamabad","Karachi", "Lahore", "Islamabad", "Karachi", "Lahore", "Islamabad",
      ];
    // This function show you can search all city of pakistan
      const [search, setSearch] = useState("");
      const [filteredCities, setFilteredCities] = useState([]);
      const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value.length > 0) {
          setFilteredCities(
            cities.filter((city) =>
              city.toLowerCase().includes(value.toLowerCase())
            )
          );
        } else {
          setFilteredCities([]);
        }
      };
      const cities = [
        "Karachi",
        "Lahore",
        "Islamabad",
        "Rawalpindi",
        "Faisalabad",
        "Peshawar",
        "Quetta",
        "Multan",
        "Sialkot",
        "Hyderabad",
        "Okara",
        "Banu",
        "LakiMarwat",
        "Thar",
      ];
  return (
    <div>
    {/* background Image and search input field  */}
        <div className="relative min-w-screen mt-7 min-h-screen text-white  m-0 p-0">
      {/* Background Image - Full Screen Without Gap */}
      <div 
        className="absolute top-0 mr-5 left-0 w-full  bg-center h-full bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('./img/HeaderImage.png')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          margin: "0", 
          padding: "0" 
        }}
      ></div>
      <div className="relative flex flex-col items-center justify-center min-h-screen w-full z-10 ">
        <h1 className="text-4xl font-bold mb-2 text-center">Buy or rent vetted properties at the</h1>
        <h2 className="text-4xl mb-6 hidden sm:block text-center leading-tight  font-bold">most trusted online real estate portal</h2>
        <div className="flex space-x-4 mb-6">
          <button className="bg-white border text-gray-900 border-white px-6 py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            BUY
          </button>
          <button className="bg-white border border-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-300 hover:text-black">
            RENT
          </button>
        </div>
        <div className="relative w-2/3 max-w-2xl flex flex-col items-center">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search by city or area"
              className="w-full px-6 py-5 border border-white bg-white text-gray-400 rounded-l-lg text-md placeholder-gray-500"
              onFocus={() => setShowCities(true)}
              onBlur={() => setTimeout(() => setShowCities(false), 200)}
            />
            <button className="px-5 py-[17px] border border-white bg-red-500 text-white rounded-r-lg hover:bg-red-600 hover:text-white">
              <Search size={22} />
            </button>
          </div>
          {showCities && (
            <ul className="w-full bg-white text-gray-600 text-sm border border-white rounded-lg mt-1 max-h-96 overflow-y-auto shadow-lg text-left z-50">
             <li className="px-4 py-2 bg-white text-gray-600  text-sm font-bold cursor-default">Select a city</li>
              {cities1.map((city, index) => (
                <li key={index} className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer text-left">
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
    {/* Show my mian content */}
    <div className="flex flex-col md:flex-row  gap-24 justify-center items-center p-6">
      {/* Card 1 */}
       <div className="bg-white  mt-10 rounded-2xl p-10 px-4 py-4 w-82 text-center">
        <img
          src="./img/houseimg.png"
          alt="Card Image"
          className=" w-80  h-55 rounded-lg cursor-pointer"
        />
        <h2 className="text-3xl font-semibold mt-14">Invest</h2>
        <p className="text-gray-500 mt-4">Invest in fully legal Imarat projects. Our “Ownerships</p>
        <p className="text-gray-500 ">Approvals, Demand & Delivery” approach ensures fantastic</p>
        <p className="text-gray-500 ">returns with full risk mitigation</p>
        <div className="flex justify-center gap-2">
        <NavLink to="/wanted">
          <button className="bg-gray-900 text-white px-9 py-3 rounded-lg  mt-5">
          INVEST NOW
          </button>
          </NavLink>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white  mt-10 rounded-2xl p-10 px-4 py-4 w-82 text-center">
        <img
          src="./img/houseimg1.png"
          alt="Card Image"
          className=" w-80  h-55 rounded-lg cursor-pointer"
        />
        <h2 className="text-3xl font-semibold mt-14">Wanted</h2>
        <p className="text-gray-500 mt-10">In just 3 clicks activate a team of experts to find the</p>
        <p className="text-gray-500 ">properties you need</p>
        <div className="flex justify-center gap-2">
        <NavLink to="/wanted">
          <button className="bg-gray-900 text-white px-9 py-3 rounded-lg mt-14">
          WANTED
          </button>
          </NavLink>
        </div>
      </div>
    </div>
    {/* Show my features of mian content */}
    <div className="flex items-center justify-center min-h-screen w-full p-4  sm:bg-gray-200 bg-transparent rounded-3xl">
      <div className="p-6 rounded-2xl  w-full max-w-4xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          <div className="bg-white p-4 rounded-xl shadow-md text-center border-b sm:border-none">
            <img 
              src="./img/rent.png" 
              alt="Card 1" 
              className="w-50 h-50 object-cover ml-12" 
            />
            <h1 className="text-lg font-semibold mb-2 mt-10">Buy a property</h1>
            <p className="text-md  mb-1 ">Find where “perfect”</p>
            <p className="text-md  mb-1 ">meets “happy”</p>
            <NavLink to="/imageslider">
            <button className="bg-white text-gray-800  text-sm px-4 py-2 rounded-lg hover:bg-gray-100 mt-10 border border-gray-400 ">BROWSER PROPERTIES</button>
            </NavLink>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center border-b sm:border-none">
            <img 
              src="./img/sell.png" 
              alt="Card 2" 
              className="w-50 h-50  object-cover rounded-lg mb-2 ml-10" 
            />
            <h1 className="text-lg font-semibold mb-2 mt-10">Sell a property</h1>
            <p className="text-md  mb-1 ">Get the best value</p>
            <p className="text-md  mb-1 ">in any economy</p>
            <NavLink to="/sell">
            <button className="bg-white text-gray-800  text-sm px-4 py-2 rounded-lg hover:bg-gray-100 mt-10 border border-gray-400">ADD DETAILS</button>
            </NavLink>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <img 
              src="./img/buy.png" 
              alt="Card 3" 
              className="w-50 h-50  object-cover rounded-lg mb-2 ml-10" 
            />
            <h1 className="text-lg font-semibold mb-2 mt-10">Rent a property</h1>
            <p className="text-md  mb-1 ">Live where you</p>
            <p className="text-md  mb-1 ">can love</p>   
            <NavLink to="/imageslider">
            <button className="bg-white text-gray-800  text-sm px-4 py-2 rounded-lg hover:bg-gray-100 mt-10 border border-gray-400">FIND RENTALS</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    {/* Show you can search all city of Pakistan  */}
    <div
      className="flex flex-col items-start justify-start h-screen bg-cover bg-center relative p-6 mt-10"
      style={{ backgroundImage: "url('./img/ground.png')" }}
    >
      {/* Welcome Card */}
      <div className=" p-6 rounded-2xl  text-start w-full max-w-lg mt-6">
        <h1 className="text-3xl font-bold  text-gray-600">Area Guides</h1>
        <p className="text-sm text-gray-700 mt-5">
        View schools, health services, parks, security index and other
        </p>
        <p className="text-sm text-gray-700 mt-1">
        details of any area
        </p>
      </div>

      {/* Search Input Field */}
      <div className="relative mt-10 w-full max-w-md">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden ">
          <span className="p-5 bg-white">
            <Search className="w-5 h-5 text-gray-600" />
          </span>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search  area..."
            className="w-full px-5  py-5 outline-none text-gray-900"
          />
        </div>

        {/* Search Results Dropdown */}
        {filteredCities.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-auto shadow-lg z-10">
            {filteredCities.map((city, index) => (
              <li
                key={index}
                onClick={() => {
                  setSearch(city);
                  setFilteredCities([]);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image at the Right Side (Hide on Small Screens) */}
      <img
        src="./img/map.png"
        alt="Beautiful Pakistan"
        className="hidden md:block absolute right-5 mr-10 top-1/2 transform -translate-y-1/2 w-96 mb-24 h-60 object-cover"
      />
    </div>
     {/* import slider data from another page  */}
    <CardSlider />

      {/* Card of Phone Img */}
       <div className=" h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-full rounded-lg overflow-hidden md:flex">
        {/* Left Side: Heading, Text, and Buttons */}
        <div className="p-5 md:w-1/2 ml-8">
          <div className="uppercase  text-3xl text-gray-800 font-semibold">Get the app now          </div>
          <p className="mt-12 text-gray-700 ">  Search hundreds of thousands of up to date listings with powerful filters to find your perfect home and real estate investment. Find properties and opportunities exclusive and unique to Graana. </p>
          <div className="mt-4 flex space-x-4">
            <button className="flex items-center  text-white px-3 py-1 border border-gray-900 rounded-lg mt-7">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-6 h-6 mr-2"
              />
              <div>
                <div className="text-xs text-gray-700">Download on the</div>
                <div className="text-md font-semibold text-gray-900">App Store</div>
              </div>
            </button>
            <button className="flex items-center border border-gray-900  px-1 py-1 rounded-lg mt-7">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMVFhMXFRcaFxcVFRYaFhAXGhUWGBUVFRUaHSogGBolGxcXITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0mHx8rKys3Nys1KzA1Ky41NTcvLTI1LS0tLSs1Ly0vLS0rMi83LSsvLTAtLS0yLS8wLzc2N//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBQYEB//EADoQAAEDAgMHAwIEBQQCAwAAAAEAAhESMQMhQQQiMlFhgaEFE3FCYgYUsbJSkcHR8CNyguFT8TNDkv/EABsBAQACAwEBAAAAAAAAAAAAAAADBgECBQQH/8QAMREAAgIBAQUGBAYDAAAAAAAAAAECAwQRBRIhUXEiMTNBYaGxwdHhFDKBkfDxBhMj/9oADAMBAAIRAxEAPwD7ViPDhAulhGm6HYdOaGivM5QgJpM1aTPaVWKaraJV/T2TcKLZygG14Ag3UYYLTJsq9uRUkHVZHJALEBcZFlbngiBdSXU5BP24FSAMI031U0matJntKporvlCVf09kA8U1WTY8AQbpOFGYzlAw6s0BOG0tMmyeIKjIQH1ZILqMhmgGXginXJGEab6oogVd0DfvlCAktJNWl1WK6rIJVxu9k3NozGaAeG8NEG6jDaWmTZUGVZpB9WSAMQVGQqLxFOtlJNGQzT9vKrugFh7t9UnNJMiyY375QgvjdQDxXVZBPDfTkbpObRndDWVZoCWNIMmyeJvWQH1bqCaLZygI9l3L9EK/zB5BCATJnemOtk8T7fCZxKsohANGV5QBlH3eZSw/u7Sij6u8Jk19IQEumcpjpZViR9N+iXuRuopozugHhx9V+qlsznMdbJ0152R7k7qAMT7e8J5R93mUA0dZSo+rvCAMP7vKT5k0zHSyomvK0Je5TuwgHiR9N+iMOPqv1SopzuimvO2iATZnOafEJ4n294R7k7vaUxudZQAIjPi8ylh33rdUUTvd4TLq8rICXzO7MdLKnxG7fpdAfTldIMpzugHhx9V+qkTOtM9oTivOyPc+ntKAMT7e8JtiM+LO90hudZRRO8gEy+9MdUPmd2Y6Ki6vK2qA+nK6AHRGV+l0YcfV5SDKd5BFfSEBklnRCx/lzzQgKxGgCRf5Sw4PEpawtMmybxVmPKAVRmNJjsniZcKfuZU62SZuX15IBtaCJN/lSwyYdZDmE7wsvN6xttOE5zRmIiepj+qzGLk0l5ms5KMXJ+R6XmDu2VOaAJF/lcTgeoPmS41c5utzsPrUEVjuLpZF1y3ZnOq2pVKW7JaG8w8+JKozGkx2SbijFzYZAV+5lTrZYOkmmtUGJA4UMaCJN/lJgpzPhJzC6SLIZBjiTDrJ4hg7tk3vqyHlDHU5HwgAtESL5JYefF2SDCN7S6b9+2nNAIuMxp/RViADhuiuBTrZJgpMnwgHhtBEuv8AKljiTBsm5hdmE3YlQgXQCxDB3Uy0ROvzqhjqcj4Uhh4tLoB4efEk5xBgWVPNdtOaA+BTqgDEAGbbowwDm66TW05nwhzS7MeUAmOJMGyeIY4U3YlQpF0MNF9eSAx+67mhZvzA6poDE15cYNk3mnIeVWI4EQL/AAlhwOJAHt5Va3SZv305JUmZ0meyeJnwoBOeRuiy1/4lwwNndHNv7gtk1wAg3+FqvxCwjZ3z9v7gpaPEj1RBk+DPo/gccVnwsbQrzoXZvojdHdl/RU2tTZbPtL2GWkgrdbF620//ACZO5i09QuYwsXQrKVX7ap0S3Zf2bU5d2O+y+HLyO7wXjE1kcwhzy2QLLitl21+GZae2hXReneu4bhS/ddz0P9liM0zu4u1areEuy/b9zavZTmPKGNqzPhRhCIJt/MKsQSd2y3OoIPJ3dLJv3La80y4RAvklh5cXZAOiRVrdJhqMHwkWmZ0/oqxCDw3QCc8tyCbsOkSLow3ACHXUsaQZNkBTG1ZnwpDzw6WTxBJ3Uy4RGvxqgB4otrzQMORVqlh5cSTmkmRZANrqsj4Q5xbkPKeIQcm3RhkDJ10AOw6RULoYK76clLGkGTZPEE8KAv8ALjqmsHtO5IQGQ4dOcygCvO0KWTO9MdbJ4n2+EAV/T2lMijrKMo+7zKWH93aUAe3O8tb+I8Wdnf8A8f3BbF0zlMdLLX/iYN/LuiLtt/uClp8SPVEGT4M+j+BxSSaF3yqElZcPE0KxIUd1MbY7sjSS1R6SksTMTQrISq3kY8qZbsv7PLOLiz2bH6piYeQMt5Gy6P031zDcIs7kf6FcaUiVFGbR6sXad2PwT1XJn0X243u8Jjf6QuL9P9dxMOAd5nIn9OS6bZPVMPFj2zDtW2P/AGpozTLLibSoyOCekuT/AJxPbXG72lMtozugRGfF5lLDvvW6rc6AwyrOyQfVlZJ8zuzHSyp8Ru36XQCmjK6Pb+rvCeHH1X6qRM60z2hAMb/SEVxuoxPt7wm2Iz4s73QAW0Z30QGVZ2UsvvTHVD5ndmOiAYfVuoJo6ym6Iyv0ujDj6vKAX5g8kLJDOiEBDsSrJDTRkc5TxGACRdLDFV0AqPq7puNdsoU1maZymOyeJu8KAfuQKVrPxFhEbO//AI/uC2bWgiTdar8QPJwHyf4f3BS0+JHqiDJ8GfR/A46ElSS7xVSUlSSyakqmuQphR21RtjuyNZRTWjMqkqQUyq5k40qJaPu5nhsg4skoDiMxkUFSV5iBs3fp34ie0gYm+Of1fz1XU7LtzMcbhHONR8hfOSsuxe5WPbJDuYMR1JW3+/cWsnwR2MHa+RCSra30+Gnn+h9JD6ckgynNazY9vyAxd46uGU9gthhYtUZyFri59GSv+UtfTz/YujhJLWS0LIrzGSfuZU9ksQ0nJMtEVa3XsNRDcvnKCyd5GHvcWilzyDAOSAtzq8rIa+nJGIA3MXRhtDszdAIMp3kEV2yhSx5JgnJViGnhQB+XPMIUe87n+iEBTWFpk2TeKrIDy7IocaMh5QDryp1slh7t9U6MqtbpN376ckAnMJNQsvB+JMQHZ3Rzb+4LYF5G7otf+I8KMB3y39wUlPiR6ohyfBn0fwOMhEKoShd4quhKUKoRCyY0IhIq4ShDGhEIVQlC1srjZHdkuBpKKktGQVJVlqrZ9mc91I7nQBVnNo/C6ym+zzPC8axzUILVvuJ2fAc90N7nQDmV0GybK3DbA7nUqtl2drBDe51J5lZlQtpbTlkvdjwgvfr9C+bH2NDDjvz42P29F82JZMLELbFSELkxnKD3ovRrkdxrU2uxeoNs7L9F6g36tLrQrNg7Q5tjly0Vkwf8knDSGStVzXf9zzzxk+MTdYhqtohr4FJusOz4+6HDXIg6Ef8AtZgyRVqrhVbG2CnB6p8TxtNPRiY2kyUPaXGQhrqsj4Q55bkPKkMDc+oQLowzTdBw6RULoaK76ckBf5gdUJflxzKEBLyCN2/QIw4HF5QcOnOZRFedoQEwZn6Z7QniQeHvCK/p7SnFHWUANIiDf4Ws9dafYfP2/uC2XtzveFr/AF/EqwHZfw/uCkp8SPVEOR4UujOQhKFkhKF3NSsaEQlCuEoWdTGhEJQskJQs6mNDHCIVwvLt21twxnm42HP/AKWtlka4uUnokSU49l9irrWsmTtm0twxJvoNT/0vB6b65iYby47zDxN5dW8j+q12Nil5LnGT+nQdFEKpbSyvxicJLscvn1+B9K2RsKrDr7fanLvfL0X172fStl2huI0PYZaf8g8isoXz/wBI9UfgOkZtPE3n1HIru9j2pmKwPYZB/mDqCNCqFnYMsaWvfF9z+TM5OLKl+hmTQj9TYC5+Audxb0R5RptBJgAk8h/mS9OHsLsq90cgd4/J0WxwtmDBLcheP7nVWDA/x267SV/Zj7v6fr+xBZkJcI8SNhwqBv3OfNZXAzIsq4+kJVxu+VdqaYU1quHcloeGTberHiEHhv0RhkDiv1CC2jO+iAyvOylMEsBBk2TxM+Hwj3Kt1OaOsoDHQ7qhZPzPRCAlhM71uqeJlw+E3YlWQQ00ZHwgCBE/V85ylh58XaUUHi0um41205oCXEzlbwvH6+G+w6Iu3X7gvcMSBTqtf61hEYLp6fuCkq/PHqiK/wAKXRnKwlCyQlC7WpW9DHCULLCUJqY0McJQskLwep+oDCEDN5sOXU9FrZbGuLlJ8ETY+LZkWKutati9R21uGObjYf1PRc3i4hcS5xklGI8uJc4yTcqVV8zMlkS5RXcj6VsnZFeBDnN97+S9PiCE0LwnaSFC9vpfqT8B1TcweJps/wDseRXr9F/De0bTvNbTh/8Akfk0j7Bd/bLqu89E/DGz4EForxR/9mJcf7BZvbPqVusR3R3ZLsvmc/M2hj1JwfafJfN/xi2HCfita+lzGkTvtId8U6d1uMPZmMG5xc5lxWVr6cik1hbmVNhbKxsTjBceb4sqllspv0HhweK/VSCZj6Z7Qm4V5jyn7mVOtl0SIWJlw94TaBGfF56JN3L68kiwne0QAwyd63VDzB3bdFTnVZDyhr6cj4QA4CMr9DmlhweLyhrC3eNkOFdtOaAyUs6fzQsX5c9EIC3sDRIulhiq6ljC0yRkniCqyAVZmnSYVYgptqisRTrbulh7t9UA2sBFRutf6w8nCdPT9wXucwkyLLy+uYgOC6OY/UKSr866oiv8OXRnMQlCaF2CvkwiE1q/VvVRh7rc3+GfPXoo7bo1R3pPgT4uLZk2Kupat+3q/QfqvqQwhS3N5/k3qf7LmHuJJJMk3J1Q4kmSZJuTqhVnKy5Xy1fd5I+kbM2XVg16R4yfe+f2EmvRsGw4uM+jCYXu5CzernHJo+V2vov4Iw2Q7ajW6/ttmgf7jd/gdCoIVSn3HqyM2nHXbfHku84/0v0jG2g/6TCQLvOTG/LtT0Eld36B+DMDD3sX/VxBFxuNPRmvyZ7LocHADAIaGsFgAAANAALLJib1tF7a8eMeL4sr2VtS67hHsr0+oi4g06W7KsRtOYQHiKdbJYYpMleg5hTGBwk3UMeXGDZD2FxkDJU94cIF0AsQ0mAmWCKtbowzTkVIYZq0mUA8Pevok55BpFk8Tetom14Ag3zQBiNpzCMNlWZSY2kybJPbUZFkAMeSYNk8Q02Tc8EQLowzTdAR77uaFm95v+BCAxjELsihxoyHlViERu36JYcfV5QB7eVWt0m799OSUGdaZ7Qnifb3hABeRurx+t4UYLvkfqF7WkRnfrda/wBXB9p0zpf/AHBSVfnXVEV/hy6M5xCFpvV/VqZZhne1d/D0HX9F0rroUx3pHJw8O3LsVda4+yXNler+q0Sxh39T/B/2ubOd/wD2mASQACSTkBJLj0FyV1Po34KxcSHY84TP4RBxCP0b5PRVy66zJnr/ABH0DFxsbZlOmvF97839vTyOZ2fBc9wYxpc82a0ST25dV1vpP4IdxbSYH/jYc/8Am8W+G/zXY7D6Zg4DacBgbzI4ndXOOZXsYRG9frdb14yXGXE8WTteyfZq4L3+xh2bYmYDQ3CaGtGgED5PM9Vma2vMqWAzvTHVPEvu26L1HIbberAPJ3dLJu3La80EiMuLL5lLD+7tKGB0SKtbpB1eRSIM5TT4hViR9N+iAReW5BM4dOYRhkRvX6qWAzvTHVAU1teZ8JVnh0sjEvu26JkiPu8ygB25bXmgMkVJYf3dpScDOUx4QDDqsigvLcgniR9N+iMOPqv1QAcOkVIaK76clLAZzmOtk8T7fCAr8sOaaw0u6+UIC/bpzuiK87QkxxJg2TxDHCgD3PpjpKIo6ynAifq+dUsPPiQBRO8vN6oDiYTmtGd45wbBehziDAsqxABw3+VmL3WnyNZRUouL8z5f6x6wBOHhnOznDQ/wt6rJ6P8AhDaMYB7x7OHzcN9w+1mnyf5FfRcPYsIu9x2Gz3J4qRV/+rrK1xJg2UdsZXT3rH+h7sfJji0/68eOj82+LbNd6N6DgYI/0mQ6M3u3nu/5aDoIC2XufTHSUYmXD4TgRP1fOq2SS4I8s5ym96T1YoozvKDh1b1kYZniUvcQSBZZNSy+rKyA6jK+qMQAZtv8owwDxXQCoje7wnx9IUtcZg2TxMuHvCAPcjdjpKKaM7pgCJ+r51+FOGZO9ZAOirOyPcqyiEnuIMNsqeABIv8AKAA6jK6VH1d4TwwDxKQ4zGk+EAzv9IR7kbsd0YmXD3hNrQRJvnqgFTRnfRFFedkmGTvWQ8wd2yAfuVbsJg0dZQ5oAkX+UsODxIB/menlCv22dP5oQEPxKshdDDRfwm/DDcxdJgqv4QE0Hi0mVTzXbTmprM06TCp4ptrzQAMSBSbpNbTmfCYZIqN0mOqMFADm1ZjymcSRSLpPdSYCZZAqF0AMNF9eSmg8WkyqYKr6clNZmnSYQFPNdvKG4lIg3Q8U28obh1CTdAJrC3M+EObVmPKGuLjBQ80mB5QDL5FOtkM3L68kFkCrW6Gb99OSAksJ3tLqnuqyHlSXkbullT205jygBr6cj4SawtzNuibGVZlSx5dkbIBuFWY8p15U62SeaTA8plmVWt0Ambl9eSRYTvaJs376cknPI3dEBT3VZDyhj6cj4Q9tOY8oYyrMoCWsLd42TeK7ac0mvLt02Teaba80Avy56IS98oQDYwgyRkniCrhR7lWSCaMrygHUIjW3dLDFPEn7eVXdIb/SEAnNJMgZKsQh2TbpF8bqZZRndAGGQ3J11LWkGSMlQZXnZIPndQBiCrhTqERrbukdzrKft5Vd0AsMU8Sl7SSSBkqBrytCC+ndQDxHB2QujDIbk66CynO6A2vOyAlrSDJsnib3CgPnd7Jnc6ygAOERr/VLDFJl1ke3Iq7oDq8rIBPaSZAyVPcCIF0i+nK6Zw6c0AYZDeJSGmZjKZ7Kg2vOyVf09kAYm9wptcAIN80Hc6yl7cipALDbSZdZD21GW2TDq8rIL6croBucCIF0Ye7xI9uneQBX0hAX7rf8CFP5bqhAYsDiH+aK9quPhCEBkPB2WPZblCEBGLxFZtqt3/umhALZbd/7LDhcQQhAXtVwsg4OyEIDHstz8KMfiP8AmiEIDPtNu6Wy2PyhCAw4fF3WTatEIQFt4OxWLZr9v7IQgFtHEs20cP8AJCEBOy2KxN4u/wDVCEBk2rTv/RXh8HY/1QhAYtmv2S2m6EIDNjcP8lOy6oQgM6EIQH//2Q=="
                alt="Play Store"
                className="w-8 h-8 mr-2"
              />
              <div>
                <div className="text-xs text-gray-700">Get it on</div>
                <div className="text-sm font-semibold text-gray-700">Google Play</div>
              </div>
            </button>
          </div>
          
        </div>
        {/* Right Side: Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            className="h-96  object-cover ml-14"
            src="./img/phoneimg.png"
            alt="Card Image"
          />
        </div>
      </div>
    </div>
    {/* Three Cards */}
    <div className="container mx-auto p-4 text-center">
      <h1 className='text-gray-900 text-3xl text-semibold'>Happenings</h1>
      <h1 className='mt-5 text-gray-800'>Navigate through the landscape of some of our most well-received campaigns!      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 ml-5">
        {/* Card 1 */}
        <div className="bg-white  shadow-2xl rounded-lg p-3 flex flex-col items-start text-left">
          <img
            src="./img/roshan.png"
            alt="Card 1"
            className="w-32 h-20 mb-5 ml-3"
          />
          <p className="text-gray-800 ml-3 text-xs line-clamp-2">Roshan Apna Ghar is an initiative led by the </p>
          <p className='text-gray-800 ml-3 text-xs'>State Bank of Pakistan (SBP) that aims to ease</p>
          <p className='text-gray-800 ml-3 text-xs'>the Pakistani diaspora around the world. The</p>
          <p className='text-gray-800 ml-3 text-xs'>scheme is available to all the customers of</p>
          <p className='text-gray-800 ml-3 text-xs'>Roshan Digital Account (RDA)</p> 
          <NavLink
            to="/bank"
            className=" text-red-600 px-4 py-2  mt-3 text-xs"
          >
            READ MORE
          </NavLink>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-2xl rounded-lg p-3 flex flex-col items-start text-left">
          <img
            src="./img/graanaCare.png"
            alt="Card 2"
            className="w-32 h-20 mb-4 ml-3" 
          />
          <p className="text-gray-800 text-xs ml-3 line-clamp-2">This is the second card with two lines of text.</p>
          <p className='text-gray-800 ml-3 text-xs'>Flood Relief Fund is an initiative led by</p>
          <p className='text-gray-800 ml-3 text-xs'>Graana.com in collaboration with Pak Army.</p>
          <p className='text-gray-800 ml-3 text-xs'>Pakistan has declared a state of emergency as</p>
          <p className='text-gray-800 ml-3 text-xs'>floods have wreaked havoc across the country.</p>
          <p className='text-gray-800 ml-3 text-xs'>The devastating floods</p>
          <NavLink
            to="/flood"
            className=" text-red-600 px-4 py-2 text-xs mt-2"
          >
            RAED MORE
          </NavLink>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-lg p-3 flex flex-col items-start text-left">
          <img
            src="./img/esg.png"
            alt="Card 3"
            className="w-32 h-20 mb-4 ml-3"
          />
          <p className="text-gray-800 ml-3 line-clamp-2"></p>
          <p className='text-gray-800 ml-3 text-xs'>ESG is vital for curating a sustainable</p>
          <p className='text-gray-800 ml-3 text-xs'>ecosystem, initiative led by Graana.com.As the</p>
          <p className='text-gray-800 ml-3 text-xs'>8th most affected region by climate change, it</p>
          <p className='text-gray-800 ml-3 text-xs'>is high time Pakistan’s private sector shifts</p>
          <p className='text-gray-800 ml-3 text-xs'>towards eco-friendly</p>
          <NavLink
            to="/card3"
            className=" text-red-600 px-4 py-2 text-xs mt-5 "
          >
          READ MORE
          </NavLink>
        </div>
      </div>
    </div>  

{/* UL LI  */}
    <div className="max-w-6xl mx-auto p-4 mt-5">
      <div className=" ">
        {/* Top horizontal line */}
        <div className="border-t border-gray-300"></div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-white">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-gray-700">Looking for popular cities to get properties in?  </h2>
              <h3 className="text-sm text-gray-700">Here's a list of houses flats plots and rooms in all bustling metropolitan cities. </h3>
            </div>
            
            {/* UL of homes */}
            <h1 className='text-gray-900 text-sm'>Homes</h1>
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight "
                  activeClassName="font-bold"
                >
                House for sale in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
              House for sale in Peshawar
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
            House for sale in Faisalabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Multan
                </NavLink>
              </li>
            </ul>
            
            {/* Bottom section with 5-6 LI */}
             <div>
              <h1 className=' text-gray-900 tetx-sm'>Plots</h1>
              <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
              Plots for rent in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Plots for rent in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Plots for rent in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Plots for rent in Karachi

                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
              Plots for rent in Peshawar

                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 Plots for rent in Faisalabad
                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 Plots for rent in Multan
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Right side (same structure) */}                                                     
          <div className="w-full md:w-1/2 p-8 ml-12">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-xl font-bold"></h2>
              <h3 className="text-lg text-gray-600"></h3>
            </div>
            <h1 className='mt-12 text-gray-900 text-sm'>Flats & Apartments</h1>
            {/* UL of homes */}
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
              Flats for sale in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Flats for sale in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Flats for sale in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Flats for sale in Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                Flats for sale in Peshawar
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               Flats for sale in Faisalabad

                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 Flats for sale in Multan
                </NavLink>
              </li>
            </ul>
            
            {/* Bottom section with 5-6 LI */}
            <div>
              <h1 className='text-gray-900 text-sm'>Rooms </h1>
               <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Islamabad 
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Rooms for rent in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Peshawar
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                  Rooms for rent in Faisalabad
                  </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Multan     
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom horizontal line */}
        <div className="border-t border-gray-300"></div>
      </div>
    </div>
{/* UL LI TWO  */}
<div className="max-w-6xl mx-auto p-4 mt-5">
      <div className=" ">
        {/* Top horizontal line */}
        <div className="border-t border-white"></div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-white">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-sm font-bold text-gray-700">Looking for options of your next home?</h2>
              <h3 className="text-sm text-gray-700">Here's the list of popular locations in our top cities.</h3>
            </div>
            
            {/* UL of homes */}
            <h1 className='text-gray-900 text-sm'>Islamabad</h1>
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                  House for sale in Bahria Enclave Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in DHA Phase 2 Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Bani Gala Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Soan Garden Islamabad
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Jinnah Garden Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in G-13/4 Islamabad
                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in CBR Town Islamabad
                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in DHA Homes Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in G-13/1 Islamabad
                </NavLink>
              </li>
            </ul>
            
            {/* Bottom section with 5-6 LI */}
             <div>
              <h1 className=' text-gray-900 text-sm'>Lahore  </h1>
              <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in DHA Phase 6 Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Al Qayyum Garden Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in DHA Town Phase 9 Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Johar Town Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
              House for sale in Wapda Town Phase 2 Lahore
               </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Johar Town Phase 2 Lahore
                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in DHA Phase 5 Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Allama Iqbal Town - Neelum Block Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                > 
                 House for sale in Omega Residencia Lahore
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
          
          {/* Right side (same structure) */}                                                     
          <div className="w-full md:w-1/2 p-8 ml-12">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-xl font-bold"></h2>
              <h3 className="text-lg text-gray-600"></h3>
            </div>
            <h1 className='mt-12 text-gray-900 text-sm'>Rawalpindi            </h1>
            {/* UL of homes */}
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Bahria Town Phase 8 Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Airport Housing Society, Sector 4 Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Adyala Road Rawalpindi
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               House for sale in Gulshan Abad Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Snober City Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Sadiqa Abad Rawalpindi
                 </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Bahria Town Phase 7 Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Gulrez Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Bahria Town Phase 8 Overseas Sector-3 Rawalpindi
                </NavLink>
              </li>
            </ul>
            
            {/* Bottom section with 5-6 LI */}
            <div>
              <h1 className='text-gray-900 text-sm'>Karachi</h1>
               <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in FB Area Block 13 Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                  House for sale in FB Area Block 10 Karachi 
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight" 
                  activeClassName="font-bold"
                >
                 House for sale in FB Area Block 12 Karachi
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Naya Nazimabad Block C Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in North Karachi Sector 5 Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in FB Area Block 11 Karachi 
                  </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Buffer Zone Karachi
                </NavLink>
              </li> 
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >     
                House for sale in North Karachi Sector 11 Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Gulshan-e-Iqbal Block 1 Karachi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Naya Nazimabad Block D Karachi
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom horizontal line */}
        <div className="border-t border-gray-300"></div>
      </div>
    </div>
{/* UL LI Three  */}
<div className="max-w-6xl mx-auto p-4 mt-5">
      <div className=" ">
        {/* Top horizontal line */}
        <div className="border-t border-white"></div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-4 border-b md:border-b-0 md:border-r border-white">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-xs font-bold text-gray-700">Most popular searches</h2>
            </div>        
            {/* UL of homes */}
            <h1 className='text-gray-900 text-sm'>Homes </h1>
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/imageslider1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/imageslider2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/imageslider3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                House for sale in Lahore
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                 House for sale in Karachi
               </NavLink>
              </li>
            </ul>          
           {/* Bottom section with 5-6 LI */}
             <div>
              <h1 className=' text-gray-900 text-sm'>Flats & Apartments</h1>
              <ul className="mb-6">
              <li className="mb-2 mt-8">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
               Flats for sale in Islamabad
               </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Flats for sale in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
               Flats for sale in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Flats for sale in Karachi
                </NavLink>
              </li>
            </ul>
            </div>
          </div>    
          {/* Right side (same structure) */}                                                     
          <div className="w-full md:w-1/2 p-8 ml-12">
            {/* Heading with two lines */}
            <div className="mb-4">
              <h2 className="text-xl font-bold"></h2>
              <h3 className="text-lg text-gray-600"></h3>
            </div>
            <h1 className='mt-12 text-gray-900 text-sm'>   Plots</h1>
            {/* UL of homes */}
            <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs leading-tight"
                  activeClassName="font-bold"
                >
                Plots for rent in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                  Plots for rent in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                  Plots for rent in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                  Plots for rent in Karachi
                </NavLink>
              </li>
            </ul>
            {/* Bottom section with 5-6 LI */}
            <div>
              <h1 className='text-gray-900 text-sm'>Rooms              </h1>
               <ul className="mb-6">
              <li className="mb-2 mt-4">
                <NavLink 
                  to="/home1" 
                  className="text-graay-700 hover:text-red-500 text-xs"
                  activeClassName="font-bold"
                >
               Rooms for rent in Islamabad
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home2" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                  Rooms for rent in Rawalpindi
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Lahore
              </NavLink>
              </li>
              <li className="mb-2">
                <NavLink 
                  to="/home3" 
                  className="text-gray-700  text-xs hover:text-red-500 leading-tight"
                  activeClassName="font-bold"
                >
                Rooms for rent in Karachi
                </NavLink>
              </li>
            </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom horizontal line */}
        <div className="border-t border-gray-300"></div>
      </div>
    </div>








    
    </div>
  )
}

export default Home