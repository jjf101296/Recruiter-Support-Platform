import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Clock,
  CheckCircle,
  XCircle,
  Users,
  Briefcase,
  GraduationCap,
  Globe,
  StampIcon as Passport,
  ArrowRight,
  Info,
  ArrowLeft,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock data for demonstration
const visaCategories = [
  {
    id: "permanent",
    name: "Permanent Residency",
    description: "Long-term and permanent immigration statuses",
    color: "amber",
    visas: [
      {
        name: "U.S. Citizen (USC)",
        eligibility: "Born in the US, naturalized, or derived citizenship",
        duration: "Permanent",
        benefits: [
          "Right to vote in federal elections",
          "Ability to travel with a US passport",
          "Eligibility for federal jobs",
          "Cannot be deported",
        ],
        limitations: [],
        icon: <Globe className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "Green Card (Permanent Resident)",
        eligibility: "Through family, employment, investment, refugee/asylum status, or diversity lottery",
        duration: "10 years (renewable)",
        benefits: [
          "Live and work permanently in the US",
          "Sponsor certain relatives for green cards",
          "Apply for US citizenship after 3-5 years",
        ],
        limitations: [
          "Cannot vote in federal elections",
          "Can be deported for certain criminal offenses",
          "Must maintain residence in the US",
        ],
        icon: <Passport className="h-8 w-8 text-green-600" />,
      },
      {
        name: "EB-2 (Employment-Based Second Preference)",
        eligibility: "Advanced degree professionals or exceptional ability individuals",
        duration: "Leads to permanent residency",
        benefits: [
          "Path to permanent residency",
          "Spouse and unmarried children under 21 can be included",
          "National Interest Waiver (NIW) option available",
        ],
        limitations: [
          "Labor certification usually required",
          "Long processing times",
          "Country-based quotas may cause delays",
        ],
        icon: <Briefcase className="h-8 w-8 text-purple-600" />,
      },
      {
        name: "EB-3 (Employment-Based Third Preference)",
        eligibility: "Skilled workers, professionals, and unskilled workers",
        duration: "Leads to permanent residency",
        benefits: ["Path to permanent residency", "Spouse and unmarried children under 21 can be included"],
        limitations: [
          "Labor certification required",
          "Longer wait times than EB-2",
          "Country-based quotas may cause significant delays",
        ],
        icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      },
    ],
  },
  {
    id: "work",
    name: "Work Visas",
    description: "Temporary visas for employment in the United States",
    color: "blue",
    visas: [
      {
        name: "H-1B",
        eligibility: "Specialty occupation requiring at least a bachelor's degree",
        duration: "3 years, extendable to 6 years",
        benefits: [
          "Dual intent (can pursue green card)",
          "Spouse and children can accompany (H-4)",
          "Some H-4 spouses eligible for work authorization",
        ],
        limitations: [
          "Annual cap (65,000 + 20,000 for US master's degrees)",
          "Employer-specific",
          "Lottery system for selection",
        ],
        icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "H-4 EAD",
        eligibility:
          "Spouses of H-1B visa holders who are in the process of seeking employment-based lawful permanent resident status",
        duration: "Valid as long as spouse maintains H-1B status",
        benefits: ["Work authorization in the US", "Can work for any employer", "Self-employment permitted"],
        limitations: [
          "Dependent on spouse's H-1B status",
          "Must renew when H-1B is renewed",
          "Subject to policy changes",
        ],
        icon: <Users className="h-8 w-8 text-green-600" />,
      },
      {
        name: "TN (NAFTA/USMCA)",
        eligibility: "Canadian and Mexican professionals in specific occupations",
        duration: "3 years (renewable)",
        benefits: ["Relatively quick processing", "No annual cap", "Spouse and children can accompany (TD status)"],
        limitations: [
          "Limited to specific professions",
          "No direct path to permanent residency (non-dual intent)",
          "TD dependents cannot work",
        ],
        icon: <Globe className="h-8 w-8 text-red-600" />,
      },
      {
        name: "E-3 (Australian)",
        eligibility: "Australian citizens in specialty occupations",
        duration: "2 years (renewable)",
        benefits: [
          "Annual quota of 10,500 (rarely reached)",
          "Spouse eligible for work authorization",
          "Faster processing than H-1B",
        ],
        limitations: [
          "Limited to Australian citizens",
          "Technically not dual intent (but can pursue green card)",
          "Must maintain non-immigrant intent",
        ],
        icon: <Globe className="h-8 w-8 text-yellow-600" />,
      },
    ],
  },
  {
    id: "student",
    name: "Student Visas",
    description: "Visas for academic study and practical training",
    color: "green",
    visas: [
      {
        name: "F-1 (Student)",
        eligibility: "Full-time students at accredited US academic institutions",
        duration: "Duration of program + 60 days",
        benefits: [
          "On-campus employment allowed (20 hours/week)",
          "Eligible for CPT and OPT work authorization",
          "Spouse and children can accompany (F-2)",
        ],
        limitations: [
          "Limited work options",
          "Must maintain full course load",
          "F-2 dependents cannot work or study full-time",
        ],
        icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      },
      {
        name: "OPT (Optional Practical Training)",
        eligibility: "F-1 students who have completed or been enrolled for at least 9 months",
        duration: "12 months + 24 month extension for STEM graduates",
        benefits: [
          "Work in field related to study",
          "Can work for any employer",
          "STEM extension available for qualifying degrees",
        ],
        limitations: [
          "Limited duration",
          "Must be related to field of study",
          "Unemployment limitations (90 days, 150 for STEM OPT)",
        ],
        icon: <Briefcase className="h-8 w-8 text-green-600" />,
      },
      {
        name: "CPT (Curricular Practical Training)",
        eligibility: "F-1 students who have completed one academic year",
        duration: "Varies based on program requirements",
        benefits: [
          "Work experience as part of curriculum",
          "No application to USCIS required (authorized by DSO)",
          "No annual limit on participation",
        ],
        limitations: [
          "Must be integral to curriculum",
          "More than 12 months of full-time CPT eliminates OPT eligibility",
          "Limited to specific employer and time period",
        ],
        icon: <GraduationCap className="h-8 w-8 text-purple-600" />,
      },
    ],
  },
]

export default function VisaTypes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-amber-600">USA VISA Types</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Comprehensive guide to major US visa categories, eligibility requirements, and benefits.
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

          <Card className="shadow-lg border-t-4 border-amber-500">
            <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <Passport className="h-5 w-5" />
                Visa Categories
              </CardTitle>
              <CardDescription>
                Select a category to view detailed information about different visa types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={visaCategories[0].id}>
                <TabsList className="grid grid-cols-3 mb-6">
                  {visaCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="relative">
                      <div className="flex flex-col items-center">
                        <span>{category.name}</span>
                        <span className={`text-xs text-${category.color}-600 mt-1`}>{category.description}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {visaCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.visas.map((visa) => (
                        <Card
                          key={visa.name}
                          className="overflow-hidden border-t-4 border-amber-500 hover:shadow-lg transition-all duration-300"
                        >
                          <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100">
                            <div className="flex items-center gap-3">
                              {visa.icon}
                              <div>
                                <CardTitle>{visa.name}</CardTitle>
                                <CardDescription>{visa.eligibility}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div>
                                <h3 className="font-semibold flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-blue-600" />
                                  Duration
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{visa.duration}</p>
                              </div>

                              <div>
                                <h3 className="font-semibold flex items-center gap-2">
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                  Benefits
                                </h3>
                                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                                  {visa.benefits.map((benefit, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start gap-2 p-1 rounded hover:bg-green-50 transition-colors"
                                    >
                                      <span className="text-green-500 mt-1">•</span>
                                      <span>{benefit}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {visa.limitations.length > 0 && (
                                <div>
                                  <h3 className="font-semibold flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-red-600" />
                                    Limitations
                                  </h3>
                                  <ul className="text-sm text-gray-600 mt-1 space-y-1">
                                    {visa.limitations.map((limitation, index) => (
                                      <li
                                        key={index}
                                        className="flex items-start gap-2 p-1 rounded hover:bg-red-50 transition-colors"
                                      >
                                        <span className="text-red-500 mt-1">•</span>
                                        <span>{limitation}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div className="pt-2">
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                                  <Info className="h-3 w-3 mr-1" />
                                  Recruitment Insights
                                  <ArrowRight className="h-3 w-3 ml-1" />
                                </Badge>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
