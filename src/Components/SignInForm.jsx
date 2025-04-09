import React, { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFacebook, FaGoogle, FaEnvelope } from "react-icons/fa";

const SignInForm = ({ onClose }) => {
  const modalRef = useRef(null);
  const [phone, setPhone] = useState("");

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 px-4">
      <div
        ref={modalRef}
        className="bg-white p-6 shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[420px] xl:max-w-[380px] relative transition-all duration-300"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✖
        </button>

        {/* Large Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 text-start">
        Sign in to your account
        </h2>

        {/* Light Text */}
        <p className="text-gray-400 text-start mt-1 text-sm sm:text-base">
        Welcome back!
        </p>

        <form className="mt-4">
          {/* Phone Number Input with Flag & Country Code */}
          <div>
            <label className="block text-gray-600 text-sm sm:text-base">
              Phone Number
            </label>
            <PhoneInput
              country={"us"}
              value={phone}
              onChange={setPhone}
              className="text-black"
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              inputClass="!w-full !pl-16 !pr-4 !py-2 !mt-1 !border !rounded-lg !focus:ring-2 !focus:ring-blue-500 !focus:outline-none !text-sm sm:!text-base"
              containerClass="!w-full"
              buttonClass="!bg-white !border-none !absolute !left-3 !top-1/2 !transform !-translate-y-1/2"
              enableSearch={true}
              countryCodeEditable={false}
              placeholder="Enter phone number"
            />
          </div>

          {/* Password Input */}
          <div className="mt-3">
            <label className="block text-gray-600 text-sm sm:text-base">
             
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg  focus:outline-none text-sm sm:text-base text-black"
              placeholder="Password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg  transition text-sm sm:text-base"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="flex justify-center mt-10">
                 <button className="text-red-500 hover:underline text-sm sm:text-base">
                Forgot Password?
           </button>
                </div>

          {/* OR Separator */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm sm:text-base">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Continue with Facebook */}
          <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-900 border border-blue-600 text-white rounded-lg hover:bg-blue-600 hover:text-white transition text-sm sm:text-base">
            <FaFacebook className="mr-12 text-white text-lg sm:text-xl" /> Continue with Facebook
          </button>

          {/* Continue with Google */}
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-600 rounded-lg  transition mt-2 text-sm sm:text-base">
            <FaGoogle className="mr-14 text-red-600 text-lg sm:text-xl" /> Continue with Google
          </button>

          {/* Continue with Email */}
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 text-gray-600 rounded-lg   transition mt-2 text-sm sm:text-base">
            <FaEnvelope className="mr-14 text-orange-500 text-lg sm:text-xl" /> Continue with Email
          </button>
        </form>

        {/* Don't Have an Account? Register Now */}
        <p className="text-gray-600 text-center mt-4 text-sm sm:text-base">
          Don't have an account?{" "}
          <button className="text-blue-600 hover:underline">Register Now</button>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
