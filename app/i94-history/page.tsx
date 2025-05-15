"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Plane,
  FileText,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  Info,
  ArrowRight,
  ArrowLeft,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Sample document pages
const documentPages = [
  {
    title: "Sample Passport",
    description: "Sample passport document with annotations",
    content: (
      <div className="p-2 bg-gray-100 rounded-lg">
        <div className="text-xs text-gray-500 mb-1">US Customs and Border Protection</div>
        <div className="font-bold mb-2">UTOPIA Sample Passport</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <div className="font-semibold">Passport/Passeport</div>
            <div>Type/Type: P</div>
            <div>Country code: UTO</div>
            <div>Passport No.: 1898902 C</div>
          </div>
          <div>
            <div className="font-semibold">Personal Information</div>
            <div>Surname: ERIKSSON</div>
            <div>Given Names: ANNA MARIA</div>
            <div>Nationality: UTOPIAN</div>
            <div>Date of birth: 06 AUG 69</div>
            <div>Sex: F</div>
            <div>Personal No.: ZE 184226 B</div>
            <div>Place of birth: ZENITH</div>
          </div>
        </div>
        <div className="mt-2 text-xs">
          <div>Date of issue: 24 JUN 89</div>
          <div>Date of expiry: 23 JUN 94</div>
          <div>Authority: PASSPORT OFFICE</div>
        </div>
        <div className="mt-2 p-1 bg-white text-xs font-mono">
          POUTOERIKSSONK&lt;ANNA&lt;MARIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
          <br />
          L8989020&lt;3UT06908061F9406236ZE184226B&lt;&lt;&lt;&lt;&lt;14
        </div>
        <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div>Date of Issuance</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div>Country of Issuance</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div>Last (Family) Name/Surname</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div>First (Given) Name</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div>Machine Readable Zone</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div>Date of Expiration (YYMMDD)</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            <div>Date of Birth (YYMMDD)</div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <div>Passport Number</div>
          </div>
        </div>
        <div className="mt-2 text-xs italic">
          Note: If there are any chevrons (&lt;) in the first or last name, enter spaces in place of the chevrons.
        </div>
      </div>
    ),
  },
  {
    title: "Enter Traveler Info",
    description: "Form to enter traveler information",
    content: (
      <div className="p-2 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold">Enter Traveler Info</div>
          <div className="text-blue-600">Travel History Results</div>
        </div>
        <div className="font-semibold mb-3">Enter Your Traveler Info</div>
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">First (Given) Name:</span>
            </div>
            <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">Ra</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">Last (Family) Name/Surname:</span>
            </div>
            <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">ri</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">Birth Date:</span>
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <div className="text-xs">Month</div>
                <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">August (08)</div>
              </div>
              <div className="flex-1">
                <div className="text-xs">Day</div>
                <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">75</div>
              </div>
              <div className="flex-1">
                <div className="text-xs">Year</div>
                <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">Document Number:</span>
            </div>
            <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">V314</div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-red-500">*</span>
              <span className="font-medium">Document Country of Issuance:</span>
            </div>
            <div className="h-8 bg-white rounded border border-gray-300 px-2 flex items-center">India (IND)</div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-blue-600">
            NEXT <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="text-xs text-center mt-2 text-gray-500">Proceed to your travel history</div>
      </div>
    ),
  },
  {
    title: "Travel History Results",
    description: "View travel history and FOIA information",
    content: (
      <div className="p-2 bg-gray-100 rounded-lg">
        <div className="text-xs mb-2">
          <div>Document Number: V31</div>
          <div>Document Country of Issuance: India</div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-blue-600">Enter Traveler Info</div>
          <div className="font-bold">Travel History Results</div>
        </div>
        <div className="font-semibold mb-3">Travel History Results</div>
        <table className="w-full text-xs border-collapse mb-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-1 text-left">#</th>
              <th className="border border-gray-300 p-1 text-left">Date</th>
              <th className="border border-gray-300 p-1 text-left">Type</th>
              <th className="border border-gray-300 p-1 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-1">1</td>
              <td className="border border-gray-300 p-1">2023-02</td>
              <td className="border border-gray-300 p-1">Arrival</td>
              <td className="border border-gray-300 p-1">AUH</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-1">2</td>
              <td className="border border-gray-300 p-1">2018-03</td>
              <td className="border border-gray-300 p-1">Departure</td>
              <td className="border border-gray-300 p-1">NYC</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-1">3</td>
              <td className="border border-gray-300 p-1">11-18</td>
              <td className="border border-gray-300 p-1">Arrival</td>
              <td className="border border-gray-300 p-1">Unavailable</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-1">4</td>
              <td className="border border-gray-300 p-1">2016-04</td>
              <td className="border border-gray-300 p-1">Departure</td>
              <td className="border border-gray-300 p-1">CHI</td>
            </tr>
          </tbody>
        </table>
        <div className="text-xs space-y-2">
          <p>
            Do you have a pending Freedom of Information Act (FOIA) request for your U.S. travel history? (FOIA is a law
            that gives the public the right to request access to records from any federal agency.) learn more
          </p>
          <p>
            A FOIA request is a written or electronic request received by CBP from any individual or entity requesting
            records including databases held or believed to be held by an agency. You can find additional information
            about FOIA and FOIA requests at https://www.cbp.gov/site-policy-notices/foia/.
          </p>
          <p>
            If you submitted a formal request through the FOIA office at CBP to obtain travel history and received a
            FOIA number, you can cancel your request on this website if the information you received satisfies that
            request. You must enter your FOIA number in the space provided and select the "Request FOIA Cancellation"
            button.
          </p>
          <p>
            The FOIA case numbers begins with CBP and is followed by the year submitted and 6 alphanumeric characters
            (e.g. CBP-2014-XXXXXX). The cancel button is only located in the travel history section.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Most Recent I-94 Results",
    description: "View most recent I-94 information",
    content: (
      <div className="p-2 bg-gray-100 rounded-lg">
        <div className="text-xs mb-2">
          <div>For: RA RI</div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold">Most Recent I-94</div>
          <div className="text-xs text-gray-500">
            Get your most recent I-94 form to prove your legal visitor status in the United States
          </div>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-blue-600">Enter Traveler Info</div>
          <div className="font-bold">Most Recent I-94 Results</div>
        </div>
        <div className="font-semibold mb-3">Most Recent I-94 Results</div>
        <div className="space-y-3 text-sm">
          <div>
            <div className="font-medium">Admission (I-94) Record Number</div>
            <div>1334A3</div>
          </div>
          <div>
            <div className="font-medium">Most Recent Date of Entry:</div>
            <div>2023 February 07</div>
          </div>
          <div>
            <div className="font-medium">Class of Admission:</div>
            <div>H1B</div>
          </div>
          <div>
            <div className="font-medium">Admit Until Date:</div>
            <div>/06/20</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-medium text-sm">Details provided on the I-94 Information form:</div>
          <div className="space-y-1 text-xs mt-2">
            <div>
              <span className="font-medium">Last/Surname:</span> RA
            </div>
            <div>
              <span className="font-medium">First (Given) Name:</span> RA
            </div>
            <div>
              <span className="font-medium">Birth Date:</span> 5 August
            </div>
            <div>
              <span className="font-medium">Document Number:</span> 1494
            </div>
            <div>
              <span className="font-medium">Country of Citizenship:</span> India
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" /> PREVIOUS
          </Button>
          <Button variant="outline">GET THIS TRAVELER'S TRAVEL HISTORY</Button>
          <Button>PRINT</Button>
        </div>
      </div>
    ),
  },
]

export default function I94History() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < documentPages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const downloadAttachment = () => {
    // In a real app, this would download the actual document
    alert("Document would be downloaded in a real application")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-cyan-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-cyan-600">I-94 Travel History</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Access and verify your travel records and most recent I-94 information.
            </p>
          </div>

          <div className="mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600 text-white px-6 py-2 rounded-full shadow-md"
            >
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft size={18} />
                <span>Back to Home</span>
              </Link>
            </Button>
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
                <div className="mb-6">
                  <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="bg-white p-2">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-sm font-medium">
                          {documentPages[currentPage].title} - Page {currentPage + 1} of {documentPages.length}
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={prevPage}
                            disabled={currentPage === 0}
                            className="h-7 w-7 p-0"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={nextPage}
                            disabled={currentPage === documentPages.length - 1}
                            className="h-7 w-7 p-0"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={downloadAttachment}
                            className="h-7 w-7 p-0"
                            title="Download document"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">{documentPages[currentPage].description}</div>
                      <div className="border border-gray-200 rounded">{documentPages[currentPage].content}</div>
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
