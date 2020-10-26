import React, { useRef } from 'react'
import visa from '../assets/visa.svg'
import masterCard from '../assets/mastercard.svg'

function CreditCard({ cardType, cardNumber }) {
  const creditCardCVC = useRef();
  const cardTypeImg = cardType === 'visa' ? visa : masterCard;

  return (
    <div className="flex-between-center">
      <div className="flex-between-center py-2">
        <img className="h-10 w-12 px-2 bg-gray-200 rounded-md" src={cardTypeImg} alt={cardType} />
        <div className="pl-4">
          <p className="text-gray-800 font-semibold text-sm">Credit Card</p>
          <p className=" text-sm text-gray-600 tracking-wide">{cardNumber}</p>
        </div>
      </div>
      <input type="text" placeholder="CVC" ref={creditCardCVC} className="border-gray-200 rounded-md border-2 w-24 py-2 px-2 tracking-wide" />
    </div>
  )
}

export default CreditCard
