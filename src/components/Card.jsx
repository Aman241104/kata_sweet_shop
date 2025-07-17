import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ children, bg, bgbutton, bghover, to, title, subtitle, buttontext, url }) => {
  return (
    <div className={`${bg} relative overflow-hidden p-6 rounded-lg shadow-md`}>
      {/* Background Image on Right */}
      <div
        className="absolute top-10 left-65 h-full w-1/2 bg-cover bg-right opacity-50 z-0"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 mb-4">
          {subtitle}
        </p>
        <Link
          to={to}
          className={`inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600`}
        >
          {buttontext}
        </Link>
      </div>
    </div>
  )
}

export default Card
