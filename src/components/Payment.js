import { useRef } from 'react'
import CreditCard from './CreditCard';

const creditCards = [
  {
    cardType: 'visa',
    cardNumber: '2222 xxxx xxxx 4432',
    id: 1
  },
  {
    cardType: 'mastercard',
    cardNumber: '4858 xxxx xxxx 9675',
    id: 2
  }
]

function Payment() {
  const emailInput = useRef();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // proceed to payment logic
  }

  return (
    <div className="rounded-lg bg-white p-6 w-full flex-1 max-w-screen-md mx-auto mt-4 md:mr-4 md:mt-0">
      <form onSubmit={handleEmailSubmit}>
        <div className="">
          <h2 className="heading pb-2">Upgrade your plan</h2>
          <p className="text-sm text-gray-600 max-w-md">Please make the payment to start enjoying all the features of our premium plan as soon as possible.</p>
        </div>

        <div className="flex-between-center hollow-button hollow-button-highlight my-6 px-2">
          <div className="flex-center">
            <svg className="w-10 h-10 md:w-16 md:h-16" fill="#2a61ff" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <div className="md:pl-4">
              <h4 className="font-semibold text-gray-800">Small Business</h4>
              <h6 className="text-xs uppercase font-medium tracking-wider text-primary-800">Change plan</h6>
            </div>
          </div>
          <div className="">
            <h4 className="text-gray-500 relative text-center">
              <span className="absolute top-0 left-0">$</span>
              <span className="text-semibold text-gray-800 text-xl md:text-2xl lg:text-3xl tracking-wide pl-4 pr-2">8,350</span>
            / year
          </h4>
          </div>
        </div>

        <h4 className="font-semibold text-gray-800">Payment details</h4>
        {creditCards.map(card => (
          <CreditCard key={card.id} cardType={card.cardType} cardNumber={card.cardNumber} />
        ))}
        <h4 className="uppercase text-primary-800 font-semibold text-sm py-4 cursor-pointer">Add payment method</h4>

        <input type="text" ref={emailInput} placeholder="Email address" className="border-2 border-gray-200 rounded-md p-4 w-full" />
        <button className="bg-primary-900 rounded-md w-full p-6 text-gray-200 mt-6 hover:bg-primary-800">
          Proceed to payment
          <svg className="w-5 h-5 mx-1 inline-block text-gray-200" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </form>

    </div>
  )
}

export default Payment
