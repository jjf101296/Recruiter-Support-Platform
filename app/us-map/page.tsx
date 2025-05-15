"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2, Users, Trophy, Landmark, MapPin, Briefcase, DollarSign, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Complete data for all 50 states
const timeZones = [
  {
    name: "Eastern Time (ET)",
    states: [
      {
        name: "Connecticut",
        abbr: "CT",
        capital: "Hartford",
        governor: "Ned Lamont",
        sports: "UConn Huskies",
        population: "3.57 million",
        companies: "Aetna, United Technologies, The Hartford",
        industries: "Insurance, Defense, Manufacturing",
      },
      {
        name: "Delaware",
        abbr: "DE",
        capital: "Dover",
        governor: "John Carney",
        sports: "Delaware Blue Hens",
        population: "989,948",
        companies: "DuPont, AstraZeneca, Bank of America",
        industries: "Banking, Chemicals, Agriculture",
      },
      {
        name: "Florida",
        abbr: "FL",
        capital: "Tallahassee",
        governor: "Ron DeSantis",
        sports: "Miami Heat, Tampa Bay Buccaneers, Orlando Magic",
        population: "21.78 million",
        companies: "Disney, Publix, NextEra Energy",
        industries: "Tourism, Agriculture, Aerospace",
      },
      {
        name: "Georgia",
        abbr: "GA",
        capital: "Atlanta",
        governor: "Brian Kemp",
        sports: "Atlanta Braves, Atlanta Falcons, Atlanta Hawks",
        population: "10.8 million",
        companies: "Coca-Cola, Home Depot, UPS",
        industries: "Agriculture, Manufacturing, Film Production",
      },
      {
        name: "Maine",
        abbr: "ME",
        capital: "Augusta",
        governor: "Janet Mills",
        sports: "Portland Sea Dogs",
        population: "1.36 million",
        companies: "L.L. Bean, IDEXX Laboratories, WEX Inc.",
        industries: "Fishing, Tourism, Agriculture",
      },
      {
        name: "Maryland",
        abbr: "MD",
        capital: "Annapolis",
        governor: "Wes Moore",
        sports: "Baltimore Ravens, Baltimore Orioles",
        population: "6.17 million",
        companies: "Lockheed Martin, Marriott International, T. Rowe Price",
        industries: "Biotechnology, Defense, Healthcare",
      },
      {
        name: "Massachusetts",
        abbr: "MA",
        capital: "Boston",
        governor: "Maura Healey",
        sports: "Boston Red Sox, Boston Celtics, New England Patriots",
        population: "6.98 million",
        companies: "General Electric, Liberty Mutual, Raytheon",
        industries: "Education, Biotechnology, Finance",
      },
      {
        name: "New Hampshire",
        abbr: "NH",
        capital: "Concord",
        governor: "Chris Sununu",
        sports: "New Hampshire Fisher Cats",
        population: "1.38 million",
        companies: "Dartmouth-Hitchcock, BAE Systems, Timberland",
        industries: "Manufacturing, Healthcare, Tourism",
      },
      {
        name: "New Jersey",
        abbr: "NJ",
        capital: "Trenton",
        governor: "Phil Murphy",
        sports: "New Jersey Devils, New York Jets, New York Giants",
        population: "9.29 million",
        companies: "Johnson & Johnson, Prudential Financial, Merck",
        industries: "Pharmaceuticals, Telecommunications, Finance",
      },
      {
        name: "New York",
        abbr: "NY",
        capital: "Albany",
        governor: "Kathy Hochul",
        sports: "New York Yankees, New York Knicks, Buffalo Bills",
        population: "19.84 million",
        companies: "JPMorgan Chase, IBM, Pfizer",
        industries: "Finance, Media, Technology",
      },
      {
        name: "North Carolina",
        abbr: "NC",
        capital: "Raleigh",
        governor: "Roy Cooper",
        sports: "Carolina Panthers, Charlotte Hornets",
        population: "10.7 million",
        companies: "Bank of America, Duke Energy, Lowe's",
        industries: "Banking, Research, Manufacturing",
      },
      {
        name: "Ohio",
        abbr: "OH",
        capital: "Columbus",
        governor: "Mike DeWine",
        sports: "Cleveland Cavaliers, Cincinnati Bengals, Cleveland Browns",
        population: "11.8 million",
        companies: "Procter & Gamble, Kroger, Cardinal Health",
        industries: "Manufacturing, Healthcare, Research",
      },
      {
        name: "Pennsylvania",
        abbr: "PA",
        capital: "Harrisburg",
        governor: "Josh Shapiro",
        sports: "Philadelphia Eagles, Pittsburgh Steelers, Philadelphia 76ers",
        population: "13 million",
        companies: "Comcast, AmerisourceBergen, Kraft Heinz",
        industries: "Manufacturing, Agriculture, Energy",
      },
      {
        name: "Rhode Island",
        abbr: "RI",
        capital: "Providence",
        governor: "Daniel McKee",
        sports: "Providence Bruins",
        population: "1.1 million",
        companies: "CVS Health, Textron, Citizens Financial Group",
        industries: "Healthcare, Tourism, Manufacturing",
      },
      {
        name: "South Carolina",
        abbr: "SC",
        capital: "Columbia",
        governor: "Henry McMaster",
        sports: "Carolina Panthers (shared with NC), South Carolina Gamecocks",
        population: "5.19 million",
        companies: "Boeing, Michelin, BMW Manufacturing",
        industries: "Aerospace, Automotive, Tourism",
      },
      {
        name: "Vermont",
        abbr: "VT",
        capital: "Montpelier",
        governor: "Phil Scott",
        sports: "Vermont Lake Monsters",
        population: "645,570",
        companies: "Ben & Jerry's, Keurig Dr Pepper, National Life Group",
        industries: "Tourism, Agriculture, Manufacturing",
      },
      {
        name: "Virginia",
        abbr: "VA",
        capital: "Richmond",
        governor: "Glenn Youngkin",
        sports: "Washington Commanders, Washington Capitals",
        population: "8.65 million",
        companies: "Capital One, Northrop Grumman, General Dynamics",
        industries: "Defense, Technology, Agriculture",
      },
      {
        name: "West Virginia",
        abbr: "WV",
        capital: "Charleston",
        governor: "Jim Justice",
        sports: "West Virginia Mountaineers",
        population: "1.79 million",
        companies: "Kroger, Mylan Pharmaceuticals, Toyota Motor Manufacturing",
        industries: "Energy, Healthcare, Tourism",
      },
    ],
  },
  {
    name: "Central Time (CT)",
    states: [
      {
        name: "Alabama",
        abbr: "AL",
        capital: "Montgomery",
        governor: "Kay Ivey",
        sports: "Alabama Crimson Tide, Auburn Tigers",
        population: "5.03 million",
        companies: "Regions Financial, Vulcan Materials, Protective Life",
        industries: "Aerospace, Automotive, Steel",
      },
      {
        name: "Arkansas",
        abbr: "AR",
        capital: "Little Rock",
        governor: "Sarah Huckabee Sanders",
        sports: "Arkansas Razorbacks",
        population: "3.01 million",
        companies: "Walmart, Tyson Foods, J.B. Hunt",
        industries: "Retail, Agriculture, Transportation",
      },
      {
        name: "Illinois",
        abbr: "IL",
        capital: "Springfield",
        governor: "JB Pritzker",
        sports: "Chicago Bulls, Chicago Cubs, Chicago Bears",
        population: "12.67 million",
        companies: "Boeing, McDonald's, Walgreens Boots Alliance",
        industries: "Manufacturing, Agriculture, Finance",
      },
      {
        name: "Iowa",
        abbr: "IA",
        capital: "Des Moines",
        governor: "Kim Reynolds",
        sports: "Iowa Hawkeyes, Iowa State Cyclones",
        population: "3.19 million",
        companies: "Principal Financial, Casey's General Stores, Rockwell Collins",
        industries: "Agriculture, Manufacturing, Insurance",
      },
      {
        name: "Kansas",
        abbr: "KS",
        capital: "Topeka",
        governor: "Laura Kelly",
        sports: "Kansas City Chiefs (shared with MO), Kansas Jayhawks",
        population: "2.94 million",
        companies: "Sprint Corporation, Garmin, Koch Industries",
        industries: "Agriculture, Aerospace, Energy",
      },
      {
        name: "Louisiana",
        abbr: "LA",
        capital: "Baton Rouge",
        governor: "Jeff Landry",
        sports: "New Orleans Saints, New Orleans Pelicans",
        population: "4.65 million",
        companies: "Entergy, CenturyLink, Ochsner Health System",
        industries: "Energy, Tourism, Maritime",
      },
      {
        name: "Minnesota",
        abbr: "MN",
        capital: "St. Paul",
        governor: "Tim Walz",
        sports: "Minnesota Vikings, Minnesota Timberwolves, Minnesota Twins",
        population: "5.71 million",
        companies: "UnitedHealth Group, Target, 3M",
        industries: "Healthcare, Retail, Manufacturing",
      },
      {
        name: "Mississippi",
        abbr: "MS",
        capital: "Jackson",
        governor: "Tate Reeves",
        sports: "Mississippi State Bulldogs, Ole Miss Rebels",
        population: "2.97 million",
        companies: "Sanderson Farms, Ergon, Hancock Whitney",
        industries: "Agriculture, Manufacturing, Tourism",
      },
      {
        name: "Missouri",
        abbr: "MO",
        capital: "Jefferson City",
        governor: "Mike Parson",
        sports: "Kansas City Chiefs, St. Louis Cardinals, St. Louis Blues",
        population: "6.16 million",
        companies: "Centene, Emerson Electric, Edward Jones",
        industries: "Aerospace, Food Processing, Healthcare",
      },
      {
        name: "Nebraska",
        abbr: "NE",
        capital: "Lincoln",
        governor: "Jim Pillen",
        sports: "Nebraska Cornhuskers",
        population: "1.96 million",
        companies: "Berkshire Hathaway, Union Pacific, Kiewit Corporation",
        industries: "Agriculture, Transportation, Insurance",
      },
      {
        name: "North Dakota",
        abbr: "ND",
        capital: "Bismarck",
        governor: "Doug Burgum",
        sports: "North Dakota State Bison",
        population: "779,094",
        companies: "MDU Resources, Scheels, Bobcat Company",
        industries: "Energy, Agriculture, Healthcare",
      },
      {
        name: "Oklahoma",
        abbr: "OK",
        capital: "Oklahoma City",
        governor: "Kevin Stitt",
        sports: "Oklahoma City Thunder, Oklahoma Sooners",
        population: "4 million",
        companies: "Devon Energy, Chesapeake Energy, Continental Resources",
        industries: "Energy, Aviation, Agriculture",
      },
      {
        name: "South Dakota",
        abbr: "SD",
        capital: "Pierre",
        governor: "Kristi Noem",
        sports: "South Dakota Coyotes, South Dakota State Jackrabbits",
        population: "895,376",
        companies: "Sanford Health, Daktronics, Black Hills Corporation",
        industries: "Agriculture, Tourism, Healthcare",
      },
      {
        name: "Tennessee",
        abbr: "TN",
        capital: "Nashville",
        governor: "Bill Lee",
        sports: "Tennessee Titans, Nashville Predators, Memphis Grizzlies",
        population: "6.97 million",
        companies: "FedEx, HCA Healthcare, Dollar General",
        industries: "Healthcare, Music, Automotive",
      },
      {
        name: "Texas",
        abbr: "TX",
        capital: "Austin",
        governor: "Greg Abbott",
        sports: "Dallas Cowboys, Houston Astros, San Antonio Spurs",
        population: "29.53 million",
        companies: "ExxonMobil, AT&T, Dell Technologies",
        industries: "Energy, Technology, Aerospace",
      },
      {
        name: "Wisconsin",
        abbr: "WI",
        capital: "Madison",
        governor: "Tony Evers",
        sports: "Green Bay Packers, Milwaukee Bucks, Milwaukee Brewers",
        population: "5.89 million",
        companies: "Northwestern Mutual, Kohl's, Harley-Davidson",
        industries: "Manufacturing, Agriculture, Healthcare",
      },
    ],
  },
  {
    name: "Mountain Time (MT)",
    states: [
      {
        name: "Arizona",
        abbr: "AZ",
        capital: "Phoenix",
        governor: "Katie Hobbs",
        sports: "Arizona Cardinals, Phoenix Suns, Arizona Diamondbacks",
        population: "7.28 million",
        companies: "Freeport-McMoRan, Republic Services, Avnet",
        industries: "Aerospace, Electronics, Mining",
      },
      {
        name: "Colorado",
        abbr: "CO",
        capital: "Denver",
        governor: "Jared Polis",
        sports: "Denver Broncos, Colorado Avalanche, Denver Nuggets",
        population: "5.81 million",
        companies: "Arrow Electronics, DaVita, Ball Corporation",
        industries: "Aerospace, Technology, Tourism",
      },
      {
        name: "Idaho",
        abbr: "ID",
        capital: "Boise",
        governor: "Brad Little",
        sports: "Boise State Broncos",
        population: "1.84 million",
        companies: "Micron Technology, Albertsons, Idaho Power",
        industries: "Agriculture, Technology, Tourism",
      },
      {
        name: "Montana",
        abbr: "MT",
        capital: "Helena",
        governor: "Greg Gianforte",
        sports: "Montana Grizzlies, Montana State Bobcats",
        population: "1.08 million",
        companies: "Glacier Bancorp, Washington Companies, Simms Fishing Products",
        industries: "Agriculture, Tourism, Energy",
      },
      {
        name: "Nevada",
        abbr: "NV",
        capital: "Carson City",
        governor: "Joe Lombardo",
        sports: "Las Vegas Raiders, Vegas Golden Knights",
        population: "3.1 million",
        companies: "Las Vegas Sands, MGM Resorts, Caesars Entertainment",
        industries: "Tourism, Gaming, Mining",
      },
      {
        name: "New Mexico",
        abbr: "NM",
        capital: "Santa Fe",
        governor: "Michelle Lujan Grisham",
        sports: "New Mexico Lobos",
        population: "2.12 million",
        companies: "Los Alamos National Laboratory, Sandia National Laboratories, Intel",
        industries: "Energy, Research, Tourism",
      },
      {
        name: "Utah",
        abbr: "UT",
        capital: "Salt Lake City",
        governor: "Spencer Cox",
        sports: "Utah Jazz, Real Salt Lake",
        population: "3.27 million",
        companies: "Zions Bancorporation, Huntsman Corporation, SkyWest Airlines",
        industries: "Technology, Healthcare, Tourism",
      },
      {
        name: "Wyoming",
        abbr: "WY",
        capital: "Cheyenne",
        governor: "Mark Gordon",
        sports: "Wyoming Cowboys",
        population: "578,803",
        companies: "Cloud Peak Energy, Wyoming Machinery Company, Union Wireless",
        industries: "Energy, Mining, Tourism",
      },
    ],
  },
  {
    name: "Pacific Time (PT)",
    states: [
      {
        name: "California",
        abbr: "CA",
        capital: "Sacramento",
        governor: "Gavin Newsom",
        sports: "Los Angeles Lakers, San Francisco 49ers, Los Angeles Dodgers",
        population: "39.24 million",
        companies: "Apple, Google, Meta, Tesla",
        industries: "Technology, Entertainment, Agriculture",
      },
      {
        name: "Oregon",
        abbr: "OR",
        capital: "Salem",
        governor: "Tina Kotek",
        sports: "Portland Trail Blazers, Portland Timbers",
        population: "4.24 million",
        companies: "Nike, Columbia Sportswear, Intel",
        industries: "Technology, Forestry, Agriculture",
      },
      {
        name: "Washington",
        abbr: "WA",
        capital: "Olympia",
        governor: "Jay Inslee",
        sports: "Seattle Seahawks, Seattle Mariners, Seattle Kraken",
        population: "7.74 million",
        companies: "Amazon, Microsoft, Starbucks, Boeing",
        industries: "Technology, Aerospace, Agriculture",
      },
    ],
  },
  {
    name: "Alaska Time (AKT)",
    states: [
      {
        name: "Alaska",
        abbr: "AK",
        capital: "Juneau",
        governor: "Mike Dunleavy",
        sports: "Alaska Aces (ECHL)",
        population: "733,391",
        companies: "Alaska Air Group, GCI, ASRC",
        industries: "Oil & Gas, Fishing, Tourism",
      },
    ],
  },
  {
    name: "Hawaii-Aleutian Time (HAT)",
    states: [
      {
        name: "Hawaii",
        abbr: "HI",
        capital: "Honolulu",
        governor: "Josh Green",
        sports: "University of Hawaii Rainbow Warriors",
        population: "1.42 million",
        companies: "Hawaiian Airlines, Bank of Hawaii, Hawaiian Electric Industries",
        industries: "Tourism, Defense, Agriculture",
      },
    ],
  },
]

export default function USMap() {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(timeZones[0].name)
  const [selectedState, setSelectedState] = useState<any>(null)
  const [showStates, setShowStates] = useState<boolean>(false)

  const handleTimeZoneClick = (zoneName: string) => {
    setSelectedTimeZone(zoneName)
    setShowStates(true)
    setSelectedState(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 text-purple-600">US States by Time Zone</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              All 50 US states organized by time zone to help with scheduling and recruitment planning.
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="lg:col-span-1">
              <Card className="shadow-lg h-full border-t-4 border-purple-500">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                  <CardTitle className="flex items-center gap-2 text-purple-700">
                    <MapPin className="h-5 w-5" />
                    Time Zones
                  </CardTitle>
                  <CardDescription>Click on a time zone to view states</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 py-2">
                    {timeZones.map((zone) => (
                      <Button
                        key={zone.name}
                        variant={selectedTimeZone === zone.name ? "default" : "outline"}
                        className={`w-full justify-start ${
                          selectedTimeZone === zone.name ? "bg-purple-600 hover:bg-purple-700" : "hover:bg-purple-50"
                        }`}
                        onClick={() => handleTimeZoneClick(zone.name)}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        {zone.name}
                        <Badge className="ml-auto">{zone.states.length}</Badge>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              {showStates && (
                <Card className="shadow-lg h-full border-t-4 border-purple-500 mb-6">
                  <CardHeader className="bg-gradient-to-r from-purple-50 to-purple-100">
                    <CardTitle className="flex items-center gap-2 text-purple-700">
                      <MapPin className="h-5 w-5" />
                      States in {selectedTimeZone}
                    </CardTitle>
                    <CardDescription>Click on a state to view detailed information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 py-2">
                      {timeZones
                        .find((zone) => zone.name === selectedTimeZone)
                        ?.states.map((state) => (
                          <Button
                            key={state.abbr}
                            variant={selectedState?.abbr === state.abbr ? "default" : "outline"}
                            className={`h-auto py-3 ${
                              selectedState?.abbr === state.abbr
                                ? "bg-purple-600 hover:bg-purple-700"
                                : "hover:bg-purple-50"
                            }`}
                            onClick={() => setSelectedState(state)}
                          >
                            <div className="flex flex-col items-center">
                              <span className="font-bold">{state.abbr}</span>
                              <span className="text-xs mt-1">{state.name}</span>
                            </div>
                          </Button>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {selectedState ? (
                <Card className="shadow-lg h-full">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="text-2xl">{selectedState.name}</CardTitle>
                        <CardDescription className="text-white/80">
                          {selectedState.abbr} - Click on another state to view its details
                        </CardDescription>
                      </div>
                      <div className="text-5xl font-bold">{selectedState.abbr}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <MapPin className="text-red-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Capital</h3>
                            <p>{selectedState.capital}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Landmark className="text-blue-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Governor</h3>
                            <p>{selectedState.governor}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Trophy className="text-yellow-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Sports Teams</h3>
                            <p>{selectedState.sports}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Users className="text-green-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Population</h3>
                            <p>{selectedState.population}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Building2 className="text-purple-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Major Companies</h3>
                            <p>{selectedState.companies}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Briefcase className="text-indigo-500 h-5 w-5 mt-1" />
                          <div>
                            <h3 className="font-semibold">Key Industries</h3>
                            <p>{selectedState.industries}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        Recruitment Insights
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedState.name} is home to various industries and talent pools. When recruiting in this
                        state, consider the local time zone for scheduling interviews and be aware of the major
                        companies that might be competing for the same talent.
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {timeZones.find((zone) => zone.states.some((s) => s.abbr === selectedState.abbr))?.name}
                        </Badge>
                        {selectedState.industries.split(", ").map((industry: string) => (
                          <Badge key={industry} className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="shadow-lg h-full flex items-center justify-center p-8 border-t-4 border-purple-500">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-purple-600 mb-2">
                      {showStates ? "Select a State" : "Select a Time Zone"}
                    </h3>
                    <p className="text-gray-500 max-w-md">
                      {showStates
                        ? "Click on any state from the list above to view detailed information about that state."
                        : "Click on a time zone from the list on the left to view states in that time zone."}
                    </p>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
