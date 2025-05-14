"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function Header() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [usdAmount, setUsdAmount] = useState<string>("1")
  const [inrAmount, setInrAmount] = useState<string>("82.50") // Default rate
  const [exchangeRate, setExchangeRate] = useState<number>(82.5) // Default rate

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate fetching exchange rate (in a real app, you would use an API)
  useEffect(() => {
    // Simulate API call with a slight random variation to make it look "live"
    const fetchExchangeRate = () => {
      const baseRate = 82.5
      const variation = Math.random() * 0.5 - 0.25 // Random variation between -0.25 and 0.25
      const newRate = (baseRate + variation).toFixed(2)
      setExchangeRate(Number.parseFloat(newRate))

      if (usdAmount) {
        setInrAmount((Number.parseFloat(usdAmount) * Number.parseFloat(newRate)).toFixed(2))
      }
    }

    fetchExchangeRate()
    const interval = setInterval(fetchExchangeRate, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [usdAmount])

  // Format time for different time zones
  const formatTimeForZone = (timeZone: string) => {
    return currentTime.toLocaleTimeString("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  // Handle USD to INR conversion
  const handleUsdChange = (value: string) => {
    setUsdAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      setInrAmount((Number.parseFloat(value) * exchangeRate).toFixed(2))
    } else {
      setInrAmount("")
    }
  }

  const handleInrChange = (value: string) => {
    setInrAmount(value)
    if (value && !isNaN(Number.parseFloat(value))) {
      setUsdAmount((Number.parseFloat(value) / exchangeRate).toFixed(2))
    } else {
      setUsdAmount("")
    }
  }

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
            <div className="flex flex-col items-center px-2">
              <span className="font-bold">EST</span>
              <span>{formatTimeForZone("America/New_York")}</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="font-bold">CST</span>
              <span>{formatTimeForZone("America/Chicago")}</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="font-bold">MST</span>
              <span>{formatTimeForZone("America/Denver")}</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="font-bold">PST</span>
              <span>{formatTimeForZone("America/Los_Angeles")}</span>
            </div>
            <div className="flex flex-col items-center px-2">
              <span className="font-bold">IST</span>
              <span>{formatTimeForZone("Asia/Kolkata")}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="font-bold">Current Time</div>
              <div className="text-xl tabular-nums">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: true,
                })}
              </div>
            </div>

            <Card className="bg-white/10 border-none">
              <CardContent className="p-3">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="usd" className="text-white">
                      USD
                    </Label>
                    <Input
                      id="usd"
                      type="number"
                      value={usdAmount}
                      onChange={(e) => handleUsdChange(e.target.value)}
                      className="w-24 bg-white/20 text-white border-white/30"
                    />
                  </div>
                  <div className="text-xl font-bold">=</div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="inr" className="text-white">
                      INR
                    </Label>
                    <Input
                      id="inr"
                      type="number"
                      value={inrAmount}
                      onChange={(e) => handleInrChange(e.target.value)}
                      className="w-24 bg-white/20 text-white border-white/30"
                    />
                  </div>
                  <div className="text-xs opacity-80">Rate: 1 USD = {exchangeRate.toFixed(2)} INR</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
