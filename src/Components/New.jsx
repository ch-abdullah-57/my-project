// components/ModalCard.jsx
const New = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6 ">
        {/* Close Button (top-left, gray color) */}
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
      
        
        {/* Logo Image (centered) */}
        <div className="flex justify-center ">
          <img 
            src="./img/comingSoon.png" // Replace with your logo path
            alt="Logo" 
            className="max-w-1xl h-60 object-contain"
          />
        </div>
             {/* Heading (centered) */}
             <h2 className="text-2xl tracking-widest  font-bold text-center text-gray-800 ">COMING SOON  </h2>
      </div>
    </div>
  );
};

export default New;