import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBed, FaShower, FaVectorSquare, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Islamabad = [
  "G-13/1,Islamabad",
  "G-14/1,Islamabad",
  "G-14/2,Islamabad",
  "G-13/1,Islamabad",
  "Bahria Encave, Islamabad",
  "Bahria Encave, Islamabad",
  "Bahria Encave, Islamabad",
  "G-13/1,Islamabad",
  "G-13/1,Islamabad"
];

const titles = [
  "PKR 4.5 Crore",
  "PKR 2 Crore",
  "PKR 5 Crore",
  "PKR 8 Crore",
  "PKR 10 Crore",
  "PKR 1.3 Lac",
  "PKR 44 Lac",
  "PKR 94 Lac",
  "PKR 1 Crore"
];

const extras = [
  "Added 8 days ago",
  "Added 7 days ago",
  "Added 4 days ago",
  "Added 5 days ago",
  "Added 6 days ago",
  "Added 6 days ago",
  "Added 7 days ago",
  "Added 8 days ago",
  "Added 9 days ago"
];

// Beautiful house images for different property types
const residentialImages = [
  [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  [
    "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  [
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ]
];

const commercialImages = [
  [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ],
  [
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ]
];

const plotImages = [
  [
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ]
];

const PropertySection = ({ title, tabsData, activeTab, setActiveTab, currentSlide, setCurrentSlide }) => {
  const cardsPerPage = 7;
  const totalCards = tabsData[activeTab].cards.length;
  const canNavigate = totalCards > cardsPerPage;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalCards - cardsPerPage));
  };
  
  const visibleCards = tabsData[activeTab].cards.slice(
    currentSlide,
    currentSlide + cardsPerPage
  );

  return (
    <div className="mb-12 relative mt-12">
      <div className="text-gray-800 p-4 mt-5">
        <h1 className="text-2xl ml-5 font-semibold">Properties for Sale in Islamabad</h1>
      </div>

      <div className="p-4 ml-5">
        <div className="space-x-4">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(index);
                setCurrentSlide(0);
              }}
              className={`py-2 px-4 rounded-md font-medium transition-colors ${
                'border border-gray-500 text-gray-600 text-sm'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      <div className="p-8 relative">
        <div className="flex overflow-x-auto pb-4 scrollbar-hide">
          {visibleCards.map((card) => (
            <CardWithImageSlider key={card.id} card={card} />
          ))}
        </div>

        {canNavigate && currentSlide + cardsPerPage < totalCards && (
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-red-500 rounded-full text-white hover:bg-red-600 transition-colors shadow-lg z-10"
          >
            <IoIosArrowForward size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

const ImageSlider = () => {
  const [tabStates, setTabStates] = useState([
    { activeTab: 0, currentSlide: 0 },
    { activeTab: 0, currentSlide: 0 },
    { activeTab: 0, currentSlide: 0 }
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tabsData = [
    {
      name: "Residential Property",
      cards: Array(10).fill().map((_, i) => ({
        id: `1-${i}`,
        title: titles[i % titles.length],
        extras: extras[i % extras.length],
        Islamabad: Islamabad[i % Islamabad.length],
        line2: `Facing: ${['East', 'West', 'North', 'South'][i % 4]} | View: ${['Park', 'Road', 'Garden', 'Pool'][i % 4]}`,
        images: residentialImages[i % residentialImages.length],
        beds: Math.floor(Math.random() * 5) + 1,
        baths: Math.floor(Math.random() * 3) + 1,
        area: Math.floor(Math.random() * 1000) + 500
      }))
    },
    {
      name: "Commercial Property",
      cards: Array(7).fill().map((_, i) => ({
        id: `2-${i}`,
        title: titles[i % titles.length],
        extras: extras[i % extras.length],
        Islamabad: Islamabad[i % Islamabad.length],
        images: commercialImages[i % commercialImages.length],
        beds: Math.floor(Math.random() * 5) + 1,
        baths: Math.floor(Math.random() * 3) + 1,
        area: Math.floor(Math.random() * 2000) + 1000
      }))
    },
    {
      name: "Plots",
      cards: Array(5).fill().map((_, i) => ({
        id: `3-${i}`,
        title: titles[i % titles.length],
        extras: extras[i % extras.length],
        Islamabad: Islamabad[i % Islamabad.length],
        images: plotImages[i % plotImages.length],
        beds: Math.floor(Math.random() * 3) + 1,
        baths: Math.floor(Math.random() * 2) + 1,
        area: Math.floor(Math.random() * 800) + 300
      }))
    }
  ];

  const updateTabState = (index, newState) => {
    setTabStates(prev => {
      const newStates = [...prev];
      newStates[index] = { ...newStates[index], ...newState };
      return newStates;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {[1, 2, 3].map((sectionNum, idx) => (
        <PropertySection
          key={idx}
          titles={`Property Listings ${sectionNum}`}
          tabsData={tabsData}
          activeTab={tabStates[idx].activeTab}
          currentSlide={tabStates[idx].currentSlide}
          setActiveTab={(tab) => updateTabState(idx, { activeTab: tab })}
          setCurrentSlide={(slide) => updateTabState(idx, { currentSlide: slide })}
        />
      ))}
    </div>
  );
};

const CardWithImageSlider = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % card.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + card.images.length) % card.images.length);
  };

  return (
    <NavLink 
      to={`/property/${card.id}`} 
      className="flex-shrink-0 w-72 mx-2 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48">
        <img
          src={card.images[currentImageIndex]}
          alt={`Property ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {card.images.length > 1 && (
          <>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full hover:bg-opacity-70"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
        <div className="flex justify-start space-x-2 text-gray-500 text-xs">
          <div className="flex items-center">
            <FaBed className="mr-1" />
            <span>{card.beds}</span>
          </div>
          <div className="flex items-center">
            <FaShower className="mr-1" />
            <span>{card.baths}</span>
          </div>
          <div className="flex items-center">
            <FaVectorSquare className="mr-1" />
            <span>{card.area} sq ft</span>
          </div>
        </div>
        <p className="text-gray-600 text-1xl mt-3">{card.Islamabad}</p>
        <p className="text-gray-500 text-xs mt-1">{card.extras}</p>
      </div>
    </NavLink>
  );
};

export default ImageSlider;