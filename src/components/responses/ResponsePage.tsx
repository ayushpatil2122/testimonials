'use client'

import { Search, Star, ChevronDown, MessageSquare, Video, Heart, Archive, Share2, ExternalLink, Lock, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import { FeedBack } from '@prisma/client'
import { useEffect, useState } from 'react'

export default function ResponsePage({spaceName}: {spaceName: string}) {
  const spaceId = spaceName

  const [feedBack, setFeedBack] = useState<FeedBack[]>([])

  async function getFeedBack() {
    const response = await fetch(`/api/feedback/${spaceId}`)
    const data = await response.json()
    setFeedBack(data)
  }

  useEffect(() => {
    getFeedBack()
  }, [spaceId]) 
  
  
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
            <p className="text-sm text-gray-400">
              Space public URL: 
              <Link href={`/feedback/${spaceName}`}>{`localhost:3000/feedback/${spaceName}`}</Link>
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedBack.map((feedback) => (
              <div key={feedback.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${feedback.name}`} alt={feedback.name} />
                    <AvatarFallback>{feedback.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{feedback.name}</h3>
                    <p className="text-sm text-gray-400">{feedback.email}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{feedback.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < feedback.noOfStars ? 'text-yellow-400 fill-current' : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-400">{feedback.noOfStars}/5</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost">
                      <Heart className="w-4 h-4 mr-1" />
                      Like
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Archive className="w-4 h-4 mr-1" />
                      Archive
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}