"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Users, Flame, Utensils, Wine, ArrowUpIcon, Menu } from "lucide-react"

export default function BBQRSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "0",
    dietary: "",
    message: "",
    bringDish: false,
  })

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("RSVP submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with gradient and overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/gradient-bg.png')`,
        }}
      />
      <div className="fixed inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-40">
          <div className="flex items-center">
            <img src="/logo.png" alt="The Final Shot Events" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="https://www.thefinalshot.co/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a
              href="https://www.thefinalshot.co/our-events"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Events
            </a>
            <a
              href="https://www.thefinalshot.co/book-with-us"
              className="text-white hover:text-cyan-400 transition-colors"
            >
              Bookings
            </a>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              href="https://www.thefinalshot.co/contact"
              asChild
            >
              <a href="https://www.thefinalshot.co/contact">Enquire Now</a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden relative">
            <Button variant="ghost" className="text-white" onClick={toggleMobileMenu}>
              <Menu className="w-6 h-6" />
            </Button>

            {/* Mobile Menu (conditionally rendered) */}
            {isMobileMenuOpen && (
              <div className="absolute top-full right-0 bg-black/90 backdrop-blur-md rounded-md shadow-lg p-4 mt-2 w-64 z-50 border border-white/20">
                <nav className="flex flex-col space-y-3">
                  <a
                    href="https://www.thefinalshot.co/about"
                    className="text-white hover:text-cyan-400 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href="https://www.thefinalshot.co/our-events"
                    className="text-white hover:text-cyan-400 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </a>
                  <a
                    href="https://www.thefinalshot.co/book-with-us"
                    className="text-white hover:text-cyan-400 transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Bookings
                  </a>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent w-full"
                    asChild
                  >
                    <a href="https://www.thefinalshot.co/contact" className="block py-2">
                      Enquire Now
                    </a>
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Header Caption */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="absolute top-0 right-6 flex items-center gap-2 text-gray-400 text-sm">
            <ArrowUpIcon className="w-4 h-4 rotate-45" />
            <span className="hidden md:inline">
              This header isn't for you, unless you want to stalk the old business
            </span>
            <span className="md:hidden">If you wanna stalk the old business</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            >
              <Flame className="w-4 h-4 mr-2" />
              Summer '25 Cookouts
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Yes, I Vibe-Coded a Landing Page for My BBQ
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Because apparently I can't just text "BBQ at mine Sunday" like a normal person
            </p>
          </div>

          {/* Event Details Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-white/10">
              <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl text-white">
                <Flame className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                Philbeach BBQs
              </CardTitle>
              <CardDescription className="text-base md:text-lg text-gray-300">
                {"Cookouts, every other Sunday. We've got music and good food/drink, but bring your own too!"}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <CalendarDays className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">Sunday</p>
                      <p className="text-gray-300">July 6th </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">6:00 PM - Late</p>
                      <p className="text-gray-300">Not too late, I like my bed </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">My Backyard</p>
                      <p className="text-gray-300">Address sent with confirmation</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">Bring your friends </p>
                      <p className="text-gray-300">The more the merrier </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Utensils className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">{"Bring some food"}</p>
                      <p className="text-gray-300">{"We'll cook it for you"} </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Wine className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-semibold text-white text-lg">Bring your own booze </p>
                      <p className="text-gray-300">{"We probably don't have enough"} </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Humorous Copy Section */}
          <Card className="bg-cyan-500/10 backdrop-blur-md border-cyan-500/30 shadow-xl">
            <CardContent className="pt-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">Why This Form Exists</h3>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Look, I know what you're thinking. "Cocky twat really created a whole RSVP system for a backyard BBQ?"
                  And you're absolutely right. The ole events business is dormant, but I'm still paying for the domain:
                  best believe I'm making the most of it.
                </p>
                <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  {
                    "The real answer: I did too much gardening (and my rent’s too expensive) not to use my garden for BBQs. This webpage (built in 5 minutes) gives me no excuse but to host!"
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* RSVP Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl text-white">RSVP</CardTitle>
              <CardDescription className="text-gray-300 text-lg">
                Please fill this out so I can pretend I'm organised
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="What should I call you?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="What's an RSVP form without email confirmation?"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attendance" className="text-white">
                    Will you be joining us? *
                  </Label>
                  <Select
                    value={formData.attendance}
                    onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Let me know..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">I'll be there!</SelectItem>
                      <SelectItem value="maybe">Should be (I'll message you)</SelectItem>
                      <SelectItem value="no">Can't make it this time 😢</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-white">
                    How many guests are you bringing?
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => setFormData({ ...formData, guests: value })}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Just you or bringing the crew?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Just me!</SelectItem>
                      <SelectItem value="1">+1 (bringing a partner/buddy)</SelectItem>
                      <SelectItem value="2">+2 (small entourage)</SelectItem>
                      <SelectItem value="3">+3 or more (you're popular)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietary" className="text-white">
                    Any dietary restrictions?
                  </Label>
                  <Input
                    id="dietary"
                    placeholder="Vegetarian, allergies, or 'I only eat organic everything'"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Anything else I should know?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Special requests, song recommendations, or just say hi!"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-4 text-base md:text-lg font-semibold shadow-lg"
                >
                  <span className="hidden sm:inline">Send My RSVP (And Judge Me Silently)</span>
                  <span className="sm:hidden">Send My RSVP</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="text-center text-gray-400 pb-8">
            <p className="text-sm">
              Questions? Just text me like a normal person. I promise I won't make you fill out a form for that too.
            </p>
            <p className="text-xs mt-2 opacity-75">
              Powered by overthinking and a genuine love for good food &amp; friends
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
