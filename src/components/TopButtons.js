import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
        {
          id:1,
          title:"Mailsi",
        },
        {
          id: 2,
          title: "Jhang",
        },
        {
          id:3,
          title: "Multan",
        },
        {
          id:4,
          title: "Lahore"
        },
        {
          id:5,
          title: "Najaf"
        }
      ]
  return (
    <div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
        <button key={city.id}
          className='text-white text-lg font-medium'
          onClick={() => setQuery({q: city.title})}>
          {city.title}</button>
    ))}
    </div>
  )
}

export default TopButtons