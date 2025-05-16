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
  ArrowUpRight,
  Code,
  Zap,
  Award,
  Network,
  Server,
  Database,
  GraduationCap,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Helper function to extract IT skills from text
const extractITSkills = (text: string) => {
  // Initialize categories object
  const categories: { [key: string]: string[] } = {
    "Job Titles": [],
    Education: [],
    "Years of Experience": [],
    Certifications: [],
    "Networking Skills": [],
    "Security Skills": [],
    "Cloud & DevOps": [],
    "Programming Languages": [],
    "Frameworks & Libraries": [],
    Databases: [],
    "Operating Systems": [],
    "Software Tools": [],
    "Methodologies & Concepts": [],
  }

  // Extract years of experience patterns
  const yearsRegex = /(\d+)[+]?\s*(year|yr|yrs|years)(\s*of\s*experience)?/gi
  const yearsMatches = [...text.matchAll(yearsRegex)]
  yearsMatches.forEach((match) => {
    categories["Years of Experience"].push(match[0])
  })

  // Function to find patterns in text
  const findPatterns = (patterns: string[], category: string) => {
    patterns.forEach((pattern) => {
      // Create regex that handles word boundaries and special characters
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      const regex = new RegExp(`\\b${escapedPattern}\\b`, "i")

      if (regex.test(text)) {
        // Find the actual match in the original case
        const matchRegex = new RegExp(`\\b${escapedPattern}\\b`, "i")
        const match = text.match(matchRegex)

        if (match && !categories[category].includes(match[0])) {
          categories[category].push(match[0])
        }
      }
    })

    // Special case for education - look for degree + field combinations
    if (category === "Education") {
      const degreePatterns = [
        "Bachelor's degree",
        "Bachelor degree",
        "BS",
        "B.S.",
        "BA",
        "B.A.",
        "Master's degree",
        "Master degree",
        "MS",
        "M.S.",
        "MA",
        "M.A.",
        "PhD",
        "Ph.D.",
        "Doctorate",
        "Associate's degree",
        "Associate degree",
      ]

      const fieldPatterns = [
        "Computer Science",
        "Information Technology",
        "Information Systems",
        "Computer Engineering",
        "Software Engineering",
        "Electrical Engineering",
        "Engineering",
        "Business Administration",
        "related field",
        "related discipline",
      ]

      // Look for degree + field combinations
      for (const degree of degreePatterns) {
        for (const field of fieldPatterns) {
          const combinedPattern = `${degree}\\s+in\\s+${field}|${degree}\\s+.*?\\s+${field}`
          const regex = new RegExp(combinedPattern, "i")
          const match = text.match(regex)

          if (match && !categories[category].includes(match[0])) {
            categories[category].push(match[0])
          }
        }
      }
    }
  }

  // Define patterns for each category
  const jobTitlePatterns = [
    "Network Engineer",
    "Network Administrator",
    "Systems Administrator",
    "Systems Engineer",
    "IT Support",
    "IT Specialist",
    "IT Technician",
    "Help Desk",
    "Technical Support",
    "Support Engineer",
    "Support Specialist",
    "Infrastructure Engineer",
    "Infrastructure Specialist",
    "Network Operations",
    "NOC Engineer",
    "NOC Technician",
    "Network Analyst",
    "Network Support",
    "LAN Administrator",
    "WAN Engineer",
    "Network Security Engineer",
    "Security Engineer",
    "Security Administrator",
    "Security Analyst",
    "Cybersecurity Engineer",
    "Cybersecurity Analyst",
    "Information Security",
    "Cloud Engineer",
    "Cloud Administrator",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "SRE",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Application Developer",
    "Mobile Developer",
    "iOS Developer",
    "Android Developer",
    "Data Engineer",
    "Data Scientist",
    "Database Administrator",
    "DBA",
    "Database Engineer",
    "ETL Developer",
    "Business Intelligence",
    "BI Developer",
    "Data Analyst",
    "QA Engineer",
    "QA Analyst",
    "Test Engineer",
    "Automation Engineer",
    "Project Manager",
    "IT Project Manager",
    "Program Manager",
    "Product Manager",
    "Scrum Master",
    "Agile Coach",
    "IT Manager",
    "IT Director",
    "CTO",
    "CIO",
    "CISO",
  ]

  const educationPatterns = [
    "Bachelor's degree",
    "Bachelor degree",
    "BS",
    "B.S.",
    "BA",
    "B.A.",
    "Master's degree",
    "Master degree",
    "MS",
    "M.S.",
    "MA",
    "M.A.",
    "PhD",
    "Ph.D.",
    "Doctorate",
    "Associate's degree",
    "Associate degree",
    "Computer Science",
    "Information Technology",
    "Information Systems",
    "Computer Engineering",
    "Software Engineering",
    "Electrical Engineering",
    "Engineering",
    "Business Administration",
    "related field",
    "related discipline",
  ]

  const certificationPatterns = [
    "CCNA",
    "CCNP",
    "CCIE",
    "Cisco Certified",
    "CompTIA A+",
    "CompTIA Network+",
    "CompTIA Security+",
    "CompTIA",
    "MCSA",
    "MCSE",
    "Microsoft Certified",
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
    "CISSP",
    "CEH",
    "CISM",
    "CISA",
    "OSCP",
    "Security+",
    "PMP",
    "CAPM",
    "Scrum",
    "CSM",
    "CSPO",
    "SAFe",
    "ITIL",
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
  ]

  const networkingPatterns = [
    "TCP/IP",
    "DNS",
    "DHCP",
    "DHCP/DNS",
    "VLANs",
    "VPNs",
    "Routing",
    "Switching",
    "Firewalls",
    "Load Balancers",
    "Subnetting",
    "OSI Model",
    "Network Security",
    "Network Monitoring",
    "Network Troubleshooting",
    "LAN",
    "WAN",
    "WLAN",
    "Wireless",
    "Wi-Fi",
    "Ethernet",
    "IPv4",
    "IPv6",
    "OSPF",
    "BGP",
    "EIGRP",
    "QoS",
    "NAT",
    "PAT",
    "ACLs",
    "SDN",
    "SD-WAN",
    "MPLS",
    "VoIP",
    "SIP",
    "RTP",
    "Cisco",
    "Cisco Meraki",
    "Juniper",
    "Palo Alto",
    "Fortinet",
    "FortiGate",
    "SonicWall",
    "Aruba",
    "Ubiquiti",
    "Netgear",
    "Arista",
    "F5",
    "Citrix",
    "Wireshark",
    "Packet Tracer",
    "GNS3",
  ]

  const securityPatterns = [
    "Cybersecurity",
    "Information Security",
    "Network Security",
    "Security Operations",
    "SOC",
    "SIEM",
    "Splunk",
    "ELK",
    "Elastic Stack",
    "LogRhythm",
    "ArcSight",
    "QRadar",
    "Intrusion Detection",
    "IDS",
    "Intrusion Prevention",
    "IPS",
    "Firewall",
    "WAF",
    "DLP",
    "Data Loss Prevention",
    "Encryption",
    "PKI",
    "Certificate Management",
    "Vulnerability Management",
    "Penetration Testing",
    "Pen Testing",
    "Ethical Hacking",
    "Security Auditing",
    "Compliance",
    "GDPR",
    "HIPAA",
    "PCI DSS",
    "SOX",
    "ISO 27001",
    "NIST",
    "CIS",
    "Threat Intelligence",
    "Malware Analysis",
    "Incident Response",
    "Forensics",
    "Security Awareness",
    "Zero Trust",
    "MFA",
    "Multi-Factor Authentication",
    "SSO",
    "Single Sign-On",
    "IAM",
    "Identity and Access Management",
    "Privileged Access",
    "PAM",
  ]

  const cloudPatterns = [
    "AWS",
    "Amazon Web Services",
    "EC2",
    "S3",
    "Lambda",
    "ECS",
    "EKS",
    "RDS",
    "DynamoDB",
    "CloudFormation",
    "CloudWatch",
    "Azure",
    "Microsoft Azure",
    "Azure Functions",
    "Azure VM",
    "Azure App Service",
    "Azure DevOps",
    "Google Cloud",
    "GCP",
    "Google Cloud Platform",
    "GKE",
    "Cloud Functions",
    "Compute Engine",
    "IBM Cloud",
    "Oracle Cloud",
    "OCI",
    "DigitalOcean",
    "Linode",
    "Heroku",
    "Kubernetes",
    "K8s",
    "Docker",
    "Containerization",
    "Terraform",
    "Infrastructure as Code",
    "IaC",
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
    "Helm",
    "Istio",
    "Service Mesh",
    "Serverless",
    "Cloud Native",
    "Microservices",
  ]

  const programmingPatterns = [
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
    "XML",
    "JSON",
    "YAML",
  ]

  const frameworkPatterns = [
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
    ".NET Framework",
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

  const databasePatterns = [
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
    "InfluxDB",
    "TimescaleDB",
    "Snowflake",
    "BigQuery",
    "Redshift",
  ]

  const osPatterns = [
    "Windows",
    "Windows Server",
    "Linux",
    "Ubuntu",
    "Debian",
    "CentOS",
    "Red Hat",
    "RHEL",
    "Fedora",
    "SUSE",
    "macOS",
    "iOS",
    "Android",
    "Unix",
    "Solaris",
    "FreeBSD",
    "ChromeOS",
  ]

  const toolPatterns = [
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
    "Office 365",
    "Microsoft Office",
    "Excel",
    "Word",
    "PowerPoint",
    "Outlook",
    "SharePoint",
    "OneDrive",
    "Google Workspace",
    "Google Docs",
    "Google Sheets",
    "Google Drive",
  ]

  const methodologyPatterns = [
    "Agile",
    "Scrum",
    "Kanban",
    "Waterfall",
    "DevOps",
    "DevSecOps",
    "CI/CD",
    "Continuous Integration",
    "Continuous Deployment",
    "Continuous Delivery",
    "TDD",
    "Test-Driven Development",
    "BDD",
    "Behavior-Driven Development",
    "DDD",
    "Domain-Driven Design",
    "Microservices",
    "Serverless",
    "RESTful",
    "API",
    "SOA",
    "Service-Oriented Architecture",
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
    "Site Reliability Engineering",
    "Observability",
    "Monitoring",
    "Logging",
    "Tracing",
    "Metrics",
  ]

  // Find patterns for each category
  findPatterns(jobTitlePatterns, "Job Titles")
  findPatterns(educationPatterns, "Education")
  findPatterns(certificationPatterns, "Certifications")
  findPatterns(networkingPatterns, "Networking Skills")
  findPatterns(securityPatterns, "Security Skills")
  findPatterns(cloudPatterns, "Cloud & DevOps")
  findPatterns(programmingPatterns, "Programming Languages")
  findPatterns(frameworkPatterns, "Frameworks & Libraries")
  findPatterns(databasePatterns, "Databases")
  findPatterns(osPatterns, "Operating Systems")
  findPatterns(toolPatterns, "Software Tools")
  findPatterns(methodologyPatterns, "Methodologies & Concepts")

  return categories
}

// Helper function to analyze resume against job description
const analyzeResume = (resume: string, jobDescription: string) => {
  // Extract skills from both documents
  const jobSkills = extractITSkills(jobDescription)
  const resumeSkills = extractITSkills(resume)

  // Find matched and missing skills
  const matched: { [key: string]: string[] } = {}
  const missing: { [key: string]: string[] } = {}

  Object.entries(jobSkills).forEach(([category, skills]) => {
    matched[category] = []
    missing[category] = []

    skills.forEach((skill) => {
      if (resumeSkills[category].includes(skill)) {
        matched[category].push(skill)
      } else {
        missing[category].push(skill)
      }
    })
  })

  // Calculate match score
  let totalSkills = 0
  let matchedSkills = 0

  Object.values(jobSkills).forEach((skills) => {
    totalSkills += skills.length
  })

  Object.values(matched).forEach((skills) => {
    matchedSkills += skills.length
  })

  const matchScore = totalSkills > 0 ? Math.round((matchedSkills / totalSkills) * 100) : 0

  // Generate suggestions based on missing skills
  const suggestions: string[] = []

  Object.entries(missing).forEach(([category, skills]) => {
    if (skills.length > 0) {
      const topSkills = skills.slice(0, 3).join(", ")
      suggestions.push(`Add ${category.toLowerCase()}: ${topSkills}`)
    }
  })

  // Add general suggestions
  suggestions.push("Include specific projects that demonstrate your technical skills")
  suggestions.push("Quantify achievements with metrics where possible")
  suggestions.push("Tailor your resume summary to match the job requirements")

  return {
    matchScore,
    matched,
    missing,
    suggestions,
    jobSkills,
    resumeSkills,
  }
}

// Function to generate AI suggestions for resume improvement
const generateAISuggestions = (analysisResult: any) => {
  const suggestions: string[] = []

  // Generate specific bullet points for missing skills
  Object.entries(analysisResult.missing).forEach(([category, skills]) => {
    if ((skills as string[]).length > 0) {
      const categoryLower = category.toLowerCase()

      switch (category) {
        case "Programming Languages":
          suggestions.push(
            `• Add a "Technical Skills" section highlighting your proficiency in ${(skills as string[]).join(", ")}`,
          )
          if ((skills as string[]).length >= 2) {
            suggestions.push(
              `• Include a project that demonstrates your experience with ${(skills as string[]).slice(0, 2).join(" and ")}`,
            )
          }
          break

        case "Networking Skills":
          suggestions.push(`• Highlight your experience with ${(skills as string[]).join(", ")} in your work history`)
          suggestions.push(`• Add specific examples of network configurations or troubleshooting you've performed`)
          break

        case "Certifications":
          suggestions.push(
            `• Add a dedicated "Certifications" section and consider obtaining ${(skills as string[]).join(", ")}`,
          )
          suggestions.push(`• Mention any in-progress certifications or relevant training`)
          break

        case "Cloud & DevOps":
          suggestions.push(`• Highlight any experience with ${(skills as string[]).join(", ")} platforms`)
          suggestions.push(`• Add a bullet point about deploying applications to cloud environments`)
          break

        case "Databases":
          suggestions.push(`• Include experience with ${(skills as string[]).join(", ")} databases`)
          suggestions.push(`• Mention database design, optimization, or migration projects`)
          break

        case "Education":
          if ((skills as string[]).some((s) => s.includes("degree"))) {
            suggestions.push(`• Clearly list your educational qualifications at the top of your resume`)
            suggestions.push(`• If you don't have the exact degree, highlight equivalent experience or certifications`)
          }
          break

        default:
          suggestions.push(`• Add ${categoryLower} skills: ${(skills as string[]).join(", ")}`)
      }
    }
  })

  // Add general improvement suggestions
  suggestions.push("• Use action verbs at the beginning of each bullet point (e.g., Developed, Implemented, Optimized)")
  suggestions.push("• Quantify achievements with metrics where possible (e.g., Reduced load time by 40%)")
  suggestions.push("• Tailor your resume summary to specifically address the job requirements")
  suggestions.push("• Use industry-standard terminology that matches the job description")

  return suggestions
}

export default function ATSChecker() {
  const [jobDescription, setJobDescription] = useState("")
  const [resume, setResume] = useState("")
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([])
  const [isAnalyzed, setIsAnalyzed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuggesting, setIsSuggesting] = useState(false)

  const handleJdFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleResumeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const content = event.target?.result as string
        setResume(content || "")
      }
      reader.readAsText(file)
    }
  }

  const analyzeResumeHandler = () => {
    if (!jobDescription.trim() || !resume.trim()) return

    setIsLoading(true)
    setAiSuggestions([])

    // Simulate API call delay
    setTimeout(() => {
      const result = analyzeResume(resume, jobDescription)
      setAnalysisResult(result)
      setIsAnalyzed(true)
      setIsLoading(false)
    }, 1500)
  }

  const getAISuggestions = () => {
    if (!analysisResult) return

    setIsSuggesting(true)

    // Simulate AI suggestion generation
    setTimeout(() => {
      const suggestions = generateAISuggestions(analysisResult)
      setAiSuggestions(suggestions)
      setIsSuggesting(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              AI ATS Resume Checker
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Compare your resume against IT job descriptions to optimize for Applicant Tracking Systems.
            </p>
          </div>

          <div className="mb-8">
            <ToolsNavigation showHomeLink={true} showTools={false} />
          </div>

          <TooltipProvider>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6 animate-fade-in">
                <Card className="shadow-lg border-t-4 border-green-500">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <FileText className="h-5 w-5" />
                      Job Description
                    </CardTitle>
                    <CardDescription>
                      Paste an IT job description or upload a file to compare with your resume
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
                          placeholder="Paste IT job description here..."
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
                        onClick={analyzeResumeHandler}
                        disabled={!jobDescription || !resume || isLoading}
                        className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
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

              {isAnalyzed && analysisResult && (
                <div className="space-y-6 animate-fade-in">
                  <Card className="shadow-lg border-t-4 border-green-500">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                      <CardTitle className="flex items-center gap-2 text-green-700">Match Score</CardTitle>
                      <CardDescription>How well your resume matches the IT job description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-4">
                        <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                          {analysisResult.matchScore}%
                        </div>
                        <Progress
                          value={analysisResult.matchScore}
                          className="h-3 bg-gray-100"
                          indicatorClassName={`bg-gradient-to-r ${
                            analysisResult.matchScore >= 80
                              ? "from-green-500 to-green-600"
                              : analysisResult.matchScore >= 60
                                ? "from-yellow-500 to-green-500"
                                : "from-red-500 to-yellow-500"
                          }`}
                        />
                        <div className="mt-2 text-sm text-gray-500">
                          {analysisResult.matchScore >= 80
                            ? "Excellent match! Your resume is well-aligned with this IT job."
                            : analysisResult.matchScore >= 60
                              ? "Good match. With a few technical skill additions, your resume could be even better aligned."
                              : "Your resume needs significant improvements to match this IT job description."}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div>
                          <h3 className="font-semibold flex items-center gap-2 mb-3">
                            <CheckCircle className="text-green-500 h-5 w-5" />
                            Matched Skills
                          </h3>
                          <div className="space-y-3">
                            {Object.entries(analysisResult.matched).map(([category, skills]) => {
                              if ((skills as string[]).length === 0) return null
                              return (
                                <div key={category}>
                                  <h4 className="text-sm font-medium text-gray-600">{category}:</h4>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {(skills as string[]).map((skill) => (
                                      <Tooltip key={skill}>
                                        <TooltipTrigger asChild>
                                          <span className="match text-xs">{skill}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Found in your resume</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    ))}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold flex items-center gap-2 mb-3">
                            <XCircle className="text-red-500 h-5 w-5" />
                            Missing Skills
                          </h3>
                          <div className="space-y-3">
                            {Object.entries(analysisResult.missing).map(([category, skills]) => {
                              if ((skills as string[]).length === 0) return null
                              return (
                                <div key={category}>
                                  <h4 className="text-sm font-medium text-gray-600">{category}:</h4>
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {(skills as string[]).map((skill) => (
                                      <Tooltip key={skill}>
                                        <TooltipTrigger asChild>
                                          <span className="missing text-xs">{skill}</span>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p>Required but not found in your resume</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    ))}
                                  </div>
                                </div>
                              )
                            })}
                          </div>
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
                      <CardDescription>Recommendations to improve your resume for this IT job</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {aiSuggestions.length > 0 ? (
                        <ul className="space-y-2">
                          {aiSuggestions.map((suggestion, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-yellow-50 transition-colors"
                            >
                              <span dangerouslySetInnerHTML={{ __html: suggestion }} />
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="space-y-2">
                          {analysisResult.suggestions.map((suggestion: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 p-2 rounded-md hover:bg-yellow-50 transition-colors"
                            >
                              <span className="text-yellow-500 mt-1">•</span>
                              <span>{suggestion}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                    <CardFooter className="bg-gray-50 flex justify-between">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={getAISuggestions}
                        disabled={isSuggesting}
                      >
                        {isSuggesting ? (
                          <>
                            <Sparkles className="h-4 w-4 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Lightbulb className="h-4 w-4" />
                            AI Suggest
                          </>
                        )}
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Analysis
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card className="shadow-lg border border-blue-200">
                    <CardHeader className="py-3 bg-blue-50">
                      <CardTitle className="text-sm text-blue-700">Required IT Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="py-3">
                      <div className="space-y-3">
                        {Object.entries(analysisResult.jobSkills).map(([category, skills]) => {
                          if ((skills as string[]).length === 0) return null

                          return (
                            <div key={category} className="border-b pb-2 last:border-0">
                              <h4 className="text-sm font-medium text-gray-600 flex items-center gap-2">
                                {category === "Programming Languages" && <Code className="h-4 w-4 text-blue-600" />}
                                {category === "Frameworks & Libraries" && <Zap className="h-4 w-4 text-green-600" />}
                                {category === "Certifications" && <Award className="h-4 w-4 text-purple-600" />}
                                {category === "Networking Skills" && <Network className="h-4 w-4 text-amber-600" />}
                                {category === "Cloud & DevOps" && <Server className="h-4 w-4 text-cyan-600" />}
                                {category === "Databases" && <Database className="h-4 w-4 text-red-600" />}
                                {category === "Education" && <GraduationCap className="h-4 w-4 text-indigo-600" />}
                                {category}:
                              </h4>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {(skills as string[]).map((skill) => (
                                  <span
                                    key={skill}
                                    className={`px-2 py-1 text-xs rounded ${
                                      analysisResult.resumeSkills[category].includes(skill)
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800"
                                    }`}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )
                        })}
                      </div>
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
          </TooltipProvider>
        </div>
      </main>

      <Footer />
    </div>
  )
}
