'use client'

import { useState, useEffect } from "react"
import { ArrowLeft, Mail, Lock, Apple, PenTool, FileText, Image as ImageIcon, MessageSquare, Star, ChevronRight, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import { PlaceholderImage } from "@/components/ui/placeholder-image"

export function AppFlow() {
  const [screen, setScreen] = useState<'onboarding' | 'dashboard'>('onboarding')
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [credits, setCredits] = useState(250)
  const [showFeedback, setShowFeedback] = useState(false)

  const onboardingSteps = [
    {
      title: "Welcome to Afromuse Digital",
      description: "Let's get you set up to amplify your music to the world!",
      action: "Next"
    },
    {
      title: "Tell us about yourself",
      description: "What best describes you?",
      options: ["Solo Artist", "Band", "Producer", "Manager"],
      action: "Continue"
    },
    {
      title: "Your goals",
      description: "What are you looking to achieve?",
      options: ["Grow my audience", "Release new music", "Book more gigs", "Improve my brand"],
      action: "Finish"
    }
  ]

  const handleOnboardingNext = () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setOnboardingStep(onboardingStep + 1)
    } else {
      setScreen('dashboard')
    }
  }

  useEffect(() => {
    document.body.style.backgroundImage = `url('/placeholder.svg?height=200&width=200')`
    document.body.style.backgroundRepeat = 'repeat'
    document.body.style.backgroundSize = '200px'
    document.body.style.opacity = '0.1'

    return () => {
      document.body.style.backgroundImage = 'none'
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#F5F5F5] bg-opacity-90 flex flex-col">
      {screen === 'onboarding' && (
        <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-8">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Afromuse Digital Logo"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h1 className="text-2xl font-semibold text-[#333333]">{onboardingSteps[onboardingStep].title}</h1>
              <p className="text-[#666666]">{onboardingSteps[onboardingStep].description}</p>
            </div>
            {onboardingSteps[onboardingStep].options && (
              <div className="grid grid-cols-2 gap-4">
                {onboardingSteps[onboardingStep].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="border-[#9D5465] text-[#9D5465] hover:bg-[#9D5465] hover:text-white"
                  >
                    {option}
                  </Button>
                ))}
              </div>
            )}
            <Button
              className="w-full bg-[#9D5465] hover:bg-[#8A4757] text-white"
              size="lg"
              onClick={handleOnboardingNext}
            >
              {onboardingSteps[onboardingStep].action}
            </Button>
            <Progress value={(onboardingStep + 1) * (100 / onboardingSteps.length)} className="w-full" />
          </div>
        </div>
      )}

      {screen === 'dashboard' && (
        <div className="container mx-auto p-6 space-y-8">
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#333333]">Welcome to Afromuse Digital</h1>
              <p className="text-xl text-[#666666]">Empowering African creators worldwide</p>
            </div>
            <Avatar className="h-12 w-12">
              <AvatarImage
                src="/images/avatar.png"
                alt="User"
              />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </header>

          <Tabs defaultValue="services" className="space-y-6">
            <TabsList className="grid grid-cols-4 gap-4">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="projects">My Projects</TabsTrigger>
              <TabsTrigger value="credits">Credits</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="services" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ServiceCard
                  title="Marketing Plans"
                  description="Craft effective strategies to promote your music"
                  icon={<PenTool className="h-12 w-12 text-[#9D5465]" />}
                  credits={75}
                />
                <ServiceCard
                  title="EPK Creation"
                  description="Build a professional Electronic Press Kit"
                  icon={<FileText className="h-12 w-12 text-[#9D5465]" />}
                  credits={100}
                />
                <ServiceCard
                  title="Album Artwork"
                  description="Design stunning visuals for your music"
                  icon={<ImageIcon className="h-12 w-12 text-[#9D5465]" />}
                  credits={50}
                />
                <ServiceCard
                  title="AI Marketing Advisor"
                  description="Get personalized marketing insights powered by AI"
                  icon={<MessageSquare className="h-12 w-12 text-[#9D5465]" />}
                  credits={60}
                />
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#333333]">My Projects</CardTitle>
                  <CardDescription>View and manage your ongoing projects</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center py-12 bg-[#F5F5F5] rounded-lg">
                    <p className="text-[#666666] mb-4">You have no active projects.</p>
                    <Button className="bg-[#9D5465] hover:bg-[#8A4757] text-white">
                      <PlusCircle className="mr-2 h-4 w-4" /> Start a New Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="credits">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#333333]">Credit Balance</CardTitle>
                  <CardDescription>Manage your Afromuse Digital credits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-4xl font-bold text-[#333333]">{credits} Credits</div>
                  <Button className="bg-[#9D5465] hover:bg-[#8A4757] text-white">Purchase More Credits</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#333333]">My Profile</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[#666666]">Profile settings and options coming soon!</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-[#333333]">Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <TestimonialCard
                name="Teepsoul Entertainment"
                quote="Afromuse Digital helped us reach a global audience we never thought possible!"
                image="/placeholder.svg?height=64&width=64"
                rating={5}
              />
              <TestimonialCard
                name="Aisha M."
                quote="The AI Marketing Advisor gave me insights that boosted my streams by 200%!"
                image="/placeholder.svg?height=64&width=64"
                rating={5}
              />
            </div>
          </section>

          <Button 
            className="w-full md:w-auto bg-[#9D5465] hover:bg-[#8A4757] text-white"
            onClick={() => setShowFeedback(true)}
          >
            Share Your Feedback
          </Button>

          {showFeedback && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle>Share Your Experience</CardTitle>
                  <CardDescription>Help us improve Afromuse Digital</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea 
                    className="w-full h-32 p-2 border rounded"
                    placeholder="Tell us about your experience..."
                  />
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowFeedback(false)}>Cancel</Button>
                    <Button className="bg-[#9D5465] hover:bg-[#8A4757] text-white">Submit</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ServiceCard({ title, description, icon, credits }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  credits: number;
}) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-0">
        <div className="mb-2">{icon}</div>
        <CardTitle className="text-[#333333]">{title}</CardTitle>
        <CardDescription className="text-[#666666]">{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <Button className="w-full bg-[#9D5465] hover:bg-[#8A4757] text-white">Start Now</Button>
      </CardContent>
      <div className="absolute top-2 right-2 bg-[#9D5465] text-white text-sm font-semibold py-1 px-2 rounded-full">
        {credits} Credits
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#9D5465]/5 to-[#9D5465]/20 pointer-events-none" />
    </Card>
  )
}

function TestimonialCard({ name, quote, image, rating }: {
  name: string;
  quote: string;
  image: string;
  rating: number;
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-[#333333]">{name}</h3>
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#9D5465] text-[#9D5465]" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-[#666666] italic">&ldquo;{quote}&rdquo;</p>
      </CardContent>
      <div className="h-2 bg-gradient-to-r from-[#9D5465] to-[#8A4757]" />
    </Card>
  )
}