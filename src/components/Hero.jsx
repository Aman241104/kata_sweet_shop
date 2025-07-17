import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title = "default", subtitle = "default" }) => {
  return (
    <section className="relative mt w-full">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-photo/view-indian-dessert-assortment_23-2149312346.jpg)",

        }}
      />

      {/* Gradient Overlay */}
      <div className="bg-gradient-to-b from-black-600/10 via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          
          {/* Announcement Banner */}
          <div className="flex justify-center">
            <Link
              className="group inline-flex items-center bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-hidden focus:bg-white/10"
              to="/sweets"
            >
              <p className="me-2 text-white text-sm p-2">All the sweets that you want</p>
            </Link>
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-white/70">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
