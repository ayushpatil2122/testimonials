'use client'

import { Button } from "@/components/ui/button"
import { Video, SmileIcon, Plus } from 'lucide-react'
import CustomDialog from "./CustomDialog"
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch('/api/space');
      const data = await response.json();

      setSpaces(data);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch the data", error)
      setLoading(false)
    }
  }

  console.log(spaces)

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex-1">
            <div className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
              8 mins demo
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Here's a quick demo for you
            </h1>
            <p className="text-gray-400 mb-6">
              You will find everything you need to get started to collect testimonials
              and build a wall of love
            </p>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Dismiss
            </Button>
          </div>
          <div className="flex-1">
            <div className="relative aspect-video bg-gray-800 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <h1 className="text-3xl font-bold">Overview</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card icon={<Video className="w-6 h-6" />} title="Videos" value="0" />
            <Card icon={<SmileIcon className="w-6 h-6" />} title="Video credits" value="2" />
            <Card title="Free plan 🥁" value="2" />
          </div>
          <CustomDialog />
          <div className="flex flex-col items-center justify-center space-y-4 bg-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Your Spaces</h2>
            {loading ? (
              <p>Loading spaces...</p>
            ) : spaces.length > 0 ? (
              <ul className="w-full space-y-4">
                {spaces.map((space : any) => (
                  <li key={space.id} className="bg-gray-700 rounded-lg p-4">
                    <h3 className="text-xl font-semibold">{space.spaceName}</h3>
                    <p className="text-gray-400">{space.customMessage}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No spaces found. Create your first space!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface CardProps {
  icon?: React.ReactNode
  title: string
  value: string
}

function Card({ icon, title, value }: CardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4">
      {icon && <div className="text-gray-400">{icon}</div>}
      <div>
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <div className="text-xl font-semibold">{value}</div>
      </div>
    </div>
  )
}