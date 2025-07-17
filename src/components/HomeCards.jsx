import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

const HomeCrads = () => {
  return (
    <div>
    <section class="py-4">
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card bg='bg-gray-100' to='/sweets' title='Want Something Sweet' subtitle='Browse our collection of sweet treats' buttontext='Browse Sweets' url="https://static.vecteezy.com/system/resources/previews/042/349/627/large_2x/ai-generated-3d-rendering-of-a-indian-traditional-sweets-in-a-plate-on-transparent-background-ai-generated-free-png.png"/>
        <Card bg='bg-indigo-100' to='/add-sweets' title='Want to add More sweet' subtitle='List your sweets to make some ones day.' buttontext='Add Sweets' url="https://static.vecteezy.com/system/resources/previews/051/338/395/large_2x/rasgulla-indian-sweet-balls-garnished-with-nuts-isolated-on-a-transparent-background-free-png.png"/>
        </div>
      </div>
    </section>
    </div>
  )
}

export default HomeCrads