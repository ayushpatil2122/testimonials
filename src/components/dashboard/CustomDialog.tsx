"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { Button } from "@/components/ui/button"

  
export default function CustomDialog() {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [spaceName, setSpaceName] = useState<string>("");
    const [customMessage, setCustomMessage] = useState<string>("");
    const [spaceLogo, setSpaceLogo] = useState<string>("");
    const [questions, setQustions] = useState<string>("");

    

    async function putSpaceIntoDb() {
        const response = await fetch('/api/space', {
          method  : 'POST',
          headers : {'Content-Type' : 'application-json'},
          body    :  JSON.stringify({spaceName : spaceName, customMessage : customMessage, questions : questions, spaceLogo : spaceLogo})
        })
    
        if(response.ok){
          console.log("data added successfully");
        } else {
          console.log('Something Went Wrong')
        }
    }
    

  return (
    <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Spaces</h2>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">Create Space</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white border border-gray-700">
                  <DialogHeader>
                    <DialogTitle>Create Space</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Create a new space for your project.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        onChange={function(e) {
                          setSpaceName(e.target.value)
                        }}
                        id="name"
                        placeholder="Space name"
                        className="col-span-3 bg-gray-700 text-white border-gray-600"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        Description
                      </Label>
                      <Input
                        onChange={function(e) {
                          setCustomMessage(e.target.value)
                        }}
                        id="description"
                        placeholder="Space description"
                        className="col-span-3 bg-gray-700 text-white border-gray-600"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        logo img url
                      </Label>
                      <Input
                        onChange={function(e){
                          setSpaceLogo(e.target.value)
                        }}
                        id="description"
                        placeholder="give a logo url"
                        className="col-span-3 bg-gray-700 text-white border-gray-600"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">
                        question
                      </Label>
                      <Input
                        onChange={function(e){
                          setQustions(e.target.value)
                        }}
                        id="description"
                        placeholder="add question"
                        className="col-span-3 bg-gray-700 text-white border-gray-600"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={function(){
                      setIsDialogOpen(true);
                      putSpaceIntoDb();
                    }}>Create Space</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
    </div>
  )
}
