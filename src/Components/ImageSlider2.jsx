import React, { useState , useEffect} from 'react';
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

const ImageSlider2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Jab bhi Invest page load ho, scroll top ho
  }, []);
  
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
      <h1 className="text-2xl font-semibold mb-8 ml-12  ">House for Sale in Rawalpindi( 1136 properties available )</h1>
      
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
      <h1 className='text-gray-800 ml-12 font-bold text-2xl list-disc pl-5 marker:text-red-500 marker:font-bold'></h1>
      <ul className=' ml-12 text-sm'>
        <li>
        There are a total of seven tehsils in the Rawalpindi District (all of which are self-governed): Gujar Khan, Kahauta, Kallar Syedan, Kotli Sattian, Murree, Taxila, and Rawalpindi. Also known as the twin city of the federal capital of the country, Rawalpindi is the fourth largest metropolitan city of Pakistan. Between 1959 and 1969, Rawalpindi also served as the capital of Pakistan before this status was given to Islamabad later on. After partition, a huge number of exiles settled in Rawalpindi. Later on, settlers from all over Pakistan moved to this city, which led to a surge in demand for houses for sale in Rawalpindi and its suburban areas.</li>
        <li>
        Rawalpindi also holds historic significance in Pakistan as it was one of the first cities to be colonised by the British in 1849. The popular tourist spot of Murree, which is only 60 km away from Rawalpindi, was built by the British for their leisure.
        </li>
        <li>
        Today, Rawalpindi is home to the General Headquarters (GHQ) of the Pakistan Army and Air Force. Located in the Potohar region, this city also serves as a stopover for local tourists and foreigners who are on their way to Kaghan, Swat, Nathiagali, Naltar Gilgit, and Hunza.
        </li>
        <li>
        </li>
        The city also has a great rail and road network that connects the city to Lahore, Faisalabad, Gujrat, and Gujranwala, making it a good economic hub. Goods from Bhatta Saddar, Raja Bazar, and Moti Bazar are imported because of their low price.
      </ul>
      <h1 className='text-green-400 mt-10 text-2xl font-bold ml-12 cursor-pointer '>Houses Available for Sale in Rawalpindi</h1>
      <p className='ml-12 mt-4 text-sm'>Some popular areas for houses available for sale in Rawalpindi are the Gulrez Housing Scheme, Airport Housing Scheme, Bahria Town Rawalpindi, Adiala Road, Chaklala Scheme, Satellite Town, Askari, Gulshan Abad, Media Town etc. </p>
      <p className='ml-12 mt-4 text-sm'>These locations are most sought-after in terms of investment in Rawalpindi, as they also provide modern facilities. </p>
      {/*  */}
      <h1 className='text-gray-500 mt-10 text-2xl ml-12 '>Price Trends of Houses for Sale In Rawalpindi      </h1>
      <p className='ml-12 mt-4 text-sm'> The rates of houses available in Rawalpindi vary according to the location, area of the house, and luxurious facilities offered. The price range for different plot sizes include:</p>
      <ul className='list-disc pl-5 marker:text-gray-800 marker:font-bold text-sm ml-12 mt-5'>
        <li>
        5 marla houses for sale in Rawalpindi can easily be found in the range of Rs. 50 lac to Rs. 1.4 crore.
        </li>
        <li>
        If you are looking to buy a 8 marla house in Rawalpindi, the price range will be between Rs. 72 lac and Rs. 6.5 crore.
        </li>
        <li>The prices for a 10 marla property start from Rs. 75 lac and go up to Rs. 2.4 crore.
        </li>
        <li>
        Apart from these sizes, larger properties of 1 kanal are available on a budget of around Rs. 2.2 crore to Rs. 5.5 crore.
        </li>
      </ul>
      {/*  */}
      <h1 className='text-gray-500 mt-10 text-2xl  ml-12'>Facilities in Rawalpindi      </h1>
      <p className='ml-12 mt-4 text-sm'>There are several schools in Rawalpindi that are providing quality education. Grammar School Rawalpindi, Beaconhouse School System, Siddeeq Public School, and Froebel’s International school are a few famous educational institutes in Rawalpindi.</p>
      <p className='ml-12 mt-4 text-sm'>Rawalpindi also has famous colleges for undergraduate students, including the Army Medical College, National College of Arts, Riphah International University, Rawalpindi Women University, Punjab College, and so on. As a result, the literacy rate of the region is pretty high as compared to other areas of Pakistan.</p>
      <p className='ml-12 mt-4 text-sm'>Moreover, since the city is the headquarters for the Pakistan Army and Airforce, it is safe to live here. All the check posts and areas are under constant surveillance. </p>
     </div>
    </div>
  );
};

export default ImageSlider2;