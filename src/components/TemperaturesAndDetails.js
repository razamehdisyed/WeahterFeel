import React from 'react'
import * as Unicons from '@iconscout/react-unicons';


function TemperaturesAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Cloudy</p>
        </div>

        <div className='flex flex-row items-center justify-between text-white py-3'>
            <img src='http://openweathermap.org/img/wn/01d@2x.png' alt='' className='w-20' />
            <p className='text-5xl'>34°</p>
            <div className='flex flex-col space-y-2'>
            
                <div className='flex items-center justify-center font-light text-sm'>
                    <Unicons.UilTemperature size={18} className='mr-1'/>
                    Real Feel:
                    <span className='font-medium ml-1'>32°</span>
                </div>

                <div className='flex items-center justify-center font-light text-sm'>
                    <Unicons.UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>65%</span>
                </div>

                <div className='flex items-center justify-center font-light text-sm'>
                    <Unicons.UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>65 km/hr</span>
                </div>
            </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
            <Unicons.UilSun />
            <p className='font-light'>Rise:
                <span className='font-medium ml-1   '>06:30 AM</span>
            </p>
            <p className='font-light'>|</p>

            <Unicons.UilSunset />
            <p className='font-light'>Set:
                <span className='font-medium ml-1   '>06:00 PM</span>
            </p>
            <p className='font-light'>|</p>
            <Unicons.UilSun />
            <p className='font-light'>High:
                <span className='font-medium ml-1   '>39°</span>
            </p>
            <p className='font-light'>|</p>
            <Unicons.UilSun />
            <p className='font-light'>Low:
                <span className='font-medium ml-1   '>26°</span>
            </p>
        </div>

    </div>
  )
}

export default TemperaturesAndDetails