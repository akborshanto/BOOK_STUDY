import React from 'react'

const Blog = () => {
  return (
    <div>
    <section className="p-6">
    <div className="container max-w-xl mx-auto">
      <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-900 text-gray-100">
        <img src="https://source.unsplash.com/random/100x100?4" alt="" className="w-20 h-20 rounded-full bg-gray-500" />
        <blockquote className="max-w-lg text-lg italic font-medium text-center"> A LIBRARAY STORE HOUSE OF KNOWLEDGE resides on land within the Treaty and traditional territory of the Mississaugas of Scugog Island First Nation and Williams Treaties signatories of the Mississauga and Chippewa Nations..</blockquote>
        <div className="text-center text-gray-400">
          <p>Leroy Jenkins</p>
          <p>POET OF AFRICA</p>
        </div>
        <div className="flex space-x-2">
          <button type="button" aria-label="Page 1" className="w-2 h-2 rounded-full bg-gray-50"></button>
          <button type="button" aria-label="Page 2" className="w-2 h-2 rounded-full bg-gray-600"></button>
          <button type="button" aria-label="Page 3" className="w-2 h-2 rounded-full bg-gray-600"></button>
          <button type="button" aria-label="Page 4" className="w-2 h-2 rounded-full bg-gray-600"></button>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Blog
