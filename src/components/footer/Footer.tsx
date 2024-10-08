import Image from 'next/image'
import Link from 'next/link'
import { ThumbsUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <ThumbsUp className="w-8 h-8 text-indigo-500 mr-2" />
              <h2 className="text-2xl font-bold text-white">Testimonial</h2>
            </div>
            <p className="text-sm mb-4">
              The easiest solution to getting text and video testimonials from your customers
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {['Our Wall of Love', 'Embed widgets', 'Chrome extension', 'Slack app', 'Hopin app', 'Pricing', 'Features', 'Integrations', 'Help center', 'Product demo', 'Free testimonial tool', 'Status page'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {['Our resources', 'Tutorials', 'Customer stories', 'Join affiliate program', 'Privacy policy', 'Terms of Service', 'Cookie policy', 'DPA (GDPR)', 'Contact us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CUSTOMERS</h3>
            <ul className="space-y-2">
              {['Agencies', 'B2B companies', 'Course creators', 'eCommerce', 'Consumer apps'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}