import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBed, FaShower, FaVectorSquare, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      className="flex-shrink-0 w-72 mx-2 bg-white rounded-lg overflow-hidden   transition-shadow duration-300"
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

const ImageSlider1 = () => {
  const residentialCards = Array(3).fill().map((_, i) => ({
    id: `1-${i}`,
    title: titles[i % titles.length],
    extras: extras[i % extras.length],
    Islamabad: Islamabad[i % Islamabad.length],
    line2: `Facing: ${['East', 'West', 'North', 'South'][i % 4]} | View: ${['Park', 'Road', 'Garden', 'Pool'][i % 4]}`,
    images: residentialImages[i % residentialImages.length],
    beds: Math.floor(Math.random() * 5) + 1,
    baths: Math.floor(Math.random() * 3) + 1,
    area: Math.floor(Math.random() * 1000) + 500
  }));

  const commercialCards = Array(3).fill().map((_, i) => ({
    id: `2-${i}`,
    title: titles[i % titles.length],
    extras: extras[i % extras.length],
    Islamabad: Islamabad[i % Islamabad.length],
    images: commercialImages[i % commercialImages.length],
    beds: Math.floor(Math.random() * 5) + 1,
    baths: Math.floor(Math.random() * 3) + 1,
    area: Math.floor(Math.random() * 2000) + 1000
  }));

  const plotCards = Array(3).fill().map((_, i) => ({
    id: `3-${i}`,
    title: titles[i % titles.length],
    extras: extras[i % extras.length],
    Islamabad: Islamabad[i % Islamabad.length],
    images: plotImages[i % plotImages.length],
    beds: Math.floor(Math.random() * 3) + 1,
    baths: Math.floor(Math.random() * 2) + 1,
    area: Math.floor(Math.random() * 800) + 300
  }));

  return (
    <div className="min-h-screen p-8 mt-12">
      <h1 className="text-2xl font-semibold mb-8 ml-12  ">House for Sale in Islamabad ( 1252 properties available )</h1>
      
      {/* First Row - Residential Properties */}
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4"></h2>
        <div className="flex justify-evenly  ">
          {residentialCards.map((card) => (
            <CardWithImageSlider key={card.id} card={card} />
          ))}
        </div>
      </div>
      
      {/* Second Row - Commercial Properties */}
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4"></h2>
        <div className="flex justify-evenly space-x-4">
          {commercialCards.map((card) => (
            <CardWithImageSlider key={card.id} card={card} />
          ))}
        </div>
      </div>
      
      {/* Third Row - Plots */}
      <div className="mb-12">
        <h2 className="text-xl font-medium mb-4"></h2>
        <div className="flex justify-evenly space-x-4">
          {plotCards.map((card) => (
            <CardWithImageSlider key={card.id} card={card} />
          ))}
        </div>
      </div>
     <div> 
      <h1 className='text-gray-800 ml-12 font-bold text-2xl list-disc pl-5 marker:text-red-500 marker:font-bold'>Highlights of Houses for Sale in Islamabad</h1>
      <ul className='list-disc pl-5 marker:text-gray-800 marker:font-bold text-sm ml-12 mt-5'>
        <li>
        Scenic and Serene Environment: Houses for sale in Islamabad are situated in the midst of a picturesque and serene environment. The city is known for its lush greenery, well-planned neighborhoods, and scenic landscapes, providing residents with a tranquil and aesthetically pleasing living experience. 
        </li>
        <li>
        Modern and Well-Planned Infrastructure: Islamabad stands out for its modern and well-planned infrastructure. The city boasts wide roads, efficient public services,and carefully designed housing societies that contribute to a high standard of living. This makes houses in Islamabad particularly attractive for those seeking a well- organized urban lifestyle. 
        </li>
        <li>
        Educational Hubs and Institutions: The capital city is home to renowned educational institutions and universities, making it an ideal choice for families. Houses for sale in Islamabad often provide convenient access to educational hubs, ensuring that residents have quality educational options for their children. 
        </li>
        <li>
        Embassy Enclave and Diplomatic Presence: Islamabad houses many embassies and diplomatic missions, leading to the development of exclusive areas like the Embassy Enclave. This diplomatic presence not only adds to the city's cosmopolitan character but also contributes to heightened security measures in these areas. 
        </li>
        <li>
        Economic Opportunities and Employment Centers: Islamabad serves as a hub for various government offices, multinational corporations, and business centers. The availability of economic opportunities and employment centers in the city makes houses in Islamabad an attractive option for professionals seeking career growth and stability. 
        </li>
      </ul>
      <h1 className='text-gray-800 mt-10 text-2xl font-bold ml-12'>Islamabad History</h1>
      <p className='ml-12 mt-4 text-sm'>Islamabad, the capital city of Pakistan, has a history deeply intertwined with the country's formation. The decision to establish a new capital arose in the early 1960s, primarily to replace Karachi as the capital due to its vulnerable location on the coast. The site chosen for the new capital was strategically located at the northern edge of the Pothohar Plateau, offering a more secure and centralized location. </p>
      <p className='ml-12 mt-4 text-sm'>Construction of Islamabad began in earnest in 1961 under the supervision of the Greek architect and town planner, Constantinos Apostolou Doxiadis. The city's design was inspired by modernist principles, featuring a grid pattern with well-defined sectors for various government functions, residential areas, and green spaces. This meticulous planning aimed to create a well-organized and aesthetically pleasing urban environment.  </p>
      <p className='ml-12 mt-4 text-sm'>On August 1, 1963, Islamabad officially became the capital of Pakistan, marking a significant milestone in the nation's history. The move from Karachi to Islamabad aimed to foster a more balanced development across the country and facilitate the efficient functioning of the government. </p>
      <p className='ml-12 mt-4 text-sm'>Over the decades, Islamabad has evolved into a vibrant city, blending modernity with the natural beauty of its surroundings. Its carefully planned infrastructure, diplomatic enclave, educational institutions, and economic opportunities have contributed to making Islamabad not only the political center of Pakistan but also a dynamic hub for diverse cultural, educational, and economic activities. </p>
      {/*  */}
      <h1 className='text-gray-800 mt-10 text-2xl font-bold ml-12'>Master Plan of Islamabad       </h1>
      <p className='ml-12 mt-4 text-sm'> The Master Plan of Islamabad serves as the foundational blueprint for the city's development, outlining its spatial organization, infrastructure, and land-use policies. Envisioned by the Greek architect and town planner Constantinos Apostolou Doxiadis, the plan aimed to create a modern, well-organized, and aesthetically pleasing capital for Pakistan. </p>
      <p className='ml-12 mt-4 text-sm'>The city is divided into various sectors, each designated for specific functions such as residential, commercial, industrial, and institutional purposes. The sectors are organized in a grid pattern, with wide avenues and green belts, contributing to the city's distinctive look. The central administrative and commercial hub is located in the "Blue Area," hosting government offices, businesses, and commercial centers. </p>
      <p className='ml-12 mt-4 text-sm'>One of the significant features of the Master Plan is the emphasis on greenery and open spaces. Islamabad is known for its numerous parks, tree-lined streets, and the Margalla Hills National Park on the northern edge, providing residents with ample recreational and natural spaces. </p>
      <p className='ml-12 mt-4 text-sm'>The plan also includes the development of diplomatic enclaves to accommodate foreign embassies and high commissions, further establishing Islamabad as a hub for international relations. Additionally, the careful consideration of topography and the preservation of natural features, such as the Rawal Lake, contribute to the city's sustainable and eco-friendly design. </p>
      {/*  */}
      <h1 className='text-gray-800 mt-10 text-2xl font-bold ml-12'>Developers of Islamabad City</h1>
      <p className='ml-12 mt-4 text-sm'> The development of Islamabad, Pakistan's capital city, was spearheaded by various government and private entities, with key contributions from renowned architects and planners. The primary architect responsible for the city's master plan was Constantinos Apostolou Doxiadis, a Greek town planner, and architect. Doxiadis' expertise in urban planning played a pivotal role in shaping Islamabad's modern, grid-based layout and emphasis on green spaces. </p>
      <p className='ml-12 mt-4 text-sm'>The Capital Development Authority (CDA) is the governmental organization entrusted with executing and overseeing the development of Islamabad. Established in 1960, the CDA played a central role in implementing the master plan, managing land allocation, infrastructure development, and ensuring adherence to the planned design principles. </p>
      <p className='ml-12 mt-4 text-sm'>Moreover, private real estate developers have also played a significant role in shaping Islamabad. As the city grew, various housing societies and development projects emerged to meet the increasing demand for residential and commercial spaces. These private developers have contributed to the city's expansion, introducing diverse housing options and amenities. </p>
      <p className='ml-12 mt-4 text-sm'>Islamabad's real estate landscape features a mix of government-initiated projects and private ventures, all working in tandem to fulfill the vision set out by the master plan. The city's development is an ongoing process, with continuous efforts from both public and private sectors to enhance infrastructure, accommodate population growth, and maintain the city's unique character. </p>
     </div>
    </div>
  );
};

export default ImageSlider1;