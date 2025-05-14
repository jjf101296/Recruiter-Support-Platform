"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolsNavigation } from "@/components/tools-navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, FileText, DollarSign, BarChart, Info, TrendingUp, TrendingDown } from "lucide-react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Mock data for demonstration
const taxTerms = [
  {
    category: "Employment Types",
    terms: [
      {
        name: "W-2 Employee",
        description:
          "Traditional employment relationship where the employer withholds income taxes, Social Security, and Medicare from wages.",
        details: [
          "Employer pays half of Social Security and Medicare taxes",
          "Eligible for unemployment benefits",
          "Employer provides benefits (health insurance, retirement plans, etc.)",
          "Limited tax deductions for work-related expenses",
        ],
      },
      {
        name: "1099 Contractor",
        description: "Independent contractor who receives payment for services without tax withholding.",
        details: [
          "Responsible for all Social Security and Medicare taxes (self-employment tax)",
          "Not eligible for unemployment benefits",
          "No employer-provided benefits",
          "Can deduct business expenses on Schedule C",
          "Must pay quarterly estimated taxes",
        ],
      },
      {
        name: "C2C (Corp-to-Corp)",
        description:
          "Business-to-business relationship where a contractor's corporation provides services to a client corporation.",
        details: [
          "Requires forming a legal business entity (LLC, S-Corp, C-Corp)",
          "More tax deduction opportunities",
          "Can potentially reduce self-employment taxes with S-Corp",
          "More administrative responsibilities (business filings, separate accounting)",
          "Can hire employees and offer benefits through your corporation",
        ],
      },
    ],
  },
  {
    category: "Tax Forms",
    terms: [
      {
        name: "W-2 Form",
        description: "Wage and Tax Statement provided by employers showing annual wages and taxes withheld.",
        details: [
          "Issued by January 31 for the previous tax year",
          "Shows federal, state, and local income taxes withheld",
          "Reports Social Security and Medicare taxes withheld",
          "Includes retirement plan contributions and benefits information",
        ],
      },
      {
        name: "1099-NEC Form",
        description: "Reports non-employee compensation of $600 or more paid to an independent contractor.",
        details: [
          "Replaced 1099-MISC (Box 7) starting in 2020",
          "No taxes are withheld",
          "Issued by January 31 for the previous tax year",
          "Recipient must pay self-employment tax",
        ],
      },
      {
        name: "1099-MISC Form",
        description: "Reports miscellaneous income such as rent, prizes, awards, and other payments.",
        details: [
          "Used for various types of payments other than non-employee compensation",
          "Includes royalties, rent, prizes, and other income",
          "No taxes are withheld",
          "Issued by January 31 for the previous tax year",
        ],
      },
    ],
  },
]

// State tax data for visualization
const stateTaxData = [
  { state: "California", rate: 13.3 },
  { state: "Hawaii", rate: 11.0 },
  { state: "New Jersey", rate: 10.75 },
  { state: "Oregon", rate: 9.9 },
  { state: "Minnesota", rate: 9.85 },
  { state: "New York", rate: 10.9 },
  { state: "Vermont", rate: 8.75 },
  { state: "Iowa", rate: 8.53 },
  { state: "Wisconsin", rate: 7.65 },
  { state: "Maine", rate: 7.15 },
  { state: "South Carolina", rate: 7.0 },
  { state: "Connecticut", rate: 6.99 },
  { state: "Idaho", rate: 6.925 },
  { state: "Montana", rate: 6.9 },
  { state: "Nebraska", rate: 6.84 },
  { state: "Delaware", rate: 6.6 },
  { state: "West Virginia", rate: 6.5 },
  { state: "Georgia", rate: 5.75 },
  { state: "Kentucky", rate: 5.0 },
  { state: "Massachusetts", rate: 5.0 },
  { state: "Virginia", rate: 5.75 },
  { state: "Colorado", rate: 4.55 },
  { state: "Utah", rate: 4.95 },
  { state: "Arizona", rate: 4.5 },
  { state: "Michigan", rate: 4.25 },
  { state: "Indiana", rate: 3.23 },
  { state: "Pennsylvania", rate: 3.07 },
  { state: "North Dakota", rate: 2.9 },
  { state: "Florida", rate: 0 },
  { state: "Texas", rate: 0 },
  { state: "Washington", rate: 0 },
  { state: "Nevada", rate: 0 },
  { state: "Wyoming", rate: 0 },
  { state: "South Dakota", rate: 0 },
  { state: "Alaska", rate: 0 },
  { state: "Tennessee", rate: 0 },
  { state: "New Hampshire", rate: 5.0 },
]

// Sort states by tax rate for visualization
const sortedStateTaxData = [...stateTaxData].sort((a, b) => b.rate - a.rate)
const topHighestTax = sortedStateTaxData.slice(0, 10)
const topLowestTax = [...sortedStateTaxData]
  .filter((state) => state.rate > 0)
  .slice(-10)
  .reverse()
const noIncomeTaxStates = sortedStateTaxData.filter((state) => state.rate === 0)

export default function TaxTerms() {
  const [searchTerm, setSearchTerm] = useState("")

  // Filter terms based on search
  const filteredTerms = taxTerms
    .map((category) => ({
      ...category,
      terms: category.terms.filter(
        (term) =>
          term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.description.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.terms.length > 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-red-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
              US Tax Terms Glossary
            </h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Essential tax terms and state tax information for recruiters and job seekers.
            </p>
          </div>

          <div className="mb-8">
            <ToolsNavigation showHomeLink={true} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <Card className="shadow-lg border-t-4 border-red-500">
                <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                  <CardTitle className="flex items-center gap-2 text-red-700">
                    <FileText className="h-5 w-5" />
                    Tax Terms
                  </CardTitle>
                  <CardDescription>Common tax terms used in recruitment and employment</CardDescription>
                  <div className="relative mt-2">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      placeholder="Search terms..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue={taxTerms[0].category}>
                    <TabsList className="mb-4">
                      {taxTerms.map((category) => (
                        <TabsTrigger key={category.category} value={category.category}>
                          {category.category}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {filteredTerms.length > 0 ? (
                      filteredTerms.map((category) => (
                        <TabsContent key={category.category} value={category.category} className="space-y-4">
                          {category.terms.map((term) => (
                            <Card key={term.name} className="hover:shadow-md transition-all duration-300">
                              <CardHeader className="py-3 bg-gradient-to-r from-red-50 to-red-100">
                                <CardTitle className="text-lg flex items-center gap-2 text-red-700">
                                  <FileText className="h-4 w-4" />
                                  {term.name}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="py-3">
                                <p className="text-sm text-gray-600 mb-3">{term.description}</p>
                                <div className="space-y-1">
                                  {term.details.map((detail, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start gap-2 text-sm p-1 rounded hover:bg-red-50 transition-colors"
                                    >
                                      <span className="text-red-500 mt-1">•</span>
                                      <span>{detail}</span>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                              <CardFooter className="py-2 bg-gray-50">
                                <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                                  <Info className="h-3 w-3 mr-1" />
                                  Recruitment Impact
                                </Badge>
                              </CardFooter>
                            </Card>
                          ))}
                        </TabsContent>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Info className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-600">No results found</h3>
                        <p className="text-gray-500">Try a different search term</p>
                      </div>
                    )}
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <Card className="shadow-lg border-t-4 border-purple-500">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <BarChart className="h-5 w-5" />
                      State Income Tax Rates
                    </CardTitle>
                    <CardDescription>Highest and lowest state income tax rates (2023)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ChartContainer
                        config={{
                          rate: {
                            label: "Tax Rate (%)",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={sortedStateTaxData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="state" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Line
                              type="monotone"
                              dataKey="rate"
                              stroke="var(--color-rate)"
                              name="Tax Rate (%)"
                              strokeWidth={2}
                              activeDot={{ r: 8 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-lg border-t-4 border-red-500">
                    <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
                      <CardTitle className="flex items-center gap-2 text-red-700">
                        <TrendingUp className="h-5 w-5" />
                        Highest State Income Tax
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {topHighestTax.map((state, index) => (
                          <div
                            key={state.state}
                            className="flex justify-between items-center py-1 px-2 border-b last:border-0 hover:bg-red-50 rounded transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600 w-6">{index + 1}.</span>
                              <span>{state.state}</span>
                            </div>
                            <div className="font-semibold text-red-600">{state.rate}%</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-t-4 border-green-500">
                    <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                      <CardTitle className="flex items-center gap-2 text-green-700">
                        <TrendingDown className="h-5 w-5" />
                        Lowest State Income Tax
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {topLowestTax.map((state, index) => (
                          <div
                            key={state.state}
                            className="flex justify-between items-center py-1 px-2 border-b last:border-0 hover:bg-green-50 rounded transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-600 w-6">{index + 1}.</span>
                              <span>{state.state}</span>
                            </div>
                            <div className="font-semibold text-green-600">{state.rate}%</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="shadow-lg border-t-4 border-green-500">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-green-100">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <DollarSign className="h-5 w-5" />
                      States with No Income Tax
                    </CardTitle>
                    <CardDescription>
                      These states do not impose income tax on residents, making them attractive for high-income
                      professionals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {noIncomeTaxStates.map((state) => (
                        <div
                          key={state.state}
                          className="bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-lg p-3 text-center shadow hover:shadow-md transition-all duration-300 hover:scale-105"
                        >
                          <span className="font-medium">{state.state}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 flex justify-end">
                    <Button variant="outline" size="sm" className="text-green-600">
                      <Info className="h-4 w-4 mr-2" />
                      Tax Planning Guide
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
