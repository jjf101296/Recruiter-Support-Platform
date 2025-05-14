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
import { Progress } from "@/components/ui/progress"
import {
  Upload,
  FileText,
  Search,
  CheckCircle,
  XCircle,
  Download,
  FileUp,
  Lightbulb,
  Sparkles,
  Edit,
  ArrowUpRight,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Mock data for demonstration
const mockAnalysisResult = {
  matchScore: 72,
  matched: [
    { category: "Technologies", items: ["AWS", "React", "Node.js", "JavaScript", "HTML", "CSS"] },
    { category: "Technical Skills", items: ["JavaScript", "API Development", "Responsive Design", "Testing"] },
    { category: "Software Tools", items: ["Git", "Jira", "VS Code", "npm"] },
    { category: "Work Environments", items: ["Agile", "Remote", "Cross-functional teams"] },
  ],
  missing: [
    { category: "Technologies", items: ["Docker", "Kubernetes", "TypeScript", "GraphQL"] },
    { category: "Technical Skills", items: ["TypeScript", "GraphQL", "CI/CD Pipeline Management"] },
    { category: "Software Tools", items: ["Jenkins", "Terraform", "Kubernetes"] },
    { category: "Technical Concepts", items: ["CI/CD", "Microservices", "Containerization", "Infrastructure as Code"] },
  ],
  suggestions: [
    "Add experience with Docker and containerization technologies",
    "Highlight any TypeScript projects or experience",
    "Include CI/CD pipeline experience if applicable",
    "Mention any microservices architecture knowledge",
    "Add specific examples of API development work",
    "Include metrics or achievements from previous roles",
  ],
}

export default function ATSChecker() {
  const [jobDescription, setJobDescription] = useState("")
  const [resume, setResume] = useState("")
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleJdFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would parse the file content
      setJobDescription("Job Description from uploaded file: " + file.name)
    }
  }

  const handleResumeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would parse the file content
      setResume("Resume from uploaded file: " + file.name)
    }
  }

  const analyzeResume = () => {
    // In a real app, this would be an AI analysis
    setIsLoading(true)
    setTimeout(() => {
      setIsAnalyzed(true)
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              AI ATS Resume Checker
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Compare your resume against job descriptions to optimize for Applicant Tracking Systems.
            </p>
          </div>

          <div className="mb-8">
            <ToolsNavigation showHomeLink={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="shadow-lg border-t-4 border-green-500">
                <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <FileText className="h-5 w-5" />
                    Job Description
                  </CardTitle>
                  <CardDescription>
                    Paste a job description or upload a file to compare with your resume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="paste-jd">
                    <TabsList className="mb-4">
                      <TabsTrigger value="paste-jd">Paste Text</TabsTrigger>
                      <TabsTrigger value="upload-jd">Upload File</TabsTrigger>
                    </TabsList>

                    <TabsContent value="paste-jd">
                      <Textarea
                        placeholder="Paste job description here..."
                        className="min-h-[200px]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </TabsContent>

                    <TabsContent value="upload-jd">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 mb-3">Upload a PDF, DOCX, or TXT file</p>
                        <input
                          type="file"
                          id="jd-file-upload"
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          onChange={handleJdFileUpload}
                        />
                        <Button asChild size="sm">
                          <label htmlFor="jd-file-upload">Choose File</label>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-t-4 border-blue-500">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="flex items-center gap-2 text-blue-700">
                    <FileUp className="h-5 w-5" />
                    Resume
                  </CardTitle>
                  <CardDescription>
                    Paste your resume or upload a file to analyze against the job description
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="paste-resume">
                    <TabsList className="mb-4">
                      <TabsTrigger value="paste-resume">Paste Text</TabsTrigger>
                      <TabsTrigger value="upload-resume">Upload File</TabsTrigger>
                    </TabsList>

                    <TabsContent value="paste-resume">
                      <Textarea
                        placeholder="Paste resume here..."
                        className="min-h-[200px]"
                        value={resume}
                        onChange={(e) => setResume(e.target.value)}
                      />
                    </TabsContent>

                    <TabsContent value="upload-resume">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 mb-3">Upload a PDF, DOCX, or TXT file</p>
                        <input
                          type="file"
                          id="resume-file-upload"
                          className="hidden"
                          accept=".pdf,.docx,.txt"
                          onChange={handleResumeFileUpload}
                        />
                        <Button asChild size="sm">
                          <label htmlFor="resume-file-upload">Choose File</label>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-4 flex justify-end">
                    <Button
                      onClick={analyzeResume}
                      disabled={!jobDescription || !resume || isLoading}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {isLoading ? (
                        <>
                          <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyze Resume
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {isAnalyzed && (
              <div className="space-y-6 animate-fade-in">
                <Card className="shadow-lg border-t-4 border-green-500">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardTitle className="flex items-center gap-2 text-green-700">Match Score</CardTitle>
                    <CardDescription>How well your resume matches the job description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                        {mockAnalysisResult.matchScore}%
                      </div>
                      <Progress
                        value={mockAnalysisResult.matchScore}
                        className="h-3 bg-gray-100"
                        indicatorClassName="bg-gradient-to-r from-green-500 to-blue-500"
                      />
                      <div className="mt-2 text-sm text-gray-500">
                        {mockAnalysisResult.matchScore >= 80
                          ? "Excellent match! Your resume is well-aligned with this job."
                          : mockAnalysisResult.matchScore >= 60
                            ? "Good match. With a few improvements, your resume could be even better aligned."
                            : "Your resume needs significant improvements to match this job description."}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-3">
                          <CheckCircle className="text-green-500 h-5 w-5" />
                          Matched Keywords
                        </h3>
                        <TooltipProvider>
                          <div className="space-y-3">
                            {mockAnalysisResult.matched.map((category) => (
                              <div key={category.category}>
                                <h4 className="text-sm font-medium text-gray-600">{category.category}:</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {category.items.map((item) => (
                                    <Tooltip key={item}>
                                      <TooltipTrigger asChild>
                                        <span className="match text-xs">{item}</span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Found in your resume</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TooltipProvider>
                      </div>

                      <div>
                        <h3 className="font-semibold flex items-center gap-2 mb-3">
                          <XCircle className="text-red-500 h-5 w-5" />
                          Missing Keywords
                        </h3>
                        <TooltipProvider>
                          <div className="space-y-3">
                            {mockAnalysisResult.missing.map((category) => (
                              <div key={category.category}>
                                <h4 className="text-sm font-medium text-gray-600">{category.category}:</h4>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {category.items.map((item) => (
                                    <Tooltip key={item}>
                                      <TooltipTrigger asChild>
                                        <span className="missing text-xs">{item}</span>
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>Not found in your resume</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </TooltipProvider>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-t-4 border-yellow-500">
                  <CardHeader className="bg-gradient-to-r from-yellow-50 to-yellow-100">
                    <CardTitle className="flex items-center gap-2 text-yellow-700">
                      <Lightbulb className="h-5 w-5" />
                      AI Suggestions
                    </CardTitle>
                    <CardDescription>Recommendations to improve your resume for this job</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockAnalysisResult.suggestions.map((suggestion, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 p-2 rounded-md hover:bg-yellow-50 transition-colors"
                        >
                          <span className="text-yellow-500 mt-1">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="bg-gray-50 flex justify-between">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Edit className="h-4 w-4" />
                      Edit Resume
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download Analysis
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="shadow-lg border border-blue-200">
                  <CardHeader className="py-3 bg-blue-50">
                    <CardTitle className="text-sm text-blue-700">Need More Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="py-3">
                    <p className="text-sm text-gray-600">
                      Our AI can help you rewrite your resume to better match this job description.
                    </p>
                  </CardContent>
                  <CardFooter className="py-3 bg-blue-50">
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-100">
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      Optimize Resume
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
