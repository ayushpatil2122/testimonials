import { ThumbsUp } from 'lucide-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ThumbsUp className="h-6 w-6 text-purple-500" />
          <span className="text-white text-lg font-semibold">Testimonial</span>
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" className="text-white border-purple-500 hover:bg-purple-500 hover:text-white">
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton 
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}