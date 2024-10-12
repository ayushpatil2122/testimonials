'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Video, PenLine, Star, X } from "lucide-react"
import { TestimonialSpace } from '@prisma/client'

export default function Component({id} : {id : string}) {
  const [space, setSpace] = useState<TestimonialSpace | null>(null);
  const [noOfStars, setNoOfStars] = useState(0);
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const TestimonialSpaceId = id;

  console.log(noOfStars, content, name, email, TestimonialSpaceId);

  async function fetchSpace(){
    const response = await fetch(`/api/space/${TestimonialSpaceId}`);
    const data= await response.json();
    setSpace(data);
  }

  async function handelSubmit(){
    const response = await fetch('/api/feedback', {
      method : 'POST',
      headers : {'Content-Type' : 'application/json'},
      body : JSON.stringify({noOfStars : noOfStars, content : content, name : name, email : email, TestimonialSpaceId : TestimonialSpaceId})
    })

    if(response.ok){
      console.log("feedback submitted successfully");
    } else {
      console.log("something went wrong");
    }
  }


  useEffect(function(){
    fetchSpace();
  }, [id])


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md space-y-8 p-8 bg-gray-800 text-white">
        <div className="flex justify-center">
          <Image
            src=""
            alt="Avatar"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{space?.spaceName}</h1>
          <p className="text-gray-400">{space?.customMessage}</p>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-2">
            <h2 className="text-lg font-semibold text-blue-400">QUESTION</h2>
            <p className="text-gray-400">{space?.questions}</p>
          </div>
          <div className="h-4">
            <span className="text-4xl text-blue-400"></span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
            <Video className="mr-2 h-4 w-4" />
            Record a video
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1 bg-transparent text-white border-white hover:bg-gray-700">
                <PenLine className="mr-2 h-4 w-4" />
                Send in text
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
              <DialogHeader className="flex justify-between items-start">
                <div>
                  <DialogTitle>Write text testimonial to</DialogTitle>
                  <Image
                    src="/placeholder.svg"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full mt-2"
                  />
                </div>
                <Button variant="ghost" className="p-1 text-white hover:bg-gray-700">
                  <X className="h-4 w-4" />
                </Button>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <h3 className="font-semibold mb-2">Question</h3>
                  <div className="h-1 w-12 bg-blue-600"></div>
                </div>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 cursor-pointer ${star <= noOfStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                      onClick={() => setNoOfStars(star)}
                    />
                  ))}
                </div>
                <Textarea placeholder="Write your testimonial here..." className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" onChange={(e) => setContent(e.target.value)}/>
                {/* <div>
                  <Label htmlFor="image" className="text-white">Attach Image(s)</Label>
                  <Input id="image" type="file" className="bg-gray-700 border-gray-600 text-white" />
                </div> */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Your Name</Label>
                    <Input id="name" placeholder="John Doe" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Your Email</Label>
                    <Input id="email" placeholder="john@example.com" type="email" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                </div>
                {/* <div>
                  <Label className="text-white">Upload Your Photo</Label>
                  <Input type="file" className="bg-gray-700 border-gray-600 text-white mt-2" />
                </div> */}
                <div className="flex items-center space-x-2">
                  <Checkbox id="permission" className="border-gray-600" />
                  <Label htmlFor="permission" className="text-sm text-gray-300">
                    I give permission to use this testimonial across social channels and other marketing efforts
                  </Label>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" className="bg-transparent text-white border-white hover:bg-gray-700">Cancel</Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handelSubmit}>Send</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </div>
  )
}