import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (

<body>
  <div className="relative h-screen bg-gradient-to-r from-slate-500 to-slate-200">
    <div className="absolute inset-0 flex items-center justify-center text-white">
      <div className= "bg-transparent p-8 rounded-2xl border-2 border-white shadow-lg">
        <h1 className="text-white text-4xl font-bold relative z-0 flex">William O&apos;Halloran</h1>
        <nav className="mt-4 text-center">
          <Link href="/about" className="mr-4 hover:underline">About</Link>
          <Link href="/projects" className="mr-4 hover:underline">Project</Link>
          <Link href="/contacts" className="hover:underline">Contacts</Link>
        </nav>
      </div>
    </div>
  </div>
</body>
  )
} 