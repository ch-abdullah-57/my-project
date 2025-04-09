import React from 'react'
import { useEffect , } from 'react';


const Flood = () => {

   useEffect(() => {
        window.scrollTo(0, 0); // Jab bhi Invest page load ho, scroll top ho
      }, []);

       // Data for the repeating section
  const items = [
    { number: 949858, text: 'Houses Destroyed' },
    { number: 149, text: 'BridgesDestroyed' },
    { number: 3451, text: 'RoadsDestroyed' },
    { number: 1033, text: 'Deaths' },
    { number: 1527, text: 'Injured' },
    { number: 719558, text: 'LivestockLost' },
  ];
  return (
    <div>
  <div className="min-h-screen bg-gray-100">
      {/* First image (small height, full width) */}
      <div className="w-full h-48 md:h-64 lg:h-80 relative">
        <img
          src="./img/cover-1.png" // Replace with your image URL
          alt="Full Width Image"
          className="w-full h-48 object-cover"
        />

        {/* Card overlapping the bottom of the image */}
        <div className="absolute -bottom-8 md:-bottom-1 lg:bottom-12 left-1/2 transform -translate-x-1/2 bg-white p-3 md:p-3 rounded-lg shadow-lg flex items-center space-x-3 md:space-x-14 w-8/12 sm:w-8/12 lg:w-8/12 xl:w-8/12 max-w-2xl">
          <img
            src="./img/Graana-Cares.png" // Replace with your image URL
            alt="Card Image"
            className="w-28 h-24 md:w-24 md:h-24 ml-5"
          />
          <div className="w-1 h-24 md:h-20 bg-gray-700"></div> {/* Vertical line */}
          <h1 className="text-4xl md:text-4xl text-red-700 font-semibold ">Flood Relief Fund</h1>
        </div>
      </div>

      {/* Spacer to push the next card down */}
      <div className="h-16 md:h-20 lg:h-2 -mt-12"></div>

      {/* Card with 10-15 lines of text */}
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className=" p-6  w-full max-w-2xl">
          <p className="text-gray-800 text-1xl md:text-1xl ">
          Pakistan has declared a state of emergency as floods have wreaked havoc across the country. The devastating floods have taken more than 1,100 lives including 380 children. More than 33mn people have been impacted, facing displacement and massive infrastructural damages. In this unprecedented climate change emergency, almost 1/3rd of the country is expected to be inundated by the end of the monsoon spell.
          <br /><br />
          Our country today needs the support of its citizens to join hands together and donate to uplift the flood affectees. Let’s become the sturdy scaffolding upon which our afflicted brothers and sisters can stand to build their homes again.          </p>
        </div>
      </div>
    </div>
    {/* Statistics */}
    <div className="min-h-screen bg-white flex justify-center items-center p-4">
      {/* Centered Card */}
      <div className=" p-6 md:p-8 lg:p-10 rounded-lg text-center max-w-lg w-full">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-4">Statistics</h1>

        {/* Line of text below heading */}
        <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6"> </p>
        <p className='text-start text-lg text-gray-600'>The current statistics are subject to change as the  .</p>
        <p className='text-start text-lg text-gray-600'>Since June:</p>
        {/* List of 7-8 items with bullet points */}
        <ul className="list-disc space-y-2 md:space-y-3 text-sm md:text-base lg:text-xl text-gray-700 text-left pl-6 mt-5">
          <li>218k houses have been swept away</li>
          <li>452k homes have sustained damage</li>
          <li>2mn acres of crops have decimated</li>
          <li>937 people have lost their lives</li>
          <li>1,343 people have been injured</li>
          <li>794k livestock has been lost to the floods.</li>
        </ul>
      </div>
    </div>
 {/* Show all the casulties from flood  */}

 <div className="max-w-4xl mx-auto  overflow-hidden p-4 sm:p-8">
      {/* Centered Heading */}
      <h2 className="text-center text-5xl font-bold text-red-700">Pakistan reels from flood disaster</h2>

      {/* Two Lines of Text */}
      <p className="mt-8 text-gray-600 text-center ">
      The Death toll from the moonsoon floods has reached 1,033, with 33 million people affected by the deluge, according 
      </p>
      <p className="text-gray-600 text-center">
      National Disaster Management Authority. Aids effort have begun as Pakistan struggles to cope.
      </p>

      {/* Repeating Number and Text Section */}
      <div className="mt-6 flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-0">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-red-700">{item.number}</span>
              <span className="text-md text-gray-600 mt-5">{item.text}</span>
            </div>
            {/* Add a vertical line after each element except the last one */}
            {index < items.length - 1 && (
              <div className="h-24 w-px bg-gray-500 mx-2 hidden sm:block"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
{/*  */}
<div className="flex items-center justify-center  ">
      <div className="max-w-7xl w-full   overflow-hidden">
        <div className="relative">
          <img
            src="./img/cover_2-1.png"
            alt="Card"
            className="w-screen h-48 object-cover mt-5"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <h1 className="text-red-700 text-5xl font-bold text-center">Donate Here</h1>
          </div>
        </div>
      </div>
    </div>









        









































    </div>
  )
}

export default Flood