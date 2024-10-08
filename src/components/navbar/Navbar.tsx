import { ThumbsUp } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center space-x-2">
          <ThumbsUp className="h-6 w-6 text-purple-500" />
          <span className="text-white text-lg font-semibold">Testimonial</span>
        </div>
      </div>
    </nav>
  )
}
