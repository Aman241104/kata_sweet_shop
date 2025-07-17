import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllSweeets = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/sweets"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >More Sweets Here</Link
      >
    </section>
  )
}

export default ViewAllSweeets