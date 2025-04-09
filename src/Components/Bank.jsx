import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect , } from 'react';


const Bank = () => {
    useEffect(() => {
          window.scrollTo(0, 0); // Jab bhi Invest page load ho, scroll top ho
        }, []);

    const cards = [
        { id: 1, title: 'Borrowers can opt either Conventional or Sharia compliant financing.', image: './img/key-1.png' },
        { id: 2, title: 'The scheme provides a flexible tenor of 3 to 25 years.', image: './img/key-2.png' },
        { id: 3, title: 'Roshan Apna Ghar scheme provides free property insurance up to the extent of financing amount.', image: './img/key-3.png' },
        { id: 4, title: 'Some banks offer free credit risk coverage up to the outstanding amount of financing.', image: './img/key-4.png' },
        { id: 5, title: 'Physical presence of borrower not necessary as the process is end to end digital.', image: './img/laptop.png' },
        { id: 6, title: 'The program allows for pricing mechanisms of variable and fixed rates.', image: './img/key-6.png' },
      ];
  return (
  <div>
    <div className="min-h-screen bg-gray-100">
      {/* First image (small height, full width) */}
      <div className="w-full h-48 md:h-64 lg:h-80 relative">
        <img
          src="./img/cover-scaled.jpg" // Replace with your image URL
          alt="Full Width Image"
          className="w-full h-48 object-cover mt-10 "
        />

        {/* Card overlapping the bottom of the image */}
        <div className="absolute -bottom-8 md:-bottom-1 lg:bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-3 rounded-lg shadow-lg flex items-center space-x-3 md:space-x-14 w-8/12 sm:w-8/12 lg:w-8/12 xl:w-8/12 max-w-2xl">
        <NavLink to="/">
            <img src="./img/GraanaLogo.svg"
             alt="Logo"
              className="w-24 h-28 md:w-40 md:h-24 ml-5" />
          </NavLink>
    
          <div className="w-px h-24 md:h-20 bg-gray-600"></div> {/* Vertical line */}
          <a href="https://www.sbp.org.pk/index.html">
            <img
            src="./img/State_Bank_of_Pakistan_logo.svg.png" // Replace with your image URL
            alt="Card Image"
            className="w-24 h-24 md:w-24 md:h-24 ml-5"
          />
          </a>
          <div className="w-px h-24 md:h-20 bg-gray-700"></div> {/* Vertical line */}
          <a href="https://www.sbp.org.pk/RDA/Ghar.html">
          <img
            src="./img/roshan-apna-ghar.png" // Replace with your image URL
            alt="Card Image"
            className="w-24 h-24 md:w-28 md:h-24 "
          />
          </a>
        </div>
      </div>

      {/* Spacer to push the next card down */}
      <div className="h-16 md:h-20 lg:h-2 -mt-12"></div>
      {/* Card with 10-15 lines of text */}
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className=" p-6  w-full max-w-2xl">
          <h1 className='text-center text-3xl font-bold text-gray-800'>Roshan Apna Ghar Scheme</h1>
          <p className="text-gray-600 text-1xl md:text-1xl mt-5">
          Roshan Apna Ghar is an initiative led by the State Bank of Pakistan (SBP) that aims to ease the Pakistani diaspora around the world. The scheme is available to all the customers of Roshan Digital Account (RDA), Islamic Naya Pakistan Certificate (INPC), and Naya Pakistan Certificates (NPCs). </p>
          <br /><br />
          <p className='text-gray-600'>
          Roshan Apna Ghar financing scheme is available to to investors who are willing to keep their money as a lien against their net financing amount or as collateral or avail of financing without cash collateral. In addition, customers of government mark-up subsidiary schemes can also avail the housing finance option.
          </p>
      </div>
      </div>
    </div>
    {/*  */}
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl ">
        <h1 className='text-center text-3xl font-bold text-gray-700'>Key Features of the Scheme</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cards.map((card) => (
            <div 
              key={card.id}
              className="bg-green-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center p-6 text-center "
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="w-32 h-32 object-cover  mb-4 " 
              />
              <h3 className="text-sm font-semibold text-gray-700">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
{/*  */}
<div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Main centered card */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="">
          {/* Card headings */}
          <div className="p-6 text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">Types of Financing Available            </h1>
            <p className="text-xl md:text-md text-gray-600">Roshan Digital Account (RDA) provides Standard Financing as well as Government Mark-up Subsidy Scheme (GMSS).            </p>
          </div>
        </div>
      </div>

      {/* Three small boxes - responsive grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {/* Box 1 */}
        <div className="">
          <div className="p-1">
            <img 
              src="./img/icon-1.jpg" 
              alt="Placeholder" 
              className=" w-24 object-cover  mb-4"
            />
          </div>
          <h1>Lien Based </h1>
          <h1>Financing</h1>
        </div>

        {/* Box 2 */}
        <div className="">
          <div className="p-4">
            <img 
              src="./img/icon-2.png" 
              alt="Placeholder" 
              className="w-24 object-cover  mb-4"
            />
          </div>
          <h1>Non-Lien Based</h1>
          <h1>Financing</h1>
        </div>

        {/* Box 3 */}
        <div className="">
          <div className="p-4">
            <img 
              src="./img/icon-3.png" 
              alt="Placeholder" 
              className="w-24 object-cover  mb-4"
            /> 
          </div>
          <h1>Government</h1>
          <h1>Mark-up Subsidy</h1>
          <h1>Scheme (GMSS)</h1>
        </div>
      </div>
    </div>
  
</div>
  )
}
export default Bank