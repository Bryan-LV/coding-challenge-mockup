import React, { useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/rc-slider.css'

function Pricing({ hourlyMin, hourlyMax, fixed }) {
  const [pricingStructure, setPricingStructure] = useState('hourly');
  const [hourlyRate, setHourlyRate] = useState(Math.floor((hourlyMin + hourlyMax) / 2));

  const handlePricingSelection = (selected) => {
    if (selected !== 'hourly' && selected !== 'fixed') {
      return;
    } else if (selected === pricingStructure) {
      return;
    }
    else {
      setPricingStructure(selected);
    }
  }

  return (
    <div className="rounded-lg max-w-sm bg-white p-6 mt-4 mx-auto">
      <div className="">
        <h2 className="heading pb-2">Set up your pricing</h2>
        <p className="text-gray-600 text-sm w-4/5">Please set up your hourly or fixed rate so that the client is aware of your pricing.</p>
      </div>

      <div className="flex-between-start my-6">
        <div className={`hollow-button hover:bg-primary-100 ${pricingStructure === 'hourly' && 'hollow-button-highlight'}`} onClick={() => handlePricingSelection('hourly')}>
          <div className="pr-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h4 className="font-semibold text-gray-800">Hourly</h4>
        </div>
        <div className={`hollow-button hover:bg-primary-100 ${pricingStructure === 'fixed' && 'hollow-button-highlight'}`} onClick={() => handlePricingSelection('fixed')}>
          <div className="pr-2">
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>
          <h4 className="font-semibold text-gray-800">Fixed</h4>
        </div>
      </div>

      <div className="relative">
        <span className="inline-block text-xs text-gray-600 absolute top-0">$</span>
        {pricingStructure === 'hourly' && <p className="inline-block px-3 text-sm text-gray-600"><span className="text-xl text-gray-800 tracking-wide">{hourlyRate}</span> / hour</p>}
        {pricingStructure === 'fixed' && <p className="inline-block px-3 text-sm text-gray-600"><span className="text-xl text-gray-800 tracking-wide">{fixed}</span> / fixed</p>}
      </div>
      {
        pricingStructure === 'hourly' && (
          <div>
            <Slider defaultValue={hourlyRate} min={hourlyMin} max={hourlyMax} step={10} onAfterChange={e => setHourlyRate(e)} />
            <div className="flex-between-center">
              <p className="text-gray-500 text-sm tracking-wide font-semibold">${hourlyMin}</p>
              <p className="text-gray-500 text-sm tracking-wide font-semibold">${hourlyMax}</p>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Pricing
