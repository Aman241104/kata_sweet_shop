import React from 'react'
// import { Link } from 'react-router-dom'

const Card = ({ children , bg , bgbutton , bghover ,to , title , subtitle , buttontext}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2 mb-4">
              {subtitle}
            </p>
            <a
              to={to}
              className={`${bgbutton} inline-block text-white rounded-lg px-4 py-2 hover:${bghover}`}
            >
              {buttontext}
            </a>
    </div>
  )
}

export default Card