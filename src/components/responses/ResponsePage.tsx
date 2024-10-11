import { Search, Star, ChevronDown, MessageSquare, Video, Heart, Archive, Share2, ExternalLink, Lock, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ResponsePage({spaceName} : {spaceName : string}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex justify-between items-center p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">{spaceName}</h1>
            <p className="text-sm text-gray-400">Space public URL: {`https://localhost:3000/${spaceName}`}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Video className="w-5 h-5 mr-2" />
            <span>Video credits: 2</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>Text credits: 10</span>
          </div>
          <Button variant="outline">Edit space</Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r border-gray-800">
          <nav>
            <h2 className="text-lg font-semibold mb-4">Inbox</h2>
            <ul className="space-y-2">
              <li className="bg-gray-800 rounded p-2">Text</li>
              <li className="p-2">Liked</li>
              <li className="p-2">Archived</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, email, or testimonial keywords"
                className="pl-10 pr-4 py-2 w-96 bg-gray-800 text-white rounded-md"
              />
            </div>
            <Button variant="outline">
              Options <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Testimonial Card */}
          <Card className="bg-gray-800 text-white">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">Text</span>
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mt-2 text-gray-300">hsacvquvuq</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Star className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm text-gray-400">
                <div>
                  <p>Name</p>
                  <p className="text-white">ayush</p>
                </div>
                <div>
                  <p>Submitted At</p>
                  <p className="text-white">Oct 11, 2024, 8:06:30 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}