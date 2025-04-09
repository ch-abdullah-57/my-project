import React, { useState, useEffect, useRef } from "react";
import { FaBed, FaShower, FaRulerCombined, FaChevronRight } from "react-icons/fa";

// Updated Data for the slider with new images
const description = [
  "PKR 3Lac",
  "PKR 4Lac",
  "PKR 14Lac",
  "PKR 40000",
  "PKR 800000",
  "PKR 1.3Lac",
  "PKR 44Lac",
  "PKR 94Lac",
  "PKR 100000"
];
const descriptions = [
  "PKR 35000",
  "PKR 45000",
  "PKR 14000",
  "PKR 40000",
  "PKR 80000",
  "PKR 10000",
  "PKR 42000",
  "PKR 90000",
  "PKR 10000"
];
const titles = [
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
const Rawalpindi = [
  "Bahria town Phase 8 , Rwalapindi",
  "Sabzarzar, Rawalpindi",
  "Adyala Road , Rawalpindi",
  "Adyala Road , Rawalpindi",
  "Sabzarzar, Rawalpindi",
  "Bahria town Phase 8 , Rwalapind",
  "Bahria town Phase 3 , Rwalapind",
  "Adyala Road , Rawalpindi",
  "Bahria town Phase 8 , Rwalapindi"
];
const Lahore = [
  "Bahria town Sector E ,Lahore",
  "Bahria town Sector F ,Lahore",
  "Bahria town Sector E ,Lahore",
  "Bahria town Sector 9 ,Lahore",
  "Bahria town Sector A ,Lahore",
  "Bahria town Phase 8 , Lahore",
  "Bahria town Phase 3 , Lahore",
  "Bahria town Sector H ,Lahore",
  "Bahria town Phase 8 , Lahore"
];
const Karachi = [
  "Bear Society, karachi",
  "CP Berar Society , Karachi",
  "Nazamabad Number 4 , karachi",
  "Muhamad Ali Coperative Society ",
  "FB Area Block , Karachi",
  "GulshaneIqbal , karachi",
  "Nazamabad Number 1 , karachi",
  "bahria town , karachi",
  "Scheme 233 , karachi "
];
const Peshawar = [
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar",
  "Warsak Road , Peshawar"
];
const extra = [
  "Added 12 hours ago",
  "Added 13 hours ago",
  "Added 14 hours ago",
  "Added 15 hours ago",
  "Added 16 hours ago",
  "Added 16 hours ago",
  "Added 17 hours ago",
  "Added 18 hours ago",
  "Added 19 hours ago"
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
const sliderData = {
  category1: {
    label: "Islamabad", // Custom label for dropdown
    cards: [...Array(9)].map((_, i) => ({ 
      images: [
        `./img/Islamabad2.jpeg`, // New image 1
        `./img/Islamabad3.jpeg`, // New image 2
        `./img/Islamabad6.jpeg`, // New image 3
      ],
      description: description[i+ 9 % description.length],
      details: `${i + 2} Beds | ${i + 1} Baths | ${1200 + i * 100} sqft | Garage: ${i % 2 === 0 ? "Yes" : "No"} | Floors: ${Math.floor(i / 3) + 1}`,
      extra: "Spacious rooms and a peaceful environment.",
      extra: extra[i+ 9 % extra.length],
      title: titles[i+ 9 % titles.length],
      link: `/lahore${i + 1}a`,
    })),
  },
  category2: {
    label: "Rawalpindi", // Custom label for dropdown
    cards: [...Array(9)].map((_, i) => ({
      images: [
        `./img/Islamabad1.jpeg`, // New image 1
        `./img/Islamabad4.jpeg`, // New image 2
        `./img/Islamabad5.jpeg`, // New image 3
      ],
      description: descriptions[i+ 9 % descriptions.length],
      details: `${i + 2} Beds | ${i + 1} Baths | ${1200 + i * 100} sqft | Garage: ${i % 2 === 0 ? "Yes" : "No"} | Floors: ${Math.floor(i / 3) + 1}`,
      extra: extras[i+ 9 % extras.length],
      title: Rawalpindi[i+ 9 % Rawalpindi.length],
      link: `/apartment${i + 10}a`,
    })),
  },
  category3: {
    label: "Lahore", // Custom label for dropdown
    cards: [...Array(9)].map((_, i) => ({
      images: [
        `./img/Lahoreimg.jpeg`, // New image 1
        `./img/Lahoreimg2.jpeg`, // New image 2
        `./img/lahoreimg3.jpeg`, // New image 3
      ],
      description: descriptions[i+ 9 % descriptions.length],
      details: `${i + 2} Beds | ${i + 1} Baths | ${1200 + i * 100} sqft | Garage: ${i % 2 === 0 ? "Yes" : "No"} | Floors: ${Math.floor(i / 3) + 1}`,
      extra: extra[i+ 9 % extra.length],
      title: Lahore[i+ 9 % Lahore.length],
      link: `/villa${i + 19}a`,
    })),
  },
  category4: {
    label: "Karachi", // Custom label for dropdown
    cards: [...Array(9)].map((_, i) => ({
      images: [
        `./img/Karachiimg1.jpeg`, // New image 1
        `./img/karachiimg2.jpeg`, // New image 2
        `./img/karachiimg3.jpeg`, // New image 3
      ],
      description: descriptions[i+ 9 % descriptions.length],
      details: `${i + 2} Beds | ${i + 1} Baths | ${1200 + i * 100} sqft | Garage: ${i % 2 === 0 ? "Yes" : "No"} | Floors: ${Math.floor(i / 3) + 1}`,
      extra: extra[i+ 9 % extra.length],
      title: Karachi[i+ 9 % Karachi.length],
      link: `/mansion${i + 28}a`,
    })),
  },
  category5: {
    label: "Peshawar", // Custom label for dropdown
    cards: [...Array(9)].map((_, i) => ({
      images: [
        `./img/peshawarimg3.jpeg`, // New image 1
        `./img/Peshawarimg1.jpeg`, // New image 2
        `./img/peshawarimg2.jpeg`, // New image 3
      ],
      description: descriptions[i+ 9 % descriptions.length],
      details: `${i + 2} Beds | ${i + 1} Baths | ${1200 + i * 100} sqft | Garage: ${i % 2 === 0 ? "Yes" : "No"} | Floors: ${Math.floor(i / 3) + 1}`,
      extra: extra[i+ 9 % extra.length],
      title: Peshawar[i+ 9 % Peshawar.length],
      link: `/luxury${i + 37}a`,
    })),
  },
};

// ImageSlider component (unchanged)
function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="relative w-full h-40 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={images[currentIndex]} alt="Card" className="w-full h-40 object-cover" />
      {isHovered && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
}

// CardSlider component (unchanged)
function CardSlider() {
  const [activeCategories, setActiveCategories] = useState({
    top: "category1",
    bottom: "category1",
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCategoryChange = (slider, category) => {
    setActiveCategories((prev) => ({ ...prev, [slider]: category }));
  };

  const scrollSlider = (sliderRef, direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "right" ? 300 : -300; // Adjust scroll amount as needed
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-start gap-11 p-6 relative">
      <h1 className="text-2xl font-medium text-gray-700 mt-5">Recent Properties for Rent</h1>
      {/* Top Slider */}
      <div className="w-full">
        {/* Dropdown buttons for the top slider */}
        <div className="w-full overflow-x-auto mb-4">
          <div className="flex gap-4 whitespace-nowrap">
            {Object.keys(sliderData).map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange("top", category)}
                className={`px-4 py-2 rounded shadow-md whitespace-nowrap "bg-transparent text-gray-600 border  border-gray-700 rounded-lg" : "bg-gray-300 text-black"   `}
              >
                {sliderData[category].label} {/* Use the custom label */}
              </button>
            ))}
          </div>
        </div>

        {/* Card slider for the top slider */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={topSliderRef}
            className="flex gap-5 flex-nowrap transition-transform duration-300 overflow-x-auto scrollbar-hide"
          >
            {sliderData[activeCategories.top].cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-72">
                <div className="border rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
                  <ImageSlider images={card.images} />
                  <div className="p-4">
                    <p className="text-lg font-bold text-gray-600">{card.description}</p>
                    <div className="flex items-center justify-start text-gray-500 text-sm mt-2">
                      <div className="flex items-center gap-1"><FaBed /> {card.details.split("|")[0].trim()}</div>
                      <div className="flex items-center gap-1"><FaShower /> {card.details.split("|")[1].trim()}</div>
                      <div className="flex items-center gap-1"><FaRulerCombined /> {card.details.split("|")[2].trim()}</div>
                    </div>
                    <p className="text-md text-gray-600 mt-2 ">{card.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{card.extra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow button for the top slider */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => scrollSlider(topSliderRef, "right")}
            className="p-2  text-red-700 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="w-full">
        <h1 className="mb-14 text-2xl font-semibold text-gray-700">Recent Properties for Sale  </h1>
        {/* Dropdown buttons for the bottom slider */}
        <div className="w-full overflow-x-auto mb-4">
          <div className="flex gap-4 whitespace-nowrap">
            {Object.keys(sliderData).map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange("bottom", category)}
                className={`px-4 py-2  shadow-md whitespace-nowrap  "bg-transparent border rounded-lg   border-gray-800 text-white" : "bg-gray-300 text-black"
                }`}
              >
                {sliderData[category].label} {/* Use the custom label */}
              </button>
            ))}
          </div>
        </div>

        {/* Card slider for the bottom slider */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={bottomSliderRef}
            className="flex gap-5 flex-nowrap transition-transform duration-300 overflow-x-auto scrollbar-hide"
          >
            {sliderData[activeCategories.bottom].cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-72">
                <div className="border rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer">
                  <ImageSlider images={card.images} />
                  <div className="p-4">
                    <p className="text-lg font-bold text-gray-600">{card.description}</p>
                    <div className="flex items-center justify-start text-gray-500 text-sm mt-2">
                      <div className="flex items-center gap-1"><FaBed /> {card.details.split("|")[0].trim()}</div>
                      <div className="flex items-center gap-1"><FaShower /> {card.details.split("|")[1].trim()}</div>
                      <div className="flex items-center gap-1"><FaRulerCombined /> {card.details.split("|")[2].trim()}</div>
                    </div>
                    <p className="text-md text-gray-600">{card.title}</p>
                    <p className="text-xs text-gray-500 mt-2">{card.extra}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow button for the bottom slider */}
        <div className="flex justify-end mt-4">
          <button
            onClick={() => scrollSlider(bottomSliderRef, "right")}
            className="p-2  text-red-600 rounded-full"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;

// CSS to hide the scrollbar (unchanged)
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

