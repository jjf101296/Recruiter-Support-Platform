import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolsNavigation } from "@/components/tools-navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Plane, FileText, AlertCircle, CheckCircle, HelpCircle, Info, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function I94History() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              I-94 Travel History
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Access and verify your travel records and most recent I-94 information.
            </p>
          </div>

          <div className="mb-8">
            <ToolsNavigation showHomeLink={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg border-t-4 border-cyan-500">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-2">
                  <Plane className="h-5 w-5" />
                  Official I-94 Website
                </CardTitle>
                <CardDescription className="text-white/80">
                  Access your official I-94 record and travel history
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="relative w-full max-w-md h-48 rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=192&width=400"
                        alt="I-94 Website Screenshot"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity">
                        <Badge className="bg-white text-cyan-600">Preview Screenshot</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <Button
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-md"
                    asChild
                  >
                    <a
                      href="https://i94.cbp.dhs.gov/search/recent-search"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Access Official I-94 Website
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition-colors">
                    <FileText className="text-cyan-600 h-5 w-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">What is the I-94 Record?</h3>
                      <p className="text-sm text-gray-600">
                        The I-94 is a record of your arrivals and departures from the United States. It's crucial for
                        verifying your immigration status, visa compliance, and legal stay duration.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-amber-50 hover:bg-amber-100 transition-colors">
                    <AlertCircle className="text-amber-500 h-5 w-5 mt-1" />
                    <div>
                      <h3 className="font-semibold">Why It's Important</h3>
                      <p className="text-sm text-gray-600">
                        Your I-94 record is essential for employment verification, visa extensions, status adjustments,
                        and proving lawful presence in the United States.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 flex justify-end">
                <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 cursor-pointer">
                  <Info className="h-3 w-3 mr-1" />
                  Recruitment Implications
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Badge>
              </CardFooter>
            </Card>

            <Card className="shadow-lg border-t-4 border-blue-500">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <FileText className="h-5 w-5" />
                  How to Access Your I-94 Record
                </CardTitle>
                <CardDescription>Step-by-step guide to retrieving your travel history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit the Official Website</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Go to the U.S. Customs and Border Protection I-94 website at
                        <a
                          href="https://i94.cbp.dhs.gov/search/recent-search"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 ml-1"
                        >
                          https://i94.cbp.dhs.gov
                        </a>
                      </p>
                      <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="text-green-500 h-4 w-4" />
                          <span>Use a secure and private internet connection</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">Select "Get Most Recent I-94"</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        Click on the "Get Most Recent I-94" button on the homepage
                      </p>
                      <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-2 text-sm">
                          <HelpCircle className="text-amber-500 h-4 w-4" />
                          <span>For travel history, select "View Travel History" instead</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Enter Your Information</h3>
                      <p className="text-sm text-gray-600 mb-2">Provide the required information:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                        <li>Full name (as it appears on your passport)</li>
                        <li>Date of birth</li>
                        <li>Passport number</li>
                        <li>Passport country of issuance</li>
                        <li>Most recent date of entry</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold shadow-md">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold">View and Download Your Record</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        After submitting your information, you'll be able to:
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                        <li>View your most recent I-94</li>
                        <li>Check your travel history</li>
                        <li>Print or save a copy for your records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card className="shadow-lg border-t-4 border-cyan-500">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-cyan-100">
                <CardTitle className="flex items-center gap-2 text-cyan-700">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-700">What if my information is incorrect?</h3>
                    <p className="text-sm text-gray-600">
                      If you find errors in your I-94 record, visit a CBP Deferred Inspection Site or port of entry to
                      have it corrected. Bring your passport and any supporting documents.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-700">How far back does the travel history go?</h3>
                    <p className="text-sm text-gray-600">
                      The I-94 website typically shows your travel history for the past 5 years.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-700">Can I access someone else's I-94?</h3>
                    <p className="text-sm text-gray-600">
                      You can access I-94 records for your minor children, but not for other adults.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-white shadow hover:shadow-md transition-all duration-300 border-l-4 border-cyan-500">
                    <h3 className="font-semibold text-cyan-700">What if I can't find my I-94 online?</h3>
                    <p className="text-sm text-gray-600">
                      If you entered before April 2013 or your record isn't available online, contact CBP through their
                      INFO Center or visit a Deferred Inspection Site.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
