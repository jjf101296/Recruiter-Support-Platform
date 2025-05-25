import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Search, FileCheck, Map, StampIcon as Passport, FileText, Plane, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Coffee } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-black">Welcome to</span>
              <br />
              <span className="text-blue-600">Recruiter Support Platform</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of tools designed to help recruiters find the right candidates faster.
            </h2>
            <div className="mt-6">
              <p className="text-gray-500">
                Created by{" "}
                <Link
                  href="https://www.linkedin.com/in/john-francis-eeemba/"
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  John Francis
                </Link>
                <span className="block text-sm mt-1">
                  Human Resource Specialist | Public Speaker | Social Worker | Influencer | Talent Acquisition &
                  Relationship Builder
                </span>
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-10 text-indigo-600">Available Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-blue-500 h-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <Search className="h-5 w-5" />
                    AI Boolean Search Generator
                  </CardTitle>
                  <CardDescription>Create optimized search strings for candidate sourcing</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Extract key skills, technologies, and concepts from job descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Generate Boolean strings with proper operators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>Add synonyms and related terms automatically</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
                  >
                    <Link href="/boolean-search" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-green-500 h-full">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <FileCheck className="h-5 w-5" />
                    AI ATS Checker
                  </CardTitle>
                  <CardDescription>Optimize resumes for Applicant Tracking Systems</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Compare resumes against job descriptions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Highlight matching and missing keywords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>Get AI suggestions for resume improvements</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 group"
                  >
                    <Link href="/ats-checker" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-purple-500 h-full">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <Map className="h-5 w-5" />
                    US Map
                  </CardTitle>
                  <CardDescription>Interactive map of all 50 US states by time zone</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>View states organized by time zone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Access detailed state information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span>Learn about major companies and industries</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 group"
                  >
                    <Link href="/us-map" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-amber-500 h-full">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Passport className="h-5 w-5" />
                    US VISA Types
                  </CardTitle>
                  <CardDescription>Comprehensive guide to US visa categories</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Learn about different visa categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Understand eligibility requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Compare benefits and limitations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 group"
                  >
                    <Link href="/visa-types" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-red-500 h-full">
                <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <FileText className="h-5 w-5" />
                    US Tax Terms
                  </CardTitle>
                  <CardDescription>Essential tax information for recruiters and job seekers</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Compare W-2, 1099, and C2C employment types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>View state income tax rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>Understand tax forms and terminology</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 group"
                  >
                    <Link href="/tax-terms" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-t-4 border-cyan-500 h-full">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-cyan-100">
                  <CardTitle className="flex items-center gap-2 text-cyan-700">
                    <Plane className="h-5 w-5" />
                    I94/Travel History
                  </CardTitle>
                  <CardDescription>Access and verify travel records and I-94 information</CardDescription>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Learn how to access official I-94 records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Understand the importance of travel history</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-1">•</span>
                      <span>Get step-by-step guidance for verification</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 group"
                  >
                    <Link href="/i94-history" className="flex items-center justify-center gap-2">
                      Access Tool <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center py-4 border-t border-gray-200">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-bold">Enjoying using Recruiter Support Platform?</span>
            <br />
            Consider supporting us with our buymeacoffee link below! Thank You!
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-none shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Coffee className="h-3 w-3 mr-1" />
                Buy me a coffee
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-gray-800">
                  Support Recruiter Support Platform
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col items-center space-y-4 p-4">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Scan the QR code below to support us via PhonePe</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-lg border">
                  <img
                    src="/images/phonepe-qr.jpg"
                    alt="PhonePe QR Code for J John Francis"
                    className="w-80 h-auto mx-auto"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Thank you for your support! 🙏</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>

      <Footer />
    </div>
  )
}
