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
  Network,
  Server,
  Database,
  GraduationCap,
} from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Helper function to extract keywords from job description
const extractKeywords = (jobDescription: string) => {
  // Initialize extracted keywords object
  const extractedKeywords: any = {
    jobTitles: [],
    yearsRequired: [],
    education: [],
    certifications: [],
    networkingSkills: [],
    securitySkills: [],
    cloudPlatforms: [],
    programmingLanguages: [],
    frameworks: [],
    databases: [],
    operatingSystems: [],
    softwareTools: [],
    methodologies: [],
  }

  // Extract years of experience patterns
  const yearsRegex = /(\d+)[+]?\s*(year|yr|yrs|years)(\s*of\s*experience)?/gi
  const yearsMatches = [...jobDescription.matchAll(yearsRegex)]
  extractedKeywords.yearsRequired = yearsMatches.map((match) => ({
    name: match[0],
    description: `${match[1]}+ years of experience required`,
  }))

  // Extract education requirements
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

  // Extract job titles
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

  // Extract certifications
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

  // Extract networking skills
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

  // Extract security skills
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

  // Extract cloud platforms
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

  // Extract programming languages
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

  // Extract frameworks and libraries
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

  // Extract databases
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

  // Extract operating systems
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

  // Extract software tools
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

  // Extract methodologies and concepts
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

  // Function to find patterns in job description
  const findPatterns = (patterns: string[], category: string) => {
    const lowerJobDesc = jobDescription.toLowerCase()
    const found: { [key: string]: boolean } = {}

    patterns.forEach((pattern) => {
      // Create regex that handles word boundaries and special characters
      const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      const regex = new RegExp(`\\b${escapedPattern}\\b`, "i")

      if (regex.test(jobDescription)) {
        // Avoid duplicates by checking if we've already found this pattern
        if (!found[pattern.toLowerCase()]) {
          found[pattern.toLowerCase()] = true

          // Find the actual match in the original case
          const matchRegex = new RegExp(`\\b${escapedPattern}\\b`, "i")
          const match = jobDescription.match(matchRegex)

          if (match) {
            extractedKeywords[category].push({
              name: match[0],
              description: `Required ${category.replace(/([A-Z])/g, " $1").toLowerCase()}: ${match[0]}`,
            })
          }
        }
      }
    })

    // Special case for education - look for degree + field combinations
    if (category === "education") {
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
          const match = jobDescription.match(regex)

          if (match) {
            extractedKeywords.education.push({
              name: match[0],
              description: `Required education: ${match[0]}`,
            })
          }
        }
      }
    }
  }

  // Find patterns for each category
  findPatterns(jobTitlePatterns, "jobTitles")
  findPatterns(educationPatterns, "education")
  findPatterns(certificationPatterns, "certifications")
  findPatterns(networkingPatterns, "networkingSkills")
  findPatterns(securityPatterns, "securitySkills")
  findPatterns(cloudPatterns, "cloudPlatforms")
  findPatterns(programmingPatterns, "programmingLanguages")
  findPatterns(frameworkPatterns, "frameworks")
  findPatterns(databasePatterns, "databases")
  findPatterns(osPatterns, "operatingSystems")
  findPatterns(toolPatterns, "softwareTools")
  findPatterns(methodologyPatterns, "methodologies")

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
    booleanParts.push(`("Network Engineer" OR "Network Administrator" OR "Systems Administrator")`)
  }

  // Add networking skills
  if (keywords.networkingSkills.length > 0) {
    const skills = keywords.networkingSkills.map((skill: any) => `"${skill.name}"`).join(" OR ")
    booleanParts.push(`(${skills})`)
  }

  // Add certifications
  if (keywords.certifications.length > 0) {
    const certs = keywords.certifications.map((cert: any) => `"${cert.name}"`).join(" OR ")
    booleanParts.push(`(${certs})`)
  }

  // Add security skills
  if (keywords.securitySkills.length > 0) {
    const skills = keywords.securitySkills.map((skill: any) => `"${skill.name}"`).join(" OR ")
    booleanParts.push(`(${skills})`)
  }

  // Add cloud platforms
  if (keywords.cloudPlatforms.length > 0) {
    const platforms = keywords.cloudPlatforms.map((platform: any) => `"${platform.name}"`).join(" OR ")
    booleanParts.push(`(${platforms})`)
  }

  // Add programming languages
  if (keywords.programmingLanguages.length > 0) {
    const langs = keywords.programmingLanguages.map((lang: any) => `"${lang.name}"`).join(" OR ")
    booleanParts.push(`(${langs})`)
  }

  // Add operating systems
  if (keywords.operatingSystems.length > 0) {
    const systems = keywords.operatingSystems.map((os: any) => `"${os.name}"`).join(" OR ")
    booleanParts.push(`(${systems})`)
  }

  // Add education
  if (keywords.education.length > 0) {
    const edu = keywords.education.map((item: any) => `"${item.name}"`).join(" OR ")
    booleanParts.push(`(${edu})`)
  }

  // Add exclusions
  booleanParts.push(`-intern -internship -junior -trainee`)

  // Join all parts with AND
  return booleanParts.join(" AND \n")
}

// Function to suggest additional keywords based on existing ones
const suggestAdditionalKeywords = async (keywords: any) => {
  // This would normally call an external AI API
  // For now, we'll simulate with some predefined suggestions

  const suggestions: any = {
    jobTitles: [],
    certifications: [],
    networkingSkills: [],
    securitySkills: [],
    cloudPlatforms: [],
    programmingLanguages: [],
    operatingSystems: [],
    education: [],
  }

  // Suggest related job titles
  keywords.jobTitles.forEach((title: any) => {
    if (title.name.includes("Network Engineer")) {
      suggestions.jobTitles.push({
        name: "Network Architect",
        description: "Senior-level network design role",
      })
    }
    if (title.name.includes("Administrator")) {
      suggestions.jobTitles.push({
        name: title.name.replace("Administrator", "Engineer"),
        description: "Related job title",
      })
    }
  })

  // Suggest related certifications
  keywords.certifications.forEach((cert: any) => {
    if (cert.name === "CCNA") {
      suggestions.certifications.push({
        name: "CCNP",
        description: "Advanced Cisco certification",
      })
    }
    if (cert.name.includes("CompTIA")) {
      suggestions.certifications.push({
        name: "CompTIA Security+",
        description: "Security certification from CompTIA",
      })
    }
  })

  // Suggest related networking skills
  keywords.networkingSkills.forEach((skill: any) => {
    if (skill.name === "TCP/IP") {
      suggestions.networkingSkills.push({
        name: "OSI Model",
        description: "Fundamental networking concept",
      })
    }
    if (skill.name === "VLANs") {
      suggestions.networkingSkills.push({
        name: "Trunking",
        description: "Related to VLAN implementation",
      })
    }
    if (skill.name === "Cisco") {
      suggestions.networkingSkills.push({
        name: "Cisco IOS",
        description: "Cisco's network operating system",
      })
    }
  })

  // Suggest related security skills
  keywords.securitySkills.forEach((skill: any) => {
    if (skill.name.includes("Firewall")) {
      suggestions.securitySkills.push({
        name: "ACLs",
        description: "Access Control Lists for security",
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

    // Extract keywords from job description
    setTimeout(() => {
      const keywords = extractKeywords(jobDescription)
      setExtractedKeywords(keywords)

      const generatedString = generateBooleanString(keywords)
      setBooleanString(generatedString)

      setIsAnalyzed(true)
      setIsLoading(false)
    }, 1500)
  }

  const suggestMoreKeywords = async () => {
    if (!extractedKeywords) return

    setIsSuggesting(true)

    // Simulate AI suggestion
    try {
      const suggestions = await suggestAdditionalKeywords(extractedKeywords)
      setSuggestedKeywords(suggestions)
    } catch (error) {
      console.error("Error getting suggestions:", error)
    } finally {
      setIsSuggesting(false)
    }
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
                          {extractedKeywords.jobTitles.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Briefcase className="h-4 w-4 text-blue-600" />
                                Job Titles:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.jobTitles.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-skill cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Education */}
                          {extractedKeywords.education.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-purple-600" />
                                Education:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.education.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-environment cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Years Required */}
                          {extractedKeywords.yearsRequired.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Users className="h-4 w-4 text-amber-600" />
                                Years of Experience:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.yearsRequired.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-environment cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Certifications */}
                          {extractedKeywords.certifications.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Award className="h-4 w-4 text-green-600" />
                                Certifications:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.certifications.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-concept cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Networking Skills */}
                          {extractedKeywords.networkingSkills.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Network className="h-4 w-4 text-blue-600" />
                                Networking Skills:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.networkingSkills.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Security Skills */}
                          {extractedKeywords.securitySkills.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Server className="h-4 w-4 text-red-600" />
                                Security Skills:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.securitySkills.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Cloud Platforms */}
                          {extractedKeywords.cloudPlatforms.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Server className="h-4 w-4 text-purple-600" />
                                Cloud & DevOps:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.cloudPlatforms.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Programming Languages */}
                          {extractedKeywords.programmingLanguages.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Code className="h-4 w-4 text-green-600" />
                                Programming Languages:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.programmingLanguages.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Frameworks */}
                          {extractedKeywords.frameworks.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-blue-600" />
                                Frameworks & Libraries:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.frameworks.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tech cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Databases */}
                          {extractedKeywords.databases.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Database className="h-4 w-4 text-purple-600" />
                                Databases:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.databases.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Operating Systems */}
                          {extractedKeywords.operatingSystems.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Server className="h-4 w-4 text-blue-600" />
                                Operating Systems:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.operatingSystems.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Software Tools */}
                          {extractedKeywords.softwareTools.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <FileText className="h-4 w-4 text-purple-600" />
                                Software Tools:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.softwareTools.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-tool cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Methodologies */}
                          {extractedKeywords.methodologies.length > 0 && (
                            <div>
                              <h3 className="font-semibold capitalize mb-2 flex items-center gap-2">
                                <Lightbulb className="h-4 w-4 text-red-600" />
                                Methodologies & Concepts:
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {extractedKeywords.methodologies.map((keyword: any) => (
                                  <Tooltip key={keyword.name}>
                                    <TooltipTrigger asChild>
                                      <span className="highlight-concept cursor-help">{keyword.name}</span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{keyword.description}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </div>
                          )}
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
