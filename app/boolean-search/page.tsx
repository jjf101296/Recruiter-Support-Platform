"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolsNavigation } from "@/components/tools-navigation"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  FileText,
  Search,
  Lightbulb,
  Edit,
  Copy,
  Download,
  CheckCircle,
  Code,
  Zap,
  Sparkles,
  Users,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const mockKeywords = {
  skills: [
    { name: "communication", description: "Ability to convey information effectively" },
    { name: "troubleshooting", description: "Identifying and resolving issues" },
    { name: "leadership", description: "Guiding and directing a group" },
    { name: "problem solving", description: "Finding solutions to difficult or complex issues" },
    { name: "analytical thinking", description: "Examining information critically to draw conclusions" },
  ],
  technologies: [
    { name: "AWS", description: "Amazon Web Services - Cloud computing platform" },
    { name: "Docker", description: "Platform for developing and deploying applications in containers" },
    { name: "Kubernetes", description: "Container orchestration system" },
    { name: "React", description: "JavaScript library for building user interfaces" },
    { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
  ],
  tools: [
    { name: "Jira", description: "Issue tracking and project management tool" },
    { name: "Jenkins", description: "Open-source automation server" },
    { name: "Salesforce", description: "CRM platform" },
    { name: "Git", description: "Distributed version control system" },
    { name: "Confluence", description: "Team collaboration and documentation tool" },
  ],
  environments: [
    { name: "Agile", description: "Iterative approach to project management" },
    { name: "remote", description: "Working from a location other than a central office" },
    { name: "hybrid", description: "Combination of remote and in-office work" },
    { name: "Scrum", description: "Framework for implementing Agile" },
    { name: "DevOps", description: "Set of practices that combines software development and IT operations" },
  ],
  concepts: [
    { name: "CI/CD", description: "Continuous Integration/Continuous Deployment" },
    { name: "infrastructure as code", description: "Managing infrastructure through code instead of manual processes" },
    { name: "microservices", description: "Software architecture style" },
    { name: "serverless", description: "Cloud computing execution model" },
    { name: "cloud native", description: "Building and running applications to take advantage of cloud computing" },
  ],
}

const mockBooleanString = `("AWS" OR "Amazon Web Services" OR "EC2" OR "S3") AND 
("Docker" OR "containerization" OR "Kubernetes" OR "K8s") AND 
("CI/CD" OR "continuous integration" OR "continuous deployment" OR "DevOps") AND 
("Jira" OR "Confluence") AND 
("troubleshooting" OR "problem solving") AND 
("Agile" OR "Scrum" OR "Kanban") AND 
(developer OR engineer OR architect) AND 
-intern -internship -junior`

export default function BooleanSearch() {
  const [jobDescription, setJobDescription] = useState("")
  const [booleanString, setBooleanString] = useState("")
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would parse the file content
      // For demo purposes, we'll just set a placeholder
      setJobDescription("Job Description from uploaded file: " + file.name)
    }
  }

  const analyzeJobDescription = () => {
    // In a real app, this would be an AI analysis
    // For demo purposes, we'll just set the mock data
    setIsLoading(true)
    setTimeout(() => {
      setIsAnalyzed(true)
      setBooleanString(mockBooleanString)
      setIsLoading(false)
    }, 1500)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToClipboard(true)
    setTimeout(() => setCopiedToClipboard(false), 2000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              AI Boolean Search String Generator
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Generate optimized Boolean search strings for finding the perfect candidates based on job descriptions.
            </p>
          </div>

          <div className="mb-8">
            <ToolsNavigation showHomeLink={true} showTools={false} />
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="shadow-lg border-t-4 border-blue-500 animate-fade-in">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <FileText className="h-5 w-5" />
                    Job Description
                  </CardTitle>
                  <CardDescription>
                    Paste a job description or upload a file to generate a Boolean search string
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="paste">
                    <TabsList className="mb-4">
                      <TabsTrigger value="paste">Paste Text</TabsTrigger>
                      <TabsTrigger value="upload">Upload File</TabsTrigger>
                    </TabsList>

                    <TabsContent value="paste">
                      <Textarea
                        placeholder="Paste job description here..."
                        className="min-h-[300px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </TabsContent>

                    <TabsContent value="upload">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-sm text-gray-600 mb-4">
                          Upload a PDF, DOCX, or TXT file containing the job description
                        </p>
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          onChange={handleFileUpload}
                        />
                        <Button asChild>
                          <label htmlFor="file-upload">Choose File</label>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={analyzeJobDescription}
                      disabled={!jobDescription || isLoading}
                      className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                    >
                      {isLoading ? (
                        <>
                          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyze Job Description
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {isAnalyzed && (
                  <>
                    <Card className="shadow-lg border-t-4 border-yellow-500 animate-fade-in">
                      <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                        <CardTitle className="flex items-center gap-2 text-yellow-700">
                          <Lightbulb className="h-5 w-5" />
                          Detected Keywords
                        </CardTitle>
                        <CardDescription>
                          Keywords extracted from the job description, hover over any keyword for more information
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(mockKeywords).map(([category, keywords]) => (
                            <div key={category}>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                {category === "skills" && <Zap className="h-4 w-4 text-blue-600" />}
                                {category === "technologies" && <Code className="h-4 w-4 text-green-600" />}
                                {category === "tools" && <FileText className="h-4 w-4 text-purple-600" />}
                                {category === "environments" && <Users className="h-4 w-4 text-amber-600" />}
                                {category === "concepts" && <Lightbulb className="h-4 w-4 text-red-600" />}
                                {category}:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {keywords.map((keyword) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className={`highlight-${category.slice(0, -1)} cursor-help`}>
                                        {keyword.name}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-lg border-t-4 border-blue-500 animate-fade-in">
                      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                          <Search className="h-5 w-5" />
                          Boolean Search String
                        </CardTitle>
                        <CardDescription>
                          Optimized search string for sourcing platforms like LinkedIn, Dice, and Indeed
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <Textarea
                            value={booleanString}
                            onChange={(e) => setBooleanString(e.target.value)}
                            className="min-h-[150px] font-mono text-sm"
                          />
                          <div className="absolute top-2 right-2 flex gap-2">
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  size="icon"
                                  variant="ghost"
                                  onClick={() => copyToClipboard(booleanString)}
                                  className={copiedToClipboard ? "text-green-600" : ""}
                                >
                                  {copiedToClipboard ? (
                                    <CheckCircle className="h-4 w-4" />
                                  ) : (
                                    <Copy className="h-4 w-4" />
                                  )}
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{copiedToClipboard ? "Copied!" : "Copy to clipboard"}</p>
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button size="icon" variant="ghost">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Edit search string</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h3 className="font-semibold mb-3">Platform-Specific Formats</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <Card className="border border-blue-200 hover:shadow-md transition-all duration-300">
                              <CardHeader className="py-3">
                                <CardTitle className="text-sm">LinkedIn</CardTitle>
                              </CardHeader>
                              <CardContent className="py-2">
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Copy Format</Badge>
                              </CardContent>
                            </Card>

                            <Card className="border border-blue-200 hover:shadow-md transition-all duration-300">
                              <CardHeader className="py-3">
                                <CardTitle className="text-sm">Dice</CardTitle>
                              </CardHeader>
                              <CardContent className="py-2">
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Copy Format</Badge>
                              </CardContent>
                            </Card>

                            <Card className="border border-blue-200 hover:shadow-md transition-all duration-300">
                              <CardHeader className="py-3">
                                <CardTitle className="text-sm">Indeed</CardTitle>
                              </CardHeader>
                              <CardContent className="py-2">
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Copy Format</Badge>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-gray-50">
                        <Button variant="outline" className="ml-auto">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </CardFooter>
                    </Card>
                  </>
                )}
              </div>
            </div>
          </TooltipProvider>
        </div>
      </main>

      <Footer />
    </div>
  )
}
