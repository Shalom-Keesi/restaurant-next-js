import React from 'react'

const SubscribeNewsletter = () => {
  return (
    <div className="bg-yellow-50 py-12 flex justify-center items-center mt-20">
      <div className="max-w-4xl w-full flex items-center">
        <div className="flex-1 text-left pr-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter to get our news</p>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <input
            type="email"
            placeholder="Your email address.."
            className="px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-r-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubscribeNewsletter