import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">FoodHouse.</h2>
          <p className="text-gray-400 mb-4">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white">
              {/* <i className="fab fa-facebook"></i> */}
              <ImFacebook2 />

            </a>
            <a href="#" className="text-white hover:text-white">
              {/* <i className="fab fa-twitter"></i> */}
              <FaTwitterSquare />

            </a>
            <a href="#" className="text-white hover:text-white w-75">
              {/* <i className="fab fa-linkedin"></i> */}
              <FaLinkedin />

            </a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Company</h2>
          <p className="text-gray-400">Career</p>
          <p className="text-gray-400">About Us</p>
          <p className="text-gray-400">Blog</p>
          <p className="text-gray-400">Press Info</p>
          <p className="text-gray-400">Features</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Fudo</h2>
          <p className="text-gray-400">Why Fudo</p>
          <p className="text-gray-400">How it Works</p>
          <p className="text-gray-400">Why Choose Us</p>
          <p className="text-gray-400">Client Stories</p>
          <p className="text-gray-400">Gallery</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Menu</h2>
          <p className="text-gray-400">Breakfast</p>
          <p className="text-gray-400">Lunch</p>
          <p className="text-gray-400">Dinner</p>
          <p className="text-gray-400">Fast Foods</p>
          <p className="text-gray-400">Drinks</p>
        </div>
      </div>
      <div className="bg-yellow-500 text-black py-4 mt-12 text-center">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white">
          <span>Copyright 2021 Besnik. All Right Reserved</span>
          <div className="space-x-4">
            <a href="#" className="text-white">Terms</a>
            <a href="#" className="text-white">Privacy</a>
            <a href="#" className="ttext-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;