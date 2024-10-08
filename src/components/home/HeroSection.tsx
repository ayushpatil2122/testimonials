import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
   <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Get testimonials from your customers with ease
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
          Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text
          and video testimonials from your customers with no need for a developer or website hosting.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link
            href="/dashboard"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Try FREE now
          </Link>
          <Link
            href="/talk-to-us"
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 flex items-center"
          >
            Talk to us
          </Link>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          Get started with free credits on us.{' '}
          <Link href="/pricing" className="text-indigo-400 hover:text-indigo-300 underline">
            See our pricing →
          </Link>
        </p>
        <div className="relative">
          <p className="text-gray-400 text-sm">
            Our customer <span className="font-semibold">Chris Lema</span>
          </p>
          <svg
            className="absolute -bottom-8 right-1/4 text-indigo-500 w-16 h-16 transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}


