import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import "../App.css"; // Custom CSS for scrollbar hiding


function InvestPage() {
  // This Function show you when user press Invest page user go invest page fom top
    useEffect(() => {
      window.scrollTo(0, 0); // Jab bhi Invest page load ho, scroll top ho
    }, []);
    
    // This Function show right side scroll
    const sliderRef = useRef(null);

    const scrollRight = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: window.innerWidth / 3, behavior: "smooth" });
      }
    };
    const projects = [
      {
        img: "./img/projectimg1.webp",
        title: "Mall of IMARAT",
        description: "Starting From PKR 82.72Lac"
      },
      {
        img: "./img/projectimg2.webp",
        title: "Grand Bazar",
        description: "Starting From PKR 50Lac"
      },
      {
        img: "./img/projectimg3.jpeg",
        title: "IMARAT Residences",
        description: "A platform to connect with people."
      },
      {
        img: "./img/projectimg4.webp",
        title: "Glof Floaras 2",
        description: "Starting From PKR 1.5 Crore"
      },
      {
        img: "./img/projectimg5.webp",
        title: "Florence Galleria",
        description: "Starting From PKR 8.3Crore"
      },
      {
        img: "./img/projectimg6.webp",
        title: "Amazon Outlet Mall",
        description: "Starting From PKR 8.2Crore"
      },
      {
        img: "/img/projectimg7.webp",
        title: "IMARAT Downtown",
        description: "Starting From PKR 2.5Crore"
      },
      {
        img: "/img/projectimg8.webp",
        title: "Bavylon",
        description: "Starting From PKR 8.5Crore"
      }
    ];
    return (
      <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center md:pr-10">
          <h1 className="text-4xl font-medium text-gray-700 grey-800 mb-9">Invest in IMARAT Projects</h1>
          <p className="text-gray-600 "> Invest in fully legal IMARAT projects. Our “Ownership,</p>
          <p className="text-gray-600">Approval, Demand & Delivery” approach ensures</p>
          <p className="text-gray-600">fantastic returns with full risk mitigation.</p>
          <button className="bg-gray-700 mt-5 text-white px-2  py-3 text-sm rounded-lg shadow-md hover:bg-gray-800 transition w-36">
           VIEW ALL PROJECTS
        </button>
        </div> 
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img 
            src="/img/projectPageImageOne.webp" 
            alt="AIK Invest" 
            className="w-full md:w-4/4 md:h-auto object-cover rounded-lg " 
          />
        </div>
      </div>
        {/* Slider */}
        <div className="w-full flex flex-col items-center p-6 mb-5 min-h-screen">
      {/* Project Title (Aligned Left) */}
      <h2 className="text-2xl font-bold mb-4 text-left w-full ml-10">Top Projects</h2>

      <div className="relative w-full max-w-[1200px]">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide p-4 transition-all duration-300 
                      rounded-xl whitespace-nowrap"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 h-[350px]  rounded-xl flex flex-col 
                         items-center justify-start text-black text-lg font-bold shadow-lg"
            >
              {/* Image inside each card */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[250px] object-cover rounded-t-xl"
              />

              {/* Text Below Image */}
              <div className="p-3 ">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button (Hidden on Small Screens) */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-3 rounded-full bg-gray-800 
                     text-white hover:bg-gray-600 shadow-lg transition-all hidden sm:block"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
      {/* Full Img screen Section */}
    <div className="flex flex-col min-h-screen p-3">
      <div className="text-center mb-4">
        <p className="text-sm text-gray-600">Our criteria to choose best projects to invest</p>
        <h1 className="text-3xl font-semibold  text-gray-900">OADD</h1>
        <p className="text-sm text-gray-600">Ownership - Approvals - Demand - Delivery</p>
      </div>
      <div className="flex justify-center flex-grow">
        <div className="relative w-full h-screen max-w-full ">
          <img
            src="./img/desktop.webp"
            alt="Card Image"
            className="w-full h-full  object-center mt-14"
          />
        </div>
      </div>
    </div>

     {/*  Image and Text Cards */}
   
   {/* Background img  */}
    <div className="w-full  flex items-center justify-center  px-13 mt-12 ">
      <img
        src="./img/topimg-removebg-preview.png"
        alt="Background"
        className="max-w-full max-h-full block object-contain object-center pointer-events-none"
        
      />
    </div>
    </div>
    );
  }
  export default InvestPage;