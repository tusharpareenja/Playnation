import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function OrganizeTournamentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    venue: "",
    dateFrom: "",
    dateTo: "",
    organizerName: "",
    phoneNumber: "",
    bannerPhoto: null,
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, type: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, bannerPhoto: e.target.files[0] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // FormData for sending the data as multipart/form-data
    const form = new FormData()
    for (const key in formData) {
      form.append(key, formData[key])
    }

    setLoading(true)

    try {
      const response = await fetch("/api/tournament", {
        method: "POST",
        body: form,
      })

      if (!response.ok) {
        throw new Error("Failed to create tournament")
      }

      const result = await response.json()

      console.log("Tournament created:", result)
      onClose()
    } catch (error) {
      console.error("Error:", error)
      alert("Error creating tournament")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gradient-to-br from-blue-900 to-teal-800 p-6 rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] aspect-square relative overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-teal-300 transition duration-300"
            >
              <X size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center text-white">Organize Tournament</h2>
            <form onSubmit={handleSubmit} className="space-y-3 h-[calc(100%-3rem)] overflow-y-auto pr-2 scrollbar-hide">
              {/* Fields */}
              <div>
                <Label htmlFor="name" className="text-xs text-white">Tournament Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
              </div>
              <div>
                <Label htmlFor="description" className="text-xs text-white">Description</Label>
                <Textarea id="description" name="description" value={formData.description} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-16 resize-none" required />
              </div>
              <div>
                <Label htmlFor="type" className="text-xs text-white">Type</Label>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hackathon">Hackathon</SelectItem>
                    <SelectItem value="session">Session</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="venue" className="text-xs text-white">Venue</Label>
                <Input id="venue" name="venue" value={formData.venue} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
              </div>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="dateFrom" className="text-xs text-white">From</Label>
                  <Input id="dateFrom" name="dateFrom" type="date" value={formData.dateFrom} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
                </div>
                <div className="flex-1">
                  <Label htmlFor="dateTo" className="text-xs text-white">To</Label>
                  <Input id="dateTo" name="dateTo" type="date" value={formData.dateTo} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
                </div>
              </div>
              <div>
                <Label htmlFor="organizerName" className="text-xs text-white">Organizer Name</Label>
                <Input id="organizerName" name="organizerName" value={formData.organizerName} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
              </div>
              <div>
                <Label htmlFor="phoneNumber" className="text-xs text-white">Phone Number</Label>
                <Input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleInputChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" required />
              </div>
              <div>
                <Label htmlFor="bannerPhoto" className="text-xs text-white">Banner Photo</Label>
                <Input id="bannerPhoto" name="bannerPhoto" type="file" onChange={handleFileChange} className="bg-blue-800 text-white border-blue-600 focus:border-teal-400 text-xs h-8" accept="image/*" />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition duration-300 text-xs h-8"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Tournament"}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
