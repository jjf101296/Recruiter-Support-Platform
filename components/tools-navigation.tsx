import type React from "react"
import Link from "next/link"
import { Search, FileCheck, Map, StampIcon as Passport, FileText, Plane, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToolLinkProps {
  href: string
  icon: React.ReactNode
  title: string
  color: string
  bgColor: string
}

function ToolLink({ href, icon, title, color, bgColor }: ToolLinkProps) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 ${color} ${bgColor}`}
    >
      <div className={`mb-2 ${color.replace("border", "text")}`}>{icon}</div>
      <span className="text-center font-medium">{title}</span>
    </Link>
  )
}

export function ToolsNavigation({
  showHomeLink = false,
  showTools = true,
}: { showHomeLink?: boolean; showTools?: boolean }) {
  return (
    <div className="w-full">
      {showHomeLink && (
        <div className="mb-6 flex justify-start">
          <Button
            asChild
            className="bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600 text-white px-6 py-2 rounded-full shadow-md group"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </Button>
        </div>
      )}

      {showTools && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <ToolLink
            href="/boolean-search"
            icon={<Search size={24} />}
            title="AI Boolean Search Generator"
            color="border-blue-500"
            bgColor="hover:bg-blue-50"
          />
          <ToolLink
            href="/ats-checker"
            icon={<FileCheck size={24} />}
            title="AI ATS Checker"
            color="border-green-500"
            bgColor="hover:bg-green-50"
          />
          <ToolLink
            href="/us-map"
            icon={<Map size={24} />}
            title="US Map"
            color="border-purple-500"
            bgColor="hover:bg-purple-50"
          />
          <ToolLink
            href="/visa-types"
            icon={<Passport size={24} />}
            title="US VISA Types"
            color="border-amber-500"
            bgColor="hover:bg-amber-50"
          />
          <ToolLink
            href="/tax-terms"
            icon={<FileText size={24} />}
            title="US Tax Terms"
            color="border-red-500"
            bgColor="hover:bg-red-50"
          />
          <ToolLink
            href="/i94-history"
            icon={<Plane size={24} />}
            title="I94/Travel History"
            color="border-cyan-500"
            bgColor="hover:bg-cyan-50"
          />
        </div>
      )}
    </div>
  )
}
