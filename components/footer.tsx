import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">&copy; 2025 Recruiter Support Platform</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <div>
              Created by{" "}
              <Link
                href="https://www.linkedin.com/in/john-francis-eeemba/"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                John Francis
              </Link>
            </div>
            <div>
              Contact:{" "}
              <a href="mailto:jjf101296@gmail.com" className="text-blue-400 hover:text-blue-300">
                jjf101296@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
