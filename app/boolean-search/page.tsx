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
  Award,
  Briefcase,
  Plus,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Helper function to extract keywords from job description
const extractKeywords = (jobDescription: string) => {
  // Convert job description to lowercase for case-insensitive matching
  const lowerJobDesc = jobDescription.toLowerCase()

  // Extract job titles
  const jobTitles = [
    "software engineer",
    "software developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "web developer",
    "mobile developer",
    "ios developer",
    "android developer",
    "devops engineer",
    "cloud engineer",
    "data scientist",
    "data engineer",
    "machine learning engineer",
    "ai engineer",
    "qa engineer",
    "test engineer",
    "automation engineer",
    "site reliability engineer",
    "sre",
    "systems administrator",
    "network engineer",
    "security engineer",
    "database administrator",
    "dba",
    "product manager",
    "project manager",
    "scrum master",
    "agile coach",
    "it manager",
    "cto",
    "cio",
    "vp of engineering",
    "director of engineering",
    "technical lead",
    "tech lead",
    "team lead",
    "engineering manager",
  ]

  // Extract years of experience patterns
  const yearsRegex = /(\d+)[+]?\s*(year|yr|yrs|years)(\s*of\s*experience)?/gi
  const yearsMatches = [...jobDescription.matchAll(yearsRegex)]
  const yearsRequired = yearsMatches.map((match) => ({
    name: match[0],
    description: `${match[1]}+ years of experience required`,
  }))

  // Extract certificates
  const certificates = [
    "AWS Certified",
    "AWS Solutions Architect",
    "AWS Developer",
    "AWS SysOps",
    "Azure Certified",
    "Azure Administrator",
    "Azure Developer",
    "Azure Architect",
    "Google Cloud",
    "GCP",
    "Certified Kubernetes",
    "CKA",
    "CKAD",
    "CNCF",
    "Docker Certified",
    "CompTIA",
    "CompTIA A+",
    "CompTIA Network+",
    "CompTIA Security+",
    "CISSP",
    "CEH",
    "CISM",
    "CISA",
    "PMP",
    "CAPM",
    "Scrum",
    "CSM",
    "CSPO",
    "SAFe",
    "ITIL",
    "MCSA",
    "MCSE",
    "MCTS",
    "MCITP",
    "CCNA",
    "CCNP",
    "CCIE",
    "Red Hat",
    "RHCE",
    "RHCSA",
    "Oracle Certified",
    "OCA",
    "OCP",
    "OCE",
    "Java Certified",
    "OCAJP",
    "OCPJP",
    "Microsoft Certified",
  ]

  // Extract programming languages
  const programmingLanguages = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "C",
    "Go",
    "Golang",
    "Ruby",
    "PHP",
    "Swift",
    "Kotlin",
    "Rust",
    "Scala",
    "Perl",
    "Haskell",
    "Clojure",
    "Groovy",
    "R",
    "MATLAB",
    "Shell",
    "Bash",
    "PowerShell",
    "SQL",
    "NoSQL",
    "HTML",
    "CSS",
  ]

  // Extract frameworks and libraries
  const frameworks = [
    "React",
    "Angular",
    "Vue",
    "Svelte",
    "Next.js",
    "Nuxt.js",
    "Express",
    "Django",
    "Flask",
    "Spring",
    "Spring Boot",
    "ASP.NET",
    ".NET Core",
    "Laravel",
    "Symfony",
    "Ruby on Rails",
    "Node.js",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "Redux",
    "GraphQL",
    "REST",
    "SOAP",
    "gRPC",
    "WebSockets",
    "Socket.IO",
  ]

  // Extract databases
  const databases = [
    "MySQL",
    "PostgreSQL",
    "Oracle",
    "SQL Server",
    "MongoDB",
    "Cassandra",
    "DynamoDB",
    "Redis",
    "Elasticsearch",
    "Couchbase",
    "Firebase",
    "Neo4j",
    "MariaDB",
    "SQLite",
    "CosmosDB",
    "Firestore",
    "Supabase",
    "CockroachDB",
  ]

  // Extract cloud platforms and tools
  const cloudPlatforms = [
    "AWS",
    "Amazon Web Services",
    "EC2",
    "S3",
    "Lambda",
    "ECS",
    "EKS",
    "RDS",
    "DynamoDB",
    "Azure",
    "Microsoft Azure",
    "Azure Functions",
    "Azure VM",
    "Azure App Service",
    "Google Cloud",
    "GCP",
    "Google Cloud Platform",
    "GKE",
    "Cloud Functions",
    "Compute Engine",
    "Kubernetes",
    "Docker",
    "Terraform",
    "CloudFormation",
    "Ansible",
    "Chef",
    "Puppet",
    "Jenkins",
    "CircleCI",
    "Travis CI",
    "GitHub Actions",
    "GitLab CI",
    "ArgoCD",
    "Flux",
  ]

  // Extract software tools
  const softwareTools = [
    "Git",
    "GitHub",
    "GitLab",
    "Bitbucket",
    "Jira",
    "Confluence",
    "Trello",
    "Asana",
    "Slack",
    "Microsoft Teams",
    "Zoom",
    "VS Code",
    "Visual Studio",
    "IntelliJ",
    "PyCharm",
    "WebStorm",
    "Eclipse",
    "Xcode",
    "Android Studio",
    "Postman",
    "Insomnia",
    "Swagger",
    "Figma",
    "Sketch",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
  ]

  // Extract methodologies and concepts
  const methodologies = [
    "Agile",
    "Scrum",
    "Kanban",
    "Waterfall",
    "DevOps",
    "CI/CD",
    "TDD",
    "BDD",
    "DDD",
    "Microservices",
    "Serverless",
    "RESTful",
    "API",
    "SOA",
    "Event-Driven",
    "Monolith",
    "Cloud Native",
    "Containerization",
    "Infrastructure as Code",
    "GitOps",
    "MLOps",
    "DataOps",
    "AIOps",
    "SRE",
    "Observability",
    "Monitoring",
  ]

  // Initialize extracted keywords object
  const extractedKeywords: any = {
    jobTitles: [],
    yearsRequired: yearsRequired,
    certificates: [],
    programmingLanguages: [],
    frameworks: [],
    databases: [],
    cloudPlatforms: [],
    softwareTools: [],
    methodologies: [],
  }

  // Function to check and add keywords
  const checkAndAddKeywords = (category: string, keywords: string[]) => {
    keywords.forEach((keyword) => {
      if (lowerJobDesc.includes(keyword.toLowerCase())) {
        extractedKeywords[category].push({
          name: keyword,
          description: `Required skill: ${keyword}`,
        })
      }
    })
  }

  // Check for job titles
  checkAndAddKeywords("jobTitles", jobTitles)

  // Check for certificates
  checkAndAddKeywords("certificates", certificates)

  // Check for programming languages
  checkAndAddKeywords("programmingLanguages", programmingLanguages)

  // Check for frameworks
  checkAndAddKeywords("frameworks", frameworks)

  // Check for databases
  checkAndAddKeywords("databases", databases)

  // Check for cloud platforms
  checkAndAddKeywords("cloudPlatforms", cloudPlatforms)

  // Check for software tools
  checkAndAddKeywords("softwareTools", softwareTools)

  // Check for methodologies
  checkAndAddKeywords("methodologies", methodologies)

  return extractedKeywords
}

// Generate boolean string based on extracted keywords
const generateBooleanString = (keywords: any) => {
  const booleanParts = []

  // Add job titles
  if (keywords.jobTitles.length > 0) {
    const titles = keywords.jobTitles.map((title: any) => `"${title.name}"`).join(" OR ")
    booleanParts.push(`(${titles})`)
  } else {
    // Default job titles if none detected
    booleanParts.push(`("software engineer" OR "software developer" OR "full stack developer")`)
  }

  // Add programming languages
  if (keywords.programmingLanguages.length > 0) {
    const langs = keywords.programmingLanguages.map((lang: any) => `"${lang.name}"`).join(" OR ")
    booleanParts.push(`(${langs})`)
  }

  // Add frameworks
  if (keywords.frameworks.length > 0) {
    const fws = keywords.frameworks.map((fw: any) => `"${fw.name}"`).join(" OR ")
    booleanParts.push(`(${fws})`)
  }

  // Add databases
  if (keywords.databases.length > 0) {
    const dbs = keywords.databases.map((db: any) => `"${db.name}"`).join(" OR ")
    booleanParts.push(`(${dbs})`)
  }

  // Add cloud platforms
  if (keywords.cloudPlatforms.length > 0) {
    const clouds = keywords.cloudPlatforms.map((cloud: any) => `"${cloud.name}"`).join(" OR ")
    booleanParts.push(`(${clouds})`)
  }

  // Add methodologies
  if (keywords.methodologies.length > 0) {
    const methods = keywords.methodologies.map((method: any) => `"${method.name}"`).join(" OR ")
    booleanParts.push(`(${methods})`)
  }

  // Add exclusions
  booleanParts.push(`-intern -internship -junior -trainee`)

  // Join all parts with AND
  return booleanParts.join(" AND \n")
}

// Function to suggest additional keywords based on existing ones
const suggestAdditionalKeywords = (keywords: any) => {
  const suggestions: any = {
    jobTitles: [],
    programmingLanguages: [],
    frameworks: [],
    databases: [],
    cloudPlatforms: [],
    methodologies: [],
  }

  // Suggest related job titles
  keywords.jobTitles.forEach((title: any) => {
    if (title.name.includes("developer")) {
      suggestions.jobTitles.push({
        name: title.name.replace("developer", "engineer"),
        description: "Alternative job title",
      })
    }
    if (title.name.includes("engineer")) {
      suggestions.jobTitles.push({
        name: title.name.replace("engineer", "developer"),
        description: "Alternative job title",
      })
    }
  })

  // Suggest related programming languages
  keywords.programmingLanguages.forEach((lang: any) => {
    if (lang.name === "JavaScript") {
      suggestions.programmingLanguages.push({
        name: "TypeScript",
        description: "Strongly typed superset of JavaScript",
      })
    }
    if (lang.name === "Java") {
      suggestions.programmingLanguages.push({
        name: "Kotlin",
        description: "Modern alternative to Java",
      })
    }
    if (lang.name === "Python") {
      suggestions.programmingLanguages.push({
        name: "R",
        description: "Often used alongside Python for data science",
      })
    }
  })

  // Suggest related frameworks
  keywords.frameworks.forEach((fw: any) => {
    if (fw.name === "React") {
      suggestions.frameworks.push({
        name: "Next.js",
        description: "React framework for production",
      })
    }
    if (fw.name === "Angular") {
      suggestions.frameworks.push({
        name: "RxJS",
        description: "Reactive Extensions Library used with Angular",
      })
    }
    if (fw.name === "Express") {
      suggestions.frameworks.push({
        name: "Nest.js",
        description: "Progressive Node.js framework",
      })
    }
  })

  // Suggest related databases
  keywords.databases.forEach((db: any) => {
    if (db.name === "MySQL") {
      suggestions.databases.push({
        name: "PostgreSQL",
        description: "Advanced open-source database",
      })
    }
    if (db.name === "MongoDB") {
      suggestions.databases.push({
        name: "Mongoose",
        description: "MongoDB object modeling for Node.js",
      })
    }
  })

  // Suggest related cloud platforms
  keywords.cloudPlatforms.forEach((cloud: any) => {
    if (cloud.name === "AWS") {
      suggestions.cloudPlatforms.push({
        name: "Terraform",
        description: "Infrastructure as Code tool often used with AWS",
      })
    }
    if (cloud.name === "Kubernetes") {
      suggestions.cloudPlatforms.push({
        name: "Helm",
        description: "Package manager for Kubernetes",
      })
    }
  })

  // Suggest related methodologies
  keywords.methodologies.forEach((method: any) => {
    if (method.name === "Agile") {
      suggestions.methodologies.push({
        name: "Scrum",
        description: "Agile framework for complex projects",
      })
    }
    if (method.name === "CI/CD") {
      suggestions.methodologies.push({
        name: "GitOps",
        description: "Operational framework that takes DevOps best practices",
      })
    }
  })

  return suggestions
}

export default function BooleanSearch() {
  const [jobDescription, setJobDescription] = useState("")
  const [booleanString, setBooleanString] = useState("")
  const [extractedKeywords, setExtractedKeywords] = useState<any>(null)
  const [suggestedKeywords, setSuggestedKeywords] = useState<any>(null)
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuggesting, setIsSuggesting] = useState(false)
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setJobDescription(content || "")
      }
      reader.readAsText(file)
    }
  }

  const analyzeJobDescription = () => {
    if (!jobDescription.trim()) return

    setIsLoading(true)
    setSuggestedKeywords(null)

    // Simulate API call delay
    setTimeout(() => {
      const keywords = extractKeywords(jobDescription)
      setExtractedKeywords(keywords)

      const generatedString = generateBooleanString(keywords)
      setBooleanString(generatedString)

      setIsAnalyzed(true)
      setIsLoading(false)
    }, 1500)
  }

  const suggestMoreKeywords = () => {
    if (!extractedKeywords) return

    setIsSuggesting(true)

    // Simulate AI suggestion
    setTimeout(() => {
      const suggestions = suggestAdditionalKeywords(extractedKeywords)
      setSuggestedKeywords(suggestions)
      setIsSuggesting(false)
    }, 1500)
  }

  const addSuggestionToString = (suggestion: any, category: string) => {
    // Add the suggestion to extracted keywords
    setExtractedKeywords((prev: any) => {
      const updated = { ...prev }
      updated[category] = [...updated[category], suggestion]
      return updated
    })

    // Regenerate boolean string
    setTimeout(() => {
      const updatedKeywords = { ...extractedKeywords }
      updatedKeywords[category] = [...updatedKeywords[category], suggestion]
      const newString = generateBooleanString(updatedKeywords)
      setBooleanString(newString)
    }, 100)
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
              Generate optimized Boolean search strings for finding the perfect IT candidates based on job descriptions.
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
                    Paste an IT job description or upload a file to generate a Boolean search string
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
                        placeholder="Paste IT job description here..."
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
                {isAnalyzed && extractedKeywords && (
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
                          {/* Job Titles */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Briefcase className="h-4 w-4 text-blue-600" />
                              Job Titles:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.jobTitles.length > 0 ? (
                                extractedKeywords.jobTitles.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-skill cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No job titles detected</span>
                              )}
                            </div>
                          </div>

                          {/* Years Required */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Users className="h-4 w-4 text-amber-600" />
                              Years of Experience:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.yearsRequired.length > 0 ? (
                                extractedKeywords.yearsRequired.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-environment cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">
                                  No experience requirements detected
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Certificates */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Award className="h-4 w-4 text-green-600" />
                              Certificates:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.certificates.length > 0 ? (
                                extractedKeywords.certificates.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-concept cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No certificates detected</span>
                              )}
                            </div>
                          </div>

                          {/* Programming Languages */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Code className="h-4 w-4 text-green-600" />
                              Programming Languages:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.programmingLanguages.length > 0 ? (
                                extractedKeywords.programmingLanguages.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No programming languages detected</span>
                              )}
                            </div>
                          </div>

                          {/* Frameworks */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-blue-600" />
                              Frameworks & Libraries:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.frameworks.length > 0 ? (
                                extractedKeywords.frameworks.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No frameworks detected</span>
                              )}
                            </div>
                          </div>

                          {/* Databases */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4 text-purple-600" />
                              Databases:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.databases.length > 0 ? (
                                extractedKeywords.databases.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No databases detected</span>
                              )}
                            </div>
                          </div>

                          {/* Cloud Platforms */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4 text-purple-600" />
                              Cloud & DevOps:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.cloudPlatforms.length > 0 ? (
                                extractedKeywords.cloudPlatforms.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No cloud platforms detected</span>
                              )}
                            </div>
                          </div>

                          {/* Software Tools */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <FileText className="h-4 w-4 text-purple-600" />
                              Software Tools:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.softwareTools.length > 0 ? (
                                extractedKeywords.softwareTools.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No software tools detected</span>
                              )}
                            </div>
                          </div>

                          {/* Methodologies */}
                          <div>
                            <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                              <Lightbulb className="h-4 w-4 text-red-600" />
                              Methodologies & Concepts:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {extractedKeywords.methodologies.length > 0 ? (
                                extractedKeywords.methodologies.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-concept cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))
                              ) : (
                                <span className="text-gray-500 text-sm italic">No methodologies detected</span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* AI Suggestions Section */}
                        {suggestedKeywords && (
                          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                            <h3 className="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                              <Sparkles className="h-4 w-4" />
                              AI Suggested Keywords
                            </h3>
                            <div className="space-y-3">
                              {Object.entries(suggestedKeywords).map(([category, keywords]) => {
                                if ((keywords as any[]).length === 0) return null

                                return (
                                  <div key={category}>
                                    <h4 className="text-sm font-medium text-gray-600 capitalize">{category}:</h4>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                      {(keywords as any[]).map((keyword: any) => (
                                        <div key={keyword.name} className="flex items-center gap-1">
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs flex items-center">
                                                {keyword.name}
                                                <Button
                                                  size="icon"
                                                  variant="ghost"
                                                  className="h-4 w-4 ml-1 p-0 text-blue-600"
                                                  onClick={() => addSuggestionToString(keyword, category)}
                                                >
                                                  <Plus className="h-3 w-3" />
                                                </Button>
                                              </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p>{keyword.description}</p>
                                            </TooltipContent>
                                          </Tooltip>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )}
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
                      </CardContent>
                      <CardFooter className="bg-gray-50 flex justify-between">
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={suggestMoreKeywords}
                          disabled={isSuggesting}
                        >
                          {isSuggesting ? (
                            <>
                              <Sparkles className="h-4 w-4 animate-spin" />
                              Suggesting...
                            </>
                          ) : (
                            <>
                              <Lightbulb className="h-4 w-4" />
                              AI Suggest
                            </>
                          )}
                        </Button>
                        <Button variant="outline">
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
