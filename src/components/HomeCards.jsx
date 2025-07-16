import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

const HomeCrads = () => {
  return (
    <div>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg='bg-gray-100' bgbutton='bg-black' bghover='bg-gray-700' to='/sweets' title='Want Something Sweet' subtitle='Browse our collection of sweet treats' buttontext='Browse Sweet' />
        <Card bg='bg-indigo-100' bgbutton='bg-indigo-500' bghover='bg-indigo-600' to='/add-sweets' title='For Employers' subtitle='List your job to find the perfect developer for the role' buttontext='Add Job' />
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeCrads